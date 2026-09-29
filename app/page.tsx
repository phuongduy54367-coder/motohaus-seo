import Image from "next/image";
import MotorcycleCatalogue from "./motorcycle-catalogue";
import { facebookUrl } from "./site-links";

export default function Home() {
  return (
    <main className="home-main">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Showroom mô tô · Bộ sưu tập online</span>
          <h1>Chọn chất riêng.<br /><em>Mở máy.</em></h1>
          <p>Những cỗ máy dành cho người thích cảm giác làm chủ cung đường. Xem xe thật, nghe tư vấn thật, chọn chiếc hợp với bạn.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#collection">Khám phá bộ sưu tập <span aria-hidden="true">↘</span></a>
            <a className="text-link" href={facebookUrl} rel="noreferrer" target="_blank">Đặt lịch lái thử</a>
          </div>
        </div>
        <div className="hero-visual">
          <Image alt="Mô tô thể thao tại MOTOHAUS" fetchPriority="high" height={1000} priority src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1400&q=90" width={1400} />
          <span className="hero-caption">MOTOHAUS / RIDE YOUR OWN WAY</span>
          <span className="hero-stamp">RIDE<br />YOUR<br />OWN WAY</span>
        </div>
      </section>
      <div className="ticker" aria-label="Dịch vụ tại MOTOHAUS">
        <div className="ticker-track"><span>MÔ TÔ THỂ THAO</span><span>TƯ VẤN THEO NHU CẦU</span><span>HỖ TRỢ CHỌN XE</span><span>ĐẶT LỊCH XEM XE</span></div>
      </div>
      <section className="collection" id="collection">
        <div className="section-heading">
          <div><span className="eyebrow">Bộ sưu tập</span><h2>Tìm chiếc xe của bạn</h2></div>
          <p>Giá và thông tin xe trong bản demo chỉ mang tính tham khảo.</p>
        </div>
        <MotorcycleCatalogue />
      </section>
      <section className="about-band" id="about">
        <div>
          <span className="eyebrow">Không chỉ là mua xe</span>
          <h2>Chọn đúng xe.<br />Đi đúng chất.</h2>
          <p>MOTOHAUS đồng hành từ lần đầu xem xe đến những chuyến đi dài. Đội ngũ tư vấn giúp bạn hiểu rõ thông số, chi phí và lựa chọn phù hợp.</p>
          <a className="text-link" href={facebookUrl} rel="noreferrer" target="_blank">Liên hệ tư vấn ↗</a>
        </div>
        <div className="about-points">
          <div className="about-point"><strong>01</strong><span>Tư vấn theo nhu cầu</span></div>
          <div className="about-point"><strong>02</strong><span>Minh bạch tình trạng xe</span></div>
          <div className="about-point"><strong>03</strong><span>Hỗ trợ thủ tục mua xe</span></div>
          <div className="about-point"><strong>04</strong><span>Chăm sóc sau bán hàng</span></div>
        </div>
      </section>
    </main>
  );
}
