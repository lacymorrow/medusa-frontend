import { getVendors } from "@lib/data"

export default async function VendorPage() {
  const vendors = await getVendors()

  return (
    <div>
      {vendors?.length &&
        vendors.map((vendor: any) => {
          return <div key={vendor.id}>{vendor.id}</div>
        })}
    </div>
  )
}
