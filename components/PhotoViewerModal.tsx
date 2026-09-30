"use client";

import React from "react";
import { X, ExternalLink } from "lucide-react";

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  photoUrl: string;
  photoTitle: string;
  photoDesc: string;
}

export default function PhotoViewerModal({
  isOpen,
  onClose,
  photoUrl,
  photoTitle,
  photoDesc,
}: PhotoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="mystic-backdrop" onClick={onClose}>
      <div
        className="bg-[#0b0a0c] border border-[#dfb755] max-w-2xl w-full p-6 rounded-sm relative text-[#f5f2ea] shadow-[0_20px_60px_rgba(0,0,0,0.95)] max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#eed083] hover:text-white transition-colors p-1 z-10"
          aria-label="Đóng"
        >
          <X size={24} />
        </button>

        <div className="mb-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#dfb755] block font-serif">
            HÌNH ẢNH GỐC NIÊM YẾT • FREYA TAROT
          </span>
          <h3 className="text-2xl font-serif text-[#fff5db] m-0 mt-1">{photoTitle}</h3>
          <p className="text-sm text-[#b5b0a2] mt-1 font-serif italic">{photoDesc}</p>
        </div>

        <div className="flex-1 overflow-auto rounded border border-[#dfb755]/30 bg-black/80 flex items-center justify-center p-2">
          <img
            src={photoUrl}
            alt={photoTitle}
            className="max-h-[65vh] w-auto object-contain rounded shadow-lg"
          />
        </div>

        <div className="mt-4 pt-3 border-t border-[#dfb755]/20 flex justify-between items-center text-xs text-[#b5b0a2]">
          <span>Fanpage: Freya Tarot • Zalo: 0947181857</span>
          <a
            href={photoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#dfb755] hover:underline inline-flex items-center gap-1 font-serif"
          >
            Mở ảnh gốc trong tab mới <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
