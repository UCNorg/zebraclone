import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const metadata = {
  title: 'Contact ZebraScapes | Landscaping & Tree Care Services in Arizona',
  description: 'Get in touch with ZebraScapes for expert landscaping and tree care services in Northern Arizona. Request a free quote today!'
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ext.same-assets.com/999722308/2557120301.jpeg"
            alt="Contact ZebraScapes"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="zebra-container relative z-20 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Have questions about our services? Ready to transform your outdoor space? Get in touch with our team today!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="zebra-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-zebra-gray-dark">Get In Touch</h2>
              <p className="mb-8 text-gray-600">
                Fill out the form below and one of our team members will get back to you as soon as possible. We look forward to hearing from you!
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name *</label>
                    <Input
                      id="firstName"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name *</label>
                    <Input
                      id="lastName"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email *</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone *</label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">How Can We Help? *</label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project or inquiry"
                    className="h-36"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary-300 hover:bg-primary-400 text-white py-3">
                  Submit
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-zebra-gray-dark">Our Information</h2>

              <div className="mb-10">
                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardHeader className="bg-primary-300 text-white py-4 px-6">
                    <CardTitle className="text-xl">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <Phone className="h-5 w-5 text-primary-300 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg">Phone</h3>
                        <Link href="tel:928-830-4061" className="text-primary-300 hover:text-primary-500">
                          (928) 830-4061
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Mail className="h-5 w-5 text-primary-300 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg">Email</h3>
                        <Link href="mailto:info@zebrascapes.com" className="text-primary-300 hover:text-primary-500">
                          info@zebrascapes.com
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 text-primary-300 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg">Address</h3>
                        <p className="text-gray-700">
                          3910 Willow Creek Road<br />
                          Prescott, AZ 86301
                        </p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h3 className="font-bold text-lg mb-2">Hours</h3>
                      <p className="text-gray-700">
                        Monday - Friday: 8:00 a.m. - 4:00 p.m.<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-lg overflow-hidden h-[300px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.9607423985877!2d-112.51323142403648!3d34.59443167284312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872d2c318f27a6c9%3A0xeaef644d903460f0!2sZebraScapes!5e0!3m2!1sen!2sus!4v1667396685226!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ZebraScapes Location"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zebra-gray-light">
        <div className="zebra-container text-center">
          <h2 className="text-3xl font-bold mb-4 text-zebra-gray-dark">Ready to Transform Your Outdoor Space?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-700">
            Whether you're looking for landscape design, tree care, or outdoor living solutions, our team of experts is ready to help bring your vision to life.
          </p>
          <Link href="tel:928-830-4061" className="btn-primary inline-flex items-center">
            <Phone className="mr-2 h-5 w-5" />
            Call Us Today: (928) 830-4061
          </Link>
        </div>
      </section>
    </div>
  );
}
