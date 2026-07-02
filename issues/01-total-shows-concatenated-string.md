# Bug: "Total spent" shows a concatenated string instead of a number

@claude The "Total spent" figure at the top of the tracker is wrong. Please fix it.

**Labels:** `bug`

**Problem**
When I add a few expenses, "Total spent" shows something like `$0102550` instead of the real sum. It looks like the amounts are being joined together as text rather than added up.

**Steps to reproduce**
1. Add an expense of `10`, then `25`, then `50`.
2. Look at the "Total spent" card.

**Expected**
Total spent should be `$85.00` (the arithmetic sum of all amounts).

**Acceptance criteria**
- [ ] Amounts are treated as numbers, not strings.
- [ ] The total is the correct numeric sum of every expense.

**Relevant files**
- `src/components/ExpenseForm.jsx`
- `src/components/Summary.jsx`
