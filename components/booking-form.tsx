"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarIcon, Search, Star, Plus, Minus, MapPin } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import destinations from "./Destinations";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import Image from "next/image";
import CurrencyNationalitySelector from "./CurrencyNationalitySelector";
import { debounce } from "lodash";

type Room = {
  adults: number;
  children: number;
  childrenAges: number[];
};

type FormData = {
  destination: string;
  destinationCode: string;
  checkInDate: Date;
  checkOutDate: Date;
  rooms: Room[];
  roomBasis: string[];
  starLevels: number[];
  refundable: boolean;
  currency: string;
  nationality: string;
  totalRooms: number;
};

export default function BookingForm() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("hotels");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredDestinations, setFilteredDestinations] = useState<
    typeof destinations
  >([]);
  const [isSearching, setIsSearching] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      rooms: [{ adults: 1, children: 0, childrenAges: [] }],
      roomBasis: [],
      starLevels: [],
      refundable: false,
      currency: "USD",
      nationality: "NG",
      destination: "",
      destinationCode: "",
      totalRooms: 1,
    },
  });

  const [checkInDate, setCheckInDate] = useState<Date>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date>(
    new Date(Date.now() + 24 * 60 * 60 * 1000)
  );
  const [rooms, setRooms] = useState<Room[]>([
    { adults: 1, children: 0, childrenAges: [] },
  ]);
  const [selectedRoomBasis, setSelectedRoomBasis] = useState<string[]>([]);
  const [selectedStarLevels, setSelectedStarLevels] = useState<number[]>([]);
  const [refundable, setRefundable] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [nationality, setNationality] = useState("NG");

  const searchValue = watch("destination");
  const currencyValue = watch("currency");
  const nationalityValue = watch("nationality");

  // Debounced search function
  const searchDestinations = debounce(async (query: string) => {
    if (!query?.trim()) {
      setFilteredDestinations([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 300));

      const searchTerm = query.toLowerCase();
      const filtered = destinations.filter((dest) => {
        const isoCode = dest.IsoCode?.toLowerCase() || "";
        const CityId =
          dest.CityId !== undefined && dest.CityId !== null
            ? String(dest.CityId)
            : "";
        const city = dest.City?.toLowerCase() || "";
        const country = dest.Country?.toLowerCase() || "";

        return (
          isoCode.includes(searchTerm) ||
          CityId.includes(searchTerm) ||
          city.includes(searchTerm) ||
          country.includes(searchTerm)
        );
      });
      setFilteredDestinations(filtered.slice(0, 8));
    } catch (error) {
      //console.error("Error searching destinations:", error);
      setFilteredDestinations([]);
    } finally {
      setIsSearching(false);
    }
  }, 300);

  // Handle search input changes
  useEffect(() => {
    if (searchValue) {
      searchDestinations(searchValue);
    } else {
      setFilteredDestinations([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update form when rooms change
  useEffect(() => {
    setValue("rooms", rooms);
    setValue("totalRooms", rooms.length);
  }, [rooms, setValue]);

  const roomBasisOptions = [
    { code: "RO", description: "ROOM ONLY" },
    { code: "BB", description: "BED AND BREAKFAST" },
    { code: "BB2", description: "BED AND BREAKFAST UP TO 2" },
    { code: "HB", description: "HALF-BOARD" },
    { code: "FB", description: "FULL-BOARD" },
    { code: "CB", description: "CONTINENTAL BREAKFAST" },
    { code: "AIS", description: "ALL INCLUSIVE SOFT" },
    { code: "AI", description: "ALL INCLUSIVE" },
  ];

  const starLevels = [
    { id: 1, label: 1 },
    { id: 3, label: 2 },
    { id: 5, label: 3 },
    { id: 7, label: 4 },
    { id: 9, label: 5 },
  ];

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
    setValue("roomBasis", []);
  };

  const clearStarLevelFilter = () => {
    setSelectedStarLevels([]);
    setValue("starLevels", []);
  };

  const handleRoomBasisChange = (option: string, checked: boolean) => {
    let newRoomBasis;
    if (checked) {
      newRoomBasis = [...selectedRoomBasis, option];
    } else {
      newRoomBasis = selectedRoomBasis.filter((o) => o !== option);
    }
    setSelectedRoomBasis(newRoomBasis);
    setValue("roomBasis", newRoomBasis);
  };

  const handleStarLevelChange = (level: number, checked: boolean) => {
    let newStarLevels;
    if (checked) {
      newStarLevels = [...selectedStarLevels, level];
    } else {
      newStarLevels = selectedStarLevels.filter((l) => l !== level);
    }
    setSelectedStarLevels(newStarLevels);
    setValue("starLevels", newStarLevels);
  };

  const handleDestinationSelect = (destination: (typeof destinations)[0]) => {
    setValue("destination", `${destination.City}, ${destination.Country}`, {
      shouldValidate: true,
    });
    setValue("destinationCode", destination.CityId.toString(), {
      shouldValidate: true,
    });
    setShowDropdown(false);
  };

  const handleCurrencyChange = (currency: string) => {
    setCurrency(currency);
    setValue("currency", currency, { shouldValidate: true });
  };

  const handleNationalityChange = (nationality: string) => {
    setNationality(nationality);
    setValue("nationality", nationality, { shouldValidate: true });
  };

  const addRoom = () => {
    if (rooms.length < 3) {
      const newRoom: Room = {
        adults: 1,
        children: 0,
        childrenAges: [],
      };
      const newRooms = [...rooms, newRoom];
      setRooms(newRooms);
    }
  };

  const removeRoom = (index: number) => {
    if (rooms.length > 1) {
      const newRooms = rooms.filter((_, i) => i !== index);
      setRooms(newRooms);
    }
  };

  const updateRoom = (
    index: number,
    type: "adults" | "children" | "childrenAges",
    value: any
  ) => {
    setRooms((prev) => {
      const updatedRooms = [...prev];
      const room = { ...updatedRooms[index] };

      if (type === "adults") {
        room.adults = Math.max(1, value);
      } else if (type === "children") {
        // Limit children to maximum of 3
        const newChildren = Math.max(0, Math.min(3, value));
        room.children = newChildren;

        // Adjust childrenAges length
        if (newChildren > room.childrenAges.length) {
          // Add new children with default age of 1
          room.childrenAges = [
            ...room.childrenAges,
            ...Array(newChildren - room.childrenAges.length).fill(1),
          ];
        } else if (newChildren < room.childrenAges.length) {
          // Remove children from the end
          room.childrenAges = room.childrenAges.slice(0, newChildren);
        }
      } else if (type === "childrenAges") {
        room.childrenAges = value;
      }

      updatedRooms[index] = room;
      return updatedRooms;
    });
  };

  const updateChildAge = (
    roomIndex: number,
    childIndex: number,
    age: number
  ) => {
    setRooms((prev) => {
      const updatedRooms = [...prev];
      const room = { ...updatedRooms[roomIndex] };

      const newAges = [...room.childrenAges];
      newAges[childIndex] = age;
      room.childrenAges = newAges;

      updatedRooms[roomIndex] = room;
      return updatedRooms;
    });
  };

  const onSubmit = (data: FormData) => {
    //console.log("Form data:", data);

    const checkIn = data.checkInDate || new Date();
    let checkOut = data.checkOutDate;

    if (!checkOut || checkOut <= checkIn) {
      checkOut = new Date(checkIn.getTime() + 24 * 60 * 60 * 1000);
    }

    // Construct query parameters
    const params = new URLSearchParams({
      destination: data.destinationCode,
      destinationDisplay: data.destination,
      checkIn: format(checkIn, "yyyy-MM-dd"),
      checkOut: format(checkOut, "yyyy-MM-dd"),
      roomBasis: data.roomBasis.join(","),
      starLevels: data.starLevels.join(","),
      refundable: data.refundable.toString(),
      currency: data.currency,
      nationality: data.nationality,
      totalRooms: data.totalRooms.toString(),
      page: "1",
    });

    // Add room-specific parameters
    data.rooms.forEach((room, index) => {
      const roomNumber = index + 1;

      params.append(`adult${roomNumber}`, room.adults.toString());
      params.append(`children${roomNumber}`, room.children.toString());

      if (room.children > 0 && room.childrenAges.length > 0) {
        params.append(`childrenAges${roomNumber}`, room.childrenAges.join(","));
      }
    });

    // Navigate to hotels page with query parameters
    router.push(`/hotels?${params.toString()}`);
  };

  return (
    <div className="min-h-[300px] md:min-h-[500px] bg-white max-w-5xl shadow-md rounded-lg w-full mx-auto p-4 overflow-hidden">
      <div className="w-full">
        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto scrollbar-hide">
          <Button
            type="button"
            variant={activeTab === "flights" ? "default" : "ghost"}
            className={`flex items-center gap-2 text-xs md:text-sm px-4 sm:px-6 py-3 sm:py-5 rounded-full whitespace-nowrap ${
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
            className={` text-xs md:text-sm flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-5 rounded-full whitespace-nowrap ${
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
            className={` text-xs md:text-sm flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-5 rounded-full whitespace-nowrap ${
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

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            {/* Left Sidebar - Filters */}
            <div className="w-full lg:w-52 bg-white rounded-lg h-fit flex flex-col gap-4">
              {/* Room Basis Section */}
              <div className="hidden md:flex flex-col gap-3">
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
                    <div
                      key={option.code}
                      className="flex items-center space-x-3"
                    >
                      <Checkbox
                        id={option.code}
                        checked={selectedRoomBasis.includes(option.code)}
                        onCheckedChange={(checked) =>
                          handleRoomBasisChange(option.code, checked as boolean)
                        }
                      />
                      <label
                        htmlFor={option.code}
                        className="text-sm text-[#666666]"
                      >
                        {option.description}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Star Level Section */}
              <div className="hidden md:flex flex-col gap-3">
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
                      <div
                        key={level.id}
                        className="flex items-center space-x-3"
                      >
                        <Checkbox
                          id={`${level.id}`}
                          checked={selectedStarLevels.includes(level.id)}
                          onCheckedChange={(checked) =>
                            handleStarLevelChange(level.id, checked as boolean)
                          }
                        />
                        <label
                          htmlFor={`${level.id}`}
                          className="flex items-center gap-1"
                        >
                          {Array.from({ length: level.label }, (_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-[#FC5D01] text-[#FC5D01]"
                            />
                          ))}
                          {Array.from({ length: 5 - level.label }, (_, i) => (
                            <Star
                              key={i + level.label}
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
              <div className="hidden md:flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2 bg-[#F2F2F2] p-2">
                  <h3 className="text-xs font-medium text-[#808080] uppercase tracking-widest">
                    More Filters
                  </h3>
                  <div
                    className="rounded flex items-center justify-center cursor-pointer"
                    onClick={() => {
                      setRefundable(false);
                      setValue("refundable", false);
                    }}
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
                    onCheckedChange={(checked) => {
                      setRefundable(checked as boolean);
                      setValue("refundable", checked as boolean);
                    }}
                  />
                  <label
                    htmlFor="refundable"
                    className="text-sm text-[#666666]"
                  >
                    Refundable Only
                  </label>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 w-full bg-white rounded-lg">
              {/* Search Bar with Enhanced Dropdown */}
              <div className="relative mb-3" ref={dropdownRef}>
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  value={watch("destination")}
                  placeholder="Search hotel name, city, or airport"
                  className="pl-12 pr-12 py-4 sm:py-6 text-base border-gray-300 rounded-3xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  autoComplete="off"
                  onFocus={() => setShowDropdown(true)}
                  onChange={(e) => {
                    setValue("destination", e.target.value);
                    setValue("destinationCode", "");
                    if (e.target.value) {
                      setShowDropdown(true);
                    }
                  }}
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm hidden sm:block">
                  ⌘J
                </div>

                {/* Hidden inputs for form values */}
                <input type="hidden" {...register("destinationCode")} />
                <input type="hidden" {...register("totalRooms")} />

                {/* Enhanced Compact Dropdown */}
                {showDropdown && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-20 mt-1 overflow-hidden">
                    {isSearching ? (
                      <div className="px-4 py-3 text-sm text-gray-500 flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
                        Searching destinations...
                      </div>
                    ) : filteredDestinations.length > 0 ? (
                      <div className="max-h-80 overflow-y-auto">
                        {filteredDestinations.map((destination) => (
                          <div
                            key={destination.CityId}
                            className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-150"
                            onClick={() => handleDestinationSelect(destination)}
                          >
                            <div className="flex items-center gap-3">
                              <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
                              <div className="text-sm font-medium text-gray-900">
                                {destination.City !== null &&
                                  destination?.City.toUpperCase()}{" "}
                                {destination.Country.toUpperCase()} -{" "}
                                {destination.IsoCode}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : searchValue ? (
                      <div className="px-4 py-4 text-center text-gray-500">
                        <MapPin className="w-5 h-5 mx-auto mb-1 text-gray-300" />
                        <p className="text-sm">No destinations found</p>
                        <p className="text-xs mt-1">Try different keywords</p>
                      </div>
                    ) : (
                      <div className="px-4 py-4 text-center text-gray-500">
                        <Search className="w-5 h-5 mx-auto mb-1 text-gray-300" />
                        <p className="text-sm">
                          Start typing to search destinations
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
              {errors.destinationCode && (
                <div className="text-sm text-red-500 mb-2">
                  {errors.destinationCode.message}
                </div>
              )}

              {/* Date Selection */}
              <div className="flex flex-col sm:flex-row gap-2 mb-4">
                <div className="flex-1">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full justify-start text-xs text-left font-normal py-3 px-4 h-auto border-gray-300 rounded-lg bg-transparent hover:bg-gray-50"
                      >
                        <CalendarIcon className="mr-2 h-5 w-5 text-gray-400" />
                        {checkInDate ? format(checkInDate, "PPP") : "Check in"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={checkInDate}
                        onSelect={(date) => {
                          setCheckInDate(date as Date);
                          setValue("checkInDate", date as Date);
                        }}
                        disabled={(date) => date < new Date()}
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
                        type="button"
                        className="w-full justify-start text-xs text-left font-normal py-3 px-4 h-auto border-gray-300 rounded-lg bg-transparent hover:bg-gray-50"
                      >
                        <CalendarIcon className="mr-2 h-5 w-5 text-gray-400" />
                        {checkOutDate
                          ? format(checkOutDate, "PPP")
                          : "Check out"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={checkOutDate}
                        onSelect={(date) => {
                          setCheckOutDate(date as Date);
                          setValue("checkOutDate", date as Date);
                        }}
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

              {/* Rooms Configuration */}
              <div className="block space-y-4 mb-4">
                {rooms.map((room, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 p-4 rounded-lg hover:border-gray-300 transition-colors"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-sm font-medium text-gray-700">
                        Room {index + 1}
                      </h4>
                      {rooms.length > 1 && (
                        <Button
                          variant="ghost"
                          type="button"
                          size="sm"
                          onClick={() => removeRoom(index)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          Remove
                        </Button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <div className="text-[#666666] mb-2 text-sm text-left">
                          Adults
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            type="button"
                            size="sm"
                            className="flex-1 h-8 p-0 rounded bg-[#E6E6E6] hover:bg-gray-200"
                            onClick={() =>
                              updateRoom(index, "adults", room.adults - 1)
                            }
                            disabled={room.adults <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <div className="bg-white px-2 py-2 h-8 items-center flex justify-center rounded w-[40px] text-center border">
                            {room.adults}
                          </div>
                          <Button
                            variant="outline"
                            type="button"
                            size="sm"
                            className="flex-1 h-8 p-0 rounded bg-[#E6E6E6] hover:bg-gray-200"
                            onClick={() =>
                              updateRoom(index, "adults", room.adults + 1)
                            }
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div>
                        <div className="text-[#666666] mb-2 text-sm text-left flex justify-between">
                          <span>Children</span>
                          {room.children > 0 && (
                            <span className="text-xs text-gray-500">
                              Max: 3
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            type="button"
                            size="sm"
                            className="flex-1 h-8 p-0 rounded bg-[#E6E6E6] hover:bg-gray-200"
                            onClick={() =>
                              updateRoom(index, "children", room.children - 1)
                            }
                            disabled={room.children <= 0}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <div className="bg-white px-2 py-2 h-8 items-center flex justify-center rounded w-[40px] text-center border">
                            {room.children}
                          </div>
                          <Button
                            variant="outline"
                            type="button"
                            size="sm"
                            className="flex-1 h-8 p-0 rounded bg-[#E6E6E6] hover:bg-gray-200"
                            onClick={() =>
                              updateRoom(index, "children", room.children + 1)
                            }
                            disabled={room.children >= 3}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {room.children > 0 && (
                      <div className="mt-4 space-y-3">
                        <div className="text-[#666666] text-sm font-medium">
                          Children Ages:
                        </div>
                        {room.childrenAges.map((age, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <span className="text-sm text-[#666666] min-w-20">
                              Child {i + 1}:
                            </span>
                            <Select
                              value={age.toString()}
                              onValueChange={(val) => {
                                updateChildAge(index, i, parseInt(val));
                              }}
                            >
                              <SelectTrigger className="w-full text-black">
                                <SelectValue placeholder="Select age" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Age</SelectLabel>
                                  {Array.from({ length: 17 }, (_, n) => (
                                    <SelectItem
                                      key={n}
                                      value={(n + 1).toString()}
                                    >
                                      {n + 1} years old
                                    </SelectItem>
                                  ))}
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <Button
                  type="button"
                  variant="outline"
                  className="w-full mt-2 border-dashed hover:border-solid"
                  onClick={addRoom}
                  disabled={rooms.length >= 3}
                >
                  + Add Room
                </Button>
              </div>

              {/* Currency and Nationality Selection */}
              <div className=" mb-6">
                <CurrencyNationalitySelector
                  selectedCurrency={currency}
                  selectedNationality={nationality}
                  onCurrencyChange={handleCurrencyChange}
                  onNationalityChange={handleNationalityChange}
                />
              </div>

              {/* Search Button */}
              <Button
                type="submit"
                className="w-full py-4 text-base font-medium bg-[#0000FF] hover:bg-blue-700 rounded-lg transition-colors duration-200"
              >
                Search Hotels
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
