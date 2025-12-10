
import { XIcon } from "lucide-react";
import { Button } from "../ui/button";
import Logo from "@/app/home/icons/Logo";
import { navLinks } from "@/content/navLinks";
import { CloseSidebar } from "../header/components/SidebarAndHeader";
import SocialNav from "../footer/components/SocialNav";

export default function MobileSidebar({ closeSidebar }: { closeSidebar: CloseSidebar; }) {

    return (

        <div className="fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in">
            <aside className="bg-background relative z-50 flex h-full w-3/4 flex-col justify-between p-4 pb-2">
                <div onClick={closeSidebar} className="absolute top-0 right-0 bottom-0 w-full translate-x-full transform bg-black/40" />

                <nav className="flex items-center justify-between">
                    <Logo />

                    <Button
                        onClick={closeSidebar}
                        variant="ghost"
                        size="sm"
                        className="translate-x-1 p-space-2 rounded-surface-radius">
                        <XIcon className="text-foreground-muted size-8" />
                    </Button>
                </nav>

                <nav className="w-full p-space-4">
                    <ul className="divide-y divide-foreground-border flex flex-col">
                        {navLinks.map((navLink) => (
                            <li key={navLink.href} className="flex">
                                <a
                                    href={`#${navLink.href}`}
                                    onClick={closeSidebar}
                                    className="py-space-4 w-full tracking-wide active:scale-95 duration-200 ease-in transition font-heading uppercase active:text-primary text-center font-medium text-lg"
                                >
                                    {navLink.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex flex-col gap-space-1 items-center">
                    <SocialNav className="gap-space-1" />
                    <p className="text-foreground-muted text-center text-sm">
                        &copy; {new Date().getFullYear()} Alphy1027. All rights reserved
                    </p>
                </div>
            </aside>
        </div>
    );
}
