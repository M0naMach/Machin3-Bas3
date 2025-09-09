import { NotionMigration } from "@/components/notion/notion-migration"
import { CommandNavigation } from "@/components/navigation/command-navigation"

export default function NotionMigrationPage() {
  return (
    <>
      <NotionMigration />
      <CommandNavigation />
    </>
  )
}
