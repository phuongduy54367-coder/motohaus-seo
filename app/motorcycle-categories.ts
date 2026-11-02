export type MotorcycleCategoryPage = {
  slug: string;
  name: string;
  keyword: string;
  title: string;
  description: string;
  introduction: string;
};

export const motorcycleCategories: MotorcycleCategoryPage[] = [
  {
    slug: "sport",
    name: "Sport",
    keyword: "xe moto sportbike giá rẻ cho nam",
    title: "Xe moto sportbike giá rẻ cho nam",
    description:
      "Khám phá các mẫu sportbike tại MOTOHAUS, tham khảo dung tích, giá xe và tư vấn chọn xe theo nhu cầu.",
    introduction:
      "Bạn đang tìm xe moto sportbike giá rẻ cho nam hoặc người mới làm quen xe côn tay? Danh mục Sport có các lựa chọn từ xe cỡ nhỏ như Yamaha YZF-R15 đến sportbike phân khối lớn. Giá hiển thị chỉ để tham khảo; hãy xác nhận phiên bản và chi phí trước khi mua.",
  },
  {
    slug: "naked",
    name: "Naked",
    keyword: "xe moto naked bike dưới 100 triệu",
    title: "Xe moto naked bike dưới 100 triệu: tham khảo lựa chọn",
    description:
      "Tìm hiểu các mẫu naked bike, mức giá tham khảo và lựa chọn phù hợp với ngân sách tại MOTOHAUS.",
    introduction:
      "Nếu bạn tìm xe moto naked bike dưới 100 triệu, hãy kiểm tra kỹ xe cũ, tình trạng và giấy tờ trước khi đặt cọc. Danh mục MOTOHAUS hiện có các mẫu tham khảo như KTM 390 Duke và Honda CB650R; giá hiển thị có thể cao hơn ngân sách này và không đại diện cho xe đang có sẵn.",
  },
  {
    slug: "adventure",
    name: "Adventure",
    keyword: "mô tô adventure touring",
    title: "Xe mô tô Adventure và touring",
    description:
      "Tham khảo các dòng mô tô Adventure tại MOTOHAUS, thông số cơ bản và mức giá niêm yết tham khảo.",
    introduction:
      "Khám phá các mẫu Adventure thiên về touring, tư thế lái đường dài và khả năng di chuyển đa dạng. Thông tin, cấu hình và bảng giá xe moto phân khối lớn trên website chỉ mang tính tham khảo, vui lòng liên hệ để xác nhận.",
  },
  {
    slug: "cruiser",
    name: "Cruiser",
    keyword: "xe moto cruiser cổ điển",
    title: "Xe moto Cruiser phong cách cổ điển",
    description:
      "Xem các mẫu Cruiser tại MOTOHAUS, so sánh phong cách, dung tích động cơ và giá tham khảo.",
    introduction:
      "Danh mục Cruiser dành cho người yêu tư thế lái thư thả và thiết kế cổ điển. Tham khảo dòng xe, dung tích và giá niêm yết; tình trạng xe và chi phí thực tế cần được xác nhận trực tiếp.",
  },
];
