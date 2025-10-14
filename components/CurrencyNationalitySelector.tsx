// CurrencyNationalitySelector.tsx
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

interface CurrencyNationalitySelectorProps {
  selectedCurrency: string;
  selectedNationality: string;
  onCurrencyChange: (currency: string) => void;
  onNationalityChange: (nationality: string) => void;
}

const CurrencyNationalitySelector = ({
  selectedCurrency,
  selectedNationality,
  onCurrencyChange,
  onNationalityChange,
}: CurrencyNationalitySelectorProps) => {
  
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
    { name: "Nigeria", flag: "NG" },
    { name: "United States", flag: "US" },
    { name: "United Kingdom", flag: "GB" },
    { name: "Canada", flag: "CA" },
    { name: "Australia", flag: "AU" },
    { name: "Germany", flag: "DE" },
    { name: "France", flag: "FR" },
    { name: "Japan", flag: "JP" },
    { name: "South Africa", flag: "ZA" },
    { name: "India", flag: "IN" },
    { name: "Brazil", flag: "BR" },
    { name: "China", flag: "CN" },
  ];

  const selectedCurrencyData = currencies.find(
    (c) => c.code === selectedCurrency
  );

  const selectedNationalityData = nationalities.find(
    (n) => n.flag === selectedNationality
  );

  return (
    <div className="">
      <h3 className="text-[#666666] mb-2 text-sm text-left">
        Select currency and pax nationality
      </h3>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Currency Dropdown */}
        <div className="relative flex-1 divide-[#333] flex gap-2 items-center border border-gray-500 divide-x rounded-lg">
          <Select
            value={selectedCurrency}
            onValueChange={onCurrencyChange}
          >
            <SelectTrigger className="w-full outline-0 text-xs border-none">
              <SelectValue placeholder="Select a currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {currencies.map((currency) => (
                  <SelectItem
                    key={currency.code}
                    className="text-xs"
                    value={currency.code}
                  >
                    {currency.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="border-l border-l-[#333] h-full text-xs min-w-16 flex items-center justify-center">
            <span className="text-[#666666] font-medium">
              {selectedCurrencyData?.code} {selectedCurrencyData?.symbol}
            </span>
          </div>
        </div>

        {/* Nationality Dropdown */}
        <div className="relative flex-1 divide-[#333] flex gap-2 items-center border border-gray-500 divide-x rounded-lg">
          <div className="p-2 min-w-16 flex items-center justify-center">
            <span className="text-1xl">{selectedNationalityData?.flag}</span>
          </div>
          <Select
            value={selectedNationality}
            onValueChange={onNationalityChange}
          >
            <SelectTrigger className="w-full border-none">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {nationalities.map((nationality) => (
                  <SelectItem key={nationality.name} value={nationality.flag}>
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