import { JSX } from "react";

type LinkProps = {
  icon: () => JSX.Element;
  href: string;
};

export default function ProjectLink({ href, icon: Icon }: LinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="p-space-2 inline-block">
      <Icon />
    </a>
  );
}
