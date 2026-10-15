"use client";

import React, { useState } from "react";
import { X, CheckCircle, ShieldCheck, Sparkles } from "lucide-react";

interface PreorderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTier?: string;
  depositAmount?: string;
}

export default function PreorderModal({
  isOpen,
  onClose,
  initialTier = "Eyedentify Pro + Care",
  depositAmount = "$149",
}: PreorderModalProps) {
  const [tier, setTier] = useState<string>(initialTier);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [country, setCountry] = useState<string>("United States");
  const [prescriptionNeeded, setPrescriptionNeeded] = useState<string>("no");
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [orderCode, setOrderCode] = useState<string>("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = "EYE-" + Math.floor(100000 + Math.random() * 900000);
    setOrderCode(randomCode);
    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0d1117] border border-cyan-500/30 p-8 shadow-[0_0_80px_rgba(6,182,212,0.25)] text-white">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!confirmed ? (
          <div>
            <div className="flex items-center gap-2 mb-2 text-cyan-400 text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Priority Pre-Order Reservation</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Reserve Eyedentify One
            </h3>
            <p className="text-xs text-slate-300 mb-6 font-light">
              Lock in early batch pricing with a 100% refundable reservation deposit. No charges until batch production verification.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-slate-300 uppercase tracking-wider mb-1.5">
                  Selected Edition
                </label>
                <select
                  value={tier}
                  onChange={(e) => setTier(e.target.value)}
                  className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="Pioneer Edition" className="bg-[#0d1117]">Pioneer Edition ($99 Deposit)</option>
                  <option value="Eyedentify Pro + Care" className="bg-[#0d1117]">Eyedentify Pro + Care ($149 Deposit)</option>
                  <option value="Healthcare & Grants" className="bg-[#0d1117]">Healthcare & Grants ($0 Deposit Verification)</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 uppercase tracking-wider mb-1.5">
                    Country
                  </label>
                  <input
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 uppercase tracking-wider mb-1.5">
                    Prescription Lenses?
                  </label>
                  <select
                    value={prescriptionNeeded}
                    onChange={(e) => setPrescriptionNeeded(e.target.value)}
                    className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="no" className="bg-[#0d1117]">Not Required</option>
                    <option value="yes" className="bg-[#0d1117]">Yes, Custom Rx</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>256-Bit Encrypted. 100% Refundable at any time.</span>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3.5 rounded-full text-xs font-bold font-mono tracking-widest uppercase text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_25px_rgba(34,211,238,0.4)] cursor-pointer"
              >
                Confirm Reservation ({depositAmount})
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-emerald-400" />
            </div>

            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
              Reservation Confirmed
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Welcome to the Pioneer Cohort
            </h3>
            <p className="text-sm text-slate-300 mb-6 font-light">
              Thank you, <span className="text-white font-medium">{name}</span>. A confirmation package has been sent to <span className="text-cyan-300">{email}</span>.
            </p>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 mb-8 font-mono text-left">
              <div className="flex justify-between text-xs py-1 border-b border-white/10">
                <span className="text-slate-400">Order ID:</span>
                <span className="text-cyan-400 font-bold">{orderCode}</span>
              </div>
              <div className="flex justify-between text-xs py-1 border-b border-white/10">
                <span className="text-slate-400">Edition:</span>
                <span className="text-white">{tier}</span>
              </div>
              <div className="flex justify-between text-xs py-1">
                <span className="text-slate-400">Estimated Delivery:</span>
                <span className="text-emerald-400 font-bold">Batch 1 (Q1 2027)</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-full text-xs font-bold font-mono tracking-widest uppercase text-black bg-cyan-400 hover:bg-cyan-300 transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
