import React from 'react';
import Image from 'next/image';
import ReviewCard from './ReviewCard';

interface Testimonial {
  name: string;
  image: string;
  rating: number;
  text: string;
  days: number;
}

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

const TestimonialSection = ({ testimonials }: TestimonialSectionProps) => {
  return (
    <section className="py-16 bg-zebra-gray-light">
      <div className="zebra-container">
        <div className="flex justify-center mb-8">
          <Image
            src="https://ext.same-assets.com/3369679077/1919081064.png"
            alt="200+ Reviews"
            width={600}
            height={100}
            className="mx-auto"
          />
        </div>

        <h2 className="text-center text-3xl font-bold mb-8 text-zebra-gray-dark">
          With a 4.7 Google review rating and 200+ reviews, we are one of the highest-rated lawn and landscape companies.
        </h2>

        <p className="text-center mb-8 text-zebra-gray-dark">
          Testimonials From Our Green Space Friends
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <ReviewCard
              key={index}
              name={testimonial.name}
              image={testimonial.image}
              rating={testimonial.rating}
              text={testimonial.text}
              days={testimonial.days}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
