import ExpenseItem from './ExpenseItem'

export default function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return <p className="empty">No expenses yet. Add your first one above.</p>
  }

  return (
    <ul className="expense-list">
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          expense={expense}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  )
}
