"use client";

import React from "react";
import { Eye, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#06080b] text-white border-t border-white/10 pt-20 pb-12 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center">
                <Eye className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="font-extrabold tracking-[0.2em] text-lg text-white font-mono uppercase">
                EYEDENTIFY
              </span>
            </div>
            <p className="text-sm text-slate-300 font-light max-w-sm leading-relaxed">
              Pioneering bionic sensory electronics and spatial AI for the visually impaired. Built with titanium precision to empower millions with absolute independence.
            </p>
            <div className="text-xs font-mono text-cyan-400 pt-2">
              FDA Breakthrough Device Track // WCAG 2.2 AAA Compliant
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3 font-mono text-xs">
            <div className="text-white font-bold uppercase tracking-widest text-[11px] mb-4">
              Technology
            </div>
            <div><a href="#modes" className="text-slate-400 hover:text-white transition-colors">Detection Mode</a></div>
            <div><a href="#modes" className="text-slate-400 hover:text-white transition-colors">Reading Mode</a></div>
            <div><a href="#modes" className="text-slate-400 hover:text-white transition-colors">Payment Mode</a></div>
            <div><a href="#modes" className="text-slate-400 hover:text-white transition-colors">AI Navigation</a></div>
            <div><a href="#interactive-talk" className="text-slate-400 hover:text-white transition-colors">Talk AI Mode</a></div>
          </div>

          {/* Hardware & Organization */}
          <div className="md:col-span-2 space-y-3 font-mono text-xs">
            <div className="text-white font-bold uppercase tracking-widest text-[11px] mb-4">
              Company
            </div>
            <div><a href="#hardware" className="text-slate-400 hover:text-white transition-colors">Architecture</a></div>
            <div><a href="#pricing" className="text-slate-400 hover:text-white transition-colors">Pioneer Pre-Order</a></div>
            <div><a href="#faq" className="text-slate-400 hover:text-white transition-colors">FAQ & Insurance</a></div>
            <div><a href="#" className="text-slate-400 hover:text-white transition-colors">Clinical Research</a></div>
            <div><a href="#" className="text-slate-400 hover:text-white transition-colors">Accessibility Grants</a></div>
          </div>

          {/* Newsletter / Updates */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-white font-mono font-bold uppercase tracking-widest text-[11px] mb-4">
              Join Cohort Updates
            </div>
            <p className="text-xs text-slate-300 font-light">
              Receive batch manufacturing updates, SDK releases, and clinical pilot results.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed! Thank you for following Eyedentify."); }} className="flex gap-2 pt-2">
              <input
                type="email"
                required
                placeholder="Enter email"
                className="bg-white/[0.05] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 flex-1 font-mono"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-mono text-xs font-bold uppercase cursor-pointer"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400">
          <div>
            © 2026 EYEDENTIFY INC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with devotion for independence</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
}
