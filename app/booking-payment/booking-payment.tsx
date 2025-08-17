"use client";

import { useState } from "react";
import Image from "next/image";
import { Info, CreditCard, ChevronLeft } from "lucide-react";

import { Check, Lock, Clock, ShieldCheck } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function BookingDetails() {
  const [lateArrivalHours, setLateArrivalHours] = useState("");
  const [lateArrivalMinutes, setLateArrivalMinutes] = useState("");

  const router = useRouter();
  const roomFeatures = [
    {
      category: "Views",
      items: [
        "Sea view",
        "Lake view",
        "Landmark view",
        "City view",
        "Pool with a view",
        "Rooftop Pool",
        "Air Conditioning",
      ],
    },
    {
      category: "Bathroom",
      items: [
        "Private Bathroom",
        "Flat-Screen TV",
        "Mini Bar",
        "Free Wifi",
        "Free Toiletries",
        "Bathrobe",
        "Safe",
      ],
    },
    {
      category: "Room",
      items: [
        "Toilet",
        "Sofa",
        "Bath/tub or Shower",
        "Towels",
        "Linens",
        "Socket near the bed",
        "Cleaning products",
      ],
    },
    {
      category: "Technology",
      items: [
        "Tile/Marble floor",
        "Desk",
        "Sitting area",
        "Private entrance",
        "TV",
        "Slippers",
        "Telephone",
      ],
    },
    {
      category: "Comfort",
      items: [
        "Ironing facilities",
        "Iron",
        "Hairdryer",
        "DVD player",
        "Towels/Sheets (extra fee)",
        "Wake-up service/Alarm clock",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="h-52 bg-[#F8F9FA] mb-8 flex flex-col gap-12 p-6 relative">
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
          <div className="h-[1px] w-2/5 flex justify-center left-8 bg-[#0000ff] absolute top-5 z-0"></div>
          <div className="h-[1px] w-2/5 flex justify-center right-16 bg-[#666] absolute top-5 z-0"></div>
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
              <span className="text-white text-sm font-medium">2</span>
            </div>
            <span className="ml-2 text-sm font-medium text-[#0000FF]">
              Guest & Payment Details
            </span>
          </div>

          <div className="flex items-center flex-col gap-2">
            <div className="w-10 h-10 border border-[#666666] bg-[#F8F9FA] z-10 rounded-full flex items-center justify-center">
              <span className="text-[#666666] text-sm font-semibold">3</span>
            </div>
            <span className="ml-2 text-sm font-medium text-[#666666]">
              Booking confirmation
            </span>
          </div>
        </div>

        <div className="absolute left-[8%]">
          <Button
            size={"icon"}
            onClick={() => router.back()}
            className="border border-[#CCCCCC] hover:bg-white/90 bg-white"
          >
            <ChevronLeft className="h-4 w-4 text-[#666]" />
          </Button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-base font-medium text-[#4D4D4D]">
                Almost done! Enter your details and complete your booking now.
              </h1>
            </div>
            {/* Hotel Information */}
            <div className="border-[#ccc] border rounded-lg">
              <div className="  py-6  space-y-6">
                <div className="flex flex-col gap-2 px-6">
                  <h2 className="text-3xl font-semibold text-[#333333]">
                    The Lagos Continental Hotel
                  </h2>
                  <p className="text-sm text-[#666666]">4-Star Hotel</p>
                  <div className="flex items-center gap-2 text-sm text-[#666666]">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    3, Maroko Road, Lekki - Epe Express Way - Eti Osa, Lagos -
                    Lagos
                  </div>
                </div>

                <hr />

                {/* Room Details */}
                <div className="flex gap-4 px-6">
                  <div className="relative w-24 h-20 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=80&width=96"
                      alt="Superior Room"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-[#333333] mb-2">
                      Superior Room
                    </h3>
                    <div className="space-y-1 text-sm text-[#808080]">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        1 King Bed
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        High Floor
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        42 m²
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Free Crib available on request
                      </div>
                    </div>
                  </div>
                </div>

                {/* Booking Dates */}
                <div className="grid grid-cols-5 gap-4 text-center">
                  <div>
                    <p className="text-sm font-medium text-[#333333]">
                      Sat, Aug 08, 2025
                    </p>
                    <p className="text-xs text-[#808080]">Check-in</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#333333]">
                      Fri, Aug 12, 2025
                    </p>
                    <p className="text-xs text-[#808080]">Check-out</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#333333]">5</p>
                    <p className="text-xs text-[#808080]">Nights</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#333333]">2</p>
                    <p className="text-xs text-[#808080]">Adult (s)</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#333333]">1</p>
                    <p className="text-xs text-[#808080]">Room (s)</p>
                  </div>
                </div>
              </div>
              <hr />
              {/* Room Features and Facilities */}
              <div className=" ">
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-medium text-[#4D4D4D] mb-4">
                    Room Features and Facilities
                  </h3>
                  <div className="grid grid-cols-5 gap-x-4 gap-y-1 text-sm text-[#666666]">
                    {roomFeatures.map((category) =>
                      category.items.map((feature, index) => (
                        <div key={index} className="py-1">
                          {feature}
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <hr />
                <div className="justify-center py-6 flex gap-4 text-sm">
                  <button className="text-[#FC5D01] hover:text-orange-600">
                    Hotel Policies
                  </button>
                  <span className="text-gray-300">•</span>
                  <button className="text-[#FC5D01] hover:text-orange-600">
                    Cancellation Policy
                  </button>
                </div>
              </div>
            </div>
            {/* Guest Information */}
            <div className=" rounded-lg border border-[#ccc] py-6">
              <div className="px-6">
                <h3 className="text-lg font-medium text-[#333333] mb-4">
                  Guest (s)
                </h3>
                <div className="flex items-start gap-2 mb-6 p-3 rounded-lg">
                  <Info className="w-4 h-4 text-blue-600 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    The guest checking into each hotel room must be 21 or older,
                    present a valid Photo ID and credit card.
                  </p>
                </div>
              </div>
              <hr />
              {/* Guest 1 */}
              <div className="mb-8 p-6">
                <h4 className="text-sm font-medium text-[#808080] mb-4 tracking-widest">
                  GUEST 1
                </h4>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-2">
                    <Label
                      htmlFor="title1"
                      className="text-sm font-medium text-gray-700"
                    >
                      Title *
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1 w-full h-12 py-6">
                        <SelectValue placeholder="Mr." className="h-12" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mr">Mr.</SelectItem>
                        <SelectItem value="mrs">Mrs.</SelectItem>
                        <SelectItem value="ms">Ms.</SelectItem>
                        <SelectItem value="dr">Dr.</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-5">
                    <Label
                      htmlFor="firstName1"
                      className="text-sm font-medium text-gray-700"
                    >
                      First name *
                    </Label>
                    <Input
                      id="firstName1"
                      placeholder="Enter ddfirst name"
                      className="mt-1 h-12"
                    />
                  </div>
                  <div className="col-span-5">
                    <Label
                      htmlFor="lastName1"
                      className="text-sm font-medium text-gray-700"
                    >
                      Last name *
                    </Label>
                    <Input
                      id="lastName1"
                      placeholder="Enter last name"
                      className="mt-1 h12"
                    />
                  </div>
                </div>
              </div>
              <hr />

              {/* Guest 2 */}
              <div className="mb-8 p-6">
                <h4 className="text-sm font-medium text-[#808080] mb-4 tracking-widest">
                  GUEST 2
                </h4>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-2">
                    <Label
                      htmlFor="title1"
                      className="text-sm font-medium text-gray-700"
                    >
                      Title *
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1 w-full h-12 py-6">
                        <SelectValue placeholder="Mr." className="h-12" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mr">Mr.</SelectItem>
                        <SelectItem value="mrs">Mrs.</SelectItem>
                        <SelectItem value="ms">Ms.</SelectItem>
                        <SelectItem value="dr">Dr.</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-5">
                    <Label
                      htmlFor="firstName1"
                      className="text-sm font-medium text-gray-700"
                    >
                      First name *
                    </Label>
                    <Input
                      id="firstName1"
                      placeholder="Enter ddfirst name"
                      className="mt-1 h-12"
                    />
                  </div>
                  <div className="col-span-5">
                    <Label
                      htmlFor="lastName1"
                      className="text-sm font-medium text-gray-700"
                    >
                      Last name *
                    </Label>
                    <Input
                      id="lastName1"
                      placeholder="Enter last name"
                      className="mt-1 h12"
                    />
                  </div>
                </div>
              </div>
              <hr />

              {/* Options */}
              <div className="p-6">
                <h4 className="text-sm font-medium text-[#808080] mb-4 tracking-widest">
                  OPTIONS
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-700">
                      Please note late arrival at:
                    </span>
                    <div className="flex items-center gap-2">
                      <Input
                        value={lateArrivalHours}
                        onChange={(e) => setLateArrivalHours(e.target.value)}
                        placeholder="00"
                        className="w-16 text-center"
                      />
                      <span className="text-sm text-[#808080]">Hours</span>
                      <Input
                        value={lateArrivalMinutes}
                        onChange={(e) => setLateArrivalMinutes(e.target.value)}
                        placeholder="00"
                        className="w-16 text-center"
                      />
                      <span className="text-sm text-[#808080]">Minutes</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="connecting" />
                      <Label
                        htmlFor="connecting"
                        className="text-sm text-gray-700"
                      >
                        If possible, provide connecting rooms
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="adjoining" />
                      <Label
                        htmlFor="adjoining"
                        className="text-sm text-gray-700"
                      >
                        If possible, provide adjoining rooms
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="nonsmoking" />
                      <Label
                        htmlFor="nonsmoking"
                        className="text-sm text-gray-700"
                      >
                        If possible, provide non-smoking room
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="honeymoon" />
                      <Label
                        htmlFor="honeymoon"
                        className="text-sm text-gray-700"
                      >
                        Kindly request special treatment as the booking is for
                        Honeymooners
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="extrabed" />
                      <Label
                        htmlFor="extrabed"
                        className="text-sm text-gray-700"
                      >
                        Request for an extra bed
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="mt-6 p-6">
                <Label
                  htmlFor="notes"
                  className="text-sm font-medium text-gray-700"
                >
                  Note (Optional)
                </Label>
                <Textarea
                  id="notes"
                  placeholder="Write some notes for your reservation"
                  className="mt-1 min-h-[80px]"
                />
              </div>
            </div>

            {/* Payment section */}
            <div className="border-[#ccc] border rounded-lg p-6">
              <h3 className="text-lg font-medium text-[#333333] mb-4">
                Payment
              </h3>

              {/* Payment Methods */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-[#808080]">
                  <Image src={"/Visa.svg"} alt="visa" width={30} height={30} />
                  <span>Visa</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#808080]">
                  <Image
                    src={"/Mastercard.svg"}
                    alt="visa"
                    width={30}
                    height={30}
                  />

                  <span>Mastercard</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#808080]">
                  <Image
                    src={"/American Express.svg"}
                    alt="visa"
                    width={30}
                    height={30}
                  />

                  <span>American Express</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor="cardNumber"
                    className="text-sm font-medium text-gray-700"
                  >
                    Card number *
                  </Label>
                  <div className="relative mt-1">
                    <Input
                      id="cardNumber"
                      placeholder="Card number"
                      className="pr-10 h-12"
                    />
                    <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="expiryDate"
                      className="text-sm font-medium text-gray-700"
                    >
                      Expiration date *
                    </Label>
                    <Input
                      id="expiryDate"
                      placeholder="MM / YY"
                      className="mt-1 h-12"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="securityCode"
                      className="text-sm font-medium text-gray-700"
                    >
                      Security code *
                    </Label>
                    <Input
                      id="securityCode"
                      placeholder="Enter CVC"
                      className="mt-1 h-12"
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="nameOnCard"
                    className="text-sm font-medium text-gray-700"
                  >
                    Name on card *
                  </Label>
                  <Input
                    id="nameOnCard"
                    placeholder="Enter card name"
                    className="mt-1 h-12"
                  />
                </div>
              </div>
            </div>

            {/* Billing section */}
            <div className="border border-[#ccc] rounded-lg p-6">
              <h3 className="text-lg font-medium text-[#333333] mb-4">
                Billing
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email *
                    </Label>
                    <Input
                      id="email"
                      placeholder="Enter email address"
                      className="mt-1 h-12"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700"
                    >
                      Phone *
                    </Label>
                    <div className="flex mt-1">
                      <Select defaultValue="+234">
                        <SelectTrigger className="w-28 py-[23px] text-sm rounded-r-none border-r-0">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="+234">🇳🇬 +234</SelectItem>
                          <SelectItem value="+1">🇺🇸 +1</SelectItem>
                          <SelectItem value="+44">🇬🇧 +44</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        placeholder="000 000 0000"
                        className="rounded-l-none flex-1 h-12"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="country"
                      className="text-sm font-medium text-gray-700"
                    >
                      Country *
                    </Label>
                    <Select defaultValue="nigeria">
                      <SelectTrigger className="mt-1 w-full py-[23px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nigeria">Nigeria</SelectItem>
                        <SelectItem value="usa">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label
                      htmlFor="state"
                      className="text-sm font-medium text-gray-700"
                    >
                      State *
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1 py-[23px] w-full">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lagos">Lagos</SelectItem>
                        <SelectItem value="abuja">Abuja</SelectItem>
                        <SelectItem value="kano">Kano</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="streetAddress"
                    className="text-sm font-medium text-gray-700"
                  >
                    Street address *
                  </Label>
                  <Input
                    id="streetAddress"
                    placeholder="Enter street address"
                    className="mt-1 h-12"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="city"
                      className="text-sm font-medium text-gray-700"
                    >
                      City *
                    </Label>
                    <Input id="city" className="mt-1 h-12" />
                  </div>
                  <div>
                    <Label
                      htmlFor="zipCode"
                      className="text-sm font-medium text-gray-700"
                    >
                      Zip code *
                    </Label>
                    <Input
                      id="zipCode"
                      placeholder="Enter zip code"
                      className="mt-1 h-12"
                    />
                  </div>
                </div>
              </div>

              {/* Terms and Book button */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <Checkbox />
                  <p className="text-sm text-[#808080] text-center">
                    I agree to the{" "}
                    <button className="text-[#FC5D01] hover:text-orange-600 underline">
                      Terms & Conditions
                    </button>{" "}
                    and{" "}
                    <button className="text-[#FC5D01] hover:text-orange-600 underline">
                      Privacy Policy
                    </button>
                  </p>
                </div>

                <Link href={"/booking-confirmation"}>
                  <Button className="w-full bg-[#0000FF] hover:bg-blue-700 text-white py-6 text-sm font-medium">
                    Book and pay
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Pricing Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white ">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-[#666666] py-2 rounded-lg">
                  <Info className="w-4 h-4" />
                  You are on your way to getting a great deal!
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-[#808080]">Price per night</span>
                  <span className="font-medium">$164.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#666666]">Adult (s)</span>
                  <span className="font-medium">2</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#666666]">Children</span>
                  <span className="font-medium">0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#666666]">Number of nights</span>
                  <span className="font-medium">5</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between text-sm">
                  <span className="text-[#666666]">Subtotal</span>
                  <span className="font-medium">$164.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#666666]">Taxes and fees</span>
                  <span className="font-medium">$98.70</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total Charges</span>
                  <span>$1,085.58</span>
                </div>
                <p className="text-xs text-[#808080] text-center">
                  Prices include all taxes and fees charged by Alorityah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
