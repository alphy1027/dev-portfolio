import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/section/SectionTitle";
import { about } from "@/content/about";
import ResumeLinksSection from "../components/about/ResumeLinksSection";
import Image from "next/image";

export default function AboutSection() {
  return (
    <SectionContainer className="flex flex-col items-center gap-space-7">
      <SectionTitle caption="About me">Know more about me</SectionTitle>
      <div className="flex flex-col items-center gap-space-4">
        <Image
          src="/about-image.jpg"
          alt="profile image"
          width={190}
          height={200}
          sizes="190px"
          className="bg-neutral-light object-cover rounded-surface-radius w-[190px] h-[200px]"
        />
        <p className="text-center max-w-[510px] md:max-w-[634px]">{about.body}</p>
        <p className="text-lg font-semibold">Below are links to my Resume</p>
        <ResumeLinksSection />
      </div>
    </SectionContainer>
  );
}
