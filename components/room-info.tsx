"use client";

import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

interface RoomInfoSheetProps {
  isOpen: boolean;
  onClose: () => void;
  roomName: string;
  roomData?: {
    name: string;
    image: string;
    size: string;
    floor: string;
    bedType: string;
    cribAvailable: boolean;
    price: number;
  };
}

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
    category: "Room Items",
    items: [
      "Toilet",
      "Sofa",
      "Bathtub or Shower",
      "Towels",
      "Linens",
      "Socket near the bed",
      "Cleaning products",
    ],
  },
  {
    category: "Additional",
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
    category: "Services",
    items: [
      "Ironing facilities",
      "Iron",
      "Hairdryer",
      "DVD player",
      "Towels/Sheets (extra fee)",
      "Wake-up service/Alarm clock",
      "Air Conditioning",
    ],
  },
];

export default function RoomInfoSheet({
  isOpen,
  onClose,
  roomName,
  roomData,
}: RoomInfoSheetProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/lagos-continental.png",
    "/fairmont-resort-dubai.png",
    "/plaza-hotel-business.png",
  ];

  const defaultRoomData = {
    name: "Superior Room",
    image: "/lagos-continental.png",
    size: "42 m²",
    floor: "High Floor",
    bedType: "1 King Bed",
    cribAvailable: true,
    price: 95,
  };

  const room = roomData || defaultRoomData;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-full md:max-w-4xl p-0 overflow-y-auto"
      >
        <div className="bg-white w-full h-full">
          {/* Header */}
          <SheetHeader className="flex flex-row items-center justify-between mb-4 px-6 py-4 border-b">
            <h2 className="text-sm">Room Info • {room.name}</h2>
          </SheetHeader>

          {/* Image Section */}
          <div className="w-full relative h-64 px-8 py-4 flex justify-between items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevImage}
              className="h-10 w-10 p-0 rounded-full border bg-white/90 hover:bg-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className=" w-full h-64 flex-1 justify-center flex ">
              <Image
                src={images[currentImageIndex] || "/placeholder.svg"}
                alt={room.name}
                width={500}
                height={300}
                className="object-cover rounded-2xl"
              />
            </div>

            {/* Navigation Arrows */}

            <Button
              variant="ghost"
              size="sm"
              onClick={nextImage}
              className=" h-10 w-10 p-0 rounded-full border bg-white/90 hover:bg-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Room Details */}
          <div className="py-6 space-y-2">
            <div className="flex items-start flex-col gap-6 md:flex-row px-6 justify-between">
              <div className="space-y-2">
                <h1 className="text-xl font-medium">{room.name}</h1>
                <div className="flex items-center text-sm gap-2 text-gray-600">
                  <span>{room.size}</span>
                  <span>•</span>
                  <span>{room.floor}</span>
                  <span>•</span>
                  <span>{room.bedType}</span>
                  <span>•</span>
                  <span>Free crib available on request</span>
                </div>
              </div>

              <div className="flex gap-6 flex-row items-center">
                <Link href={"/booking-payment"}>
                  <Button className="bg-[#0000FF] hover:bg-blue-700 px-4">
                    Book
                  </Button>
                </Link>
                <div className="text-right">
                  <div className="text-4xl font-bold text-[#0010DC]">
                    ${room.price}
                  </div>
                  <div className="text-sm text-gray-600 mb-3">per night</div>
                </div>
              </div>
            </div>
            <hr />
            {/* Room Features and Facilities */}
            <div className="space-y-4 px-6">
              <h2 className="text-lg font-medium text-[#4D4D4D]">
                Room Features and Facilities
              </h2>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                {roomFeatures.map((category) => (
                  <div key={category.category} className="space-y-2">
                    {category.items.map((item, index) => (
                      <div key={index} className="text-xs text-[#666666]">
                        {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
