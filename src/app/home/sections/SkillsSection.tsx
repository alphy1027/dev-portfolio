import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/section/SectionTitle";
import { skills } from "@/content/skills";
import SkillCard from "../components/skills/SkillCard";

export default function SkillsSection() {
  return (
    <SectionContainer id="skills" className="flex flex-col items-center gap-space-7">
      <SectionTitle caption="skills">Tools and technologies I work with</SectionTitle>
      <div className="max-w-[840px] flex flex-wrap items-center justify-center gap-space-5">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </SectionContainer>
  );
}
