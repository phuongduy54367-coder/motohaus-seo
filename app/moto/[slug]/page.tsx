import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motorcycles } from "../../motorcycles";
import { facebookUrl } from "../../site-links";

type BikePageProps = {
  params: Promise<{ slug: string }>;
};

function findMotorcycle(slug: string) {
  return motorcycles.find((motorcycle) => motorcycle.slug === slug);
}

export function generateStaticParams() {
  return motorcycles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: BikePageProps): Promise<Metadata> {
  const { slug } = await params;
  const motorcycle = findMotorcycle(slug);

  if (!motorcycle) {
    return { title: "Không tìm thấy xe" };
  }

  return {
    title: `${motorcycle.name}: Giá và thông số`,
    description: motorcycle.description,
    alternates: { canonical: `/moto/${motorcycle.slug}` },
    openGraph: {
      title: `${motorcycle.name} | MOTOHAUS`,
      description: motorcycle.description,
      images: motorcycle.photos[0]?.src ? [motorcycle.photos[0].src] : [],
    },
  };
}

export default async function MotorcycleDetailPage({ params }: BikePageProps) {
  const { slug } = await params;
  const motorcycle = findMotorcycle(slug);

  if (!motorcycle) {
    notFound();
  }

  return (
    <main className="product-page">
      <nav aria-label="Breadcrumb" className="product-breadcrumb">
        <Link href="/">Trang chủ</Link><span aria-hidden="true">/</span>
        <Link href="/#collection">Bộ sưu tập</Link><span aria-hidden="true">/</span>
        <span>{motorcycle.name}</span>
      </nav>
      <div className="product-layout">
        <section aria-label={`Hình ảnh ${motorcycle.name}`} className="product-gallery">
          {motorcycle.photos.map((photo, index) => (
            <figure className={`product-photo${index === 0 ? " product-photo-main" : ""}`} key={photo.src}>
              <Image
                alt={photo.alt}
                fill
                priority={index === 0}
                sizes={index === 0 ? "(max-width: 700px) 100vw, 60vw" : "(max-width: 700px) 50vw, 30vw"}
                src={photo.src}
              />
              <figcaption>
                <a href={photo.source} rel="noreferrer" target="_blank">
                  Ảnh: {photo.author} · {photo.license} ↗
                </a>
              </figcaption>
            </figure>
          ))}
        </section>
        <section className="product-summary">
          <span className="eyebrow">{motorcycle.brand} · {motorcycle.category}</span>
          <h1>{motorcycle.name}</h1>
          <p className="product-description">{motorcycle.description}</p>
          <div className="product-price-label">Giá tham khảo</div>
          <p className="product-price">{motorcycle.price}</p>
          <p className="product-note">Giá và cấu hình có thể thay đổi theo phiên bản. Liên hệ để được tư vấn mẫu xe phù hợp.</p>
          <a className="button-primary product-contact" href={facebookUrl} rel="noreferrer" target="_blank">
            Hỏi giá qua Facebook <span aria-hidden="true">↗</span>
          </a>
          <h2>Thông số cơ bản</h2>
          <dl className="product-specs">
            <div><dt>Hãng xe</dt><dd>{motorcycle.brand}</dd></div>
            <div><dt>Phân khúc</dt><dd>{motorcycle.category}</dd></div>
            <div><dt>Động cơ</dt><dd>{motorcycle.engine}</dd></div>
            <div><dt>Dòng xe</dt><dd>{motorcycle.tag}</dd></div>
          </dl>
          <Link className="product-back" href="/#collection">← Quay lại danh sách xe</Link>
        </section>
      </div>
    </main>
  );
}
