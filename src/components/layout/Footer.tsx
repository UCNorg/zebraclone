import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer-bg bg-cover bg-center text-white">
      <div className="bg-zebra-gray-dark bg-opacity-90 py-16">
        <div className="zebra-container">
          {/* Footer top section with logo and description */}
          <div className="flex flex-col lg:flex-row justify-between mb-12 gap-8">
            <div className="max-w-md">
              <Image
                src="https://ext.same-assets.com/3216539116/1983894660.png"
                alt="ZebraScapes Logo"
                width={100}
                height={100}
                className="mb-4"
              />
              <p className="text-sm mb-6">
                Our clients choose us not only for our expertise but for our commitment to delivering exceptional results. With years of experience, countless successful projects, and a passion for outdoor living, ZebraScapes has earned a reputation as the go-to landscaping company in the region.
              </p>
              <div className="flex gap-4">
                <Link href="https://www.facebook.com/zebrascapes" target="_blank" aria-label="Facebook">
                  <div className="bg-white bg-opacity-20 h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary-300 transition-colors">
                    <svg width="24" height="24" className="fill-current" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </div>
                </Link>
                <Link href="https://www.houzz.com/pro/zebrascapes" target="_blank" aria-label="Houzz">
                  <div className="bg-white bg-opacity-20 h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary-300 transition-colors">
                    <svg width="24" height="24" className="fill-current" viewBox="0 0 24 24">
                      <path d="M9.36,18.8V5.6h4.76v13.2H9.36 M14.09,18.8h-4.7V5.6h9.44v13.2H14.09z"/>
                    </svg>
                  </div>
                </Link>
                <Link href="https://g.co/kgs/BXEgUrW" target="_blank" aria-label="Google">
                  <div className="bg-white bg-opacity-20 h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary-300 transition-colors">
                    <svg width="24" height="24" className="fill-current" viewBox="0 0 24 24">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                    </svg>
                  </div>
                </Link>
                <Link href="https://www.instagram.com/zebrascapes/" target="_blank" aria-label="Instagram">
                  <div className="bg-white bg-opacity-20 h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary-300 transition-colors">
                    <svg width="24" height="24" className="fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </Link>
                <Link href="https://www.youtube.com/@zebrascapes8116" target="_blank" aria-label="YouTube">
                  <div className="bg-white bg-opacity-20 h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary-300 transition-colors">
                    <svg width="24" height="24" className="fill-current" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </div>
                </Link>
                <Link href="https://www.yelp.com/biz/zebrascapes-prescott-4" target="_blank" aria-label="Yelp">
                  <div className="bg-white bg-opacity-20 h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary-300 transition-colors">
                    <svg width="24" height="24" className="fill-current" viewBox="0 0 24 24">
                      <path d="M20.288 9.488c-.083-.437-.43-.799-.867-.872-1.204-.203-3.96-.475-3.96-.475 0-.237-2.5 3.717-2.5 3.717-.246.394-.231.909.069 1.273.583.704.393 2.295.393 2.295l3.864 1.787c.492.229 1.064.037 1.305-.435 0 0 1.154-2.841 1.246-3.069.214-.527.526-3.558.45-4.221zm-4.598 7.562c-.057.62-.632 1.037-1.243.899l-3.653-1.088c-.541-.148-.873-.671-.796-1.215.095-.661.516-1.994.516-1.994.11-.548.571-.94 1.121-.92l3.691-.033c.727.012 1.107.872.854 1.562-.1.265-.481 2.243-.49 2.789zm1.188-13.425l-2.043 3.156c-.396.533-1.148.692-1.688.347l-.85-.559c-.52-.351-.634-1.062-.271-1.564l2.341-3.048c.405-.521 1.167-.651 1.695-.27.611.433.841 1.262.816 1.938zm-11.478 4.609c-.101-1.252 1.057-2.088 2.192-1.53 0 0 3.077 1.735 3.197 1.82.456.325.609.942.335 1.412 0 0-1.166 1.984-1.272 2.125-.375.497-1.1.642-1.601.324-.212-.136-3.244-2.244-3.244-2.244-.536-.395-.607-1.906-.607-1.906zm2.456 8.664c-.552.164-1.135-.148-1.33-.694l-1.055-3.777c-.216-.646.131-1.333.783-1.553l.841-.273c.595-.176 1.23.155 1.438.74l1.09 3.681c.251.725-.166 1.621-.767 1.876zm1.384-19.43c.17.487.026 1.042-.554 1.254 0 0-3.773 1.326-4.101 1.51-.541.298-1.214.082-1.518-.465-.312-.563-1.614-3.777-1.737-4.093-.115-.291-.071-.623.071-.88.201-.364.569-.561.963-.494.067.9.806.121 2.994.55 2.188.429 3.349.698 3.571.775.401.138.578.279.695.426.118.148.189.319.226.446.078.265.179.605.39.97z"/>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 mt-8 lg:mt-0">
              {/* Contact Information */}
              <div className="flex flex-col space-y-3">
                <Link href="tel:928-830-4061" className="flex items-center gap-2 text-white hover:text-primary-300 transition-colors">
                  <Phone size={18} />
                  <span>(928) 830-4061</span>
                </Link>
                <Link href="sms:928-351-1355" className="flex items-center gap-2 text-white hover:text-primary-300 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3m18 0v8a2 2 0 0 1-2 2h-5l-5 3v-3H5a2 2 0 0 1-2-2V8m18 0H3" />
                  </svg>
                  <span>928-351-1355</span>
                </Link>
                <Link href="mailto:info@zebrascapes.com" className="flex items-center gap-2 text-white hover:text-primary-300 transition-colors">
                  <Mail size={18} />
                  <span>@zebrascapes.com</span>
                </Link>
                <Link href="https://g.co/kgs/BXEgUrW" target="_blank" className="flex items-center gap-2 text-white hover:text-primary-300 transition-colors">
                  <MapPin size={18} />
                  <span>3910 Willow Creek Road, Prescott, AZ 86301</span>
                </Link>
              </div>

              {/* Service Categories */}
              <div className="space-y-4">
                <h5 className="font-bold text-lg mb-4">Landscape</h5>
                <ul className="space-y-2">
                  <li>
                    <Link href="/service/landscape-design" className="text-white hover:text-primary-300 transition-colors">
                      Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/landscape-installation" className="text-white hover:text-primary-300 transition-colors">
                      Installation
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/landscape-maintenance" className="text-white hover:text-primary-300 transition-colors">
                      Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/water-features" className="text-white hover:text-primary-300 transition-colors">
                      Water Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/outdoor-living" className="text-white hover:text-primary-300 transition-colors">
                      Outdoor Living
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/firewise" className="text-white hover:text-primary-300 transition-colors">
                      FireWise
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/fire-cleanup" className="text-white hover:text-primary-300 transition-colors">
                      Fire Cleanup
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Additional Service Links */}
              <div className="space-y-4">
                <div className="mb-8">
                  <h5 className="font-bold text-lg mb-4">Tree Care</h5>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/service/tree-care" className="text-white hover:text-primary-300 transition-colors">
                        Tree Care
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/tree-trimming" className="text-white hover:text-primary-300 transition-colors">
                        Tree Trimming
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/tree-pest-disease" className="text-white hover:text-primary-300 transition-colors">
                        Tree Pest & Disease
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/fertilization" className="text-white hover:text-primary-300 transition-colors">
                        Fertilization
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold text-lg mb-4">Yard Care</h5>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/service/irrigation-installation" className="text-white hover:text-primary-300 transition-colors">
                        Irrigation Installation
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/weed-control" className="text-white hover:text-primary-300 transition-colors">
                        Weed Control
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/fertilization" className="text-white hover:text-primary-300 transition-colors">
                        Fertilization
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/stump-removal" className="text-white hover:text-primary-300 transition-colors">
                        Stump Removal
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/snow-removal" className="text-white hover:text-primary-300 transition-colors">
                        Snow Removal
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer bottom - copyright */}
          <div className="pt-10 mt-10 border-t border-gray-700 text-sm text-gray-400 flex flex-col md:flex-row justify-between">
            <div>
              Copyright © 2025 <Link href="/" className="hover:text-primary-300">ZebraScapes</Link>. All Rights Reserved. Site by <a href="https://www.skillfulantics.com" target="_blank" className="hover:text-primary-300">Skillful Antics</a>.
            </div>
            <div className="mt-4 md:mt-0">
              <Link href="/contact/terms-conditions" className="hover:text-primary-300">Privacy Policy</Link> | <Link href="/contact/terms-conditions" className="hover:text-primary-300">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
