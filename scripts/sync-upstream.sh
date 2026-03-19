#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

TARGET_BRANCH="${1:-main}"
UPSTREAM_REMOTE="${UPSTREAM_REMOTE:-upstream}"
UPSTREAM_BRANCH="${UPSTREAM_BRANCH:-main}"
TIMESTAMP="$(date +%Y-%m-%d-%H%M%S)"
BACKUP_BRANCH="backup/${TARGET_BRANCH}-before-upstream-sync-${TIMESTAMP}"

if ! git rev-parse --verify "$TARGET_BRANCH" >/dev/null 2>&1; then
    echo "Branch '$TARGET_BRANCH' does not exist."
    exit 1
fi

if ! git remote get-url "$UPSTREAM_REMOTE" >/dev/null 2>&1; then
    echo "Remote '$UPSTREAM_REMOTE' is not configured."
    exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
    echo "Working tree is not clean. Commit or stash your changes first."
    exit 1
fi

current_branch="$(git branch --show-current)"

echo "Fetching $UPSTREAM_REMOTE..."
git fetch "$UPSTREAM_REMOTE" --prune

echo "Switching to $TARGET_BRANCH..."
git checkout "$TARGET_BRANCH"

echo "Creating backup branch $BACKUP_BRANCH..."
git branch "$BACKUP_BRANCH"

echo "Merging $UPSTREAM_REMOTE/$UPSTREAM_BRANCH into $TARGET_BRANCH..."
git merge --no-edit "$UPSTREAM_REMOTE/$UPSTREAM_BRANCH"

echo
echo "Sync complete."
echo "Backup branch: $BACKUP_BRANCH"
echo "Current branch: $(git branch --show-current)"
echo
echo "If everything looks good, push with:"
echo "  git push origin $TARGET_BRANCH"

if [[ "$current_branch" != "$TARGET_BRANCH" ]]; then
    echo
    echo "Previous branch was: $current_branch"
fi
