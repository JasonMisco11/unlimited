"use client";
import { motion } from "motion/react";
import { ShoppingCart, Warehouse, Home, ArrowDown } from "lucide-react";

// ... (Keep the const steps array the same) ...
const steps = [
  {
    title: "You Shop (or We Shop)",
    description: "Shop from your favorite stores (Amazon, Shein, eBay) using our warehouse address. Or, simply send us the link, and we'll buy it for you.",
    icon: <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-white" />,
    color: "bg-blue-600",
  },
  {
    title: "We Receive & Consolidate",
    description: "Your items arrive at our US, UK, or China warehouse. We store them safely and combine multiple packages into one box to save you shipping costs.",
    icon: <Warehouse className="w-5 h-5 md:w-6 md:h-6 text-white" />,
    color: "bg-orange-600",
  },
  {
    title: "Delivery to Ghana",
    description: "We ship via Air (5-7 days) or Sea (30-45 days). We handle all customs clearing. You just wait for the doorbell or pick up at our hub.",
    icon: <Home className="w-5 h-5 md:w-6 md:h-6 text-white" />,
    color: "bg-green-600",
  },
];

export default function HowItWorks() {
  const handleGetAddress = () => {
     // Option 1: WhatsApp (Recommended for Startups)
     window.open("https://wa.me/233244364050?text=Hi,%20I%20want%20to%20get%20your%20US/UK/China%20shipping%20addresses.", "_blank");
  };

  return (
    <section id="how-it-works" className="py-24 bg-neutral-50 dark:bg-black">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Shipping made <span className="text-(--prime-color)">Simple</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            Stop worrying about customs and lost packages. Here is how to get started in minutes.
          </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          
          {/* Vertical Line */}
          {/* Desktop: Center. Mobile: Left aligned (32px from left) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-800 -translate-x-1/2" />

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  // Desktop: Alternate Left/Right
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                
                {/* 1. ICON (The Dot) - Absolute Positioned */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center top-0">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white dark:border-black shadow-lg flex items-center justify-center z-10 ${step.color}`}>
                    {step.icon}
                  </div>
                </div>

                {/* 2. TEXT CONTENT */}
                <div className={`flex-1 md:pt-2 
                    /* MOBILE FIX: Add left margin to clear the icon */
                    ml-20 md:ml-0 
                `}>
                   <div className={`bg-white dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm relative ${
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                   }`}>
                      <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
                        {step.description}
                      </p>
                   </div>
                </div>

                {/* 3. SPACER (For Desktop Balance) */}
                <div className="flex-1 hidden md:block" />

              </motion.div>
            ))}
          </div>

          {/* Arrow Animation */}
          <div className="flex justify-center mt-12 pl-8 md:pl-0">
             <motion.div 
               animate={{ y: [0, 10, 0] }} 
               transition={{ duration: 2, repeat: Infinity }}
               className="w-10 h-10 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-full flex items-center justify-center text-neutral-400 z-10"
             >
                <ArrowDown size={20} />
             </motion.div>
          </div>

        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center pl-8 md:pl-0">
          <button 
            onClick={handleGetAddress}
            className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-black/10 dark:shadow-white/10"
          >
            Get Your Free Shipping Address
          </button>
        </div>

      </div>
    </section>
  );
}