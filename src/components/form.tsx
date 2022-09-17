import { useId } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import "./form.css"

const scheme = z.object({
  familyName: z.string().min(1),
  givenName: z.string().min(1).optional(),
})

type FormValue = z.infer<typeof scheme>

export const Form = () => {
  const { register, handleSubmit } = useForm<FormValue>({
    resolver: zodResolver(scheme),
  })

  const onSubmit: SubmitHandler<FormValue> = value => {
    console.log({ value })
  }

  const id1 = useId()
  const id2 = useId()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <label htmlFor={id1}>familyName</label>
      <input id={id1} {...register("familyName")} type="text" />
      <label htmlFor={id2}>givenName(optional)</label>
      <input id={id2} {...register("givenName")} type="text" />
      <button type="submit">Submit</button>
    </form>
  )
}
