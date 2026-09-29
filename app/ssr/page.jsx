import { connection } from 'next/server';
import Image from 'next/image';
import Link from 'next/link';
import { motorcycles } from '../motorcycles';
import { facebookUrl } from '../site-links';

export default async function SSRPage() {
  await connection();

  return (
    <main className="render-demo-page">
      <header className="render-demo-heading">
        <span className="eyebrow">Server-side rendering</span>
        <h1>Danh sách xe · SSR</h1>
        <p className="render-timestamp">Thời điểm server render: {new Date().toLocaleString('vi-VN')}</p>
      </header>
      <div className="bike-grid">
        {motorcycles.map((bike) => {
          const cover = bike.photos[0];
          return (
            <article className="bike-card" key={bike.slug}>
              <Link className="bike-image" href={`/moto/${bike.slug}`} aria-label={`Xem thông tin ${bike.name}`}>
                <Image alt={cover.alt} height={640} loading="lazy" src={cover.src} width={960} />
                <span className="bike-tag">{bike.tag}</span>
              </Link>
              <a className="photo-credit" href={cover.source} rel="noreferrer" target="_blank">
                Ảnh: {cover.author} · {cover.license} ↗
              </a>
              <div className="bike-info">
                <div className="bike-meta"><span>{bike.category}</span><span>{bike.engine}</span></div>
                <h2><Link href={`/moto/${bike.slug}`}>{bike.name}</Link></h2>
                <p>{bike.description}</p>
                <div className="bike-bottom">
                  <span className="bike-price">{bike.price}</span>
                  <a className="bike-cta" href={facebookUrl} rel="noreferrer" target="_blank">Tư vấn ↗</a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
