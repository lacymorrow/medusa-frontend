"use client"

import { Customer } from "@medusajs/medusa"
import React, { useEffect } from "react"
import { useFormState } from "react-dom"

import { updateCustomerName } from "@modules/account/actions"

import { Button } from "@medusajs/ui"

type MyInformationProps = {
  customer: Omit<Customer, "password_hash">
}

const ProfileName: React.FC<MyInformationProps> = ({ customer }) => {
  const [successState, setSuccessState] = React.useState(false)

  const [state, formAction] = useFormState(updateCustomerName, {
    error: false,
    success: false,
  })

  const clearState = () => {
    setSuccessState(false)
  }

  useEffect(() => {
    setSuccessState(state.success)
  }, [state])

  return <Button>Sign Up to Be a Vendor</Button>
}

export default ProfileName
