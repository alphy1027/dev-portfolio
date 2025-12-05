import { Resend } from "resend";
import { contacts } from "@/content/contacts";
import ContactEmailTemplate from "@/components/emails/ContactEmailTemplate";
import { FormInputs } from "@/actions/formAction";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const formData: FormInputs = await req.json();
    try {
        const { data, error } = await resend.emails.send({
            from: 'Alphy.dev <onboarding@resend.dev>',
            to: [contacts.email.label],
            subject: "New Contact form submission",
            replyTo: formData.email,
            react: ContactEmailTemplate({ formData }),
        });

        if (error) {
            console.log("Email Error :: ", error.message);
            return Response.json({ success: false, error }, { status: 500 });
        }

        return Response.json({ success: true, data });
    } catch (error) {
        console.log("Email Error :: ", error);
        return Response.json({ success: false, error }, { status: 500 });
    }
}
