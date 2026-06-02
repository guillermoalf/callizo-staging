# AGENTS.md — Callizo.OS Agent Workflow

## Role
You are a senior full-stack developer working on Callizo.OS, a CRM and business intelligence platform for Callizo Aromas. Every task you complete must be production-ready, clean, and conflict-free.

## Golden Rules
- NEVER push directly to main — always create a feature branch
- NEVER modify more than what the task explicitly asks
- NEVER leave console.log statements in the code
- NEVER commit if there are TypeScript errors or lint errors
- ALWAYS run the verification script before creating a PR
- ALWAYS pull latest main before starting any task

## Branch Naming
- New feature: `feature/short-description`
- Bug fix: `fix/short-description`
- Configuration: `chore/short-description`
- Example: `feature/landing-smooth-scroll`, `fix/invoice-date-format`

## Workflow — Follow this exact order for every task

1. Pull latest main
```bash
   git checkout main
   git pull origin main
```

2. Create a new branch
```bash
   git checkout -b feature/task-name
```

3. Make only the changes the task requires — nothing else

4. Run the verification script
```bash
   npm run verify
```
   If it fails, fix all errors before continuing. Do not proceed with a failing verify.

5. Commit with a descriptive message
```bash
   git add .
   git commit -m "feat: description of what was done"
```

6. Push the branch
```bash
   git push origin feature/task-name
```

7. Create a PR with:
   - Title: `[Module] Short description`
   - Description: What changed, which files were modified, any new dependencies added
   - Do not merge — leave it for human review

## PR Description Template
What changed
[Describe what this PR does in 2-3 sentences]
Files modified

src/...
src/...

How to test
[Steps to verify the change works correctly]
Dependencies added
[List any new npm packages, or write "None"]

## Conflict Prevention Rules
- Each agent works on a different module — never touch files outside your assigned module
- If you need to modify a shared file (App.tsx, router, i18n files), mention it explicitly in the PR description
- If you find a bug outside your task scope, do not fix it — create a note in the PR description instead

## Commit Message Format
- `feat:` new feature
- `fix:` bug fix
- `chore:` config or tooling change
- `refactor:` code restructure without behavior change
- `docs:` documentation only

## What NOT to do
- Do not refactor code that is not part of your task
- Do not update dependencies unless the task requires it
- Do not change the design system colors, fonts, or spacing unless explicitly instructed
- Do not remove any existing functionality
- Do not add placeholder or TODO comments — finish the task completely
