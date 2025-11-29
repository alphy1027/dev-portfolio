import { navLinks } from "@/content/navLinks";

export default function Navbar() {
  return (
    <nav className="hidden md:block h-fit w-fit">
      <ul className="flex items-center gap-space-2">
        {navLinks.map((navLink) => (
          <li key={navLink.href} className="h-fit w-fit">
            <a
              href={`#${navLink.href}`}
              className="lg:px-space-4 font-heading tracking-wide uppercase font-medium px-space-2 hover:scale-105 hover:text-primary lg:py-space-2 py-space-1 transition duration-200 ease-in"
            >
              {" "}
              {navLink.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
