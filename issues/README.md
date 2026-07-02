# Demo issues

These 20 files are ready to paste into GitHub issues **one at a time**. Each one
already contains an `@claude` mention, so opening the issue triggers the Claude
GitHub bot to implement a fix and open a pull request.

## How to use each file
1. Open a new GitHub issue in this repo.
2. Use the file's first `#` heading as the **issue title**.
3. Paste the rest of the file into the **issue body** (keep the `@claude` line).
4. Submit. Watch the **Actions** tab — Claude will comment, push a branch, and open a PR.
5. Review the PR, merge it, then move on to the next issue.

> Tip: do them roughly in order. The early ones are real bugs baked into the code;
> the later ones are features and polish that build on those fixes.

## The issues

| #  | File | Type | Summary |
|----|------|------|---------|
| 1  | `01-total-shows-concatenated-string.md` | bug | Total is string-concatenated, not summed |
| 2  | `02-delete-removes-wrong-expense.md` | bug | Wrong item deleted when a filter is active |
| 3  | `03-react-key-warning.md` | bug | List uses array index as React key |
| 4  | `04-form-does-not-reset.md` | bug | Form keeps values after submit |
| 5  | `05-form-validation.md` | bug | Empty/negative/NaN amounts accepted |
| 6  | `06-expenses-lost-on-reload.md` | bug | localStorage save/load key mismatch |
| 7  | `07-filter-cannot-show-all.md` | bug | No "All" filter option; defaults to Food |
| 8  | `08-currency-formatting.md` | enhancement | Use `Intl.NumberFormat` for money |
| 9  | `09-edit-expense.md` | feature | Edit an existing expense |
| 10 | `10-search-box.md` | feature | Search by description |
| 11 | `11-sorting.md` | feature | Sort by date / amount |
| 12 | `12-dark-mode.md` | feature | Dark mode toggle |
| 13 | `13-category-budgets.md` | feature | Per-category budgets + warnings |
| 14 | `14-export-csv.md` | feature | Export to CSV |
| 15 | `15-monthly-summary.md` | feature | Breakdown by category |
| 16 | `16-default-date-today.md` | enhancement | Default date to today |
| 17 | `17-delete-confirmation.md` | enhancement | Confirm before delete |
| 18 | `18-empty-state-and-clear-all.md` | enhancement | Better empty states + Clear all |
| 19 | `19-accessibility.md` | enhancement | Accessibility pass |
| 20 | `20-add-tests.md` | chore | Unit tests for totals + delete |
