"use client"
import SocialNav from "@/components/footer/components/SocialNav";
import SectionContainer from "@/components/section/SectionContainer";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <SectionContainer className="flex justify-center h-[75vh]">
      <div className="max-w-[600px] md:max-w-[634px] flex flex-col gap-space-4 items-center justify-center">
        <div className="hidden md:block translate-y-1/3"><SocialNav /></div>
        <h1 className="text-center dark:text-white">Fullstack Web Developer building modern web experiences
        </h1>
        <p className="text-center">
          Passionate about designing and developing web interfaces and full-stack applications with a focus on speed, usability and seamless user experiences across every device while bringing ideas to life
        </p>
        <div className="flex flex-col w-full sm:w-fit sm:flex-row items-center gap-space-4 md:gap-space-5">
          <Button onClick={() => document.querySelector("#portfolio")?.scrollIntoView()} className="w-full sm:w-fit">Explore my work</Button>
          <Button onClick={() => document.querySelector("#contact")?.scrollIntoView()} variant="secondary" className="w-full sm:w-fit">
            Contact me
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
}
