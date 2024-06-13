// Todo: unused

interface LeadProps {
  title: string
  description: string
  titleTag?: React.ElementType
  titleProps?: React.HTMLAttributes<HTMLElement>
  descriptionProps?: React.HTMLAttributes<HTMLParagraphElement>
}

export const Lead: React.FC<LeadProps> = ({
  title,
  description,
  titleTag = "h2",
  titleProps = {},
  descriptionProps = {},
  ...props
}) => {
  const TitleTag = titleTag
  return (
    <div {...props}>
      <TitleTag {...titleProps}>{title}</TitleTag>
      <p {...descriptionProps}>{description}</p>
    </div>
  )
}
