import { Region } from "@medusajs/medusa"

import { ProductCollectionWithPreviews } from "@/types/global"
import ProductRail from "@modules/home/components/featured-products/product-rail"

export default async function FeaturedProducts({
  collections,
  region,
}: {
  collections: ProductCollectionWithPreviews[]
  region: Region
}) {
  return collections.map((collection) => (
    <li key={collection.id}>
      <ProductRail collection={collection} region={region} />
    </li>
  ))
}
