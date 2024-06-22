import AccordionList from "@/components/blocks/accordion-list"
import { Section } from "@/components/blocks/section/section"

const items = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. Sed nec diam vel tellus egestas lobortis. Fusce tristique pulvinar nisl, eget condimentum purus imperdiet non. Nam congue pellentesque diam, eget accumsan neque convallis",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. Sed nec diam vel tellus egestas lobortis. Fusce tristique pulvinar nisl, eget condimentum purus imperdiet non. Nam congue pellentesque diam, eget accumsan neque convallis",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. Sed nec diam vel tellus egestas lobortis. Fusce tristique pulvinar nisl, eget condimentum purus imperdiet non. Nam congue pellentesque diam, eget accumsan neque convallis",
  },
]

const Faq = () => {
  return (
    <Section className="p-md">
      <h2 className="text-2xl font-bold">FAQs</h2>
      <AccordionList items={items} />
    </Section>
  )
}

export default Faq
