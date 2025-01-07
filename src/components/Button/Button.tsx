import clsx from "clsx"
import type { ComponentPropsWithoutRef } from "react"
import s from "./Button.module.css"

type Props = {
  variant?: "primary" | "outlined" | "secondary"
} & ComponentPropsWithoutRef<"button">

export const Button = ({ variant = "primary", className, ...rest }: Props) => {
  return <button className={clsx(s.button, s[variant], className)} {...rest} />
}
