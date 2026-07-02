# Bug: React warning — list items use array index as key

@claude The console shows a React key warning on the expense list. Please fix it properly.

**Labels:** `bug`

**Problem**
The expense list renders items using the array index as the React `key`. This produces subtle re-render bugs and a console warning, and it's related to the wrong-item-deleted behavior.

**Expected**
Each list item uses a stable, unique key (the expense `id`).

**Acceptance criteria**
- [ ] `ExpenseList` uses `expense.id` as the key.
- [ ] No key-related warnings in the console.

**Relevant files**
- `src/components/ExpenseList.jsx`
