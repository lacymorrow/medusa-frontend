import { getCustomer } from "@lib/data"
import { getCustomerVendor } from "@lib/data/vendor"
import VendorRegister from "@modules/vendor/components/vendor-register"
import VendorUnregister from "@modules/vendor/components/vendor-unregister"
import { notFound } from "next/navigation"
interface PageProps {
  countryCode: string
}

export default async function Page() {
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
        <VendorRegister />
        <Divider />
        <VendorUnregister />
        <Divider />
      </div>
    </div>
  )
}

const Divider = () => {
  return <div className="w-full h-px bg-gray-200" />
}
