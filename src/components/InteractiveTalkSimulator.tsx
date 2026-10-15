"use client";

import React, { useState } from "react";
import { Mic, Volume2, Send, Bot, User, RefreshCw } from "lucide-react";

interface SamplePrompt {
  id: string;
  query: string;
  aiResponse: string;
  detectedObjects: string[];
  latency: string;
}

const SAMPLE_PROMPTS: SamplePrompt[] = [
  {
    id: "keys",
    query: "Hey Eyedentify, where did I put my keys?",
    aiResponse:
      "I see your brass keychain with two keys. They are resting on the wooden coffee table to your right, approximately two feet away, next to your reading notebook.",
    detectedObjects: ["Brass Keys (98%)", "Coffee Table (99%)", "Notebook (94%)"],
    latency: "16 ms",
  },
  {
    id: "ahead",
    query: "What's directly in front of me right now?",
    aiResponse:
      "You are on a level sidewalk. Four meters ahead is a pedestrian crossing with a tactile paving curb. The pedestrian signal is currently red with 12 seconds remaining.",
    detectedObjects: ["Sidewalk (99%)", "Tactile Paving (97%)", "Red Pedestrian Signal (99%)"],
    latency: "18 ms",
  },
  {
    id: "store",
    query: "Can you read the sign of the shop across the street?",
    aiResponse:
      "The sign reads: 'Green Leaf Organic Bakery & Cafe'. The doorway has an automatic sliding glass door and no steps at the entrance.",
    detectedObjects: ["Storefront Sign (98%)", "Sliding Door (95%)", "Zero-Step Entry (92%)"],
    latency: "14 ms",
  },
  {
    id: "who",
    query: "Is someone waving at me?",
    aiResponse:
      "Yes, a person wearing a navy jacket and glasses is standing by the cafe window waving with their right hand. They have a friendly smile.",
    detectedObjects: ["Person Waving (96%)", "Navy Jacket (94%)", "Smiling Expression (89%)"],
    latency: "19 ms",
  },
];

export default function InteractiveTalkSimulator() {
  const [selectedPrompt, setSelectedPrompt] = useState<SamplePrompt>(SAMPLE_PROMPTS[0]);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [customQuery, setCustomQuery] = useState<string>("");

  const handleSelectPrompt = (prompt: SamplePrompt) => {
    setIsProcessing(true);
    setTimeout(() => {
      setSelectedPrompt(prompt);
      setIsProcessing(false);
    }, 250);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuery.trim()) return;

    setIsProcessing(true);
    setTimeout(() => {
      setSelectedPrompt({
        id: "custom",
        query: customQuery,
        aiResponse: `Based on current 3D vision: I am actively scanning your forward environment. Looking at ${customQuery.toLowerCase()}, the path is clear with zero obstacles detected in the immediate 3-meter cone.`,
        detectedObjects: ["Real-Time Surroundings (98%)", "Path Open (99%)"],
        latency: "17 ms",
      });
      setIsProcessing(false);
      setCustomQuery("");
    }, 400);
  };

  return (
    <section id="interactive-talk" className="relative z-20 py-28 px-6 sm:px-10 bg-[#090c10] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-400/20 text-rose-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Mic className="w-3.5 h-3.5" />
            <span>Real-Time Talk AI Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Speak Naturally. <br />
            <span className="bg-gradient-to-r from-rose-400 via-pink-300 to-white bg-clip-text text-transparent">
              Your AI Sees What You See.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Test the live reasoning model. Click any question below to see how Eyedentify perceives the 3D scene and formulates instant conversational audio feedback.
          </p>
        </div>

        {/* Prompt Selection Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {SAMPLE_PROMPTS.map((p) => (
            <button
              key={p.id}
              onClick={() => handleSelectPrompt(p)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-mono tracking-wide transition-all cursor-pointer ${
                selectedPrompt.id === p.id
                  ? "bg-rose-500 text-white font-semibold shadow-[0_0_20px_rgba(244,63,94,0.4)]"
                  : "bg-white/[0.05] text-slate-300 hover:bg-white/[0.1] hover:text-white border border-white/5"
              }`}
            >
              &ldquo;{p.query}&rdquo;
            </button>
          ))}
        </div>

        {/* Interactive Voice Console */}
        <div className="rounded-3xl bg-gradient-to-b from-white/[0.04] to-black/40 border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-white font-bold tracking-wider">NEURAL VISION-LANGUAGE ENGINE</span>
            </div>
            <div className="text-slate-400">
              Inference Latency: <span className="text-rose-400 font-bold">{selectedPrompt.latency}</span>
            </div>
          </div>

          {/* Dialogue Display */}
          <div className="py-8 space-y-6">
            {/* User Question */}
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-slate-300" />
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/5 max-w-2xl">
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">
                  You Asked
                </div>
                <div className="text-base text-white font-medium">&ldquo;{selectedPrompt.query}&rdquo;</div>
              </div>
            </div>

            {/* AI Response */}
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-rose-400" />
              </div>
              <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 max-w-2xl relative shadow-[0_0_30px_rgba(244,63,94,0.1)]">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-rose-400 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                    Spatial Bone Conduction Speech
                  </span>
                  <span>Audio Stream Active</span>
                </div>

                {isProcessing ? (
                  <div className="flex items-center gap-2 text-slate-400 font-mono text-sm py-2">
                    <RefreshCw className="w-4 h-4 animate-spin text-rose-400" />
                    <span>Processing 3D visual scene...</span>
                  </div>
                ) : (
                  <div className="text-base sm:text-lg text-slate-100 font-light leading-relaxed">
                    &ldquo;{selectedPrompt.aiResponse}&rdquo;
                  </div>
                )}

                {/* Detected Objects Tags */}
                <div className="mt-4 pt-3 border-t border-rose-500/20 flex flex-wrap gap-2 items-center">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mr-1">
                    Visual Detections:
                  </span>
                  {selectedPrompt.detectedObjects.map((obj, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-rose-500/15 text-rose-300 border border-rose-500/20"
                    >
                      {obj}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Ask Your Own Question Form */}
          <form onSubmit={handleCustomSubmit} className="pt-6 border-t border-white/10 flex gap-3">
            <input
              type="text"
              value={customQuery}
              onChange={(e) => setCustomQuery(e.target.value)}
              placeholder="Ask anything (e.g. 'Is the crosswalk light green?', 'Where is the door?')..."
              className="flex-1 bg-white/[0.05] border border-white/10 rounded-2xl px-5 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-400 transition-colors font-mono"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl bg-rose-500 hover:bg-rose-600 active:scale-95 text-white font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(244,63,94,0.3)]"
            >
              <span>Ask AI</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
