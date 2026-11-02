
import type { MetadataRoute } from "next";
import { motorcycleCategories } from "./motorcycle-categories";
import { motorcycles } from "./motorcycles";
import { newsArticles } from "./news-articles";
import { siteUrl } from "./site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/lien-he", "/tin-tuc", "/topic-4", "/csr", "/ssr", "/ssg"];
  const bikePages = motorcycles.map((motorcycle) => `/moto/${motorcycle.slug}`);
  const categoryPages = motorcycleCategories.map((category) => `/danh-muc/${category.slug}`);
  const articlePages = newsArticles.map((article) => `/tin-tuc/${article.slug}`);

  return [...pages, ...categoryPages, ...articlePages, ...bikePages].map((path) => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency: "monthly",
  }));
}