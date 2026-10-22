"use client";

import React from "react";
import { Check, Sparkles, ArrowRight, Cpu } from "lucide-react";

interface PricingProps {
  onSelectTier: (tierName: string, depositAmount: string) => void;
}

const TIERS = [
  {
    name: "Pioneer Batch (India Early Access)",
    badge: "Batch #1 Early Access",
    price: "₹9,999",
    retailPrice: "₹14,999",
    aiSub: "+ ₹200 – ₹400 / month for AI cloud usage",
    deposit: "₹999 Refundable Reservation Token",
    depositValue: "₹999",
    description: "Radically affordable bionic smart glasses engineered for everyday independence across India.",
    features: [
      "Eyedentify One Titanium Smart Glasses",
      "Breakthrough Price: ₹9,999 (vs ₹2.5L–₹4L for foreign imports)",
      "Transparent Cost: ₹3,000 current BOM // ~₹5,000 final production",
      "Minimal AI Usage Fee: Only ₹200 – ₹400/month",
      "Indian Street Hazard & Pothole Navigation",
      "UPI QR Code & Indian Banknote Reader (₹10 – ₹500)",
      "Indian Regional Languages (Hindi, Tamil, Telugu, Marathi, Bengali & more)",
      "Magnetic fast-charging cable & protective hardshell case",
      "1-Year Pan-India replacement warranty",
    ],
    popular: false,
    cta: "Reserve For ₹999",
  },
  {
    name: "Annual Independence Bundle",
    badge: "Most Popular in India",
    price: "₹12,499",
    retailPrice: "₹19,999",
    aiSub: "Includes 1 Full Year Unlimited AI Usage (~₹200/mo)",
    deposit: "₹1,499 Refundable Reservation Token",
    depositValue: "₹1,499",
    description: "Complete peace-of-mind bundle with hardware, a full year of AI cloud vision, and custom optical lenses.",
    features: [
      "Everything included in Pioneer Batch",
      "Full 12 Months of Unlimited AI Cloud Vision included",
      "Zero monthly recharge hassle for an entire year",
      "Custom magnetic prescription optical insert included",
      "Priority Batch #1 dispatch across all Indian PIN codes",
      "Dedicated 24/7 WhatsApp & voice concierge support in your native language",
      "Lifetime OTA firmware & Indian dialect model updates",
    ],
    popular: true,
    cta: "Reserve Annual Bundle",
  },
  {
    name: "NGO & CSR Subsidized Grant",
    badge: "Community Initiative",
    price: "₹0 Out-of-Pocket",
    retailPrice: "100% Subsidized",
    aiSub: "Free / Subsidized AI usage through partner funds",
    deposit: "Free Eligibility Verification",
    depositValue: "₹0",
    description: "Dedicated access program for visually impaired students and low-income individuals across India.",
    features: [
      "Full Eyedentify One hardware suite",
      "Sponsored via CSR foundations and disability welfare organizations",
      "Free AI usage & cloud processing coverage",
      "Vernacular audio orientation & local mobility mentor support",
      "Full documentation assistance for disability assistive schemes",
      "Peer community network & vocational accessibility training",
    ],
    popular: false,
    cta: "Apply For Subsidized Grant",
  },
];

export default function PricingSection({ onSelectTier }: PricingProps) {
  return (
    <section id="pricing" className="relative z-20 py-28 px-6 sm:px-10 bg-[#0e1217] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Radical Affordability // Engineered For India</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Independence for Every Indian. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-white bg-clip-text text-transparent">
              Transparent & Truly Affordable.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Assistive vision should never cost ₹2,50,000 to ₹4,00,000. We built Eyedentify with an honest, sustainable Indian business model to bring bionic vision to every family who needs it.
          </p>
        </div>

        {/* Transparent Cost Breakdown & Business Model Banner */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-cyan-950/30 via-slate-900/60 to-black/80 border border-cyan-500/30 shadow-[0_0_60px_rgba(6,182,212,0.15)]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-left">
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-2 font-bold">
                <Cpu className="w-4 h-4" />
                <span>Our Transparent Unit Economics</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                How We Make Bionic Vision 30x More Affordable
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Imported assistive glasses charge exorbitant luxury margins. We publish our numbers with complete integrity:
                our current prototype making cost is <span className="text-cyan-300 font-semibold">₹3,000 in total</span>, and our full-fledged industrial final production unit will cost us approximately <span className="text-cyan-300 font-semibold">₹5,000</span>.
                We retail the device at <span className="text-emerald-400 font-semibold">₹9,999</span>, paired with a minimal monthly AI usage fee of <span className="text-cyan-300 font-semibold">₹200 – ₹400</span> for continuous neural vision processing.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto font-mono">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Current BOM Cost</span>
                <span className="text-2xl font-extrabold text-cyan-400">₹3,000</span>
                <span className="text-[10px] text-slate-500 block mt-1">Prototype Unit</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Final Making Cost</span>
                <span className="text-2xl font-extrabold text-cyan-300">~₹5,000</span>
                <span className="text-[10px] text-slate-500 block mt-1">Full-Fledged Final</span>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-500/15 border border-cyan-400/40 text-center shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <span className="text-[10px] text-cyan-300 uppercase tracking-widest block mb-1 font-bold">Selling Price</span>
                <span className="text-2xl font-extrabold text-white">₹9,999</span>
                <span className="text-[10px] text-emerald-400 font-bold block mt-1">One-Time Device</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">AI Usage Fee</span>
                <span className="text-xl font-extrabold text-teal-300">₹200–₹400</span>
                <span className="text-[10px] text-slate-400 block mt-1">per month</span>
              </div>
            </div>
          </div>
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
                  <div className="text-xs font-mono text-teal-300 font-medium mt-1">
                    {tier.aiSub}
                  </div>
                  <span className="text-xs font-mono text-cyan-300 block mt-1.5 font-semibold">
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
            <div className="text-cyan-400 font-bold mb-1">100% REFUNDABLE TOKEN</div>
            <div>Cancel pre-order reservation anytime before dispatch</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02]">
            <div className="text-cyan-400 font-bold mb-1">30-DAY MOBILITY TRIAL</div>
            <div>Full refund if it does not transform your daily routine</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02]">
            <div className="text-cyan-400 font-bold mb-1">DESIGNED FOR INDIA</div>
            <div>Tuned for potholes, monsoons, UPI QR & Indian notes</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02]">
            <div className="text-cyan-400 font-bold mb-1">FREE PAN-INDIA DELIVERY</div>
            <div>Insured priority dispatch across all Indian PIN codes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
