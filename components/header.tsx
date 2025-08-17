"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, Grid3X3 } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm  ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div>
            <Image src={"/logo3.svg"} alt="logo" width={100} height={60} />
          </div>

          <nav className="flex items-center space-x-8">
            <a href="/" className="text-[#808080] hover:text-[#333333]">
              Home
            </a>
            <a href="#" className="text-[#808080] hover:text-[#333333]">
              Flights
            </a>
            <a href="#" className="text-[#808080] hover:text-[#333333]">
              Vehicles
            </a>
            <a
              href="/hotels"
              className={cn(
                "text-[#808080]  ",
                pathname === "/hotels" &&
                  "border-b-2 border-[#0010DC] text-[#333333] font-medium "
              )}
            >
              Hotels
            </a>
            <a href="#" className="text-[#808080] hover:text-[#333333]">
              Travel Tips
            </a>
            <a href="#" className="text-[#808080] hover:text-[#333333]">
              Contact
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
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

          <Button className="bg-[#0010DC] rounded-3xl hover:bg-[#0010DC] text-white px-6">
            Sign in
          </Button>

          <Grid3X3 className="w-6 h-6 text-[#808080]" />
        </div>
      </div>
    </header>
  );
}
