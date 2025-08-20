import { useState, useEffect, FC } from "react";
import { ChevronDownIcon, Minus, Plus, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

interface CounterProps {
  label: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter: FC<CounterProps> = ({
  label,
  value,
  onIncrement,
  onDecrement,
}) => (
  <div>
    <label className="block text-[#808080] mb-1">{label}</label>
    <div className="flex items-center gap-2 justify-center">
      <Button
        variant="outline"
        size="sm"
        className="h-8 w-8 p-0 bg-transparent"
        onClick={onDecrement}
      >
        <Minus className="h-3 w-3" />
      </Button>
      <span className="w-8 text-center">{value}</span>
      <Button
        variant="outline"
        size="sm"
        className="h-8 w-8 p-0 bg-transparent"
        onClick={onIncrement}
      >
        <Plus className="h-3 w-3" />
      </Button>
    </div>
  </div>
);

export default function HotelSearchForm() {
  const [city, setCity] = useState("Lagos, Nigeria");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [currency, setCurrency] = useState("USD $");
  const [nights, setNights] = useState(5);

  const [open, setOpen] = useState(false);
  const [openIn, setOpenIn] = useState(false);
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      if (checkOutDate > checkInDate) {
        const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        setNights(daysDiff);
      } else {
        setNights(0);
      }
    }
  }, [checkIn, checkOut]);

  const formatDate = (date: Date | undefined) => {
    if (!date) return "Select date";
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
    });
  };

  const incrementRooms = () => setRooms((prev) => prev + 1);
  const decrementRooms = () => setRooms((prev) => (prev > 1 ? prev - 1 : 1));

  const incrementAdults = () => setAdults((prev) => prev + 1);
  const decrementAdults = () => setAdults((prev) => (prev > 1 ? prev - 1 : 1));

  const incrementChildren = () => setChildren((prev) => prev + 1);
  const decrementChildren = () =>
    setChildren((prev) => (prev > 0 ? prev - 1 : 0));

  const totalGuests = adults + children;

  const renderFullForm = (isMobile = false) => (
    <div
      className={
        isMobile ? "flex flex-col gap-4 p-4" : "flex items-center gap-4 text-sm"
      }
    >
      <div className="flex-1">
        <label className="block text-[#808080] mb-1">City</label>
        <div className="relative">
          <Input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="pr-8 h-10"
            placeholder="Enter city or hotel name"
          />
          <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-[#666666]" />
        </div>
      </div>

      <div
        className={`flex items-center ${isMobile ? "w-full gap-2" : "gap-4"}`}
      >
        <div className={isMobile ? "flex-1" : ""}>
          <label className="block text-[#808080] mb-1">Check in</label>
          <Popover open={openIn} onOpenChange={setOpenIn}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`w-full justify-between font-normal ${
                  !isMobile && "w-48"
                }`}
              >
                {checkIn ? checkIn.toLocaleDateString() : "Select date"}
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={(date) => {
                  setCheckIn(date);
                  setOpenIn(false);
                }}
                disabled={(date) =>
                  date < new Date(new Date().setHours(0, 0, 0, 0))
                }
              />
            </PopoverContent>
          </Popover>
        </div>

        {nights > 0 && !isMobile && (
          <div className="text-center self-end pb-2">
            <div className="text-[#808080]">
              {nights} Night{nights !== 1 ? "s" : ""}
            </div>
          </div>
        )}

        <div className={isMobile ? "flex-1" : ""}>
          <label className="block text-[#808080] mb-1">Check out</label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`w-full justify-between font-normal ${
                  !isMobile && "w-48"
                }`}
              >
                {checkOut ? checkOut.toLocaleDateString() : "Select date"}
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={(date) => {
                  setCheckOut(date);
                  setOpen(false);
                }}
                disabled={(date) => !checkIn || date <= checkIn}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className={isMobile ? "grid grid-cols-2 gap-4" : "contents"}>
        <Counter
          label="Room(s)"
          value={rooms}
          onIncrement={incrementRooms}
          onDecrement={decrementRooms}
        />
        <Counter
          label="Adult(s)"
          value={adults}
          onIncrement={incrementAdults}
          onDecrement={decrementAdults}
        />
        <Counter
          label="Children"
          value={children}
          onIncrement={incrementChildren}
          onDecrement={decrementChildren}
        />

        <div>
          <label className="block text-[#808080] mb-1">Currency</label>
          <select
            className="h-10 px-3 border border-gray-300 rounded-md bg-white appearance-none pr-8 w-full"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD $">USD $</option>
            <option value="EUR €">EUR €</option>
            <option value="GBP £">GBP £</option>
            <option value="NGN ₦">NGN ₦</option>
            <option value="CAD $">CAD $</option>
          </select>
        </div>
      </div>

      {isMobile && (
        <Button
          size="lg"
          className="w-full mt-4"
          onClick={() => setIsExpanded(false)}
        >
          Search Hotels
        </Button>
      )}
    </div>
  );

  return (
    <>
      <div className="md:hidden">
        <Button
          variant="outline"
          className="flex items-center justify-between bg-transparent rounded-3xl w-full h-12 px-4 text-left"
          onClick={() => setIsExpanded(true)}
        >
          <div className="flex items-center gap-3">
            <Search className="h-5 w-5 text-gray-600" />
            <div>
              <p className="font-semibold">{city}</p>
              <p className="text-xs text-gray-500">
                {formatDate(checkIn)} - {formatDate(checkOut)} • {totalGuests}{" "}
                guest{totalGuests !== 1 && "s"}
              </p>
            </div>
          </div>
        </Button>
      </div>

      <div className="hidden md:flex">{renderFullForm(false)}</div>

      {isExpanded && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Edit your search</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsExpanded(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          {renderFullForm(true)}
        </div>
      )}
    </>
  );
}
