import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import ReviewCard from '@/components/home/ReviewCard'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ext.same-assets.com/1277081468/1301597562.png"
            alt="ZebraScapes Landscaping"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="zebra-container relative z-20 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Quality Landscaping & Services</h1>
            <p className="text-lg md:text-xl mb-8">
              We specialize in comprehensive landscaping and tree care services designed to enhance both the beauty and value of your property.
            </p>
            <Link href="/contact" className="btn-primary">
              Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Quick Links */}
      <section className="bg-primary-300 py-4">
        <div className="zebra-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          <Link href="/service/landscape-design" className="text-center text-white hover:bg-primary-400 py-4 px-2 transition-colors">
            <h3 className="font-bold">Landscape Design</h3>
          </Link>
          <Link href="/service/outdoor-living" className="text-center text-white hover:bg-primary-400 py-4 px-2 transition-colors">
            <h3 className="font-bold">Outdoor Living</h3>
          </Link>
          <Link href="/service/landscape-maintenance" className="text-center text-white hover:bg-primary-400 py-4 px-2 transition-colors">
            <h3 className="font-bold">Landscape Maintenance</h3>
          </Link>
          <Link href="/service/tree-care" className="text-center text-white hover:bg-primary-400 py-4 px-2 transition-colors">
            <h3 className="font-bold">Tree Care Services</h3>
          </Link>
          <Link href="/service/weed-control" className="text-center text-white hover:bg-primary-400 py-4 px-2 transition-colors">
            <h3 className="font-bold">Weed Control</h3>
          </Link>
          <Link href="/services" className="text-center text-white hover:bg-primary-400 py-4 px-2 transition-colors">
            <h3 className="font-bold">View All Services</h3>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-zebra-gray-light py-16">
        <div className="zebra-container">
          <h2 className="text-center text-zebra-gray-dark font-bold mb-6">Rodney and Denise Steidinger married in Illinois in 2000.</h2>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-center text-primary-300 font-semibold mb-6">Raised on farms, they knew the meaning of hard work and the challenges of growing strong crops.</h3>
            <p className="text-center text-zebra-gray-dark mb-8">
              In 2006, they moved to sunny Arizona, where Rodney decided to work in what he knew best: growing plants. While Denise managed the bookkeeping and marketing, Rodney worked in the landscaping trade for another company.
            </p>
            <div className="flex justify-center">
              <Link href="/about/#history" className="btn-primary">
                Our History <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="zebra-container">
          <h2 className="text-3xl font-bold text-center mb-2">Nature's Masterpieces</h2>
          <p className="text-center mb-8 max-w-3xl mx-auto">
            Explore our gallery to see a collection of beautifully designed landscapes and gardens. From lush greenery to vibrant flowerbeds, each project reflects our passion for creating sustainable, stunning outdoor spaces.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="overflow-hidden rounded-lg h-[300px] relative">
              <Image
                src="https://ext.same-assets.com/1062895825/3869473033.jpeg"
                alt="Landscape Design"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg h-[300px] relative">
              <Image
                src="https://ext.same-assets.com/2661523165/793092305.jpeg"
                alt="Outdoor Living"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg h-[300px] relative">
              <Image
                src="https://ext.same-assets.com/4172174718/3584274179.jpeg"
                alt="Water Features"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="bg-primary-100 p-8 rounded-lg text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">A well-designed landscape is more than just a luxury</h3>
            <h4 className="text-xl text-primary-500 font-bold mb-6">it's an investment in your home's value and your quality of life.</h4>
            <p className="mb-6 max-w-3xl mx-auto">
              From expertly crafted outdoor living spaces to sustainable, low-maintenance designs, we create environments that invite relaxation, entertain guests, and stand the test of time. Our team is dedicated to delivering high-quality service with a focus on craftsmanship, integrity, and innovation.
            </p>
            <Link href="/services" className="btn-primary">
              Our Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Link href="/service/firewise" className="relative h-[160px] rounded-lg overflow-hidden group">
              <Image
                src="https://ext.same-assets.com/1844307415/3058700537.jpeg"
                alt="FireWise"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-primary-500/70 transition-colors">
                <h4 className="text-white font-bold text-lg">FireWise</h4>
              </div>
            </Link>
            <Link href="/service/stump-removal" className="relative h-[160px] rounded-lg overflow-hidden group">
              <Image
                src="https://ext.same-assets.com/2532529676/4229849770.jpeg"
                alt="Stump Removal"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-primary-500/70 transition-colors">
                <h4 className="text-white font-bold text-lg">Stump Removal</h4>
              </div>
            </Link>
            <Link href="/service/fertilization" className="relative h-[160px] rounded-lg overflow-hidden group">
              <Image
                src="https://ext.same-assets.com/7562585/1617061967.jpeg"
                alt="Fertilization"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-primary-500/70 transition-colors">
                <h4 className="text-white font-bold text-lg">Fertilization</h4>
              </div>
            </Link>
            <Link href="/service/snow-removal" className="relative h-[160px] rounded-lg overflow-hidden group">
              <Image
                src="https://ext.same-assets.com/821167953/2709714820.jpeg"
                alt="Snow Removal"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-primary-500/70 transition-colors">
                <h4 className="text-white font-bold text-lg">Snow Removal</h4>
              </div>
            </Link>
            <Link href="/service/irrigation-installation" className="relative h-[160px] rounded-lg overflow-hidden group">
              <Image
                src="https://ext.same-assets.com/1833393516/2524317382.png"
                alt="Irrigation"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-primary-500/70 transition-colors">
                <h4 className="text-white font-bold text-lg">Irrigation</h4>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Icons Section */}
      <section className="py-16 bg-white">
        <div className="zebra-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Image
              src="https://ext.same-assets.com/704538820/1342480089.png"
              alt="Landscape Design"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-lg font-bold mb-2">Landscape Design</h3>
            <p className="text-sm text-gray-600">
              ZebraScapes offers expert landscape design services that transform outdoor spaces into beautiful and functional environments.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="https://ext.same-assets.com/35336068/126968206.png"
              alt="Installation"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-lg font-bold mb-2">Installation</h3>
            <p className="text-sm text-gray-600">
              ZebraScapes provides professional landscape installation services, ensuring that every element of your design is expertly executed.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="https://ext.same-assets.com/709732956/1832357848.png"
              alt="Maintenance"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-lg font-bold mb-2">Maintenance</h3>
            <p className="text-sm text-gray-600">
              ZebraScapes offers comprehensive landscape maintenance services designed to keep your outdoor space healthy and vibrant.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="https://ext.same-assets.com/137983375/103435195.png"
              alt="Tree Care"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-lg font-bold mb-2">Tree Care</h3>
            <p className="text-sm text-gray-600">
              ZebraScapes delivers expert tree care services, including pruning, pest management, and removal, ensuring the health of your trees.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="https://ext.same-assets.com/1717089126/1261765793.png"
              alt="Irrigation"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-lg font-bold mb-2">Irrigation</h3>
            <p className="text-sm text-gray-600">
              ZebraScapes provides efficient irrigation services, including design, installation, & maintenance, to ensure your landscape stays healthy.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="https://ext.same-assets.com/3864693614/2851633982.png"
              alt="Outdoor Living"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-lg font-bold mb-2">Outdoor Living</h3>
            <p className="text-sm text-gray-600">
              ZebraScapes specializes in creating custom outdoor living spaces, from patios to pergolas, to extend your home's functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-zebra-gray-light">
        <div className="zebra-container">
          <div className="flex justify-center mb-8">
            <Image
              src="https://ext.same-assets.com/3369679077/1919081064.png"
              alt="200+ Reviews"
              width={600}
              height={100}
            />
          </div>

          <h2 className="text-center text-3xl font-bold mb-8 text-zebra-gray-dark">
            With a 4.7 Google review rating and 200+ reviews, we are one of the highest-rated lawn and landscape companies.
          </h2>

          <p className="text-center mb-8 text-zebra-gray-dark">Testimonials From Our Green Space Friends</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <ReviewCard
              name="Chastity Green"
              image="https://ext.same-assets.com/1966978381/1974122649.png"
              rating={5}
              text="ZebraScapes is top notch. Colt and the team are very polite and take pride in their jobs. Colt has an eye for design and detail."
              days={3}
            />

            <ReviewCard
              name="Brooke Badone"
              image="https://ext.same-assets.com/2712427055/3081672360.png"
              rating={5}
              text="Colt did an amazing job on my landscaping. He was extremely knowledgeable and talented. Best of all he was friendly and personable. I highly recommend this company for their true craftsmanship and professional landscaping crew."
              days={3}
            />

            <ReviewCard
              name="Katherine Miles"
              image="https://ext.same-assets.com/1645206583/285962198.png"
              rating={5}
              text="Both of the companies employees were polite, and through with the information we needed to make our decision about the work to be done. Thanks for making our decision easier and lightening our work load."
              days={9}
            />
          </div>
        </div>
      </section>

      {/* Tree Care Guide CTA */}
      <section className="py-16 bg-zebra-gray-dark text-white">
        <div className="zebra-container flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <Image
              src="https://ext.same-assets.com/1776730611/263155449.png"
              alt="Tree Care Guide"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h4 className="text-primary-300 mb-2 uppercase text-sm font-semibold">yavapai county & Verde Valley homeowners</h4>
            <h3 className="text-2xl font-bold mb-4">Learn How to Keep Your Trees Healthy & Beautiful Year-Round</h3>
            <p className="mb-6">
              Discover practical tips to keep your trees thriving through every season in Yavapai County. Learn how to water, prune, and protect your trees with our free year-round tree care guide.
            </p>
            <Link href="https://go.zebrascapeslandscaping.com/" target="_blank" className="btn-primary">
              Download My Free Guide <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="zebra-container">
          <h2 className="text-3xl font-bold text-center mb-8">Our Latest Insights</h2>
          <div className="flex justify-end mb-4">
            <Link href="/blog" className="text-primary-300 hover:text-primary-500 font-semibold flex items-center">
              Explore All <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="relative h-[200px]">
                <Image
                  src="https://ext.same-assets.com/4015683176/183787713.jpeg"
                  alt="Water Features"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <div className="bg-primary-300/20 text-primary-500 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                  Landscaping
                </div>
                <h3 className="text-xl font-bold mb-2">Why Water Features Are a Stunning Addition to Your Home</h3>
                <p className="text-gray-500 text-sm mb-4">2 weeks ago</p>
                <p className="text-sm text-gray-600 mb-4">
                  Something is mesmerizing about the sound of flowing water. Whether a gentle trickling fountain or a cascading waterfall, a water...
                </p>
                <Link href="/why-water-features-are-a-stunning-addition-to-your-home" className="text-primary-300 hover:text-primary-500 font-medium">
                  Read More &rarr;
                </Link>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="relative h-[200px]">
                <Image
                  src="https://ext.same-assets.com/2195867266/992155376.png"
                  alt="Firewise Safety"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <div className="bg-primary-300/20 text-primary-500 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                  Firewise
                </div>
                <h3 className="text-xl font-bold mb-2">Firewise Safety: Protecting Your Home and Community</h3>
                <p className="text-gray-500 text-sm mb-4">9 months ago</p>
                <p className="text-sm text-gray-600 mb-4">
                  As communities expand into wildland areas, the risk of wildfires becomes a significant concern. Every year, countless homes and properties...
                </p>
                <Link href="/firewise-safety-protecting-your-home-and-community" className="text-primary-300 hover:text-primary-500 font-medium">
                  Read More &rarr;
                </Link>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="relative h-[200px]">
                <Image
                  src="https://ext.same-assets.com/2568440408/3195463351.png"
                  alt="Firewise Awareness"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <div className="bg-primary-300/20 text-primary-500 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                  Firewise
                </div>
                <h3 className="text-xl font-bold mb-2">Firewise Awareness Presentation</h3>
                <p className="text-gray-500 text-sm mb-4">9 months ago</p>
                <p className="text-sm text-gray-600 mb-4">
                  Firewise Awareness Presentation The threat of wildfire is always present. Are you prepared? Join ZebraScapes Landscaping and Design for a...
                </p>
                <Link href="/firewise-awareness-presentation" className="text-primary-300 hover:text-primary-500 font-medium">
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
