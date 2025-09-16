# PC Agent Security Migration Guide

## ⚠️ IMPORTANT: Security Update Required

The original `pc-agent.js` has been **disabled** due to critical security vulnerabilities. Please migrate to the secure version immediately.

## Quick Start with Secure Agent

### 1. Start the Secure Agent
```bash
# Auto-generate API key
node scripts/pc-agent-secure.js

# Or provide your own API key  
node scripts/pc-agent-secure.js "your-secret-key-here"
```

### 2. Save the API Key
The agent will display an API key on startup:
```
[Secure PC Agent] API Key: abc123def456...
[Secure PC Agent] Save this key for authentication
```

**Important**: Save this key securely - you'll need it for all requests.

### 3. Test the Agent
```bash
# Run security tests
node scripts/test-secure-agent.js "your-api-key"
```

## Making Requests

### JavaScript/Node.js Example:
```javascript
const http = require('http')

function makeSecureRequest(action, params = {}, apiKey) {
  const data = JSON.stringify({
    action: action,
    params: params,
    apiKey: apiKey
  })
  
  const options = {
    hostname: 'localhost',
    port: 3001,
    path: '/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  const req = http.request(options, (res) => {
    let body = ''
    res.on('data', chunk => body += chunk)
    res.on('end', () => {
      console.log(JSON.parse(body))
    })
  })
  
  req.write(data)
  req.end()
}

// Usage
makeSecureRequest('get_system_info', {}, 'your-api-key')
```

### cURL Example:
```bash
curl -X POST http://localhost:3001/ \
  -H "Content-Type: application/json" \
  -d '{
    "action": "get_system_info",
    "params": {},
    "apiKey": "your-api-key"
  }'
```

## Available Actions

### 1. get_system_info
Returns basic system information (sanitized for security).

**Request:**
```json
{
  "action": "get_system_info",
  "params": {},
  "apiKey": "your-key"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "os": "Linux",
    "platform": "linux",
    "memory": "8 GB",
    "uptime": "2 days, 3 hours, 45 minutes",
    "hostname": "computer-name",
    "arch": "x64",
    "nodeVersion": "v20.19.5"
  }
}
```

### 2. list_files
List files in safe directories only.

**Request:**
```json
{
  "action": "list_files", 
  "params": {
    "path": "/home/user/Documents"
  },
  "apiKey": "your-key"
}
```

**Safe Directories:**
- `~/Documents`
- `~/Desktop` 
- `~/Downloads`
- `~` (home directory)

### 3. execute_command
Execute safe commands only.

**Request:**
```json
{
  "action": "execute_command",
  "params": {
    "command": "echo 'Hello World'"
  },
  "apiKey": "your-key"
}
```

**Allowed Commands:**
- `echo` - Display text
- `date` - Show date/time
- `whoami` - Show current user
- `pwd` - Show current directory
- `ls` / `dir` - List directory contents

### 4. get_running_processes
Returns limited process information (mostly hidden for security).

## Security Features

✅ **API Key Authentication** - All requests require valid API key  
✅ **Rate Limiting** - 60 requests per minute per IP  
✅ **Command Whitelisting** - Only safe commands allowed  
✅ **Path Restrictions** - Limited to safe directories  
✅ **Input Validation** - All inputs sanitized  
✅ **Local Access Only** - Binds to localhost only  
✅ **Request Size Limits** - Prevents DoS attacks  
✅ **Timeout Protection** - Commands timeout after 10s  
✅ **Process Restrictions** - Limited system information  
✅ **Error Handling** - No information leakage  

## Error Responses

### Invalid API Key:
```json
{
  "success": false,
  "error": "Invalid or missing API key"
}
```

### Command Not Allowed:
```json
{
  "success": false,
  "error": "Command 'rm' not allowed - only safe commands permitted"
}
```

### Path Not Allowed:
```json
{
  "success": false,
  "error": "Path not allowed - restricted to safe directories"
}
```

### Rate Limited:
```json
{
  "success": false,
  "error": "Rate limit exceeded. Please wait before making more requests."
}
```

## Troubleshooting

### Agent Won't Start
- Check if port 3001 is available
- Ensure you have Node.js installed
- Run: `node --version` to verify

### Authentication Errors
- Verify you're using the correct API key
- Check that the `apiKey` field is included in requests
- Make sure the API key matches exactly (case-sensitive)

### Command/Path Errors
- Only whitelisted commands are allowed
- Only safe directories can be accessed
- Check the allowed lists in this guide

### Connection Errors
- Agent only accepts localhost connections
- Use `http://localhost:3001` or `http://127.0.0.1:3001`
- Don't use your external IP address

## Best Practices

1. **Keep API Keys Secret** - Never commit them to code repositories
2. **Rotate Keys Regularly** - Generate new keys periodically  
3. **Monitor Usage** - Watch agent logs for suspicious activity
4. **Run with Minimal Privileges** - Don't run as administrator/root
5. **Use Firewall Rules** - Block external access to port 3001
6. **Update Dependencies** - Keep Node.js and packages updated

## Support

For issues with the secure agent:
1. Check this migration guide
2. Review `SECURITY.md`
3. Run the test script: `node scripts/test-secure-agent.js`
4. Check agent logs for error messages