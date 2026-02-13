# GitHub Repository Rulesets

This directory contains JSON configuration files for GitHub repository rulesets. These rulesets enforce branch protection rules, required reviews, status checks, and other repository policies.

## Available Rulesets

### 1. Main Branch Protection (`main-branch-protection.json`)

Protects the `main` branch with the following rules:

- **Pull Request Required**: At least 1 approving review required
- **Dismiss Stale Reviews**: Reviews are dismissed when new commits are pushed
- **Require Conversation Resolution**: All review threads must be resolved
- **Required Status Checks**: 
  - CI Gatekeeper workflow must pass (Lint & Edge Build)
  - Branches must be up to date before merging
- **Prevent Deletion**: Main branch cannot be deleted
- **Prevent Force Push**: Force pushes are blocked
- **Linear History**: Merge commits required (no fast-forward merges)

**Bypass**: Repository administrators can bypass these rules

### 2. Deploy Branch Protection (`deploy-branch-protection.json`)

Protects the `live-deploy` branch with stricter rules:

- **Pull Request Required**: At least 1 approving review required
- **Dismiss Stale Reviews**: Reviews are dismissed when new commits are pushed
- **Require Last Push Approval**: Someone other than the author must approve the last push
- **Require Conversation Resolution**: All review threads must be resolved
- **Required Status Checks**: 
  - CI Gatekeeper workflow must pass (Lint & Edge Build)
  - Branches must be up to date before merging
- **Prevent Deletion**: Deploy branch cannot be deleted
- **Prevent Force Push**: Force pushes are blocked
- **Linear History**: Merge commits required

**Bypass**: Repository administrators can bypass these rules

## How to Apply Rulesets

GitHub rulesets can be configured through the GitHub UI or API. These JSON files serve as templates.

### Option 1: GitHub Web Interface (Recommended)

1. Go to your repository on GitHub
2. Click **Settings** → **Rules** → **Rulesets**
3. Click **New ruleset** → **New branch ruleset**
4. Use the JSON files in this directory as a reference to configure:
   - Ruleset name
   - Target branches
   - Branch protections
   - Status check requirements
   - Bypass permissions

### Option 2: GitHub API

Use the GitHub REST API to create rulesets programmatically:

```bash
# Create main branch ruleset
curl -X POST \
  -H "Authorization: token YOUR_GITHUB_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/M0naMach/Machin3-Bas3/rulesets \
  -d @.github/rulesets/main-branch-protection.json

# Create deploy branch ruleset
curl -X POST \
  -H "Authorization: token YOUR_GITHUB_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/M0naMach/Machin3-Bas3/rulesets \
  -d @.github/rulesets/deploy-branch-protection.json
```

### Option 3: GitHub CLI

```bash
# List existing rulesets
gh api repos/M0naMach/Machin3-Bas3/rulesets

# Create a ruleset
gh api repos/M0naMach/Machin3-Bas3/rulesets \
  --input .github/rulesets/main-branch-protection.json
```

## Ruleset Components Explained

### Rule Types

- **`pull_request`**: Requires pull requests with approving reviews
- **`required_status_checks`**: Requires specific CI checks to pass
- **`deletion`**: Prevents branch deletion
- **`non_fast_forward`**: Prevents force pushes
- **`required_linear_history`**: Enforces merge commits

### Bypass Actors

The `bypass_actors` array defines who can bypass the rules:
- `actor_id: 5` with `RepositoryRole` = Repository administrators
- `bypass_mode: "always"` = Can always bypass

### Enforcement Modes

- **`active`**: Rules are enforced (recommended for production)
- **`evaluate`**: Rules are evaluated but not enforced (for testing)
- **`disabled`**: Rules are not evaluated or enforced

## Best Practices

1. **Start with `evaluate` mode** to test rulesets before enforcing
2. **Keep rulesets focused** - separate rulesets for different branch patterns
3. **Document bypass procedures** for emergency situations
4. **Review regularly** - update rules as team practices evolve
5. **Use status checks** from your CI workflows for automated validation

## Customization

To customize these rulesets for your needs:

1. **Adjust review requirements**:
   ```json
   "required_approving_review_count": 2  // Require 2 approvals
   ```

2. **Add code owner review**:
   ```json
   "require_code_owner_review": true
   ```

3. **Add more status checks**:
   ```json
   "required_status_checks": [
     {"context": "Lint & Edge Build"},
     {"context": "Security Scan"},
     {"context": "E2E Tests"}
   ]
   ```

4. **Change enforcement mode**:
   ```json
   "enforcement": "evaluate"  // Test mode
   ```

## Troubleshooting

### Status Check Not Found
If you get "Required status check context not found":
- Verify the check name matches exactly in your workflow
- Check that the workflow runs on pull requests to the target branch
- The check name comes from the job name, not the workflow name

### Cannot Push to Protected Branch
This is expected! You should:
1. Create a feature branch
2. Push changes to the feature branch
3. Open a pull request to the protected branch
4. Get required approvals
5. Merge when checks pass

### Need to Bypass Rules
Repository administrators can:
1. Temporarily disable the ruleset
2. Use their bypass permission
3. Make the change
4. Re-enable the ruleset

**Remember**: Bypass should be used sparingly and documented!

## Related Documentation

- [GitHub Rulesets Documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)
- [Branch Protection Rules](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- [Required Status Checks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)
