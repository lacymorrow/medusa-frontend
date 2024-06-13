/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2ARAfBMU3Oe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HTMLAttributes } from "react"

interface ComponentProps extends HTMLAttributes<HTMLFormElement> {}

export function VendorSignupForm(props: ComponentProps) {
  return (
    <form {...props} className={`grid grid-cols-2 gap-6 ${props.className}`}>
      <Input id="nursery-name" placeholder="Nursery Name" />
      <Input id="nursery-website" placeholder="Nursery Website" />
      <Input id="nursery-address" placeholder="Nursery Address" />
      <Input
        id="contact-person-first-name"
        placeholder="Contact Person First Name"
      />
      <Input
        id="contact-person-last-name"
        placeholder="Contact Person Last Name"
      />
      <Input id="phone-number" placeholder="Phone Number" />
      <Input id="email-address" placeholder="Email Address" type="email" />
      <Input id="password" placeholder="Password?" type="password" />
      <Button className="col-span-2 bg-black text-white">Register</Button>
    </form>
  )
}
