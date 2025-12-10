"use client";

import React from "react";
import { Button } from "@/components/ui/stateful-button";

export function WhatsAppModal() {

  
  // dummy API call
  const handleClick = () => {
    window.open("https://wa.me/233244364050", "_blank");

    return new Promise((resolve) => {
      setTimeout(resolve, 4000);
    });
  };
  return (
    <div className="flex h-40 w-full items-center justify-center">
      <Button onClick={handleClick}>Whatsapp</Button>
    </div>
  );
}

