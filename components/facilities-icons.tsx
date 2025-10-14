// facilities-icons.tsx
import {
  FaClock,
  FaDumbbell,
  FaSnowflake,
  FaThermometerHalf,
  FaWater,
  FaBullseye,
  FaTableTennis,
  FaHome,
  FaShip,
  FaCocktail,
  FaBasketballBall,
  FaBath,
  FaVolleyballBall,
  FaBicycle,
  FaTshirt,
  FaMoneyBillAlt,
  FaComments,
  FaExchangeAlt,
  FaDharmachakra,
  FaPhone,
  FaMask,
  FaBed,
  FaMusic,
  FaSprayCan,
  FaBlender,
  FaCar,
  FaGolfBall,
  FaCut,
  FaTint,
  FaHorse,
  FaShieldAlt,
  FaSwimmer,
  FaWifi,
  FaHotTub,
  FaSkiing,
  FaChild,
  FaCrown,
  FaUtensils,
  FaStethoscope,
  FaNewspaper,
  FaGlassMartini,
  FaUmbrellaBeach,
  FaGamepad,
  FaBaby,
  FaUtensilSpoon,
  FaSmokingBan,
  FaSmoking,
  FaTruck,
  FaTv,
  FaTree,
  FaShoppingCart,
  FaStar,
  FaSun,
  FaCoffee,
  FaTheaterMasks,
  FaBorderAll,
  FaDesktop,
  FaWheelchair,
  FaWind,
  FaShower,
  FaConciergeBell,
  FaCookieBite,
  FaIceCream,
  FaMountain,
  FaHiking,
  FaRunning,
  FaPuzzlePiece,
  FaBookReader,
  FaLaptop,
  FaKey,
  FaRecycle,
  FaUserCheck,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaExclamationTriangle,
  FaQuestionCircle
} from 'react-icons/fa';
import { FaRadio, FaSailboat } from "react-icons/fa6";
import { IconType } from 'react-icons';

// Facility to icon mapping
export const facilityIcons: Record<string, IconType> = {
  // 24-hour services
  "24-hour check-in": FaClock,
  "24-hour reception": FaClock,
  
  // Sports & Activities
  "Aerobics": FaDumbbell,
  "Aqua aerobics": FaWater,
  "Archery": FaBullseye,
  "Badminton": FaTableTennis,
  "Basketball": FaBasketballBall,
  "Beach Volleyball": FaVolleyballBall,
  "Billiards/Snooker": FaGamepad,
  "Bocce": FaBullseye,
  "Bowling": FaGamepad,
  "Canoe": FaShip,
  "Cycling/Mountain Biking": FaBicycle,
  "Darts": FaDharmachakra,
  "Diving": FaMask,
  "Golf": FaGolfBall,
  "Horse Riding": FaHorse,
  "Jet Skiing": FaShip,
  "Massage": FaSpa,
  "Minigolf": FaGolfBall,
  "Pedal Boating": FaShip,
  "Sailing": FaSailboat,
  "Speed Boating": FaShip,
  "Squash": FaTableTennis,
  "Surfing": FaWater,
  "Table Tennis": FaTableTennis,
  "Tennis": FaTableTennis,
  "Water Skiing": FaShip,
  "Windsurfing": FaWind,
  
  // Accommodation Features
  "Air conditioning": FaSnowflake,
  "Air conditioning (centrally regulated)": FaSnowflake,
  "Air conditioning (individually regulated)": FaThermometerHalf,
  "Balcony/Terrace": FaHome,
  "Bathroom": FaBath,
  "Bathtub": FaBath,
  "Bidet": FaBath,
  "Carpeting": FaBorderAll,
  "Central Heating": FaThermometerHalf,
  "Direct dial telephone": FaPhone,
  "Double Bed": FaBed,
  "Fridge": FaBlender,
  "Hairdryer": FaCut,
  "Heating (individually regulated)": FaThermometerHalf,
  "Hotel Safe": FaShieldAlt,
  "King-size Bed": FaCrown,
  "Kitchenette": FaUtensils,
  "Microwave": FaBlender,
  "Minibar": FaCocktail,
  "Radio": FaRadio,
  "Safe": FaShieldAlt,
  "Satellite/cable TV": FaTv,
  "Shower": FaShower,
  "Stereo": FaRadio,
  "Tea/coffee maker": FaCoffee,
  "Tiling": FaBorderAll,
  "TV": FaTv,
  "Washing Machine": FaTshirt,
  
  // Pools & Spa
  "Children's Pool": FaWater,
  "Heated Pool": FaTint,
  "Indoor Pool": FaSwimmer,
  "Jacuzzi": FaHotTub,
  "Outdoor Pool": FaWater,
  "Saltwater Pool": FaWater,
  "Several Pools": FaWater,
  "Swimming Pool": FaWater,
  "Sauna": FaThermometerHalf,
  "Steam bath": FaThermometerHalf,
  "Tanning Studio/Solarium": FaSun,
  "Special spa package": FaStar,
  
  // Services & Facilities
  "Bar(s)": FaCocktail,
  "Bicycle Cellar": FaBicycle,
  "Bicycle Hire": FaBicycle,
  "Café": FaCoffee,
  "Car Park": FaCar,
  "Casino": FaMoneyBillAlt,
  "Children's Entertainment": FaChild,
  "Cloakroom": FaTshirt,
  "Conference Room": FaComments,
  "Currency Exchange": FaExchangeAlt,
  "Entertainment Programme": FaMusic,
  "Final Cleaning": FaSprayCan,
  "Foyer": FaHome,
  "Games room": FaGamepad,
  "Garage": FaCar,
  "Gym": FaDumbbell,
  "Hairdresser": FaCut,
  "Internet access": FaWifi,
  "Kids Club": FaChild,
  "Laundry Facilities": FaTshirt,
  "Laundry Service": FaTshirt,
  "Lifts": FaArrowUp, // Note: Using alternative
  "Lobby": FaHome,
  "Lounge": FaHome,
  "Medical Assistance": FaStethoscope,
  "Mobile Phone Network": FaPhone,
  "Newspaper kiosk": FaNewspaper,
  "Nightclub": FaGlassMartini,
  "Parasols": FaUmbrellaBeach,
  "Playground": FaChild,
  "Pool bar": FaCocktail,
  "Pub(s)": FaBeer,
  "Restaurant(s)": FaUtensils,
  "Restaurant(s) with air conditioning": FaUtensilSpoon,
  "Restaurant(s) with high-chairs": FaBaby,
  "Restaurant(s) with non-smoking area": FaSmokingBan,
  "Restaurant(s) with smoking area": FaSmoking,
  "Room Service": FaTruck,
  "Shops": FaShoppingCart,
  "Small supermarket": FaShoppingCart,
  "Sun loungers": FaSun,
  "Sun terrace": FaHome,
  "Theatre": FaTheaterMasks,
  "TV Room": FaDesktop,
  "Wheelchair access": FaWheelchair,
  "WLAN access": FaWifi,
  
  // Fallbacks for any unmapped facilities
  "Banana Boat": FaShip,
  "Catamaran": FaSailboat,
};

// Note: Some FontAwesome icons might need specific imports
// For icons not available in FA5/6, we'll use alternatives
import { 
  FaSpa, 
  FaBeer, 
  FaArrowUp,
  FaBan,
  FaCheck 
} from 'react-icons/fa';

// Add the missing icons to our mapping
facilityIcons["Massage"] = FaSpa;
facilityIcons["Pub(s)"] = FaBeer;
facilityIcons["Lifts"] = FaArrowUp;
facilityIcons["Restaurant(s) with non-smoking area"] = FaBan;
facilityIcons["Restaurant(s) with smoking area"] = FaCheck;

// Main function to get icon for facility
export function getFacilityIcon(facilityName: string): IconType {
  // Exact match
  if (facilityIcons[facilityName]) {
    return facilityIcons[facilityName];
  }
  
  // Case-insensitive match
  const lowerCaseName = facilityName.toLowerCase();
  const matchedKey = Object.keys(facilityIcons).find(key => 
    key.toLowerCase() === lowerCaseName
  );
  
  if (matchedKey) {
    return facilityIcons[matchedKey];
  }
  
  // Partial matching for similar facilities
  if (lowerCaseName.includes('pool')) return FaWater;
  if (lowerCaseName.includes('sport') || lowerCaseName.includes('fitness') || lowerCaseName.includes('gym')) return FaDumbbell;
  if (lowerCaseName.includes('food') || lowerCaseName.includes('restaurant') || lowerCaseName.includes('dining') || lowerCaseName.includes('cafe')) return FaUtensils;
  if (lowerCaseName.includes('drink') || lowerCaseName.includes('bar')) return FaCocktail;
  if (lowerCaseName.includes('room') || lowerCaseName.includes('accommodation') || lowerCaseName.includes('lobby')) return FaHome;
  if (lowerCaseName.includes('child') || lowerCaseName.includes('kid')) return FaChild;
  if (lowerCaseName.includes('beach') || lowerCaseName.includes('sea') || lowerCaseName.includes('water')) return FaWater;
  if (lowerCaseName.includes('business') || lowerCaseName.includes('meeting') || lowerCaseName.includes('conference')) return FaComments;
  if (lowerCaseName.includes('parking') || lowerCaseName.includes('car') || lowerCaseName.includes('garage')) return FaCar;
  if (lowerCaseName.includes('internet') || lowerCaseName.includes('wifi') || lowerCaseName.includes('wlan')) return FaWifi;
  if (lowerCaseName.includes('bed') || lowerCaseName.includes('sleep')) return FaBed;
  if (lowerCaseName.includes('bath') || lowerCaseName.includes('shower')) return FaBath;
  if (lowerCaseName.includes('shop') || lowerCaseName.includes('store') || lowerCaseName.includes('market')) return FaShoppingCart;
  if (lowerCaseName.includes('phone') || lowerCaseName.includes('mobile')) return FaPhone;
  if (lowerCaseName.includes('tv') || lowerCaseName.includes('television')) return FaTv;
  if (lowerCaseName.includes('music') || lowerCaseName.includes('entertainment')) return FaMusic;
  if (lowerCaseName.includes('clean') || lowerCaseName.includes('laundry')) return FaTshirt;
  
  // Default fallback
  return FaHome;
}

// React component version
export function FacilityIcon({ 
  facilityName, 
  size = 20,
  className = "",
  ...props 
}: { 
  facilityName: string;
  size?: number | string;
  className?: string;
} & React.SVGProps<SVGSVGElement>) {
  const IconComponent = getFacilityIcon(facilityName);
  
  return <IconComponent size={size} className={className} {...props} />;
}