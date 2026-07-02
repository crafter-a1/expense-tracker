# Bug: Category filter can't show all expenses

@claude There's no way to see all categories at once. Filtering is stuck.

**Labels:** `bug`

**Problem**
The filter defaults to "Food" and only lets me pick a single category — there's no "All" option, so on first load the app hides every expense that isn't Food. Users think their data is missing.

**Expected**
- An "All" option that shows every expense.
- The filter defaults to "All" on first load.

**Acceptance criteria**
- [ ] `FilterBar` includes an "All" choice.
- [ ] Default filter is "All".
- [ ] Selecting "All" shows expenses from every category.

**Relevant files**
- `src/App.jsx`
- `src/components/FilterBar.jsx`
