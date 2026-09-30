"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ParallaxStickers() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const scrollTriggerCommon = (scrubSpeed: number) => ({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: scrubSpeed,
      });

      // Midground floating cards parallax
      gsap.to(".sticker-tarot-1", {
        yPercent: -70,
        rotation: 16,
        ease: "none",
        scrollTrigger: scrollTriggerCommon(1.2),
      });

      gsap.to(".sticker-tarot-2", {
        yPercent: -60,
        rotation: -18,
        ease: "none",
        scrollTrigger: scrollTriggerCommon(1.5),
      });

      gsap.to(".sticker-tarot-3", {
        yPercent: -75,
        rotation: 14,
        ease: "none",
        scrollTrigger: scrollTriggerCommon(1),
      });

      gsap.to(".sticker-tarot-4", {
        yPercent: -65,
        rotation: -15,
        ease: "none",
        scrollTrigger: scrollTriggerCommon(1.8),
      });

      // Background celestial constellations & astrolabes
      gsap.to(".sticker-constellation-draco", {
        yPercent: -35,
        rotation: -10,
        ease: "none",
        scrollTrigger: scrollTriggerCommon(2),
      });

      gsap.to(".sticker-astrolabe", {
        yPercent: -45,
        rotation: 55,
        ease: "none",
        scrollTrigger: scrollTriggerCommon(2.5),
      });

      gsap.to(".sticker-constellation-ursa", {
        yPercent: -40,
        rotation: 15,
        ease: "none",
        scrollTrigger: scrollTriggerCommon(1.6),
      });

      // Foreground fast sparkles & golden light streaks
      gsap.to(".sticker-streak-1", {
        yPercent: -120,
        xPercent: 10,
        opacity: 0.7,
        ease: "none",
        scrollTrigger: scrollTriggerCommon(0.8),
      });

      gsap.to(".sticker-streak-2", {
        yPercent: -130,
        xPercent: -15,
        opacity: 0.75,
        ease: "none",
        scrollTrigger: scrollTriggerCommon(0.9),
      });

      gsap.to(".sticker-sun-emblem", {
        yPercent: -50,
        rotation: 70,
        ease: "none",
        scrollTrigger: scrollTriggerCommon(1.4),
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="parallax-canvas" aria-hidden="true">
      {/* SVG Defs for Metallic Gold Gradients */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fcedc5" />
            <stop offset="25%" stopColor="#dfb755" />
            <stop offset="50%" stopColor="#c59738" />
            <stop offset="75%" stopColor="#fff2d1" />
            <stop offset="100%" stopColor="#966e1d" />
          </linearGradient>

          <linearGradient id="goldGleamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff7e0" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#dfb755" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#875e11" stopOpacity="0.1" />
          </linearGradient>

          <radialGradient id="lightStreakGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fae4b0" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#cfa339" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#050506" stopOpacity="0" />
          </radialGradient>

          <filter id="goldShine" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#dfb755" floodOpacity="0.45" />
          </filter>
        </defs>
      </svg>

      {/* Layer 1: Background - Draco Constellation (Tiền Kiếp Draconic) */}
      <div
        className="floating-sticker sticker-constellation-draco opacity-15 sm:opacity-30 top-[12%] left-[1%] sm:left-[2%] w-[200px] sm:w-[240px] md:w-[320px] ambient-pulse pointer-events-none"
        style={{ transformOrigin: "center center" }}
      >
        <svg viewBox="0 0 300 300" fill="none" className="w-full h-auto">
          {/* Constellation lines */}
          <path
            d="M 30 240 L 75 195 L 120 210 L 170 160 L 210 175 L 245 125 L 220 70 L 255 45 L 275 80 L 245 125"
            stroke="url(#goldMetallic)"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            opacity="0.6"
          />
          {/* Star nodes */}
          <circle cx="30" cy="240" r="3.5" fill="#fff5db" filter="url(#goldShine)" />
          <circle cx="75" cy="195" r="4" fill="#eed083" />
          <circle cx="120" cy="210" r="3" fill="#ffffff" />
          <circle cx="170" cy="160" r="4.5" fill="#fcedc5" filter="url(#goldShine)" />
          <circle cx="210" cy="175" r="3" fill="#eed083" />
          <circle cx="245" cy="125" r="5" fill="#fff5db" filter="url(#goldShine)" />
          <circle cx="220" cy="70" r="3.5" fill="#dfb755" />
          <circle cx="255" cy="45" r="4" fill="#ffffff" />
          <circle cx="275" cy="80" r="3" fill="#eed083" />
          {/* Constellation Label */}
          <text
            x="85"
            y="265"
            fill="#dfb755"
            fontSize="10"
            letterSpacing="3"
            fontFamily="Times New Roman, serif"
            opacity="0.8"
          >
            DRACO • TIỀN KIẾP
          </text>
        </svg>
      </div>

      {/* Layer 1: Background - Sacred Astrolabe / Zodiac Wheel */}
      <div
        className="floating-sticker sticker-astrolabe hidden sm:block opacity-20 top-[46%] right-[-100px] md:right-[-60px] w-[340px] md:w-[460px] pointer-events-none"
        style={{ transformOrigin: "center center" }}
      >
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-auto">
          <circle cx="200" cy="200" r="190" stroke="url(#goldMetallic)" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="200" cy="200" r="160" stroke="url(#goldMetallic)" strokeWidth="0.8" />
          <circle cx="200" cy="200" r="120" stroke="url(#goldMetallic)" strokeWidth="1.2" />
          <circle cx="200" cy="200" r="70" stroke="url(#goldMetallic)" strokeWidth="0.8" strokeDasharray="3 3" />
          {/* Sacred geometry spokes */}
          <line x1="200" y1="10" x2="200" y2="390" stroke="url(#goldMetallic)" strokeWidth="0.6" />
          <line x1="10" y1="200" x2="390" y2="200" stroke="url(#goldMetallic)" strokeWidth="0.6" />
          <line x1="65" y1="65" x2="335" y2="335" stroke="url(#goldMetallic)" strokeWidth="0.6" />
          <line x1="65" y1="335" x2="335" y2="65" stroke="url(#goldMetallic)" strokeWidth="0.6" />
          {/* Zodiac Star nodes */}
          <polygon points="200,80 205,95 220,100 205,105 200,120 195,105 180,100 195,95" fill="#fcedc5" />
          <polygon points="320,200 305,205 300,220 295,205 280,200 295,195 300,180 305,195" fill="#fcedc5" />
          <polygon points="200,320 205,305 220,300 205,295 200,280 195,295 180,300 195,305" fill="#fcedc5" />
          <polygon points="80,200 95,205 100,220 105,205 120,200 105,195 100,180 95,195" fill="#fcedc5" />
        </svg>
      </div>

      {/* Layer 1: Background - Cassiopeia Constellation */}
      <div
        className="floating-sticker sticker-constellation-ursa opacity-15 sm:opacity-25 top-[74%] left-[2%] sm:left-[3%] w-[180px] sm:w-[200px] md:w-[280px] ambient-pulse pointer-events-none"
        style={{ transformOrigin: "center center" }}
      >
        <svg viewBox="0 0 260 180" fill="none" className="w-full h-auto">
          <path
            d="M 20 120 L 70 40 L 130 90 L 190 30 L 240 100"
            stroke="url(#goldMetallic)"
            strokeWidth="1.2"
            strokeDasharray="4 3"
          />
          <circle cx="20" cy="120" r="4" fill="#fff5db" filter="url(#goldShine)" />
          <circle cx="70" cy="40" r="4.5" fill="#eed083" />
          <circle cx="130" cy="90" r="3.5" fill="#ffffff" />
          <circle cx="190" cy="30" r="5" fill="#fcedc5" filter="url(#goldShine)" />
          <circle cx="240" cy="100" r="4" fill="#eed083" />
          <text x="75" y="145" fill="#dfb755" fontSize="10" letterSpacing="2" fontFamily="Times New Roman, serif">
            CASSIOPEIA • LINH HỒN
          </text>
        </svg>
      </div>

      {/* Layer 2: Midground - Gold Foil Tarot Card 1: THE STAR (XVII - Ngôi Sao Soi Đường) */}
      <div
        className="floating-sticker sticker-tarot-1 gold-glow hidden lg:block top-[22%] right-[1%] sm:right-[2%] xl:right-[3%] w-[100px] sm:w-[125px] md:w-[150px] ambient-bob-1 pointer-events-none opacity-85"
        style={{ transform: "rotate(12deg)", transformOrigin: "center center" }}
      >
        <div className="bg-[#0c0a0c]/90 p-2.5 md:p-3 rounded-md border border-[#dfb755]/70 shadow-[0_8px_30px_rgba(0,0,0,0.85)]">
          <div className="border border-[#eed083]/40 p-2 text-center">
            <span className="text-[10px] md:text-[11px] tracking-[0.25em] text-[#eed083] block font-serif">
              XVII • THE STAR
            </span>
            <div className="my-2 py-3 flex justify-center items-center">
              <svg viewBox="0 0 60 75" className="w-12 h-16" fill="none">
                {/* 8-pointed star */}
                <polygon
                  points="30,5 35,25 55,30 35,35 30,55 25,35 5,30 25,25"
                  fill="url(#goldMetallic)"
                />
                <circle cx="30" cy="30" r="3" fill="#ffffff" />
                {/* Sacred water ripples */}
                <path d="M 10 65 Q 20 60 30 65 T 50 65" stroke="#dfb755" strokeWidth="1" />
                <path d="M 15 70 Q 25 66 35 70 T 48 70" stroke="#eed083" strokeWidth="0.8" opacity="0.7" />
              </svg>
            </div>
            <span className="text-[9px] md:text-[10px] tracking-[0.18em] text-[#fff5db] block italic font-serif">
              HY VỌNG & KHAI SÁNG
            </span>
          </div>
        </div>
      </div>

      {/* Layer 2: Midground - Gold Foil Tarot Card 2: THE MOON (XVIII - Vầng Trăng Trực Giác) */}
      <div
        className="floating-sticker sticker-tarot-2 gold-glow hidden lg:block top-[44%] left-[1%] sm:left-[2%] xl:left-[3%] w-[95px] sm:w-[120px] md:w-[145px] ambient-bob-2 pointer-events-none opacity-85"
        style={{ transform: "rotate(-14deg)", transformOrigin: "center center" }}
      >
        <div className="bg-[#0c0a0c]/90 p-2.5 md:p-3 rounded-md border border-[#dfb755]/70 shadow-[0_8px_30px_rgba(0,0,0,0.85)]">
          <div className="border border-[#eed083]/40 p-2 text-center">
            <span className="text-[10px] md:text-[11px] tracking-[0.25em] text-[#eed083] block font-serif">
              XVIII • THE MOON
            </span>
            <div className="my-2 py-3 flex justify-center items-center">
              <svg viewBox="0 0 60 75" className="w-12 h-16" fill="none">
                {/* Crescent Moon face */}
                <path
                  d="M 32 10 A 24 24 0 1 0 32 58 A 20 20 0 0 1 32 10 Z"
                  fill="url(#goldMetallic)"
                />
                <circle cx="36" cy="28" r="1.5" fill="#000000" />
                {/* Droplets of psychic intuition */}
                <circle cx="20" cy="20" r="1.5" fill="#fff5db" />
                <circle cx="45" cy="25" r="1.5" fill="#eed083" />
                <circle cx="16" cy="40" r="1.8" fill="#dfb755" />
                <circle cx="42" cy="48" r="1.2" fill="#ffffff" />
                {/* Two pillars silhouette */}
                <rect x="8" y="55" width="6" height="15" fill="#dfb755" opacity="0.8" />
                <rect x="46" y="55" width="6" height="15" fill="#dfb755" opacity="0.8" />
              </svg>
            </div>
            <span className="text-[9px] md:text-[10px] tracking-[0.18em] text-[#fff5db] block italic font-serif">
              CẢM XÚC TIỀN KIẾP
            </span>
          </div>
        </div>
      </div>

      {/* Layer 2: Midground - Gold Foil Tarot Card 3: THE SUN (XIX - Mặt Trời Tái Sinh) */}
      <div
        className="floating-sticker sticker-tarot-3 gold-glow hidden lg:block top-[65%] right-[1%] sm:right-[2%] xl:right-[3%] w-[105px] sm:w-[130px] md:w-[155px] ambient-bob-1 pointer-events-none opacity-85"
        style={{ transform: "rotate(8deg)", transformOrigin: "center center" }}
      >
        <div className="bg-[#0c0a0c]/90 p-2.5 md:p-3 rounded-md border border-[#dfb755]/70 shadow-[0_8px_30px_rgba(0,0,0,0.85)]">
          <div className="border border-[#eed083]/40 p-2 text-center">
            <span className="text-[10px] md:text-[11px] tracking-[0.25em] text-[#eed083] block font-serif">
              XIX • THE SUN
            </span>
            <div className="my-2 py-3 flex justify-center items-center">
              <svg viewBox="0 0 60 75" className="w-12 h-16" fill="none">
                <circle cx="30" cy="35" r="14" fill="url(#goldMetallic)" />
                {/* Sun rays */}
                <line x1="30" y1="12" x2="30" y2="52" stroke="#eed083" strokeWidth="2" strokeLinecap="round" />
                <line x1="10" y1="35" x2="50" y2="35" stroke="#eed083" strokeWidth="2" strokeLinecap="round" />
                <circle cx="26" cy="33" r="1.3" fill="#090807" />
                <circle cx="34" cy="33" r="1.3" fill="#090807" />
                <path d="M 27 38 Q 30 41 33 38" stroke="#090807" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-[9px] md:text-[10px] tracking-[0.18em] text-[#fff5db] block italic font-serif">
              CHỮA LÀNH TỎA SÁNG
            </span>
          </div>
        </div>
      </div>

      {/* Layer 2: Midground - Gold Foil Tarot Card 4: WHEEL OF FORTUNE (X - Bánh Xe Vận Mệnh) */}
      <div
        className="floating-sticker sticker-tarot-4 gold-glow hidden lg:block top-[85%] left-[1%] sm:left-[2%] xl:left-[3%] w-[100px] sm:w-[125px] md:w-[150px] ambient-bob-2 pointer-events-none opacity-85"
        style={{ transform: "rotate(-10deg)", transformOrigin: "center center" }}
      >
        <div className="bg-[#0c0a0c]/90 p-2.5 md:p-3 rounded-md border border-[#dfb755]/70 shadow-[0_8px_30px_rgba(0,0,0,0.85)]">
          <div className="border border-[#eed083]/40 p-2 text-center">
            <span className="text-[10px] md:text-[11px] tracking-[0.25em] text-[#eed083] block font-serif">
              X • WHEEL OF FORTUNE
            </span>
            <div className="my-2 py-3 flex justify-center items-center">
              <svg viewBox="0 0 60 75" className="w-12 h-16" fill="none">
                <circle cx="30" cy="35" r="18" stroke="url(#goldMetallic)" strokeWidth="1.5" />
                <circle cx="30" cy="35" r="10" stroke="url(#goldMetallic)" strokeWidth="1" />
                <circle cx="30" cy="35" r="3" fill="#ffffff" />
                <line x1="30" y1="17" x2="30" y2="53" stroke="#eed083" strokeWidth="1" />
                <line x1="12" y1="35" x2="48" y2="35" stroke="#eed083" strokeWidth="1" />
                <line x1="17" y1="22" x2="43" y2="48" stroke="#dfb755" strokeWidth="0.8" />
                <line x1="17" y1="48" x2="43" y2="22" stroke="#dfb755" strokeWidth="0.8" />
              </svg>
            </div>
            <span className="text-[9px] md:text-[10px] tracking-[0.18em] text-[#fff5db] block italic font-serif">
              XOAY CHUYỂN CƠ DUYÊN
            </span>
          </div>
        </div>
      </div>

      {/* Layer 3: Foreground - Golden Radiant Sunburst Emblem */}
      <div
        className="floating-sticker sticker-sun-emblem hidden sm:block top-[14%] right-[10%] w-[120px] md:w-[170px] opacity-40"
        style={{ transformOrigin: "center center" }}
      >
        <svg viewBox="0 0 160 160" fill="none" className="w-full h-auto">
          <polygon
            points="80,10 88,60 135,25 98,72 150,80 98,88 135,135 88,98 80,150 72,98 25,135 62,88 10,80 62,72 25,25 72,60"
            fill="url(#goldMetallic)"
            opacity="0.8"
          />
          <circle cx="80" cy="80" r="18" fill="#0c0a0c" stroke="url(#goldMetallic)" strokeWidth="2" />
          <circle cx="80" cy="80" r="6" fill="#fae4b0" />
        </svg>
      </div>

      {/* Layer 3: Foreground - Golden Light Streaks (Vệt Sáng Vàng Kim Bay Lượn) */}
      <div
        className="floating-sticker sticker-streak-1 top-[35%] left-[15%] w-[180px] md:w-[260px] h-[350px] opacity-60 pointer-events-none"
        style={{ transform: "rotate(-35deg)" }}
      >
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(252,237,197,0.35)_0%,_rgba(223,183,85,0.15)_30%,_transparent_70%)] blur-[25px]" />
      </div>

      <div
        className="floating-sticker sticker-streak-2 top-[78%] right-[12%] w-[200px] md:w-[320px] h-[380px] opacity-60 pointer-events-none"
        style={{ transform: "rotate(40deg)" }}
      >
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(255,245,219,0.4)_0%,_rgba(171,130,36,0.18)_35%,_transparent_70%)] blur-[30px]" />
      </div>

      {/* Floating Sparkle Stars Scattered */}
      <div className="floating-sticker top-[8%] left-[28%] text-[#dfb755] text-lg md:text-2xl animate-pulse">✦</div>
      <div className="floating-sticker top-[22%] left-[45%] text-[#fff5db] text-xs md:text-sm animate-ping" style={{ animationDuration: "4s" }}>✧</div>
      <div className="floating-sticker top-[38%] right-[25%] text-[#eed083] text-sm md:text-xl animate-pulse">✦</div>
      <div className="floating-sticker top-[58%] left-[18%] text-[#dfb755] text-xl md:text-2xl animate-bounce" style={{ animationDuration: "6s" }}>✧</div>
      <div className="floating-sticker top-[70%] right-[32%] text-[#fff5db] text-base md:text-xl animate-pulse">✦</div>
      <div className="floating-sticker top-[89%] right-[22%] text-[#eed083] text-sm md:text-lg animate-ping" style={{ animationDuration: "5s" }}>✧</div>
    </div>
  );
}
