import Logo from "@/app/home/icons/Logo";
import Link from "next/link";
import SocialNav from "./components/SocialNav";
import SectionContainer from "../section/SectionContainer";

export default function Footer() {
  return (
    <footer className="bg-secondary p-space-4 mt-space-8">
      <SectionContainer className="flex flex-col items-center gap-space-4">
        <Link href="/" className="flex items-center gap-0.5">
          <Logo variant="sm" />
          <h4 className="text-secondary-surface-heading">Alphy1027</h4>
        </Link>
        <SocialNav />
        <p className="text-secondary-surface-muted">{new Date().getFullYear()} Alphy1027. All rights reserved</p>
      </SectionContainer>
    </footer>
  );
}
