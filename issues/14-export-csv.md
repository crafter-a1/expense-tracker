# Feature: Export expenses to CSV

@claude Please add a button to export all expenses as a CSV file.

**Labels:** `enhancement`

**Goal**
I want to download my expenses to open them in a spreadsheet.

**Expected**
- An "Export CSV" button.
- Clicking downloads a `.csv` with columns: Date, Description, Category, Amount.
- Amounts are numeric; descriptions with commas are safely quoted.

**Acceptance criteria**
- [ ] Button generates and downloads a valid CSV.
- [ ] Header row plus one row per expense.
- [ ] Commas/quotes in fields are escaped correctly.

**Relevant files**
- `src/App.jsx`
- `src/utils/` (add a CSV helper)
