"use client"

import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import { unregisterVendorAction } from "@modules/vendor/actions"
import React from "react"
import { useFormState } from "react-dom"

const VendorUnregister: React.FC = () => {
  const [message, formAction] = useFormState(unregisterVendorAction, null)

  return (
    <div className="flex flex-col gap-y-2">
      <div>
        <h1>Delete your vendor account</h1>
      </div>
      <form className="w-full flex flex-col" action={formAction}>
        <SubmitButton
          className="w-full mt-6"
          data-testid="vendor-register-button"
        >
          Unregister
        </SubmitButton>
        <ErrorMessage error={message} data-testid="vendor-register-error" />
      </form>
    </div>
  )
}

export default VendorUnregister
