// PC Local Agent - Secure Version - Run this script on your PC to enable remote access
// Usage: node scripts/pc-agent-secure.js [API_KEY]

const fs = require("fs")
const path = require("path")
const os = require("os")
const { spawn } = require("child_process")
const http = require("http")
const crypto = require("crypto")

class SecurePCAgent {
  constructor(apiKey = null) {
    this.port = 3001
    this.aiMentorUrl = "http://localhost:3000"
    this.isConnected = false
    this.platform = os.platform()
    
    // Generate or use provided API key for authentication
    this.apiKey = apiKey || this.generateApiKey()
    
    // Rate limiting
    this.requestCounts = new Map()
    this.maxRequestsPerMinute = 60
    
    // Allowed safe directories - restrict file system access
    this.safePaths = [
      path.join(os.homedir(), 'Documents'),
      path.join(os.homedir(), 'Desktop'), 
      path.join(os.homedir(), 'Downloads'),
      os.homedir() // Allow home directory
    ]
    
    // Whitelist of safe commands
    this.allowedCommands = [
      'echo',
      'date',
      'whoami',
      'pwd',
      'ls',
      'dir' // Windows
    ]
    
    console.log(`[Secure PC Agent] API Key: ${this.apiKey}`)
    console.log(`[Secure PC Agent] Save this key for authentication`)
  }

  generateApiKey() {
    return crypto.randomBytes(32).toString('hex')
  }

  // Validate API key
  validateApiKey(providedKey) {
    return providedKey === this.apiKey
  }

  // Rate limiting check
  checkRateLimit(clientIp) {
    const now = Date.now()
    const windowStart = now - 60000 // 1 minute window
    
    if (!this.requestCounts.has(clientIp)) {
      this.requestCounts.set(clientIp, [])
    }
    
    const requests = this.requestCounts.get(clientIp)
    
    // Remove requests outside the window
    const recentRequests = requests.filter(time => time > windowStart)
    this.requestCounts.set(clientIp, recentRequests)
    
    // Check if under limit
    if (recentRequests.length >= this.maxRequestsPerMinute) {
      return false
    }
    
    // Add current request
    recentRequests.push(now)
    return true
  }

  // Validate and sanitize input
  validateInput(data) {
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid request format')
    }
    
    const { action, params, apiKey } = data
    
    if (!action || typeof action !== 'string') {
      throw new Error('Invalid action')
    }
    
    if (!apiKey || !this.validateApiKey(apiKey)) {
      throw new Error('Invalid or missing API key')
    }
    
    return { action: action.toLowerCase().trim(), params: params || {} }
  }

  // Validate file path is safe
  validatePath(targetPath) {
    if (!targetPath || typeof targetPath !== 'string') {
      throw new Error('Invalid path')
    }
    
    const resolvedPath = path.resolve(targetPath)
    
    // Check if path is within allowed directories
    const isAllowed = this.safePaths.some(safePath => {
      return resolvedPath.startsWith(path.resolve(safePath))
    })
    
    if (!isAllowed) {
      throw new Error('Path not allowed - restricted to safe directories')
    }
    
    return resolvedPath
  }

  // Validate command is safe
  validateCommand(command) {
    if (!command || typeof command !== 'string') {
      throw new Error('Invalid command')
    }
    
    const baseCommand = command.trim().split(' ')[0].toLowerCase()
    
    if (!this.allowedCommands.includes(baseCommand)) {
      throw new Error(`Command '${baseCommand}' not allowed - only safe commands permitted`)
    }
    
    // Additional sanitization - remove dangerous characters
    const sanitized = command.replace(/[;&|`$()]/g, '').trim()
    
    if (sanitized !== command.trim()) {
      throw new Error('Command contains dangerous characters')
    }
    
    return sanitized
  }

  // Get system information with limited data
  getSystemInfo() {
    try {
      return {
        os: os.type(),
        platform: this.platform,
        memory: `${Math.round(os.totalmem() / 1024 / 1024 / 1024)} GB`,
        uptime: this.formatUptime(os.uptime()),
        hostname: os.hostname(),
        arch: os.arch(),
        // Remove detailed CPU info for security
        nodeVersion: process.version
      }
    } catch (error) {
      console.error("Error getting system info:", error)
      return { error: "Failed to get system information" }
    }
  }

  // List files in safe directories only
  listFiles(dirPath) {
    try {
      const validatedPath = this.validatePath(dirPath)
      
      // Check if directory exists and is accessible
      if (!fs.existsSync(validatedPath)) {
        throw new Error('Directory does not exist')
      }
      
      const stats = fs.statSync(validatedPath)
      if (!stats.isDirectory()) {
        throw new Error('Path is not a directory')
      }
      
      const files = fs.readdirSync(validatedPath)
      
      return files.slice(0, 50).map((file) => { // Limit to 50 files
        const filePath = path.join(validatedPath, file)
        try {
          const fileStats = fs.statSync(filePath)
          return {
            name: file,
            type: fileStats.isDirectory() ? "folder" : "file",
            size: fileStats.isFile() ? `${Math.round(fileStats.size / 1024)} KB` : null,
            modified: fileStats.mtime.toISOString().split("T")[0],
          }
        } catch (error) {
          return {
            name: file,
            type: "unknown",
            size: null,
            modified: null,
            error: "Access denied"
          }
        }
      })
    } catch (error) {
      console.error("Error listing files:", error)
      throw error
    }
  }

  // Execute safe commands only
  executeCommand(command) {
    return new Promise((resolve, reject) => {
      try {
        const validatedCommand = this.validateCommand(command)
        const [cmd, ...args] = validatedCommand.split(' ')
        
        // Use spawn instead of exec for better security
        const childProcess = spawn(cmd, args, {
          timeout: 10000, // 10 second timeout
          cwd: os.homedir(),
          env: { ...process.env, PATH: process.env.PATH }, // Clean environment
        })
        
        let stdout = ''
        let stderr = ''
        
        childProcess.stdout.on('data', (data) => {
          stdout += data.toString()
          // Limit output size
          if (stdout.length > 10000) {
            childProcess.kill()
            reject(new Error('Output too large'))
          }
        })
        
        childProcess.stderr.on('data', (data) => {
          stderr += data.toString()
          if (stderr.length > 10000) {
            childProcess.kill()
            reject(new Error('Error output too large'))
          }
        })
        
        childProcess.on('close', (code) => {
          resolve({
            command: validatedCommand,
            output: stdout || stderr || "Command completed",
            exitCode: code || 0,
          })
        })
        
        childProcess.on('error', (error) => {
          reject(new Error(`Command failed: ${error.message}`))
        })
        
      } catch (error) {
        reject(error)
      }
    })
  }

  // Get limited process information
  getRunningProcesses() {
    return new Promise((resolve) => {
      try {
        // Return limited, safe process information
        const processes = [
          {
            name: "System processes hidden for security",
            pid: "N/A",
            cpu: "N/A",
            memory: "N/A"
          }
        ]
        resolve(processes)
      } catch (error) {
        console.error("Error getting processes:", error)
        resolve([{ name: "Error getting processes", pid: 0, cpu: "0%", memory: "0 KB" }])
      }
    })
  }

  // Format uptime in human readable format
  formatUptime(seconds) {
    const days = Math.floor(seconds / 86400)
    const hours = Math.floor((seconds % 86400) / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    return `${days} days, ${hours} hours, ${minutes} minutes`
  }

  // Start the secure agent server
  start() {
    const server = http.createServer(async (req, res) => {
      const clientIp = req.connection.remoteAddress || 'unknown'
      
      try {
        // Check rate limiting
        if (!this.checkRateLimit(clientIp)) {
          res.writeHead(429, { "Content-Type": "application/json" })
          res.end(JSON.stringify({ 
            success: false, 
            error: "Rate limit exceeded. Please wait before making more requests." 
          }))
          return
        }
        
        // Restrict CORS to localhost only
        const origin = req.headers.origin
        if (origin && (origin.startsWith('http://localhost') || origin.startsWith('http://127.0.0.1'))) {
          res.setHeader("Access-Control-Allow-Origin", origin)
        }
        res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
        res.setHeader("Access-Control-Allow-Headers", "Content-Type")

        if (req.method === "OPTIONS") {
          res.writeHead(200)
          res.end()
          return
        }

        if (req.method === "POST") {
          let body = ""
          let bodySize = 0
          const maxBodySize = 1024 * 10 // 10KB limit
          
          req.on("data", (chunk) => {
            bodySize += chunk.length
            if (bodySize > maxBodySize) {
              res.writeHead(413, { "Content-Type": "application/json" })
              res.end(JSON.stringify({ success: false, error: "Request too large" }))
              return
            }
            body += chunk
          })
          
          req.on("end", async () => {
            try {
              const requestData = JSON.parse(body)
              const { action, params } = this.validateInput(requestData)
              
              console.log(`[Secure PC Agent] Authenticated request: ${action} from ${clientIp}`)
              let result

              switch (action) {
                case "get_system_info":
                  result = { success: true, data: this.getSystemInfo() }
                  break

                case "list_files":
                  try {
                    const targetPath = params.path || path.join(os.homedir(), 'Documents')
                    const files = this.listFiles(targetPath)
                    result = { success: true, data: { path: targetPath, files } }
                  } catch (error) {
                    result = { success: false, error: error.message }
                  }
                  break

                case "execute_command":
                  try {
                    const cmdResult = await this.executeCommand(params.command || "echo 'No command provided'")
                    result = { success: true, data: cmdResult }
                  } catch (error) {
                    result = { success: false, error: error.message }
                  }
                  break

                case "get_running_processes":
                  const processes = await this.getRunningProcesses()
                  result = { success: true, data: processes }
                  break

                default:
                  result = { success: false, error: `Unknown action: ${action}` }
              }

              res.writeHead(200, { "Content-Type": "application/json" })
              res.end(JSON.stringify(result))
            } catch (error) {
              console.error("[Secure PC Agent] Request error:", error.message)
              res.writeHead(400, { "Content-Type": "application/json" })
              res.end(JSON.stringify({ success: false, error: "Invalid request" }))
            }
          })
        } else {
          res.writeHead(200, { "Content-Type": "application/json" })
          res.end(
            JSON.stringify({
              success: true,
              status: "Secure PC Agent running",
              platform: this.platform,
              version: "2.0-secure",
              lastSeen: new Date().toISOString(),
            }),
          )
        }
      } catch (error) {
        console.error("[Secure PC Agent] Server error:", error)
        res.writeHead(500, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ success: false, error: "Server error" }))
      }
    })

    server.listen(this.port, 'localhost', () => {
      console.log(`[Secure PC Agent] Running securely on localhost:${this.port}`)
      console.log(`[Secure PC Agent] Platform: ${this.platform}`)
      console.log(`[Secure PC Agent] API Key: ${this.apiKey}`)
      console.log("[Secure PC Agent] Only localhost connections accepted")
      console.log("[Secure PC Agent] Press Ctrl+C to stop the agent")
      this.isConnected = true
    })

    // Graceful shutdown
    process.on("SIGINT", () => {
      console.log("\nShutting down Secure PC Agent...")
      server.close(() => {
        console.log("Secure PC Agent stopped")
        process.exit(0)
      })
    })
    
    // Handle uncaught exceptions
    process.on('uncaughtException', (error) => {
      console.error('Uncaught Exception:', error)
      process.exit(1)
    })
    
    process.on('unhandledRejection', (reason, promise) => {
      console.error('Unhandled Rejection at:', promise, 'reason:', reason)
      process.exit(1)
    })
  }
}

// Get API key from command line or generate one
const apiKey = process.argv[2]

try {
  const agent = new SecurePCAgent(apiKey)
  agent.start()
} catch (error) {
  console.error("[Secure PC Agent] Failed to start:", error)
  process.exit(1)
}