import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import SectionContainer from "../components/section/SectionContainer";
import SectionTitle from "@/components/section/SectionTitle";

export default function NotFound() {
  return (
    <SectionContainer className="pb-24 flex flex-col gap-space-1 justify-center items-center">
      <SectionTitle className="text-red-600">404</SectionTitle>
      <h3 className="font-semibold pb-2">Page Not Found</h3>
      <Link className="flex items-center text-primary gap-2 underline" href="/">
        <ArrowLeft />
        Homepage{" "}
      </Link>
    </SectionContainer>
  );
}
