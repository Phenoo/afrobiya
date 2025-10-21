"use client";
import HotelSearchForm from "@/components/hotel-search-form";
import HotelFilters from "@/components/hotel-filters";
import HotelResults from "@/components/hotel-results";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// Create a separate component that uses useSearchParams
function HotelsContent() {
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);

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
            <HotelFilters onFiltersApply={() => setShowFilters(false)} />

            <Sheet
              open={showFilters}
              defaultOpen={showFilters}
              onOpenChange={() => setShowFilters(false)}
            >
              <SheetContent className="md:w-full w-full p-2">
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>
                <HotelFilters onFiltersApply={() => setShowFilters(false)} />
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex-1">
            <HotelResults loading={loading} results={results} />
          </div>
        </div>
      </div>
    </div>
  );
}

const HotelsPage = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading hotels...</p>
          </div>
        </div>
      }
    >
      <HotelsContent />
    </Suspense>
  );
};

export default HotelsPage;
