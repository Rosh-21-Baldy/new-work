"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useState } from "react";

const OfferBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    // <div className="bg-primary text-white py-2 text-center text-xs md:text-sm relative">
    //   <Link href="/offer" className="hover:underline">
    //     *Sign up as an PreFinn customer today and get up to ₹5,000 off on your
    //     login and processing fees!
    //   </Link>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/10 p-1 rounded-full"
        aria-label="Close banner"
      >
        <X className="h-4 w-4" />
      </button>
    // </div>
  );
};

export default OfferBanner;
