"use client";
import Link from "next/link";
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP SECTION: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: Brand & Slogan */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold font-sans block">
              <span className="text-neutral-400">Unlimited</span>
              <span className="text-(--prime-color)]">Solutions</span>
            </Link>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
              Bridging the gap between global markets and your doorstep in Ghana. Safe, fast, and reliable logistics for individuals and businesses.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <SocialLink href="#" icon={<Instagram size={20} />} />
              <SocialLink href="#" icon={<Twitter size={20} />} />
              <SocialLink href="#" icon={<Facebook size={20} />} />
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div>
            <h3 className="font-bold text-black dark:text-white mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400">
              <li><a href="#why-uss" className="hover:text-(--prime-color) transition-colors">Why Choose Us</a></li>
              <li><a href="#services" className="hover:text-(--prime-color) transition-colors">Our Services</a></li>
              <li><a href="#how-it-works" className="hover:text-[(--prime-color) transition-colors">How It Works</a></li>
              <li><a href="#faq" className="hover:text-(--prime-color) transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* COLUMN 3: Services */}
          <div>
            <h3 className="font-bold text-black dark:text-white mb-6">Services</h3>
            <ul className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400">
              <li>Air Freight (USA/China/UK)</li>
              <li>Sea Shipping</li>
              <li>Customs Clearing</li>
              <li>Procurement & Sourcing</li>
              <li>Doorstep Delivery</li>
            </ul>
          </div>

          {/* COLUMN 4: Contact Info */}
          <div>
            <h3 className="font-bold text-black dark:text-white mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5 text-(--prime-color)" />
                <span>Airport West Residential Area,<br />Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-(--prime-color)" />
                <a href="tel:+233244364050" className="hover:text-black dark:hover:text-white transition-colors">
                  +233 24 436 4050
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-(--prime-color)" />
                <a href="mailto:info@unlimited.com" className="hover:text-black dark:hover:text-white transition-colors">
                  info@unlimited.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM SECTION: Copyright */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>
            &copy; {currentYear} Unlimited Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

// Helper for Social Icons to keep code clean
const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-[(--prime-color)] hover:text-white transition-all"
  >
    {icon}
  </a>
);