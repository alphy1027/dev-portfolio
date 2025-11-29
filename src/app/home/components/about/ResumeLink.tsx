import { JSX } from "react";

type ResumeProps = {
  href: string;
  label: string;
  icon: () => JSX.Element;
};

export default function ResumeLink({ href, label, icon: Icon }: ResumeProps) {
  return (
    <div className="rounded-surface-radius flex justify-center items-center border border-foreground-border w-[250px] h-14">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="py-space-2 px-space-5 flex items-center justify-center gap-space-2"
      >
        <Icon />
        <span className="">{label}</span>
      </a>
    </div>
  );
}
