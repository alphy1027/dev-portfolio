import { contacts } from "@/content/contacts";
import EmailClone from "@/app/home/icons/social/EmailClone";
import GithubClone from "@/app/home/icons/social/GithubClone";
import LinkedinClone from "@/app/home/icons/social/LinkedinClone";
import WhatsappClone from "@/app/home/icons/social/WhatsappClone";
import { twMerge } from "tailwind-merge";

export default function SocialNav({ className }: { className?: string }) {
  return (
    <nav className="">
      <ul className={twMerge("flex items-center gap-space-4", className)}>
        <li className="">
          <a href={contacts.github.href} target="_blank" rel="noopener noreferrer" className=" p-space-2 inline-block">
            <GithubClone />
          </a>
        </li>
        <li className="">
          <a href={contacts.linkedin.href} target="_blank" rel="noopener noreferrer" className="p-space-2 inline-block">
            <LinkedinClone />
          </a>
        </li>
        <li className="">
          <a href={contacts.email.href} target="_blank" rel="noopener noreferrer" className=" p-space-2 inline-block">
            <EmailClone />
          </a>
        </li>
        <li className="">
          <a href={contacts.whatsapp.href} target="_blank" rel="noopener noreferrer" className="p-space-2 inline-block">
            <WhatsappClone />
          </a>
        </li>
      </ul>
    </nav>
  );
}
