"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "How does bone conduction audio work? Can people around me hear it?",
    a: "Eyedentify uses patented dual-transducer bone conduction pads located discreetly on the temple tips. Vibrations pass directly into the inner ear through the temporal bones. The acoustic leakage is virtually imperceptible to bystanders (less than 25dB at 1 meter), while leaving your ear canals 100% unobstructed so you can safely hear ambient street sounds and conversations.",
  },
  {
    q: "Does Eyedentify require an internet or cellular connection to function?",
    a: "No. All core safety modes—including Real-Time Obstacle Detection, Instant Reading OCR, and Payment Currency Verification—run 100% offline on the built-in Neural SoC. You have uninterrupted independence in subways, remote trails, or flights with zero cloud latency and total privacy.",
  },
  {
    q: "Can I wear Eyedentify with my existing prescription glasses?",
    a: "Yes. Eyedentify features an ultra-precise magnetic lens snap-in system. When placing your pre-order or upon delivery, you can provide your optometry prescription, and our laboratory will fabricate custom anti-reflective corrective inserts that clip directly into the frame.",
  },
  {
    q: "How long does the battery last on a single charge?",
    a: "The balanced lithium-polymer battery matrix delivers up to 16 hours of active mixed-mode navigation. The included magnetic braided fast-charger replenishes 80% battery capacity in just 35 minutes. An optional 10,000mAh charging vault extends runtime for up to 5 full recharge cycles.",
  },
  {
    q: "Is Eyedentify eligible for insurance coverage or non-profit grants?",
    a: "Yes. In the United States and Canada, Eyedentify qualifies under assistive technology reimbursement codes. Eligible veterans (VA), vocational rehabilitation clients, and individuals covered by specific health plans can receive up to 100% grant coverage. Our dedicated accessibility team assists with all paperwork.",
  },
  {
    q: "What is your refund and trial policy?",
    a: "All pre-order reservation deposits are 100% refundable at any time prior to shipping with a single click. Furthermore, once your Eyedentify One arrives, you are protected by our 30-Day In-Home Mobility Trial: if you are not completely satisfied, return it for a full 100% refund.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative z-20 py-28 px-6 sm:px-10 bg-[#090c10] text-white border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Answers & Assurance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-300 font-light">
            Everything you need to know about everyday wear, battery, prescriptions, and trial guarantees.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-medium text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed font-light border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
