import { Input } from "@/components/ui/input";
import { Search, ChevronDown } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";

export default function HotelFilters() {
  return (
    <div className="space-y-6">
      {/* Search Hotels */}
      <div>
        <div className="relative">
          <Input placeholder="Search hotel" className="pl-8 rounded-3xl py-4" />
          <Search className="absolute left-2.5 top-2.5  h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* Budget Filter */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2 bg-[#F2F2F2] p-2">
          <h3 className="text-xs font-medium text-[#808080] uppercase  tracking-widest">
            BUDGET (PER NIGHT){" "}
          </h3>
          <div className="flex items-center justify-center">
            <Image
              src={"/Fundamental Button.svg"}
              alt="logo"
              width={30}
              height={30}
            />{" "}
          </div>
        </div>
        <div className="px-3">
          <Slider
            defaultValue={[5000, 1000000]}
            max={1000000}
            min={5000}
            step={1000}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-[#808080] mt-2">
            <span>$5,000</span>
            <span>$1,000,000</span>
          </div>
        </div>
      </div>

      {/* Number of Beds */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2 bg-[#F2F2F2] p-2">
          <h3 className="text-xs font-medium text-[#808080] uppercase  tracking-widest">
            NUMBER OF BEDS{" "}
          </h3>
          <div className="flex items-center justify-center">
            <Image
              src={"/Fundamental Button.svg"}
              alt="logo"
              width={30}
              height={30}
            />{" "}
          </div>
        </div>
        <div className="space-y-2">
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm text-[#666666]">1 Bed</span>
            </div>
            <span className="text-sm text-[#666666]">(478)</span>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm text-[#666666]">2 Beds</span>
            </div>
            <span className="text-sm text-[#666666]">(195)</span>
          </label>
          <label className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm text-[#666666]">3+ Beds</span>
            </div>
            <span className="text-sm text-[#666666]">(201)</span>
          </label>
        </div>
      </div>

      {/* Room Basis */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2 bg-[#F2F2F2] p-2">
          <h3 className="text-xs font-medium text-[#808080] uppercase  tracking-widest">
            ROOM BASIS
          </h3>
          <div className="flex items-center justify-center">
            <Image
              src={"/Fundamental Button.svg"}
              alt="logo"
              width={30}
              height={30}
            />{" "}
          </div>
        </div>

        <div className="space-y-2">
          {[
            "Any",
            "Room Only",
            "Bed and Breakfast",
            "Half Board",
            "Full Board",
            "All Inclusive",
          ].map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm text-[#666666]">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2 bg-[#F2F2F2] p-2">
          <h3 className="text-xs font-medium text-[#808080] uppercase  tracking-widest">
            AMENTITIES
          </h3>
          <div className="flex items-center justify-center">
            <Image
              src={"/Fundamental Button.svg"}
              alt="logo"
              width={30}
              height={30}
            />{" "}
          </div>
        </div>
        <div className="space-y-2">
          {[
            { name: "Free Internet Access", count: 644 },
            { name: "Free Breakfast", count: 46 },
            { name: "Free Parking", count: 636 },
            { name: "Pets Allowed", count: 19 },
            { name: "Swimming Pool", count: 121 },
            { name: "Airport Shuttle", count: 233 },
            { name: "Spa", count: 103 },
            { name: "Restaurant", count: 0 },
            { name: "Casino", count: 8 },
            { name: "No Smoking Rooms/Facilities", count: 620 },
            { name: "Accessible Rooms/Facilities", count: 181 },
            { name: "Fitness Center", count: 218 },
            { name: "Business Center", count: 64 },
            { name: "All Inclusive", count: 0 },
            { name: "Waterfront", count: 37 },
            { name: "Adults Only", count: 47 },
            { name: "Hot Tub/Whirlpool", count: 84 },
          ].map((amenity) => (
            <label
              key={amenity.name}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-[#666666]">{amenity.name}</span>
              </div>
              <span className="text-sm text-[#666666]">({amenity.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Star Level */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2 bg-[#F2F2F2] p-2">
          <h3 className="text-xs font-medium text-[#808080] uppercase  tracking-widest">
            STAR LEVEL
          </h3>
          <div className="flex items-center justify-center">
            <Image
              src={"/Fundamental Button.svg"}
              alt="logo"
              width={30}
              height={30}
            />{" "}
          </div>
        </div>
        <div className="space-y-2">
          {[1, 2, 3, 4, 5].map((stars) => (
            <label key={stars} className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <div className="flex">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < stars ? "text-orange-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Guest Rating */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2 bg-[#F2F2F2] p-2">
          <h3 className="text-xs font-medium text-[#808080] uppercase  tracking-widest">
            GUEST RATING
          </h3>
          <div className="flex items-center justify-center">
            <Image
              src={"/Fundamental Button.svg"}
              alt="logo"
              width={30}
              height={30}
            />{" "}
          </div>
        </div>
        <div className="space-y-2">
          {[
            { stars: 1, count: 6 },
            { stars: 2, count: 0 },
            { stars: 3, count: 35 },
            { stars: 4, count: 49 },
            { stars: 5, count: 135 },
          ].map((rating) => (
            <label
              key={rating.stars}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <div className="flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < rating.stars ? "text-orange-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-sm text-[#666666]">({rating.count})</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
