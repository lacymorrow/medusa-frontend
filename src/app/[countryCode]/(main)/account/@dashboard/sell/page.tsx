import { Metadata } from "next"

import { getCustomer, getProductsList, getRegion, listRegions } from "@lib/data"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Profile",
  description: "View and edit your Medusa Store profile.",
}

export default async function Profile({
  countryCode,
}: {
  countryCode: string
}) {
  const region = await getRegion(countryCode)

  const products = await getProductsList({
    countryCode,
  })
  const customer = await getCustomer()
  const regions = await listRegions()

  if (!customer || !regions) {
    notFound()
  }

  return (
    <div className="w-full" data-testid="profile-page-wrapper">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Sell</h1>
        <p className="text-base-regular">Sell your products on our platform.</p>
      </div>
      <div className="flex flex-col gap-y-8 w-full">
        {JSON.stringify(products)}
      </div>
    </div>
  )
}

const Divider = () => {
  return <div className="w-full h-px bg-gray-200" />
}
