"use client";

import React, { useState } from "react";
import { Sparkles, X, RotateCw, CheckCircle2 } from "lucide-react";

interface CardData {
  id: string;
  name: string;
  roman: string;
  keyword: string;
  guidance: string;
  element: string;
}

const CARDS: CardData[] = [
  {
    id: "the-star",
    name: "The Star",
    roman: "XVII",
    keyword: "Hy Vọng • Chữa Lành • Khai Sáng",
    guidance:
      "Vũ trụ nhắn gửi: Giai đoạn bão tố trong tâm trí bạn đã đi qua. Hãy mở lòng đón nhận nguồn năng lượng thuần khiết và tin tưởng vào trực giác của mình. Mọi sự dẫn dắt đang đưa bạn về đúng lộ trình linh hồn.",
    element: "Khí • Bảo Bình",
  },
  {
    id: "the-sun",
    name: "The Sun",
    roman: "XIX",
    keyword: "Rực Rỡ • Tái Sinh • Niềm Vui",
    guidance:
      "Ánh dương ấm áp soi chiếu mọi gút thắt trong lòng. Mọi điều bạn kiên trì gieo hạt sắp nở hoa rực rỡ. Hãy tự tin bước ra khỏi vùng an toàn và tỏa sáng với đúng bản sắc nguyên bản của bạn.",
    element: "Lửa • Mặt Trời",
  },
  {
    id: "the-magician",
    name: "The Magician",
    roman: "I",
    keyword: "Hiện Thực Hóa • Năng Lực Sáng Tạo",
    guidance:
      "Bạn đã có đầy đủ 4 yếu tố Đất - Nước - Khí - Lửa trong tay. Đừng chần chừ hay hoài nghi bản thân nữa. Thời điểm vàng để khởi động kế hoạch bạn hằng ấp ủ chính là ngay bây giờ.",
    element: "Khí • Thủy Tinh",
  },
  {
    id: "the-empress",
    name: "The Empress",
    roman: "III",
    keyword: "Nuôi Dưỡng • Dồi Dào • Yêu Thương Bản Thân",
    guidance:
      "Hãy dịu dàng hơn với chính mình hôm nay. Mọi sự chữa lành đều bắt đầu từ việc thấu hiểu và ôm ấp những cảm xúc bên trong. Tài lộc và sự an yên đang chảy tràn về phía bạn.",
    element: "Đất • Kim Tinh",
  },
  {
    id: "wheel-of-fortune",
    name: "Wheel of Fortune",
    roman: "X",
    keyword: "Xoay Vần Định Mệnh • Thời Điểm Đổi Vận",
    guidance:
      "Bánh xe số phận đang quay theo chiều thuận lợi. Một cơ duyên bất ngờ hoặc quý nhân sẽ xuất hiện mở ra cánh cửa mới. Hãy sẵn sàng đón nhận bước ngoặt kỳ diệu này.",
    element: "Lửa • Mộc Tinh",
  },
];

export default function DailyCardModal({
  isOpen,
  onClose,
  onBook,
}: {
  isOpen: boolean;
  onClose: () => void;
  onBook: () => void;
}) {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  if (!isOpen) return null;

  const handleDraw = () => {
    setIsRevealed(false);
    const randomIndex = Math.floor(Math.random() * CARDS.length);
    setSelectedCard(CARDS[randomIndex]);
    setTimeout(() => {
      setIsRevealed(true);
    }, 350);
  };

  return (
    <div className="mystic-backdrop" onClick={onClose}>
      <div
        className="bg-[#0b0a0c] border border-[#dfb755] max-w-lg w-full p-6 sm:p-8 rounded-sm relative text-[#f5f2ea] shadow-[0_20px_60px_rgba(0,0,0,0.95)] animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#eed083] hover:text-white transition-colors p-1"
          aria-label="Đóng"
        >
          <X size={22} />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 text-[#eed083] text-xs uppercase tracking-[0.2em] mb-2 font-serif">
            <Sparkles size={14} /> Trải Bài Năng Lượng Ngẫu Nhiên
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#fff5db] m-0">
            Thông Điệp Vũ Trụ Dành Cho Bạn
          </h3>
          <p className="text-sm text-[#b5b0a2] mt-2 font-serif italic">
            Nhắm mắt tĩnh tâm 3 giây, hít sâu và chạm vào lá bài để khai mở
          </p>
        </div>

        {!selectedCard && (
          <div className="text-center py-8">
            <div
              onClick={handleDraw}
              className="mx-auto w-40 h-64 rounded-md border-2 border-dashed border-[#dfb755]/70 bg-gradient-to-b from-[#181518] to-[#0d0c0d] flex flex-col items-center justify-center cursor-pointer hover:border-[#ffd875] hover:scale-105 transition-all duration-300 group shadow-[0_0_25px_rgba(223,183,85,0.15)] float-qr"
            >
              <span className="text-4xl text-[#dfb755] group-hover:rotate-180 transition-transform duration-700">
                ✦
              </span>
              <p className="text-sm text-[#fae4b0] mt-4 font-serif tracking-widest uppercase font-bold">
                Chạm Để Rút Bài
              </p>
              <span className="text-[11px] text-[#7d786d] mt-1 font-serif italic">
                Freya Tarot Reader
              </span>
            </div>
          </div>
        )}

        {selectedCard && (
          <div className="space-y-6">
            <div
              className={`transition-all duration-500 transform ${
                isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="bg-[#121013] border border-[#dfb755]/60 p-5 rounded text-center relative overflow-hidden">
                <span className="text-xs tracking-[0.25em] text-[#dfb755] uppercase block font-serif">
                  LÁ BÀI SỐ {selectedCard.roman}
                </span>
                <h4 className="text-3xl font-serif text-[#fae4b0] my-2 font-normal">
                  {selectedCard.name}
                </h4>
                <div className="inline-block bg-[#221c15] px-3 py-1 border border-[#dfb755]/30 text-xs text-[#fae4b0] uppercase tracking-wider mb-4">
                  {selectedCard.keyword}
                </div>

                <div className="bg-[#080708] p-4 border-l-2 border-[#dfb755] text-left">
                  <p className="text-[#f5f2ea] text-[0.98rem] leading-relaxed font-serif italic m-0">
                    &ldquo;{selectedCard.guidance}&rdquo;
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#dfb755]/20 flex justify-between items-center text-xs text-[#b5b0a2]">
                  <span>Nguyên tố: {selectedCard.element}</span>
                  <span className="text-[#dfb755]">Freya Tarot 6 Năm Spirit</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleDraw}
                className="flex-1 py-3 px-4 border border-[#dfb755]/50 hover:border-[#dfb755] text-[#eed083] text-sm tracking-wider uppercase font-serif flex items-center justify-center gap-2 transition-all hover:bg-[#dfb755]/10"
              >
                <RotateCw size={15} /> Rút Lại Bài Khác
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBook();
                }}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-[#dfb755] to-[#ab8224] text-[#070605] font-bold text-sm tracking-wider uppercase font-serif flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-[0_0_15px_rgba(223,183,85,0.3)]"
              >
                <CheckCircle2 size={16} /> Đặt Lịch Xem Chi Tiết
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
