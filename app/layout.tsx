import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freya Tarot | Tarot & Chiem Tinh Ca Nhan",
  description: "Dat lich soi chieu Tarot, Kinh Dich va chiem tinh ca nhan cung Freya Tarot.",
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
