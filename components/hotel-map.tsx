import { Building2, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function HotelMap({ name }: { name: string }) {
  return (
    <div className="space-y-6">
      {/* Map Header */}
      <div className="flex items-center gap-4">
        <div>
          <Building2 className="h-4 w-4" />
        </div>
        <div>
          <h3 className="text-base  text-[#666] mb-0">{name}</h3>
          <div className="flex items-center gap-2 text-[#666]">
            <span className="text-sm">
              3, Maroko Road, Lekki - Epe Express Way - Eti Osa, Lagos - Lagos
            </span>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <Card className="p-0 overflow-hidden">
        <div className="relative h-96 bg-gray-100">
          {/* Placeholder for actual map */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-blue-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-[#333333] mb-2">
                The Lagos Continental Hotel
              </h4>
              <p className="text-gray-600">
                Interactive map would be displayed here
              </p>
              <Button className="mt-4 bg-transparent" variant="outline">
                View on Google Maps
              </Button>
            </div>
          </div>

          {/* Map Controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <Button size="sm" variant="outline" className="bg-white">
              +
            </Button>
            <Button size="sm" variant="outline" className="bg-white">
              -
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
