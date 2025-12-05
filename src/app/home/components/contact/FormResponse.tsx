import ErrorIcon from "../../icons/contact/ErrorIcon"
import SuccessIcon from "../../icons/contact/SuccessIcon"

type ResponseProps = {
    message: string
    type: "error" | "success"
}
export default function FormResponse({ message, type }: ResponseProps) {
    return (
        <div className={`px-space-4 py-space-3 rounded-surface-radius shadow-sm flex gap-space-4 items-center ${type === "success" ? "bg-green-100" : "bg-red-100"}`}>
            {type === "success" ?
                <SuccessIcon />
                :
                <ErrorIcon />
            }
            <p className={`${type === "success" ? "text-green-800" : "text-red-800"} leading-5`}>{message}</p>
        </div>
    )
}
