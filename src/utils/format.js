// Formatting helpers used across the UI.

export function formatCurrency(amount) {
  return '$' + amount
}

export function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString()
}

export const CATEGORIES = ['Food', 'Transport', 'Housing', 'Entertainment', 'Health', 'Other']
