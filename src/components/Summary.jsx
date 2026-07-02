import { formatCurrency } from '../utils/format'

export default function Summary({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)
  const count = expenses.length

  return (
    <div className="summary">
      <div className="summary-card">
        <span className="summary-label">Total spent</span>
        <span className="summary-value">{formatCurrency(total)}</span>
      </div>
      <div className="summary-card">
        <span className="summary-label">Transactions</span>
        <span className="summary-value">{count}</span>
      </div>
    </div>
  )
}
