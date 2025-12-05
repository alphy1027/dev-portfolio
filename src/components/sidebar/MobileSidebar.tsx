import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Menu, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import Logo from "@/app/home/icons/Logo";
import { navLinks } from "@/content/navLinks";

export default function MobileSidebar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden p-1.5 rounded-surface-radius" ><Menu className=" size-6" /></Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-space-4 justify-between gap-y-space-6">
                <SheetHeader className="flex-row items-center justify-between">
                    <SheetTitle asChild>
                        <SheetClose asChild>
                            <Logo />
                        </SheetClose>
                    </SheetTitle>
                    <SheetDescription className="sr-only">Mobile navigation menu</SheetDescription>
                    <SheetClose asChild>
                        <Button
                            variant="ghost"
                            className="p-1 translate-x-1 "><XIcon className="text-foreground-mute size-6" /></Button>
                    </SheetClose>
                </SheetHeader>
                <nav className="w-full p-space-2">
                    <ul className="divide-y divide-foreground-border flex flex-col">
                        {navLinks.map((navLink) => (
                            <li key={navLink.href} className="flex">
                                <SheetClose asChild>
                                    <Link
                                        href={`#${navLink.href}`}
                                        className="py-space-3 w-full tracking-wide active:scale-105 duration-200 ease-in transition font-heading uppercase active:text-primary text-center font-semibold text-lg"
                                    >
                                        {navLink.label}
                                    </Link>
                                </SheetClose>
                            </li>
                        ))}
                    </ul>
                </nav>
                <SheetFooter className="">
                    <p className="text-foreground-muted text-center text-sm">
                        &copy; {new Date().getFullYear()} Alphy1027. All rights reserved
                    </p>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
