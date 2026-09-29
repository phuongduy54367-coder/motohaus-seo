"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motorcycles } from "./motorcycles";
import { facebookUrl } from "./site-links";

const categories = ["Tất cả", "Sport", "Naked", "Adventure", "Cruiser"];

export default function MotorcycleCatalogue() {
  const [category, setCategory] = useState("Tất cả");
  const [query, setQuery] = useState("");
  const visibleBikes = motorcycles.filter((bike) => {
    const matchesCategory = category === "Tất cả" || bike.category === category;
    const matchesQuery = `${bike.name} ${bike.engine} ${bike.category}`
      .toLocaleLowerCase("vi")
      .includes(query.toLocaleLowerCase("vi"));
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <div className="catalog-tools">
        <div className="filter-list" aria-label="Lọc theo phân khúc">
          {categories.map((item) => (
            <button
              aria-pressed={category === item}
              className="filter-button"
              key={item}
              onClick={() => setCategory(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
        <label className="sr-only" htmlFor="bike-search">Tìm mô tô</label>
        <input
          className="bike-search"
          id="bike-search"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Tìm hãng, xe, phân khúc..."
          type="search"
          value={query}
        />
      </div>
      <div className="bike-grid" aria-live="polite">
        {visibleBikes.length ? visibleBikes.map((bike) => {
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
                <h3><Link href={`/moto/${bike.slug}`}>{bike.name}</Link></h3>
                <p>{bike.description}</p>
                <div className="bike-bottom">
                  <span className="bike-price">{bike.price}</span>
                  <a className="bike-cta" href={facebookUrl} rel="noreferrer" target="_blank">Tư vấn ↗</a>
                </div>
              </div>
            </article>
          );
        }) : <p className="empty-results">Chưa tìm thấy mẫu xe phù hợp. Thử từ khóa khác nhé.</p>}
      </div>
    </>
  );
}
