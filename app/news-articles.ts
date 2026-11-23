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
  kind: "beginners" | "license" | "maintenance" | "editorial";
  coverAlt: string;
  cover: (typeof motorcycles)[number]["photos"][number];
  internalLinks: string[];
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
    internalLinks: ["/moto/yamaha-yzf-r15", "/moto/honda-cb650r", "/moto/honda-cb150r"],
  },
  {
    slug: "top-5-dong-xe-moto-cho-nguoi-moi",
    title: "Top 5 dòng xe moto cho người mới bắt đầu dễ làm quen",
    keyword: "các dòng xe moto cho người mới",
    excerpt: "So sánh sportbike, naked bike, adventure và cruiser theo tư thế lái, chiều cao yên, trọng lượng và chi phí làm quen.",
    category: "Tư vấn chọn xe",
    kind: "beginners",
    coverAlt: "Các dòng xe moto cho người mới bắt đầu dễ làm quen",
    cover: getCover("yamaha-yzf-r15"),
    internalLinks: ["/moto/yamaha-yzf-r15", "/moto/honda-cb650r", "/moto/honda-cb150r"],
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
    internalLinks: ["/danh-muc/sport", "/moto/yamaha-yzf-r15"],
  },
  {
    slug: "bang-gia-xe-moto-phan-khoi-lon-lan-banh-tphcm",
    title: "Bảng giá xe moto phân khối lớn lăn bánh tại TPHCM mới nhất",
    keyword: "giá xe moto phân khối lớn lăn bánh",
    excerpt: "Tổng hợp các khoản cần dự trù khi mua moto phân khối lớn tại TPHCM, từ giá niêm yết, phí đăng ký đến chi phí nhận xe.",
    category: "Giá xe",
    kind: "editorial",
    coverAlt: "Bảng giá xe moto phân khối lớn lăn bánh tại TPHCM",
    cover: getCover("honda-cb650r"),
    internalLinks: ["/moto/honda-cb650r", "/moto/bmw-f-850-gs-adventure"],
  },
  {
    slug: "so-sanh-moto-150cc-va-250cc",
    title: "So sánh moto 150cc và 250cc: Nên chọn phân khúc nào để đi phố?",
    keyword: "so sánh xe moto 150cc và 250cc",
    excerpt: "Đặt hai phân khúc phổ biến lên bàn cân về sức mạnh, mức tiêu thụ, khả năng xoay trở trong phố và chi phí sử dụng.",
    category: "So sánh xe",
    kind: "editorial",
    coverAlt: "So sánh xe moto 150cc và 250cc để đi phố",
    cover: getCover("yamaha-yzf-r25"),
    internalLinks: ["/moto/yamaha-yzf-r15", "/moto/yamaha-yzf-r25"],
  },
  {
    slug: "xe-moto-naked-bike-duoi-100-trieu",
    title: "Gợi ý các mẫu xe moto naked bike dưới 100 triệu đáng mua nhất",
    keyword: "xe moto naked bike dưới 100 triệu",
    excerpt: "Gợi ý cách lọc naked bike theo ngân sách, chiều cao yên, đời xe và chi phí bảo dưỡng trước khi xuống tiền.",
    category: "Naked bike",
    kind: "editorial",
    coverAlt: "Mẫu xe moto naked bike dưới 100 triệu đáng mua",
    cover: getCover("honda-cb150r"),
    internalLinks: ["/danh-muc/naked", "/moto/honda-cb150r"],
  },
  {
    slug: "kinh-nghiem-mua-xe-moto-pkl-lan-dau",
    title: "Kinh nghiệm mua xe moto PKL lần đầu: Checklist kiểm tra từ A-Z",
    keyword: "kinh nghiệm mua xe moto pkl lần đầu",
    excerpt: "Checklist kiểm tra giấy tờ, động cơ, khung sườn, lịch sử bảo dưỡng và chạy thử dành cho người mua moto PKL lần đầu.",
    category: "Kinh nghiệm mua xe",
    kind: "editorial",
    coverAlt: "Checklist kinh nghiệm mua xe moto PKL lần đầu",
    cover: getCover("ktm-390-duke"),
    internalLinks: ["/lien-he", "/danh-muc/sport", "/danh-muc/naked"],
  },
  {
    slug: "danh-gia-honda-cb650r-neo-sports-cafe",
    title: "Đánh giá chi tiết Honda CB650R: Sức hút của dòng Neo Sports Cafe",
    keyword: "đánh giá honda cb650r neo sports cafe",
    excerpt: "Đánh giá thiết kế, động cơ, tư thế lái và trải nghiệm sử dụng Honda CB650R cho người yêu phong cách Neo Sports Cafe.",
    category: "Đánh giá xe",
    kind: "editorial",
    coverAlt: "Đánh giá Honda CB650R Neo Sports Cafe",
    cover: getCover("honda-cb650r"),
    internalLinks: ["/moto/honda-cb650r", "/danh-muc/naked"],
  },
  {
    slug: "sportbike-va-naked-bike",
    title: "Sportbike vs Naked bike: Dáng xe nào phù hợp để di chuyển hàng ngày?",
    keyword: "xe moto sportbike giá rẻ cho nam",
    excerpt: "So sánh tư thế lái, khả năng đi phố, độ linh hoạt và chi phí sử dụng để chọn giữa sportbike và naked bike.",
    category: "So sánh xe",
    kind: "editorial",
    coverAlt: "So sánh sportbike và naked bike để đi hàng ngày",
    cover: getCover("yamaha-yzf-r15"),
    internalLinks: ["/danh-muc/sport", "/danh-muc/naked"],
  },
  {
    slug: "top-3-xe-moto-adventure-touring",
    title: "Top 3 mẫu xe moto Adventure Touring chinh phục mọi cung đường phượt",
    keyword: "xe moto adventure touring đường dài",
    excerpt: "Ba lựa chọn Adventure Touring đáng chú ý cho những chuyến đi dài, từ khả năng chở đồ đến tư thế lái và tầm hoạt động.",
    category: "Adventure Touring",
    kind: "editorial",
    coverAlt: "Xe moto Adventure Touring cho cung đường phượt",
    cover: getCover("bmw-f-850-gs-adventure"),
    internalLinks: ["/danh-muc/adventure", "/moto/triumph-tiger-900-gt"],
  },
  {
    slug: "danh-gia-royal-enfield-classic-350",
    title: "Đánh giá Royal Enfield Classic 350 và sự cuốn hút của Cruiser cổ điển",
    keyword: "xe moto cruiser cổ điển cho nam",
    excerpt: "Khám phá thiết kế hoài cổ, nhịp máy đặc trưng và trải nghiệm đi phố của Royal Enfield Classic 350.",
    category: "Cruiser cổ điển",
    kind: "editorial",
    coverAlt: "Đánh giá Royal Enfield Classic 350 cruiser cổ điển",
    cover: getCover("royal-enfield-classic-350"),
    internalLinks: ["/danh-muc/cruiser", "/moto/royal-enfield-classic-350"],
  },
  {
    slug: "chi-phi-bao-duong-xe-moto-phan-khoi-lon",
    title: "Chi phí bảo dưỡng xe moto phân khối lớn gồm những gì?",
    keyword: "chi phí bảo dưỡng xe moto phân khối lớn",
    excerpt: "Lập kế hoạch chăm xe với các hạng mục định kỳ, vật tư hao mòn và yếu tố làm chi phí thay đổi theo cách sử dụng.",
    category: "Kinh nghiệm sử dụng",
    kind: "maintenance",
    coverAlt: "Bảng tính chi phí bảo dưỡng xe moto phân khối lớn hàng tháng",
    cover: getCover("ktm-390-duke"),
    internalLinks: ["/moto/ktm-390-duke", "/lien-he"],
  },
];
