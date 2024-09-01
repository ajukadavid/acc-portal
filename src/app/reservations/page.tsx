"use client"

import { useState } from "react";
import BookingInfo from "@/components/bookingInfo/bookingInfo";
import ChooseRoom from "@/components/chooseRoom/chooseRoom";
import Confirmation from "@/components/confirmation/confirmation";
import Payments from "@/components/payments/payments";
import { Kumar_One } from "next/font/google";

const backgroundStyle = {
  backgroundImage: 'url("/images/frame.png")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

const kumar = Kumar_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Reservations() {
  const [activeTab, setActiveTab] = useState("bookingInfo");

  return (
    <main>
      <div>
        <div style={backgroundStyle} className="w-full h-fit">
          <div className="flex justify-between items-center p-10">
            <span className={`${kumar.className} text-white text-4xl`}>
              Make Reservation
            </span>
            <img src="/images/logoyt.png" className="w-20 h-20" />
          </div>
          <div className="flex text-white justify-between mx-20 mt-4">
          <button
            onClick={() => setActiveTab("bookingInfo")}
            className={`px-4 py-2 mx-2 text-2xl font-bold ${activeTab === "bookingInfo" ? "border-b-4 border-btn-color" : ""
              }`}
          >
            Booking Info
          </button>
          <button
            onClick={() => setActiveTab("chooseRoom")}
            className={`px-4 py-2 mx-2  text-2xl font-bold ${activeTab === "chooseRoom" ? "border-b-4 border-btn-color" : ""
              }`}
          >
            Choose Room
          </button>
          <button
            onClick={() => setActiveTab("confirmation")}
            className={`px-4 py-2 mx-2 text-2xl font-bold ${activeTab === "confirmation" ? "border-b-4 border-btn-color" : ""
              }`}
          >
            Confirmation
          </button>
          <button
            onClick={() => setActiveTab("payments")}
            className={`px-4 py-2 mx-2 text-2xl font-bold ${activeTab === "payments" ? "border-b-4 border-btn-color" : ""
              }`}
          >
            Payments
          </button>
        </div>
        </div>

        {/* Tabs Navigation */}
     

      
          {activeTab === "bookingInfo" && <BookingInfo />}
          {activeTab === "chooseRoom" && <ChooseRoom />}
          {activeTab === "confirmation" && <Confirmation />}
          {activeTab === "payments" && <Payments />}
       
      </div>
    </main>
  );
}
