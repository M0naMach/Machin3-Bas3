export interface Integration {
  id: string
  userId: string
  type: "google_drive" | "onedrive" | "github" | "dropbox"
  name: string
  status: "connected" | "disconnected" | "error" | "pending"
  accessToken?: string
  refreshToken?: string
  expiresAt?: Date
  metadata?: Record<string, any>
  createdAt: Date
  updatedAt: Date
}

export interface ExternalFile {
  id: string
  integrationId: string
  externalId: string
  name: string
  type: "file" | "folder"
  mimeType?: string
  size?: number
  modifiedTime: Date
  webViewLink?: string
  downloadLink?: string
  parentId?: string
  path: string
  metadata?: Record<string, any>
}

export interface FileSearchResult {
  files: ExternalFile[]
  nextPageToken?: string
  totalCount?: number
}

export interface IntegrationConfig {
  type: string
  name: string
  description: string
  icon: string
  authUrl?: string
  scopes: string[]
  isConnected: boolean
  lastSync?: Date
  fileCount?: number
}
