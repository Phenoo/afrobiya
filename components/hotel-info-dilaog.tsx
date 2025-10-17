"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, CreditCard, Calendar } from "lucide-react";

interface HotelPoliciesDialogProps {
  isOpen: boolean;
  onClose: () => void;
  hotelName: string;
}

export default function HotelPoliciesDialog({
  isOpen,
  onClose,
  hotelName,
}: HotelPoliciesDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose} defaultOpen={isOpen}>
      <DialogContent className="md:max-w-4xl max-h-[700px] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-xl font-semibold">
            {hotelName} Hotel Policies
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Meals Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Meals</h3>
            <div className="space-y-2">
              <p className="text-gray-700">Buffet breakfast included</p>
              <p className="text-[#808080] text-sm">
                Breakfast rated 7.7 - based on 42 reviews.
              </p>
            </div>
          </div>

          {/* Cancellation Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Cancellation</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#808080]" />
                <span className="font-medium text-gray-700">
                  Partially refundable
                </span>
              </div>
              <p className="text-[#808080] text-sm leading-relaxed">
                You'll be charged the cost of the first night if you cancel
                after reservation. If you don't show up, the no-show fee will be
                the same as the cancellation fee.
              </p>
            </div>
          </div>

          {/* Prepayment Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Prepayment</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-[#808080]" />
                <span className="font-medium text-gray-700">
                  Pay the property before arrival
                </span>
              </div>
              <p className="text-[#808080] text-sm">
                You'll be charged a prepayment of the cost of the first night
                after reservation.
              </p>
            </div>
          </div>

          {/* Food/Drink Discount Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Food/Drink Discount</h3>
            <p className="text-[#808080] text-sm">
              15% discount can only be used on food and drink at the property.
            </p>
          </div>

          {/* Parking Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Parking</h3>
            <p className="text-[#808080] text-sm">
              Parking for one vehicle per room per stay.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
