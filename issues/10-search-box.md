# Feature: Search expenses by description

@claude Please add a search box to filter expenses by their description text.

**Labels:** `enhancement`

**Goal**
As my list grows I want to quickly find an expense by typing part of its description.

**Expected**
- A search input above the list.
- Typing filters the visible expenses to those whose description contains the query (case-insensitive).
- Works together with the category filter.

**Acceptance criteria**
- [ ] Search input filters the list live as I type.
- [ ] Case-insensitive substring match.
- [ ] Combines with the existing category filter.

**Relevant files**
- `src/App.jsx`
- `src/components/FilterBar.jsx`
