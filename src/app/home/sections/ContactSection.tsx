import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/section/SectionTitle";
import ContactInfo from "../components/contact/ContactInfo";
import { contacts } from "@/content/contacts";
import ContactPhoneIcon from "../icons/contact/ContactPhoneIcon";
import ContactEmailIcon from "../icons/contact/ContactEmailIcon";
import ContactWhatsappIcon from "../icons/contact/ContactWhatsappIcon";
import ContactForm from "../components/contact/ContactForm";

export default function ContactSection() {
    return (
        <SectionContainer id="contact" className="flex flex-col items-center gap-space-5">
            <div className="max-w-xl flex flex-col items-center gap-space-4">
                <SectionTitle caption="Contact me">Feel free to reach out</SectionTitle>
                <p className="text-center">Whether you have a question, an opportunity, or just want to connect, I’m always open to conversations — I’ll respond as soon as I can.</p>
                <ContactForm />
            </div>
            <section className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-space-4">
                <ContactInfo title="Phone" caption={contacts.phone.label} icon={ContactPhoneIcon} href={contacts.phone.href} />
                <ContactInfo active title="Email" caption={contacts.email.label} icon={ContactEmailIcon} href={contacts.email.href} />
                <ContactInfo title="Whatsapp" caption={contacts.whatsapp.label} icon={ContactWhatsappIcon} href={contacts.whatsapp.href} />
            </section>
        </SectionContainer>
    )
}
