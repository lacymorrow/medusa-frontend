/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2ARAfBMU3Oe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Section } from "@/components/blocks/section/section"
import { VendorSignupForm } from "@/components/vendor/admin/vendor-signup-form"

export function ApplyForm() {
  return (
    <Section className="p-md">
      <div className="max-w-6xl mx-auto bg-secondary grid grid-cols-1 lg:grid-cols-2 gap-md">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-2">Apply Now</h1>
          <p className="text-lg">
            Create an Account to start the application process
          </p>
        </div>
        <div className="border m-md p-md">
          <VendorSignupForm />
        </div>
      </div>
    </Section>
  )
}
