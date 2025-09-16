#!/usr/bin/env node
// Test script for the secure PC agent
// Run this after starting pc-agent-secure.js

const http = require('http')

// Test configuration
const API_KEY = process.argv[2] || 'test-key-please-replace'
const HOST = 'localhost'
const PORT = 3001

console.log('🧪 Testing Secure PC Agent...')
console.log(`Using API Key: ${API_KEY}`)

function makeRequest(action, params = {}) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      action,
      params,
      apiKey: API_KEY
    })

    const options = {
      hostname: HOST,
      port: PORT,
      path: '/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    }

    const req = http.request(options, (res) => {
      let body = ''
      res.on('data', (chunk) => body += chunk)
      res.on('end', () => {
        try {
          resolve({
            status: res.statusCode,
            data: JSON.parse(body)
          })
        } catch (error) {
          resolve({
            status: res.statusCode,
            data: body
          })
        }
      })
    })

    req.on('error', reject)
    req.write(data)
    req.end()
  })
}

async function runTests() {
  const tests = [
    {
      name: '✅ Get System Info',
      action: 'get_system_info',
      params: {}
    },
    {
      name: '✅ List Safe Directory',
      action: 'list_files',
      params: { path: process.env.HOME || process.cwd() }
    },
    {
      name: '✅ Execute Safe Command',
      action: 'execute_command',
      params: { command: 'echo "Hello Secure Agent"' }
    },
    {
      name: '❌ Test Invalid Command (should fail)',
      action: 'execute_command',
      params: { command: 'rm -rf /' }
    },
    {
      name: '❌ Test Path Traversal (should fail)',
      action: 'list_files',
      params: { path: '/etc/passwd' }
    },
    {
      name: '❌ Test No API Key (should fail)',
      action: 'get_system_info',
      params: {},
      skipApiKey: true
    }
  ]

  console.log('\n🔍 Running Security Tests...\n')

  for (const test of tests) {
    try {
      console.log(`Running: ${test.name}`)
      
      if (test.skipApiKey) {
        // Test without API key
        const result = await new Promise((resolve, reject) => {
          const data = JSON.stringify({
            action: test.action,
            params: test.params
            // No apiKey field
          })

          const options = {
            hostname: HOST,
            port: PORT,
            path: '/',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Content-Length': Buffer.byteLength(data)
            }
          }

          const req = http.request(options, (res) => {
            let body = ''
            res.on('data', (chunk) => body += chunk)
            res.on('end', () => {
              try {
                resolve({
                  status: res.statusCode,
                  data: JSON.parse(body)
                })
              } catch (error) {
                resolve({
                  status: res.statusCode,
                  data: body
                })
              }
            })
          })

          req.on('error', reject)
          req.write(data)
          req.end()
        })

        if (result.data.success === false && (result.data.error.includes('API key') || result.data.error.includes('Invalid request'))) {
          console.log(`  ✅ PASS: ${result.data.error}`)
        } else {
          console.log(`  ❌ FAIL: Should have been rejected, got: ${JSON.stringify(result.data)}`)
        }
      } else {
        const result = await makeRequest(test.action, test.params)
        
        if (test.name.startsWith('❌')) {
          // Should fail
          if (result.data.success === false) {
            console.log(`  ✅ PASS: ${result.data.error}`)
          } else {
            console.log(`  ❌ FAIL: Should have been rejected`)
          }
        } else {
          // Should succeed
          if (result.data.success === true) {
            console.log(`  ✅ PASS: Request succeeded`)
            if (test.action === 'get_system_info') {
              console.log(`    Platform: ${result.data.data.platform}`)
              console.log(`    OS: ${result.data.data.os}`)
            }
          } else {
            console.log(`  ❌ FAIL: ${result.data.error}`)
          }
        }
      }
    } catch (error) {
      if (error.code === 'ECONNREFUSED') {
        console.log('  ⚠️  SKIP: Agent not running. Start with: node scripts/pc-agent-secure.js')
        break
      }
      console.log(`  ❌ ERROR: ${error.message}`)
    }
    
    console.log('')
  }

  console.log('🏁 Testing completed!')
  console.log('\n📋 Security Test Summary:')
  console.log('• System info should work with valid API key')
  console.log('• File listing should be restricted to safe directories')
  console.log('• Command execution should be limited to safe commands')
  console.log('• Dangerous commands should be rejected')
  console.log('• Path traversal attempts should be blocked')
  console.log('• Requests without API key should be rejected')
}

if (require.main === module) {
  runTests().catch(console.error)
}

module.exports = { makeRequest, runTests }