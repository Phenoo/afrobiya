"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, Grid3X3, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 md:px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              src={"/logo3.svg"}
              alt="logo"
              width={80}
              height={48}
              className="md:w-[100px] md:h-[60px]"
            />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          <a href="/" className="text-[#808080] text-sm hover:text-[#333333]">
            Home
          </a>
          <a href="#" className="text-[#808080] text-sm  hover:text-[#333333]">
            Flights
          </a>
          <a href="#" className="text-[#808080] text-sm  hover:text-[#333333]">
            Vehicles
          </a>
          <a
            href="/hotels"
            className={cn(
              "text-[#808080] text-sm",
              pathname === "/hotels" &&
                "border-b-2 border-[#0010DC] text-sm  text-[#333333] font-medium"
            )}
          >
            Hotels
          </a>
          <a href="#" className="text-[#808080] text-sm  hover:text-[#333333]">
            Travel Tips
          </a>
          <a href="#" className="text-[#808080] text-sm  hover:text-[#333333]">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-2 text-sm">
            <span className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center text-xs">
              🌐
            </span>
            <span>ENG</span>
            <ChevronDown className="w-4 h-4" />
          </div>

          <div className="hidden lg:flex items-center space-x-2 text-sm">
            <span>$USD</span>
            <ChevronDown className="w-4 h-4" />
          </div>

          <Button className="bg-[#0010DC] rounded-3xl hover:bg-[#0010DC] text-white px-4 lg:px-6 text-sm">
            Sign in
          </Button>

          <Grid3X3 className="w-6 h-6 text-[#808080] hidden lg:block" />
        </div>

        <div className="flex items-center space-x-3 md:hidden">
          <Button className="bg-[#0010DC] rounded-3xl hover:bg-[#0010DC] text-white px-4 text-sm">
            Sign in
          </Button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#808080]" />
            ) : (
              <Menu className="w-6 h-6 text-[#808080]" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-4 pt-4 pb-6 space-y-4 bg-white border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-[#808080] hover:text-[#333333] py-2">
                Home
              </a>
              <a href="#" className="text-[#808080] hover:text-[#333333] py-2">
                Flights
              </a>
              <a href="#" className="text-[#808080] hover:text-[#333333] py-2">
                Vehicles
              </a>
              <a
                href="/hotels"
                className={cn(
                  "text-[#808080] py-2",
                  pathname === "/hotels" &&
                    "border-l-4 border-[#0010DC] text-[#333333] font-medium pl-4"
                )}
              >
                Hotels
              </a>
              <a href="#" className="text-[#808080] hover:text-[#333333] py-2">
                Travel Tips
              </a>
              <a href="#" className="text-[#808080] hover:text-[#333333] py-2">
                Contact
              </a>
            </nav>

            <div className="pt-4 border-t border-gray-200 space-y-4">
              <div className="flex items-center space-x-2 text-sm">
                <span className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center text-xs">
                  🌐
                </span>
                <span>ENG</span>
                <ChevronDown className="w-4 h-4" />
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <span>$USD</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
