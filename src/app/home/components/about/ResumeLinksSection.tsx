import { about } from "@/content/about";
import ResumeLink from "./ResumeLink";

export default function ResumeLinksSection() {
  return (
    <section className="flex flex-col items-center gap-space-4 lg:flex-row">
      <ResumeLink icon={about.resume.pdf.icon} href={about.resume.pdf.link} label={about.resume.pdf.label} />
      <ResumeLink icon={about.resume.notion.icon} href={about.resume.notion.link} label={about.resume.notion.label} />
      <ResumeLink
        icon={about.resume.linkedin.icon}
        href={about.resume.linkedin.link}
        label={about.resume.linkedin.label}
      />
    </section>
  );
}
