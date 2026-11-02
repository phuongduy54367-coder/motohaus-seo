import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motorcycleCategories } from "../../motorcycle-categories";
import { motorcycles } from "../../motorcycles";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

function findCategory(slug: string) {
  return motorcycleCategories.find((category) => category.slug === slug);
}

export function generateStaticParams() {
  return motorcycleCategories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = findCategory(slug);

  if (!category) {
    return { title: "Không tìm thấy danh mục" };
  }

  return {
    title: category.title,
    description: category.description,
    keywords: [category.keyword, "bảng giá xe moto phân khối lớn"],
    alternates: { canonical: `/danh-muc/${category.slug}` },
  };
}

export default async function MotorcycleCategoryPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;
  const category = findCategory(slug);

  if (!category) {
    notFound();
  }

  const bikes = motorcycles.filter((motorcycle) => motorcycle.category === category.name);

  return (
    <main className="category-page">
      <nav aria-label="Breadcrumb" className="product-breadcrumb">
        <Link href="/">Trang chủ</Link>
        <span aria-hidden="true">/</span>
        <Link href="/#collection">Bộ sưu tập</Link>
        <span aria-hidden="true">/</span>
        <span>{category.name}</span>
      </nav>
      <header className="category-intro">
        <span className="eyebrow">Danh mục mô tô · {category.name}</span>
        <h1>{category.title}</h1>
        <p>{category.introduction}</p>
        <p className="category-price-note">
          Giá xe là mức tham khảo trong bản demo, không phải báo giá lăn bánh hay xác nhận tồn kho.
        </p>
      </header>
      <section aria-label={`Các mẫu xe ${category.name}`} className="category-inventory">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Bộ sưu tập</span>
            <h2>Mẫu xe {category.name}</h2>
          </div>
          <Link className="text-link" href="/lien-he">Hỏi tình trạng xe ↗</Link>
        </div>
        <div className="bike-grid">
          {bikes.map((bike) => {
            const cover = bike.photos[0];
            return (
              <article className="bike-card" key={bike.slug}>
                <Link
                  aria-label={`Xem thông tin ${bike.name}`}
                  className="bike-image"
                  href={`/moto/${bike.slug}`}
                >
                  <Image alt={cover.alt} height={640} loading="lazy" src={cover.src} width={960} />
                  <span className="bike-tag">{bike.tag}</span>
                </Link>
                <a className="photo-credit" href={cover.source} rel="noreferrer" target="_blank">
                  Ảnh: {cover.author} · {cover.license} ↗
                </a>
                <div className="bike-info">
                  <div className="bike-meta"><span>{bike.category}</span><span>{bike.engine}</span></div>
                  <h3><Link href={`/moto/${bike.slug}`}>{bike.name}</Link></h3>
                  <p>{bike.description}</p>
                  <div className="bike-bottom">
                    <span className="bike-price">{bike.price}</span>
                    <Link className="bike-cta" href={`/moto/${bike.slug}`}>Xem xe ↗</Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
