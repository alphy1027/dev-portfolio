import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string
};

export default function SectionContainer({ children, className, id }: SectionProps) {
  return <section id={id} className={twMerge("w-[90%] md:w-[88%] mx-auto max-w-[1200px] py-4", className)}>{children}</section>;
}
