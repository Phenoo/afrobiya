"use client";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Wifi,
  Car,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import HotelPoliciesDialog from "./hotel-info-dilaog";
import HotelInfoSheet from "./hotel-info-sheet";
import RoomInfoSheet from "./room-info";
import Link from "next/link";

const hotels = [
  {
    id: 1,
    name: "The Lagos Continental Hotel",
    location: "Lagos, Nigeria",
    image: "/lagos-continental.png",
    category: "Best Deal",
    categoryType: "luxury",
    amenities: ["Free Internet Access", "Free Parking"],
    rating: 5,
    reviews: 5,
    price: 180,
  },
  {
    id: 2,
    name: "Vertigo Hotel",
    location: "Lagos, Nigeria",
    image: "/vertigo-hotel.png",
    category: "Luxury",
    categoryType: "luxury",
    amenities: ["Free Internet Access", "Free Parking"],
    rating: 5,
    reviews: 5,
    price: 180,
  },
  {
    id: 3,
    name: "Elegance Suites Hotels",
    location: "Lagos, Nigeria",
    image: "/elegance-suites.png",
    category: "Economy",
    categoryType: "economy",
    amenities: ["Free Internet Access", "Free Parking"],
    rating: 5,
    reviews: 5,
    price: 180,
  },
  {
    id: 4,
    name: "The Federal Palace Hotel and Casino",
    location: "Lagos, Nigeria",
    image: "/federal-palace.png",
    category: "",
    categoryType: "",
    amenities: ["Free Internet Access", "Free Parking"],
    rating: 5,
    reviews: 5,
    price: 180,
  },
  {
    id: 5,
    name: "Boss Hotels & Suites",
    location: "Lagos, Nigeria",
    image: "/boss-hotels.png",
    category: "",
    categoryType: "",
    amenities: ["Free Internet Access", "Free Parking"],
    rating: 5,
    reviews: 5,
    price: 180,
  },
  {
    id: 6,
    name: "Sheraton Lagos Hotel",
    location: "Lagos, Nigeria",
    image: "/sheraton-lagos.png",
    category: "Luxury",
    categoryType: "luxury",
    amenities: ["Free Internet Access", "Free Parking"],
    rating: 5,
    reviews: 5,
    price: 180,
  },
];

const hotelRooms = {
  1: [
    {
      id: 1,
      name: "Deluxe Ocean View Room",
      image: "/hotel-room-ocean-view.png",
      amenities: ["Free WiFi", "Ocean View", "King Bed"],
      size: "35 sqm",
      guests: 2,
      price: 180,
      originalPrice: 220,
      discount: 18,
    },
    {
      id: 2,
      name: "Executive Suite",
      image: "/hotel-restaurant-interior.png",
      amenities: ["Free WiFi", "City View", "Separate Living Area"],
      size: "55 sqm",
      guests: 4,
      price: 280,
      originalPrice: 350,
      discount: 20,
    },
    {
      id: 3,
      name: "Standard Double Room",
      image: "/elegant-hotel-lobby.png",
      amenities: ["Free WiFi", "Garden View", "Double Bed"],
      size: "25 sqm",
      guests: 2,
      price: 120,
      originalPrice: 150,
      discount: 20,
    },
  ],
  2: [
    {
      id: 1,
      name: "Premium King Room",
      image: "/hotel-room-ocean-view.png",
      amenities: ["Free WiFi", "City View", "King Bed"],
      size: "40 sqm",
      guests: 2,
      price: 200,
      originalPrice: 240,
      discount: 17,
    },
    {
      id: 2,
      name: "Junior Suite",
      image: "/hotel-restaurant-interior.png",
      amenities: ["Free WiFi", "Balcony", "Seating Area"],
      size: "45 sqm",
      guests: 3,
      price: 250,
      originalPrice: 300,
      discount: 17,
    },
  ],
  3: [
    {
      id: 1,
      name: "Economy Double Room",
      image: "/elegant-hotel-lobby.png",
      amenities: ["Free WiFi", "Air Conditioning", "Double Bed"],
      size: "20 sqm",
      guests: 2,
      price: 90,
      originalPrice: 110,
      discount: 18,
    },
    {
      id: 2,
      name: "Family Room",
      image: "/hotel-room-ocean-view.png",
      amenities: ["Free WiFi", "2 Double Beds", "Mini Fridge"],
      size: "30 sqm",
      guests: 4,
      price: 140,
      originalPrice: 170,
      discount: 18,
    },
  ],
  4: [
    {
      id: 1,
      name: "Casino View Room",
      image: "/hotel-restaurant-interior.png",
      amenities: ["Free WiFi", "Casino View", "Queen Bed"],
      size: "32 sqm",
      guests: 2,
      price: 160,
      originalPrice: 200,
      discount: 20,
    },
  ],
  5: [
    {
      id: 1,
      name: "Business Suite",
      image: "/elegant-hotel-lobby.png",
      amenities: ["Free WiFi", "Work Desk", "King Bed"],
      size: "38 sqm",
      guests: 2,
      price: 170,
      originalPrice: 210,
      discount: 19,
    },
  ],
  6: [
    {
      id: 1,
      name: "Luxury King Room",
      image: "/hotel-room-ocean-view.png",
      amenities: ["Free WiFi", "City View", "King Bed", "Marble Bathroom"],
      size: "42 sqm",
      guests: 2,
      price: 220,
      originalPrice: 280,
      discount: 21,
    },
    {
      id: 2,
      name: "Presidential Suite",
      image: "/hotel-restaurant-interior.png",
      amenities: [
        "Free WiFi",
        "Panoramic View",
        "Living Room",
        "Butler Service",
      ],
      size: "85 sqm",
      guests: 4,
      price: 450,
      originalPrice: 600,
      discount: 25,
    },
  ],
};

export default function HotelResults() {
  const [isPoliciesDialogOpen, setIsPoliciesDialogOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState<string>("");
  const [isHotelInfoSheetOpen, setIsHotelInfoSheetOpen] = useState(false);
  const [selectedHotelForInfo, setSelectedHotelForInfo] = useState<string>("");
  const [showRoomsForHotel, setShowRoomsForHotel] = useState<number | null>(
    null
  );
  const [isRoomInfoSheetOpen, setIsRoomInfoSheetOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string>("");

  const [showRooms, setShowRooms] = useState(false);
  const handlePoliciesClick = (hotelName: string) => {
    setSelectedHotel(hotelName);
    setIsPoliciesDialogOpen(true);
  };

  const handleShowRoomsClick = (hotelId: number) => {
    setShowRoomsForHotel(showRoomsForHotel === hotelId ? null : hotelId);
  };

  const handleHotelInfoClick = (hotelName: string) => {
    setSelectedHotelForInfo(hotelName);
    setIsHotelInfoSheetOpen(true);
  };

  const handleRoomInfoClick = (roomName: string) => {
    setSelectedRoom(roomName);
    setIsRoomInfoSheetOpen(true);
  };

  return (
    <>
      <div className="space-y-6">
        {/* Results Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-lg sm:text-xl">794 hotels in Abuja, Nigeria</h2>
          <Button
            variant="outline"
            className="gap-0 text-[#666666] border text-xs border-[#CCCCCC] bg-transparent w-fit"
          >
            <ArrowUpDown className="h-3 w-3 mr-1" />
            <span>Top picks</span>
          </Button>
        </div>

        {/* Hotel Cards */}
        <div className="space-y-4">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white hover:border hover:border-[#0000ff] flex flex-col border rounded-lg overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row gap-0">
                <div className="relative w-full lg:w-48 h-48 lg:h-60 flex-shrink-0">
                  <Image
                    src={hotel.image || "/placeholder.svg"}
                    alt={hotel.name}
                    width={192}
                    height={240}
                    className="object-cover w-full h-full lg:rounded-l-lg"
                  />
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                    <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                  </div>
                </div>

                {/* Hotel Info */}
                <div className="flex-1 flex flex-col lg:flex-row justify-between">
                  <div className="flex justify-between flex-col gap-4 p-4 flex-1">
                    <div className="space-y-2">
                      {/* Category Badge */}
                      {hotel.category && (
                        <div className="flex flex-wrap gap-2">
                          {hotel.category === "Best Deal" && (
                            <span className="border-[#CA4A01] border text-[#CA4A01] px-2 py-1 rounded-3xl text-xs font-medium">
                              Best Deal
                            </span>
                          )}
                          <span
                            className={`px-2 py-1 rounded-3xl text-xs ${
                              hotel.categoryType === "luxury"
                                ? "bg-[#FEDFCC] text-black"
                                : hotel.categoryType === "economy"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {hotel.category}
                          </span>
                        </div>
                      )}

                      {/* Hotel Name */}
                      <h3 className="text-lg lg:text-xl font-semibold">
                        {hotel.name}
                      </h3>

                      {/* Location */}
                      <div className="flex items-center gap-1 text-[#808080]">
                        <Image
                          src={"/Location.svg"}
                          alt="Location"
                          width={16}
                          height={16}
                        />
                        <span className="text-sm">{hotel.location}</span>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-[#808080]">
                        <div className="flex items-center gap-1">
                          <Wifi className="h-4 w-4" />
                          <span>Free Internet Access</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Car className="h-4 w-4" />
                          <span>Free Parking</span>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-medium">
                          5-Star Hotel
                        </span>
                        <div className="flex">
                          {Array.from({ length: 5 }, (_, i) => (
                            <span key={i} className="text-orange-400 text-sm">
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-[#808080]">
                          ({hotel.reviews})
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 lg:gap-4 items-center text-[#808080]">
                      <Button
                        variant="link"
                        className="p-0 h-auto text-xs tracking-widest text-orange-600"
                        onClick={() => handleHotelInfoClick(hotel.name)}
                      >
                        Hotel Info
                      </Button>
                      <Button
                        variant="link"
                        className="p-0 text-xs tracking-widest h-auto text-[#FC5D01]"
                        onClick={() => handlePoliciesClick(hotel.name)}
                      >
                        Hotel Policies
                      </Button>
                      <Button
                        onClick={() => handleShowRoomsClick(hotel.id)}
                        className="h-auto hover:bg-transparent bg-transparent border border-[#808080] text-[#808080] text-xs rounded p-2"
                      >
                        {showRoomsForHotel === hotel.id ? "Close " : "Show "}
                        rooms
                        {showRoomsForHotel === hotel.id ? (
                          <ChevronUp className="h-3 w-3 ml-2" />
                        ) : (
                          <ChevronDown className="h-3 w-3 ml-2" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="text-center flex flex-row lg:flex-col border-t lg:border-t-0 lg:border-l p-4 justify-between lg:justify-between lg:w-32">
                    <div className="flex flex-col gap-1">
                      <div className="text-xs text-[#808080]">Starting at</div>
                      <div className="text-xl lg:text-2xl font-medium text-[#0000FF]">
                        ${hotel.price}
                      </div>
                      <div className="text-xs text-[#808080]">Per night</div>
                    </div>
                    <div className="text-xs text-center text-[#808080] lg:mt-auto">
                      Includes
                      <br />
                      taxes & fees
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Rooms Section */}
              <div
                className={`w-full transition-all duration-500 ease-in-out  overflow-hidden ${
                  showRoomsForHotel === hotel.id &&
                  hotelRooms[hotel.id as keyof typeof hotelRooms]
                    ? "max-h-[2000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {hotelRooms[hotel.id as keyof typeof hotelRooms] && (
                  <>
                    <div className="py-4">
                      <div className="space-y-3 w-full">
                        {hotelRooms[hotel.id as keyof typeof hotelRooms].map(
                          (room, index) => (
                            <div
                              key={room.id}
                              className={`bg-white flex flex-col md:px-8 border-t p-4 lg:flex-row gap-4 transform transition-all duration-300 ease-out cursor-pointer  ${
                                showRoomsForHotel === hotel.id
                                  ? "translate-y-0 opacity-100"
                                  : "translate-y-4 opacity-0"
                              }`}
                              style={{
                                transitionDelay:
                                  showRoomsForHotel === hotel.id
                                    ? `${index * 100}ms`
                                    : "0ms",
                              }}
                            >
                              <div className="flex flex-col lg:flex-row gap-4 w-full">
                                <div className="relative w-full lg:w-48 h-48 flex-shrink-0">
                                  <Image
                                    src={hotel.image || "/placeholder.svg"}
                                    alt={hotel.name}
                                    width={192}
                                    height={192}
                                    className="object-cover w-full h-full lg:rounded-lg"
                                  />
                                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                                    <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                                  </div>
                                </div>

                                <div className="flex-1 flex flex-col lg:flex-row justify-between">
                                  <div className="flex justify-between flex-col gap-4 py-1 px-4 flex-1">
                                    <div className="space-y-2">
                                      <h3 className="text-lg lg:text-xl font-semibold">
                                        {hotel.name}
                                      </h3>

                                      <div className="flex flex-col items-start gap-1 text-sm text-[#808080]">
                                        <div className="flex items-center gap-1">
                                          <Wifi className="h-4 w-4" />
                                          <span>Free Internet Access</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                          <Car className="h-4 w-4" />
                                          <span>Free Parking</span>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 lg:gap-4 items-center text-[#808080]">
                                      <Button
                                        variant="link"
                                        className="p-0 h-auto text-xs tracking-widest text-orange-600"
                                        onClick={() =>
                                          handleRoomInfoClick(room.name)
                                        }
                                      >
                                        Room Info
                                      </Button>
                                      <Button
                                        variant="link"
                                        className="p-0 text-xs tracking-widest h-auto text-[#FC5D01]"
                                        onClick={() =>
                                          handlePoliciesClick(hotel.name)
                                        }
                                      >
                                        Cancellation Policy
                                      </Button>
                                    </div>
                                  </div>

                                  <div className="text-center flex flex-row lg:flex-col border-t lg:border-t-0  p-4 justify-between lg:justify-between lg:w-32">
                                    <div className="flex flex-col gap-1">
                                      <div className="text-xl lg:text-2xl font-medium text-[#0000FF]">
                                        ${hotel.price}
                                      </div>
                                      <div className="text-xs text-[#808080]">
                                        Per night
                                      </div>
                                    </div>
                                    <div className="text-xs text-center text-[#808080]">
                                      <span className="text-black text-base font-medium">
                                        ${hotel.price}
                                      </span>
                                      <br />
                                      Total
                                    </div>
                                    <div className="lg:mt-2">
                                      <Link href={"/booking-payment"}>
                                        <Button
                                          size={"sm"}
                                          className="bg-[#0000FF] w-[74px] p-2"
                                        >
                                          Book
                                        </Button>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        )}

                        <div className="p-4">
                          <Button
                            onClick={() => handleShowRoomsClick(hotel.id)}
                            className=" w-full hover:bg-white border-2 bg-transparent text-[#888] border-[#ccc] "
                          >
                            Close Rooms <ChevronUp className="mr-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Button variant="outline" size="sm" className="gap-1 bg-transparent">
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <div className="flex gap-1 flex-wrap justify-center">
            {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
              <Button
                key={index}
                variant={page === 1 ? "default" : "outline"}
                size="sm"
                className="w-8 h-8 p-0"
              >
                {page}
              </Button>
            ))}
          </div>

          <Button variant="outline" size="sm" className="gap-1 bg-transparent">
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <HotelPoliciesDialog
        isOpen={isPoliciesDialogOpen}
        onClose={() => setIsPoliciesDialogOpen(false)}
        hotelName={selectedHotel}
      />
      <HotelInfoSheet
        isOpen={isHotelInfoSheetOpen}
        onClose={() => setIsHotelInfoSheetOpen(false)}
        hotelName={selectedHotelForInfo}
      />
      <RoomInfoSheet
        isOpen={isRoomInfoSheetOpen}
        onClose={() => setIsRoomInfoSheetOpen(false)}
        roomName={selectedRoom}
      />
    </>
  );
}
