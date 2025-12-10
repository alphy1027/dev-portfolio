import Logo from "@/app/home/icons/Logo";
import SectionContainer from "../section/SectionContainer";
import Navbar from "./components/Navbar";
import SidebarMenuIcon from "./components/SidebarMenuIcon";
import { OpenSidebar } from "./components/SidebarAndHeader";

export default function Header({ openSidebar }: { openSidebar: OpenSidebar }) {
  return (
    <header className="flex justify-between items-center py-space-2">
      <SectionContainer className="flex justify-between items-center py-2">
        <Logo />
        <Navbar />
        <SidebarMenuIcon openSidebar={openSidebar} />
      </SectionContainer>
    </header>
  );
}
