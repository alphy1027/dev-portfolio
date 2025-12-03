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
        <div className={`border border-foreground-border w-[260px] flex flex-col items-center justify-center px-space-5 py-space-4 rounded-surface-radius ${active ? "bg-secondary" : "bg-transparent"}`}>
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-space-2">
                <Icon />
                <p className={`font-semibold ${active ? "text-secondary-surface-heading" : "text-foreground-heading"} `}>{title}</p>
                <p className={`${active ? "text-secondary-surface-body" : "text-foreground-body"} `}>{caption}</p>
            </a>
        </div>
    )
}
