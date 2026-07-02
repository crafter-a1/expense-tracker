import { formatCurrency, formatDate } from '../utils/format'

export default function ExpenseItem({ expense, onDelete }) {
  return (
    <li className="expense-item">
      <div className="expense-main">
        <span className="expense-description">{expense.description}</span>
        <span className={`badge badge-${expense.category.toLowerCase()}`}>
          {expense.category}
        </span>
      </div>
      <div className="expense-meta">
        <span className="expense-date">{formatDate(expense.date)}</span>
        <span className="expense-amount">{formatCurrency(expense.amount)}</span>
        <button className="delete-btn" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
