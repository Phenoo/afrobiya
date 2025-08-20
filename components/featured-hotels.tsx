import { Play, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function FeaturedHotels() {
  const smallHotels = [
    {
      name: "Wynn Las Vegas",
      location: "Las Vegas, USA",
      image: "/wynn-las-vegas.png",
      rating: 5,
    },
    {
      name: "The Burj Al Arab",
      location: "Ibadan, Nigeria",
      image: "/burj-al-arab.png",
      rating: 5,
    },
    {
      name: "MGM Grand",
      location: "Las Vegas, USA",
      image: "/mgm-grand.png",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="">
          <h2 className="text-2xl font-bold text-[#333333] mb-2">
            Picked by Aforliyah
          </h2>
          <p className="text-[#808080] textsm">
            Quality as judged by Aforliyah
          </p>
        </div>

        <div className="w-full">
          <div className="flex flex-row  items-center relative">
            {/* Left side - Small hotel cards */}
            <div className="space-y-4 bg-[#D7DAFF] py-12  w-2/3 rounded-3xl p-8">
              {smallHotels.map((hotel, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 backdrop-blur-sm rounded-2xl"
                >
                  <div className="relative">
                    <img
                      src={hotel.image || "/placeholder.svg"}
                      alt={hotel.name}
                      className="w-32 h-32 rounded-3xl object-cover"
                    />
                    <Button
                      size="sm"
                      className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-white/90 hover:bg-white text-black p-0"
                    >
                      <Play className="w-4 h-4 fill-current" />
                    </Button>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#333333] mb-1 text-2xl">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-[#808080] mb-2">
                      <Image
                        src={"/Location.svg"}
                        alt="Location"
                        width={16}
                        height={16}
                      />
                      {hotel.location}
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(hotel.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-black text-black"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right side - Featured hotel */}
            <div className="absolute right-16 h-[400px] w-[600px]">
              <div className="relative rounded-2xl h-full overflow-hidden w-full">
                <img
                  src="/venetian-palazzo-featured.png"
                  alt="The Venetian and The Palazzo"
                  className=" h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <Button
                  size="lg"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/90 hover:bg-white text-black p-0"
                >
                  <Play className="w-6 h-6 fill-current" />
                </Button>
                <div className="absolute bottom-6 flex flex-col items-center justify-center w-full left-6 text-white">
                  <h2 className="text-2xl font-bold mb-2 text-center">
                    The Venetian and The Palazzo - <br /> Las Vegas, USA
                  </h2>
                  <div className="flex items-center gap-1 text-sm mb-2">
                    <Image
                      src={"/Location.svg"}
                      alt="Location"
                      width={16}
                      height={16}
                    />
                    Lagos, Nigeria
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-white text-white" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
