"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Database, FileText, BookOpen, Baseline as Timeline, ExternalLink } from "lucide-react"

interface DatabaseInfo {
  id: string
  title: string
  url: string
}

interface SetupResult {
  databases: {
    scheduling?: DatabaseInfo
    notes?: DatabaseInfo
    study?: DatabaseInfo
    timeline?: DatabaseInfo
  }
}

export function NotionSetup() {
  const [workspaceId, setWorkspaceId] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [setupResult, setSetupResult] = useState<SetupResult | null>(null)
  const [error, setError] = useState("")

  const handleSetup = async () => {
    if (!workspaceId.trim()) {
      setError("Please enter a Notion page ID")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/notion/setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ workspace_id: workspaceId }),
      })

      const data = await response.json()

      if (data.success) {
        setSetupResult(data)
      } else {
        setError(data.error || "Failed to setup workspace")
      }
    } catch (err) {
      setError("Network error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const databases = [
    {
      key: "scheduling",
      title: "Work Schedule",
      description: "Technician appointments, routing, and task management",
      icon: Database,
      color: "text-blue-500",
    },
    {
      key: "notes",
      title: "Project Notes",
      description: "AI-assisted notes with categorization and search",
      icon: FileText,
      color: "text-green-500",
    },
    {
      key: "study",
      title: "Study Hub",
      description: "Learning materials, progress tracking, and assignments",
      icon: BookOpen,
      color: "text-purple-500",
    },
    {
      key: "timeline",
      title: "M0na Machin3 Journey",
      description: "Business development timeline and milestones",
      icon: Timeline,
      color: "text-orange-500",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">M0na Machin3 + Notion Integration</h1>
        <p className="text-muted-foreground">
          Create your personalized workspace structure with AI-powered organization
        </p>
      </div>

      {!setupResult ? (
        <Card>
          <CardHeader>
            <CardTitle>Setup Your Notion Workspace</CardTitle>
            <CardDescription>
              Enter your Notion page ID where you want to create your workspace structure
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="workspace-id">Notion Page ID</Label>
              <Input
                id="workspace-id"
                placeholder="e.g., 12345678-1234-1234-1234-123456789abc"
                value={workspaceId}
                onChange={(e) => setWorkspaceId(e.target.value)}
              />
              <p className="text-sm text-muted-foreground">Find this in your Notion page URL after the last slash</p>
            </div>

            {error && <div className="text-sm text-red-500 bg-red-50 p-3 rounded-md">{error}</div>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {databases.map((db) => {
                const Icon = db.icon
                return (
                  <div key={db.key} className="flex items-start space-x-3 p-3 border rounded-lg">
                    <Icon className={`w-5 h-5 mt-0.5 ${db.color}`} />
                    <div>
                      <h3 className="font-medium">{db.title}</h3>
                      <p className="text-sm text-muted-foreground">{db.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Button onClick={handleSetup} disabled={isLoading} className="w-full">
              {isLoading ? "Creating Workspace..." : "Create M0na Machin3 Workspace"}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Workspace Created Successfully!</span>
            </CardTitle>
            <CardDescription>Your M0na Machin3 + Notion integration is ready to use</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {databases.map((db) => {
                const Icon = db.icon
                const dbInfo = setupResult.databases[db.key as keyof typeof setupResult.databases]
                return (
                  <div key={db.key} className="flex items-start space-x-3 p-3 border rounded-lg">
                    <Icon className={`w-5 h-5 mt-0.5 ${db.color}`} />
                    <div className="flex-1">
                      <h3 className="font-medium">{db.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{db.description}</p>
                      {dbInfo && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={dbInfo.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Open in Notion
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">Next Steps:</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Share your Notion databases with the M0na Machin3 integration</li>
                <li>• The system can now create and manage content in your workspace</li>
                <li>• Use voice commands to add appointments, notes, and track progress</li>
                <li>• Your M0na Machin3 journey timeline is ready for updates</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
