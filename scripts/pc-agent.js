// ⚠️ SECURITY WARNING: This script contains CRITICAL VULNERABILITIES ⚠️
// DO NOT USE IN PRODUCTION - Use pc-agent-secure.js instead
// 
// CRITICAL ISSUES:
// - Command Injection: Allows arbitrary command execution
// - Path Traversal: Unrestricted file system access  
// - No Authentication: Anyone can access this agent
// - Information Disclosure: Exposes system details
// - CORS Wildcard: Accepts requests from any origin
//
// For secure usage, use: node scripts/pc-agent-secure.js
//
// PC Local Agent - INSECURE VERSION - DO NOT USE

const fs = require("fs")
const path = require("path")
const os = require("os")
const { exec } = require("child_process")
const http = require("http")

class PCAgent {
  constructor() {
    this.port = 3001
    this.aiMentorUrl = "http://localhost:3000" // Your AI mentor URL
    this.isConnected = false
    this.platform = os.platform()
  }

  // Get system information with error handling
  getSystemInfo() {
    try {
      return {
        os: `${os.type()} ${os.release()}`,
        platform: this.platform,
        cpu: os.cpus()[0]?.model || "Unknown CPU",
        memory: `${Math.round(os.totalmem() / 1024 / 1024 / 1024)} GB`,
        disk: this.getDiskSpace(),
        uptime: this.formatUptime(os.uptime()),
        hostname: os.hostname(),
      }
    } catch (error) {
      console.error("Error getting system info:", error)
      return { error: "Failed to get system information" }
    }
  }

  // Get disk space information with error handling
  getDiskSpace() {
    try {
      const stats = fs.statSync(os.homedir())
      return "Available" // Simplified for demo
    } catch (error) {
      return "Unknown"
    }
  }

  // List files in directory
  listFiles(dirPath) {
    try {
      const files = fs.readdirSync(dirPath)
      return files.map((file) => {
        const filePath = path.join(dirPath, file)
        const stats = fs.statSync(filePath)
        return {
          name: file,
          type: stats.isDirectory() ? "folder" : "file",
          size: stats.isFile() ? `${Math.round(stats.size / 1024)} KB` : null,
          modified: stats.mtime.toISOString().split("T")[0],
        }
      })
    } catch (error) {
      console.error("Error listing files:", error)
      return []
    }
  }

  // Execute command
  executeCommand(command) {
    return new Promise((resolve) => {
      exec(command, (error, stdout, stderr) => {
        resolve({
          command,
          output: stdout || stderr || "Command completed",
          exitCode: error ? error.code : 0,
        })
      })
    })
  }

  // Get running processes with cross-platform support
  getRunningProcesses() {
    return new Promise((resolve) => {
      let command
      if (this.platform === "win32") {
        command = "tasklist /fo csv"
      } else if (this.platform === "darwin") {
        command = "ps aux | head -10"
      } else {
        command = "ps aux | head -10"
      }

      exec(command, (error, stdout) => {
        if (error) {
          console.error("Error getting processes:", error)
          resolve([{ name: "Error getting processes", pid: 0, cpu: "0%", memory: "0 KB" }])
          return
        }

        try {
          if (this.platform === "win32") {
            const lines = stdout.split("\n").slice(1, 10)
            const processes = lines
              .map((line) => {
                const parts = line.split(",")
                if (parts.length >= 2) {
                  return {
                    name: parts[0]?.replace(/"/g, "") || "Unknown",
                    pid: Number.parseInt(parts[1]?.replace(/"/g, "")) || 0,
                    cpu: "0%",
                    memory: parts[4]?.replace(/"/g, "") || "0 KB",
                  }
                }
                return null
              })
              .filter(Boolean)
            resolve(processes)
          } else {
            // Unix-like systems
            const lines = stdout.split("\n").slice(1, 10)
            const processes = lines
              .map((line) => {
                const parts = line.trim().split(/\s+/)
                if (parts.length >= 11) {
                  return {
                    name: parts[10] || "Unknown",
                    pid: Number.parseInt(parts[1]) || 0,
                    cpu: parts[2] || "0%",
                    memory: parts[3] || "0%",
                  }
                }
                return null
              })
              .filter(Boolean)
            resolve(processes)
          }
        } catch (parseError) {
          console.error("Error parsing processes:", parseError)
          resolve([{ name: "Parse error", pid: 0, cpu: "0%", memory: "0 KB" }])
        }
      })
    })
  }

  // Format uptime in human readable format
  formatUptime(seconds) {
    const days = Math.floor(seconds / 86400)
    const hours = Math.floor((seconds % 86400) / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    return `${days} days, ${hours} hours, ${minutes} minutes`
  }

  // Start the local agent server with better error handling
  start() {
    const server = http.createServer(async (req, res) => {
      try {
        // Enable CORS
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        res.setHeader("Access-Control-Allow-Headers", "Content-Type")

        if (req.method === "OPTIONS") {
          res.writeHead(200)
          res.end()
          return
        }

        if (req.method === "POST") {
          let body = ""
          req.on("data", (chunk) => (body += chunk))
          req.on("end", async () => {
            try {
              const { action, params } = JSON.parse(body)
              console.log(`[PC Agent] Executing action: ${action}`)
              let result

              switch (action) {
                case "get_system_info":
                  result = { success: true, data: this.getSystemInfo() }
                  break

                case "list_files":
                  const targetPath = params?.path || os.homedir()
                  const files = this.listFiles(targetPath)
                  result = { success: true, data: { path: targetPath, files } }
                  break

                case "execute_command":
                  const cmdResult = await this.executeCommand(params?.command || "echo 'No command provided'")
                  result = { success: true, data: cmdResult }
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
              console.error("[PC Agent] Error processing request:", error)
              res.writeHead(500, { "Content-Type": "application/json" })
              res.end(JSON.stringify({ success: false, error: error.message }))
            }
          })
        } else {
          res.writeHead(200, { "Content-Type": "application/json" })
          res.end(
            JSON.stringify({
              success: true,
              status: "PC Agent running",
              platform: this.platform,
              lastSeen: new Date().toISOString(),
            }),
          )
        }
      } catch (error) {
        console.error("[PC Agent] Server error:", error)
        res.writeHead(500, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ success: false, error: "Server error" }))
      }
    })

    server.listen(this.port, () => {
      console.log(`[PC Agent] Running on port ${this.port}`)
      console.log(`[PC Agent] Platform: ${this.platform}`)
      console.log("[PC Agent] Your AI mentor can now access this PC remotely")
      console.log("[PC Agent] Press Ctrl+C to stop the agent")
      this.isConnected = true
    })

    // Graceful shutdown
    process.on("SIGINT", () => {
      console.log("\nShutting down PC Agent...")
      server.close(() => {
        console.log("PC Agent stopped")
        process.exit(0)
      })
    })
  }
}

// ⚠️ SECURITY WARNING: This agent is INSECURE and should NOT be used ⚠️
console.error("=" .repeat(80))
console.error("⚠️  CRITICAL SECURITY WARNING  ⚠️")
console.error("=" .repeat(80))
console.error("")
console.error("This pc-agent.js contains CRITICAL SECURITY VULNERABILITIES:")
console.error("• Command Injection - Allows arbitrary command execution")
console.error("• Path Traversal - Unrestricted file system access")
console.error("• No Authentication - Anyone can access this agent")
console.error("• Information Disclosure - Exposes system details")
console.error("• CORS Wildcard - Accepts requests from any origin")
console.error("")
console.error("🛡️  USE THE SECURE VERSION INSTEAD:")
console.error("   node scripts/pc-agent-secure.js")
console.error("")
console.error("See SECURITY.md for detailed security information")
console.error("=" .repeat(80))
console.error("")

// Refuse to start the insecure version
console.error("Refusing to start insecure agent. Exiting...")
process.exit(1)

// Original insecure code commented out for reference
/*
try {
  const agent = new PCAgent()
  agent.start()
} catch (error) {
  console.error("[PC Agent] Failed to start:", error)
  process.exit(1)
}
*/
