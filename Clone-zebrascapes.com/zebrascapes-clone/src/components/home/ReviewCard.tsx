import React from 'react';
import Image from 'next/image';
import { Star, StarHalf } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  image: string;
  rating: number;
  text: string;
  days: number;
}

const ReviewCard = ({ name, image, rating, text, days }: ReviewCardProps) => {
  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`star-${i}`} className="fill-yellow-400 text-yellow-400" size={18} />
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half-star" className="fill-yellow-400 text-yellow-400" size={18} />
      );
    }

    // Add empty stars to make total of 5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-star-${i}`} className="text-gray-300" size={18} />
      );
    }

    return stars;
  };

  return (
    <div className="testimonial-card">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <div>
          <h5 className="font-semibold text-zebra-gray-dark">{name}</h5>
          <p className="text-sm text-gray-500">{days} days ago</p>
        </div>
      </div>

      <div className="flex mb-3">
        {renderStars()}
      </div>

      <p className="text-gray-700 text-sm">{text}</p>
    </div>
  );
};

export default ReviewCard;
