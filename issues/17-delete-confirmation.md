# Enhancement: Confirm before deleting an expense

@claude Please ask for confirmation before an expense is deleted.

**Labels:** `enhancement` `good first issue`

**Problem**
Clicking "Delete" removes an expense instantly with no undo, so accidental clicks lose data.

**Expected**
- Clicking "Delete" asks the user to confirm before removing the item.
- A confirmation dialog or an inline "Are you sure? Yes / No" is fine.

**Acceptance criteria**
- [ ] Deletion only happens after explicit confirmation.
- [ ] Cancelling leaves the expense untouched.

**Relevant files**
- `src/components/ExpenseItem.jsx`
