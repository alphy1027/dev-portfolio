import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/section/SectionTitle";
import { projects } from "@/content/projects";
import ProjectCard from "../components/portfolio/ProjectCard";

export default function PortfolioSection() {
  return (
    <SectionContainer id="portfolio" className="flex flex-col items-center gap-space-7 justify-center">
      <SectionTitle caption="portfolio">Some of my previous works</SectionTitle>
      <div className="grid grid-cols-1 px-space-3 md:grid-cols-2 max-w-md gap-space-5 md:max-w-[920px]">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
}
