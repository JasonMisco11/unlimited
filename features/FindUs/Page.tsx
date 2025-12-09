"use client";

import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function FindUs() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-black relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[var(--prime-color)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Visit our <span className="text-(--prime-color)">Hub</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            Pick up your packages or drop by for a consultation. We are open 6 days a week.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-neutral-50 dark:bg-neutral-900/50 rounded-3xl p-2 md:p-4 border border-neutral-200 dark:border-neutral-800">
          
          {/* LEFT: Information Panel (2/5 width) */}
          <div className="lg:col-span-2 flex flex-col justify-between p-6 md:p-10 space-y-10">
            
            {/* Address */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 bg-black dark:bg-white rounded-full flex items-center justify-center text-white dark:text-black">
                  <MapPin size={20} />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white">Head Office</h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed pl-14">
                Allos Mega Church International<br />
                Kwabenya<br />
                Accra, Ghana
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center text-black dark:text-white">
                  <Phone size={20} />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white">Contact</h3>
              </div>
              <div className="pl-14 space-y-2">
                <p className="text-neutral-600 dark:text-neutral-400 flex items-center gap-2">
                  <span className="font-medium">Tel:</span> +233 24 436 4050
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 flex items-center gap-2">
                  <span className="font-medium">Email:</span> hello@unlimited.com
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center text-black dark:text-white">
                  <Clock size={20} />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white">Working Hours</h3>
              </div>
              <ul className="pl-14 space-y-2 text-neutral-600 dark:text-neutral-400">
                <li className="flex justify-between max-w-[200px]">
                  <span>Mon - Fri</span>
                  <span className="font-medium text-black dark:text-white">8am - 5pm</span>
                </li>
                <li className="flex justify-between max-w-[200px]">
                  <span>Saturday</span>
                  <span className="font-medium text-black dark:text-white">9am - 2pm</span>
                </li>
                <li className="flex justify-between max-w-[200px]">
                  <span>Sunday</span>
                  <span className="text-red-500">Closed</span>
                </li>
              </ul>
            </div>

            {/* Direction Button */}
            <a 
              href="https://maps.google.com" 
              target="_blank"
              className="mt-4 flex items-center justify-between w-full p-4 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-[var(--prime-color)] transition-all group cursor-pointer"
            >
              <span className="font-medium text-black dark:text-white">Get Directions</span>
              <ArrowRight className="text-neutral-400 group-hover:text-[var(--prime-color)] transition-colors" />
            </a>

          </div>

          {/* RIGHT: The Map Embed (3/5 width) */}
          <div className="lg:col-span-3 h-[400px] lg:h-auto rounded-2xl overflow-hidden relative">
            {/* THE TRICK: 
                - grayscale: Makes the map black and white
                - invert: In dark mode, it flips the white map to black
                - contrast: Boosts visibility after inverting
            */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.212602016258!2d-0.25098252418529937!3d5.682382332364181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9f0059b6e427%3A0x881f30afb1760dee!2sAllos Mega Church International!5e0!3m2!1sen!2sgh!4v1765302114397!5m2!1sen!2sgh"  
              width="100%" 
              height="100%" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0 grayscale dark:invert-[.85] dark:contrast-125 transition-all duration-500 hover:grayscale-0"
            ></iframe>
            
            {/* Map Overlay Badge */}
            <div className="absolute top-4 right-4 bg-white dark:bg-black px-4 py-2 rounded-lg shadow-lg border border-neutral-100 dark:border-neutral-800 z-10 hidden md:block">
               <p className="text-xs font-bold text-black dark:text-white">📍 Live Map</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}