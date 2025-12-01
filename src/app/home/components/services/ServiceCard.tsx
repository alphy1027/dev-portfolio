import { Service } from "@/content/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex flex-col items-center gap-space-4  p-space-6">
      <service.icon />
      <h4 className="text-center">{service.title}</h4>
      <p className="text-center">{service.description}</p>
    </article>
  );
}
