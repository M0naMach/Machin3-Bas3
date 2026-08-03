#!/bin/bash

# Session Auto-Commit Hook
# Automatically commits and pushes changes when a Copilot session ends

set -euo pipefail

# Check if SKIP_AUTO_COMMIT is set
if [[ "${SKIP_AUTO_COMMIT:-}" == "true" ]]; then
  echo "⏭️  Auto-commit skipped (SKIP_AUTO_COMMIT=true)"
  exit 0
fi

# Check if we're in a git repository
if ! git rev-parse --is-inside-work-tree &>/dev/null; then
  echo "⚠️  Not in a git repository"
  exit 0
fi

# Check for uncommitted changes
if [[ -z "$(git status --porcelain)" ]]; then
  echo "✨ No changes to commit"
  exit 0
fi

echo "📦 Auto-committing changes from Copilot session..."

# Stage all changes
git add -A

# Create timestamped commit
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
git commit -m "auto-commit: $TIMESTAMP" --no-verify 2>/dev/null || {
  echo "⚠️  Commit failed"
  exit 0
}

# Attempt to push only when explicitly enabled and safe
if [[ "${AUTO_COMMIT_PUSH:-false}" != "true" ]]; then
  echo "✅ Changes committed locally (push skipped; set AUTO_COMMIT_PUSH=true to enable push)"
  exit 0
fi

CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")"
case "$CURRENT_BRANCH" in
  main|master|live-deploy)
    echo "⚠️  Push skipped on protected branch: $CURRENT_BRANCH"
    exit 0
    ;;
esac

if ! git rev-parse --abbrev-ref --symbolic-full-name '@{u}' &>/dev/null; then
  echo "⚠️  Push skipped - no upstream branch configured"
  exit 0
fi

if git push 2>/dev/null; then
  echo "✅ Changes committed and pushed successfully"
else
  echo "⚠️  Push failed - changes committed locally"
fi

exit 0
