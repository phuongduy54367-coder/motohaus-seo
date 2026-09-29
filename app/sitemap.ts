import type { MetadataRoute } from "next";
import { motorcycles } from "./motorcycles";
import { siteUrl } from "./site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/topic-4", "/csr", "/ssr", "/ssg"];
  const bikePages = motorcycles.map((motorcycle) => `/moto/${motorcycle.slug}`);

  return [...pages, ...bikePages].map((path) => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency: "monthly",
  }));
}