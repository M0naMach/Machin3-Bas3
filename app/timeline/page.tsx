import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const timelineEvents = [
  { date: '2023-01-01', title: 'Initial AI Ethics Discussion', description: 'Starting the conversation about ethical AI development and accountability.' },
  { date: '2024-06-15', title: 'First Accountability Framework Proposal', description: 'Proposing comprehensive frameworks for AI accountability and transparency.' },
  { date: '2025-09-30', title: 'Launch of Accountable AI Initiative', description: 'Official launch of initiatives promoting responsible and accountable AI practices.' },
];

export default function Timeline() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#B87333] to-[#CD7F32] bg-clip-text text-transparent">
        Accountable AI Milestones
      </h1>
      <div className="space-y-6 max-w-3xl mx-auto">
        {timelineEvents.map((event, index) => (
          <Card key={index} className="border-[#B87333]/20 hover:border-[#B87333]/40 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="text-lg font-semibold text-[#B87333]">{event.date}</div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{event.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}