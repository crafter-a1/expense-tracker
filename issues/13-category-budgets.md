# Feature: Per-category budgets with over-budget warning

@claude Please add monthly budgets per category with a visual warning when exceeded.

**Labels:** `enhancement`

**Goal**
I want to set a budget for a category (e.g. Food = $300) and be warned when my spending in that category goes over.

**Expected**
- A way to set a budget per category.
- The summary shows spent vs. budget for each category.
- When spending exceeds the budget, that category is visually flagged (e.g. red).

**Acceptance criteria**
- [ ] Budgets can be set and persist.
- [ ] Spent-vs-budget is shown per category.
- [ ] Over-budget categories are clearly highlighted.

**Relevant files**
- `src/App.jsx`
- `src/components/Summary.jsx`
