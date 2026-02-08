"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Free Tips", href: "#free-value" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <img src="/maxilogo.png" alt="MAXI AI" className="w-9 h-9 rounded-xl" />
          <span className="text-xl font-bold tracking-tight">
            MAXI <span className="text-primary">AI</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-light transition-colors"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface border-t border-surface-border px-6 pb-6 pt-2"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-muted hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block text-center px-5 py-3 bg-primary text-white font-semibold rounded-full"
          >
            Join Waitlist
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
