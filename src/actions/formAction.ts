export interface FormInputs {
    fullName: string;
    email: string;
    message: string;
}

export async function action(previousState: any, formData: FormData) {
    const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    });
    console.log("response :: ", res);
    console.log("previous :: ", previousState);
};