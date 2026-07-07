# Contributing

This repository is the source for a portfolio site that is **statically exported and auto deployed to GitHub Pages on every push to `main`** (see `.github/workflows/deploy.yml`). Because `main` is the live branch, we do not commit directly to it.

## Workflow

All changes go through a pull request:

1. **Branch off `main`.**
   ```
   git checkout main && git pull
   git checkout -b <type>/<short-description>   # e.g. feat/case-study-video, fix/broken-link
   ```
2. **Make the change and verify it builds.**
   ```
   npm run build
   ```
   For anything visual, run the dev server and check it in the browser before pushing.
3. **Commit** with a message that says what changed and why.
4. **Push the branch and open a PR into `main`.**
   ```
   git push -u origin <branch>
   gh pr create --base main --fill
   ```
5. **Merge the PR.** Merging to `main` triggers the Pages deploy. Confirm the run succeeds and the live site reflects the change.

## Notes

- Keep one logical change per PR so the diff is easy to review.
- Content for the systems lives in `src/data/projects.ts`; each entry renders through `src/components/ui/Card.tsx`. Illustrative visuals live in `src/components/ui/SystemArtifact.tsx`.
- Never commit real internal metrics, employer names, or platform specifics for work covered by an NDA. Describe it at the pattern level.
