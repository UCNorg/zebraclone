import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top bar with secondary info */}
      <div className="bg-zebra-gray-light py-1">
        <div className="zebra-container flex justify-between items-center">
          <p className="text-sm text-zebra-gray-dark">Comprehensive Landscaping & Tree Care Services</p>
          <div className="flex items-center gap-4">
            <Link href="/blog" className="text-sm text-zebra-gray-dark flex items-center">
              <span className="mr-1">Blog</span>
            </Link>
            <Link
              href="https://app.gethearth.com/partners/zebrascapes-llc/"
              className="text-sm text-zebra-gray-dark flex items-center"
              target="_blank"
            >
              <span className="mr-1">Financing</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="zebra-container py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://ext.same-assets.com/3216539116/1983894660.png"
              alt="ZebraScapes Logo"
              width={70}
              height={70}
              className="mr-2"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-zebra-gray-dark hover:text-primary-300 font-medium">
              Home
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-zebra-gray-dark hover:text-primary-300 font-medium">
                Services
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white">
                <DropdownMenuItem asChild>
                  <Link href="/services" className="w-full">All Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/service/landscape-design" className="w-full">Landscape Design</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/service/landscape-installation" className="w-full">Landscape Installation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/service/tree-care" className="w-full">Tree Care</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/service/irrigation-installation" className="w-full">Irrigation</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/gallery" className="text-zebra-gray-dark hover:text-primary-300 font-medium">
              Gallery
            </Link>
            <Link href="/podcast" className="text-zebra-gray-dark hover:text-primary-300 font-medium">
              Podcast
            </Link>
            <Link href="/about" className="text-zebra-gray-dark hover:text-primary-300 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-zebra-gray-dark hover:text-primary-300 font-medium">
              Contact
            </Link>
          </nav>

          {/* Phone number */}
          <Link
            href="tel:928-830-4061"
            className="hidden md:flex items-center gap-2 text-primary-300 font-bold"
          >
            <Phone size={20} />
            <span>(928) 830-4061</span>
          </Link>

          {/* Mobile menu button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <Image
                    src="https://ext.same-assets.com/3216539116/1983894660.png"
                    alt="ZebraScapes Logo"
                    width={60}
                    height={60}
                  />
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                </div>

                <nav className="flex flex-col space-y-4">
                  <Link href="/" className="text-lg font-medium py-2 border-b border-gray-100">
                    Home
                  </Link>
                  <Link href="/services" className="text-lg font-medium py-2 border-b border-gray-100">
                    Services
                  </Link>
                  <Link href="/gallery" className="text-lg font-medium py-2 border-b border-gray-100">
                    Gallery
                  </Link>
                  <Link href="/podcast" className="text-lg font-medium py-2 border-b border-gray-100">
                    Podcast
                  </Link>
                  <Link href="/about" className="text-lg font-medium py-2 border-b border-gray-100">
                    About
                  </Link>
                  <Link href="/contact" className="text-lg font-medium py-2 border-b border-gray-100">
                    Contact
                  </Link>
                </nav>

                <div className="mt-auto pb-8">
                  <Link
                    href="tel:928-830-4061"
                    className="flex items-center gap-2 text-primary-300 font-bold"
                  >
                    <Phone size={20} />
                    <span>(928) 830-4061</span>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
