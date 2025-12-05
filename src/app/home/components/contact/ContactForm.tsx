"use client"
import { action } from "@/actions/formAction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Loading from "@/components/ui/Loading";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";

export default function ContactForm() {
    const [state, formAction, isPending] = useActionState(action, null)
    console.log("State ::", state)
    return (
        <form action={formAction} className="w-full flex-col flex gap-space-4 p-space-4">
            <div className="flex flex-col gap-space-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input disabled={isPending} required minLength={3} id="fullName" type="text" placeholder="Full Name" />
            </div>
            <div className="flex flex-col gap-space-2">
                <Label htmlFor="email">Email</Label>
                <Input disabled={isPending} required id="email" type="email" placeholder="Email" />
            </div>
            <div className="flex flex-col gap-space-2">
                <Label htmlFor="message">Message</Label>
                <Textarea disabled={isPending} required minLength={4} id="message" placeholder="Message" />
            </div>
            <Button type="submit" disabled={isPending} className="w-fit self-center">{isPending && <Loading />}{isPending ? "Submitting" : "Submit"}</Button>
        </form>
    )
}
