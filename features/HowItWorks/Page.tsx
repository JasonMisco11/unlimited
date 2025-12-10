"use client";
import { motion } from "motion/react";
import { ShoppingCart, Warehouse, Home, ArrowDown } from "lucide-react";

const steps = [
  {
    title: "You Shop (or We Shop)",
    description: "Shop from your favorite stores (Amazon, Shein, eBay) using our warehouse address. Or, simply send us the link, and we'll buy it for you.",
    icon: <ShoppingCart className="w-6 h-6 text-white" />,
    color: "bg-blue-600",
  },
  {
    title: "We Receive & Consolidate",
    description: "Your items arrive at our US, UK, or China warehouse. We store them safely and combine multiple packages into one box to save you shipping costs.",
    icon: <Warehouse className="w-6 h-6 text-white" />,
    color: "bg-orange-600",
  },
  {
    title: "Delivery to Ghana",
    description: "We ship via Air (5-7 days) or Sea (30-45 days). We handle all customs clearing. You just wait for the doorbell or pick up at our hub.",
    icon: <Home className="w-6 h-6 text-white" />,
    color: "bg-green-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-black">
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
          
          {/* Vertical Connecting Line (The "Road") */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-800 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-800 -translate-x-1/2 md:hidden" />

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  // Alternate Left/Right alignment on Desktop
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                
                {/* 1. TEXT CONTENT SIDE */}
                <div className="flex-1 md:pt-2">
                   <div className={`bg-white dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm relative ${
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                   }`}>
                      {/* Mobile Step Number */}
                      <span className="md:hidden absolute -top-3 -right-3 w-8 h-8 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>
                      
                      <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {step.description}
                      </p>
                   </div>
                </div>

                {/* 2. CENTER ICON (The Dot) */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white dark:border-black shadow-lg flex items-center justify-center z-10 ${step.color}`}>
                    {step.icon}
                  </div>
                </div>

                {/* 3. EMPTY SPACER SIDE (To balance the flexbox) */}
                <div className="flex-1 hidden md:block" />
                
                {/* Mobile Spacing Fix */}
                <div className="pl-16 md:hidden" /> 

              </motion.div>
            ))}
          </div>

          {/* Final Call to Action Arrow */}
          <div className="flex justify-center mt-12">
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
        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-black/10 dark:shadow-white/10">
            Get Your Free Shipping Address
          </button>
        </div>

      </div>
    </section>
  );
}