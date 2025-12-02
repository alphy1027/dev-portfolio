import { Skill } from "@/content/skills";

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="flex flex-col items-center justify-center gap-space-3 p-space-6">
      <skill.icon />
      <p className="text-lg font-semibold">{skill.title}</p>
    </div>
  );
}
