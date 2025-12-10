"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

// --- REAL LOGISTICS DATA ---
const faqs = [
  {
    question: "How much do you charge per kg?",
    answer: "Our rates are competitive and change slightly based on the season. Currently, Air Freight is approx $8-$10 per kg (USA/China to Ghana). Sea shipping is volume-based. Please chat with us on WhatsApp for today's exact rate.",
  },
  {
    question: "How long does delivery take?",
    answer: "Air Freight typically takes 5-7 business days from the day your package arrives at our foreign warehouse. Sea Shipping takes about 30-45 days. We send out shipment notifications every step of the way.",
  },
  {
    question: "Can you buy the item for me?",
    answer: "Yes! termed 'Procurement Service'. If you don't have a credit card or the store doesn't accept GH cards, simply send us the link. We will buy it for you for a small service fee (usually 5-10%).",
  },
  {
    question: "Do I have to pay customs duty?",
    answer: "No additional stress for you. Our shipping fees are 'All-Inclusive', meaning we handle the clearing and customs charges at the port. The price we quote is the final price you pay to pick up your item.",
  },
  {
    question: "What items are prohibited?",
    answer: "We cannot ship explosives, illegal drugs, weapons, or flammable items. Perfumes and batteries (power banks) require special handling—please notify us before shipping these so we can categorize them safely.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Frequently Asked <span className="text-(--prime-color)">Questions</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Everything you need to know about shipping with Unlimited Solutions.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden bg-neutral-50 dark:bg-neutral-900/30"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-black dark:text-white pr-8">
                  {faq.question}
                </span>
                <span className="shrink-0 text-(--prime-color)">
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-200 dark:border-neutral-800/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center p-8 rounded-3xl bg-(--prime-color)/5 border border-(--prime-color)/20">
          <p className="text-black dark:text-white font-medium mb-4">
            Still have questions? We are here to help.
          </p>
          <a 
            href="https://wa.me/233244364050" 
            target="_blank"
            className="inline-flex items-center justify-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-bold rounded-lg hover:opacity-80 transition-opacity"
          >
            Chat with Support
          </a>
        </div>

      </div>
    </section>
  );
}