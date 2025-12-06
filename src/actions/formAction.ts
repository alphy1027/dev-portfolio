export interface FormInputs {
    fullName: string;
    email: string;
    message: string;
}

export interface ContactResponse {
    success: boolean
    message: string
}

export async function action(_previousState: any, formData: FormData) {
    console.log("form data", formData)
    const fullName = formData.get("fullName")
    const email = formData.get("email")
    const message = formData.get("message")

    if (!fullName || !email || !message) {
        return { success: false, message: "All fields are required" }
    }

    const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    });
    console.log("response :: ", res);
    /* console.log("previous :: ", previousState); */
    return res
};