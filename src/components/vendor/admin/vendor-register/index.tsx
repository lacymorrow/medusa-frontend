"use client"

import { registerVendorAction } from "@/components/vendor/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import React from "react"
import { useFormState } from "react-dom"

const VendorRegister: React.FC = () => {
  const [message, formAction] = useFormState(registerVendorAction, null)

  return (
    <div className="flex flex-col gap-y-2">
      <div>
        <h1>Sign up as a vendor</h1>
      </div>
      <form className="w-full flex flex-col" action={formAction}>
        <SubmitButton
          className="w-full mt-6"
          data-testid="vendor-register-button"
        >
          Register
        </SubmitButton>
        <ErrorMessage error={message} data-testid="vendor-register-error" />
      </form>
    </div>
  )
}

export default VendorRegister
