# Bug: Form accepts empty descriptions and invalid amounts

@claude The form lets me submit garbage. Please add validation.

**Labels:** `bug`

**Problem**
I can submit an expense with an empty description, a blank amount, `0`, a negative number, or a non-numeric value. These create broken rows and throw off the total.

**Expected**
Submitting is blocked (with a clear inline message) unless:
- Description is non-empty.
- Amount is a number greater than 0.
- A date is selected.

**Acceptance criteria**
- [ ] Invalid submissions are prevented and show a helpful message.
- [ ] Valid submissions work exactly as before.

**Relevant files**
- `src/components/ExpenseForm.jsx`
