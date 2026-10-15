"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import EyedentifyScrollytelling from "@/components/EyedentifyScrollytelling";
import ModesShowcase from "@/components/ModesShowcase";
import InteractiveTalkSimulator from "@/components/InteractiveTalkSimulator";
import HardwareSpecs from "@/components/HardwareSpecs";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import PreorderModal from "@/components/PreorderModal";

export default function Home() {
  const [preorderOpen, setPreorderOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState("Eyedentify Pro + Care");
  const [selectedDeposit, setSelectedDeposit] = useState("$149");

  const handleOpenPreorder = (tier = "Eyedentify Pro + Care", deposit = "$149") => {
    setSelectedTier(tier);
    setSelectedDeposit(deposit);
    setPreorderOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#0e1217] text-white selection:bg-cyan-500/30 selection:text-white">
      {/* Global Navigation Header */}
      <Navbar onOpenPreorder={() => handleOpenPreorder()} />

      {/* 3D Scrollytelling Section */}
      <EyedentifyScrollytelling />

      {/* Core Intelligence Modes: Detection, Reading, Payment, Navigation, Talk */}
      <ModesShowcase />

      {/* Real-time Conversational Talk AI Interactive Simulator */}
      <InteractiveTalkSimulator />

      {/* Engineering & Hardware Architecture */}
      <HardwareSpecs />

      {/* Pricing & Commercial Pre-Order */}
      <PricingSection onSelectTier={handleOpenPreorder} />

      {/* Comprehensive FAQs & Policies */}
      <FAQSection />

      {/* Global Footer */}
      <Footer />

      {/* Interactive Reservation Modal */}
      <PreorderModal
        isOpen={preorderOpen}
        onClose={() => setPreorderOpen(false)}
        initialTier={selectedTier}
        depositAmount={selectedDeposit}
      />
    </main>
  );
}
