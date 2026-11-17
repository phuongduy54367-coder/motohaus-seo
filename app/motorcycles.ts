export type MotorcyclePhoto = {
  src: string;
  alt: string;
  source: string;
  author: string;
  license: string;
};

export type Motorcycle = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  engine: string;
  price: string;
  tag: string;
  description: string;
  photos: MotorcyclePhoto[];
};

export type MotorcycleDetails = {
  overview: string;
  idealFor: string;
  rideFeel: string;
  highlights: string[];
  specifications: { label: string; value: string }[];
};

export function requiresPhotoCredit(license: string) {
  return license.startsWith("CC BY");
}

export const motorcycles: Motorcycle[] = [
  {
    slug: "yamaha-yzf-r15",
    name: "Yamaha YZF-R15",
    brand: "Yamaha",
    category: "Sport",
    engine: "155 cc · 1 xi-lanh",
    price: "Khoảng 99 triệu",
    tag: "Sport cỡ nhỏ",
    description: "Sportbike gọn nhẹ, phù hợp người mới làm quen xe côn tay.",
    photos: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/2014_Yamaha_YZF-R15.JPG/960px-2014_Yamaha_YZF-R15.JPG", alt: "Yamaha YZF-R15 đời 2014, sportbike 149,8 cc gợi ý các dòng xe moto cho người mới", source: "https://commons.wikimedia.org/wiki/File:2014_Yamaha_YZF-R15.JPG", author: "Rainmaker47", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Yamaha_YZF-R15.jpg/960px-Yamaha_YZF-R15.jpg", alt: "Yamaha YZF-R15 góc trước, mẫu xe moto sportbike cho người mới", source: "https://commons.wikimedia.org/wiki/File:Yamaha_YZF-R15.jpg", author: "Rikita", license: "CC BY-SA 3.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Rider_cornering_on_Yamaha_YZF-R15_front.jpg/960px-Rider_cornering_on_Yamaha_YZF-R15_front.jpg", alt: "Yamaha YZF-R15 đang vào cua, hình ảnh xe mô tô thể thao cỡ nhỏ", source: "https://commons.wikimedia.org/wiki/File:Rider_cornering_on_Yamaha_YZF-R15_front.jpg", author: "Sumeet Basak", license: "CC BY 2.0" },
    ],
  },
  {
    slug: "suzuki-gsx-r150",
    name: "Suzuki GSX-R150",
    brand: "Suzuki",
    category: "Sport",
    engine: "147.3 cc · 1 xi-lanh",
    price: "Khoảng 95 triệu",
    tag: "Sport 150 cc",
    description: "Sportbike 150 cc gọn nhẹ, phù hợp đi phố và làm quen xe côn tay.",
    photos: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Suzuki_GSX-R150_-_Indonesia_International_Motor_Show_2017_-_April_30_2017.jpg/960px-Suzuki_GSX-R150_-_Indonesia_International_Motor_Show_2017_-_April_30_2017.jpg", alt: "Suzuki GSX-R150 màu đỏ tại triển lãm, sportbike 147,3 cc", source: "https://commons.wikimedia.org/wiki/File:Suzuki_GSX-R150_-_Indonesia_International_Motor_Show_2017_-_April_30_2017.jpg", author: "Wilzz99", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/2022_Suzuki_GSX-R150_Mandalika_Limited_Edition.jpg/960px-2022_Suzuki_GSX-R150_Mandalika_Limited_Edition.jpg", alt: "Suzuki GSX-R150 phiên bản Mandalika, xe moto 147,3 cc", source: "https://commons.wikimedia.org/wiki/File:2022_Suzuki_GSX-R150_Mandalika_Limited_Edition.jpg", author: "Haysnawri10", license: "CC BY-SA 4.0" },
    ],
  },
  {
    slug: "yamaha-yzf-r25",
    name: "Yamaha YZF-R25",
    brand: "Yamaha",
    category: "Sport",
    engine: "249 cc · 2 xi-lanh",
    price: "Liên hệ báo giá",
    tag: "Sport 250 cc",
    description: "Sportbike hai xi-lanh 250 cc với dáng ngồi thể thao.",
    photos: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/2015_Yamaha_YZF-R25.JPG/960px-2015_Yamaha_YZF-R25.JPG", alt: "Yamaha YZF-R25 tại Yamaha Plaza, sportbike 249 cc để so sánh xe moto 150cc và 250cc", source: "https://commons.wikimedia.org/wiki/File:2015_Yamaha_YZF-R25.JPG", author: "Rainmaker47", license: "CC BY-SA 4.0" },
    ],
  },
  {
    slug: "kawasaki-ninja-zx-6r",
    name: "Kawasaki Ninja ZX-6R",
    brand: "Kawasaki",
    category: "Sport",
    engine: "636 cc · 4 xi-lanh",
    price: "Khoảng 299 triệu",
    tag: "Supersport",
    description: "Ninja ZX-6R thiên về đường đua với động cơ 4 xi-lanh.",
    photos: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Kawasaki-ninja-zx-6r-ZX600J.jpg/960px-Kawasaki-ninja-zx-6r-ZX600J.jpg", alt: "Kawasaki Ninja ZX-6R ZX600J 599 cc, mẫu xe moto phân khối lớn", source: "https://commons.wikimedia.org/wiki/File:Kawasaki-ninja-zx-6r-ZX600J.jpg", author: "Alex Borland", license: "CC0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/2007KawasakiNinjaZX6R-001.jpg/960px-2007KawasakiNinjaZX6R-001.jpg", alt: "Kawasaki Ninja ZX-6R đời 2007 599 cc, sportbike trên 500 cc", source: "https://commons.wikimedia.org/wiki/File:2007KawasakiNinjaZX6R-001.jpg", author: "Rich Niewiroski Jr.", license: "CC BY 2.5" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Kawasaki_Ninja_ZX-6R_ZX636G.jpg/960px-Kawasaki_Ninja_ZX-6R_ZX636G.jpg", alt: "Kawasaki Ninja ZX-6R ZX636G 636 cc, mô tô sportbike Kawasaki", source: "https://commons.wikimedia.org/wiki/File:Kawasaki_Ninja_ZX-6R_ZX636G.jpg", author: "Sound Media", license: "CC0" },
    ],
  },
  {
    slug: "kawasaki-ninja-250",
    name: "Kawasaki Ninja 250",
    brand: "Kawasaki",
    category: "Sport",
    engine: "249 cc · 2 xi-lanh",
    price: "Liên hệ báo giá",
    tag: "Sport 250 cc",
    description: "Sportbike 250 cc hai xi-lanh dành cho người muốn nâng cấp từ xe cỡ nhỏ.",
    photos: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Kawasaki_Ninja_250_2018.jpg/960px-Kawasaki_Ninja_250_2018.jpg", alt: "Xe moto sportbike giá rẻ cho nam - Mẫu Kawasaki Ninja 250 đời 2018", source: "https://commons.wikimedia.org/wiki/File:Kawasaki_Ninja_250_2018.jpg", author: "Rikita", license: "CC BY-SA 4.0" },
    ],
  },
  {
    slug: "honda-cbr250r",
    name: "Honda CBR250R",
    brand: "Honda",
    category: "Sport",
    engine: "249 cc · 1 xi-lanh",
    price: "Liên hệ báo giá",
    tag: "Sport 250 cc",
    description: "Mẫu sportbike Honda 250 cc với động cơ một xi-lanh.",
    photos: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Honda_CBR250R_24.04.2026.jpg/960px-Honda_CBR250R_24.04.2026.jpg", alt: "Honda CBR250R màu đỏ 249 cc, sportbike một xi-lanh", source: "https://commons.wikimedia.org/wiki/File:Honda_CBR250R_24.04.2026.jpg", author: "Rjcastillo", license: "CC BY-SA 4.0" },
    ],
  },
  {
    slug: "honda-cb150r",
    name: "Honda CB150R",
    brand: "Honda",
    category: "Naked",
    engine: "149.16 cc · 1 xi-lanh",
    price: "Khoảng 98 triệu",
    tag: "Naked 150 cc",
    description: "Naked bike 150 cc với tay lái thẳng và kiểu dáng gọn gàng.",
    photos: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/2023_Honda_CB150R_ABS.jpg/960px-2023_Honda_CB150R_ABS.jpg", alt: "Honda CB150R - Xe moto 150cc giá bao nhiêu tại MOTOHAUS; xe moto naked bike dưới 100 triệu", source: "https://commons.wikimedia.org/wiki/File:2023_Honda_CB150R_ABS.jpg", author: "Chanokchon", license: "CC BY-SA 4.0" },
    ],
  },
  {
    slug: "honda-cb650r",
    name: "Honda CB650R",
    brand: "Honda",
    category: "Naked",
    engine: "649 cc · 4 xi-lanh",
    price: "Khoảng 247 triệu",
    tag: "Neo Sports Cafe",
    description: "Naked bike 4 máy với tư thế lái thẳng và thiết kế tối giản.",
    photos: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/2019_Honda_CB650R_%2820190428%29.jpg/960px-2019_Honda_CB650R_%2820190428%29.jpg", alt: "Honda CB650R đời 2019 649 cc, mẫu naked bike phân khối lớn", source: "https://commons.wikimedia.org/wiki/File:2019_Honda_CB650R_(20190428).jpg", author: "オーバードライブ83", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/2021_Honda_CB650R.png/960px-2021_Honda_CB650R.png", alt: "Honda CB650R đời 2021 649 cc nhìn nghiêng, mô tô naked bike", source: "https://commons.wikimedia.org/wiki/File:2021_Honda_CB650R.png", author: "Chanokchon", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/2023_Honda_CB650R_Standard.jpg/960px-2023_Honda_CB650R_Standard.jpg", alt: "Honda CB650R bản tiêu chuẩn 2023 649 cc, naked bike Honda", source: "https://commons.wikimedia.org/wiki/File:2023_Honda_CB650R_Standard.jpg", author: "Chanokchon", license: "CC BY-SA 4.0" },
    ],
  },
  {
    slug: "ktm-390-duke",
    name: "KTM 390 Duke",
    brand: "KTM",
    category: "Naked",
    engine: "399 cc · 1 xi-lanh",
    price: "Khoảng 199 triệu",
    tag: "Naked linh hoạt",
    description: "Naked bike nhỏ gọn, ưu tiên sự linh hoạt trong phố.",
    photos: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/KTM_Duke_390-01.jpg/960px-KTM_Duke_390-01.jpg", alt: "Mẫu KTM 390 Duke 399 cc linh hoạt trong phố, xe moto naked bike", source: "https://commons.wikimedia.org/wiki/File:KTM_Duke_390-01.jpg", author: "Priwo", license: "Public domain" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/KTM_390_Duke.jpg/960px-KTM_390_Duke.jpg", alt: "KTM 390 Duke màu cam 373 cc, mẫu naked bike linh hoạt", source: "https://commons.wikimedia.org/wiki/File:KTM_390_Duke.jpg", author: "LoiR", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/KTM_Duke_390_my_2021.jpeg/960px-KTM_Duke_390_my_2021.jpeg", alt: "KTM 390 Duke đời 2021 373 cc, mô tô naked bike KTM", source: "https://commons.wikimedia.org/wiki/File:KTM_Duke_390_my_2021.jpeg", author: "Riottoso", license: "Public domain" },
    ],
  },
  {
    slug: "yamaha-mt-07",
    name: "Yamaha MT-07",
    brand: "Yamaha",
    category: "Naked",
    engine: "689 cc · 2 xi-lanh",
    price: "Khoảng 260–300 triệu",
    tag: "Hyper Naked",
    description: "Naked bike tầm trung với động cơ CP2 hai xi-lanh.",
    photos: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/2021_Black_Yamaha_MT-07.jpg/960px-2021_Black_Yamaha_MT-07.jpg", alt: "Yamaha MT-07 màu đen đời 2021 689 cc, xe naked bike tầm trung", source: "https://commons.wikimedia.org/wiki/File:2021_Black_Yamaha_MT-07.jpg", author: "PackMecEng", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Yamaha_MT-07.jpg/960px-Yamaha_MT-07.jpg", alt: "Yamaha MT-07 nhìn từ phía trước, mô tô naked bike 689 cc", source: "https://commons.wikimedia.org/wiki/File:Yamaha_MT-07.jpg", author: "Na-Thur", license: "CC BY-SA 3.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Yamaha_MT-07_2025_EICMA_2024.jpg/960px-Yamaha_MT-07_2025_EICMA_2024.jpg", alt: "Yamaha MT-07 phiên bản 2025 tại EICMA, xe moto 689 cc", source: "https://commons.wikimedia.org/wiki/File:Yamaha_MT-07_2025_EICMA_2024.jpg", author: "AVMOTO", license: "CC BY-SA 4.0" },
    ],
  },
  {
    slug: "ducati-monster",
    name: "Ducati Monster",
    brand: "Ducati",
    category: "Naked",
    engine: "937 cc · 2 xi-lanh",
    price: "Khoảng 450–520 triệu",
    tag: "Italian Icon",
    description: "Dòng naked bike mang phong cách cơ bắp đặc trưng Ducati.",
    photos: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Ducati_Monster_-_black.jpg/960px-Ducati_Monster_-_black.jpg", alt: "MOTOHAUS - Địa chỉ bán xe moto chính hãng dòng Ducati Monster", source: "https://commons.wikimedia.org/wiki/File:Ducati_Monster_-_black.jpg", author: "Cjp24", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Ducati_monster_796_-_2012.jpg/960px-Ducati_monster_796_-_2012.jpg", alt: "Ducati Monster 796 đời 2012 803 cc, mô tô naked bike", source: "https://commons.wikimedia.org/wiki/File:Ducati_monster_796_-_2012.jpg", author: "4dimensionalUSB", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Monster_696.JPG/960px-Monster_696.JPG", alt: "Ducati Monster 696 696 cc, xe naked bike Ducati đời cũ", source: "https://commons.wikimedia.org/wiki/File:Monster_696.JPG", author: "Kaczorjunior", license: "CC BY-SA 3.0" },
    ],
  },
  {
    slug: "bmw-f-850-gs-adventure",
    name: "BMW F 850 GS Adventure",
    brand: "BMW Motorrad",
    category: "Adventure",
    engine: "853 cc · 2 xi-lanh",
    price: "Khoảng 700–850 triệu",
    tag: "Touring Adventure",
    description: "Adventure touring hướng đến những hành trình đường dài.",
    photos: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/BMW_F850GS_Adventure_Rallye_2020.jpg/960px-BMW_F850GS_Adventure_Rallye_2020.jpg", alt: "Tham khảo giá xe moto phân khối lớn lăn bánh dòng BMW F 850 GS Adventure", source: "https://commons.wikimedia.org/wiki/File:BMW_F850GS_Adventure_Rallye_2020.jpg", author: "Franken-Guzzista", license: "CC0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/BMW_F850GS_left_side.jpg/960px-BMW_F850GS_left_side.jpg", alt: "BMW F 850 GS nhìn từ bên trái, adventure touring 853 cc", source: "https://commons.wikimedia.org/wiki/File:BMW_F850GS_left_side.jpg", author: "Gadfium", license: "CC0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/BMW_F850GS_right_side.jpg/960px-BMW_F850GS_right_side.jpg", alt: "BMW F 850 GS nhìn từ bên phải, mô tô adventure 853 cc", source: "https://commons.wikimedia.org/wiki/File:BMW_F850GS_right_side.jpg", author: "Gadfium", license: "CC0" },
    ],
  },
  {
    slug: "triumph-tiger-900-gt",
    name: "Triumph Tiger 900 GT",
    brand: "Triumph",
    category: "Adventure",
    engine: "888 cc · 3 xi-lanh",
    price: "Khoảng 450–520 triệu",
    tag: "Touring",
    description: "Adventure ba xi-lanh dành cho đường trường và touring.",
    photos: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/2021_Triumph_Tiger_900_GT_LRH.jpg/960px-2021_Triumph_Tiger_900_GT_LRH.jpg", alt: "Triumph Tiger 900 GT đời 2021 888 cc, xe moto adventure touring", source: "https://commons.wikimedia.org/wiki/File:2021_Triumph_Tiger_900_GT_LRH.jpg", author: "Vauxford", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Triumph_Tiger_900_GT_Pro_%281%29.jpg/960px-Triumph_Tiger_900_GT_Pro_%281%29.jpg", alt: "Triumph Tiger 900 GT Pro 888 cc, mô tô touring đường dài", source: "https://commons.wikimedia.org/wiki/File:Triumph_Tiger_900_GT_Pro_(1).jpg", author: "Cjp24", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Triumph_Tiger_900.jpg/960px-Triumph_Tiger_900.jpg", alt: "Triumph Tiger 900 nhìn nghiêng, xe adventure touring 888 cc", source: "https://commons.wikimedia.org/wiki/File:Triumph_Tiger_900.jpg", author: "Corvettec6r", license: "CC BY-SA 4.0" },
    ],
  },
  {
    slug: "suzuki-v-strom-250",
    name: "Suzuki V-Strom 250",
    brand: "Suzuki",
    category: "Adventure",
    engine: "248 cc · 2 xi-lanh",
    price: "Liên hệ báo giá",
    tag: "Adventure 250 cc",
    description: "Adventure touring 250 cc hướng đến các chuyến đi đường dài.",
    photos: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Suzuki_DL250_V-Strom.jpg/960px-Suzuki_DL250_V-Strom.jpg", alt: "Suzuki V-Strom 250 đỏ đen 248 cc, mô tô adventure touring", source: "https://commons.wikimedia.org/wiki/File:Suzuki_DL250_V-Strom.jpg", author: "Maaj01", license: "CC BY-SA 4.0" },
    ],
  },
  {
    slug: "harley-davidson-sportster-883",
    name: "Harley-Davidson Sportster 883",
    brand: "Harley-Davidson",
    category: "Cruiser",
    engine: "883 cc · V-Twin",
    price: "Khoảng 220–350 triệu (xe cũ)",
    tag: "Cruiser Mỹ",
    description: "Cruiser cổ điển với động cơ V-Twin và dáng ngồi thấp.",
    photos: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Harley-Davidson_Sportster%2C_Museum_Angkut%2C_Batu%2C_Indonesia%2C_2017-10-01.jpg/960px-Harley-Davidson_Sportster%2C_Museum_Angkut%2C_Batu%2C_Indonesia%2C_2017-10-01.jpg", alt: "Harley-Davidson Sportster 883 tại Museum Angkut, xe moto cruiser cổ điển", source: "https://commons.wikimedia.org/wiki/File:Harley-Davidson_Sportster,_Museum_Angkut,_Batu,_Indonesia,_2017-10-01.jpg", author: "Crisco 1492", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/Harley-Davidson_Sportster_XL883_2007.JPG/960px-Harley-Davidson_Sportster_XL883_2007.JPG", alt: "Harley-Davidson Sportster XL883 đời 2007 883 cc, dáng cruiser yên thấp", source: "https://commons.wikimedia.org/wiki/File:Harley-Davidson_Sportster_XL883_2007.JPG", author: "Abhijit.thakur", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Harley-davidson-sportster-iron-883.jpg/960px-Harley-davidson-sportster-iron-883.jpg", alt: "Harley-Davidson Sportster Iron 883 883 cc, xe moto cruiser", source: "https://commons.wikimedia.org/wiki/File:Harley-davidson-sportster-iron-883.jpg", author: "Alek Kirstein", license: "CC BY-SA 2.0" },
    ],
  },
  {
    slug: "royal-enfield-classic-350",
    name: "Royal Enfield Classic 350",
    brand: "Royal Enfield",
    category: "Cruiser",
    engine: "349 cc · 1 xi-lanh",
    price: "Khoảng 120–130 triệu",
    tag: "Classic",
    description: "Classic roadster mang phong cách hoài cổ và tư thế lái thư thả.",
    photos: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Royal_Enfield_Classic_350.jpg/960px-Royal_Enfield_Classic_350.jpg", alt: "Royal Enfield Classic 350 nhìn từ bên hông, xe moto dáng cổ điển 349 cc", source: "https://commons.wikimedia.org/wiki/File:Royal_Enfield_Classic_350.jpg", author: "Tirthrajnbarot", license: "CC BY-SA 3.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/2022Classic350.jpg/960px-2022Classic350.jpg", alt: "Royal Enfield Classic 350 đời 2022 349 cc, mô tô phong cách hoài cổ", source: "https://commons.wikimedia.org/wiki/File:2022Classic350.jpg", author: "Billyinthedarbies", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Royal_Enfield_Classic_350_SideView.JPG/960px-Royal_Enfield_Classic_350_SideView.JPG", alt: "Royal Enfield Classic 350 nhìn nghiêng, classic 349 cc dáng cổ điển", source: "https://commons.wikimedia.org/wiki/File:Royal_Enfield_Classic_350_SideView.JPG", author: "Tirthrajnbarot", license: "CC BY-SA 3.0" },
    ],
  },
];

export function getMotorcycleDetails(motorcycle: Motorcycle): MotorcycleDetails {
  const profiles: Record<string, Omit<MotorcycleDetails, "specifications">> = {
    Sport: {
      overview: "Mẫu xe thể thao thiên về cảm giác lái chủ động và thiết kế khí động học.",
      idealFor: "Người thích dáng xe thể thao, cảm giác lái chủ động và những cung đường nhiều góc cua.",
      rideFeel: "Tư thế lái hướng về phía trước, phản hồi tay lái nhanh và dáng xe ôm người. Khi đi phố nên làm quen từ tốn với góc lái và vị trí ngồi.",
      highlights: ["Thiết kế khí động học, đậm chất thể thao", "Khung xe gọn, dễ kiểm soát khi vào cua", "Phù hợp nâng cấp kỹ năng xe côn tay"],
    },
    Naked: {
      overview: "Mẫu naked bike cân bằng giữa sự linh hoạt trong phố và khả năng đi đường dài.",
      idealFor: "Người cần một mẫu xe linh hoạt để đi phố nhưng vẫn có sức mạnh cho những chuyến đi cuối tuần.",
      rideFeel: "Ghi-đông cao và tư thế ngồi thẳng giúp quan sát tốt, xoay trở dễ trong phố. Động cơ phản hồi rõ ở dải ga giữa.",
      highlights: ["Tư thế lái tự nhiên, dễ làm quen", "Ghi-đông rộng cho khả năng kiểm soát tốt", "Cân bằng giữa đi phố và đi tour ngắn"],
    },
    Adventure: {
      overview: "Mẫu adventure touring ưu tiên sự thoải mái, tầm quan sát và khả năng đi nhiều loại đường.",
      idealFor: "Người thường đi đường dài, thích khám phá và cần tư thế ngồi thoải mái cùng khả năng chở hành lý.",
      rideFeel: "Góc lái rộng, vị trí ngồi cao và hệ thống treo ưu tiên sự êm ái. Xe phù hợp đường trường; hãy chọn lốp và phụ kiện theo cung đường thực tế.",
      highlights: ["Tư thế ngồi thoải mái cho hành trình dài", "Khoảng sáng gầm và tầm quan sát tốt", "Có thể nâng cấp thùng, kính chắn gió và bảo vệ máy"],
    },
    Cruiser: {
      overview: "Mẫu xe phong cách cruiser/classic có yên thấp, nhịp máy thư thả và cá tính riêng.",
      idealFor: "Người yêu phong cách cổ điển, muốn tận hưởng nhịp lái thư thả và âm thanh động cơ đặc trưng.",
      rideFeel: "Yên thấp, tay lái mở và mô-men xoắn ở vòng tua thấp tạo cảm giác chắc chắn. Xe hợp chạy thư thả hơn là tối ưu tốc độ.",
      highlights: ["Yên thấp, dễ chống chân khi dừng xe", "Thiết kế giàu cá tính và dễ cá nhân hóa", "Mô-men xoắn phù hợp hành trình thư thả"],
    },
  };

  const modelDetails: Record<string, Partial<MotorcycleDetails>> = {
    "yamaha-yzf-r15": {
      overview: "Yamaha YZF-R15 là sportbike cỡ nhỏ với động cơ 155 cc, phù hợp để làm quen xe côn tay và kỹ thuật vào cua.",
      highlights: ["Động cơ 155 cc có VVA", "Tư thế sportbike gọn và dễ làm quen", "Phù hợp đi phố, đi tour ngắn và luyện kỹ năng"],
      specifications: [{ label: "Công suất tham khảo", value: "Khoảng 19 hp" }, { label: "Hộp số", value: "6 cấp, côn tay" }, { label: "Chiều cao yên", value: "Khoảng 815 mm" }, { label: "Trọng lượng", value: "Khoảng 142 kg" }, { label: "Phanh", value: "Đĩa trước/sau, có ABS tùy phiên bản" }],
    },
    "suzuki-gsx-r150": {
      overview: "Suzuki GSX-R150 là sportbike 150 cc nhẹ, dễ xoay trở và có tư thế thể thao vừa phải cho việc sử dụng hằng ngày.",
      highlights: ["Trọng lượng nhẹ, dễ kiểm soát", "Động cơ 147,3 cc phản hồi nhanh", "Dáng sportbike nhưng vẫn tiện đi phố"],
      specifications: [{ label: "Công suất tham khảo", value: "Khoảng 19 hp" }, { label: "Hộp số", value: "6 cấp, côn tay" }, { label: "Chiều cao yên", value: "Khoảng 785 mm" }, { label: "Trọng lượng", value: "Khoảng 126 kg" }, { label: "Phanh", value: "Đĩa trước/sau, ABS tùy phiên bản" }],
    },
    "yamaha-yzf-r25": {
      overview: "Yamaha YZF-R25 nâng cấp trải nghiệm sportbike bằng động cơ hai xi-lanh 249 cc, phù hợp người muốn lên đời từ nhóm 150 cc.",
      highlights: ["Động cơ hai xi-lanh vận hành mượt", "Dàn áo và tư thế đậm chất R-Series", "Cân bằng giữa đi phố và đường trường"],
      specifications: [{ label: "Công suất tham khảo", value: "Khoảng 35 hp" }, { label: "Hộp số", value: "6 cấp, côn tay" }, { label: "Chiều cao yên", value: "Khoảng 780 mm" }, { label: "Trọng lượng", value: "Khoảng 169 kg" }, { label: "Phanh", value: "Đĩa trước/sau, ABS tùy phiên bản" }],
    },
    "kawasaki-ninja-zx-6r": {
      overview: "Kawasaki Ninja ZX-6R là supersport 636 cc hướng đến người đã có kinh nghiệm, cần hiệu suất cao và khả năng vận hành trên đường kỹ thuật.",
      highlights: ["Động cơ 4 xi-lanh 636 cc", "Khung gầm và phanh thiên về vận hành thể thao", "Cần người lái có kinh nghiệm và kiểm soát ga tốt"],
      specifications: [{ label: "Công suất tham khảo", value: "Khoảng 127 hp" }, { label: "Hộp số", value: "6 cấp, côn tay" }, { label: "Chiều cao yên", value: "Khoảng 830 mm" }, { label: "Trọng lượng", value: "Khoảng 196 kg" }, { label: "Điện tử", value: "ABS, kiểm soát lực kéo tùy phiên bản" }],
    },
    "kawasaki-ninja-250": {
      overview: "Kawasaki Ninja 250 là sportbike hai xi-lanh dễ tiếp cận, phù hợp người muốn dáng xe thể thao nhưng chưa cần sức mạnh quá lớn.",
      highlights: ["Động cơ hai xi-lanh 249 cc", "Dễ nâng cấp từ xe 150 cc", "Dàn áo bảo vệ gió khi đi đường dài"],
      specifications: [{ label: "Công suất tham khảo", value: "Khoảng 39 hp" }, { label: "Hộp số", value: "6 cấp, côn tay" }, { label: "Chiều cao yên", value: "Khoảng 795 mm" }, { label: "Trọng lượng", value: "Khoảng 167 kg" }, { label: "Phanh", value: "Đĩa trước/sau, ABS tùy phiên bản" }],
    },
    "honda-cbr250r": {
      overview: "Honda CBR250R dùng động cơ một xi-lanh dễ bảo dưỡng, là lựa chọn thực dụng cho người cần một mẫu sportbike 250 cc gọn nhẹ.",
      highlights: ["Động cơ một xi-lanh dễ làm quen", "Kích thước gọn, thuận tiện đi phố", "Chi phí sử dụng thường dễ tiếp cận hơn nhóm phân khối lớn"],
      specifications: [{ label: "Công suất tham khảo", value: "Khoảng 26 hp" }, { label: "Hộp số", value: "6 cấp, côn tay" }, { label: "Chiều cao yên", value: "Khoảng 780 mm" }, { label: "Trọng lượng", value: "Khoảng 164 kg" }, { label: "Phanh", value: "Đĩa trước/sau, ABS tùy phiên bản" }],
    },
    "honda-cb150r": {
      overview: "Honda CB150R là naked bike nhỏ gọn, nổi bật với tư thế lái thẳng và khả năng di chuyển linh hoạt trong đô thị.",
      highlights: ["Thiết kế Neo Sports Café", "Tay lái rộng, dễ xử lý trong phố", "Tiết kiệm và phù hợp đi hằng ngày"],
      specifications: [{ label: "Công suất tham khảo", value: "Khoảng 16 hp" }, { label: "Hộp số", value: "6 cấp, côn tay" }, { label: "Chiều cao yên", value: "Khoảng 802 mm" }, { label: "Trọng lượng", value: "Khoảng 125 kg" }, { label: "Phanh", value: "Đĩa trước/sau, ABS tùy phiên bản" }],
    },
    "honda-cb650r": {
      overview: "Honda CB650R kết hợp kiểu dáng Neo Sports Café với động cơ 4 xi-lanh 649 cc, phù hợp người muốn một chiếc naked bike giàu cảm xúc.",
      highlights: ["Động cơ 4 xi-lanh cho tiếng máy đặc trưng", "Tư thế lái thẳng, dễ dùng hơn sportbike", "Phù hợp đi phố và những chuyến đi cuối tuần"],
      specifications: [{ label: "Công suất tham khảo", value: "Khoảng 94 hp" }, { label: "Hộp số", value: "6 cấp, côn tay" }, { label: "Chiều cao yên", value: "Khoảng 810 mm" }, { label: "Trọng lượng", value: "Khoảng 202 kg" }, { label: "Phanh", value: "Đĩa đôi trước, đĩa sau, ABS" }],
    },
    "ktm-390-duke": {
      overview: "KTM 390 Duke là naked bike thiên về sự linh hoạt, có kích thước gọn và động cơ một xi-lanh mạnh trong nhóm dưới 400 cc.",
      highlights: ["Mô-men xoắn tốt ở dải tua thấp và giữa", "Khung xe nhẹ, phản hồi nhanh", "Hợp đi phố, đường đèo và người thích cảm giác lái trực tiếp"],
      specifications: [{ label: "Công suất tham khảo", value: "Khoảng 44 hp" }, { label: "Hộp số", value: "6 cấp, côn tay" }, { label: "Chiều cao yên", value: "Khoảng 830 mm" }, { label: "Trọng lượng", value: "Khoảng 171 kg" }, { label: "Điện tử", value: "ABS vào cua, kiểm soát lực kéo tùy đời xe" }],
    },
    "yamaha-mt-07": {
      overview: "Yamaha MT-07 sử dụng động cơ CP2 hai xi-lanh 689 cc, nổi tiếng bởi mô-men xoắn dễ khai thác và khả năng đi phố linh hoạt.",
      highlights: ["Động cơ CP2 phản hồi ga rõ ràng", "Tư thế lái thoải mái, dễ sử dụng", "Phù hợp cả đi phố lẫn tour đường dài"],
      specifications: [{ label: "Công suất tham khảo", value: "Khoảng 73 hp" }, { label: "Hộp số", value: "6 cấp, côn tay" }, { label: "Chiều cao yên", value: "Khoảng 805 mm" }, { label: "Trọng lượng", value: "Khoảng 184 kg" }, { label: "Phanh", value: "Đĩa trước/sau, ABS" }],
    },
    "ducati-monster": {
      overview: "Ducati Monster là naked bike hiệu suất cao với phong cách cơ bắp, động cơ V-Twin và trang bị điện tử hướng đến trải nghiệm thể thao.",
      highlights: ["Thiết kế khung sườn và bình xăng đặc trưng", "Động cơ V-Twin giàu mô-men xoắn", "Trang bị điện tử phong phú tùy phiên bản"],
      specifications: [{ label: "Công suất tham khảo", value: "Khoảng 111 hp" }, { label: "Hộp số", value: "6 cấp, côn tay" }, { label: "Chiều cao yên", value: "Khoảng 820 mm" }, { label: "Trọng lượng", value: "Khoảng 188 kg" }, { label: "Điện tử", value: "ABS vào cua, kiểm soát lực kéo và chế độ lái" }],
    },
    "bmw-f-850-gs-adventure": {
      overview: "BMW F 850 GS Adventure được thiết kế cho touring đường dài, có bình xăng lớn, tư thế ngồi thoải mái và khả năng đi địa hình nhẹ.",
      highlights: ["Tầm hoạt động tốt cho đường dài", "Có thể lắp thùng và phụ kiện touring", "Hệ thống treo và tư thế ngồi phù hợp nhiều loại đường"],
      specifications: [{ label: "Công suất tham khảo", value: "Khoảng 95 hp" }, { label: "Hộp số", value: "6 cấp, côn tay" }, { label: "Chiều cao yên", value: "Khoảng 875 mm" }, { label: "Trọng lượng", value: "Khoảng 244 kg khi đầy nhiên liệu" }, { label: "Bình xăng", value: "Khoảng 23 lít" }],
    },
    "triumph-tiger-900-gt": {
      overview: "Triumph Tiger 900 GT là adventure touring ba xi-lanh, cân bằng giữa sự êm ái trên đường trường và khả năng xử lý linh hoạt.",
      highlights: ["Động cơ ba xi-lanh mượt và giàu âm thanh", "Tư thế touring thoải mái", "Phù hợp các chuyến đi dài trên đường nhựa"],
      specifications: [{ label: "Công suất tham khảo", value: "Khoảng 95 hp" }, { label: "Hộp số", value: "6 cấp, côn tay" }, { label: "Chiều cao yên", value: "Khoảng 820–840 mm" }, { label: "Trọng lượng", value: "Khoảng 222 kg" }, { label: "Điện tử", value: "Nhiều chế độ lái, ABS và kiểm soát lực kéo" }],
    },
    "suzuki-v-strom-250": {
      overview: "Suzuki V-Strom 250 là adventure touring nhỏ gọn, dễ tiếp cận và phù hợp cho những chuyến đi xa đầu tiên.",
      highlights: ["Động cơ hai xi-lanh vận hành hiền và ổn định", "Tư thế ngồi thẳng, dễ quan sát", "Kích thước phù hợp người mới đi tour"],
      specifications: [{ label: "Công suất tham khảo", value: "Khoảng 25 hp" }, { label: "Hộp số", value: "6 cấp, côn tay" }, { label: "Chiều cao yên", value: "Khoảng 800 mm" }, { label: "Trọng lượng", value: "Khoảng 188 kg" }, { label: "Bình xăng", value: "Khoảng 17 lít" }],
    },
    "harley-davidson-sportster-883": {
      overview: "Harley-Davidson Sportster 883 mang đặc trưng cruiser Mỹ với động cơ V-Twin, yên thấp và trải nghiệm chạy thư thả.",
      highlights: ["Âm thanh và mô-men xoắn đặc trưng V-Twin", "Yên thấp, dễ chống chân", "Nền tảng tốt để cá nhân hóa phong cách"],
      specifications: [{ label: "Công suất tham khảo", value: "Khoảng 50 hp" }, { label: "Hộp số", value: "5 cấp, côn tay" }, { label: "Chiều cao yên", value: "Khoảng 735 mm" }, { label: "Trọng lượng", value: "Khoảng 260 kg" }, { label: "Làm mát", value: "Làm mát bằng gió" }],
    },
    "royal-enfield-classic-350": {
      overview: "Royal Enfield Classic 350 là mẫu xe hoài cổ dễ tiếp cận, ưu tiên nhịp máy thư thả, thiết kế cổ điển và trải nghiệm đi phố.",
      highlights: ["Thiết kế retro dễ nhận diện", "Động cơ một xi-lanh có mô-men xoắn vừa phải", "Phù hợp đi phố và những chuyến đi ngắn"],
      specifications: [{ label: "Công suất tham khảo", value: "Khoảng 20 hp" }, { label: "Hộp số", value: "5 cấp, côn tay" }, { label: "Chiều cao yên", value: "Khoảng 805 mm" }, { label: "Trọng lượng", value: "Khoảng 195 kg" }, { label: "Phanh", value: "Đĩa trước/sau, ABS tùy phiên bản" }],
    },
  };

  const profile = profiles[motorcycle.category] ?? profiles.Naked;
  const model = modelDetails[motorcycle.slug] ?? {};

  return {
    ...profile,
    ...model,
    specifications: [
      { label: "Thương hiệu", value: motorcycle.brand },
      { label: "Phân khúc", value: motorcycle.category },
      { label: "Động cơ tham khảo", value: motorcycle.engine },
      { label: "Định vị mẫu xe", value: motorcycle.tag },
      { label: "Mức giá tham khảo", value: motorcycle.price },
      ...(model.specifications ?? []),
    ],
  };
}
