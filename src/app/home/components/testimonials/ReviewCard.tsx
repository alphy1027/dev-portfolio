import { Review } from "@/content/reviews";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex flex-col items-center justify-center gap-space-5 max-w-[494px]">
      <p className="text-secondary-surface-body text-center text-lg">{review.message}</p>
      <div className="flex flex-col justify-center items-center">
        <p className="font-semibold text-primary text-center capitalize">{review.reviewer}</p>
        <small className="text-sm text-secondary-surface-muted text-center">{review.role}</small>
      </div>
    </article>
  );
}
