import { Project } from "@/content/projects";
import ProjectLink from "./ProjectLink";
import ProjectTag from "./ProjectTag";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border-b-4 border-primary gap-space-2 dark:shadow-slate-800 flex flex-col shadow-md h-full">
      <div className="bg-neutral-light w-full h-[164px]" />
      <section className="flex-col flex items-center flex-1 gap-space-4 px-space-6 py-space-4">
        <div className="flex flex-col justify-center items-center gap-space-1">
          <small className="text-primary dark:text-neutral-light dark:bg-transparent dark:border dark:border-neutral-light bg-neutral-light px-space-2 py-space-1 capitalize rounded-surface-radius">
            {project.stack}
          </small>
          <h4 className="text-foreground-heading">{project.title}</h4>
        </div>
        <p className="text-center flex-1">{project.description}</p>

        <div className="flex flex-wrap max-w-[258px] items-center justify-center gap-space-1">
          {project.tags.map((tag, index) => (
            <ProjectTag key={index} label={tag} />
          ))}
        </div>

        <div className="flex items-center gap-space-1">
          {project.actions.map((action) => (
            <ProjectLink key={action.href} href={action.href} icon={action.icon} />
          ))}
        </div>
      </section>
    </article>
  );
}
