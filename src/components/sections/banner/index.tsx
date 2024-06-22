import { Section } from "@/components/blocks/section/section";
import { ReactNode } from "react";

export interface BannerProps {
    icon?: ReactNode;
    title: string;
    description?: string;
    children?: ReactNode;
    className?: string;
}

export function Banner({ icon, title, description, children, className, ...props }: BannerProps) {
    return (
        <Section className={className} {...props}>
            <div className="flex flex-col items-center justify-center">
                {icon}
                <h1 className="text-xl font-bold">{title}</h1>
                {description && <p>{description}</p>}
                {children}
            </div>
        </Section>
    );
}