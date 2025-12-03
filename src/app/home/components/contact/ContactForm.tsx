import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
    return (
        <form action="" className="w-full flex-col flex gap-space-4 p-space-4">
            <div className="flex flex-col gap-space-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input required minLength={3} id="fullName" type="text" placeholder="Full Name" />
            </div>
            <div className="flex flex-col gap-space-2">
                <Label htmlFor="email">Email</Label>
                <Input required id="email" type="email" placeholder="Email" />
            </div>
            <div className="flex flex-col gap-space-2">
                <Label htmlFor="message">Message</Label>
                <Textarea required minLength={4} id="message" placeholder="Message" />
            </div>
            <Button type="submit" className="w-fit self-center">Submit</Button>
        </form>
    )
}
