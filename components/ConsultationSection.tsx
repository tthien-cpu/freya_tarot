"use client";

import React, { useState } from "react";
import {
  CalendarDays,
  Check,
  Clock3,
  Copy,
  MessageCircle,
  QrCode,
  Sparkles,
  Send,
  ExternalLink,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

interface ConsultationSectionProps {
  selectedPackage: string;
  onSelectPackage: (pkg: string) => void;
  onViewOriginalPhoto: (url: string, title: string, desc: string) => void;
}

const PACKAGES = [
  // Tarot
  "Tarot - 1 Câu hỏi (50.000đ)",
  "Tarot - 3 Câu hỏi (80.000đ)",
  "Tarot - Bảng câu hỏi toàn diện (130.000đ)",
  "Tarot - Tư vấn 1 tiếng không giới hạn (200.000đ)",
  "Tarot - Tổng quan vận trình 1 tháng (80.000đ)",
  "Tarot - Tổng quan vận trình 3 tháng (120.000đ)",
  "Tarot - Tổng quan vận trình 6 tháng (150.000đ)",
  "Tarot - Tổng quan vận trình 1 năm (200.000đ)",
  "Tarot - Offline trực tiếp 1-1 (350.000đ/60p)",
  // Kinh Dịch
  "Kinh Dịch - 1 Câu hỏi (59.000đ)",
  "Kinh Dịch - 3 Câu hỏi (100.000đ)",
  "Kinh Dịch - Chiêm quẻ 1 tiếng chuyên sâu (219.000đ)",
  // Tử Vi & Chiêm Tinh
  "Tử Vi - Gói Thần số học chuyên sâu (300.000đ)",
  "Tử Vi - Gói Bản đồ sao cá nhân (450.000đ)",
  "Tử Vi - Gói Soi Tiền Kiếp Draconic (650.000đ)",
  // Khóa học
  "Khóa học - 7 Ngày Chữa Lành Bản Thân (2.500.000đ)",
];

export default function ConsultationSection({
  selectedPackage,
  onSelectPackage,
  onViewOriginalPhoto,
}: ConsultationSectionProps) {
  const [fullName, setFullName] = useState("");
  const [phoneZalo, setPhoneZalo] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [preferredSlot, setPreferredSlot] = useState("Tối (19h00 - 23h00)");
  const [question, setQuestion] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneZalo) {
      alert("Vui lòng nhập Họ tên và Số điện thoại/Zalo để Freya liên hệ xác nhận!");
      return;
    }
    setIsSubmitted(true);
  };

  const bookingCode = `FREYA-${phoneZalo.slice(-4) || "8888"}`;
  const transferContent = `${bookingCode} ${fullName}`;

  return (
    <section className="mystic-section border-t border-[rgba(207,163,57,0.25)] relative z-10" id="dang-ky">
      <div className="section-container">
        {/* Section Header */}
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-eyebrow">
            <Sparkles size={15} /> PHẦN IV • ĐẶT LỊCH & THANH TOÁN
          </div>
          <h2 className="section-title">
            Hẹn Lịch Cùng <span className="gold-gradient-text italic font-serif">Freya Tarot</span>
          </h2>
          <p className="section-desc mx-auto text-base sm:text-lg text-[#ded8cb]">
            Không gian riêng tư & thấu cảm. Điền thông tin hoặc quét mã QR chốt hẹn trực tiếp cùng Freya.
          </p>
        </div>

        {/* 4 Steps Roadmap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 roadmap-grid-4">
          {[
            {
              step: "01",
              title: "Chọn Gói Xem",
              desc: "Chọn gói phù hợp với câu hỏi bạn đang băn khoăn.",
            },
            {
              step: "02",
              title: "Chốt Lịch Hẹn",
              desc: "Quét mã VietQR HDBank hoặc ví MoMo tiện lợi.",
            },
            {
              step: "03",
              title: "Gửi Thông Tin",
              desc: "Cung cấp ngày giờ sinh và câu hỏi cần giải mã.",
            },
            {
              step: "04",
              title: "Nhận Phiên 1-1",
              desc: "Phiên tư vấn chuyên sâu kèm file ghi âm & hình ảnh.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`mystic-card roadmap-step-${idx + 1} p-6 sm:p-7 relative group border border-[rgba(207,163,57,0.3)] bg-[#0d0c0d]/80`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-serif text-[#dfb755] font-light">
                  {item.step}
                </span>
                <span className="text-xs sm:text-sm text-[#eed083] uppercase tracking-[0.2em] font-serif font-semibold">
                  BƯỚC {idx + 1}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-serif text-[#fff5db] mb-2 font-normal">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-[#ded8cb] font-serif m-0 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Main 2-Column: Form on Left, Banking & QR on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start consult-grid-2">
          {/* Left Column: Interactive Booking Form */}
          <div className="lg:col-span-7 consult-col-1 mystic-card p-6 sm:p-10 border border-[rgba(207,163,57,0.4)] bg-[#0b0a0b]/90 relative">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[rgba(207,163,57,0.2)]">
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#fff5db] m-0">
                  Phiếu Đăng Ký Tư Vấn
                </h3>
                <p className="text-xs sm:text-sm text-[#eed083] mt-1 uppercase tracking-wider font-serif font-semibold">
                  Bảo Mật Thông Tin Khách Hàng 100%
                </p>
              </div>
              <span className="text-xs sm:text-sm px-3.5 py-1 bg-[#241c0f] text-[#fae4b0] border border-[#dfb755]/40 font-serif font-medium">
                Online 1-1
              </span>
            </div>

            {isSubmitted ? (
              <div className="text-center py-10 space-y-6 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#dfb755]/10 border border-[#dfb755] mx-auto flex items-center justify-center text-[#dfb755]">
                  <CheckCircle size={36} />
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-serif text-[#fff5db] mb-2">
                    Đăng Ký Thành Công!
                  </h4>
                  <p className="text-[#ded8cb] text-base font-serif max-w-md mx-auto">
                    Cảm ơn <b className="text-[#fae4b0]">{fullName}</b> đã gửi yêu cầu. Mã lịch hẹn
                    của bạn là: <b className="text-[#dfb755] text-lg">{bookingCode}</b>.
                  </p>
                </div>

                <div className="bg-[#141214] border border-[#dfb755]/40 p-5 rounded text-left max-w-md mx-auto text-sm sm:text-base space-y-2.5 font-serif">
                  <div className="flex justify-between">
                    <span className="text-[#9f9889]">Gói dịch vụ:</span>
                    <span className="text-[#fff5db] text-right font-semibold">
                      {selectedPackage || "Tarot Tư Vấn 1-1"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9f9889]">Khung giờ hẹn:</span>
                    <span className="text-[#fae4b0]">{preferredSlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9f9889]">Nội dung chuyển khoản:</span>
                    <span className="text-[#dfb755] font-mono font-bold">{transferContent}</span>
                  </div>
                </div>

                <p className="text-sm text-[#eed083] font-serif italic">
                  Vui lòng quét mã QR thanh toán ở cột bên phải để hoàn tất chốt lịch và nhắn Zalo
                  cho Freya nhé!
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <a
                    href={`https://zalo.me/0947181857?text=${encodeURIComponent(
                      `Chào Freya Tarot, mình vừa đăng ký xem gói [${selectedPackage || "Tarot"}]. Mã hẹn: ${bookingCode}, họ tên: ${fullName}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-btn-gold py-3.5 px-6 text-sm"
                  >
                    <MessageCircle size={17} /> Nhắn Zalo Xác Nhận Ngay
                  </a>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="py-3 px-5 border border-[#dfb755]/50 text-[#eed083] text-xs sm:text-sm uppercase tracking-wider font-serif hover:bg-[#dfb755]/10 transition-colors"
                  >
                    Chỉnh Sửa Thông Tin
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm uppercase tracking-wider text-[#fae4b0] mb-2 font-serif font-medium">
                      Họ và Tên của bạn <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Hoàng Yến"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="mystic-input text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-wider text-[#fae4b0] mb-2 font-serif font-medium">
                      Số Điện Thoại / Zalo <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: 0947181857"
                      value={phoneZalo}
                      onChange={(e) => setPhoneZalo(e.target.value)}
                      className="mystic-input text-base"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm uppercase tracking-wider text-[#fae4b0] mb-2 font-serif font-medium">
                      Ngày Sinh (Dương lịch)
                    </label>
                    <input
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="mystic-input text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-wider text-[#fae4b0] mb-2 font-serif font-medium">
                      Giờ Sinh & Nơi Sinh (Nếu xem Bản đồ sao/Draconic)
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: 08:30 sáng, Hà Nội"
                      value={birthTime}
                      onChange={(e) => setBirthTime(e.target.value)}
                      className="mystic-input text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-wider text-[#fae4b0] mb-2 font-serif font-medium">
                    Gói Dịch Vụ Muốn Xem <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={selectedPackage || PACKAGES[1]}
                    onChange={(e) => onSelectPackage(e.target.value)}
                    className="mystic-select text-base"
                  >
                    {PACKAGES.map((pkg, idx) => (
                      <option key={idx} value={pkg} className="bg-[#0b0a0c] text-[#f5f2ea]">
                        {pkg}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-wider text-[#fae4b0] mb-2 font-serif font-medium">
                    Khung Giờ Bạn Thuận Tiện Nhất
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      "Sáng (09h00 - 12h00)",
                      "Chiều (14h00 - 18h00)",
                      "Tối (19h00 - 23h00)",
                    ].map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setPreferredSlot(slot)}
                        className={`py-3 px-3 text-sm tracking-wider font-serif border transition-all ${
                          preferredSlot === slot
                            ? "border-[#dfb755] bg-[#dfb755]/20 text-[#fff5db] font-semibold"
                            : "border-[rgba(207,163,57,0.25)] text-[#ded8cb] hover:border-[#dfb755]/60"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-wider text-[#fae4b0] mb-2 font-serif font-medium">
                    Câu Hỏi Hoặc Tâm Sự Bạn Muốn Gửi Freya
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mô tả ngắn gọn hoàn cảnh hoặc khúc mắc bạn đang muốn soi tỏ..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="mystic-textarea text-base"
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-4.5 bg-gradient-to-r from-[#dfb755] via-[#fae4b0] to-[#ab8224] text-[#070605] font-serif font-bold text-base uppercase tracking-[0.16em] flex items-center justify-center gap-3 transition-all hover:brightness-110 shadow-[0_0_25px_rgba(223,183,85,0.3)] cursor-pointer"
                  >
                    <Send size={18} /> Gửi Đăng Ký & Lấy Mã Thanh Toán
                  </button>
                  <p className="text-center text-xs sm:text-sm text-[#9f9889] mt-2 font-serif italic">
                    ✦ Freya Tarot cam kết giữ kín tuyệt đối mọi câu chuyện riêng tư của khách hàng
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Banking & MoMo QR Direct Scan */}
          <div className="lg:col-span-5 consult-col-2 space-y-6">
            <div className="mystic-card p-6 sm:p-8 border border-[rgba(207,163,57,0.4)] bg-[#0c0b0d]/90 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[#eed083] font-serif font-bold">
                  <QrCode size={18} /> THÔNG TIN CHỐT LỊCH HẸN
                </div>
                <button
                  onClick={() =>
                    onViewOriginalPhoto(
                      "/images/freya-payment-booking.jpg",
                      "Quy Trình 4 Bước & Mã QR Thanh Toán",
                      "Hình ảnh bảng thông tin thanh toán Momo và VietQR HDBank từ Freya Tarot"
                    )
                  }
                  className="text-sm text-[#dfb755] hover:underline inline-flex items-center gap-1 font-serif"
                >
                  Xem ảnh gốc <ExternalLink size={13} />
                </button>
              </div>

              <p className="text-sm sm:text-base text-[#ded8cb] font-serif leading-relaxed mb-6">
                Quét mã bên dưới để giữ khung giờ ưu tiên của bạn:
              </p>

              {/* HDBank Account Box */}
              <div className="bg-[#121113] border border-[#dfb755]/50 p-4.5 rounded mb-5 relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs sm:text-sm font-serif font-bold tracking-widest text-[#fff5db] uppercase">
                    NGÂN HÀNG HDBANK • VIETQR
                  </span>
                  <span className="text-xs bg-[#dfb755]/20 text-[#fae4b0] px-2.5 py-0.5 border border-[#dfb755]/40 uppercase font-serif font-medium">
                    Chính Chủ
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  <div className="sm:col-span-5 flex justify-center">
                    <div className="p-1.5 bg-white rounded shadow-[0_4px_20px_rgba(223,183,85,0.25)] w-32 h-32 flex items-center justify-center float-qr border border-[#dfb755]/40">
                      <img
                        src="/images/hdbank-card.jpg"
                        alt="Mã QR HDBank Freya Tarot"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-7 space-y-2 text-sm font-serif">
                    <div>
                      <span className="text-[#9f9889] block text-xs">Chủ tài khoản:</span>
                      <strong className="text-base sm:text-lg text-[#fff5db] tracking-wide block uppercase font-bold">
                        VUONG HANH UYEN
                      </strong>
                    </div>
                    <div>
                      <span className="text-[#9f9889] block text-xs">Số tài khoản:</span>
                      <div className="flex items-center gap-2">
                        <strong className="text-lg sm:text-xl text-[#dfb755] font-mono font-bold">
                          209704070005234
                        </strong>
                        <button
                          onClick={() => handleCopy("209704070005234", "hdbank")}
                          className="text-[#eed083] hover:text-white p-1 rounded hover:bg-[#dfb755]/20 transition-all"
                          title="Sao chép số tài khoản"
                        >
                          {copiedField === "hdbank" ? (
                            <Check size={16} className="text-green-400" />
                          ) : (
                            <Copy size={16} />
                          )}
                        </button>
                      </div>
                    </div>
                    <div>
                      <span className="text-[#9f9889] block text-xs">Cú pháp chuyển khoản:</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-[#fae4b0] font-mono bg-[#080708] px-2.5 py-1 border border-[#dfb755]/30">
                          {fullName ? `${bookingCode} ${fullName}` : "FREYA [Họ Tên]"}
                        </span>
                        <button
                          onClick={() =>
                            handleCopy(
                              fullName ? `${bookingCode} ${fullName}` : "FREYA [Họ Tên]",
                              "syntax"
                            )
                          }
                          className="text-[#eed083] hover:text-white p-1 rounded hover:bg-[#dfb755]/20 transition-all"
                          title="Sao chép cú pháp"
                        >
                          {copiedField === "syntax" ? (
                            <Check size={16} className="text-green-400" />
                          ) : (
                            <Copy size={16} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* MoMo Account Box */}
              <div className="bg-[#121113] border border-[#dfb755]/30 p-4.5 rounded mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs sm:text-sm font-serif font-bold tracking-widest text-[#fff5db] uppercase">
                    VÍ ĐIỆN TỬ MOMO • NAPAS 247
                  </span>
                  <span className="text-xs text-[#fae4b0] font-serif font-medium">Quét Nhanh</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  <div className="sm:col-span-5 flex justify-center">
                    <div className="p-1.5 bg-white rounded shadow-[0_4px_20px_rgba(223,183,85,0.25)] w-32 h-32 flex items-center justify-center float-qr-alt border border-[#dfb755]/40">
                      <img
                        src="/images/momo-card.jpg"
                        alt="Mã QR MoMo Freya Tarot"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-7 space-y-2 text-sm font-serif">
                    <div>
                      <span className="text-[#9f9889] block text-xs">Số điện thoại MoMo:</span>
                      <div className="flex items-center gap-2">
                        <strong className="text-lg sm:text-xl text-[#dfb755] font-mono font-bold">0947181857</strong>
                        <button
                          onClick={() => handleCopy("0947181857", "momo")}
                          className="text-[#eed083] hover:text-white p-1 rounded hover:bg-[#dfb755]/20 transition-all"
                          title="Sao chép số MoMo"
                        >
                          {copiedField === "momo" ? (
                            <Check size={16} className="text-green-400" />
                          ) : (
                            <Copy size={16} />
                          )}
                        </button>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-[#ded8cb] italic m-0">
                      Quét mã QR trên app MoMo hoặc chuyển tiền qua SĐT 0947181857.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Touchpoints */}
              <div className="border-t border-[rgba(207,163,57,0.2)] pt-4 space-y-3 text-sm font-serif">
                <div className="flex items-center justify-between">
                  <span className="text-[#ded8cb]">Hotline / Zalo:</span>
                  <a
                    href="https://zalo.me/0947181857"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#dfb755] hover:underline font-bold"
                  >
                    0947 181 857
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#ded8cb]">Kênh TikTok chính thức:</span>
                  <a
                    href="https://www.tiktok.com/@uyenvuong0111"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#dfb755] hover:underline"
                  >
                    @uyenvuong0111
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#ded8cb]">Fanpage Facebook:</span>
                  <span className="text-[#fff5db] font-semibold">FREYA TAROT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
