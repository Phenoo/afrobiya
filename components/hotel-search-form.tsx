"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/datepicker";
import { ChevronDownIcon, MapPin, Minus, Plus, Search } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar";

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

  useEffect(() => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setNights(daysDiff > 0 ? daysDiff : 0);
    }
  }, [checkIn, checkOut]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  const incrementRooms = () => setRooms((prev) => prev + 1);
  const decrementRooms = () => setRooms((prev) => (prev > 1 ? prev - 1 : 1));

  const incrementAdults = () => setAdults((prev) => prev + 1);
  const decrementAdults = () => setAdults((prev) => (prev > 1 ? prev - 1 : 1));

  const incrementChildren = () => setChildren((prev) => prev + 1);
  const decrementChildren = () =>
    setChildren((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="flex items-center gap-4 text-sm ">
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

      <div>
        <label className="block text-[#808080] mb-1">Check in</label>
        <Popover open={openIn} onOpenChange={setOpenIn}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date"
              className="w-48 justify-between font-normal"
            >
              {checkIn ? checkIn.toLocaleDateString() : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={checkIn}
              captionLayout="dropdown"
              onSelect={(date) => {
                setCheckIn(date);
                setOpenIn(false);
              }}
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>
      {nights > 0 && (
        <div className="text-center">
          <div>&nbsp;</div>
          <div className="text-[#808080] mb-1">
            {nights} Night{nights !== 1 ? "s" : ""}
          </div>
        </div>
      )}
      <div>
        <label className="block text-[#808080] mb-1">Check out</label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date"
              className="w-48 justify-between font-normal"
            >
              {checkOut ? checkOut.toLocaleDateString() : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={checkOut}
              captionLayout="dropdown"
              onSelect={(date) => {
                setCheckOut(date);
                setOpen(false);
              }}
              disabled={(date) => date < new Date() || date < checkIn!}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <label className="block text-[#808080] mb-1">Room (s)</label>
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent"
            onClick={decrementRooms}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-6 text-center">{rooms}</span>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent"
            onClick={incrementRooms}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>

      <div>
        <label className="block text-[#808080] mb-1">Adult (s)</label>
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent"
            onClick={decrementAdults}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-6 text-center">{adults}</span>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent"
            onClick={incrementAdults}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>

      <div>
        <label className="block text-[#808080] mb-1">Children</label>
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent"
            onClick={decrementChildren}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-6 text-center">{children}</span>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent"
            onClick={incrementChildren}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>

      <div>
        <label className="block text-[#808080] mb-1">Currency</label>
        <select
          className="h-10 px-3 border border-gray-300 rounded-md bg-white appearance-none pr-8"
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
  );
}
