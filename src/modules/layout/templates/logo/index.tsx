import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const Logo = () => {
  return (
    <div>
      <LocalizedClientLink
        href="/"
        className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
        data-testid="nav-store-link"
      >
        Florish
      </LocalizedClientLink>
    </div>
  )
}
