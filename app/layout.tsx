import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freya Tarot | Dịch Vụ Đọc Bài Tarot, Kinh Dịch & Soi Tiền Kiếp Draconic",
  description: "Freya Tarot - 6 năm đồng hành thấu cảm linh hồn. Soi chiếu Tarot phương Tây, Kinh Dịch phương Đông, Soi tiền kiếp Draconic và Khóa học 7 ngày chữa lành bản thân 1-1.",
  keywords: ["Freya Tarot", "xem tarot uy tín", "soi tiền kiếp draconic", "kinh dịch", "bản đồ sao", "thần số học", "khóa học chữa lành"],
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">{children}</body>
    </html>
  );
}
