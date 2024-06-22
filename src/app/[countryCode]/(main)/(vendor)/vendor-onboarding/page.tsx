/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bPgkTPaqijt
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Section } from "@/components/blocks/section/section";
import { Banner } from "@/components/sections/banner";
import { Button } from "@/components/ui/button";
import { OnboardingSteps } from "@/components/vendor/onboarding/onboarding-steps";
import Faq from "@/components/vendor/sections/faq";
import LocalizedClientLink from "@/modules/common/components/localized-client-link";
import { CheckCircle2Icon, FileTextIcon } from "lucide-react";


interface Step {
    title: string;
    content: JSX.Element;
    href: string;
    icon: JSX.Element;
}

const steps: Step[] = [
    {
        title: "Business information",
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ....</p>,
        href: "#step1",
        icon: <CheckCircle2Icon className="h-4 w-4 text-green-5000" />
    },
    {
        title: "Delivery details",
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ....</p>,
        href: "#step2",
        icon: <ClockIcon className="h-4 w-4 text-green-500" />
    },
    {
        title: "Payment",
        content: <>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ....</p>
            <Button className="text-indigo-600 text-sm">
                Connect Stripe Payment
            </Button>
        </>,
        href: "#step3",
        icon: <CreditCardIcon className="h-4 w-4 text-green-500" />
    },
    {
        title: "Insurance and agreements",
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ....</p>,
        href: "#step4",
        icon: <FileTextIcon className="h-4 w-4 text-green-500" />
    },
    {
        title: "Select Your inventory",
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ....</p>,
        href: "#step5",
        icon: <ClipboardListIcon className="h-4 w-4 text-green-500" />
    },
];

export default function VendorOnboarding() {
    return (
        <>
            <Banner title="Congratulations!" className="bg-secondary">
                <p>You've successfully signed up for a vendor account.</p>
            </Banner>

            <Section className="p-md flex flex-col items-center justify-center gap-md">
                <div className="max-w-3xl mx-auto p-md">
                    <div className="flex justify-center">
                        <p className="text-sm">
                            If you have questions or would like to make changes,{" "}
                            <LocalizedClientLink className="text-green-500" href="#">
                                Contact support
                            </LocalizedClientLink>
                        </p>
                    </div>
                    <div className="space-y-4">
                        <OnboardingSteps steps={steps} />
                        <div className="border border-gray-200 rounded-lg p-4 flex items-center space-x-4">
                            <CheckCircleIcon className="text-green-500 h-6 w-6" />
                            <div className="flex justify-between w-full">
                                <div>
                                    <div className="text-sm font-semibold">Business information</div>
                                    <div className="text-sm text-gray-500">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ....
                                    </div>
                                </div>
                                <ChevronRightIcon className="text-gray-400 h-6 w-6" />
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4 flex items-center space-x-4">
                            <ClockIcon className="text-gray-400 h-6 w-6" />
                            <div className="flex justify-between w-full">
                                <div>
                                    <div className="text-sm font-semibold">Delivery details</div>
                                    <div className="text-sm text-gray-500">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ....
                                    </div>
                                </div>
                                <ChevronRightIcon className="text-gray-400 h-6 w-6" />
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4 flex items-center space-x-4">
                            <CreditCardIcon className="text-gray-400 h-6 w-6" />
                            <div className="flex justify-between w-full">
                                <div>
                                    <div className="text-sm font-semibold">Payment</div>
                                    <div className="text-sm text-gray-500">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ....
                                    </div>
                                </div>
                                <Button className="text-indigo-600 text-sm">
                                    Connect Stripe Payment
                                </Button>
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4 flex items-center space-x-4">
                            <TextIcon className="text-gray-400 h-6 w-6" />
                            <div className="flex justify-between w-full">
                                <div>
                                    <div className="text-sm font-semibold">
                                        Insurance and agreements
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ....
                                    </div>
                                </div>
                                <ChevronRightIcon className="text-gray-400 h-6 w-6" />
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4 flex items-center space-x-4">
                            <ClipboardListIcon className="text-gray-400 h-6 w-6" />
                            <div className="flex justify-between w-full">
                                <div>
                                    <div className="text-sm font-semibold">Select Your inventory</div>
                                    <div className="text-sm text-gray-500">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ....
                                    </div>
                                </div>
                                <ChevronRightIcon className="text-gray-400 h-6 w-6" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button className="w-full">Submit to Flourish</Button>
                    </div>
                </div>
            </Section >

            <Faq />
        </>
    );
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    );
}

function ClipboardListIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <path d="M12 11h4" />
            <path d="M12 16h4" />
            <path d="M8 11h.01" />
            <path d="M8 16h.01" />
        </svg>
    );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    );
}

function CreditCardIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
    );
}

function TextIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17 6.1H3" />
            <path d="M21 12.1H3" />
            <path d="M15.1 18H3" />
        </svg>
    );
}
