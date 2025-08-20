import { Input } from "@/components/ui/input";
import { Search, ChevronDown, Star } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import { useState } from "react";
import { Checkbox } from "./ui/checkbox";

export default function HotelFilters() {
  const [budgetRange, setBudgetRange] = useState([5000, 1000000]);
  const [selectedBeds, setSelectedBeds] = useState<string[]>([]);
  const [selectedRoomBasis, setSelectedRoomBasis] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedStarLevels, setSelectedStarLevels] = useState<number[]>([]);
  const [selectedGuestRatings, setSelectedGuestRatings] = useState<number[]>(
    []
  );

  const roomBasisOptions = [
    "Any",
    "Room Only",
    "Bed and Breakfast",
    "Half Board",
    "Full Board",
    "All Inclusive",
  ];
  const starLevels = [1, 2, 3, 4, 5];

  const clearBudgetFilter = () => {
    setBudgetRange([5000, 1000000]);
  };

  const clearBedsFilter = () => {
    setSelectedBeds([]);
  };

  const clearRoomBasisFilter = () => {
    setSelectedRoomBasis([]);
  };

  const clearAmenitiesFilter = () => {
    setSelectedAmenities([]);
  };

  const clearStarLevelFilter = () => {
    setSelectedStarLevels([]);
  };

  const clearGuestRatingFilter = () => {
    setSelectedGuestRatings([]);
  };

  const handleBedsChange = (bed: string, checked: boolean) => {
    if (checked) {
      setSelectedBeds([...selectedBeds, bed]);
    } else {
      setSelectedBeds(selectedBeds.filter((b) => b !== bed));
    }
  };

  const handleRoomBasisChange = (option: string, checked: boolean) => {
    if (checked) {
      setSelectedRoomBasis([...selectedRoomBasis, option]);
    } else {
      setSelectedRoomBasis(selectedRoomBasis.filter((o) => o !== option));
    }
  };

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    if (checked) {
      setSelectedAmenities([...selectedAmenities, amenity]);
    } else {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity));
    }
  };

  const handleStarLevelChange = (level: number, checked: boolean) => {
    if (checked) {
      setSelectedStarLevels([...selectedStarLevels, level]);
    } else {
      setSelectedStarLevels(selectedStarLevels.filter((l) => l !== level));
    }
  };

  const handleGuestRatingChange = (rating: number, checked: boolean) => {
    if (checked) {
      setSelectedGuestRatings([...selectedGuestRatings, rating]);
    } else {
      setSelectedGuestRatings(selectedGuestRatings.filter((r) => r !== rating));
    }
  };
  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Search Hotels */}
      <div>
        <div className="relative">
          <Input placeholder="Search hotel" className="pl-8 rounded-3xl py-4" />
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* Budget Filter */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2 bg-[#F2F2F2] p-2">
          <h3 className="text-xs font-medium text-[#808080] uppercase tracking-widest">
            Budget (Per Night)
          </h3>
          <button
            onClick={clearBudgetFilter}
            className="rounded flex items-center justify-center"
          >
            <Image
              src="/Fundamental Button.svg"
              alt="Clear budget filter"
              width={25}
              height={25}
            />
          </button>
        </div>
        <div className="px-3">
          <Slider
            value={budgetRange}
            onValueChange={setBudgetRange}
            max={1000000}
            min={5000}
            step={1000}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>${budgetRange[0].toLocaleString()}</span>
            <span>${budgetRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Number of Beds */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2 bg-[#F2F2F2] p-2">
          <h3 className="text-xs font-medium text-[#808080] uppercase tracking-widest">
            NUMBER OF BEDS
          </h3>
          <div
            className="flex items-center justify-center cursor-pointer"
            onClick={clearBedsFilter}
          >
            <Image
              src={"/Fundamental Button.svg"}
              alt="logo"
              width={25}
              height={25}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
          {[
            { name: "1 Bed", count: 478 },
            { name: "2 Beds", count: 195 },
            { name: "3+ Beds", count: 201 },
          ].map((bed) => (
            <div key={bed.name} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id={bed.name}
                  checked={selectedBeds.includes(bed.name)}
                  onCheckedChange={(checked) =>
                    handleBedsChange(bed.name, checked as boolean)
                  }
                />
                <label htmlFor={bed.name} className="text-sm text-[#666666]">
                  {bed.name}
                </label>
              </div>
              <span className="text-sm text-gray-500">({bed.count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Room Basis */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2 bg-[#F2F2F2] p-2">
          <h3 className="text-xs font-medium text-[#808080] uppercase tracking-widest ">
            ROOM BASIS
          </h3>
          <div
            className="flex items-center justify-center cursor-pointer"
            onClick={clearRoomBasisFilter}
          >
            <Image
              src={"/Fundamental Button.svg"}
              alt="logo"
              width={25}
              height={25}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
          {roomBasisOptions.map((option) => (
            <div key={option} className="flex items-center space-x-3">
              <Checkbox
                id={option}
                checked={selectedRoomBasis.includes(option)}
                onCheckedChange={(checked) =>
                  handleRoomBasisChange(option, checked as boolean)
                }
              />
              <label htmlFor={option} className="text-sm text-[#666666]">
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2 bg-[#F2F2F2] p-2">
          <h3 className="text-xs font-medium text-[#808080] uppercase tracking-widest">
            AMENITIES
          </h3>
          <div
            className="flex items-center justify-center cursor-pointer"
            onClick={clearAmenitiesFilter}
          >
            <Image
              src={"/Fundamental Button.svg"}
              alt="logo"
              width={25}
              height={25}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
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
            <div
              key={amenity.name}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <Checkbox
                  id={amenity.name}
                  checked={selectedAmenities.includes(amenity.name)}
                  onCheckedChange={(checked) =>
                    handleAmenityChange(amenity.name, checked as boolean)
                  }
                />
                <label
                  htmlFor={amenity.name}
                  className="text-sm text-[#666666]"
                >
                  {amenity.name}
                </label>
              </div>
              <span className="text-sm text-gray-500">({amenity.count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Star Level */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2 bg-[#F2F2F2] p-2">
          <h3 className="text-xs font-medium text-[#808080] uppercase tracking-widest">
            STAR LEVEL
          </h3>
          <div
            className="flex items-center justify-center cursor-pointer"
            onClick={clearStarLevelFilter}
          >
            <Image
              src={"/Fundamental Button.svg"}
              alt="logo"
              width={25}
              height={25}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
          {starLevels.map((level) => (
            <div key={level} className="flex items-center space-x-3">
              <Checkbox
                id={`star-${level}`}
                checked={selectedStarLevels.includes(level)}
                onCheckedChange={(checked) =>
                  handleStarLevelChange(level, checked as boolean)
                }
              />
              <label
                htmlFor={`star-${level}`}
                className="flex items-center gap-1"
              >
                {Array.from({ length: level }, (_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#FC5D01] text-[#FC5D01]"
                  />
                ))}
                {Array.from({ length: 5 - level }, (_, i) => (
                  <Star key={i + level} className="w-4 h-4 text-[#FC5D01]" />
                ))}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Guest Rating */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2 bg-[#F2F2F2] p-2">
          <h3 className="text-xs font-medium text-[#808080] uppercase tracking-widest">
            GUEST RATING
          </h3>
          <div
            className="flex items-center justify-center cursor-pointer"
            onClick={clearGuestRatingFilter}
          >
            <Image
              src={"/Fundamental Button.svg"}
              alt="logo"
              width={25}
              height={25}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
          {[
            { stars: 1, count: 6 },
            { stars: 2, count: 0 },
            { stars: 3, count: 35 },
            { stars: 4, count: 49 },
            { stars: 5, count: 135 },
          ].map((rating) => (
            <div
              key={rating.stars}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <Checkbox
                  id={`rating-${rating.stars}`}
                  checked={selectedGuestRatings.includes(rating.stars)}
                  onCheckedChange={(checked) =>
                    handleGuestRatingChange(rating.stars, checked as boolean)
                  }
                />
                <label
                  htmlFor={`rating-${rating.stars}`}
                  className="flex items-center gap-1"
                >
                  {Array.from({ length: rating.stars }, (_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-orange-500 text-orange-500"
                    />
                  ))}
                  {Array.from({ length: 5 - rating.stars }, (_, i) => (
                    <Star
                      key={i + rating.stars}
                      className="w-4 h-4 text-orange-500"
                    />
                  ))}
                </label>
              </div>
              <span className="text-sm text-gray-500">({rating.count})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// export default function HotelFilters() {
//   return (
//     <div className="space-y-6">
//       {/* Search Hotels */}
//       <div>
//         <div className="relative">
//           <Input placeholder="Search hotel" className="pl-8 rounded-3xl py-4" />
//           <Search className="absolute left-2.5 top-2.5  h-4 w-4 text-gray-400" />
//         </div>
//       </div>

//       {/* Budget Filter */}
//       <div className="space-y-3">
//         <div className="flex items-center justify-between gap-2 bg-[#F2F2F2] p-2">
//           <h3 className="text-xs font-medium text-[#808080] uppercase  tracking-widest">
//             BUDGET (PER NIGHT){" "}
//           </h3>
//           <div className="flex items-center justify-center">
//             <Image
//               src={"/Fundamental Button.svg"}
//               alt="logo"
//               width={25}
//               height={25}
//             />{" "}
//           </div>
//         </div>
//         <div className="px-3">
//           <Slider
//             defaultValue={[5000, 1000000]}
//             max={1000000}
//             min={5000}
//             step={1000}
//             className="w-full"
//           />
//           <div className="flex justify-between text-sm text-[#808080] mt-2">
//             <span>$5,000</span>
//             <span>$1,000,000</span>
//           </div>
//         </div>
//       </div>

//       {/* Number of Beds */}
//       <div className="space-y-3">
//         <div className="flex items-center justify-between gap-2 bg-[#F2F2F2] p-2">
//           <h3 className="text-xs font-medium text-[#808080] uppercase  tracking-widest">
//             NUMBER OF BEDS{" "}
//           </h3>
//           <div className="flex items-center justify-center">
//             <Image
//               src={"/Fundamental Button.svg"}
//               alt="logo"
//               width={25}
//               height={25}
//             />{" "}
//           </div>
//         </div>
//         <div className="space-y-2">
//           <label className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <input type="checkbox" className="rounded" />
//               <span className="text-sm text-[#666666]">1 Bed</span>
//             </div>
//             <span className="text-sm text-[#666666]">(478)</span>
//           </label>
//           <label className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <input type="checkbox" className="rounded" />
//               <span className="text-sm text-[#666666]">2 Beds</span>
//             </div>
//             <span className="text-sm text-[#666666]">(195)</span>
//           </label>
//           <label className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <input type="checkbox" className="rounded" />
//               <span className="text-sm text-[#666666]">3+ Beds</span>
//             </div>
//             <span className="text-sm text-[#666666]">(201)</span>
//           </label>
//         </div>
//       </div>

//       {/* Room Basis */}
//       <div className="space-y-3">
//         <div className="flex items-center justify-between gap-2 bg-[#F2F2F2] p-2">
//           <h3 className="text-xs font-medium text-[#808080] uppercase  tracking-widest">
//             ROOM BASIS
//           </h3>
//           <div className="flex items-center justify-center">
//             <Image
//               src={"/Fundamental Button.svg"}
//               alt="logo"
//               width={25}
//               height={25}
//             />{" "}
//           </div>
//         </div>

//         <div className="space-y-2">
//           {[
//             "Any",
//             "Room Only",
//             "Bed and Breakfast",
//             "Half Board",
//             "Full Board",
//             "All Inclusive",
//           ].map((option) => (
//             <label key={option} className="flex items-center gap-2">
//               <input type="checkbox" className="rounded" />
//               <span className="text-sm text-[#666666]">{option}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Amenities */}
//       <div className="space-y-3">
//         <div className="flex items-center justify-between gap-2 bg-[#F2F2F2] p-2">
//           <h3 className="text-xs font-medium text-[#808080] uppercase  tracking-widest">
//             AMENTITIES
//           </h3>
//           <div className="flex items-center justify-center">
//             <Image
//               src={"/Fundamental Button.svg"}
//               alt="logo"
//               width={25}
//               height={25}
//             />{" "}
//           </div>
//         </div>
//         <div className="space-y-2">
//           {[
//             { name: "Free Internet Access", count: 644 },
//             { name: "Free Breakfast", count: 46 },
//             { name: "Free Parking", count: 636 },
//             { name: "Pets Allowed", count: 19 },
//             { name: "Swimming Pool", count: 121 },
//             { name: "Airport Shuttle", count: 233 },
//             { name: "Spa", count: 103 },
//             { name: "Restaurant", count: 0 },
//             { name: "Casino", count: 8 },
//             { name: "No Smoking Rooms/Facilities", count: 620 },
//             { name: "Accessible Rooms/Facilities", count: 181 },
//             { name: "Fitness Center", count: 218 },
//             { name: "Business Center", count: 64 },
//             { name: "All Inclusive", count: 0 },
//             { name: "Waterfront", count: 37 },
//             { name: "Adults Only", count: 47 },
//             { name: "Hot Tub/Whirlpool", count: 84 },
//           ].map((amenity) => (
//             <label
//               key={amenity.name}
//               className="flex items-center justify-between"
//             >
//               <div className="flex items-center gap-2">
//                 <input type="checkbox" className="rounded" />
//                 <span className="text-sm text-[#666666]">{amenity.name}</span>
//               </div>
//               <span className="text-sm text-[#666666]">({amenity.count})</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Star Level */}
//       <div className="space-y-3">
//         <div className="flex items-center justify-between gap-2 bg-[#F2F2F2] p-2">
//           <h3 className="text-xs font-medium text-[#808080] uppercase  tracking-widest">
//             STAR LEVEL
//           </h3>
//           <div className="flex items-center justify-center">
//             <Image
//               src={"/Fundamental Button.svg"}
//               alt="logo"
//               width={25}
//               height={25}
//             />{" "}
//           </div>
//         </div>
//         <div className="space-y-2">
//           {[1, 2, 3, 4, 5].map((stars) => (
//             <label key={stars} className="flex items-center gap-2">
//               <input type="checkbox" className="rounded" />
//               <div className="flex">
//                 {Array.from({ length: 5 }, (_, i) => (
//                   <span
//                     key={i}
//                     className={`text-lg ${
//                       i < stars ? "text-orange-400" : "text-gray-300"
//                     }`}
//                   >
//                     ★
//                   </span>
//                 ))}
//               </div>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Guest Rating */}
//       <div className="space-y-3">
//         <div className="flex items-center justify-between gap-2 bg-[#F2F2F2] p-2">
//           <h3 className="text-xs font-medium text-[#808080] uppercase  tracking-widest">
//             GUEST RATING
//           </h3>
//           <div className="flex items-center justify-center">
//             <Image
//               src={"/Fundamental Button.svg"}
//               alt="logo"
//               width={25}
//               height={25}
//             />{" "}
//           </div>
//         </div>
//         <div className="space-y-2">
//           {[
//             { stars: 1, count: 6 },
//             { stars: 2, count: 0 },
//             { stars: 3, count: 35 },
//             { stars: 4, count: 49 },
//             { stars: 5, count: 135 },
//           ].map((rating) => (
//             <label
//               key={rating.stars}
//               className="flex items-center justify-between"
//             >
//               <div className="flex items-center gap-2">
//                 <input type="checkbox" className="rounded" />
//                 <div className="flex">
//                   {Array.from({ length: 5 }, (_, i) => (
//                     <span
//                       key={i}
//                       className={`text-lg ${
//                         i < rating.stars ? "text-orange-400" : "text-gray-300"
//                       }`}
//                     >
//                       ★
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <span className="text-sm text-[#666666]">({rating.count})</span>
//             </label>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
