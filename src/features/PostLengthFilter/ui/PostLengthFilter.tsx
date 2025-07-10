import { type ChangeEvent } from "react"
import s from "./PostLengthFilter.module.css"

type FilteredPostsProps = {
  onChange: (length: number | null) => void
  length: number | null
}

export const PostLengthFilter = ({ onChange, length }: FilteredPostsProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number.isNaN(e.target.valueAsNumber) ? null : e.target.valueAsNumber)
  }

  return (
    <div>
      <label htmlFor="titleLength" className={s.label}>
        Filter by title length:{" "}
      </label>
      <input
        id="titleLength"
        className={s.input}
        min={0}
        value={length ?? ""}
        onChange={handleChange}
        type={"number"}
        placeholder="min title length"
      />
    </div>
  )
}
