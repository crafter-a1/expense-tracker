# Bug: Add-expense form does not clear after submitting

@claude After I add an expense the form keeps my previous input. Please reset it.

**Labels:** `bug`

**Problem**
After submitting a new expense, the description, amount, and date fields still hold the values I just entered, so I have to clear them manually before adding the next one.

**Expected**
After a successful add, the form resets to its empty/default state (description empty, amount empty, category back to default, date cleared or set to today).

**Acceptance criteria**
- [ ] All fields reset after a successful submit.
- [ ] Focus optionally returns to the description field for fast entry.

**Relevant files**
- `src/components/ExpenseForm.jsx`
