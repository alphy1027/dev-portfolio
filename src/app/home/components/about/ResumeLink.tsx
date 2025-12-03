import { JSX } from "react";

type ResumeProps = {
  href: string;
  label: string;
  icon: () => JSX.Element;
};

export default function ResumeLink({ href, label, icon: Icon }: ResumeProps) {
  return (

    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      download={label.includes("PDF")}
      className="rounded-surface-radius border border-foreground-border w-[250px] h-14 py-space-2 px-space-5 flex items-center justify-center gap-space-2 hover:scale-105 active:scale-95 group active:bg-primary transition duration-200 ease-in"
    >
      <Icon />
      <span className="group-active:text-primary-surface-body">{label}</span>
    </a>
  );
}
