import { Star, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  helpful: number;
  notHelpful: number;
  roomType?: string;
  stayDuration?: string;
}

const reviews: Review[] = [
  {
    id: "1",
    userName: "Sarah Johnson",
    userAvatar: "/woman-profile.png",
    rating: 5,
    date: "2 days ago",
    title: "Exceptional stay with amazing service",
    comment:
      "The Lagos Continental Hotel exceeded all my expectations. The staff was incredibly friendly and helpful throughout my stay. The room was spacious, clean, and had a beautiful view of the city. The breakfast buffet was outstanding with a great variety of options. I would definitely recommend this hotel to anyone visiting Lagos.",
    helpful: 12,
    notHelpful: 1,
    roomType: "Superior Room",
    stayDuration: "3 nights",
  },
  {
    id: "2",
    userName: "Michael Chen",
    userAvatar: "/man-profile.png",
    rating: 4,
    date: "1 week ago",
    title: "Great location and facilities",
    comment:
      "Perfect location for business travelers. The hotel is well-maintained and the business center facilities are excellent. The only minor issue was the Wi-Fi speed in my room, but overall it was a pleasant stay. The restaurant serves delicious local and international cuisine.",
    helpful: 8,
    notHelpful: 0,
    roomType: "Business Suite",
    stayDuration: "2 nights",
  },
  {
    id: "3",
    userName: "Emma Williams",
    userAvatar: "/blonde-woman-profile.png",
    rating: 5,
    date: "2 weeks ago",
    title: "Perfect for family vacation",
    comment:
      "We had an amazing family vacation at this hotel. The kids loved the pool area and the staff was very accommodating with our requests. The rooms were comfortable and the housekeeping service was impeccable. We'll definitely be back!",
    helpful: 15,
    notHelpful: 2,
    roomType: "Family Room",
    stayDuration: "5 nights",
  },
  {
    id: "4",
    userName: "David Rodriguez",
    userAvatar: "/hispanic-man-profile.png",
    rating: 4,
    date: "3 weeks ago",
    title: "Good value for money",
    comment:
      "The hotel offers good value for the price. The room was clean and comfortable, and the location is convenient for exploring the city. The breakfast could use more variety, but overall it was a satisfactory stay.",
    helpful: 6,
    notHelpful: 1,
    roomType: "Standard Room",
    stayDuration: "4 nights",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? "fill-[#FC5D01] text-[#FC5D01]" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export function HotelReviews() {
  return (
    <div className="space-y-6">
      {/* Individual Reviews */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="p-4 border-none shadow-none">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex flex-col mb-2">
                  <div className="text-right">
                    <StarRating rating={review.rating} />
                  </div>
                  <div className="flex gap-4 items-center">
                    <h5 className=" text-[#666666] text-sm">
                      {review.userName}
                    </h5>
                    <div className="flex items-center gap-2 text-sm text-[#666666]">
                      <p className="text-sm text-[#666666] mt-1">
                        {review.date}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {review.comment}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center">
        <Button variant="outline" className="px-8 bg-transparent">
          Load More Reviews
        </Button>
      </div>
    </div>
  );
}
