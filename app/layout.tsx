import type { Metadata } from "next";
import Link from "next/link";
import { Be_Vietnam_Pro, Noto_Serif } from "next/font/google";
import { siteUrl } from "./site-url";
import { facebookUrl } from "./site-links";
import "./globals.css";

const vietnamSans = Be_Vietnam_Pro({
  variable: "--font-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

const vietnamSerif = Noto_Serif({
  variable: "--font-display",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "MOTOHAUS | Chọn chất riêng, mở máy lên đường",
    template: "%s | MOTOHAUS",
  },
  description:
    "Showroom mô tô thể thao MOTOHAUS. Khám phá xe, thông số và đặt lịch xem xe.",
  openGraph: {
    title: "MOTOHAUS | Chọn chất riêng, mở máy lên đường",
    description: "Khám phá bộ sưu tập mô tô thể thao tại MOTOHAUS.",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${vietnamSans.variable} ${vietnamSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="site-header">
          <Link className="brand" href="/" aria-label="MOTOHAUS - Trang chủ">
            <span className="brand-mark">M</span>
            <span>MOTOHAUS<span className="brand-period">.</span></span>
          </Link>
          <nav className="site-nav" aria-label="Điều hướng chính">
            <Link href="/#collection">Xe đang bán</Link>
            <Link href="/#about">Về showroom</Link>
          </nav>
          <a className="header-cta" href={facebookUrl} rel="noreferrer" target="_blank">Liên hệ tư vấn <span aria-hidden="true">↗</span></a>
        </header>
        {children}
        <footer className="site-footer">
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark">M</span>
            <span>MOTOHAUS<span className="brand-period">.</span></span>
          </Link>
          <span>Chọn chất riêng, mở máy lên đường.</span>
          <a href={facebookUrl} rel="noreferrer" target="_blank">Facebook showroom <span aria-hidden="true">↗</span></a>
        </footer>
      </body>
    </html>
  );
}
