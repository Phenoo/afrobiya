"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MapPin, Heart, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { PhotoInfo } from "./info-gallery";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HotelAmenities from "./hotel-amenities";
import { HotelReviews } from "./hotel-reviews";
import { HotelMap } from "./hotel-map";
import { Card } from "./ui/card";
interface HotelInfoSheetProps {
  isOpen: boolean;
  onClose: () => void;
  hotelName: string;
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? "fill-[#FC5D01] text-[#FC5D01]" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default function HotelInfoSheet({
  isOpen,
  onClose,
  hotelName,
}: HotelInfoSheetProps) {
  const [isPhotoGalleryOpen, setIsPhotoGalleryOpen] = useState(false);
  const [tab, setTab] = useState("overview");
  const amenities = [
    "Swimming Pool",
    "Free Internet Access",
    "Fitness Center",
    "Business Center",
    "Free Parking",
    "Restaurant",
    "Free Wi-Fi",
    "Daily Housekeeping",
    "Designated Smoking Area",
  ];

  const ratingData = [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 0 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ];
  const tabs = [
    { id: "overview", label: "Overview & Photos" },
    { id: "about", label: "About" },
    { id: "amenities", label: "Amenities" },
    { id: "reviews", label: "Reviews" },
    { id: "map", label: "Map" },
  ];

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent
          side="right"
          className="w-full md:max-w-4xl p-0 overflow-y-auto"
        >
          <div className="p-4">
            <SheetHeader className="p-0  py-4">
              <SheetTitle className="text-left tracking-widest text-sm text-[#808080] font-normal">
                Hotel Info • {hotelName}
              </SheetTitle>
            </SheetHeader>

            {/* Image Gallery */}
            <div className="my-6">
              <div className="grid grid-cols-2 gap-2 h-80">
                {/* Main Image */}
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/lagos-continental.png"
                    alt="Hotel exterior"
                    fill
                    className="object-cover"
                  />
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute bottom-4 left-4 bg-white/90 hover:bg-white text-black"
                    onClick={() => setIsPhotoGalleryOpen(true)}
                  >
                    📷 See all photos (200)
                  </Button>
                </div>

                {/* Side Images */}
                <div className="space-y-2">
                  <div className="relative h-[152px] rounded-lg overflow-hidden">
                    <Image
                      src="/hotel-restaurant-interior.png"
                      alt="Hotel restaurant"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[152px] rounded-lg overflow-hidden">
                    <Image
                      src="/elegant-hotel-lobby.png"
                      alt="Hotel lobby"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel Details */}
            <div className="mb-6">
              <div className="flex items-start flex-col gap-4 md:flex-row justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-lg md:text-2xl font-bold">
                      {hotelName}
                    </h1>
                    <Heart className="h-6 w-6 text-gray-400" />
                  </div>
                  <p className="text-[#808080] mb-2">4-Star Hotel</p>
                  <div className="flex items-center gap-1 text-[#808080]">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">
                      3, Maroko Road, Lekki - Epe Express Way - Eti Osa, Lagos -
                      Lagos
                    </span>
                  </div>
                </div>
                <div className="md:text-right">
                  <p className="text-sm text-[#808080] mb-1">Starting at</p>
                  <p className="text-3xl font-bold text-blue-600">
                    $95{" "}
                    <span className="font-normal md:hidden text-sm text-[#808080]">
                      per night
                    </span>
                  </p>
                  <p className="text-sm text-[#808080] hidden md:flex">
                    per night
                  </p>
                </div>
              </div>

              {/* Navigation Tabs */}

              <Tabs defaultValue={tab} className="mb-6 w-full">
                <TabsList className="flex-wrap items-start">
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      onClick={() => setTab(tab.id)}
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <hr className=" mt-8 md:mt-4" />
                <TabsContent value="overview">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Rating Section */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl font-medium">4.0</span>
                        <Star className="h-6 w-6 fill-[#FC5D01] text-[#FC5D01]" />
                      </div>
                      <p className="text-[#808080] mb-4">53 ratings</p>

                      {/* Rating Breakdown */}
                      <div className="space-y-2">
                        {ratingData.map((rating) => (
                          <div
                            key={rating.stars}
                            className="flex items-center gap-2"
                          >
                            <span className="text-sm w-2">{rating.stars}</span>
                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-[#FC5D01] rounded-full"
                                style={{ width: `${rating.percentage}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <Card className="p-4 border-none shadow-none">
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <div className="flex flex-col mb-2">
                              <div className="text-right">
                                <StarRating rating={5} />
                              </div>
                              <div className="flex gap-4 items-center">
                                <h5 className=" text-[#666666] text-sm">
                                  Emma Williams
                                </h5>
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <p className="text-sm text-[#666666] mt-1">
                                    2 weeks ago
                                  </p>
                                </div>
                              </div>
                            </div>

                            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                              We had an amazing family vacation at this hotel.
                              The kids loved the pool area and the staff was
                              very accommodating with our requests. The rooms
                              were comfortable and the housekeeping service was
                              impeccable. We'll definitely be back!
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>

                    {/* Top Amenities */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-medium text-[#4D4D4D]">
                          Top Amenities
                        </h3>
                        <Button
                          variant="link"
                          className="text-orange-600 p-0 h-auto"
                          onClick={() => {
                            setTab("amenities");
                          }}
                        >
                          See all amenities
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {amenities.map((amenity, index) => (
                          <div key={index} className="text-[#808080] text-sm">
                            {amenity}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="about">
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-[#4D4D4D]">
                      Hotel Features
                    </h4>
                    <p className="text-xs md:text-sm text-[#666666]">
                      Offering an outdoor pool and barbecue, Lagos Oriental
                      Hotel is located in Lagos. The hotel has a terrace and
                      fitness center, and guests can enjoy a drink at the bar.
                      Free private parking is available on site. Every room at
                      this hotel is air conditioned and comes with a flat-screen
                      TV. Lagos Oriental Hotel features free WiFi . There is a
                      24-hour front desk at the property. The hotel also offers
                      car hire. The nearest airport is Murtala Muhammed
                      International Airport, 13 mi from the property.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="amenities">
                  <HotelAmenities />
                </TabsContent>
                <TabsContent value="reviews">
                  {/* Rating Section */}

                  {/* reviews */}
                  <HotelReviews />
                </TabsContent>
                <TabsContent value="map">
                  <HotelMap name={hotelName} />
                </TabsContent>
              </Tabs>
            </div>

            {/* Rating and Amenities Section */}
          </div>
        </SheetContent>
      </Sheet>

      <PhotoInfo
        isOpen={isPhotoGalleryOpen}
        onClose={() => setIsPhotoGalleryOpen(false)}
        hotelName={hotelName}
      />
    </>
  );
}
