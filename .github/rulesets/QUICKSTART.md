# Repository Rulesets - Quick Reference

## 📁 Files Created

### Configuration Files
- `.github/rulesets/main-branch-protection.json` - Ruleset for main branch
- `.github/rulesets/deploy-branch-protection.json` - Ruleset for live-deploy branch

### Documentation
- `.github/rulesets/README.md` - Technical reference for rulesets
- `docs/REPOSITORY_RULES_SETUP.md` - Step-by-step setup guide

### Updated
- `README.md` - Added governance section linking to setup guide

## 🎯 What They Do

### Main Branch (`main`)
✅ Require 1 PR approval  
✅ Require CI to pass ("Lint & Edge Build")  
✅ Require conversation resolution  
✅ Block force pushes  
✅ Block deletions  
✅ Require linear history  

### Deploy Branch (`live-deploy`)
Same as main, PLUS:  
✅ Require approval of most recent push  

## 🚀 How to Apply

### Option 1: GitHub UI (Easiest)
1. Go to Settings → Rules → Rulesets
2. Click "New ruleset" → "New branch ruleset"
3. Use the JSON files as a reference for configuration

### Option 2: GitHub API
```bash
curl -X POST \
  -H "Authorization: token YOUR_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/M0naMach/Machin3-Bas3/rulesets \
  -d @.github/rulesets/main-branch-protection.json
```

### Option 3: GitHub CLI
```bash
gh api repos/M0naMach/Machin3-Bas3/rulesets \
  --input .github/rulesets/main-branch-protection.json
```

## 📖 Documentation

- **Setup Guide**: `docs/REPOSITORY_RULES_SETUP.md`
  - Step-by-step instructions
  - Workflow impact explanation
  - Troubleshooting guide
  
- **Technical Reference**: `.github/rulesets/README.md`
  - Detailed ruleset configuration
  - Customization options
  - API examples

## 🔍 Quick Test

After applying, test by:
1. Try pushing to main directly → Should be blocked ❌
2. Create PR without CI passing → Not mergeable ❌
3. Create PR with approval + passing CI → Mergeable ✅

## ⚡ Key Points

- **Admins can bypass** - Use sparingly!
- **Test with "evaluate" mode** first
- **Status check name** must match CI job name exactly
- **Linear history** keeps commits clean

---

For complete details, see:
- [Setup Guide](../../docs/REPOSITORY_RULES_SETUP.md)
- [Technical Reference](README.md)
