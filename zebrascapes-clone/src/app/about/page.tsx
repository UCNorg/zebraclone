import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About ZebraScapes | Arizona\'s Trusted Landscaping Experts',
  description: 'Learn about the journey of ZebraScapes, from its humble beginnings to becoming a trusted landscaping company in Northern Arizona.'
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ext.same-assets.com/1788284099/2010294359.jpeg"
            alt="ZebraScapes Family"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="zebra-container relative z-20 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About ZebraScapes</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Rodney and Denise's journey reflects the heart of ZebraScapes: a family-focused, community-centered business dedicated to creating lasting beauty.
          </p>
        </div>
      </section>

      {/* Journey Section */}
      <section id="history" className="py-16 bg-primary-100">
        <div className="zebra-container">
          <h2 className="text-center text-3xl font-bold mb-8 text-zebra-gray-dark">
            From Humble Beginnings to Northern Arizona's Trusted Landscaping Experts
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-gray-700 mb-6">
                Rodney and Denise Steidinger, both raised on hardworking Illinois farms, brought their deep-rooted work ethic and passion for growth to sunny Arizona in 2006. Married in 2000, they shared a love for cultivating the land and a dedication to excellence.
              </p>
              <p className="text-gray-700 mb-6">
                When Rodney began working in landscaping after their move, Denise supported him by managing the business's bookkeeping and marketing, allowing them to combine their strengths for success. However, in 2008, the economic downturn left Rodney without a job, pushing the couple to make a bold decision: to create their own business.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/2155996162/2296915002.jpeg"
                alt="ZebraScapes Landscaping"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="zebra-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-zebra-gray-dark">Our Mission</h2>
            <h3 className="text-2xl font-semibold mb-6 text-primary-300">
              Quality, Integrity, Efficiency, Teamwork, and Relationships
            </h3>
            <p className="text-gray-700 mb-8">
              At ZebraScapes, we believe that our work goes beyond landscaping—it's about building relationships and creating environments where memories can be made.
            </p>
          </div>

          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src="https://ext.same-assets.com/3565992220/3386990102.jpeg"
              alt="ZebraScapes Landscaping Work"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            Guided by our core values of quality, integrity, efficiency, teamwork, and strong client relationships, we approach every project with the goal of not only meeting but exceeding expectations. From our early days as TKHaley Yard Care to our expansion as ZebraScapes, we have always valued hard work, dedication, and community.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-zebra-gray-light">
        <div className="zebra-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-zebra-gray-dark">TKHaley Yard Care</h2>
              <p className="text-gray-700 mb-6">
                In 2009, Rodney and Denise founded TKHaley Yard Care, a landscaping business inspired by their three daughters: Trinity, Kiley, and Haley. Their work soon became known throughout the Prescott community for its quality and commitment, and as they grew, so did their desire to give back.
              </p>
              <p className="text-gray-700">
                In 2013, they took a step closer to their mission of supporting children by becoming licensed foster parents, welcoming Ella into their home and officially adopting her in 2014. These experiences strengthened their sense of purpose and commitment to the community.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://ext.same-assets.com/3040671209/2572180550.jpeg"
                alt="ZebraScapes Team"
                width={500}
                height={350}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <Image
                src="https://ext.same-assets.com/1929326774/1349820624.jpeg"
                alt="Zebra"
                width={500}
                height={350}
                className="rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold mb-4 text-zebra-gray-dark">The Birth of ZebraScapes</h2>
              <p className="text-gray-700 mb-6">
                In 2015, Rodney and Denise took a leap and rebranded their business to ZebraScapes, LLC, symbolizing their desire to create an unforgettable brand. Their trucks, wrapped in distinctive zebra stripes, became a recognizable symbol of quality service, and they even acquired live zebras on their Williamson Valley Road property.
              </p>
              <p className="text-gray-700">
                ZebraScapes quickly became known for its unique identity and commitment to designing, building, and maintaining fully functional outdoor spaces that exceed client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-300 text-white">
        <div className="zebra-container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Outdoor Space?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Let us bring our expertise, passion, and commitment to quality to your next landscaping project. Contact us today for a consultation.
          </p>
          <Link href="/contact" className="bg-white text-primary-500 hover:bg-gray-100 px-6 py-3 rounded-md inline-flex items-center font-semibold">
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
