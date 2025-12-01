import SectionContainer from "@/components/section/SectionContainer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function CallToActionSection() {
  return (
    <section className="bg-primary w-full py-space-4">
      <SectionContainer className="flex flex-col sm:flex-row items-center gap-space-4 justify-between max-w-[1000px]">
        <h2 className="text-secondary text-center">Let's build something great</h2>
        <Button variant="secondary">
          <Phone />
          Call me now
        </Button>
      </SectionContainer>
    </section>
  );
}
