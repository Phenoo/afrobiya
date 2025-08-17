import Header from "@/components/header";
import HotelSearchForm from "@/components/hotel-search-form";
import HotelFilters from "@/components/hotel-filters";
import HotelResults from "@/components/hotel-results";

export default function HotelsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#F8F9FA] border-b py-8">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <HotelSearchForm />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          <div className="w-72 flex-shrink-0">
            <HotelFilters />
          </div>
          <div className="flex-1">
            <HotelResults />
          </div>
        </div>
      </div>
    </div>
  );
}
