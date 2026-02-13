# Repository Rules Setup Guide

This guide explains how to set up and configure GitHub repository rulesets for the Machin3-Bas3 repository.

## What are Repository Rulesets?

Repository rulesets are GitHub's modern approach to branch protection and repository governance. They allow you to:

- Require pull request reviews before merging
- Enforce status checks (like CI builds)
- Prevent deletion of important branches
- Block force pushes
- Require linear commit history

## Quick Start

### Step 1: Access Repository Settings

1. Navigate to the repository on GitHub: https://github.com/M0naMach/Machin3-Bas3
2. Click on **Settings** (requires admin access)
3. In the left sidebar, click **Rules** → **Rulesets**

### Step 2: Create Main Branch Ruleset

1. Click **New ruleset** → **New branch ruleset**
2. Name it: `Main Branch Protection`
3. Set **Enforcement status**: `Active`
4. Under **Target branches**, click **Add target** → **Include default branch**
5. Configure the following rules:

   **Branch protections:**
   - ✅ Require a pull request before merging
     - Required approvals: `1`
     - ✅ Dismiss stale pull request approvals when new commits are pushed
     - ✅ Require conversation resolution before merging
   
   **Status checks:**
   - ✅ Require status checks to pass
     - ✅ Require branches to be up to date before merging
     - Add status check: `Lint & Edge Build`
   
   **Additional rules:**
   - ✅ Block deletions
   - ✅ Block force pushes
   - ✅ Require linear history

6. Under **Bypass list**, add: `Repository admin` (allows admins to bypass in emergencies)
7. Click **Create**

### Step 3: Create Deploy Branch Ruleset (Optional but Recommended)

1. Click **New ruleset** → **New branch ruleset**
2. Name it: `Deploy Branch Protection`
3. Set **Enforcement status**: `Active`
4. Under **Target branches**, click **Add target** → **Include by pattern** → Enter: `live-deploy`
5. Configure the same rules as Main Branch, plus:
   - ✅ Require approval of the most recent reviewable push

6. Click **Create**

## Using the JSON Templates

We've provided pre-configured JSON templates in `.github/rulesets/`:

- `main-branch-protection.json` - For the main branch
- `deploy-branch-protection.json` - For the live-deploy branch

### Apply via GitHub API

```bash
# Set your GitHub token
export GITHUB_TOKEN="your_personal_access_token"

# Create main branch ruleset
curl -X POST \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/M0naMach/Machin3-Bas3/rulesets \
  -d @.github/rulesets/main-branch-protection.json

# Create deploy branch ruleset
curl -X POST \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/M0naMach/Machin3-Bas3/rulesets \
  -d @.github/rulesets/deploy-branch-protection.json
```

### Apply via GitHub CLI

```bash
# Install GitHub CLI if needed: https://cli.github.com/

# Create rulesets
gh api repos/M0naMach/Machin3-Bas3/rulesets \
  --input .github/rulesets/main-branch-protection.json

gh api repos/M0naMach/Machin3-Bas3/rulesets \
  --input .github/rulesets/deploy-branch-protection.json
```

## What These Rules Do

### For the Main Branch

1. **Pull Requests Required** - Direct commits to main are blocked
2. **1 Approval Required** - At least one person must review and approve
3. **Status Checks** - CI must pass (linting + build)
4. **Up-to-date Branches** - Must merge latest main before merging PR
5. **No Deletions** - Can't accidentally delete main
6. **No Force Push** - Can't rewrite history
7. **Linear History** - Keeps a clean commit history

### For the Deploy Branch

Same as main, plus:
- **Last Push Approval** - The most recent push must be approved by someone other than the author

## Impact on Workflow

### Before Rulesets

```bash
git checkout main
git add .
git commit -m "changes"
git push  # ✅ Allowed
```

### After Rulesets

```bash
# Create a feature branch
git checkout -b feature/my-changes
git add .
git commit -m "changes"
git push origin feature/my-changes

# Create PR on GitHub
# Wait for CI to pass
# Get 1 approval
# Merge PR  # ✅ Allowed
```

## Emergency Bypass

Repository administrators can bypass these rules when necessary:

1. Go to the ruleset in Settings → Rules → Rulesets
2. Click on the ruleset name
3. Temporarily set **Enforcement status** to `Disabled`
4. Make your emergency changes
5. Re-enable the ruleset

**Important**: Document any bypass usage and why it was necessary!

## Testing Before Enforcing

To test rulesets without blocking work:

1. When creating the ruleset, set **Enforcement status** to `Evaluate`
2. This will show what would happen without actually blocking
3. Review the evaluation results
4. Switch to `Active` when ready

## Verification

To verify your rulesets are working:

1. Try to push directly to main - should be blocked
2. Create a PR without CI passing - should not be mergeable
3. Create a PR with CI passing but no approval - should not be mergeable
4. Create a PR with approval and passing CI - should be mergeable ✅

## Troubleshooting

### "Required status check is not found"

The status check name must exactly match a job name in your CI workflow. Check `.github/workflows/ci.yml`:

```yaml
jobs:
  validate:
    name: "Lint & Edge Build"  # ← This is the status check name
```

### "Cannot push to protected branch"

This is expected! Create a feature branch and open a PR instead.

### Need to make a quick fix

Even with rulesets:
1. Create a branch: `git checkout -b hotfix/urgent-fix`
2. Make changes and push
3. Create PR
4. Get fast-track approval
5. Merge

Or use admin bypass if truly urgent.

## Customization

See `.github/rulesets/README.md` for detailed customization options including:
- Changing approval count
- Adding more status checks
- Requiring code owner reviews
- Configuring bypass permissions

## Additional Resources

- [GitHub Rulesets Documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)
- [CI Workflow](.github/workflows/ci.yml) - See what checks run
- [Deploy Workflow](.github/workflows/deploy.yml) - See deployment process

---

**Questions?** Check `.github/rulesets/README.md` for more detailed information.
