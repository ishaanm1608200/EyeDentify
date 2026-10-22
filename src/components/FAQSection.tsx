"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "Who is Eyedentify built for, and how is it customized for India?",
    a: "Eyedentify is specifically engineered for millions of visually impaired and low-vision Indians. Unlike Western devices built for organized grid sidewalks, Eyedentify's spatial computer vision is trained for dynamic Indian environments—detecting open drains, uneven footpaths, potholes, stray animals, auto-rickshaws, and crowded metro stations. Furthermore, it recognizes Indian Rupee banknotes (₹10 to ₹500), scans UPI QR codes (GPay, PhonePe, Paytm), and provides voice guidance in Indian languages including Hindi, Tamil, Telugu, Marathi, Bengali, and English.",
  },
  {
    q: "Why is Eyedentify priced at ₹9,999 when foreign alternatives cost ₹2,50,000 to ₹4,00,000?",
    a: "Existing smart glasses (like OrCam or Envision) are imported, heavily marked up, and cost upwards of ₹2.5 to 4 Lakhs—putting them out of reach for 99% of Indians. We believe assistive technology is a fundamental human right, not a luxury. Our unit economics are 100% transparent: our current prototype making cost (Bill of Materials) is just ₹3,000 in total, and our full-fledged industrial final production unit will cost around ₹5,000 to manufacture. By designing directly in India and eliminating distributor markups, we can sustainably retail the device for just ₹9,999.",
  },
  {
    q: "What is your business model, and why is there a ₹200 – ₹400 / month AI usage cost?",
    a: "Our business model separates hardware from cloud intelligence to make the glasses radically affordable. You buy the physical device for an accessible one-time price of ₹9,999. The minimal ₹200 to ₹400 monthly fee covers continuous high-performance cloud AI inference (state-of-the-art vision-language models, conversational Talk AI, multi-lingual Indian speech synthesis, and OTA feature upgrades). It works out to just ₹7–₹13 a day—the cost of a cup of chai—ensuring your glasses continually get smarter over time.",
  },
  {
    q: "How does bone conduction audio work? Can people around me hear it?",
    a: "Eyedentify uses discreet dual-transducer bone conduction pads on the temple tips that transmit audio vibrations directly through your cheekbones into the inner ear. Acoustic leakage to bystanders is virtually zero, while leaving your ear canals 100% open so you can safely hear ambient Indian traffic, horn signals, and conversations around you.",
  },
  {
    q: "Does Eyedentify work offline without internet?",
    a: "Yes! Core life-safety features—such as Real-Time Obstacle & Pothole Detection, Instant Reading OCR, and Indian Banknote Identification—run 100% locally on the embedded neural processor with sub-18ms latency. An internet connection is only utilized for deep conversational queries in Talk AI Mode and cloud translation.",
  },
  {
    q: "Can I wear Eyedentify with my prescription lenses?",
    a: "Yes. Eyedentify features an ultra-lightweight magnetic optical snap-in frame. You can submit your optometry prescription during reservation or after delivery, and custom anti-reflective corrective lenses will be fabricated to clip seamlessly behind the smart frame.",
  },
  {
    q: "How long does the battery last, and how do I recharge it?",
    a: "The dual-cell lithium battery provides up to 16 hours of continuous active navigation. The magnetic braided fast-charger charges the glasses from 0 to 80% in just 35 minutes via any standard USB-C phone charger or power bank.",
  },
  {
    q: "What is your pre-order reservation and refund policy?",
    a: "The pre-order reservation token (₹999) is 100% refundable at any time before dispatch with a single tap. Once your glasses arrive, you also get our 30-Day In-Home Mobility Guarantee: if Eyedentify does not significantly enhance your daily independence, return it for a complete 100% refund.",
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
            <span>Answers & Integrity</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-300 font-light">
            Everything you need to know about our Indian-first engineering, pricing breakdown, AI subscription, and warranty.
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
