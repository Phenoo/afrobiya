"use client";
import HotelSearchForm from "@/components/hotel-search-form";
import HotelFilters from "@/components/hotel-filters";
import HotelResults from "@/components/hotel-results";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

interface FilterValues {
  roomBasis: string[];
  budgetRange: [number, number];
  starLevels: number[];
}

const HotelsPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  // Define the filter type
  const router = useRouter();
  const params = useSearchParams();
  useEffect(() => {
    setShowFilters(false);
  }, [params]);
  return (

    <div className="min-h-screen bg-white">
      <div className="bg-[#F8F9FA] border-b py-8">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <HotelSearchForm setLoading={setLoading} setResults={setResults} />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="lg:hidden mb-4">
          <Button
            onClick={() => setShowFilters(!showFilters)}
            variant="outline"
            className="flex items-center gap-2 w-full justify-center py-3"
          >
            <Filter className="h-4 w-4" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div
            className={`
            ${showFilters ? "block" : "hidden"} lg:block
            fixed lg:relative inset-0 lg:inset-auto
            z-50 lg:z-auto
            bg-white lg:bg-transparent
            w-full lg:w-72 flex-shrink-0
            overflow-y-auto lg:overflow-visible
            p-4 lg:p-0
          `}
          >
            <div className="lg:hidden flex justify-between items-center mb-4 pb-4 border-b">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button
                onClick={() => setShowFilters(false)}
                variant="ghost"
                size="sm"
                className="p-2"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <HotelFilters />
          </div>

          {showFilters && (
            <div
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setShowFilters(false)}
            />
          )}

          <div className="flex-1">
            <HotelResults loading={loading} results={results}   />
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default HotelsPage;
