"use server"
import ContactEmailTemplate from "@/components/emails/ContactEmailTemplate";
import { Resend } from "resend";

export interface FormInputs {
    fullName: string;
    email: string;
    message: string;
}

export interface ContactResponse {
    success: boolean
    message: string
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function action(_previousState: any, formData: FormData): Promise<ContactResponse> {
    console.log("form data", formData)
    const formValues: FormInputs = {
        fullName: formData.get("fullName") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string
    }

    if (!formValues.fullName || !formValues.email || !formValues.message) {
        return { success: false, message: "All fields are required" }
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Alphy.dev <onboarding@resend.dev>',
            to: ["knundahalphones@gmail.com"],
            subject: "New Contact form submission",
            replyTo: formValues.email,
            react: ContactEmailTemplate({ formData: formValues }),
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
};