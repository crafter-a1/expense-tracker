# Bug: Deleting an expense removes the wrong one when a filter is active

@claude Deleting the wrong item when a category filter is applied. Please fix.

**Labels:** `bug`

**Problem**
When a category filter is active, the list shows a filtered subset, but clicking "Delete" removes a different expense than the one I clicked. It seems delete is using the position in the filtered list rather than identifying the actual expense.

**Steps to reproduce**
1. Add expenses in multiple categories.
2. Filter to one category.
3. Delete an item in the filtered view.
4. Clear the filter — the wrong expense is gone.

**Expected**
The exact expense whose "Delete" button was clicked is the one removed, regardless of any active filter.

**Acceptance criteria**
- [ ] Delete targets an expense by its unique `id`, not its array index.
- [ ] Deleting works correctly whether or not a filter is applied.

**Relevant files**
- `src/App.jsx`
- `src/components/ExpenseList.jsx`
- `src/components/ExpenseItem.jsx`
