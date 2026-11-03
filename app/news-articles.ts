import { motorcycles } from "./motorcycles";

function getCover(motorcycleSlug: string) {
  const motorcycle = motorcycles.find(({ slug }) => slug === motorcycleSlug);
  const cover = motorcycle?.photos[0];

  if (!cover) {
    throw new Error(`Missing cover image for motorcycle: ${motorcycleSlug}`);
  }

  return cover;
}

export type NewsArticle = {
  slug: string;
  title: string;
  keyword: string;
  excerpt: string;
  category: string;
  kind: "beginners" | "license" | "maintenance";
  coverAlt: string;
  cover: (typeof motorcycles)[number]["photos"][number];
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "cac-dong-xe-moto-cho-nguoi-moi",
    title: "Các dòng xe moto cho người mới: chọn chiếc đầu tiên thế nào?",
    keyword: "các dòng xe moto cho người mới",
    excerpt:
      "So sánh xe sport cỡ nhỏ, naked bike và touring theo tư thế lái, khối lượng, chi phí làm quen; kèm gợi ý Yamaha YZF-R15.",
    category: "Tư vấn chọn xe",
    kind: "beginners",
    coverAlt: "Tổng hợp các dòng xe moto cho người mới bắt đầu tập lái",
    cover: getCover("yamaha-yzf-r15"),
  },
  {
    slug: "xe-moto-khong-can-bang-a2",
    title: "Xe moto không cần bằng A2? Hiểu đúng hạng bằng và dung tích xe",
    keyword: "xe moto không cần bằng a2",
    excerpt:
      "Giải thích câu hỏi về bằng lái mô tô theo quy định hiện hành, phân biệt xe đến 125 cc và xe trên 125 cc trước khi chọn mua.",
    category: "Luật giao thông",
    kind: "license",
    coverAlt: "Danh sách các mẫu xe moto không cần bằng a2 hợp pháp tại Việt Nam",
    cover: getCover("suzuki-gsx-r150"),
  },
  {
    slug: "chi-phi-bao-duong-xe-moto-phan-khoi-lon",
    title: "Chi phí bảo dưỡng xe moto phân khối lớn gồm những gì?",
    keyword: "chi phí bảo dưỡng xe moto phân khối lớn",
    excerpt:
      "Lập kế hoạch chăm xe với các hạng mục định kỳ, vật tư hao mòn và yếu tố làm chi phí thay đổi theo cách sử dụng.",
    category: "Kinh nghiệm sử dụng",
    kind: "maintenance",
    coverAlt: "Bảng tính chi phí bảo dưỡng xe moto phân khối lớn hàng tháng",
    cover: getCover("ktm-390-duke"),
  },
];
