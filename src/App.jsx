import { useEffect, useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import FilterBar from './components/FilterBar'
import Summary from './components/Summary'
import { loadExpenses, saveExpenses } from './utils/storage'

export default function App() {
  const [expenses, setExpenses] = useState(() => loadExpenses())
  const [filter, setFilter] = useState('Food')

  useEffect(() => {
    saveExpenses(expenses)
  }, [expenses])

  function addExpense(expense) {
    setExpenses((prev) => [expense, ...prev])
  }

  function deleteExpense(index) {
    setExpenses((prev) => {
      const next = [...prev]
      next.splice(index, 1)
      return next
    })
  }

  const visibleExpenses = expenses.filter((e) => e.category === filter)

  return (
    <div className="app">
      <header className="app-header">
        <h1>💸 Expense Tracker</h1>
        <p>Track where your money goes.</p>
      </header>

      <main className="layout">
        <section className="sidebar">
          <ExpenseForm onAdd={addExpense} />
        </section>

        <section className="content">
          <Summary expenses={expenses} />
          <FilterBar value={filter} onChange={setFilter} />
          <ExpenseList expenses={visibleExpenses} onDelete={deleteExpense} />
        </section>
      </main>
    </div>
  )
}
