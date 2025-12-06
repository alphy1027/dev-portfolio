import { Activity, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TitleProps = {
  className?: string;
  children: ReactNode;
  caption?: string;
};

export default function SectionTitle({ className, caption, children }: TitleProps) {
  return (
    <div className="flex flex-col w-fit items-center">
      <Activity mode={caption ? "visible" : "hidden"}>
        <small className="text-primary font-heading text-xs uppercase">{caption}</small>
      </Activity>
      <h2 className={twMerge("w-fit text-foreground-heading dark:text-neutral-surface-heading text-center", className)}>{children}</h2>
    </div>
  );
}
