import { JSX } from "react"

type InfoProps = {
    icon: () => JSX.Element
    title: string
    caption: string
    href: string
    active?: boolean
}

export default function ContactInfo({ icon: Icon, title, caption, href, active }: InfoProps) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`border border-foreground-border w-[260px] group hover:scale-105 active:bg-primary active:scale-95 transition duration-200 ease-in flex flex-col items-center justify-center px-space-5 py-space-4 gap-space-1 rounded-surface-radius ${active ? "bg-secondary" : "bg-transparent"}`}>
            <Icon />
            <p className={`font-semibold group-active:text-primary-surface-heading ${active ? "text-secondary-surface-heading" : "text-foreground-heading"} dark:text-neutral-surface-heading `}>{title}</p>
            <p className={`${active ? "text-secondary-surface-body" : "text-foreground-body"} group-active:text-primary-surface-body `}>{caption}</p>
        </a>
    )
}
