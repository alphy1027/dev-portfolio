import SectionContainer from "@/components/section/SectionContainer";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <SectionContainer className="flex justify-center h-[75vh]">
      <div className="max-w-[600px] md:max-w-[634px] flex flex-col gap-space-4 items-center justify-center">
        <h1 className="text-center">Turning Ideas Into Scalable Web Applications</h1>
        <p className="text-center">
          I create reliable backend systems and intuitive frontends for real-world use cases
        </p>
        <div className="flex flex-col w-full sm:w-fit sm:flex-row items-center gap-space-4 md:gap-space-5">
          <Button className="w-full sm:w-fit">Explore my work</Button>
          <Button variant="secondary" className="w-full sm:w-fit">
            Contact me
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
}
