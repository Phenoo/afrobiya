"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarIcon, Search, Star, Plus, Minus } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import Image from "next/image";
import CurrencyNationalitySelector from "./CurrencyNationalitySelector";

export default function BookingForm() {
  const [activeTab, setActiveTab] = useState("hotels");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [checkInDate, setCheckInDate] = useState<Date>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date>();

  const [selectedRoomBasis, setSelectedRoomBasis] = useState<string[]>([]);
  const [selectedStarLevels, setSelectedStarLevels] = useState<number[]>([]);

  const [refundable, setRefundable] = useState(false);
  const roomBasisOptions = [
    "Any",
    "Room Only",
    "Bed and Breakfast",
    "Half Board",
    "Full Board",
    "All Inclusive",
  ];

  const starLevels = [1, 2, 3, 4, 5];

  const calculateNights = () => {
    if (checkInDate && checkOutDate) {
      const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 0;
  };

  const clearRoomBasisFilter = () => {
    setSelectedRoomBasis([]);
  };

  const clearStarLevelFilter = () => {
    setSelectedStarLevels([]);
  };

  const handleRoomBasisChange = (option: string, checked: boolean) => {
    if (checked) {
      setSelectedRoomBasis([...selectedRoomBasis, option]);
    } else {
      setSelectedRoomBasis(selectedRoomBasis.filter((o) => o !== option));
    }
  };

  const handleStarLevelChange = (level: number, checked: boolean) => {
    if (checked) {
      setSelectedStarLevels([...selectedStarLevels, level]);
    } else {
      setSelectedStarLevels(selectedStarLevels.filter((l) => l !== level));
    }
  };

  return (
    <div className="min-h-[500px] bg-white max-w-5xl shadow-md rounded-lg w-full mx-auto p-4 overflow-hidden">
      <div className="w-full">
        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto scrollbar-hide">
          <Button
            variant={activeTab === "flights" ? "default" : "ghost"}
            className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-5 rounded-full whitespace-nowrap ${
              activeTab === "flights"
                ? "bg-[#0010DC] text-white hover:bg-[#0010DC]"
                : "text-[#0010DC] hover:text-gray-800"
            }`}
          >
            <Image
              src={"/Flight.svg"}
              alt="Flight.svg"
              width={20}
              height={20}
            />
            Flights
          </Button>
          <Button
            variant={activeTab === "hotels" ? "default" : "ghost"}
            className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-5 rounded-full whitespace-nowrap ${
              activeTab === "hotels"
                ? "bg-[#3140FF] text-white hover:bg-[#3140FF]"
                : "text-[#0010DC] hover:text-gray-800"
            }`}
            onClick={() => setActiveTab("hotels")}
          >
            <Image src={"/Hotel.svg"} alt="Hotel.svg" width={20} height={20} />
            Hotels
          </Button>
          <Button
            variant={activeTab === "vehicles" ? "default" : "ghost"}
            className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-5 rounded-full whitespace-nowrap ${
              activeTab === "vehicles"
                ? "bg-[#0010DC] text-white hover:bg-[#0010DC]"
                : "text-[#0010DC] hover:text-gray-800"
            }`}
          >
            <Image
              src={"/Vehicle.svg"}
              alt="Vehicle.svg"
              width={20}
              height={20}
            />
            Vehicles
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {/* Left Sidebar - Filters */}
          <div className="w-full lg:w-52 bg-white rounded-lg h-fit flex flex-col gap-4">
            {/* Room Basis Section */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2 bg-[#F2F2F2] p-2">
                <h3 className="text-xs font-medium text-[#808080] uppercase tracking-widest">
                  Room Basis
                </h3>
                <div
                  className="rounded flex items-center justify-center cursor-pointer"
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
                  <div key={option} className="flex items-center space-x-3">
                    <Checkbox
                      id={option}
                      checked={selectedRoomBasis.includes(option)}
                      onCheckedChange={(checked) =>
                        handleRoomBasisChange(option, checked as boolean)
                      }
                    />
                    <label htmlFor={option} className="text-sm text-[#666666]">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Star Level Section */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2 bg-[#F2F2F2] p-2">
                <h3 className="text-xs font-medium text-[#808080] uppercase tracking-widest">
                  Star Level
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
                <div className="grid grid-cols-1 gap-2">
                  {starLevels.map((level) => (
                    <div key={level} className="flex items-center space-x-3">
                      <Checkbox
                        id={`star-${level}`}
                        checked={selectedStarLevels.includes(level)}
                        onCheckedChange={(checked) =>
                          handleStarLevelChange(level, checked as boolean)
                        }
                      />
                      <label
                        htmlFor={`star-${level}`}
                        className="flex items-center gap-1"
                      >
                        {Array.from({ length: level }, (_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#FC5D01] text-[#FC5D01]"
                          />
                        ))}
                        {Array.from({ length: 5 - level }, (_, i) => (
                          <Star
                            key={i + level}
                            className="w-4 h-4 text-[#FC5D01]"
                          />
                        ))}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* More Filters Section */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2 bg-[#F2F2F2] p-2">
                <h3 className="text-xs font-medium text-[#808080] uppercase tracking-widest">
                  More Filters
                </h3>
                <div
                  className="rounded flex items-center justify-center cursor-pointer"
                  onClick={() => setRefundable(false)}
                >
                  <Image
                    src={"/Fundamental Button.svg"}
                    alt="logo"
                    width={25}
                    height={25}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="refundable"
                  checked={refundable}
                  onCheckedChange={() => setRefundable(!refundable)}
                />
                <label htmlFor="refundable" className="text-sm text-[#666666]">
                  Refundable Only
                </label>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 w-full bg-white rounded-lg">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search hotel name, city, or airport"
                className="pl-12 pr-12 py-4 sm:py-6 text-base border-gray-300 rounded-3xl"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm hidden sm:block">
                ⌘J
              </div>
            </div>

            {/* Date Selection */}
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
              <div className="flex-1">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-xs text-left font-normal py-3 px-4 h-auto border-gray-300 rounded-lg bg-transparent"
                    >
                      <CalendarIcon className="mr-2 h-5 w-5 text-gray-400" />
                      {checkInDate ? format(checkInDate, "PPP") : "Check in"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={checkInDate}
                      onSelect={(e: any) => setCheckInDate(e)}
                      disabled={(date) => date < new Date()}
                      className=""
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex items-center justify-center px-2 py-3 rounded-lg text-sm text-[#808080] order-last sm:order-none">
                {calculateNights()} Night(s)
              </div>
              <div className="flex-1">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-xs text-left font-normal py-3 px-4 h-auto border-gray-300 rounded-lg bg-transparent"
                    >
                      <CalendarIcon className="mr-2 h-5 w-5 text-gray-400" />
                      {checkOutDate ? format(checkOutDate, "PPP") : "Check out"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={checkOutDate}
                      onSelect={setCheckOutDate}
                      disabled={(date) =>
                        date < new Date() ||
                        (checkInDate && date <= checkInDate)
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="grid grid-cols-1  gap-4 mb-4">
              {/* Rooms */}
              <div>
                <div className="text-[#666666] mb-1 text-sm text-left">
                  Room (s)
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 h-8 p-0 rounded bg-[#E6E6E6]"
                    onClick={() => setRooms(Math.max(1, rooms - 1))}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <div className="bg-white px-2 py-2 h-8 items-center flex justify-center rounded w-[40px] text-center">
                    {rooms}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 h-8 p-0 rounded bg-[#E6E6E6]"
                    onClick={() => setRooms(rooms + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Adults */}
              <div>
                <div className="text-[#666666] mb-1 text-sm text-left">
                  Adult (s)
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 h-8 p-0 rounded bg-[#E6E6E6]"
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <div className="bg-white px-2 py-2 h-8 items-center flex justify-center rounded w-[40px] text-center">
                    {adults}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 h-8 p-0 rounded bg-[#E6E6E6]"
                    onClick={() => setAdults(adults + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Children */}
              <div>
                <div className="text-[#666666] mb-1 text-sm text-left">
                  Children
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 h-8 p-0 rounded bg-[#E6E6E6]"
                    onClick={() => setChildren(Math.max(0, children - 1))}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <div className="bg-white px-2 py-2 h-8 items-center flex justify-center rounded w-[40px] text-center">
                    {children}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 h-8 p-0 rounded-lg bg-[#E6E6E6]"
                    onClick={() => setChildren(children + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Currency and Nationality Selection */}
            <div className="mb-4">
              <CurrencyNationalitySelector />
            </div>

            {/* Search Button */}
            <Button className="w-full py-4 text-xs bg-[#0000FF] hover:bg-blue-700 rounded-lg">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
