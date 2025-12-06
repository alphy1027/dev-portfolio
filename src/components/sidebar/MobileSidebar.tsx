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
import { Menu, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import Logo from "@/app/home/icons/Logo";
import { navLinks } from "@/content/navLinks";

export default function MobileSidebar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden p-space-2 rounded-surface-radius" ><Menu className="size-8 text-foreground-body" /></Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-space-4 flex flex-col justify-between gap-y-space-6">
                <SheetHeader className="flex-row items-center p-0 justify-between">
                    <SheetTitle asChild>
                        <SheetClose asChild>
                            <Logo />
                        </SheetClose>
                    </SheetTitle>
                    <SheetDescription className="sr-only">Mobile navigation menu</SheetDescription>
                    <SheetClose asChild>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="translate-x-1 p-space-2 rounded-surface-radius"><XIcon className="text-foreground-muted size-8" /></Button>
                    </SheetClose>
                </SheetHeader>
                <nav className="w-full p-space-4">
                    <ul className="divide-y divide-foreground-border flex flex-col">
                        {navLinks.map((navLink) => (
                            <li key={navLink.href} className="flex">
                                <a
                                    href={`#${navLink.href}`}
                                    className="py-space-4 w-full tracking-wide active:scale-95 duration-200 ease-in transition font-heading uppercase active:text-primary text-center font-medium text-lg"
                                >
                                    {navLink.label}
                                </a>
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
