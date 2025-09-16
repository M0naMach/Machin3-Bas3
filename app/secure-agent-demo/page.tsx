"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input" 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SecureAgentDemo() {
  const [apiKey, setApiKey] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  const makeRequest = async (action: string, params: any = {}) => {
    if (!apiKey.trim()) {
      setResponse("Please enter your API key first")
      return
    }

    setLoading(true)
    setResponse("Making secure request...")

    try {
      const res = await fetch("http://localhost:3001", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action,
          params,
          apiKey: apiKey.trim(),
        }),
      })

      const data = await res.json()
      setResponse(JSON.stringify(data, null, 2))
    } catch (error) {
      setResponse(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">🛡️ Secure PC Agent Demo</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Test the secure PC agent with proper authentication and safety restrictions. 
            Start the agent with: <code className="bg-gray-800 px-2 py-1 rounded">node scripts/pc-agent-secure.js</code>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Control Panel */}
          <Card className="bg-gray-800/50 border-gray-600">
            <CardHeader>
              <CardTitle className="text-white">Agent Controls</CardTitle>
              <CardDescription className="text-gray-300">
                Enter your API key and test secure agent features
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-white text-sm font-medium mb-2 block">
                  API Key (from agent startup)
                </label>
                <Input
                  type="password"
                  placeholder="Enter your API key..."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Button
                  onClick={() => makeRequest("get_system_info")}
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  System Info
                </Button>

                <Button
                  onClick={() => makeRequest("list_files", { path: "~" })}
                  disabled={loading}
                  className="bg-green-600 hover:bg-green-700"
                >
                  List Files
                </Button>

                <Button
                  onClick={() => makeRequest("execute_command", { command: "echo 'Hello Secure Agent'" })}
                  disabled={loading}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Safe Command
                </Button>

                <Button
                  onClick={() => makeRequest("get_running_processes")}
                  disabled={loading}
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  Processes
                </Button>
              </div>

              <div className="border-t border-gray-600 pt-4">
                <p className="text-gray-400 text-sm mb-2">Test Security Features:</p>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    onClick={() => makeRequest("execute_command", { command: "rm -rf /" })}
                    disabled={loading}
                    variant="destructive"
                    className="text-xs"
                  >
                    Dangerous Cmd ❌
                  </Button>

                  <Button
                    onClick={() => makeRequest("list_files", { path: "/etc/passwd" })}
                    disabled={loading}
                    variant="destructive"
                    className="text-xs"
                  >
                    Path Traversal ❌
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Response Panel */}
          <Card className="bg-gray-800/50 border-gray-600">
            <CardHeader>
              <CardTitle className="text-white">Agent Response</CardTitle>
              <CardDescription className="text-gray-300">
                Secure communication results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs overflow-auto max-h-96 font-mono">
                {response || "No requests made yet. Enter your API key and click a button above."}
              </pre>
            </CardContent>
          </Card>
        </div>

        {/* Security Features */}
        <Card className="mt-6 bg-gray-800/50 border-gray-600">
          <CardHeader>
            <CardTitle className="text-white">🔒 Security Features Active</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="text-green-400 text-lg">🔑</div>
                <p className="text-white">API Authentication</p>
              </div>
              <div className="text-center">
                <div className="text-green-400 text-lg">⚡</div>
                <p className="text-white">Rate Limiting</p>
              </div>
              <div className="text-center">
                <div className="text-green-400 text-lg">📁</div>
                <p className="text-white">Path Restrictions</p>
              </div>
              <div className="text-center">
                <div className="text-green-400 text-lg">⚠️</div>
                <p className="text-white">Command Filtering</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}