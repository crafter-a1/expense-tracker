import { CATEGORIES } from '../utils/format'

export default function FilterBar({ value, onChange }) {
  return (
    <div className="filter-bar">
      <label htmlFor="filter">Filter</label>
      <select
        id="filter"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  )
}
