import { Section } from "@/components/blocks/section/section"

interface FeatureListItemProps {
  imageUrl: string
  title: string
  description: string
}

const FeatureListItem: React.FC<FeatureListItemProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="flex items-start gap-sm">
      <img
        src={imageUrl}
        alt=""
        className="w-20 h-20 rounded-lg object-cover"
      />

      <div>
        <h3 className="text-lg/tight font-medium text-gray-900">{title}</h3>

        <p className="mt-md text-gray-700">{description}</p>
      </div>
    </div>
  )
}

interface FeatureListProps {
  items: FeatureListItemProps[]
}

const FeatureList: React.FC<FeatureListProps> = ({ items }) => {
  return (
    <Section>
      <div className="px-xs py-sm sm:px-md sm:py-lg lg:px-xl lg:py-2xl">
        <div className="grid grid-cols-1 gap-sm lg:grid-cols-2 lg:gap-lg">
          <div className="relative h-img-md overflow-hidden rounded-sm sm:h-img-lg lg:h-full">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-sm">
            {items.map((item, index) => (
              <FeatureListItem
                key={index}
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default FeatureList
