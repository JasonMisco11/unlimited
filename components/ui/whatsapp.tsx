"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal"; 
import { motion } from "motion/react";
import { 
  Plane, 
  Ship, 
  PackageCheck, 
  Truck, 
  Warehouse, 
  ShieldCheck 
} from "lucide-react";

export function WhatsAppModal() {
  const images = [
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=3000&auto=format&fit=crop", // Warehouse
    "https://images.unsplash.com/photo-1494412574643-35d324698420?q=80&w=3000&auto=format&fit=crop", // Ship
    "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=80&w=3000&auto=format&fit=crop", // Cargo Plane
    "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=3000&auto=format&fit=crop", // Delivery Van
  ];

  const handleWhatsAppClick = () => {
    // Direct link to WhatsApp
    window.open("https://wa.me/233244364050", "_blank");
  };

  return (
    <Modal>
      {/* THE TRIGGER BUTTON (Visible in Hero) */}
      <ModalTrigger className="w-full md:w-auto px-8 py-3.5 bg-transparent border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors flex items-center justify-center gap-2 group/modal-btn overflow-hidden relative">
        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
          Chat on WhatsApp
        </span>
        <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-green-600 z-20">
            {/* WhatsApp Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
        </div>
      </ModalTrigger>

      {/* THE POPUP CONTENT */}
      <ModalBody>
        <ModalContent>
          <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
            Ship from{" "}
            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
              China, USA & UK
            </span>{" "}
            to Ghana 🇬🇭
          </h4>
          
          <div className="flex justify-center items-center">
            {images.map((image, idx) => (
              <motion.div
                key={"images" + idx}
                style={{ rotate: Math.random() * 20 - 20 }}
                whileHover={{ scale: 1.1, rotate: 0, zIndex: 100 }}
                whileTap={{ scale: 1.1, rotate: 0, zIndex: 100 }}
                className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
              >
                <img
                  src={image}
                  alt="logistics images"
                  width="500"
                  height="500"
                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                />
              </motion.div>
            ))}
          </div>

          <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
            <FeatureIcon icon={<Plane />} text="Air Freight" />
            <FeatureIcon icon={<Ship />} text="Sea Shipping" />
            <FeatureIcon icon={<ShieldCheck />} text="Customs Clearing" />
            <FeatureIcon icon={<Truck />} text="Door-to-Door" />
            <FeatureIcon icon={<Warehouse />} text="Warehousing" />
            <FeatureIcon icon={<PackageCheck />} text="Package Consolidation" />
          </div>
        </ModalContent>

        <ModalFooter className="gap-4">
          <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
            Cancel
          </button>
          <button 
            onClick={handleWhatsAppClick}
            className="bg-green-600 hover:bg-green-700 text-white text-sm px-2 py-1 rounded-md border border-transparent w-28 transition-colors"
          >
            Start Chat
          </button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
}

// Helper component for the icons
const FeatureIcon = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <div className="flex items-center justify-center gap-1">
      <span className="text-neutral-700 dark:text-neutral-300 h-4 w-4 [&>svg]:w-4 [&>svg]:h-4">
        {icon}
      </span>
      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
        {text}
      </span>
    </div>
);