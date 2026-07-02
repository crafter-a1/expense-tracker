# Feature: Sort expenses by date or amount

@claude Please let me sort the expense list.

**Labels:** `enhancement`

**Goal**
I want to order expenses newest-first, oldest-first, highest-amount, or lowest-amount.

**Expected**
- A "Sort by" control with options: Date (newest), Date (oldest), Amount (high→low), Amount (low→high).
- The list reorders accordingly.

**Acceptance criteria**
- [ ] All four sort options work.
- [ ] Sorting composes with filtering/search.
- [ ] Default is newest-first.

**Relevant files**
- `src/App.jsx`
- `src/components/FilterBar.jsx`
