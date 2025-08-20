export interface HotelAmenitiesProps {
  className?: string;
}

export default function HotelAmenities({
  className = "",
}: HotelAmenitiesProps) {
  const amenitiesData = {
    "Foods & Drinks": [
      "Packed Lunches",
      "Snack Bar",
      "Bar",
      "Poolside Bar",
      "Restaurants",
    ],
    "Room Amenities": [
      "Ironing Amenities",
      "Soundproof Rooms Available",
      "Air Conditioning",
      "Room Service",
      "Balcony/Terrace",
    ],
    "Services and Conveniences": [
      "Daily Housekeeping",
      "Designated Smoking Area",
      "Luggage Storage & Lockers",
      "Laundry Services",
    ],
    General: ["Elevator", "24-hour front desk", "Non-smoking rooms available"],
  };

  return (
    <div className={`${className}`}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(amenitiesData).map(([category, items]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-sm md:text-base font-medium text-[#4D4D4D]">
              {category}
            </h3>
            <ul className="space-y-3">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="text-[#666666] text-xs md:text-sm leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
