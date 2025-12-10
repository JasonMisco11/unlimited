"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from "react";
import { Menu, X } from 'lucide-react';

type NavLink = {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Why Us", href: "#why-us" },         
  { label: "How it Works", href: "#how-it-works" }, 
  { label: "Location", href: "#contact" },       
  { label: "FAQ", href: "#faq" },                
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- THE FIX IS HERE ---
  const handleScrollToSection = (id: string) => {
    // 1. Close menu first
    setIsOpen(false); 

    // 2. Wait 300ms for the animation to finish, THEN scroll
    setTimeout(() => {
      const element = document.querySelector(id);
      if (element) {
        const yOffset = -80; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="px-[8%] lg:px-[16%] flex items-center justify-between">
        
        {/* LOGO */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex shrink-0"
        >
          <a href="#" className="text-2xl font-bold font-sans">
            <span className="text-neutral-400">Unlimited</span>
            {/* CSS FIX applied here */}
            <span className="text-[var(--prime-color)]">Solutions</span>
          </a>
        </motion.div>

        {/* DESKTOP NAV */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="hidden md:flex space-x-8 items-center"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScrollToSection(link.href)}
              className="text-sm font-medium transition-colors cursor-pointer text-neutral-800 dark:text-white hover:text-[var(--prime-color)]"
            >
              {link.label}
            </button>
          ))}
          
          <a 
            href="https://calendly.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-md font-semibold border border-neutral-800 dark:border-white text-neutral-800 dark:text-white hover:bg-[var(--prime-color)] hover:border-transparent hover:text-white transition-all duration-300"
          >
            Book Now
          </a>
        </motion.div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-800 dark:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white dark:bg-black border-t dark:border-white/10"
          >
            <div className="flex flex-col px-[8%] py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleScrollToSection(link.href)}
                  // CSS FIX applied here as well
                  className="text-left text-lg font-medium text-neutral-800 dark:text-white hover:text-[var(--prime-color)]"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://calendly.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-3 rounded-md font-semibold bg-[var(--prime-color)] text-white hover:opacity-90 transition-opacity"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}