import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import { Checkbox } from "./ui/checkbox";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

interface HotelFiltersProps {
  onFiltersApply?: () => void; // Optional callback for parent component
}

export default function HotelFilters({ onFiltersApply }: HotelFiltersProps) {

  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Initialize state from URL params or defaults
  const [budgetRange, setBudgetRange] = useState<[number, number]>([
    Number(searchParams.get('minPrice')) || 50,
    Number(searchParams.get('maxPrice')) || 1000000
  ]);
  
  const [selectedRoomBasis, setSelectedRoomBasis] = useState<string[]>(
    searchParams.get('roomBasis')?.split(',') || []
  );
  
  const [selectedStarLevels, setSelectedStarLevels] = useState<number[]>(
    searchParams.get('starLevels')?.split(',').map(Number) || []
  );

  const roomBasisOptions = [
    { code: "RO", description: "ROOM ONLY" },
    { code: "BB", description: "BED AND BREAKFAST" },
    { code: "BB2", description: "BED AND BREAKFAST UP TO 2" },
    { code: "HB", description: "HALF-BOARD" },
    { code: "FB", description: "FULL-BOARD" },
    { code: "CB", description: "CONTINENTAL BREAKFAST" },
    { code: "AIS", description: "ALL INCLUSIVE SOFT" },
    { code: "AI", description: "ALL INCLUSIVE" },
  ];

  const starLevels = [
    { id: 1, label: 1, count: 6 },
    { id: 2, label: 2, count: 0 },
    { id: 3, label: 3, count: 35 },
    { id: 4, label: 4, count: 49 },
    { id: 5, label: 5, count: 135 }
  ];

  const handleBudgetChange = (value: number[]) => {
    setBudgetRange(value as [number, number]);
  };

  const clearBudgetFilter = () => {
    setBudgetRange([50, 1000000]);
  };

  const handleRoomBasisChange = (option: string, checked: boolean) => {
    const newRoomBasis = checked
      ? [...selectedRoomBasis, option]
      : selectedRoomBasis.filter((o) => o !== option);
    
    setSelectedRoomBasis(newRoomBasis);
  };

  const clearRoomBasisFilter = () => {
    setSelectedRoomBasis([]);
  };

  const handleStarLevelChange = (level: number, checked: boolean) => {
    const newStarLevels = checked
      ? [...selectedStarLevels, level]
      : selectedStarLevels.filter((l) => l !== level);
    
    setSelectedStarLevels(newStarLevels);
  };

  const clearStarLevelFilter = () => {
    setSelectedStarLevels([]);
  };

  const handleApplyFilters = () => {
    // Create new URLSearchParams with existing search params
    const newParams = new URLSearchParams(searchParams.toString());
    
    // Update roomBasis parameter (comma-separated)
    if (selectedRoomBasis.length > 0) {
      newParams.set('roomBasis', selectedRoomBasis.join(','));
    } else {
      newParams.delete('roomBasis');
    }
    
    // Update starLevels parameter (comma-separated)
    if (selectedStarLevels.length > 0) {
      newParams.set('starLevels', selectedStarLevels.join(','));
    } else {
      newParams.delete('starLevels');
    }
    
    // Update price range parameters
    newParams.set('minPrice', budgetRange[0].toString());
    newParams.set('maxPrice', budgetRange[1].toString());
    
    // Update URL without page reload
    router.push(`?${newParams.toString()}`, { scroll: false });
    
    // Call parent callback if provided
    if (onFiltersApply) {
      onFiltersApply();
    }
    
    console.log('Applied filters:', {
      roomBasis: selectedRoomBasis,
      starLevels: selectedStarLevels,
      minPrice: budgetRange[0],
      maxPrice: budgetRange[1]
    });
  };

  const handleClearAllFilters = () => {
    // Clear all local state
    setBudgetRange([50, 1000000]);
    setSelectedRoomBasis([]);
    setSelectedStarLevels([]);
    
    // Create new URLSearchParams without filter parameters
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete('roomBasis');
    newParams.delete('starLevels');
    newParams.delete('minPrice');
    newParams.delete('maxPrice');
    
    // Update URL
    router.push(`?${newParams.toString()}`, { scroll: false });
    
    // Call parent callback if provided
    if (onFiltersApply) {
      onFiltersApply();
    }
  };

  return (
    <div className="space-y-4 lg:space-y-6">
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
            onValueChange={handleBudgetChange}
            max={1000000}
            min={50}
            step={1000}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>${budgetRange[0].toLocaleString()}</span>
            <span>${budgetRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Room Basis */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2 bg-[#F2F2F2] p-2">
          <h3 className="text-xs font-medium text-[#808080] uppercase tracking-widest">
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
            <div key={option.code} className="flex items-center space-x-3">
              <Checkbox
                id={option.code}
                checked={selectedRoomBasis.includes(option.code)}
                onCheckedChange={(checked) =>
                  handleRoomBasisChange(option.code, checked as boolean)
                }
              />
              <label htmlFor={option.code} className="text-sm text-[#666666]">
                {option.description}
              </label>
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
            <div key={level.id} className="flex items-center space-x-3">
              <Checkbox
                id={`star-${level.id}`}
                checked={selectedStarLevels.includes(level.id)}
                onCheckedChange={(checked) =>
                  handleStarLevelChange(level.id, checked as boolean)
                }
              />
              <label
                htmlFor={`star-${level.id}`}
                className="flex items-center gap-1"
              >
                {Array.from({ length: level.label }, (_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#FC5D01] text-[#FC5D01]"
                  />
                ))}
                {Array.from({ length: 5 - level.label }, (_, i) => (
                  <Star key={i + level.label} className="w-4 h-4 text-[#FC5D01]" />
                ))}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-4">
        <Button 
          className="h-10 bg-blue-600 hover:bg-blue-700 w-full" 
          onClick={handleApplyFilters}
        >
          Apply Filters
        </Button>
        <Button 
          variant="outline" 
          className="h-10 w-full" 
          onClick={handleClearAllFilters}
        >
          Clear All Filters
        </Button>
      </div>
    </div>
  );
}