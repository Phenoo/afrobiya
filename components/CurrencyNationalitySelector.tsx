import { useState } from "react";
import { ChevronDown } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const CurrencyNationalitySelector = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(
    "United States Dollar"
  );
  const [selectedNationality, setSelectedNationality] = useState("Nigeria");
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [nationalityOpen, setNationalityOpen] = useState(false);

  const currencies = [
    { name: "United States Dollar", code: "USD", symbol: "$" },
    { name: "Euro", code: "EUR", symbol: "€" },
    { name: "British Pound", code: "GBP", symbol: "£" },
    { name: "Japanese Yen", code: "JPY", symbol: "¥" },
    { name: "Canadian Dollar", code: "CAD", symbol: "C$" },
    { name: "Australian Dollar", code: "AUD", symbol: "A$" },
    { name: "Nigerian Naira", code: "NGN", symbol: "₦" },
    { name: "South African Rand", code: "ZAR", symbol: "R" },
  ];

  const nationalities = [
    { name: "Nigeria", flag: "🇳🇬" },
    { name: "United States", flag: "🇺🇸" },
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "France", flag: "🇫🇷" },
    { name: "Japan", flag: "🇯🇵" },
    { name: "South Africa", flag: "🇿🇦" },
    { name: "India", flag: "🇮🇳" },
    { name: "Brazil", flag: "🇧🇷" },
    { name: "China", flag: "🇨🇳" },
  ];

  const selectedCurrencyData = currencies.find(
    (c) => c.name === selectedCurrency
  );
  const selectedNationalityData = nationalities.find(
    (n) => n.name === selectedNationality
  );

  return (
    <div className="">
      <h3 className="text-[#666666] mb-2 text-sm text-left">
        Select currency and pax nationality
      </h3>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Currency Dropdown */}
        <div className="relative flex-1 flex gap-2 items-center border border-gray-500 divide-x rounded-lg">
          <Select
            onValueChange={(e) => {
              setSelectedCurrency(e);
            }}
          >
            <SelectTrigger className="w-4/5 outline-0 text-xs border-none">
              <SelectValue placeholder="Select a currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {currencies.map((currency) => (
                  <SelectItem
                    key={currency.code}
                    className="text-xs"
                    value={currency.name}
                  >
                    {currency.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="bg-white  rounded-lg p-2 text-xs  flex items-center justify-center">
            <span className="text-[#666666] font-medium">
              {selectedCurrencyData?.code} {selectedCurrencyData?.symbol}
            </span>
          </div>
        </div>

        {/* Currency Display */}

        {/* Flag Icon */}

        {/* Nationality Dropdown */}
        <div className="relative flex-1 flex gap-2 items-center border border-gray-500 divide-x rounded-lg">
          <div className="bg-white  rounded-lg p-2 min-w-16 flex items-center justify-center">
            <span className="text-2xl">{selectedNationalityData?.flag}</span>
          </div>
          <Select
            onValueChange={(e) => {
              setSelectedNationality(e);
            }}
          >
            <SelectTrigger className="w-[180px] border-none">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {nationalities.map((nationality) => (
                  <SelectItem key={nationality.name} value={nationality.name}>
                    {nationality.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default CurrencyNationalitySelector;
