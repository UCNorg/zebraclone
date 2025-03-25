import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ServiceCard = ({ title, description, imageUrl, link }: ServiceCardProps) => {
  return (
    <div className="service-card group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-zebra-gray-dark">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <Link
          href={link}
          className="text-primary-300 hover:text-primary-500 font-semibold flex items-center"
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
