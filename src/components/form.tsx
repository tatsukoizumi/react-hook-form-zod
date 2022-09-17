import { useId } from "react"

export const Form = () => {
  const id1 = useId()
  const id2 = useId()

  return (
    <form>
      <label htmlFor={id1}>item1</label>
      <input id={id1} type="text" />
      <label htmlFor={id2}>item2</label>
      <input id={id2} type="text" />
      <button type="submit">Submit</button>
    </form>
  )
}
