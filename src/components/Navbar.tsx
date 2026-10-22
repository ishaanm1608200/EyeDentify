"use client";

import React, { useState, useEffect } from "react";
import { Eye, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenPreorder: () => void;
}

export default function Navbar({ onOpenPreorder }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 select-none ${
          scrolled
            ? "py-3 bg-[#0c1014]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "py-5 bg-gradient-to-b from-[#0c1014]/60 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.25)] group-hover:scale-105 transition-transform">
              <Eye className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-[0.22em] text-base text-white uppercase font-mono leading-none">
                EYEDENTIFY
              </span>
              <span className="text-[9px] font-mono tracking-widest text-cyan-300/80 uppercase mt-0.5">
                AI Bionic Vision // India
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-slate-300">
            <a href="#modes" className="hover:text-cyan-400 transition-colors">
              Intelligent Modes
            </a>
            <a href="#interactive-talk" className="hover:text-cyan-400 transition-colors">
              Talk AI
            </a>
            <a href="#hardware" className="hover:text-cyan-400 transition-colors">
              Architecture
            </a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">
              Pricing & Economics
            </a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Engineered For India</span>
            </div>

            <button
              onClick={onOpenPreorder}
              className="px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_25px_rgba(34,211,238,0.35)] cursor-pointer"
            >
              Reserve for ₹9,999
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#0c1014]/95 backdrop-blur-2xl flex flex-col justify-center items-center gap-6 p-6 md:hidden">
          <a
            href="#modes"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-mono tracking-wider uppercase text-white hover:text-cyan-400"
          >
            Intelligent Modes
          </a>
          <a
            href="#interactive-talk"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-mono tracking-wider uppercase text-white hover:text-cyan-400"
          >
            Talk AI Simulator
          </a>
          <a
            href="#hardware"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-mono tracking-wider uppercase text-white hover:text-cyan-400"
          >
            Hardware Specs
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-mono tracking-wider uppercase text-white hover:text-cyan-400"
          >
            Pricing & Unit Economics
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-mono tracking-wider uppercase text-white hover:text-cyan-400"
          >
            FAQ
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPreorder();
            }}
            className="w-full max-w-xs mt-4 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase text-black bg-gradient-to-r from-cyan-400 to-teal-300 shadow-[0_0_30px_rgba(34,211,238,0.4)]"
          >
            Reserve Eyedentify One (₹9,999)
          </button>
        </div>
      )}
    </>
  );
}
