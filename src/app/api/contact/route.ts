import { Resend } from "resend";
import ContactEmailTemplate from "@/components/emails/ContactEmailTemplate";
import { ContactResponse, FormInputs } from "@/actions/formAction";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request): Promise<ContactResponse> {
    const formData: FormInputs = await req.json();
    try {
        const { data, error } = await resend.emails.send({
            from: 'Alphy.dev <onboarding@resend.dev>',
            to: ["knundahalphones@gmail.com"],
            subject: "New Contact form submission",
            replyTo: formData.email,
            react: ContactEmailTemplate({ formData }),
        });

        if (error) {
            console.log("Email Error :: ", error.message);
            return ({ success: false, message: error.message });
        }
        console.log("Email success :: ", data);

        return ({ success: true, message: "Message sent successfully" });
    } catch (error) {
        return ({ success: false, message: "Failed to send Message, please try again" });
    }
}
