"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";

export function ConnectWallet() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Button
        className="relative px-6 py-6 text-lg font-sans font-medium text-black bg-white border border-black rounded-md overflow-hidden transition-colors duration-300 ease-in-out hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="relative z-10 ">Connect Wallet</span>
        <span
          className={`absolute inset-0 bg-black transform origin-left transition-transform duration-300 ease-in-out ${
            isHovered ? "scale-x-100" : "scale-x-0"
          }`}
          aria-hidden="true"
        />
      </Button>
    </div>
  );
}
