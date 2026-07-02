# Feature: Dark mode toggle

@claude Please add a dark mode toggle.

**Labels:** `enhancement`

**Goal**
I'd like a dark theme for night-time use.

**Expected**
- A toggle (button or switch) in the header.
- Switches the whole UI between light and dark palettes.
- The choice is remembered across reloads.

**Acceptance criteria**
- [ ] Toggle switches themes using CSS variables.
- [ ] Preference persists in localStorage.
- [ ] Both themes are readable (adequate contrast).

**Relevant files**
- `src/App.jsx`
- `src/index.css`
