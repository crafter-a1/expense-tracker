# Bug: Expenses disappear after reloading the page

@claude My expenses vanish when I refresh. Persistence looks broken.

**Labels:** `bug`

**Problem**
I add several expenses, refresh the browser, and they're all gone. It looks like the app saves to one localStorage key but reads from a different one.

**Steps to reproduce**
1. Add a few expenses.
2. Refresh the page.
3. The list is empty.

**Expected**
Expenses persist across reloads.

**Acceptance criteria**
- [ ] Saving and loading use the same storage key.
- [ ] Expenses survive a page refresh.

**Relevant files**
- `src/utils/storage.js`
