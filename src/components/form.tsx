import { useId } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const scheme = z.object({
  familyName: z.string(),
  givenName: z.string(),
})

type FormValue = z.infer<typeof scheme>

export const Form = () => {
  const { register, handleSubmit } = useForm<FormValue>()

  const onSubmit = (value: FormValue) => {
    window.alert(value)
  }

  const id1 = useId()
  const id2 = useId()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor={id1}>familyName</label>
      <input id={id1} {...register("familyName")} type="text" />
      <label htmlFor={id2}>givenName</label>
      <input id={id2} {...register("givenName")} type="text" />
      <button type="submit">Submit</button>
    </form>
  )
}
