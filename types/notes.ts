export interface NoteTemplate {
  id: string
  userId: string
  name: string
  description: string
  category: "lecture" | "meeting" | "research" | "project" | "study" | "custom"
  structure: NoteSection[]
  variables: TemplateVariable[]
  createdAt: Date
  updatedAt: Date
  usageCount: number
}

export interface NoteSection {
  id: string
  title: string
  type: "heading" | "bullet_points" | "paragraph" | "checklist" | "table" | "code_block"
  content: string
  placeholder?: string
  required: boolean
  order: number
}

export interface TemplateVariable {
  name: string
  type: "text" | "date" | "number" | "select"
  options?: string[]
  defaultValue?: string
  description: string
}

export interface Note {
  id: string
  userId: string
  templateId?: string
  title: string
  content: string
  tags: string[]
  category: string
  courseId?: string
  assignmentId?: string
  createdAt: Date
  updatedAt: Date
  metadata: Record<string, any>
}

export interface NoteSearchResult {
  note: Note
  relevanceScore: number
  matchedSections: string[]
}
