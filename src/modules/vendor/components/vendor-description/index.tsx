"use client"

import React, { useEffect } from "react"
import { useFormState } from "react-dom"

import Input from "@modules/common/components/input"

import AccountInfo from "@modules/account/components/account-info"
import { updateVendorDescription } from "@modules/vendor/actions"

type MyInformationProps = {
  vendor: any // TODO: Vendor
}

const VendorDescription: React.FC<MyInformationProps> = ({ vendor }) => {
  const [successState, setSuccessState] = React.useState(false)

  const [state, formAction] = useFormState(updateVendorDescription, {
    error: false,
    success: false,
  })

  const clearState = () => {
    setSuccessState(false)
  }

  useEffect(() => {
    setSuccessState(state.success)
  }, [state])

  return (
    <form action={formAction} className="w-full overflow-visible">
      <AccountInfo
        label="Description"
        currentInfo={`${vendor.description}`}
        isSuccess={successState}
        isError={!!state?.error}
        clearState={clearState}
        data-testid="vendor-description-editor"
      >
        <div className="grid grid-cols-2 gap-x-4">
          <Input
            label="Description"
            name="description"
            required
            defaultValue={vendor.description}
            data-testid="vendor-description-input"
          />
        </div>
      </AccountInfo>
    </form>
  )
}

export default VendorDescription
