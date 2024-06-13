import ContentGrid from "@/components/sections/content-grid/content-grid"
import FeatureList from "@/components/sections/feature-list/feature-list"
import { VendorDetails } from "@/modules/vendor/components/vendor-details/vendor-details"
import { ApplyBanner } from "@modules/vendor/templates/apply-banner"
import { ApplyForm } from "@modules/vendor/templates/apply-form"
import SellHero from "@modules/vendor/templates/apply-hero"

const sampleItem = {
  imageUrl:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title: "Title goes here",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio nesciunt quas non animi.",
}

const items = [sampleItem, sampleItem, sampleItem, sampleItem]

export default async function SellPage() {
  const contentGridData = {
    title: "Explore Our Top Products",
    description: "Check out our wide range of products tailored to your needs.",
    items,
  }

  return (
    <div>
      <VendorDetails />
      <SellHero />
      <ContentGrid
        title={contentGridData.title}
        description={contentGridData.description}
        items={contentGridData.items}
      />
      <FeatureList items={items} />
      <ApplyBanner />
      <ApplyForm />
    </div>
  )
}
