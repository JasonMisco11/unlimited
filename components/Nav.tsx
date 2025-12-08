"use client";
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import { Menu,
    X
 } from 'lucide-react';

 type NavLink = {
    label: string;
    href: string;
}

const navLinks : NavLink[] = [
    { label: "Why USS", href: "#why-uss" },
    { label: "Benefits", href: "#benefits" },
    { label: "Services", href: "#services" },
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
];



export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    
    const navContainerRef = useRef<HTMLElement>(null);
    
    const menuRef = useRef<HTMLDivElement>(null); 
    const [menuHeight, setMenuHeight] = useState('0px'); 

    useEffect(() => {
        if (menuRef.current){
            setMenuHeight(isOpen ? `${menuRef.current.scrollHeight}px` : '0px');
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && navContainerRef.current && !navContainerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const handleScroll = (id: string) => {
        // Close menu when a link is clicked (UX best practice)
        setIsOpen(false);

        const element = document.querySelector(id);
        if (element) {
            const yOffset = -80; 
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

  return (
    <nav 
        ref={navContainerRef}
        className="w-full shadow-md fixed top-0 left-0 z-50 bg-[#0000003f] backdrop-blur-lg"
    >
      <div className="px-[8%] lg:px-[16%] py-8 flex items-center justify-between">
        <motion.div
        initial={{ y: -100, opacity: 0}}
        animate={{ y:0, opacity: 1 }}
        transition={{ duration: 0.4}}
        className="flex shrink-0" >
            <a href="#" className="text-2xl font-bold Unbounded">
                <span className="text-gray-400">Unlimited</span>
                <span className="text-(--prime-color)">Solutions</span>
            </a>
        </motion.div>

        <motion.div 
        initial={{ x: 100, opacity: 0}}
        animate={{ x:0, opacity: 1 }}
        transition={{ duration: 0.4}}
        className="hidden md:flex space-x-8">
            {navLinks.map((link) =>(
                <button
                    key={link.href}
                    onClick={() => handleScroll(link.href)}
                    className="nav-links text-white hover:text-(--prime-color) p-2 rounded 2xl transistion font-medium cursor-pointer"
                    >
                        {link.label}
                </button>
            ))}
        </motion.div>
        
        <motion.div 
        initial={{ y: 100, opacity: 0}}
        animate={{ y:0, opacity: 1 }}
        transition={{ duration: 0.4}}
        className="hidden md:block">
            <a href="https://calendly.com/" target="blank">
                <button 
                onClick={() => handleScroll(`#book`)}
                className="pb-2 border border-white text-white hover:border-transparent hover:text-white hover:bg-(--prime-color) font-semibold px-5 py-2 rounded-md transition-all duration-300 cursor-pointer"
                >
                    Book Now
                </button>
            </a>
        </motion.div>

        <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl focus:outline-none transition-transform duration-300"
            aria-label="Toggle menu"
        >
            {isOpen ? <X /> : <Menu />}
        </button>
    </div>

    <div 
        ref={menuRef}
        style={{ maxHeight: menuHeight }}
        className="md:hidden overflow-hidden transition-all duration-500 ease-in-out"
    >
        <nav className="flex px-[8%] py-5 flex-col space-y-4 bg-[#0000003f] backdrop-blur-lg border-t border-white/10">
            {navLinks.map((link) => (
                 <button
                    key={link.href}
                    onClick={() => handleScroll(link.href)}
                    className="text-left nav-links text-white hover:text-[var(--prime-color)] p-2 rounded 2xl transistion font-medium cursor-pointer"
                    >
                        {link.label}
                </button>
            ))}
            <div className="mt-2"></div>
            <a href="https://calendly.com/" target="blank">
             <button 
                onClick={() => handleScroll(`#book`)}
                className="w-full pb-2 border border-white text-white hover:border-transparent hover:text-white hover:bg-[var(--prime-color)] font-semibold px-5 py-2 rounded-md transition-all duration-300 cursor-pointer"
                >
                    Book Now
                </button>
                </a>
        </nav>
    </div>

    </nav>
  )
}