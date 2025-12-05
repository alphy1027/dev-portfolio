import Logo from "@/app/home/icons/Logo";
import SectionContainer from "../section/SectionContainer";
import Navbar from "./components/Navbar";
import MobileSidebar from "../sidebar/MobileSidebar";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-space-2">
      <SectionContainer className="flex justify-between items-center py-2">
        <Logo />
        <Navbar />
        <MobileSidebar />
      </SectionContainer>
    </header>
  );
}
