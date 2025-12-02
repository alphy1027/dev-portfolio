import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/section/SectionTitle";
import Quotes from "../icons/testimonials/Quotes";

export default function TestimonialsSection() {
  return (
    <div className="bg-secondary ">
      <SectionContainer className="flex flex-col items-center justify-center gap-space-5 max-w-[520px] py-space-6">
        <SectionTitle caption="Testimonials" className="text-secondary-surface-heading">
          Here's what a few people I've worked with have to say about my work
        </SectionTitle>
        <Quotes />
        <article className="flex flex-col items-center justify-center gap-space-5 max-w-[494px]">
          <p className="text-secondary-surface-body text-center text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, obcaecati. Accusamus voluptatem ipsa dolore
            neque odio corrupti facere iusto totam libero soluta maxime mo
          </p>
          <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-primary text-center">Pablo Escobar</p>
            <small className="text-sm text-secondary-surface-muted text-center">Manager, Medelin</small>
          </div>
        </article>
      </SectionContainer>
    </div>
  );
}
