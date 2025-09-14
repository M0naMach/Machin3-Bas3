# ⚠️ CRITICAL CONFIGURATION WARNINGS ⚠️

## DO NOT MODIFY THESE SETTINGS

### Path Aliases in tsconfig.json
\`\`\`json
"paths": {
  "@/*": ["./*"]
}
\`\`\`

**NEVER change this to explicit paths like:**
\`\`\`json
"paths": {
  "@/components/*": ["components/*"],
  "@/lib/*": ["lib/*"]
}
\`\`\`

**Why:** The explicit approach causes "Failed to initialize v0: Failed to fetch" errors and complete application failure.

**Tested:** Explicit paths were tested and confirmed to break the entire system. The simple wildcard approach is the ONLY working configuration.

### Other Critical Dependencies
- All CSS variables in `app/globals.css` - Required for CommandNavigation component
- Font loading setup in `app/layout.tsx` - Required for Anurati font
- Radix UI version compatibility - 27+ packages must stay at current versions
- `@import "tw-animate-css"` in globals.css - Despite seeming problematic, it works in v89

## Before Making Changes
1. Always test thoroughly
2. Have a rollback plan
3. Document what breaks and why
4. Remember: v89 is the stable baseline configuration
