// Todo: Unused
import { HTMLAttributes } from "react"

interface SectionProps extends HTMLAttributes<HTMLElement> {}

export function Section(props: SectionProps) {
  return <section {...props} className={`py-12 ${props.className}`}></section>
}
