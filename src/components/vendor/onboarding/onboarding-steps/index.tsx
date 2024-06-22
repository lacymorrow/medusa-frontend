import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2Icon, ChevronRightIcon } from "lucide-react";

interface Step {
    title: string;
    content: JSX.Element;
    href: string;
    icon: JSX.Element;
}

interface OnboardingStepsProps {
    steps: Step[];
}

export function OnboardingSteps({ steps }: OnboardingStepsProps) {
    return (
        <div className="flex flex-col gap-md">
            {steps.map((step, index) => (
                <div key={index} className="flex gap-md">
                    <div className="flex items-center gap-md">
                        <CheckCircle2Icon className="size-8 text-green-500" />
                    </div>
                    <Card className="grid grid-cols-5 gap-md">
                        <CardContent>
                            <div>
                                <div className="text-sm font-semibold">Business information</div>
                                <div className="text-sm text-gray-500">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ....
                                </div>
                            </div>
                            <ChevronRightIcon className="text-gray-400 h-6 w-6" />
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    );
}
