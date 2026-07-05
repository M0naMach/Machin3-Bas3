/**
 * Case Studies Data -- R-Series Structure
 *
 * Each case study follows the R-Series narrative arc:
 *   Redundancy → Rhyme → Reason → Machin3 M3chanics → Refinement → Result
 *
 * All R-Series fields are optional. Fill in as projects develop.
 * `description` is the short card-level summary (keep it to 2–3 sentences).
 * `tags` drive the "Technical Stack" chips in the detail view.
 *
 * IMAGE CONVENTION:
 *   Placeholder  → imported from src/assets/placeholders/ (entry not yet complete)
 *   Real content → string path from public/ (entry is complete and committed)
 */

import { CaseStudy } from "@/components/portfolio/CaseStudyCard";

// ── Placeholder images ───────────────────────────────────────────────────────
// Using public/ paths until assets directory is set up.
const phCodeWork01    = "/Machin3s_at_Work06.png";
const phCodeWork04    = "/Machin3s_at_Work06.png";
const phCodeWork06    = "/Machin3s_at_Work06.png";
const phCodeConst03   = "/Machin3s_at_Work06.png";
const phIconsWork02   = "/Machin3s_at_Work06.png";
const phCollWork05    = "/Machin3s_at_Work06.png";
const phCollConst01   = "/Machin3s_at_Work06.png";
const phCompConst02   = "/Machin3s_at_Work06.png";

export const caseStudies: CaseStudy[] = [
  {
    id: "actuarium",
    title: "AI Audit Actuarium",
    description: "A systematic framework for evaluating chatbot systems across 6 core dimensions with 160+ evaluation items, weighted scoring, and dual visualization. Features polarity-adjusted questions to eliminate negative bias in scoring.",
    category: "coding",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Audit", "Data Visualization", "AI Evaluation", "System Design"],
    date: "Jan 2026",
    link: "https://ai-audit-actuarium.pages.dev",
    github: "https://github.com/M0naLisaSmil3d/AI-Audit-Actuarium",
    featured: true,
    displayMode: "detailed",
    redundancy: `Previously AI evaluation was a mess of intuition and subjective "vibes." Different auditors would stare at the same system, with skewed perceptions, and see different realities. There was no way to quantify risk, no repeatable method to track a system's evolution, and no single source of truth for what constituted a failure.`,
    rhyme: `Instead of treating an audit as merely a checklist of pass/fail items, we strived to reframe it as an actuarial balance sheet. Think of the Actuarium not as a teacher with a red pen, but as a mechanic's diagnostic computer. You don't need to know if the car is "good"; you need to know which specific part is failing.

The system acts as a Signal-to-Noise filter. It separates the "engine knocking" (Critical Data Issues) from the "paint scratching" (Tone/Formatting). It doesn't just give you a score; it points an arrow at the exact subsystem that is broken.`,
    reason: `The Actuarium is deeply rooted, in its architectural beauty, to a well grounded belief that the solution to un-Accountable AI, and their systems, had to be found in a deterministic framework.

If the physics are sound, the results will always be the same. No guessing. No rounding. No AI.

We aren't trying to catch AI with "misaligned" pattern-matching. We're trying audit where the integrity didn't hold and the accountabilty isn't being programmed.`,
    machin3Mechanics: `- Master Actuarium Checklist Guide: A guide to formatting your questions to maintain a CSV file that holds meticulously curated questions that can easily be mapped to diagnostic sections for comparrison, and that removes all ambiguity after polarization.
  - Including all columns: Actual question, Primary Axis, Weight (1-3), Polarity (POS or NEG), & Secondary Tags. (Only a sample is provided of our Actuarium; the full Actuarium is proprietary.)
- The Actual Formula`,
    refinement: `We weren't ashamed of our seams; to get this far in AI we stay sharp to the stumbles we make along the way. So, to be efficient, we soudered the stretched seams of context limits and arbitrary outputs to stats and mathematical science. We utilized logical precision and with an underlying creative vision, were able to bypass predominant issues quickly so that the real problem-makers could answer to the Actuarium.

- **Weighting**: Items are weighted (1–3) by criticality.
- **Surgical Scoring**: 1.0 for ideal, 0.5 for partial, 0.0 for failure. For NEG items, we invert the score to maintain integrity.
- **Granular Calibration**: The 1–15 scale was adopted because 10 is too small for complexity and 100 is too arbitrary for humans.
- **Double-dosage Tagging**: We added secondary tags to surface the why behind the score, highlighting whether the friction lies in the RAG, the prompt, or the API architecture. 

Because systems are compiled of components meant to compute together... so its common sense that something on the front end could be collapsing the code on the backend.

**After some iteration we implemented**:
**Polarity**: We distinguish between a "yes" that builds value (POS) and a "yes" that reveals a flaw (NEG).

We derived the Negative Denominator Method to ensure the math couldn't be faked.`,
    result: `Accountable Architecture Success looks like a coordinate, not a grade.

You run the audit, and instead of a vague "C+," you get a report that says: "Architecture: 3.3/15 (CRITICAL)."

The Actuarium framework doesn't just deliver a surgical health score; it uses python to also deliver peace of mind:

- Deterministic Scores: Any auditor, any day, same result.
- Per-Axis Visibility: You can see exactly which pillar of your architecture is crumbling.
- Issue Surface: Failing tags are aggregated to guide remediation, not just criticism.
- Physics Over Instructions: The audit proves that when instructions fail, the physics of the system still work.
- What was corrected: Subjectivity, inconsistency, and the siphoning of potential through vague metrics.`,
  },
  {
    id: "plus_0ne",
    title: "Plus_0ne",
    description: "A modular AI assistant platform built for architecture and design practice. Five purpose-built AI agents that plug directly into the workflow gaps costing architecture and design firms time, money, and liability exposure every single project.",
    category: "coding",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Architecture", "Prompt Engineering", "Agent Design", "Applications"],
    date: "April 2026",
    displayMode: "detailed",
    redundancy: "Every handoff is a risk. Research suggests that architecture and design firms spend a disproportionate share of their time on redundant, routine, and high stakes tasks. Architecture firms bleed time and money when triaging leads that don’t fit their market, answering repetitive code questions, drafting RFIs, transcribing site notes, renaming render files, and drafting client emails. To keep it simple, tasks that are necessary but not billable, not creative, and not what anyone entered this profession to do, take up the most time and lead to the most friction. These tasks are low‑judgment but high‑stakes, meaning a mistake in code citation or a mislabeled render can delay a project or damage client confidence.",
    rhyme: `The system was built around a simple rule: an agent that tries
to do everything does nothing well.

Think of this suite as a digital architecture firm within the firm; a silent, reliable crew of specialist colleagues who never sleep, never forget a code amendment, and never send a file without a naming convention.

Each agent is a dedicated "department":

· Agent‑01 is the front‑of‑house concierge: welcoming leads, filtering out mismatches, and capturing every essential detail.
· Agent‑02 is the in‑house senior associate: ready to brainstorm, draft documents, check codes, and advise on materials.
· Agent‑03 is the code librarian: instantly retrieving current regulations with zero guesswork.
· Agent‑04 is the field inspector’s scribe: turning fragmented voice notes into a crisp, actionable punch list.
· Agent‑05 is the studio’s asset manager: organising render batches and crafting polished client emails in one seamless motion.

Each agent is a discrete module. Swappable, auditable, independently updatable.`,
    reason: `This particular suite is built on five independent, state‑machine‑driven LLM prompts, each designed for a distinct function. They are not general‑purpose; they are tightly constrained to a single responsibility, with:
    
- Explicit state tracking (turn counts, escalation tiers, confidence levels)
- Rigid output schemas (JSON only for Agents 04 & 05; four‑part plain‑text structure for Agent‑03; natural conversation for Agents 01 & 02 but with hard gate‑keeping)
- Hard fail‑safe triggers (escalation to human, low‑confidence disclaimers, jurisdiction‑based requirements)

The architectural pattern is modular and composable:

- Each agent can run independently, but they can pass context silently (e.g., Agent‑02 Mode 4 passes project phase to Agent‑04; Agent‑02 Mode 5 passes client/renders to Agent‑05).
- The frontend (React/NIM) manages session state and orchestrates which agent to invoke based on user intent.
- Every agent outputs structured data that feeds directly into downstream systems (CRM, project management, file servers, email clients).

The "physics" of the solution is deterministic prompt engineering--every question has a gate, every output has a schema, and every uncertainty has a documented fallback. This ensures the system is predictable, auditable, and safe for production use, even with hostile or confused users."
    machin3Mechanics: "**Per-Agent Directories** - Each agent directory contains a \`prompt.ts\` file that exports a single named string constant. Each agent’s system prompt is a self‑contained spec (v2.2, v1.3, etc.) with internal state variables, escalation logic, and confidence protocols. The prompt is code, versioned, diff-able, and reviewable. 

**Compliance Cache** - \`VOL-08-KNOWLEDGE_BASE/zoning_energy_cache.xml\` holds pre-verified compliance reference data for Agent-03. The XML format is structured, parseable, and update-friendly. When a jurisdiction adopts a new code edition, the update happens in one file in one volume.
**Ecosystem Framework** - This project is built on the R Ecosystem architecture and is licensed under the GNU AGPL-3.0. Full license text: [VOL-12-COMMERCIAL/LICENSE.md](./VOL-12-COMMERCIAL/LICENSE.md)
**State Machine Design** – Agents 01 and 02 use explicit state transitions; Agents 03–05 use rule‑based deterministic flows.
**JSON schema enforcement** – Agents 04 and 05 output only strictly valid JSON; Agent‑01 produces structured internal data; Agent‑03 outputs a four‑section plain‑text format.
**Search‑grounding bias** – Agent‑03 is designed to prefer search‑verified current sources over cached memory, reducing hallucination.
**Firm‑specific conventions** – Naming standards (e.g., [ProjectCode]_[ViewType]_[Revision]_[Date]), jurisdiction defaults (Florida/Lee County), and trade categories are hard‑coded for consistency.
**React/NIM integration** – The frontend orchestrates initial messages and context passing between agents.
**Production guardrails** – Turn‑count tracking, escalation tiers (1–3), budget‑revisit flags, and confidence tiers (HIGH/MEDIUM/LOW/UNKNOWN) are built into every agent.

Principle: "Never guess--ask, flag, or escalate." This is enforced at the prompt level, not via external tooling.`,
    refinement: `The prompt architecture follows a single ownership rule: one
agent, one file. Each agent file exports a system prompt, a set of behavioral constraints, and any domain-specific context the agent needs. They are imported at the API route level.

- Agent‑01’s language standard - We deliberately banned transactional phrases like "I need" or "please provide" and replaced them with curious, warm openings. This synthesises the logical need for data capture with the creative imperative of human rapport. Tradeoff: more conversational overhead, but the gain in trust and lower abandonment outweighs it.
- Agent‑02’s confidence protocols - We built a tiered system (HIGH/MEDIUM/LOW) that applies to every factual claim. The synthesis: architects get authoritative answers when possible, and clear limits when not. Tradeoff: sometimes the agent offers verification options instead of a direct answer, slowing speed, but the safety gain is non‑negotiable for a professional firm.
- Agent‑03’s four‑part output - We stripped all conversational niceties to produce a judgment‑free, machine‑readable answer. The creative twist: the agent must ask for jurisdiction first, making the user aware of the dependency. Tradeoff: less natural flow, but faster, more reliable compliance lookups.
- Agent‑04 and 05’s "silent" JSON‑only outputs - We removed all human‑readable text, forcing integration with other tools. The synthesis: they are not assistants; they are data‑transformation engines. Tradeoff: they can’t explain their decisions, but the review_flags and internal notes provide that transparency indirectly.
- Escalation logic - We embedded empathy and off‑ramps in every agent (especially Agent‑01). This welds logical state advancement with creative human‑first behaviour; enabling the agent to recognize when to stop collecting data and start handing off, preserving the relationship over the form.
- Ecosystem Project Architecture - The codebase uses scope-based scaffolding with quick direction with a semantic compass; less cognitive processing is required to navigate it, preserving bandwidth for the actual work.

Biggest tradeoff: Strictness vs. flexibility. We chose strict gates to guarantee data completeness and reduce ambiguity. This means agents will push back if information is missing, but we softened that with warm language and permission‑based re‑asks (e.g., budget revisit at State 6). The result: higher quality intake data with lower friction than a typical form.

**Every agent has a lane. Every lane has a volume. Every volume has a home.**`,
    result: `The answer here is the same as it is in any well-maintained
codebase: single responsibility, version history, and a review process that leaves a record. The Ecosystem project architecture extends that same thinking to every layer of the project, from configuration to documentation to AI behavior. 

Before (Manual, fragmented process):

· Lead intake: 30 minutes per lead, 40% incomplete data, 15% residential mismatches wasted.
· Code lookup: 20 minutes per query, 20% error rate (outdated editions).
· Punch list: 45 minutes per site walk transcription, 30% miscategorised items.
· Render delivery: 90 minutes per batch (renaming, sorting, email drafting), frequent duplicate sends.

After (Automated, structured system):

· Agent‑01: < 5 minutes per lead, 95% complete data, automatic residential redirection (zero wasted time). Escalation triggers in < 3 turns of frustration, preserving client goodwill.
· Agent‑02: Instant responses to design, RFI, and material queries. 80% of routine questions resolved without human intervention. Confidence flags reduce liability.
· Agent‑03: Code answers in < 10 seconds with search‑verified editions. Explicit disclaimers protect the firm legally.
· Agent‑04: Punch list JSON generated in < 2 seconds from any voice transcript. 95% accurate trade/priority assignment (based on internal tests). Saves 43 minutes per walk.
· Agent‑05: Renders organised and email drafted in < 5 seconds per batch. 100% naming compliance enforced. Duplicate detection prevents client embarrassment.

Quantitative firm‑wide impact (projected for a mid‑sized firm):

· Time saved: ~15 hours per week per principal (re‑allocated to design and client strategy).
· Data quality: 90% reduction in incomplete/conflicting project data.
· Client satisfaction: Faster responses, fewer follow‑up emails, and polished deliverables.
· Scalability: The firm can handle 2‑3x the project volume without adding administrative staff.

Success is measured by:

· Intake completion rate ≥ 90%
· Escalation rate ≤ 5% (and those are handled gracefully)
· Punch‑list accuracy ≥ 95% (agreed by site leads)
· Render‑delivery time < 2 minutes from batch upload to email draft

The suite doesn’t just automate... it elevates the firm’s capacity to focus on what matters: creating spaces that matter, with clients who trust them.`,
  },
  
  {
    id: "ecosystem",
    title: "Ecosystem - Template",
    description: "A Volume‑Based Architecture for **Cognitive Consistency** Across Platforms",
    category: "coding",
    image: phCodeWork04,
    tags: ["Template", "Organization", "Neurodivergent", "Semantic Recall"],
    date: "Mar 2026",
    displayMode: "detailed",
    // R-Series -- fill in when ready
    redundancy: `Learning, building, and maintaining complex systems often leads to **architectural entropy**. Before this architecture, my coding paper trail was living as dismembered concepts scattered across Notion, Bear, Obsidian, Notepad, TextEdit, OneNote, and Notes. My files, drives, and cloud storage became additional pain points on my record, formalizing my habitual offenses for procrastination, ADHD, unyielding creativity, and the excitement of a new found passion. A passion that I was scaling through hands-on training and the lack of formal education left me with the ability to build, but not the ability to properly plan a directory. Every time I switched contexts, I had to track down my last remembrance of referencing the file. This always consists of statements like: "How did X file get saved here?", or looking for "Send to Bear" on my Share Screen failing to realize I had the wrong phone.

This memory recall, based strictly on context and references, is necessary for me due to something you'll hear referenced throughout my projects. Not as a "pity party" princess, but as a practical, and personal, explanation for my coding concepts and the creative bypass used in my work. I have Aphantasia, and don’t have the ability to "picture this" or "visualize" the last place I saw something.

**Restated issues:**
- **Inconsistent mental models** – Traditional filesystems and coding norms don't match your mapping mechanisms how, forcing you to constantly try to re‑orient, restructure, and re-remember.
- **Technical tolls** – Every time you need a specific file (a config, a script, a doc), you have to remember where it *might* be, wasting mental energy.
- **Stunted systems** – Projects get underway, but only ever mature as far as your ability to reconnect with the application currently being constructed: making full production level development seem impossible.
- **Cross-platform dissonance** – If you use Notion, local files, and cloud storage, each has a different organization, multiplying the confusion.

**The struggle was real, and the structure needed scaffolding.**`,
    rhyme: `It made sense to create a solution that treated file structure as **cognitive mirrors** of the users's mental processing. Customizing a physical representation of how their brain *already* organizes information naturally and then scaling it to be flexible across their beloved stack.

Instead of fighting against the driver for control of the wheel, you build the track to match its destined course. There's less friction, and you both make progress together... enjoying the ride, just cruising to the tune of your personal flow.

My current structure is divided into **Volumes**. Thinking of every top directory as a **volume** instantly connects the structure to narrative for me. Volumes of stories; series of writings contained and categorized by purpose. My **Ecosystem** was built to reflect the "landmarks" found within **"Th3 N3ighb0rh00d"** of my Notion.

Everything has a place.

This place; **Th3 N3ighb0rh00d**... I know better than the neighborhood I grew up in. I finally attained acceptance and a humble sense of pride when I showed up to meet my passion and processing protocol at the intersection of ***Craft and Code***.

Now let's get down to the **Reason** behind the **Rhyme**.`,
    reason: `The structural foundation of this **Ecosystem** isn't a belief-based approach. It rests on the beams brought directly from cognitive science: how brains are configured to encode, store, and retrieve information in all kinds of beautifully diverse ways. It's not magic or a well placed metaphor... It's just mental mapping mechanics.

Traditional filesystems favor spatial memory. You "know" where something sits because you can see its placement in your mind. However, spatial mapping is exactly the mechanism missing for aphantasic minds. Semantic navigation trades visualization for vocabulary. Knowing what something is and what it does requires no mental imagery, only clean, consistent categorization. 

**VOLUMES BY FUNCTION, ENABLE *RETRIEVAL* not just *STORAGE***
In this **Ecosystem**:

Automation scripts → **always** Volume 9 (AUTOMATIONS/ AUTO) Public site assets → **always** Volume 4 (PUBLIC/ PUBL) Server configurations → **always** Volume 14 (SERVER/ SERV)

**COGNITIVE SCAFFOLD, NOT A STYLE CHOICE**
Directories and naming schemas aren't just filing cabinets; they are load-bearing cognitive scaffolding. While neurotypical minds might unconsciously navigate these structures using spatial intuition, the invisible topography of standard environments often leaves neurodivergent thinkers entirely unmoored. For the 15 to 20 percent operating with alternative cognitive compasses, this scaffolding requires intentional design, forging clear paths where industry defaults typically hit dead ends.

**Sensory processing differences:** reduce visual noise and ambiguity**
Sensory processing differences affect how the nervous system receives, organizes, and responds to environmental stimuli. These differences are common across multiple neurodivergent profiles, affecting a significant proportions of neurodivergent individuals; many with ADHD, RSD, Autism and other sensory sensitive disorders.

**Universal strategies with cross-neurotype benefits**
Utilizes several strategies that benefit all neurodivergent profiles and improve code quality for neurotypical developers.
`,
    machin3Mechanics: `- **R-Series briefing**
- *Original Ecosystem design**
- **Personally designed documentation templates**`,
    refinement: `The current **Ecosystem** evolved through several iterations to reach its present form.

1. **Volume numbering** – Introduced numbered **VOLUMES** to create a book-based bond, contained and categorized separation, and stable structure for a sequential system. The numbering secures a stable, sortable sequence, while the descriptive suffix spells out its specific purpose. This dual-key directory delivers both a fixed foundation and a readable framework.
2. **Cognitive mirroring** – Replicating an already working volume-based framework and applying it to my repositories, would be way more beneficial than trying to redefine a whole new system. That decision came with one primary issue... I don't know how to create a repository. So instead I had to rely on **Volumes** being categorized by ***fundamentals*** and ***function***.

⠀
I mapped each Notion Volume to a corresponding repo category, renaming descriptors in an attempt to mirror the mental model.

\`MEMORY\` → \`CONTEXT\`, \`REAL ESTATE\` → \`STRUCTURE\`

Some naming was just not possible to retain across platforms, but I strived to remain as close as possible in order to still trigger the same recall.

\`ACTUARIUM\` → \`APPLICATIONS\` (Kept the 'A' connection) \`ART ATELIER\` → \`OBSERVATORY\` (Kept a relation to visuals and the act of looking)

*There's always room for improvement and further iteration.*

3. **Git‑ignore refinement** – Explicitly added \`VOL‑05‑USER/\` and incorporated \`.gitignore\` to prevent accidental commits of sensitive data. Sometimes it can get tricky when using personal information for a repository. Between remembering to take it out and/or remembering the data you're pulling from it, that limbo can cause unnecessary chaos. By implementing this design, you can kill two birds with one stone (figuratively speaking). 

4. **Consistent file naming** - Maintaining a consistent naming convention is a fundamental to a repository's *rules of rhythm*. Simply put... it makes it easier to find things. Incorporating the UID for the corresponding directory/ volume allows you to know exactly what file and which category you're in, no matter how many clicks it took to get there. 5. **Zero-guess navigation** - Every file has a home. Every home is on the map. Every inhabitant has a clearly defined address...

The result is a structure that feels natural to navigate, scales without breaking, and doesn't try to mimic a mental system that your mind can't compute.`,
    result: `BEFORE VS AFTER
**Before (ad hoc structure):**

\`\`\`
project/
├── main.py
├── utils.py
├── config.json
├── scripts/
├── docs/
├── data/
├── prompts/
└── ...
\`\`\`

**bin/** No idea what that means. Why are my executables in there?

**lib/** I've never touched anything in this folder. How is it a library if I don't read or learn from it?

**Hands-on learning left me wondering where everything was meant to go. The lack of a textbook education by default, made it hard to "connect the dots", when the dots I was connecting were being actively drawn by hand.**

**After ECOSYSTEM:**

\`\`\`
PROJECT_NAME/
├── ECOSYSTEM.md
├── README.md
├── VOL-01-STRUCTURE/
│   ├── SCAF-SCOPE.md
│   └── SCAF-Tree.md
├── VOL-02-COMMUNITY/
│   ├── COMM-SCOPE.md
│   └── CONTRIBUTING.md
└── ...
\`\`\`
This alleviates:
 
- Second guessing where things belong
- Organizational delays in production
- Self criticism that minimizes momentum
- Mental process mimicry that hurts rather than helps productivity
- Every file has a clear, predictable location. *The structure itself is documentation.*

You achieve:
 
- **Cognitive consistency** - The same mental model made to span multiple platforms (filesystem, Notion, File Explorer, Obsidian, GitHub, and any future platforms). The volumes map directly to customized categories, reducing mental translation overhead.
- **Privacy by default** - User-specific and sensitive files are automatically excluded from version control, preventing accidental exposure.
- **Scalable architecture** - New volumes can be added at any time without restructuring existing ones. The project can grow indefinitely without becoming chaotic.
- **Onboarding clarity** - New contributors (or the creator returning after a break) can read \`SCAF-Tree.md\` and immediately understand where everything lives.`,
  },
  {
    id: "r-series",
    title: "R-Series",
    description: "A narrative-structured approach to technical documentation, designed for clarity, memorability, and cognitive accessibility.",
    category: "composition",
    image: phCodeWork06,
    tags: ["Template"],
    date: "Mar 2026",
    displayMode: "detailed",
    // R-Series -- fill in when ready
    redundancy: `Most READMEs follow a functional structure (Installation → Usage → API). That works when you can visualize the system. But for those of us who think in words and stories, a *narrative arc* makes the system hold still long enough to understand.

R‑Series uses alliterative headings as mnemonic anchors, guiding the reader through a complete story of the project:

- **The Problem** → **The Reframe** → **The Solution** → **The Mechanics** → **The Refinement** → **The Result**

**The Template**

[Project Name]

[One-line description]

Just as we did here, *Redundancy* will answer these questions:
What problem does this solve? What friction or drift necessitated this project? Be specific about why the old way wasn't working.`,
    rhyme: "*The creative reframe* How do you want users to *think* about this project? What's the metaphor, the story, the shift in perspective?",
    reason: "*The logical cor* How does it work? What's the architecture, the algorithm, the physics of the solution?",
    machin3Mechanics: `*Machin3 M3chanics* (This is  mainly used for IP specs. Have fun naming!!)
The substrates. What tools, languages, frameworks, or principles were used to build it?`,
    refinement: "*The synthesis* What specific choices did you make to weld the creative and logical together? What tradeoffs did you navigate?",
    result: "*The outcome* What does success look like? Show before/after, metrics, or examples.",
  },
  {
    id: "coming-soon-code-1",
    title: "More Code Projects Coming Soon",
    description: "Crafting the future, frame by frame. Additional coding projects will be featured here.",
    category: "coding",
    image: phCodeConst03,
    tags: ["Coming Soon"],
    date: "2026",
    link: "#",
    displayMode: "image-only",
  },
  {
    id: "coming-soon-code-2",
    title: "More Code Projects Coming Soon",
    description: "Sculpting a new system. More technical projects in development.",
    category: "coding",
    image: phCodeWork01,
    tags: ["Coming Soon"],
    date: "2026",
    link: "#",
    displayMode: "image-only",
  },
  {
    id: "oil-slip",
    title: "0il_Slip",
    description: "Abstract colorful Chucks with paint running down.",
    category: "craft",
    image: "/craft/collections/0il-C0ll3cti0n/0il_Slip/0ilSlip_design01_cover.png",
    tags: ["Digital Art", "Mixed Media", "Abstract", "0il C0ll3cti0n"],
    date: "Dec 2024",
    displayMode: "detailed",
    redundancy: " ",
    rhyme: " ",
    reason: "",
    machin3Mechanics: "",
    refinement: "",
    result: " ",
    gallery: [
      "/craft/collections/0il-C0ll3cti0n/0il_Slip/0il_design01_Slip.png",
      "/craft/collections/0il-C0ll3cti0n/0il_Slip/0il_design02_Slip.png",
      "/craft/collections/0il-C0ll3cti0n/0il_Slip/0il_design03_Slip.png",
      "/craft/collections/0il-C0ll3cti0n/0il_Slip/0il_design04_Slip.png",
      "/craft/collections/0il-C0ll3cti0n/0il_Slip/0il_design05_Slip.png",
      "/craft/collections/0il-C0ll3cti0n/0il_Slip/0il_design06_Slip.png",
      "/craft/collections/0il-C0ll3cti0n/0il_Slip/0il_design07_Slip.png",
      "/craft/collections/0il-C0ll3cti0n/0il_Slip/0il_design08_Slip.png",
    ],
  },
  {
    id: "vindec",
    title: "Vintag3_D3cay",
    description: "A collection of blemished water lilies, captured in the quiet space between living and fading. Dark water, heavy shadows, and the textured beauty of things that have started to let go.",
    category: "craft",
    image: "/craft/Vintag3_D3cay/CoverArt-Vintag3_D3cay.jpeg",
    tags: ["Water Lilies", "Mixed Media", "Landscape", "Material Art"],
    date: "Apr 2026",
    displayMode: "detailed",
    gallery: [
    "/craft/Vintag3_D3cay/Lily-01.png",
    "/craft/Vintag3_D3cay/Lily-02.png",
    "/craft/Vintag3_D3cay/Lily-03.png",
    "/craft/Vintag3_D3cay/ART-VIND3C-wristwatch.jpeg",
    "/craft/Vintag3_D3cay/Lily-04.png",
    "/craft/Vintag3_D3cay/Lily-05.png",
    "/craft/Vintag3_D3cay/Lily-06.png",
    "/craft/Vintag3_D3cay/ART-VIND3C-perfume_bottle.jpeg",
    ],
  },
  {
    id: "icons",
    title: "Icons",
    description: "",
    category: "craft",
    image: phIconsWork02,
    tags: [],
    date: "2026",
    displayMode: "detailed",
    // R-Series -- fill in when ready
    redundancy: "",
    rhyme: "",
    reason: "",
    machin3Mechanics: "",
    refinement: "",
    result: "",
    gallery: [],
  },
  {
    id: "today-was",
    title: "Today was\u2026",
    description: "",
    category: "craft",
    image: phCollWork05,
    tags: [],
    date: "2026",
    displayMode: "detailed",
    // R-Series -- fill in when ready
    redundancy: "",
    rhyme: "",
    reason: "",
    machin3Mechanics: "",
    refinement: "",
    result: "",
    gallery: [],
  },
  {
    id: "coming-soon-compositions",
    title: "More Compositions Coming Soon",
    description: "Sculpting a new system. Additional creative works and compositions will be featured here.",
    category: "compositions",
    image: phCompConst02,
    tags: ["Coming Soon"],
    date: "2026",
    link: "#",
    displayMode: "image-only",
  },
];
