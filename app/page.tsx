"use client";

import React, { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  Clock3,
  ExternalLink,
  Flame,
  HelpCircle,
  Menu,
  MessageCircle,
  MoonStar,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import ParallaxStickers from "@/components/ParallaxStickers";
import ScrollCardAnimations from "@/components/ScrollCardAnimations";
import DailyCardModal from "@/components/DailyCardModal";
import PhotoViewerModal from "@/components/PhotoViewerModal";
import ConsultationSection from "@/components/ConsultationSection";

const zaloUrl = "https://zalo.me/0947181857";
const tiktokUrl = "https://www.tiktok.com/@uyenvuong0111";

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState("Tarot - 3 Câu hỏi (80.000đ)");
  const [isDailyCardOpen, setIsDailyCardOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [photoModal, setPhotoModal] = useState<{
    isOpen: boolean;
    url: string;
    title: string;
    desc: string;
  }>({
    isOpen: false,
    url: "",
    title: "",
    desc: "",
  });

  const handleSelectPackageAndScroll = (pkgName: string) => {
    setSelectedPackage(pkgName);
    const formEl = document.getElementById("dang-ky");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openPhotoModal = (url: string, title: string, desc: string) => {
    setPhotoModal({
      isOpen: true,
      url,
      title,
      desc,
    });
  };

  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-[#dfb755] selection:text-[#050506]">
      {/* Background Cosmic Sky & Star Layer */}
      <div className="cosmic-bg" />
      <div className="cosmic-stars" />

      {/* GSAP Scroll-Driven Parallax Multi-Layer Stickers */}
      <ParallaxStickers />

      {/* GSAP Scroll-Driven Card Entry / Exit Scrub Animations */}
      <ScrollCardAnimations />

      {/* Navigation Header */}
      <header className="mystic-nav">
        <div className="mystic-nav-inner">
          <a
            href="#dau-trang"
            className="nav-brand"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <MoonStar className="text-[#dfb755]" size={22} />
            <span>FREYA TAROT</span>
          </a>

          <nav className="nav-links hidden md:flex" aria-label="Điều hướng chính">
            <a href="#dau-trang" className="nav-link">
              Phần I • Mở Đầu
            </a>
            <a href="#bang-gia" className="nav-link">
              Phần II • Bảng Giá
            </a>
            <a href="#dich-vu" className="nav-link">
              Phần III • Dịch Vụ
            </a>
            <a href="#dang-ky" className="nav-link">
              Phần IV • Đặt Lịch
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsDailyCardOpen(true)}
              className="text-xs uppercase tracking-widest text-[#eed083] hover:text-[#fff5db] border border-[#dfb755]/50 px-3 py-2 rounded-sm hidden sm:inline-flex items-center gap-1.5 transition-all hover:bg-[#dfb755]/10 font-serif"
            >
              <Sparkles size={14} className="text-[#dfb755]" /> Rút Bài Năng Lượng
            </button>
            <a
              href={zaloUrl}
              target="_blank"
              rel="noreferrer"
              className="nav-btn-gold text-xs sm:text-sm py-2 px-3 sm:px-4"
            >
              <MessageCircle size={15} /> <span className="hidden sm:inline">Nhắn</span> Zalo
            </a>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#eed083] hover:text-[#fff5db] border border-[#dfb755]/40 rounded-sm bg-[#0e0c0f]/80"
              aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0a080c]/98 border-b border-[#dfb755]/30 backdrop-blur-xl px-5 py-4 space-y-3 transition-all animate-fadeIn">
            <a
              href="#dau-trang"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm uppercase tracking-wider text-[#ded8cb] hover:text-[#dfb755] border-b border-[rgba(207,163,57,0.15)] font-serif"
            >
              Phần I • Mở Đầu
            </a>
            <a
              href="#bang-gia"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm uppercase tracking-wider text-[#ded8cb] hover:text-[#dfb755] border-b border-[rgba(207,163,57,0.15)] font-serif"
            >
              Phần II • Bảng Giá
            </a>
            <a
              href="#dich-vu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm uppercase tracking-wider text-[#ded8cb] hover:text-[#dfb755] border-b border-[rgba(207,163,57,0.15)] font-serif"
            >
              Phần III • Dịch Vụ
            </a>
            <a
              href="#dang-ky"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm uppercase tracking-wider text-[#ded8cb] hover:text-[#dfb755] border-b border-[rgba(207,163,57,0.15)] font-serif"
            >
              Phần IV • Đặt Lịch
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsDailyCardOpen(true);
                }}
                className="w-full py-2.5 px-3 border border-[#dfb755]/60 text-[#fae4b0] text-xs font-serif uppercase tracking-widest flex items-center justify-center gap-2 bg-[#141018]"
              >
                <Sparkles size={14} className="text-[#dfb755]" /> Rút Bài Năng Lượng Hôm Nay
              </button>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          PHẦN 1: PHẦN MỞ ĐẦU ẤN TƯỢNG (HERO SECTION)
          ========================================================================= */}
      <section className="mystic-section pt-36 md:pt-44 pb-20 relative z-10" id="dau-trang">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-[#dfb755]/50 bg-[#12100d]/80 rounded-sm">
                <span className="text-[#dfb755] text-xs">✦</span>
                <span className="text-xs sm:text-sm uppercase tracking-[0.24em] text-[#fae4b0] font-serif font-bold">
                  FREYA TAROT • 6 NĂM KINH NGHIỆM • EST. 2020
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal font-serif tracking-tight leading-[1.08] m-0">
                Khai Mở Vận Mệnh,{" "}
                <span className="gold-gradient-text italic block mt-1">
                  Thấu Suốt Tiền Kiếp & Tương Lai
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#ded8cb] font-serif leading-relaxed max-w-xl">
                Không gian riêng tư soi tỏ mọi ngã rẽ cuộc đời qua Tarot, Kinh Dịch & Bản đồ sao Tiền kiếp Draconic cùng Freya.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#dang-ky"
                  className="nav-btn-gold py-4 px-8 text-base gleam-effect"
                >
                  <CalendarDays size={18} /> Đặt Lịch Khai Mở Ngay
                </a>

                <button
                  onClick={() => setIsDailyCardOpen(true)}
                  className="py-4 px-6 border border-[#dfb755]/60 hover:border-[#dfb755] text-[#fae4b0] text-sm sm:text-base tracking-widest uppercase font-serif inline-flex items-center gap-2 transition-all hover:bg-[#dfb755]/10"
                >
                  <Sparkles size={17} className="text-[#dfb755]" /> Rút Bài Năng Lượng
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-[rgba(207,163,57,0.2)] grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm sm:text-base font-serif text-[#ded8cb]">
                <div className="flex items-center gap-2.5">
                  <Star size={17} className="text-[#dfb755] flex-shrink-0" />
                  <span>6 Năm Kinh Nghiệm</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck size={17} className="text-[#dfb755] flex-shrink-0" />
                  <span>Riêng Tư 1-1</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock3 size={17} className="text-[#dfb755] flex-shrink-0" />
                  <span>Online & Offline</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check size={17} className="text-[#dfb755] flex-shrink-0" />
                  <span>Ghi Âm & Chụp Bài</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column: Freya Goddess Aura Portrait */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-[310px] sm:w-[370px] h-[400px] sm:h-[460px] float-portrait">
                {/* Rotating Astrological Golden Ring Halo */}
                <div
                  className="absolute -inset-3 sm:-inset-6 rounded-full border border-[#dfb755]/30 spin-slow pointer-events-none"
                  style={{ transformOrigin: "center center" }}
                />
                <div
                  className="absolute -inset-6 sm:-inset-12 rounded-full border border-dashed border-[#dfb755]/20 spin-slow-reverse pointer-events-none"
                  style={{ transformOrigin: "center center" }}
                />

                {/* Central Portrait Card */}
                <div className="w-full h-full bg-[#0c0b0d] border-2 border-[#dfb755] rounded-sm overflow-hidden relative shadow-[0_15px_50px_rgba(0,0,0,0.9)] group">
                  <img
                    src="/images/freya-avatar.jpg"
                    alt="Chân dung Reader Freya Tarot"
                    className="w-full h-full object-cover object-center filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060507] via-transparent to-[#dfb755]/10 pointer-events-none" />

                  {/* Floating Tag Top */}
                  <div className="absolute top-3 left-3 bg-[#080708]/90 border border-[#dfb755]/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#fae4b0] font-serif font-semibold">
                    FREYA • TAROT READER
                  </div>

                  {/* Floating Tag Bottom */}
                  <div className="absolute bottom-4 inset-x-4 bg-[#080708]/95 border border-[#dfb755] p-3.5 text-center">
                    <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#dfb755] font-serif font-bold block">
                      6 NĂM KINH NGHIỆM
                    </span>
                    <p className="text-xs sm:text-sm text-[#ded8cb] font-serif italic m-0 mt-1">
                      &ldquo;Soi chiếu bằng sự chân thành, đón nhận bằng lòng bao dung.&rdquo;
                    </p>
                  </div>
                </div>

                {/* Sparkling decorative stars */}
                <span className="absolute -top-3 -right-3 text-2xl text-[#dfb755] animate-pulse">
                  ✦
                </span>
                <span className="absolute -bottom-4 -left-4 text-xl text-[#fae4b0] animate-bounce" style={{ animationDuration: "5s" }}>
                  ✧
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Golden Marquee Line */}
      <div className="border-y border-[rgba(207,163,57,0.25)] py-4.5 bg-[#090809] overflow-hidden relative z-10">
        <div className="flex justify-center items-center gap-8 text-sm sm:text-base tracking-[0.22em] uppercase text-[#fae4b0] font-serif whitespace-nowrap overflow-x-auto px-4 scrollbar-none font-medium">
          <span>Tarot Phương Tây</span>
          <span className="text-[#dfb755]">✦</span>
          <span>Kinh Dịch Phương Đông</span>
          <span className="text-[#dfb755]">✦</span>
          <span>Tiền Kiếp Draconic 2026</span>
          <span className="text-[#dfb755]">✦</span>
          <span>Khóa Học 7 Ngày Chữa Lành</span>
          <span className="text-[#dfb755]">✦</span>
          <span>Thần Số Học & Bản Đồ Sao</span>
        </div>
      </div>

      {/* =========================================================================
          PHẦN 2: BẢNG GIÁ CHI TIẾT CÁC GÓI ĐỌC TAROT (PRICING TABLE)
          ========================================================================= */}
      <section className="mystic-section border-t border-[rgba(207,163,57,0.2)] relative z-10" id="bang-gia">
        <div className="section-container">
          {/* Section Head */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-eyebrow">
              <Sparkles size={15} /> PHẦN II • BẢNG GIÁ NIÊM YẾT
            </div>
            <h2 className="section-title">
              Bảng Giá Các Gói Xem{" "}
              <span className="gold-gradient-text italic font-serif">Freya Tarot</span>
            </h2>
            <p className="section-desc mx-auto text-base sm:text-lg text-[#ded8cb]">
              Niêm yết minh bạch theo 3 trường phái. Chọn gói bạn cần để đặt lịch cùng Freya.
            </p>
            <div className="mt-4">
              <button
                onClick={() =>
                  openPhotoModal(
                    "/images/freya-tarot-pricing.jpg",
                    "Bảng Giá Dịch Vụ Freya Tarot",
                    "Hình ảnh bảng giá Tarot phương Tây, Kinh Dịch và Tử Vi trọn đời của Freya Tarot"
                  )
                }
                className="inline-flex items-center gap-1.5 text-sm text-[#dfb755] hover:underline font-serif"
              >
                Đối chiếu bảng giá gốc niêm yết <ExternalLink size={13} />
              </button>
            </div>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch pricing-grid-3">
            {/* Column 1: TAROT (Phương Tây) */}
            <div className="mystic-card pricing-col-1 p-7 sm:p-9 border border-[#dfb755]/50 bg-[#0d0c0f]/90 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#dfb755] font-serif font-bold">
                    01 • TAROT
                  </span>
                  <span className="text-xs text-[#eed083] font-serif italic">Phương Tây</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#fff5db] mb-3 font-normal">
                  Tarot Phương Tây
                </h3>
                <p className="text-sm sm:text-base text-[#ded8cb] font-serif leading-relaxed mb-6">
                  Gỡ rối tình cảm, công việc & định hướng bước ngoặt.
                </p>

                {/* Price Rows */}
                <div className="space-y-3 mb-6">
                  {[
                    { name: "Gói 1: 1 câu hỏi", price: "50.000đ" },
                    { name: "Gói 2: 3 câu hỏi", price: "80.000đ" },
                    {
                      name: "Gói 3: Bảng câu hỏi",
                      price: "130.000đ",
                      note: "Full 1 bảng hoặc mix 5 câu bất kỳ",
                    },
                    { name: "Gói 4: 1 tiếng tư vấn", price: "200.000đ" },
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-2.5 border-b border-[rgba(207,163,57,0.18)]"
                    >
                      <div>
                        <span className="text-base font-serif text-[#fff5db] block font-medium">{row.name}</span>
                        {row.note && (
                          <span className="text-xs text-[#9f9889] italic font-serif">
                            ({row.note})
                          </span>
                        )}
                      </div>
                      <strong className="text-base sm:text-lg font-serif text-[#fae4b0] ml-2">
                        {row.price}
                      </strong>
                    </div>
                  ))}
                </div>

                {/* Vận Trình Tổng Quan & Offline */}
                <div className="bg-[#141215] p-4 border border-[#dfb755]/30 rounded text-sm space-y-2 mb-4 font-serif">
                  <b className="text-[#fae4b0] block uppercase tracking-wider text-xs sm:text-sm font-semibold">
                    Gói 5: Xem Tổng Quan Vận Trình
                  </b>
                  <div className="grid grid-cols-2 gap-2 text-[#ded8cb]">
                    <span>1 Tháng: <b className="text-white text-base">80k</b></span>
                    <span>3 Tháng: <b className="text-white text-base">120k</b></span>
                    <span>6 Tháng: <b className="text-white text-base">150k</b></span>
                    <span>1 Năm: <b className="text-white text-base">200k</b></span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#110f11] border border-[#dfb755]/20 rounded text-sm text-[#ded8cb] font-serif">
                  <b className="text-[#fae4b0]">Gói 6: Offline trực tiếp:</b> 350.000đ / người / 60p
                  <span className="block text-xs text-[#9f9889] mt-0.5">
                    (Phụ thu quận xa trên 8km, giảm giá khi đi từ 2 người)
                  </span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[rgba(207,163,57,0.2)]">
                <button
                  onClick={() =>
                    handleSelectPackageAndScroll("Tarot - Bảng câu hỏi toàn diện (130.000đ)")
                  }
                  className="w-full py-3.5 border border-[#dfb755]/60 hover:border-[#dfb755] hover:bg-[#dfb755]/10 text-[#fae4b0] text-sm uppercase tracking-widest font-serif transition-all font-semibold"
                >
                  Chọn Gói Tarot Này
                </button>
              </div>
            </div>

            {/* Column 2: KINH DỊCH (Phương Đông) - Featured */}
            <div className="mystic-card pricing-col-2 p-7 sm:p-9 border-2 border-[#dfb755] bg-gradient-to-b from-[#19140b] via-[#110f0e] to-[#0c0b0c] relative flex flex-col justify-between shadow-[0_0_35px_rgba(223,183,85,0.15)]">
              <div className="featured-ribbon">NỔI BẬT</div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#dfb755] font-serif font-bold">
                    02 • KINH DỊCH
                  </span>
                  <span className="text-xs text-[#eed083] font-serif italic">Phương Đông</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#fff5db] mb-3 font-normal">
                  Kinh Dịch Cổ Truyền
                </h3>
                <p className="text-sm sm:text-base text-[#ded8cb] font-serif leading-relaxed mb-6">
                  Chiêm đoán thời vận, thịnh suy & định hướng hành xử đúng lúc.
                </p>

                {/* Price Rows */}
                <div className="space-y-4 mb-6">
                  {[
                    {
                      name: "Gói 1: 1 câu hỏi quẻ",
                      desc: "Tập trung giải quyết 1 khúc mắc cấp bách",
                      price: "59.000đ",
                    },
                    {
                      name: "Gói 2: 3 câu hỏi quẻ",
                      desc: "Chiêm nghiệm 3 việc liên quan (tình duyên, tài lộc)",
                      price: "100.000đ",
                    },
                    {
                      name: "Gói 3: 1 tiếng chuyên sâu",
                      desc: "Tư vấn mở rộng toàn bộ thế quẻ và định hướng",
                      price: "219.000đ",
                    },
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-[#0a0808]/70 border border-[#dfb755]/30 rounded flex items-center justify-between"
                    >
                      <div>
                        <span className="text-base font-serif text-[#fff5db] block font-semibold">
                          {row.name}
                        </span>
                        <span className="text-xs sm:text-sm text-[#9f9889] font-serif">{row.desc}</span>
                      </div>
                      <strong className="text-lg sm:text-xl font-serif text-[#dfb755] ml-2">
                        {row.price}
                      </strong>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 bg-[#080708] border border-[#dfb755]/30 rounded text-sm font-serif italic text-center text-[#eed083]">
                  ✦ &ldquo;Vạn sự tại tâm, biến dịch tại thời — Điềm tĩnh soi tỏ lối đi&rdquo;
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[rgba(207,163,57,0.3)]">
                <button
                  onClick={() =>
                    handleSelectPackageAndScroll("Kinh Dịch - Chiêm quẻ 1 tiếng chuyên sâu (219.000đ)")
                  }
                  className="nav-btn-gold w-full py-4 text-sm justify-center font-bold"
                >
                  Chọn Gói Kinh Dịch
                </button>
              </div>
            </div>

            {/* Column 3: TỬ VI TRỌN ĐỜI & CHIÊM TINH */}
            <div className="mystic-card pricing-col-3 p-7 sm:p-9 border border-[#dfb755]/50 bg-[#0d0c0f]/90 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#dfb755] font-serif font-bold">
                    03 • TỬ VI TRỌN ĐỜI
                  </span>
                  <span className="text-xs text-[#eed083] font-serif italic">Hồ Sơ Cá Nhân</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#fff5db] mb-3 font-normal">
                  Hồ Sơ Số Mệnh
                </h3>
                <p className="text-sm sm:text-base text-[#ded8cb] font-serif leading-relaxed mb-6">
                  Thấu hiểu bản thân, người thương & tương lai cuộc đời.
                </p>

                {/* Price Rows */}
                <div className="space-y-4 mb-6">
                  {[
                    {
                      name: "Gói Thần Số Học",
                      desc: "File chi tiết + Cuộc gọi giải thích 1-1",
                      price: "300.000đ",
                    },
                    {
                      name: "Gói Bản Đồ Sao",
                      desc: "File chi tiết + Cuộc gọi giải thích 1-1",
                      price: "450.000đ",
                    },
                    {
                      name: "Gói Tiền Kiếp Draconic",
                      desc: "File chi tiết + Cuộc gọi giải thích 1-1",
                      price: "650.000đ",
                    },
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-[#131114] border border-[#dfb755]/20 rounded flex items-center justify-between"
                    >
                      <div>
                        <span className="text-base font-serif text-[#fff5db] block font-semibold">
                          {row.name}
                        </span>
                        <span className="text-xs sm:text-sm text-[#9f9889] font-serif italic">
                          ({row.desc})
                        </span>
                      </div>
                      <strong className="text-lg sm:text-xl font-serif text-[#fae4b0] ml-2">
                        {row.price}
                      </strong>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 bg-[#110f11] border border-[#dfb755]/20 rounded text-sm text-[#ded8cb] font-serif">
                  <b className="text-[#fae4b0]">✦ Cam kết chất lượng:</b> File báo cáo chi tiết lưu
                  trữ vĩnh viễn, kèm cuộc gọi 1-1 giải đáp mọi góc chiếu.
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[rgba(207,163,57,0.2)]">
                <button
                  onClick={() =>
                    handleSelectPackageAndScroll("Tử Vi - Gói Bản đồ sao cá nhân (450.000đ)")
                  }
                  className="w-full py-3.5 border border-[#dfb755]/60 hover:border-[#dfb755] hover:bg-[#dfb755]/10 text-[#fae4b0] text-sm uppercase tracking-widest font-serif transition-all font-semibold"
                >
                  Chọn Gói Hồ Sơ Này
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PHẦN 3: PHẦN GIỚI THIỆU DỊCH VỤ (DRACONIC & KHÓA HỌC 7 NGÀY)
          ========================================================================= */}
      <section className="mystic-section border-t border-[rgba(207,163,57,0.2)] relative z-10" id="dich-vu">
        <div className="section-container">
          {/* Section Head */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-eyebrow">
              <Sparkles size={15} /> PHẦN III • DỊCH VỤ TRỌNG TÂM
            </div>
            <h2 className="section-title">
              Không Gian Soi Chiếu{" "}
              <span className="gold-gradient-text italic font-serif">Chuyên Sâu</span>
            </h2>
            <p className="section-desc mx-auto text-base sm:text-lg text-[#ded8cb]">
              Hai hành trình chuyên sâu giúp bạn giải mã nghiệp quả tiền kiếp và tái thiết lập năng lượng bản thân cùng Freya.
            </p>
          </div>

          {/* 2 Feature Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 services-grid-2">
            {/* Feature 1: Dịch Vụ Mới 2026 - Soi Tiền Kiếp Draconic */}
            <div className="mystic-card service-col-1 p-8 sm:p-10 border border-[#dfb755]/50 bg-[#0c0b0e]/85 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="gold-pill text-xs">
                    <Flame size={13} className="text-[#dfb755]" /> DỊCH VỤ MỚI 2026
                  </span>
                  <div className="flex items-center gap-1 text-[#dfb755]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="#dfb755" />
                    ))}
                  </div>
                </div>

                <h3 className="text-3xl sm:text-4xl font-serif text-[#fff5db] mb-2 font-normal">
                  Soi Tiền Kiếp Draconic
                </h3>
                <p className="text-xs sm:text-sm uppercase tracking-widest text-[#fae4b0] mb-5 font-serif font-semibold">
                  Bản Đồ Sao Thiên Long • Giải Mã Ký Ức Linh Hồn
                </p>

                <p className="text-base text-[#ded8cb] font-serif leading-relaxed mb-6">
                  Giải mã ký ức vô thức và căn duyên linh hồn qua 3 trọng tâm:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-[#141215] border-l-2 border-[#dfb755] p-4">
                    <h4 className="text-base sm:text-lg font-serif text-[#fae4b0] m-0 mb-1 flex items-center gap-2">
                      <span>01.</span> Năng Lực & Nỗi Sợ Cũ
                    </h4>
                    <p className="text-sm sm:text-base text-[#ded8cb] font-serif m-0 leading-relaxed">
                      Tài năng bẩm sinh và những nỗi sợ vô thức mang theo qua nhiều kiếp sống.
                    </p>
                  </div>

                  <div className="bg-[#141215] border-l-2 border-[#dfb755] p-4">
                    <h4 className="text-base sm:text-lg font-serif text-[#fae4b0] m-0 mb-1 flex items-center gap-2">
                      <span>02.</span> Nghiệp Quả & Duyên Nợ
                    </h4>
                    <p className="text-sm sm:text-base text-[#ded8cb] font-serif m-0 leading-relaxed">
                      Gút thắt tình cảm và những bài học dang dở đang tái hiện ở kiếp này.
                    </p>
                  </div>

                  <div className="bg-[#141215] border-l-2 border-[#dfb755] p-4">
                    <h4 className="text-base sm:text-lg font-serif text-[#fae4b0] m-0 mb-1 flex items-center gap-2">
                      <span>03.</span> Khát Vọng Linh Hồn
                    </h4>
                    <p className="text-sm sm:text-base text-[#ded8cb] font-serif m-0 leading-relaxed">
                      Sứ mệnh đích thực và tiếng gọi nội tâm sâu thẳm bên trong bạn.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#080709] border border-[#dfb755]/30 rounded text-sm sm:text-base text-[#fae4b0] font-serif italic mb-6">
                  ✦ Soi chiếu chuyên sâu qua Mặt Trăng & Thổ Tinh Draconic trùng tụ bản đồ sao gốc.
                </div>
              </div>

              <div className="pt-5 border-t border-[rgba(207,163,57,0.2)] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs sm:text-sm text-[#9f9889] block font-serif">Mức phí dịch vụ:</span>
                  <strong className="text-2xl font-serif text-[#dfb755]">650.000đ</strong>
                  <span className="text-sm text-[#ded8cb] ml-1.5 font-serif">/ File + Call 1-1</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      openPhotoModal(
                        "/images/freya-draconic-pastlife.jpg",
                        "Dịch Vụ Mới 2026: Soi Tiền Kiếp Draconic",
                        "Hình ảnh giới thiệu dịch vụ soi tiền kiếp Draconic từ Freya Tarot"
                      )
                    }
                    className="text-sm text-[#dfb755] hover:underline inline-flex items-center gap-1 font-serif"
                  >
                    Xem ảnh gốc <ExternalLink size={13} />
                  </button>
                  <button
                    onClick={() =>
                      handleSelectPackageAndScroll("Tử Vi - Gói Soi Tiền Kiếp Draconic (650.000đ)")
                    }
                    className="nav-btn-gold py-3 px-5 text-sm"
                  >
                    Chọn Gói Này
                  </button>
                </div>
              </div>
            </div>

            {/* Feature 2: 7 Ngày Chữa Lành */}
            <div className="mystic-card service-col-2 p-8 sm:p-10 border border-[#dfb755]/50 bg-[#0c0b0e]/85 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="gold-pill text-xs">
                    <BookOpen size={13} className="text-[#dfb755]" /> CHƯƠNG TRÌNH ĐỘC QUYỀN
                  </span>
                  <div className="flex items-center gap-1 text-[#dfb755]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="#dfb755" />
                    ))}
                  </div>
                </div>

                <h3 className="text-3xl sm:text-4xl font-serif text-[#fff5db] mb-2 font-normal">
                  7 Ngày Chữa Lành
                </h3>
                <p className="text-xs sm:text-sm uppercase tracking-widest text-[#fae4b0] mb-5 font-serif font-semibold">
                  Khoá Học Bản Thân • Tái Thiết Lập Năng Lượng 1-1
                </p>

                <p className="text-base text-[#ded8cb] font-serif leading-relaxed mb-6">
                  Hành trình 7 ngày liên tiếp giúp bạn chữa lành đứa trẻ bên trong và thấu hiểu chính mình:
                </p>

                <div className="space-y-4 mb-6">
                  {[
                    {
                      title: "7 Ngày Đồng Hành 1-1",
                      desc: "Chuyển hóa cảm xúc và duy trì trường năng lượng tích cực mỗi ngày.",
                    },
                    {
                      title: "Đa Hệ Thống Chiêm Tinh",
                      desc: "Thần số học, Bản đồ sao cá nhân, Draconic & Kỳ Trăng.",
                    },
                    {
                      title: "Hồ Sơ Độc Bản Duy Nhất",
                      desc: "Nghiên cứu và thiết lập chuyên biệt cho riêng bạn.",
                    },
                    {
                      title: "Gỡ Rối Toàn Diện",
                      desc: "Tháo gỡ nút thắt tâm lý, hoang mang sự nghiệp & tình cảm.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#dfb755]/20 border border-[#dfb755] flex items-center justify-center flex-shrink-0">
                        <Check size={11} className="text-[#dfb755]" />
                      </div>
                      <div>
                        <b className="text-base font-serif text-[#fff5db] block font-medium">
                          {item.title}
                        </b>
                        <span className="text-sm sm:text-base text-[#ded8cb] font-serif">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 p-4 bg-[#080709] border border-[#dfb755]/30 rounded text-sm sm:text-base text-[#ded8cb] font-serif mb-6">
                  <div>
                    <span className="text-[#9f9889] block text-xs">Thời lượng:</span>
                    <span className="text-[#fae4b0] font-medium">60 phút / buổi</span>
                  </div>
                  <div>
                    <span className="text-[#9f9889] block text-xs">Hình thức:</span>
                    <span className="text-[#fae4b0] font-medium">Online 1-1 riêng tư</span>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-[#dfb755]/20">
                    <span className="text-[#9f9889] block text-xs">Chuẩn bị:</span>
                    <span className="text-[#fff5db]">Sổ ghi chép & không gian yên tĩnh</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-[rgba(207,163,57,0.2)] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs sm:text-sm text-[#9f9889] block font-serif">Học phí trọn gói:</span>
                  <strong className="text-2xl font-serif text-[#dfb755]">2.500.000đ</strong>
                  <span className="text-sm text-[#ded8cb] ml-1.5 font-serif">/ 7 ngày</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      openPhotoModal(
                        "/images/freya-healing-course.jpg",
                        "7 Ngày Chữa Lành - Khoá Học Về Bản Thân",
                        "Hình ảnh giới thiệu khóa học 7 ngày chữa lành chuyên sâu từ Freya Tarot"
                      )
                    }
                    className="text-sm text-[#dfb755] hover:underline inline-flex items-center gap-1 font-serif"
                  >
                    Xem ảnh gốc <ExternalLink size={13} />
                  </button>
                  <button
                    onClick={() =>
                      handleSelectPackageAndScroll(
                        "Khóa học - 7 Ngày Chữa Lành Bản Thân (2.500.000đ)"
                      )
                    }
                    className="nav-btn-gold py-3 px-5 text-sm"
                  >
                    Đăng Ký Khóa Học
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PHẦN 4: FORM ĐĂNG KÝ TƯ VẤN & THANH TOÁN (CONSULTATION & BOOKING)
          ========================================================================= */}
      <ConsultationSection
        selectedPackage={selectedPackage}
        onSelectPackage={setSelectedPackage}
        onViewOriginalPhoto={openPhotoModal}
      />

      {/* Footer */}
      <footer className="border-t border-[rgba(207,163,57,0.25)] bg-[#040305] py-12 pb-28 md:pb-12 relative z-10 text-sm font-serif text-[#ded8cb]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-8 border-b border-[rgba(207,163,57,0.15)]">
            <div>
              <div className="flex items-center gap-2 text-lg font-serif text-[#fae4b0] font-bold tracking-widest uppercase">
                <MoonStar className="text-[#dfb755]" size={22} />
                <span>FREYA TAROT</span>
              </div>
              <p className="mt-2 text-sm text-[#9f9889] font-serif m-0">
                Dịch vụ đọc bài Tarot, Kinh Dịch & Chiêm tinh cá nhân chuyên nghiệp.
                <br />
                Đồng hành thấu cảm cùng bạn suốt 6 năm qua.
              </p>
            </div>

            <div className="text-center space-y-1.5">
              <span className="text-[#dfb755] text-base">✦ ✦ ✦</span>
              <p className="m-0 text-sm text-[#fae4b0] italic">
                &ldquo;Khai Mở Vận Mệnh - Chữa Lành Tâm Thức&rdquo;
              </p>
            </div>

            <div className="flex flex-col md:items-end gap-2 text-sm">
              <div>
                Hotline / Zalo:{" "}
                <a href={zaloUrl} target="_blank" rel="noreferrer" className="text-[#dfb755] font-bold hover:underline">
                  0947 181 857
                </a>
              </div>
              <div>
                TikTok:{" "}
                <a href={tiktokUrl} target="_blank" rel="noreferrer" className="text-[#dfb755] hover:underline">
                  @uyenvuong0111
                </a>
              </div>
              <div>Fanpage: <span className="text-[#fff5db] font-semibold">Freya Tarot</span></div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#9f9889]">
            <span>© 2020 - 2026 Freya Tarot. Toàn bộ bản quyền & hình ảnh được bảo lưu.</span>
            <span>Phong cách Hoàng Gia Huyền Bí • Freya Spirit</span>
          </div>
        </div>
      </footer>

      {/* Bottom Sticky Floating Action Bar on Mobile */}
      <div className="mobile-sticky-action">
        <button
          onClick={() => setIsDailyCardOpen(true)}
          className="flex-1 py-2.5 px-3 border border-[#dfb755] text-[#fae4b0] text-xs font-serif uppercase tracking-wider flex items-center justify-center gap-1.5 bg-[#0e0c0f]"
        >
          <Sparkles size={14} className="text-[#dfb755]" /> Rút Bài
        </button>
        <a
          href="#dang-ky"
          className="flex-1 nav-btn-gold py-2.5 px-3 text-xs justify-center"
        >
          <CalendarDays size={14} /> Hẹn Lịch
        </a>
        <a
          href={zaloUrl}
          target="_blank"
          rel="noreferrer"
          className="p-2.5 border border-[#dfb755] text-[#dfb755] flex items-center justify-center bg-[#0e0c0f]"
          title="Nhắn Zalo"
        >
          <MessageCircle size={18} />
        </a>
      </div>

      {/* Interactive Daily Card Modal */}
      <DailyCardModal
        isOpen={isDailyCardOpen}
        onClose={() => setIsDailyCardOpen(false)}
        onBook={() => {
          const formEl = document.getElementById("dang-ky");
          if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* Authentic Photo Viewer Lightbox Modal */}
      <PhotoViewerModal
        isOpen={photoModal.isOpen}
        onClose={() => setPhotoModal((prev) => ({ ...prev, isOpen: false }))}
        photoUrl={photoModal.url}
        photoTitle={photoModal.title}
        photoDesc={photoModal.desc}
      />
    </main>
  );
}
