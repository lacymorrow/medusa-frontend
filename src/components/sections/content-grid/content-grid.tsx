import { Section } from "@/components/blocks/section/section"
import React from "react"
import { v4 as uuidv4 } from "uuid"

interface ContentGridItemProps {
  imageUrl: string
  title: string
  description: string
}

const ContentGridItem: React.FC<ContentGridItemProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <a href="#" className="block">
      <img
        alt=""
        src={imageUrl}
        className="h-img-md w-full object-cover sm:h-img-md lg:h-img-lg"
      />

      <h3 className="mt-md text-lg font-bold text-gray-900 sm:text-xl">
        {title}
      </h3>

      <p className="mt-md max-w-sm text-gray-700">{description}</p>
    </a>
  )
}

interface ContentGridProps {
  title: string
  description: string
  items: ContentGridItemProps[]
}

const ContentGrid: React.FC<ContentGridProps> = ({
  title,
  description,
  items,
}) => {
  return (
    <Section>
      <div className="mx-auto max-w-screen-xl px-xs py-sm sm:px-md sm:py-lg lg:px-xl lg:py-2xl">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>

          <p className="mt-md">{description}</p>
        </div>

        <div className="mt-md grid grid-cols-1 gap-sm md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <ContentGridItem
              key={uuidv4()}
              imageUrl={item.imageUrl}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ContentGrid
