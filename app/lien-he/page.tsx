import type { Metadata } from "next";
import Link from "next/link";
import { SocialLinks } from "../social-links";
import { facebookUrl } from "../site-links";

export const metadata: Metadata = {
  title: "Liên hệ MOTOHAUS và xác nhận địa chỉ showroom",
  description:
    "Liên hệ MOTOHAUS để hỏi tình trạng xe, tư vấn mua xe và xác nhận địa chỉ bán xe moto chính hãng trước khi ghé xem.",
  keywords: ["địa chỉ bán xe moto chính hãng", "cửa hàng bán xe moto uy tín tphcm"],
  alternates: { canonical: "/lien-he" },
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <header className="contact-intro">
        <span className="eyebrow">MOTOHAUS · Liên hệ</span>
        <h1>Tìm địa chỉ bán xe moto chính hãng</h1>
        <p>
          Đang tìm cửa hàng bán xe moto uy tín TPHCM? Hãy nhắn MOTOHAUS trước khi ghé để xác nhận địa chỉ xem xe, phiên bản, tình trạng và giá tham khảo mới nhất.
        </p>
        <a className="button-primary" href={facebookUrl} rel="noreferrer" target="_blank">
          Nhắn tin cho MOTOHAUS <span aria-hidden="true">↗</span>
        </a>
      </header>
      <section className="contact-details">
        <div>
          <span className="eyebrow">Trước khi đến showroom</span>
          <h2>Xác nhận thông tin để buổi xem xe thuận tiện hơn</h2>
          <p>
            Website hiện không công bố địa chỉ cố định. Vui lòng liên hệ để nhận hướng dẫn điểm xem xe và hẹn thời gian phù hợp; không nên di chuyển theo địa chỉ chưa được xác nhận.
          </p>
        </div>
        <ul>
          <li>Gửi tên mẫu xe hoặc đường dẫn sản phẩm bạn quan tâm.</li>
          <li>Hỏi rõ phiên bản, tình trạng xe và giấy tờ liên quan.</li>
          <li>Yêu cầu báo giá chi tiết và các khoản cần chuẩn bị trước khi đặt cọc.</li>
        </ul>
      </section>
      <section className="contact-social">
        <div>
          <span className="eyebrow">Kết nối với chúng tôi</span>
          <h2>Theo dõi MOTOHAUS trên mạng xã hội</h2>
        </div>
        <SocialLinks />
      </section>
      <nav aria-label="Khám phá MOTOHAUS" className="contact-links">
        <Link href="/#collection">Xem bộ sưu tập xe ↗</Link>
        <Link href="/tin-tuc">Đọc tư vấn mua xe ↗</Link>
      </nav>
    </main>
  );
}
