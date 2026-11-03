import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { newsArticles } from "../news-articles";
import { requiresPhotoCredit } from "../motorcycles";

export const metadata: Metadata = {
  title: "Tin tức mô tô, tư vấn chọn xe và kinh nghiệm sử dụng",
  description:
    "Đọc cẩm nang chọn mô tô cho người mới, giải đáp quy định bằng lái và kinh nghiệm bảo dưỡng xe phân khối lớn từ MOTOHAUS.",
  alternates: { canonical: "/tin-tuc" },
};

export default function NewsPage() {
  return (
    <main className="news-page">
      <header className="news-intro">
        <span className="eyebrow">MOTOHAUS · Cẩm nang</span>
        <h1>Tin tức &amp; kinh nghiệm mô tô</h1>
        <p>
          Tư vấn chọn xe, thông tin cần biết trước khi mua và kinh nghiệm chăm sóc xe để mỗi chuyến đi đều tự tin hơn.
        </p>
      </header>
      <section aria-label="Danh sách bài viết" className="news-grid">
        {newsArticles.map((article) => (
          <article className="news-card" key={article.slug}>
            <Link className="news-card-image" href={`/tin-tuc/${article.slug}`}>
              <Image
                alt={article.coverAlt}
                height={640}
                loading="lazy"
                src={article.cover.src}
                width={960}
              />
            </Link>
            {requiresPhotoCredit(article.cover.license) && (
              <span className="photo-credit">Ảnh: {article.cover.author} · {article.cover.license}</span>
            )}
            <div className="news-card-copy">
              <span className="news-category">{article.category}</span>
              <h2><Link href={`/tin-tuc/${article.slug}`}>{article.title}</Link></h2>
              <p>{article.excerpt}</p>
              <Link className="news-read-more" href={`/tin-tuc/${article.slug}`}>
                Đọc bài viết <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
