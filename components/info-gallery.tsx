"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialogfgdf";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { DialogTitle } from "./ui/dialog";

const hotelImages = [
  {
    src: "/gallery-1.png",
    alt: "Mountain landscape with traditional architecture",
  },
  { src: "/gallery-2.png", alt: "Ocean waves on rocky coastline" },
  { src: "/gallery-3.png", alt: "Person hiking in mountains" },
  { src: "/gallery-4.png", alt: "Friends enjoying sunset on cliff" },
  { src: "/gallery-5.png", alt: "Group celebrating on beach" },
  { src: "/gallery-6.png", alt: "Stylish travelers with luggage" },
  { src: "/gallery-7.png", alt: "Couple sharing coffee while traveling" },
  { src: "/gallery-2.png", alt: "Ocean waves on rocky coastline" },
  { src: "/gallery-3.png", alt: "Person hiking in mountains" },
  { src: "/gallery-4.png", alt: "Friends enjoying sunset on cliff" },
  { src: "/gallery-5.png", alt: "Group celebrating on beach" },
  { src: "/gallery-6.png", alt: "Stylish travelers with luggage" },
  { src: "/gallery-7.png", alt: "Couple sharing coffee while traveling" },
];

interface PhotoGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  hotelName?: string;
  initialImageIndex?: number;
}

export function PhotoInfo({
  isOpen,
  onClose,
  hotelName,
  initialImageIndex = 0,
}: PhotoGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? hotelImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === hotelImages.length - 1 ? 0 : prev + 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="md:max-w-4xl w-full h-[630px] p-0 bg-white rounded-2xl overflow-y-hidden">
        {/* Header with navigation */}
        <DialogTitle className="px-4  opacity-0 hidden">
          {hotelName}
        </DialogTitle>
        <div className="flex items-center justify-between pt-4 px-4 bg-white">
          <div className="flex items-center gap-2"></div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <X className="w-5 h-5 text-[#808080]" />
          </button>
        </div>

        {/* Main image */}
        <div className="flex-1 px-4">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src={hotelImages[currentImageIndex].src || "/placeholder.svg"}
              alt={hotelImages[currentImageIndex].alt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 px-4">
          <button
            onClick={goToPrevious}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-[#808080]" />
          </button>
          <ScrollArea className="w-[750px]  whitespace-nowrap">
            <div className="flex w-max space-x-4 p-4">
              {hotelImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`relative w-[180px] h-[100px] rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex
                      ? "border-blue-500 ring-2 ring-blue-200"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover object-top"
                  />
                </button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <button
            onClick={goToNext}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-[#808080]" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Default export for compatibility with hotel-info-sheet.tsx
export default PhotoInfo;
