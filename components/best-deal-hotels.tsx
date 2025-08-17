import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const hotels = [
  {
    id: 1,
    name: "Fairmont Resort, Dubai, United Arab Emirates",
    location: "Dubai, UAE",
    price: 148.25,
    discount: 25,
    category: "Luxury",
    categoryColor: "bg-orange-100 text-orange-800",
    image: "/fairmont-resort-dubai.png",
    rating: 5,
  },
  {
    id: 2,
    name: "The Plaza Hotel Business Resort",
    location: "New York City, USA",
    price: 220.0,
    discount: 20,
    category: "Business",
    categoryColor: "bg-blue-100 text-blue-800",
    image: "/plaza-hotel-business.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Atlantis Paradise Island, Nassau, Bahamas",
    location: "Manchester, England",
    price: 99.25,
    discount: 28,
    category: "Family",
    categoryColor: "bg-green-100 text-green-800",
    image: "/atlantis-paradise-island.png",
    rating: 5,
  },
  {
    id: 4,
    name: "The Venetian Resort Hotel Casino, Las Vegas, USA",
    location: "Everton, England",
    price: 58.0,
    discount: 12,
    category: "Standard",
    categoryColor: "bg-yellow-100 text-yellow-800",
    image: "/venetian-resort-vegas.png",
    rating: 5,
  },
];

export function BestDealHotels() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-[#333333] mb-2">
            Best Deal Hotels
          </h2>
          <p className="text-[#808080]">Book at the ideal price!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hotels.map((hotel) => (
            <Card
              key={hotel.id}
              className=" shadow-lg hover:shadow-xl gap-0 space-x-0 rounded-3xl overflow-hidden flex-row p-0 transition-shadow"
              style={{
                backgroundImage: `url(${hotel.image || "/placeholder.svg"})`,
              }}
            >
              <div className="relative w-1/2">
                <Image
                  src={hotel.image || "/placeholder.svg"}
                  alt={hotel.name}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  -{hotel.discount}%
                </div>
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${hotel.categoryColor}`}
                >
                  {hotel.category}
                </div>
              </div>

              <div className="p-4 bg-white rounded-3xl w-1/2 flex justify-between flex-col">
                <h3 className="text-xl font-semibold text-[#333333] mb-2">
                  {hotel.name}
                </h3>

                <div className="flex justify-between gap-4">
                  <div className="flex items-center text-[#808080] mb-3">
                    <Image
                      src={"/Location.svg"}
                      alt="Location"
                      width={16}
                      height={16}
                      className="mr-1"
                    />{" "}
                    <span className="text-sm">{hotel.location}</span>
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(hotel.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-orange-400 text-orange-400"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-[#333333]">
                      ${hotel.price}
                    </span>
                    <span className="text-[#808080]">/night</span>
                  </div>
                  <Button className="bg-[#0010DC] hover:bg-[#0010DC]/90 text-white px-4 text-xs py-4 rounded-3xl">
                    Book Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
