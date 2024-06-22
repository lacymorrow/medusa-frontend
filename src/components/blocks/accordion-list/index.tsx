import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

interface AccordionListProps {
  items: {
    title: string
    content: string
  }[],
  accordionProps?: any // TODO: fix type
}

const AccordionList: React.FC<AccordionListProps> = ({ items, accordionProps }) => {
  return (
    <Accordion type="single" collapsible {...accordionProps}>
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`} className="border p-sm my-md">
          <AccordionTrigger>{item.title}</AccordionTrigger>

          <AccordionContent>
            <div className="px-sm">
              <Separator />
            </div>
            <p className="pt-md">
              {item.content}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionList
