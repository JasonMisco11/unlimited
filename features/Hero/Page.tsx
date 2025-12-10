"use client";

import { motion } from "motion/react";
import dynamic from 'next/dynamic';

// --- STATIC DATA ---
const mapDots = [
  { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } },
  { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } },
  { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } },
  { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
  { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } },
  { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -10.2921, lng: -0.8219 } },
];

const WorldMap = dynamic(() => import("@/components/ui/world-map"), {
  ssr: false,
});

const WhatsAppModal = dynamic(() => import("@/components/ui/whatsapp").then(mod => mod.WhatsAppModal), {
  ssr: false,
  loading: () => <div className="h-12 w-full md:w-40 bg-neutral-100 dark:bg-neutral-800 rounded-lg animate-pulse" />
});

export default function Hero() {
  return (
    <section className="relative w-full dark:bg-black bg-white flex flex-col items-center justify-center overflow-hidden min-h-screen">
      
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* 1. THE MAP CONTAINER (Zoomed for Mobile) */}
      <div className="absolute z-0 pointer-events-none
                      w-full aspect-2/1 
                      left-0 top-1/2 -translate-y-1/2
                      scale-[1.6] md:scale-100 origin-center">
        <WorldMap dots={mapDots} />
      </div>

      {/* 2. VIGNETTE */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-white dark:bg-black 
                      mask-[radial-gradient(ellipse_at_center,transparent_20%,black_85%)]" />

      {/* --- FLOATING STATUS BADGE (Fills Top Whitespace) --- */}
      {/* Positioned absolutely at top-24 (approx 96px) to sit just below Navbar */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-24 z-30 w-full flex justify-center px-4"
      >
        <div className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-medium text-neutral-600 dark:text-neutral-300">
            Accepting Orders for Next Shipment
          </span>
        </div>
      </motion.div>


      {/* --- MAIN CONTENT LAYER --- */}
      <div className="relative z-20 max-w-4xl mx-auto text-center px-4 pt-20 pb-20">
        
        {/* Headline */}
        <h1 className="font-bold text-4xl md:text-7xl dark:text-white text-black leading-tight tracking-tight">
          Sourcing Globally, <br className="hidden md:block" />
          <span className="bg-linear-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Delivering Locally
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          The safest way to buy from <span className="text-black dark:text-white font-semibold">Amazon, Alibaba, & UK stores</span> and deliver 
          directly to your doorstep in Ghana. No customs stress.
        </p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 w-full"
        >
          
           
          <div className="py-32 w-full md:w-auto">
             <WhatsAppModal />
          </div> 
        </motion.div>

      </div>
    </section>
  );
}