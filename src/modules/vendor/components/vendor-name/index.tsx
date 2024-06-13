"use client"

import React, { useEffect } from "react"
import { useFormState } from "react-dom"

import Input from "@modules/common/components/input"

import AccountInfo from "@modules/account/components/account-info"
import { updateVendorName } from "@modules/vendor/actions"

type MyInformationProps = {
  vendor: any // TODO: Vendor
}

const VendorName: React.FC<MyInformationProps> = ({ vendor }) => {
  const [successState, setSuccessState] = React.useState(false)

  const [state, formAction] = useFormState(updateVendorName, {
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
        label="Name"
        currentInfo={`${vendor.name}`}
        isSuccess={successState}
        isError={!!state?.error}
        clearState={clearState}
        data-testid="vendor-name-editor"
      >
        <div className="grid grid-cols-2 gap-x-4">
          <Input
            label="Name"
            name="name"
            required
            defaultValue={vendor.name}
            data-testid="vendor-name-input"
          />
        </div>
      </AccountInfo>
    </form>
  )
}

export default VendorName
