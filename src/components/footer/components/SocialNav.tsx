import { contacts } from "@/content/contacts";
import EmailClone from "@/app/home/icons/social/EmailClone";
import GithubClone from "@/app/home/icons/social/GithubClone";
import LinkedinClone from "@/app/home/icons/social/LinkedinClone";
import WhatsappClone from "@/app/home/icons/social/WhatsappClone";

export default function SocialNav() {
  return (
    <nav className="">
      <ul className="flex items-center gap-space-6">
        <li className="">
          <a href={contacts.github.href} target="_blank" rel="noopener noreferrer">
            <GithubClone />
          </a>
        </li>
        <li className="">
          <a href={contacts.linkedin.href} target="_blank" rel="noopener noreferrer">
            <LinkedinClone />
          </a>
        </li>
        <li className="">
          <a href={contacts.email.href} target="_blank" rel="noopener noreferrer">
            <EmailClone />
          </a>
        </li>
        <li className="">
          <a href={contacts.whatsapp.href} target="_blank" rel="noopener noreferrer">
            <WhatsappClone />
          </a>
        </li>
      </ul>
    </nav>
  );
}
