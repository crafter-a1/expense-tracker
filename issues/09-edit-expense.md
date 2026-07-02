# Feature: Edit an existing expense

@claude Please add the ability to edit an expense after it's been added.

**Labels:** `enhancement`

**Goal**
Right now expenses can only be added or deleted. I want to correct a typo in the description or fix an amount without deleting and re-adding.

**Expected**
- Each expense has an "Edit" button.
- Clicking it lets me change description, amount, category, and date (inline or in the form).
- Saving updates that expense in place; the total and list refresh.

**Acceptance criteria**
- [ ] Existing expenses can be edited and saved.
- [ ] Edits persist across reload.
- [ ] Cancel discards changes.

**Relevant files**
- `src/App.jsx`
- `src/components/ExpenseItem.jsx`
- `src/components/ExpenseForm.jsx`
