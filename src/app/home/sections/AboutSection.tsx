import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/section/SectionTitle";
import { about } from "@/content/about";
import ResumeLink from "../components/about/ResumeLink";

export default function AboutSection() {
  return (
    <SectionContainer className="flex flex-col items-center gap-space-4">
      <SectionTitle caption="About me">Know more about me</SectionTitle>
      <div className="bg-neutral-light rounded-surface-radius w-[190px] h-[200px] md:w-[206px] md:h-[214]" />
      <p className="text-center max-w-[510px] md:max-w-[634px]">{about.body}</p>
      <p className="text-lg font-semibold">Below are of my Resume</p>
      <section className="flex flex-col items-center gap-space-4 lg:flex-row">
        <ResumeLink icon={about.resume.pdf.icon} href={about.resume.pdf.link} label={about.resume.pdf.label} />
        <ResumeLink icon={about.resume.notion.icon} href={about.resume.notion.link} label={about.resume.notion.label} />
        <ResumeLink
          icon={about.resume.linkedin.icon}
          href={about.resume.linkedin.link}
          label={about.resume.linkedin.label}
        />
      </section>
    </SectionContainer>
  );
}
