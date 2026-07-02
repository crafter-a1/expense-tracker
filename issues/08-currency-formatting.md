# Enhancement: Format amounts as proper currency

@claude Amounts render like "$10" or "$10.5". Please format them properly.

**Labels:** `enhancement`

**Problem**
`formatCurrency` just prepends a `$`. There are no cents, no thousands separators, and long decimals leak through (e.g. `$10.333333`).

**Expected**
Amounts render as currency, e.g. `$1,234.50`, using `Intl.NumberFormat`.

**Acceptance criteria**
- [ ] `formatCurrency` uses `Intl.NumberFormat` with USD, 2 decimal places.
- [ ] Used consistently for line items and the total.

**Relevant files**
- `src/utils/format.js`
