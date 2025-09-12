export interface User {
  id: string
  email: string
  name?: string
  createdAt: Date
  updatedAt: Date
}

export interface Conversation {
  id: string
  userId: string
  title: string
  createdAt: Date
  updatedAt: Date
  messageCount: number
}

export interface Message {
  id: string
  conversationId: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
  emotions?: Array<{ name: string; score: number }>
  metadata?: Record<string, any>
}

export interface Memory {
  id: string
  userId: string
  conversationId?: string
  type: "preference" | "fact" | "skill" | "concept" | "goal" | "challenge"
  content: string
  context: string
  importance: number
  createdAt: Date
  updatedAt: Date
  lastAccessed?: Date
  tags: string[]
  metadata?: Record<string, any>
}

export interface MemoryContext {
  relevantMemories: Memory[]
  conversationSummary?: string
  userPreferences: Record<string, any>
  learningProgress: Record<string, number>
  recentTopics: string[]
}
