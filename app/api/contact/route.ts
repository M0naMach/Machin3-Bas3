import { type NextRequest, NextResponse } from "next/server"
import { Client } from "@notionhq/client"

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const DATABASE_ID = process.env.NOTION_DATABASE_ID

export async function POST(request: NextRequest) {
  try {
    const { name, email, project, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Create a new page in the Notion database
    const response = await notion.pages.create({
      parent: {
        database_id: DATABASE_ID!,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        "Project Type": {
          select: {
            name: project || "Not specified",
          },
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
        "Submitted At": {
          date: {
            start: new Date().toISOString(),
          },
        },
        Status: {
          select: {
            name: "New",
          },
        },
      },
    })

    return NextResponse.json({ success: true, id: response.id })
  } catch (error) {
    console.error("Error saving to Notion:", error)
    return NextResponse.json({ error: "Failed to save submission" }, { status: 500 })
  }
}
