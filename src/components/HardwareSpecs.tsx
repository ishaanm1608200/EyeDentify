"use client";

import React from "react";
import { Cpu, Eye, Volume2, Battery, ShieldCheck, Feather } from "lucide-react";

const SPECS = [
  {
    icon: Feather,
    title: "42g Ultralight Titanium",
    description: "Formulated with aerospace Grade 5 titanium memory alloy for ergonomic all-day wear without nasal pressure.",
    detail: "42 grams // Ergonomic balance",
  },
  {
    icon: Eye,
    title: "Dual 120° Vision Sensors",
    description: "High dynamic range cameras paired with structured infrared flood illumination for day and night depth mapping.",
    detail: "120 FPS // 120° Field of View",
  },
  {
    icon: Volume2,
    title: "Binaural Bone Conduction",
    description: "Patented acoustic transducers send directional sound cues into temporal bone, keeping ear canals open to traffic.",
    detail: "Open-Ear // 3D Spatial Audio",
  },
  {
    icon: Cpu,
    title: "On-Device Neural SoC",
    description: "Runs quantized vision-language models locally on customized silicon with sub-18ms response times.",
    detail: "< 18ms Latency // 100% Offline",
  },
  {
    icon: Battery,
    title: "16-Hour Dual Battery",
    description: "Balanced dual-cell architecture in the temple arms with magnetic snap charging from 0 to 80% in 35 minutes.",
    detail: "16 Hours Active // Fast Charge",
  },
  {
    icon: ShieldCheck,
    title: "IP68 Weather Sealed",
    description: "Hermetically sealed chassis withstands sudden downpours, dust storms, and daily accidental drops.",
    detail: "Water & Dust Resistant",
  },
];

export default function HardwareSpecs() {
  return (
    <section id="hardware" className="relative z-20 py-28 px-6 sm:px-10 bg-[#0c1014] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Precision Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Micro-Engineered For <br />
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-white bg-clip-text text-transparent">
              Everyday Resilience.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Every millimeter of Eyedentify was refined through 1,400+ hours of physical testing with blind and low-vision athletes, students, and commuters worldwide.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECS.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all group relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {spec.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                  {spec.description}
                </p>

                <div className="pt-4 border-t border-white/10 font-mono text-xs text-cyan-400 font-semibold tracking-wide">
                  {spec.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
