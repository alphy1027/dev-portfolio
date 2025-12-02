import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/section/SectionTitle";
import ServiceCard from "../components/services/ServiceCard";
import { services } from "@/content/services";

export default function ServicesSection() {
  return (
    <SectionContainer className="flex flex-col gap-space-7 items-center">
      <SectionTitle caption="Services">What I do for my clients</SectionTitle>
      <div className="grid grid-cols-1 max-w-[330px] divide-y divide-foreground-border sm:divide-y-0 sm:grid-cols-2 sm:max-w-[994px] md:grid-cols-3 gap-space-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </SectionContainer>
  );
}
