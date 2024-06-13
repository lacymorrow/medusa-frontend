import { getCustomer, getProductsList, getRegion } from "@lib/data"
import { getCustomerVendor, getVendorProducts } from "@lib/data/vendor"
import VendorDescription from "@modules/vendor/components/vendor-description"
import VendorInventorySelect from "@modules/vendor/components/vendor-inventory-select"
import VendorName from "@modules/vendor/components/vendor-name"
import { notFound } from "next/navigation"
interface PageProps {
  params: { countryCode: string }
}
export default async function Page({ params }: PageProps) {
  const region = await getRegion(params.countryCode)

  const products = await getProductsList({
    countryCode: params.countryCode,
  })
  const customer = await getCustomer()
  const vendor = await getCustomerVendor()
  const vendorProducts = await getVendorProducts()

  if (!customer || !vendor) {
    notFound()
  }

  return (
    <div className="w-full" data-testid="profile-page-wrapper">
      <div className="mb-sm flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Sell</h1>
        <p className="text-base-regular">Sell your products on our platform.</p>
      </div>
      <div className="flex flex-col gap-y-8 w-full">
        <div>Current Vendor: {JSON.stringify(vendor)}</div>
        <VendorName vendor={vendor} />
        <Divider />
        <VendorDescription vendor={vendor} />
        <Divider />
        <VendorInventorySelect
          products={products.response.products}
          inventory={vendorProducts}
        />
      </div>
    </div>
  )
}

const Divider = () => {
  return <div className="w-full h-px bg-gray-200" />
}
