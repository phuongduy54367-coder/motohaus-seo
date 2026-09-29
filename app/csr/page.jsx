'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motorcycles } from '../motorcycles';
import { facebookUrl } from '../site-links';

export default function CSRPage() {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBikes(motorcycles);
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="render-demo-page">
      <header className="render-demo-heading">
        <span className="eyebrow">Client-side rendering</span>
        <h1>Danh sách xe · CSR</h1>
      </header>
      {loading ? (
        <p className="render-loading" role="status">Đang tải danh sách xe bằng JavaScript...</p>
      ) : (
        <div className="bike-grid" aria-live="polite">
          {bikes.map((bike) => {
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
      )}
    </main>
  );
}
