"use client";

import React from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";

interface PricingProps {
  onSelectTier: (tierName: string, depositAmount: string) => void;
}

const TIERS = [
  {
    name: "Pioneer Edition",
    badge: "Early Access Batch #1",
    price: "$499",
    retailPrice: "$799",
    deposit: "$99 Refundable Deposit",
    depositValue: "$99",
    description: "Ideal for early adopters, students, and tech enthusiasts seeking independence.",
    features: [
      "Eyedentify One Titanium Smart Glasses",
      "All 5 Intelligent Modes unlocked forever",
      "Magnetic fast-charging braided cable",
      "Hard protective travel case",
      "Lifetime OTA neural firmware upgrades",
      "Developer API & SDK access",
    ],
    popular: false,
    cta: "Reserve Pioneer",
  },
  {
    name: "Eyedentify Pro + Care",
    badge: "Most Recommended",
    price: "$649",
    retailPrice: "$999",
    deposit: "$149 Refundable Deposit",
    depositValue: "$149",
    description: "Complete accessibility bundle with custom prescription lenses and priority support.",
    features: [
      "Everything in Pioneer Edition",
      "Custom prescription magnetic lens insert",
      "Portable 10,000mAh wireless charging vault",
      "3-Year No-Questions-Asked replacement warranty",
      "24/7 dedicated 1-on-1 accessibility concierge",
      "Priority batch shipping Q1 2027",
    ],
    popular: true,
    cta: "Reserve Pro + Care",
  },
  {
    name: "Healthcare & Grants",
    badge: "Subsidized Program",
    price: "$0 Out-of-Pocket",
    retailPrice: "Covered by Grants",
    deposit: "Free Eligibility Verification",
    depositValue: "$0",
    description: "Designed for individuals covered by VA benefits, vocational rehabilitation, or NGO assistance.",
    features: [
      "Full Eyedentify Pro hardware suite",
      "Insurance & grant documentation support",
      "In-person orientation with mobility specialists",
      "Annual software and sensory tuning",
      "Community peer-mentorship network",
    ],
    popular: false,
    cta: "Apply For Grant",
  },
];

export default function PricingSection({ onSelectTier }: PricingProps) {
  return (
    <section id="pricing" className="relative z-20 py-28 px-6 sm:px-10 bg-[#0e1217] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pioneer Production Batch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Reserve Your Independence. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-white bg-clip-text text-transparent">
              Risk-Free Guarantee.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Join Batch 1 pre-orders with a 100% refundable reservation deposit. No commitments until your device ships.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all relative ${
                tier.popular
                  ? "bg-gradient-to-b from-cyan-950/40 via-white/[0.04] to-black/60 border-2 border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.2)] lg:-translate-y-4"
                  : "bg-white/[0.02] border border-white/10 hover:border-white/20"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-400 text-black text-[11px] font-mono font-bold tracking-widest uppercase shadow-[0_0_15px_#22d3ee]">
                  {tier.badge}
                </div>
              )}

              <div>
                {!tier.popular && (
                  <span className="text-[11px] font-mono tracking-widest uppercase text-cyan-400/80 mb-2 block">
                    {tier.badge}
                  </span>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-xs text-slate-300 mb-6 font-light leading-relaxed">
                  {tier.description}
                </p>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                    <span className="text-xs text-slate-400 line-through">{tier.retailPrice}</span>
                  </div>
                  <span className="text-xs font-mono text-cyan-300 block mt-1">
                    {tier.deposit}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectTier(tier.name, tier.depositValue)}
                className={`w-full py-4 rounded-full text-xs font-bold font-mono tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  tier.popular
                    ? "bg-gradient-to-r from-cyan-400 to-teal-300 text-black hover:brightness-110 shadow-[0_0_25px_rgba(34,211,238,0.4)]"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                }`}
              >
                <span>{tier.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Trust Guarantees */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-4 gap-6 text-center font-mono text-xs text-slate-300">
          <div className="p-4 rounded-2xl bg-white/[0.02]">
            <div className="text-cyan-400 font-bold mb-1">100% REFUNDABLE</div>
            <div>Cancel deposit anytime before shipping</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02]">
            <div className="text-cyan-400 font-bold mb-1">30-DAY TRIAL</div>
            <div>Full refund if not completely life-changing</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02]">
            <div className="text-cyan-400 font-bold mb-1">PRESCRIPTION READY</div>
            <div>Magnetic custom optical inserts available</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02]">
            <div className="text-cyan-400 font-bold mb-1">GLOBAL SHIPPING</div>
            <div>Free express insured courier delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
}
