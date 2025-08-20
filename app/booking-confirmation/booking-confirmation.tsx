"use client";

import Image from "next/image";
import {
  Check,
  MapPin,
  CircleCheck,
  Lock,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export function BookingConfirmation() {
  return (
    <div>
      <div className="h-52 bg-[#F8F9FA] mb-8 flex flex-col gap-12 p-6">
        <div className="max-w-lg mx-auto w-full flex items-center justify-between">
          <div className="flex items-center">
            <Lock className="w-4 h-4 text-[#808080]" />
            <span className="ml-2 text-xs text-[#808080] tracking-widest">
              Secure Transactions
            </span>
          </div>

          <div className="flex items-center">
            <Clock className="w-4 h-4 text-[#808080]" />
            <span className="ml-2 text-xs text-[#808080] tracking-widest">
              24-Hour Service{" "}
            </span>
          </div>

          <div className="flex items-center">
            <ShieldCheck className="w-4 h-4 text-[#808080]" />
            <span className="ml-2 text-xs text-[#808080] tracking-widest">
              Trusted Payments{" "}
            </span>
          </div>
        </div>
        <div className="max-w-xl w-full mx-auto flex items-center justify-between relative">
          <div className="h-[1px] w-4/5 flex justify-center left-8 bg-[#0000ff] absolute top-5 z-0"></div>
          <div className="flex items-center flex-col gap-2">
            <div className="w-10 h-10 bg-[#0000FF] z-10 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="ml-2 text-sm font-medium  text-[#0000FF]">
              Choose Room
            </span>
          </div>

          <div className="flex items-center flex-col gap-2">
            <div className="w-10 h-10 bg-[#0000FF] z-10 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="ml-2 text-sm font-medium text-[#0000FF]">
              Guest & Payment Details
            </span>
          </div>

          <div className="flex items-center flex-col gap-2">
            <div className="w-10 h-10 bg-[#0000FF] z-10 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">3</span>
            </div>
            <span className="ml-2 text-sm font-medium text-[#0000FF]">
              Booking confirmation
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-6 bg-white">
        {/* Progress Steps */}

        {/* Confirmation Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div>
              <CircleCheck className="w-16 h-16 mr-2 stroke-1  text-[#008000]" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm text-[#808080]">
                Confirmation Code #721163
              </span>
              <h1 className="text-2xl font-semibold text-[#1A1A1A]">
                Booking Confirmed
              </h1>
            </div>
          </div>
        </div>

        {/* Confirmation Image */}
        <div className="mb-8">
          <div className="relative w-full h-32 rounded-lg overflow-hidden">
            <Image
              src={"/bookingconformation.jpg"}
              alt="Booking confirmation"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center mt-4 space-y-2">
            <p className="text-sm text-[#666666] font-medium">
              Check your email for your order confirmation
            </p>
            <p className="text-sm text-[#666666]">
              Order Date: July 28, 2025 at 10:31 AM GMT+1
            </p>
          </div>
        </div>

        {/* Hotel Information */}
        <Card className="mb-6 shadow-none border border-[#E6E6E6]">
          <CardContent className="p-6">
            <h2 className="text-xl  md:text-2xl font-bold text-[#333333] mb-2">
              The Lagos Continental Hotel
            </h2>
            <div className="flex items-center text-sm text-[#808080] mb-2">
              <span className="">4-Star Hotel</span>
            </div>
            <div className="flex items-center text-sm text-[#808080] mb-8">
              <MapPin className="w-4 h-4 mr-1" />
              <span>
                1, Nnamdi Road, Lekki - Epe Expressway, Eti - Osa, Lagos - Lagos
              </span>
            </div>

            <div className="flex gap-4">
              <div className="relative w-48 h-32 rounded-lg overflow-hidden">
                <Image
                  src={"/burj-al-arab.png"}
                  alt="Booking confirmation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-[#333333] mb-2">
                  Superior Room
                </h3>
                <div className="space-y-1 text-sm text-[#808080]">
                  <div className="flex items-center">
                    <CircleCheck className="w-4 h-4 mr-2" />
                    <span>King bed</span>
                  </div>
                  <div className="flex items-center">
                    <CircleCheck className="w-4 h-4 mr-2" />
                    <span>High Floor</span>
                  </div>
                  <div className="flex items-center">
                    <CircleCheck className="w-4 h-4 mr-2" />
                    <span>42 m²</span>
                  </div>
                  <div className="flex items-center">
                    <CircleCheck className="w-4 h-4 mr-2" />
                    <span>Free Gym available on request</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Details */}
            <div className="grid grid-cols-5 gap-4 mt-6 p-6 rounded-lg bg-[#F8F9FA] border-gray-200">
              <div className="text-center w-full">
                <div className="text-sm font-medium text-[#333333]">
                  Sat, Au 08, 2025
                </div>
                <div className="text-xs text-[#808080]">Check-in</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-[#333333]">
                  Fri, Aug 12, 2025
                </div>
                <div className="text-xs text-[#808080]">Check-out</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-[#333333]">5</div>
                <div className="text-xs text-[#808080]">Nights</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-[#333333]">2</div>
                <div className="text-xs text-[#808080]">Adults</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-[#333333]">1</div>
                <div className="text-xs text-[#808080]">Room</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Guest Information */}
        <Card className="mb-6 p-0 shadow-none border border-[#E6E6E6]">
          <CardContent className="p-6">
            <h3 className="font-medium text-[#4D4D4D] mb-4">Guest (s)</h3>
            <hr className="mb-4" />
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="text-xs text-[#808080]  tracking-wide">
                  Guest 1
                </div>
                <div className="font-medium text-[#333333]">Yomi Casual</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-[#808080]  tracking-wide">
                  Guest 2
                </div>
                <div className="font-medium text-[#333333]">Kamil Olakunle</div>
              </div>
            </div>
            <hr className="my-4" />

            <div className="">
              <div className="text-xs text-[#808080] uppercase tracking-wide mb-3">
                SPECIAL REQUESTS
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="connecting" checked />
                  <label
                    htmlFor="connecting"
                    className="text-sm text-[#666666]"
                  >
                    If possible, provide connecting rooms
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="adjoining" checked />
                  <label htmlFor="adjoining" className="text-sm text-[#666666]">
                    If possible, provide adjoining rooms
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="nonsmoking" checked />
                  <label
                    htmlFor="nonsmoking"
                    className="text-sm text-[#666666]"
                  >
                    If possible, provide non-smoking room
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <div className="text-xs text-[#808080] uppercase tracking-wide mb-1">
                NOTE
              </div>
              <p className="text-sm text-[#666666]">
                And or data backhauls clean causes like. With gupta points cloud
                managing spread about that is left opportunity. Deep at playing
                synergy solutions at previous individual. Other weeks mifflin by
                street last. Three know what where came one. Line production
                cheap buy. In left travel how me attached top. Loop live reach
                to almost be.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Pricing Breakdown */}
        <Card className="mb-6 p-0 shadow-none border border-[#E6E6E6]">
          <CardContent className="p-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-sm">
                <span className="text-[#666666]">Price per night</span>
                <span className="font-medium">$194.00</span>
              </div>
              <div className="flex justify-between  text-sm">
                <span className="text-[#666666]">Adult(s)</span>
                <span className="font-medium">2</span>
              </div>
              <div className="flex justify-between  text-sm">
                <span className="text-[#666666]">Children</span>
                <span className="font-medium">0</span>
              </div>
              <div className="flex justify-between  text-sm">
                <span className="text-[#666666]">Number of nights</span>
                <span className="font-medium">5</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between 3 text-sm">
                <span className="text-[#666666]">Subtotal</span>
                <span className="font-medium">$970.00</span>
              </div>
              <div className="flex justify-between 3 text-sm">
                <span className="text-[#666666]">Taxes and fees</span>
                <span className="font-medium">$115.58</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between text-base font-medium text-[#4D4D4D]">
                <span>Total Charges</span>
                <span>$1,085.58</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download Options */}
        <div className="flex gap-4 mb-6">
          <Button
            variant="outline"
            className="flex-1 text-[#666666] text-xs bg-transparent"
          >
            Download payment receipt
          </Button>
          <Button
            variant="outline"
            className="flex-1 text-xs text-[#666666] bg-transparent"
          >
            Download booking confirmation
          </Button>
        </div>

        {/* Back Button */}
        <Link href={"/"}>
          <Button className="w-full bg-[#0000FF] hover:bg-blue-700 text-white py-6 text-sm font-medium">
            Back to Hotels home
          </Button>
        </Link>
      </div>
    </div>
  );
}
