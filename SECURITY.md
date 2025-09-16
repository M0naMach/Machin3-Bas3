# ⚠️ SECURITY CONFIGURATION FOR PC AGENT ⚠️

## CRITICAL SECURITY NOTICE

The original `pc-agent.js` script contains **CRITICAL SECURITY VULNERABILITIES** that make it unsafe for production use. It has been replaced with `pc-agent-secure.js`.

## Security Issues in Original Agent

### 🚨 CRITICAL VULNERABILITIES:
1. **Command Injection** - Allows arbitrary command execution
2. **Path Traversal** - Unrestricted file system access
3. **No Authentication** - Anyone can access the agent
4. **Information Disclosure** - Exposes system details to anyone
5. **CORS Wildcard** - Accepts requests from any origin
6. **No Rate Limiting** - Vulnerable to DoS attacks

## Secure Usage

### Use the Secure Agent:
```bash
# Generate API key automatically
node scripts/pc-agent-secure.js

# Or provide your own API key
node scripts/pc-agent-secure.js "your-secret-api-key-here"
```

### Security Features in Secure Agent:
- ✅ **API Key Authentication** - Required for all requests
- ✅ **Rate Limiting** - 60 requests per minute per IP
- ✅ **Command Whitelisting** - Only safe commands allowed
- ✅ **Path Restrictions** - Limited to Documents/Desktop/Downloads
- ✅ **Input Validation** - All inputs sanitized
- ✅ **Local Access Only** - Binds to localhost only
- ✅ **Request Size Limits** - Prevents DoS attacks
- ✅ **Process Restrictions** - Limited process information
- ✅ **Error Handling** - Secure error messages
- ✅ **Timeout Protection** - Commands timeout after 10s

### Client Request Format:
```javascript
{
  "action": "get_system_info",
  "params": {},
  "apiKey": "your-api-key-here"
}
```

## Allowed Actions

1. **get_system_info** - Basic system information (sanitized)
2. **list_files** - List files in safe directories only
3. **execute_command** - Execute whitelisted commands only
4. **get_running_processes** - Limited process info (mostly hidden)

## Allowed Commands
- `echo` - Display text
- `date` - Show current date/time
- `whoami` - Show current user
- `pwd` - Show current directory
- `ls` / `dir` - List directory contents

## Safe Directories
- ~/Documents
- ~/Desktop
- ~/Downloads

## Migration Guide

### For Developers:
1. Replace `pc-agent.js` usage with `pc-agent-secure.js`
2. Add API key to client requests
3. Update client code to handle authentication
4. Test with restricted permissions

### For Users:
1. Stop the old agent if running
2. Start the secure agent: `node scripts/pc-agent-secure.js`
3. Save the displayed API key
4. Use API key in client applications

## Security Best Practices

1. **Never share API keys** in code repositories
2. **Rotate API keys regularly** 
3. **Monitor logs** for suspicious activity
4. **Run with minimal privileges**
5. **Keep dependencies updated**
6. **Use firewall rules** to restrict network access
7. **Enable logging** for audit trails

## Incident Response

If you suspect the agent has been compromised:
1. Stop the agent immediately (`Ctrl+C`)
2. Generate a new API key
3. Check system logs for unauthorized activity
4. Update any client applications with new key
5. Consider running security scans

## Security Updates

This secure version addresses:
- CVE-related command injection vulnerabilities
- Path traversal attacks
- Authentication bypass
- Information disclosure
- Cross-origin attacks
- Denial of service attacks

## Support

For security-related issues or questions:
1. Check this configuration file
2. Review the secure agent code
3. Test in a safe environment first
4. Report security issues responsibly