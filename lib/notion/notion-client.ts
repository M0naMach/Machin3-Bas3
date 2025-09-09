import { Client } from "@notionhq/client"

// Initialize Notion client with authentication
export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

// Notion API helper functions
export class NotionService {
  // Database operations
  static async createDatabase(parent_page_id: string, title: string, properties: any) {
    try {
      const response = await notion.databases.create({
        parent: { page_id: parent_page_id },
        title: [{ text: { content: title } }],
        properties,
      })
      return response
    } catch (error) {
      console.error("Error creating Notion database:", error)
      throw error
    }
  }

  static async queryDatabase(database_id: string, filter?: any, sorts?: any) {
    try {
      const response = await notion.databases.query({
        database_id,
        filter,
        sorts,
      })
      return response
    } catch (error) {
      console.error("Error querying Notion database:", error)
      throw error
    }
  }

  // Page operations
  static async createPage(parent: any, properties: any, children?: any[]) {
    try {
      const response = await notion.pages.create({
        parent,
        properties,
        children: children || [],
      })
      return response
    } catch (error) {
      console.error("Error creating Notion page:", error)
      throw error
    }
  }

  static async updatePage(page_id: string, properties: any) {
    try {
      const response = await notion.pages.update({
        page_id,
        properties,
      })
      return response
    } catch (error) {
      console.error("Error updating Notion page:", error)
      throw error
    }
  }

  // Block operations
  static async appendBlocks(block_id: string, children: any[]) {
    try {
      const response = await notion.blocks.children.append({
        block_id,
        children,
      })
      return response
    } catch (error) {
      console.error("Error appending blocks to Notion:", error)
      throw error
    }
  }

  static async getBlocks(block_id: string) {
    try {
      const response = await notion.blocks.children.list({
        block_id,
      })
      return response
    } catch (error) {
      console.error("Error getting Notion blocks:", error)
      throw error
    }
  }
}
