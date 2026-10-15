"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Lenis from "lenis";
import { Sparkles, ArrowDown } from "lucide-react";

const TOTAL_FRAMES = 60;
const BG_COLOR = "#9c9da0";

export default function EyedentifyScrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [heroOpacity, setHeroOpacity] = useState<number>(1);

  // Smooth momentum physics tracking
  const targetProgressRef = useRef<number>(0);
  const currentProgressRef = useRef<number>(0);
  const lastDrawnFrameRef = useRef<number>(-1);
  const rafIdRef = useRef<number | null>(null);

  // Draw frame to canvas with contain fit and background matching
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || img.naturalWidth === 0) return;

    const width = canvas.width;
    const height = canvas.height;

    // Fill background
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, width, height);

    // Contain fit calculation (1280 x 720 native)
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = width / height;

    let drawW: number, drawH: number, drawX: number, drawY: number;

    if (canvasAspect > imgAspect) {
      drawW = width;
      drawH = drawW / imgAspect;
      drawX = 0;
      drawY = (height - drawH) / 2;
    } else {
      drawH = height;
      drawW = drawH * imgAspect;
      drawX = (width - drawW) / 2;
      drawY = 0;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
    lastDrawnFrameRef.current = frameIndex;
  }, []);

  // Update canvas pixel dimensions matching viewport & DPR
  const updateCanvasDimensions = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const newWidth = Math.round(window.innerWidth * dpr);
    const newHeight = Math.round(window.innerHeight * dpr);

    if (canvas.width !== newWidth || canvas.height !== newHeight) {
      canvas.width = newWidth;
      canvas.height = newHeight;
    }
  }, []);

  // Preload and asynchronously decode all 60 frames into GPU memory
  useEffect(() => {
    let isCancelled = false;
    const imgs: HTMLImageElement[] = [];
    let loaded = 0;

    const loadImages = async () => {
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const img = new Image();
        const paddedIndex = i.toString().padStart(3, "0");
        img.src = `/frames/frame_${paddedIndex}.webp`;

        const handleLoad = async () => {
          if (isCancelled) return;
          try {
            if ("decode" in img) {
              await img.decode();
            }
          } catch {
            // silent catch
          }

          loaded++;
          setLoadedCount(loaded);

          if (i === 0 && !imagesRef.current[0]) {
            imagesRef.current[0] = img;
            updateCanvasDimensions();
            drawFrame(0);
          }

          if (loaded === TOTAL_FRAMES) {
            imagesRef.current = imgs;
            updateCanvasDimensions();
            drawFrame(0);
            setTimeout(() => setIsReady(true), 150);
          }
        };

        img.onload = handleLoad;
        img.onerror = () => {
          img.src = `/frames/frame_${paddedIndex}.jpg`;
          img.onload = handleLoad;
        };

        imgs[i] = img;
      }
    };

    loadImages();

    return () => {
      isCancelled = true;
    };
  }, [drawFrame, updateCanvasDimensions]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      updateCanvasDimensions();
      if (lastDrawnFrameRef.current >= 0) {
        drawFrame(lastDrawnFrameRef.current);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateCanvasDimensions, drawFrame]);

  // Lenis smooth inertial scrolling integration
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.5,
      infinite: false,
    });

    const onLenisScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const maxScroll = container.offsetHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const rawProgress = Math.min(Math.max(-rect.top / maxScroll, 0), 1);
      targetProgressRef.current = rawProgress;
    };

    lenis.on("scroll", onLenisScroll);

    let rafId: number;
    const rafLoop = (time: number) => {
      lenis.raf(time);

      // Smooth damped lerp
      const diff = targetProgressRef.current - currentProgressRef.current;
      currentProgressRef.current += diff * 0.12;

      const p = currentProgressRef.current;
      const targetFrame = Math.max(
        0,
        Math.min(TOTAL_FRAMES - 1, Math.round(p * (TOTAL_FRAMES - 1)))
      );

      if (targetFrame !== lastDrawnFrameRef.current) {
        drawFrame(targetFrame);
      }

      // Smoothly fade hero title as user begins scrolling
      const heroVal = Math.max(0, 1 - p * 6);
      setHeroOpacity(heroVal);

      rafId = requestAnimationFrame(rafLoop);
    };

    rafId = requestAnimationFrame(rafLoop);
    rafIdRef.current = rafId;

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, [drawFrame]);

  return (
    <div className="relative w-full bg-[#9c9da0]">
      {/* Minimal preloader */}
      {!isReady && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#9c9da0] select-none">
          <div className="w-36 bg-black/10 rounded-full h-1 overflow-hidden">
            <div
              className="h-full bg-black/60 transition-all duration-150"
              style={{ width: `${Math.round((loadedCount / TOTAL_FRAMES) * 100)}%` }}
            />
          </div>
        </div>
      )}

      {/* 450vh scroll container for smooth, deep scroll interaction */}
      <div ref={containerRef} className="relative w-full h-[450vh] bg-[#9c9da0]">
        {/* Sticky viewport pinned to screen */}
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[#9c9da0]">
          <canvas
            ref={canvasRef}
            className="w-full h-full block"
            style={{ width: "100%", height: "100%" }}
          />

          {/* Minimal Hero Header at scroll 0 that softly fades on first scroll */}
          {heroOpacity > 0.01 && (
            <div
              style={{ opacity: heroOpacity }}
              className="absolute inset-0 flex flex-col items-center justify-between pointer-events-none p-6 pt-28 pb-12 text-center select-none"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/10 backdrop-blur-md text-black/80 text-xs font-mono tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>AI Glasses for the Visually Impaired</span>
              </div>

              <div className="max-w-2xl">
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-black/90 uppercase mb-3">
                  EYEDENTIFY ONE
                </h1>
                <p className="text-sm sm:text-base text-black/60 font-light max-w-lg mx-auto">
                  Scroll to inspect the disassembling 3D bionic architecture and explore the intelligence modes below.
                </p>
              </div>

              <div className="flex flex-col items-center gap-1.5 text-black/50 font-mono text-[11px] uppercase tracking-widest animate-bounce">
                <span>Scroll Down To Explore</span>
                <ArrowDown className="w-4 h-4 text-black/70" />
              </div>
            </div>
          )}
        </div>

        {/* Seamless bottom gradient transition melting studio background into dark content below */}
        <div
          className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent to-[#0e1217] pointer-events-none z-10"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
