// Persistence helpers for the expense list.

const STORAGE_KEY = 'expense-tracker:expenses'

export function loadExpenses() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch (err) {
    console.error('Failed to load expenses', err)
    return []
  }
}

export function saveExpenses(expenses) {
  // Persist the current list so it survives a page reload.
  localStorage.setItem('expenses', JSON.stringify(expenses))
}
