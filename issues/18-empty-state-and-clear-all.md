# Enhancement: Better empty states and a "Clear all" action

@claude Please improve the empty states and add a "Clear all" button.

**Labels:** `enhancement`

**Problem**
- When a filter/search returns nothing, the list looks broken (or shows the generic "no expenses" text).
- There's no quick way to wipe the list to start over.

**Expected**
- A filter/search with no matches shows a context-specific message (e.g. "No expenses match your filters").
- A "Clear all" button removes every expense (with confirmation).

**Acceptance criteria**
- [ ] Distinct empty states for "no expenses at all" vs "no matches".
- [ ] "Clear all" empties the list after confirmation and updates persistence.

**Relevant files**
- `src/App.jsx`
- `src/components/ExpenseList.jsx`
