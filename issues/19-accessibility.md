# Enhancement: Accessibility pass on the form and list

@claude Please improve accessibility across the app.

**Labels:** `enhancement` `a11y`

**Goal**
Make the app usable with a keyboard and screen reader.

**Expected**
- All inputs have associated labels (some are okay, verify all).
- The delete button has an accessible name that says which expense it deletes (e.g. `aria-label="Delete Coffee"`).
- Validation errors are announced (e.g. `role="alert"`).
- Interactive elements are reachable and operable by keyboard, with visible focus styles.

**Acceptance criteria**
- [ ] Every control has an accessible name.
- [ ] Delete buttons are distinguishable to assistive tech.
- [ ] Visible focus outlines are present.

**Relevant files**
- `src/components/ExpenseForm.jsx`
- `src/components/ExpenseItem.jsx`
- `src/index.css`
