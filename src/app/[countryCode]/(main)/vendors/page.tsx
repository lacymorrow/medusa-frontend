import { getCustomerVendor, getVendors } from "@lib/data"

export default async function VendorPage() {
  const vendors = await getVendors()
  const vendor = await getCustomerVendor()

  return (
    <div>
      {vendors?.length &&
        vendors.map((vendor: any) => {
          return <div key={vendor.id}>{vendor.id}</div>
        })}
    </div>
  )
}
