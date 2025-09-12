"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Database,
  FileText,
  BookOpen,
  Baseline as Timeline,
  Download,
  Upload,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  ArrowRight,
} from "lucide-react"

interface MigrationData {
  notes: any[]
  schedules: any[]
  studyMaterials: any[]
  activities: any[]
}

interface MigrationStatus {
  notes: { total: number; migrated: number; errors: string[] }
  schedules: { total: number; migrated: number; errors: string[] }
  studyMaterials: { total: number; migrated: number; errors: string[] }
  timeline: { total: number; migrated: number; errors: string[] }
}

export function NotionMigration() {
  const [migrationData, setMigrationData] = useState<MigrationData | null>(null)
  const [migrationStatus, setMigrationStatus] = useState<MigrationStatus | null>(null)
  const [isExporting, setIsExporting] = useState(false)
  const [isMigrating, setIsMigrating] = useState(false)
  const [currentStep, setCurrentStep] = useState<string>("")

  const migrationSteps = [
    {
      key: "notes",
      title: "Notes & Templates",
      description: "Migrate your AI-assisted notes and custom templates",
      icon: FileText,
      color: "text-green-500",
      notionDatabase: "Project Notes",
    },
    {
      key: "schedules",
      title: "Work Schedules",
      description: "Transfer appointments and technician schedules",
      icon: Database,
      color: "text-blue-500",
      notionDatabase: "Work Schedule",
    },
    {
      key: "studyMaterials",
      title: "Study Materials",
      description: "Move learning resources and progress tracking",
      icon: BookOpen,
      color: "text-purple-500",
      notionDatabase: "Study Hub",
    },
    {
      key: "timeline",
      title: "M0na Machin3 Journey",
      description: "Preserve your business development timeline",
      icon: Timeline,
      color: "text-orange-500",
      notionDatabase: "M0na Machin3 Journey",
    },
  ]

  const exportData = async () => {
    setIsExporting(true)
    try {
      const [notesRes, schedulesRes, activitiesRes] = await Promise.all([
        fetch("/api/notes"),
        fetch("/api/work/schedule"),
        fetch("/api/activities"),
      ])

      const [notes, schedules, activities] = await Promise.all([
        notesRes.json(),
        schedulesRes.json(),
        activitiesRes.json(),
      ])

      const exportData = {
        notes: notes.notes || [],
        schedules: schedules.appointments || [],
        studyMaterials: [], // Placeholder for study materials
        activities: activities.activities || [],
        exportDate: new Date().toISOString(),
        version: "1.0",
      }

      setMigrationData(exportData)

      // Download backup file
      const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `mona-machin3-backup-${new Date().toISOString().split("T")[0]}.json`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Export error:", error)
    } finally {
      setIsExporting(false)
    }
  }

  const migrateToNotion = async () => {
    if (!migrationData) return

    setIsMigrating(true)
    const status: MigrationStatus = {
      notes: { total: migrationData.notes.length, migrated: 0, errors: [] },
      schedules: { total: migrationData.schedules.length, migrated: 0, errors: [] },
      studyMaterials: { total: migrationData.studyMaterials.length, migrated: 0, errors: [] },
      timeline: { total: migrationData.activities.length, migrated: 0, errors: [] },
    }

    try {
      setCurrentStep("Migrating notes...")
      for (const note of migrationData.notes) {
        try {
          await fetch("/api/notion/bridge", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              action: "create_note",
              database: "notes",
              data: {
                title: note.title,
                content: note.content,
                category: note.category || "Migrated",
              },
            }),
          })
          status.notes.migrated++
        } catch (error) {
          status.notes.errors.push(`Failed to migrate note: ${note.title}`)
        }
        setMigrationStatus({ ...status })
      }

      setCurrentStep("Migrating schedules...")
      for (const schedule of migrationData.schedules) {
        try {
          await fetch("/api/notion/bridge", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              action: "create_appointment",
              database: "scheduling",
              data: {
                task: schedule.task || schedule.title,
                client: schedule.client,
                date: schedule.date,
                time: schedule.time,
                location: schedule.location,
                status: schedule.status || "Migrated",
                priority: schedule.priority || "Medium",
              },
            }),
          })
          status.schedules.migrated++
        } catch (error) {
          status.schedules.errors.push(`Failed to migrate schedule: ${schedule.task || schedule.title}`)
        }
        setMigrationStatus({ ...status })
      }

      setCurrentStep("Creating timeline entries...")
      for (const activity of migrationData.activities) {
        try {
          await fetch("/api/notion/bridge", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              action: "create_timeline_entry",
              database: "timeline",
              data: {
                milestone: activity.type || "Activity",
                description: activity.description || activity.notes,
                date: activity.date || new Date().toISOString().split("T")[0],
                type: "Learning",
                impact: "Medium",
              },
            }),
          })
          status.timeline.migrated++
        } catch (error) {
          status.timeline.errors.push(`Failed to migrate activity: ${activity.type}`)
        }
        setMigrationStatus({ ...status })
      }

      setCurrentStep("Migration completed!")
    } catch (error) {
      console.error("Migration error:", error)
    } finally {
      setIsMigrating(false)
    }
  }

  const getTotalProgress = () => {
    if (!migrationStatus) return 0
    const total = Object.values(migrationStatus).reduce((sum, status) => sum + status.total, 0)
    const migrated = Object.values(migrationStatus).reduce((sum, status) => sum + status.migrated, 0)
    return total > 0 ? (migrated / total) * 100 : 0
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Migrate to Notion</h1>
        <p className="text-muted-foreground">
          Organize your M0na Machin3 project data and prepare for future integrations
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Migration Overview</TabsTrigger>
          <TabsTrigger value="export">Export Data</TabsTrigger>
          <TabsTrigger value="migrate">Migrate to Notion</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Why Migrate to Notion?</CardTitle>
              <CardDescription>
                Organize your project data while maintaining clean integration points
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-green-600">Website Features:</h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Hume API emotion detection</li>
                    <li>• Voice interaction & personality</li>
                    <li>• Memory system & bonding</li>
                    <li>• ElevenLabs voice synthesis</li>
                    <li>• AI conversation capabilities</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-blue-600">Notion Handles:</h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Scheduling & task management</li>
                    <li>• Notes & documentation</li>
                    <li>• Study materials & progress</li>
                    <li>• Business timeline & planning</li>
                    <li>• Unlimited customization</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {migrationSteps.map((step) => {
              const Icon = step.icon
              return (
                <Card key={step.key}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <Icon className={`w-5 h-5 ${step.color}`} />
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </div>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Migrates to:</span>
                      <Badge variant="outline">{step.notionDatabase}</Badge>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="export" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Export Your Data</span>
              </CardTitle>
              <CardDescription>Create a backup of your project data before migration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-900 mb-2">What gets exported:</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• All notes and templates</li>
                  <li>• Work schedules and appointments</li>
                  <li>• Activity logs and interactions</li>
                  <li>• Study materials and progress</li>
                </ul>
              </div>

              <Button onClick={exportData} disabled={isExporting} className="w-full">
                {isExporting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Exporting Data...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Export Project Data
                  </>
                )}
              </Button>

              {migrationData && (
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 text-green-800">
                      <CheckCircle className="w-4 h-4" />
                      <span className="font-medium">Export completed!</span>
                    </div>
                    <div className="mt-2 text-sm text-green-700">
                      <p>
                        Exported {migrationData.notes.length} notes, {migrationData.schedules.length} schedules, and{" "}
                        {migrationData.activities.length} activities
                      </p>
                      <p>Backup file downloaded to your computer</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="migrate" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="w-5 h-5" />
                <span>Migrate to Notion</span>
              </CardTitle>
              <CardDescription>Transfer your data to Notion databases for better organization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {!migrationData ? (
                <div className="text-center py-8 text-muted-foreground">
                  <AlertCircle className="w-8 h-8 mx-auto mb-2" />
                  <p>Please export your data first before migrating</p>
                </div>
              ) : (
                <>
                  {migrationStatus && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Migration Progress</span>
                          <span>{Math.round(getTotalProgress())}%</span>
                        </div>
                        <Progress value={getTotalProgress()} className="w-full" />
                        {currentStep && <p className="text-sm text-muted-foreground">{currentStep}</p>}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {migrationSteps.map((step) => {
                          const status = migrationStatus[step.key as keyof MigrationStatus]
                          const Icon = step.icon
                          return (
                            <Card key={step.key}>
                              <CardContent className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center space-x-2">
                                    <Icon className={`w-4 h-4 ${step.color}`} />
                                    <span className="font-medium">{step.title}</span>
                                  </div>
                                  <Badge variant={status.migrated === status.total ? "default" : "secondary"}>
                                    {status.migrated}/{status.total}
                                  </Badge>
                                </div>
                                {status.errors.length > 0 && (
                                  <div className="text-xs text-red-600">{status.errors.length} errors</div>
                                )}
                              </CardContent>
                            </Card>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  <Button onClick={migrateToNotion} disabled={isMigrating || !migrationData} className="w-full">
                    {isMigrating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Migrating to Notion...
                      </>
                    ) : (
                      <>
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Start Migration to Notion
                      </>
                    )}
                  </Button>

                  {migrationStatus && getTotalProgress() === 100 && (
                    <Card className="border-green-200 bg-green-50">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2 text-green-800 mb-2">
                          <CheckCircle className="w-4 h-4" />
                          <span className="font-medium">Migration completed!</span>
                        </div>
                        <div className="text-sm text-green-700 space-y-1">
                          <p>Your data has been successfully migrated to Notion</p>
                          <p>Your data is now organized in Notion</p>
                          <Button variant="outline" size="sm" className="mt-2 bg-transparent" asChild>
                            <a href="/notion-setup" target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Open Notion Workspace
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
