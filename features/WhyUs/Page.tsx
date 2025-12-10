"use client";
import { motion } from "motion/react";
import { 
  ShieldCheck, 
  PackageOpen, 
  Clock, 
  MapPin 
} from "lucide-react";

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-neutral-50 dark:bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Why choose <span className="text-(--prime-color)">Unlimited Solutions?</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            We handle the headache of customs, clearing, and delivery so you can just shop.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. CONSOLIDATION */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden relative group"
          >
            <div className="relative z-10">
              <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                <PackageOpen size={24} />
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Smart Consolidation</h3>
              <p className="text-neutral-600 dark:text-neutral-400 max-w-sm">
                Shop from 5 different stores? No problem. We repackage them into one box and ship them together to save you up to 40% on fees.
              </p>
            </div>
            {/* Gradient Blob Decoration */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all" />
          </motion.div>

          {/* 2. SPEED */}
          <motion.div 
             whileHover={{ y: -5 }}
             className="p-8 rounded-3xl bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 shadow-sm relative overflow-hidden group"
          >
             <div className="h-12 w-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-4 text-orange-600 dark:text-orange-400">
                <Clock size={24} />
              </div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">Fast Air Freight</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Weekly flights from USA, China & UK. Get your items in 5-7 business days.
            </p>
          </motion.div>

          {/* 3. CUSTOMS (Tall Card) */}
          <motion.div 
             whileHover={{ y: -5 }}
             className="md:row-span-2 p-8 rounded-3xl bg-black dark:bg-white text-white dark:text-black shadow-sm flex flex-col justify-between overflow-hidden relative"
          >
            <div className="relative z-10">
              <div className="h-12 w-12 bg-neutral-800 dark:bg-neutral-200 rounded-full flex items-center justify-center mb-4 text-white dark:text-black">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Zero Customs Stress</h3>
              <p className="text-neutral-400 dark:text-neutral-600">
                We clear everything at the port. You never deal with customs officers. The price we quote is the final price you pay.
              </p>
            </div>
            
            {/* CSS Pattern Decoration (No config needed) */}
            <div className="absolute inset-0 z-0 opacity-20" 
                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)', backgroundSize: '20px 20px' }} 
            />
          </motion.div>

          {/* 4. DELIVERY */}
          <motion.div 
             whileHover={{ y: -5 }}
             className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 shadow-sm flex items-center justify-between relative overflow-hidden group"
          >
            <div className="relative z-10 max-w-md">
               <div className="h-12 w-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
                <MapPin size={24} />
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Doorstep Delivery</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Whether you are in Accra, Kumasi, or Tamale, we deliver directly to your home or office.
              </p>
            </div>
             <div className="absolute -right-6 -bottom-6 opacity-5 dark:opacity-10 pointer-events-none">
                <MapPin size={180} />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}