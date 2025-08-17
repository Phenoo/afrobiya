"use client";

import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const destinations = [
  {
    name: "Eiffel Tower",
    location: "Lagos, Nigeria",
    image: "/eiffel-tower-landmark.png",
    rating: 5,
  },
  {
    name: "Machu Picchu",
    location: "Ibadan, Nigeria",
    image: "/machu-picchu-ancient-ruins.png",
    rating: 5,
  },
  {
    name: "Great Wall",
    location: "Abeokuta, Nigeria",
    image: "/great-wall-ancient.png",
    rating: 5,
  },
  {
    name: "Statue of Liberty",
    location: "Atlanta, USA",
    image: "/statue-of-liberty.png",
    rating: 5,
  },
  {
    name: "Taj Mahal",
    location: "Mumbai, India",
    image: "/taj-mahal-mausoleum.png",
    rating: 5,
  },
  {
    name: "Opera House",
    location: "Miami, USA",
    image: "/sydney-opera-house.png",
    rating: 5,
  },
  {
    name: "Grand Canyon",
    location: "Accra, Ghana",
    image: "/grand-canyon-red-rocks.png",
    rating: 5,
  },
];

export function PopularDestinations() {
  return (
    <section className="pb-16 pt-48 bg-[#F8F9FA]  px-6">
      <div className="max-w-7xl mx-auto">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full "
        >
          <CarouselContent>
            {destinations.map((destination, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/4 lg:basis-1/6 sm:basis-1/2"
              >
                <div
                  key={index}
                  className="text-center p-4 hover:shadow-lg rounded-2xl  transition-shadow"
                >
                  <div className="w-32 h-44 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-sm ">
                      {destination.name}
                    </h3>
                    <div className="flex items-center justify-center gap-1 text-xs text-[#808080] ">
                      <Image
                        src={"/Location.svg"}
                        alt="Location"
                        width={16}
                        height={16}
                      />
                      <span>{destination.location}</span>
                    </div>
                    <div className="flex justify-center">
                      {Array.from({ length: destination.rating }, (_, i) => (
                        <span key={i} className="text-orange-400 text-sm">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
