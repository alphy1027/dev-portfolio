import Logo from "@/app/home/icons/Logo";
import SectionContainer from "../section/SectionContainer";
import Navbar from "./components/Navbar";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-space-2">
      <SectionContainer className="flex justify-between items-center py-2">
        <Logo />
        <Navbar />
      </SectionContainer>
    </header>
  );
}
