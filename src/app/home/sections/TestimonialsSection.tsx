import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/section/SectionTitle";
import Quotes from "../icons/testimonials/Quotes";
import ReviewCard from "../components/testimonials/ReviewCard";
import { reviews } from "@/content/reviews";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function TestimonialsSection() {
  return (
    <div id="testimonials" className="bg-secondary ">
      <SectionContainer className="flex flex-col items-center justify-center gap-space-5 max-w-[520px] py-space-6">
        <SectionTitle caption="Testimonials" className="text-secondary-surface-heading">
          Here's what a few people I've worked with have to say about my work
        </SectionTitle>
        <Quotes />

        <Carousel className="w-full text-center">
          <CarouselContent className="bg-red-10 mb-space-4 sm:mb-0">
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="">
                <div className="p-1">
                  <ReviewCard review={review} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="outline" className="p-space-4" />
          <CarouselNext variant="outline" className="p-space-4" />
        </Carousel>
      </SectionContainer>
    </div>
  );
}
