import {
  getCustomer,
  getCustomerVendor,
  getProductsList,
  getRegion,
} from "@lib/data"
import VendorDescription from "@modules/vendor/components/vendor-description"
import VendorName from "@modules/vendor/components/vendor-name"
import { notFound } from "next/navigation"

export default async function Sell({ countryCode }: { countryCode: string }) {
  const region = await getRegion(countryCode)

  const products = await getProductsList({
    countryCode,
  })
  const customer = await getCustomer()
  const vendor = await getCustomerVendor()

  if (!customer || !vendor) {
    notFound()
  }

  return (
    <div className="w-full" data-testid="profile-page-wrapper">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Sell</h1>
        <p className="text-base-regular">Sell your products on our platform.</p>
      </div>
      <div className="flex flex-col gap-y-8 w-full">
        <div>Current Vendor: {JSON.stringify(vendor)}</div>
        <VendorName vendor={vendor} />
        <Divider />
        <VendorDescription vendor={vendor} />
        <Divider />
        {JSON.stringify(products)}
      </div>
    </div>
  )
}

const Divider = () => {
  return <div className="w-full h-px bg-gray-200" />
}
