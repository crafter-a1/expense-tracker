# Chore: Add unit tests for totals and delete logic

@claude Please add unit tests covering the core logic.

**Labels:** `test` `chore`

**Goal**
Lock in the behavior of the money math and delete logic so future changes don't regress them. The project already has Vitest + Testing Library configured (`npm test`).

**Expected tests**
- `Summary` / total: adding numeric amounts produces the correct numeric sum (guards against the string-concatenation bug).
- `formatCurrency`: formats values as `$1,234.50`.
- Delete: removing an expense by `id` removes the correct one even with a filter applied.

**Acceptance criteria**
- [ ] New tests live under `src/` (e.g. `*.test.jsx`).
- [ ] `npm test` passes.
- [ ] Tests fail if the original bugs are reintroduced.

**Relevant files**
- `src/components/Summary.jsx`
- `src/utils/format.js`
- `src/App.jsx`
