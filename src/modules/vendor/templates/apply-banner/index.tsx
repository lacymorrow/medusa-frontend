import { Section } from "@/components/blocks/section/section"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@lib/utils"

export function ApplyBanner() {
  return (
    <Section className="bg-secondary">
      <div className="mx-auto max-w-screen-2xl px-sm py-sm lg:px-lg lg:py-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex items-center gap-sm">
            <div className="p-sm">
              <h2 className="text-xl font-bold sm:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore, debitis.
              </h2>

              <p className="mt-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                beatae, magni dolores provident quaerat totam eos, aperiam
                architecto eius quis quibusdam fugiat dicta.
              </p>

              <a href="#" className={cn(buttonVariants(), "mt-md")}>
                Get in Touch
              </a>
            </div>
          </div>
          <div className="relative z-10">
            <div className="relative h-64 sm:h-80">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
