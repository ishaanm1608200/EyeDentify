"use client";

import React, { useState } from "react";
import {
  Radar,
  BookOpen,
  CreditCard,
  Navigation,
  Mic,
  Volume2,
  CheckCircle2,
  Sparkles,
  Scan,
} from "lucide-react";

interface ModeData {
  id: string;
  name: string;
  tagline: string;
  icon: React.ElementType;
  color: string;
  badge: string;
  description: string;
  highlights: string[];
  acousticSample: string;
  visualSimulation: {
    status: string;
    hudText: string;
    metrics: { label: string; value: string }[];
  };
}

const MODES: ModeData[] = [
  {
    id: "detection",
    name: "Real-Time Detection Mode",
    tagline: "Sub-Millimeter Spatial Hazard Perception",
    icon: Radar,
    color: "from-cyan-500 to-blue-600",
    badge: "120 FPS Depth Stream",
    description:
      "Constantly scans the 3D environment using dual 120° wide-angle cameras and infrared depth sensors. Instantly identifies drop-offs, construction obstacles, approaching vehicles, overhead tree branches, and staircases.",
    highlights: [
      "Dynamic obstacle velocity calculation with 18ms alert latency",
      "Directional 3D binaural clicks that intuitively locate hazards in physical space",
      "Staircase elevation & curb drop-off height detection",
      "Pedestrian crossing & traffic light green/red tone verification",
    ],
    acousticSample: "Soft haptic pulse on left temple + directional click at 10 o'clock: 'Stairs descending 3 steps ahead.'",
    visualSimulation: {
      status: "OBSTACLE TRACKING ACTIVE",
      hudText: "Staircase detected: -14cm depth at 1.8m distance",
      metrics: [
        { label: "Latency", value: "14 ms" },
        { label: "FOV Angle", value: "120°" },
        { label: "Precision", value: "±4 mm" },
      ],
    },
  },
  {
    id: "reading",
    name: "Instant Reading Mode",
    tagline: "Any Printed or Digital Text Spoken at Your Pace",
    icon: BookOpen,
    color: "from-emerald-500 to-teal-600",
    badge: "40+ Languages Supported",
    description:
      "Transform books, restaurant menus, medication prescription labels, flight departure boards, and street signs into crystal-clear synthesized human speech right in your ear.",
    highlights: [
      "Guided finger-pointing: point to any paragraph to read just that section",
      "Automatic font size and curved surface correction (bottles, cans)",
      "Multi-column newspaper layout parsing and structured table understanding",
      "Instant translation across 40+ global languages completely on-device",
    ],
    acousticSample: "Natural cadence voice: 'Prescription: Take one capsule daily with water after meals.'",
    visualSimulation: {
      status: "OCR TEXT STREAM RECOGNIZED",
      hudText: "Reading: 'Terminal 4 - Gate B22 boarding in 15 mins'",
      metrics: [
        { label: "Read Speed", value: "1.0x - 3.5x" },
        { label: "Accuracy", value: "99.4%" },
        { label: "Offline OCR", value: "100%" },
      ],
    },
  },
  {
    id: "payment",
    name: "Payment & Currency Mode",
    tagline: "Independent Transactions Without Vulnerability",
    icon: CreditCard,
    color: "from-amber-500 to-orange-600",
    badge: "Currency & QR Intelligence",
    description:
      "Hold up any bill or invoice to receive immediate confirmation of the denomination. Automatically detects merchant QR payment codes, card POS terminals, and change calculation.",
    highlights: [
      "Recognizes crumpled, folded, or low-light currency banknotes",
      "Supports USD, EUR, GBP, INR, JPY, CAD, AUD and 30+ regional currencies",
      "Guides hand orientation directly onto POS card tap-to-pay zones",
      "Counterfeit watermark verification and bill total summation",
    ],
    acousticSample: "Chime + discrete acoustic confirmation: 'Twenty Dollar Bill recognized. Total received: $50.'",
    visualSimulation: {
      status: "BILL DENOMINATION CONFIRMED",
      hudText: "Detected Banknote: $20 USD (Crisp, Genuine)",
      metrics: [
        { label: "Currencies", value: "35+" },
        { label: "QR Decode", value: "< 50ms" },
        { label: "Privacy", value: "Zero Cloud Logs" },
      ],
    },
  },
  {
    id: "navigation",
    name: "AI Navigation Mode",
    tagline: "Acoustic Wayfinding For Indoors & Outdoors",
    icon: Navigation,
    color: "from-purple-500 to-indigo-600",
    badge: "Centimeter Bionic Guidance",
    description:
      "Unlike standard GPS that fails indoors, Eyedentify combines dual-frequency GNSS, visual inertial odometry, and spatial beacons to guide you through subway stations, shopping malls, and unfamiliar cities.",
    highlights: [
      "Indoor pathfinding directly to elevator buttons, restrooms, and store entrances",
      "Subway platform edge warnings with high-priority audio beacon",
      "Spatial acoustic breadcrumbs: sound feels like a friendly chime waiting ahead on the path",
      "Public transit live arrival updates and bus number identification",
    ],
    acousticSample: "Spatial acoustic ping 4 meters ahead: 'Follow the acoustic beacon. Entrance door on your right.'",
    visualSimulation: {
      status: "SPATIAL WAYFINDING ACTIVE",
      hudText: "Turn right in 8 meters toward Platform 2 elevator",
      metrics: [
        { label: "Outdoor GPS", value: "±0.5 m" },
        { label: "Indoor VIO", value: "Centimeter" },
        { label: "Transit Maps", value: "Global" },
      ],
    },
  },
  {
    id: "talk",
    name: "Talk Mode (Conversational AI)",
    tagline: "Real-Time Multi-Modal AI Companion",
    icon: Mic,
    color: "from-rose-500 to-pink-600",
    badge: "Sub-20ms Voice AI",
    description:
      "Have a natural, hands-free conversation with an AI that sees what you see. Simply ask questions like 'Where did I leave my coffee cup?', 'Who is waving at me?', or 'Describe this painting in detail.'",
    highlights: [
      "Full scene comprehension running on a low-latency Vision-Language Model",
      "Natural conversational flow with continuous interruption and follow-up support",
      "Facial recognition to announce familiar friends and colleagues discretely",
      "Emotion and social context cues: smiles, nodding, hand gestures",
    ],
    acousticSample: "Warm conversational voice: 'Your coffee is on the kitchen counter to your right, about 2 feet away.'",
    visualSimulation: {
      status: "LIVE CONVERSATIONAL REASONING",
      hudText: "Query: 'Where is my mug?' -> Located at (x: 42cm, y: 15cm)",
      metrics: [
        { label: "VLM Size", value: "4-Bit Local" },
        { label: "Voice Sync", value: "Ultra-Low Latency" },
        { label: "Personalized", value: "Face Memory" },
      ],
    },
  },
];

export default function ModesShowcase() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const activeMode = MODES[activeTab];

  return (
    <section id="modes" className="relative z-20 py-28 px-6 sm:px-10 bg-[#0e1217] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Autonomous Intelligence Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Five Purpose-Built Modes. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-white bg-clip-text text-transparent">
              Total Everyday Independence.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Eyedentify adapts instantaneously to your environment. Switch modes hands-free via tactile temple tap or simple voice command.
          </p>
        </div>

        {/* Mode Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-12">
          {MODES.map((mode, index) => {
            const Icon = mode.icon;
            const isSelected = activeTab === index;
            return (
              <button
                key={mode.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-mono tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? "bg-white text-black font-bold shadow-[0_0_25px_rgba(255,255,255,0.3)] scale-105"
                    : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white border border-white/5"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-cyan-600" : "text-cyan-400"}`} />
                <span>{mode.name.split(" ")[0]} Mode</span>
              </button>
            );
          })}
        </div>

        {/* Active Mode Showcase Panel */}
        <div className="relative rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-widest bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 uppercase">
                  {activeMode.badge}
                </span>
                <span className="text-xs font-mono text-slate-400 tracking-wider">
                  0{activeTab + 1} {"// 05"}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {activeMode.name}
              </h3>
              <p className="text-cyan-300 font-mono text-sm tracking-wide">
                {activeMode.tagline}
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeMode.description}
              </p>

              {/* Highlights Checklist */}
              <div className="space-y-3 pt-2">
                {activeMode.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 leading-normal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Acoustic Sample Callout */}
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-start gap-3">
                <Volume2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 mb-1">
                    What You Hear (Bone-Conduction Audio)
                  </div>
                  <div className="text-xs sm:text-sm italic text-slate-200">
                    &ldquo;{activeMode.acousticSample}&rdquo;
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Simulation HUD */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#080b0e] border border-cyan-500/30 p-6 relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)]">
                {/* HUD Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-white font-semibold">{activeMode.visualSimulation.status}</span>
                  </div>
                  <span className="text-cyan-400">AI TELEMETRY</span>
                </div>

                {/* HUD Live Output Simulation */}
                <div className="my-8 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-300 uppercase mb-2">
                    <Scan className="w-3.5 h-3.5" />
                    <span>Real-Time Sensor Interpretation</span>
                  </div>
                  <div className="text-sm sm:text-base font-mono text-white font-medium leading-relaxed">
                    &ldquo;{activeMode.visualSimulation.hudText}&rdquo;
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 font-mono text-center">
                  {activeMode.visualSimulation.metrics.map((m, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-white/[0.02]">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                        {m.label}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-cyan-300">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Corner Decorative Crosshairs */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-cyan-500/50" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-cyan-500/50" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-cyan-500/50" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-cyan-500/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
