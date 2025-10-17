"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { DialogTitle } from "./ui/dialog";

// Define the image type
interface HotelImage {
  url: string;
  description: string;
}

interface PhotoGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  hotelName?: string;
  images?: HotelImage[];
  initialImageIndex?: number;
}

export function PhotoInfo({
  isOpen,
  onClose,
  hotelName,
  images = [],
  initialImageIndex = 0,
}: PhotoGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);

  // Use the passed images or fallback to default hotelImages
  const displayImages = images.length > 0 ? images : [];

  // Transform the hotel images to match the expected format if needed
  const transformedImages = displayImages.map(img => ({
    src: img.url || "/placeholder.svg",
    alt: img.description || `${hotelName} image`,
    description: img.description || `${hotelName} image`,
  }));

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? transformedImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => {
      const nextIndex = prev === transformedImages.length - 1 ? 0 : prev + 1;
      console.log("Navigating to image index:", nextIndex);
      return nextIndex;
    });
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const currentImage = transformedImages[currentImageIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="md:max-w-4xl w-full max-h-[90vh] h-auto p-0 bg-white rounded-2xl overflow-hidden flex flex-col">
        {/* Header */}
         <div className="flex items-center justify-between p-4 border-b bg-white flex-shrink-0">
          <DialogTitle aria-describedby={undefined} className="text-lg font-semibold m-0">
            {hotelName} - Photos
          </DialogTitle>
          
        </div>

        {/* Main image container with fixed height */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Main image with description overlay */}
          <div className="relative flex-1 min-h-0">
            <div className="relative w-full h-full max-h-[30vh] min-h-[270px]">
              <Image
                src={currentImage?.src || "/placeholder.svg"}
                alt={currentImage?.description || "Hotel image"}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
              
              {/* Description overlay */}
              {currentImage?.description && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-sm font-medium">
                    {currentImage.description}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Navigation and thumbnails */}
          <div className="border-t bg-white">
            {/* Navigation buttons and image counter */}
            <div className="flex items-center justify-between p-4">
              <button
                onClick={goToPrevious}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={transformedImages.length <= 1}
              >
                <ChevronLeft className="w-5 h-5 text-[#808080]" />
              </button>
              
              <div className="text-center text-sm text-gray-600">
                {currentImageIndex + 1} of {transformedImages.length} photos
              </div>
              
              <button
                onClick={goToNext}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={transformedImages.length <= 1}
              >
                <ChevronRight className="w-5 h-5 text-[#808080]" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="px-4 pb-4">
              <ScrollArea className="w-full">
                <div className="flex space-x-3 pb-4">
                  {transformedImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex
                          ? "border-blue-500 ring-2 ring-blue-200"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                      {/* Thumbnail overlay for selected state */}
                      {index === currentImageIndex && (
                        <div className="absolute inset-0 bg-blue-500/20" />
                      )}
                    </button>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Fallback images if none provided
/*const hotelImages = [
  {
    src: "/gallery-1.png",
    alt: "Mountain landscape with traditional architecture",
    description: "Beautiful mountain view with traditional architecture"
  },
  { 
    src: "/gallery-2.png", 
    alt: "Ocean waves on rocky coastline",
    description: "Stunning ocean waves crashing against rocky shore"
  },
  { 
    src: "/gallery-3.png", 
    alt: "Person hiking in mountains",
    description: "Adventurous hiking trail through majestic mountains"
  },
  { 
    src: "/gallery-4.png", 
    alt: "Friends enjoying sunset on cliff",
    description: "Friends sharing memorable moments during sunset"
  },
  { 
    src: "/gallery-5.png", 
    alt: "Group celebrating on beach",
    description: "Beach celebration with friends and family"
  },
  { 
    src: "/gallery-6.png", 
    alt: "Stylish travelers with luggage",
    description: "Modern travelers with stylish luggage"
  },
  { 
    src: "/gallery-7.png", 
    alt: "Couple sharing coffee while traveling",
    description: "Romantic coffee moment during travels"
  },
];*/

export default PhotoInfo;