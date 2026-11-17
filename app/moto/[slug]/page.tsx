import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMotorcycleDetails, motorcycles, requiresPhotoCredit } from "../../motorcycles";
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
      images: motorcycle.photos.map((photo) => photo.src),
    },
  };
}

export default async function MotorcycleDetailPage({ params }: BikePageProps) {
  const { slug } = await params;
  const motorcycle = findMotorcycle(slug);

  if (!motorcycle) {
    notFound();
  }

  const details = getMotorcycleDetails(motorcycle);

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
              {requiresPhotoCredit(photo.license) && (
                <figcaption>
                  Ảnh: {photo.author} · {photo.license}
                </figcaption>
              )}
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
          <section className="product-finance">
            <h2>Giá lăn bánh và phương án trả góp</h2>
            <p>
              Giá xe moto phân khối lớn lăn bánh phụ thuộc vào phiên bản, nơi đăng ký và các khoản phí tại thời điểm mua. Hãy liên hệ để nhận bảng tính tham khảo trước khi quyết định.
            </p>
            <p>
              Nếu bạn đang tìm hiểu mua xe moto 150cc trả góp, có thể xem thêm <Link href="/moto/yamaha-yzf-r15">Yamaha YZF-R15 155 cc</Link>. Với câu hỏi mua xe moto trả góp cần thủ tục gì, đơn vị tài chính có thể yêu cầu giấy tờ định danh, thông tin thu nhập và khoản trả trước; hồ sơ cụ thể tùy chính sách và khả năng xét duyệt.
            </p>
          </section>
          <h2>Thông số cơ bản</h2>
          <dl className="product-specs">
            {details.specifications.map((specification) => (
              <div key={specification.label}><dt>{specification.label}</dt><dd>{specification.value}</dd></div>
            ))}
          </dl>
          <section className="product-details" aria-labelledby="product-details-heading">
            <h2 id="product-details-heading">Thông tin chi tiết</h2>
            <p><strong>Phù hợp với:</strong> {details.idealFor}</p>
            <p><strong>Cảm giác lái:</strong> {details.rideFeel}</p>
            <div className="product-highlights">
              {details.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
            </div>
          </section>
          <Link className="product-back" href="/#collection">← Quay lại danh sách xe</Link>
        </section>
      </div>
    </main>
  );
}
