import { Section } from "@/components/blocks/section/section";
import { Banner } from "@/components/sections/banner";
import Faq from "@/components/vendor/sections/faq";
import { CheckCircle2Icon, CheckIcon } from "lucide-react";

export default async function SubmissionConfirmationPage() {
  return (
    <>
      <Banner
        icon={<CheckCircle2Icon className="h-10 w-10 text-green-500" />}
        title="Thank you for your submission"
        description="We will review your application and get back to you shortly."
        className="bg-secondary"
      />

      <Section>
        <h2 className="text-xl font-bold">Here's what you need to know</h2>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 bg-secondary p-md">
          <li className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-green-500" />
            <p>
              We will review your application and get back to you shortly.
            </p>
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-green-500" />
            <p>
              We will review your application and get back to you shortly.
            </p>
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-green-500" />
            <p>
              We will review your application and get back to you shortly.
            </p>
          </li>
        </ul>
      </Section>

      <Faq />
    </>
  )
}

