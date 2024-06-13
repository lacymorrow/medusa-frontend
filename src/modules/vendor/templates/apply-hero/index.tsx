import { Section } from "@/components/blocks/section/section"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons"

const SellHero = () => {
  return (
    <Section>
      <div className="px-xs py-sm sm:px-md sm:py-lg lg:px-xl lg:py-2xl">
        <div className="grid grid-cols-1 gap-sm lg:grid-cols-2 lg:gap-lg">
          <div className="relative h-img-md overflow-hidden rounded-sm sm:h-img-md lg:order-last lg:h-full">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-lg">
            <h1 className="text-4xl font-bold sm:text-4xl">Headline</h1>

            <p className="mt-md text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
              minus veniam tempora deserunt? Molestiae eius quidem quam
              repellat.
            </p>

            <Button className="mt-md">
              Apply Now <ArrowRightIcon className="w-4 h-4 ml-xs" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default SellHero
