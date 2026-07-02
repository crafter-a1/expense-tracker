import { useState } from 'react'
import { CATEGORIES } from '../utils/format'

export default function ExpenseForm({ onAdd }) {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('Food')
  const [date, setDate] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const expense = {
      id: Date.now(),
      description,
      amount,
      category,
      date,
    }

    onAdd(expense)
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h2>Add expense</h2>

      <div className="field">
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Coffee, rent, ..."
        />
      </div>

      <div className="field">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.00"
        />
      </div>

      <div className="field">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button type="submit">Add</button>
    </form>
  )
}
