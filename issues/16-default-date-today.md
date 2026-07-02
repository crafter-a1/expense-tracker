# Enhancement: Default the date field to today

@claude Please default the "Date" field to today's date.

**Labels:** `enhancement` `good first issue`

**Problem**
The date field starts empty, so I have to open the date picker for every expense even though most are for today.

**Expected**
- The date input defaults to today's date when the form loads and after a reset.
- I can still change it.

**Acceptance criteria**
- [ ] Date defaults to today (`YYYY-MM-DD`).
- [ ] After adding an expense, the date resets back to today.

**Relevant files**
- `src/components/ExpenseForm.jsx`
