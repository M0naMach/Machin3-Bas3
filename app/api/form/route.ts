import { type NextRequest, NextResponse } from "next/server"
import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_SECRET })
const DATABASE_ID = process.env.NOTION_DB_ID!

const PROJECT_TYPES = new Set([
  "Custom Bot Development",
  "Business Support Services",
  "Design & Branding",
  "Strategic Clarity",
  "Integration Support",
  "Other / Not Sure",
])

export async function POST(request: NextRequest) {
  try {
    const { name, email, project, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    const projectType = typeof project === "string" && PROJECT_TYPES.has(project) ? project : undefined

    const res = await notion.pages.create({
      parent: { database_id: DATABASE_ID },
      properties: {
        Name: { title: [{ text: { content: String(name || "Unnamed") } }] },
        Email: { email: String(email) },
        Message: { rich_text: [{ text: { content: String(message) } }] },
        ...(projectType && { "Project Type": { select: { name: projectType } } }),
        Status: { status: { name: "New" } },
        "Submitted At": { date: { start: new Date().toISOString() } },
        Source: { select: { name: "Website Form" } },
      },
    })

    return NextResponse.json({ success: true, id: res.id }, { status: 200 })
  } catch (err: any) {
    // Surface Notion error details when available
    const msg = err?.body?.message || err?.message || "Failed to save submission"
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
