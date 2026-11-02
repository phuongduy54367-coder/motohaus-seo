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
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/2014_Yamaha_YZF-R15.JPG/960px-2014_Yamaha_YZF-R15.JPG", alt: "Yamaha YZF-R15 đời 2014, ảnh bên hông", source: "https://commons.wikimedia.org/wiki/File:2014_Yamaha_YZF-R15.JPG", author: "Rainmaker47", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Yamaha_YZF-R15.jpg/960px-Yamaha_YZF-R15.jpg", alt: "Yamaha YZF-R15 nhìn từ góc trước", source: "https://commons.wikimedia.org/wiki/File:Yamaha_YZF-R15.jpg", author: "Rikita", license: "CC BY-SA 3.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Rider_cornering_on_Yamaha_YZF-R15_front.jpg/960px-Rider_cornering_on_Yamaha_YZF-R15_front.jpg", alt: "Yamaha YZF-R15 đang vào cua", source: "https://commons.wikimedia.org/wiki/File:Rider_cornering_on_Yamaha_YZF-R15_front.jpg", author: "Sumeet Basak", license: "CC BY 2.0" },
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
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Suzuki_GSX-R150_-_Indonesia_International_Motor_Show_2017_-_April_30_2017.jpg/960px-Suzuki_GSX-R150_-_Indonesia_International_Motor_Show_2017_-_April_30_2017.jpg", alt: "Suzuki GSX-R150 màu đỏ tại triển lãm", source: "https://commons.wikimedia.org/wiki/File:Suzuki_GSX-R150_-_Indonesia_International_Motor_Show_2017_-_April_30_2017.jpg", author: "Wilzz99", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/2022_Suzuki_GSX-R150_Mandalika_Limited_Edition.jpg/960px-2022_Suzuki_GSX-R150_Mandalika_Limited_Edition.jpg", alt: "Suzuki GSX-R150 phiên bản Mandalika", source: "https://commons.wikimedia.org/wiki/File:2022_Suzuki_GSX-R150_Mandalika_Limited_Edition.jpg", author: "Haysnawri10", license: "CC BY-SA 4.0" },
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
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/2015_Yamaha_YZF-R25.JPG/960px-2015_Yamaha_YZF-R25.JPG", alt: "Yamaha YZF-R25 tại Yamaha Communication Plaza", source: "https://commons.wikimedia.org/wiki/File:2015_Yamaha_YZF-R25.JPG", author: "Rainmaker47", license: "CC BY-SA 4.0" },
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
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Kawasaki-ninja-zx-6r-ZX600J.jpg/960px-Kawasaki-ninja-zx-6r-ZX600J.jpg", alt: "Kawasaki Ninja ZX-6R ZX600J", source: "https://commons.wikimedia.org/wiki/File:Kawasaki-ninja-zx-6r-ZX600J.jpg", author: "Alex Borland", license: "CC0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/2007KawasakiNinjaZX6R-001.jpg/960px-2007KawasakiNinjaZX6R-001.jpg", alt: "Kawasaki Ninja ZX-6R đời 2007", source: "https://commons.wikimedia.org/wiki/File:2007KawasakiNinjaZX6R-001.jpg", author: "Rich Niewiroski Jr.", license: "CC BY 2.5" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Kawasaki_Ninja_ZX-6R_ZX636G.jpg/960px-Kawasaki_Ninja_ZX-6R_ZX636G.jpg", alt: "Kawasaki Ninja ZX-6R ZX636G", source: "https://commons.wikimedia.org/wiki/File:Kawasaki_Ninja_ZX-6R_ZX636G.jpg", author: "Sound Media", license: "CC0" },
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
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Kawasaki_Ninja_250_2018.jpg/960px-Kawasaki_Ninja_250_2018.jpg", alt: "Kawasaki Ninja 250 đời 2018", source: "https://commons.wikimedia.org/wiki/File:Kawasaki_Ninja_250_2018.jpg", author: "Rikita", license: "CC BY-SA 4.0" },
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
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Honda_CBR250R_24.04.2026.jpg/960px-Honda_CBR250R_24.04.2026.jpg", alt: "Honda CBR250R màu đỏ", source: "https://commons.wikimedia.org/wiki/File:Honda_CBR250R_24.04.2026.jpg", author: "Rjcastillo", license: "CC BY-SA 4.0" },
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
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/2023_Honda_CB150R_ABS.jpg/960px-2023_Honda_CB150R_ABS.jpg", alt: "Honda CB150R ABS màu đen", source: "https://commons.wikimedia.org/wiki/File:2023_Honda_CB150R_ABS.jpg", author: "Chanokchon", license: "CC BY-SA 4.0" },
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
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/2019_Honda_CB650R_%2820190428%29.jpg/960px-2019_Honda_CB650R_%2820190428%29.jpg", alt: "Honda CB650R đời 2019", source: "https://commons.wikimedia.org/wiki/File:2019_Honda_CB650R_(20190428).jpg", author: "オーバードライブ83", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/2021_Honda_CB650R.png/960px-2021_Honda_CB650R.png", alt: "Honda CB650R đời 2021", source: "https://commons.wikimedia.org/wiki/File:2021_Honda_CB650R.png", author: "Chanokchon", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/2023_Honda_CB650R_Standard.jpg/960px-2023_Honda_CB650R_Standard.jpg", alt: "Honda CB650R phiên bản tiêu chuẩn đời 2023", source: "https://commons.wikimedia.org/wiki/File:2023_Honda_CB650R_Standard.jpg", author: "Chanokchon", license: "CC BY-SA 4.0" },
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
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/KTM_Duke_390-01.jpg/960px-KTM_Duke_390-01.jpg", alt: "KTM 390 Duke nhìn từ bên hông", source: "https://commons.wikimedia.org/wiki/File:KTM_Duke_390-01.jpg", author: "Priwo", license: "Public domain" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/KTM_390_Duke.jpg/960px-KTM_390_Duke.jpg", alt: "KTM 390 Duke màu cam", source: "https://commons.wikimedia.org/wiki/File:KTM_390_Duke.jpg", author: "LoiR", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/KTM_Duke_390_my_2021.jpeg/960px-KTM_Duke_390_my_2021.jpeg", alt: "KTM Duke 390 đời 2021", source: "https://commons.wikimedia.org/wiki/File:KTM_Duke_390_my_2021.jpeg", author: "Riottoso", license: "Public domain" },
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
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/2021_Black_Yamaha_MT-07.jpg/960px-2021_Black_Yamaha_MT-07.jpg", alt: "Yamaha MT-07 màu đen đời 2021", source: "https://commons.wikimedia.org/wiki/File:2021_Black_Yamaha_MT-07.jpg", author: "PackMecEng", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Yamaha_MT-07.jpg/960px-Yamaha_MT-07.jpg", alt: "Yamaha MT-07 nhìn từ phía trước", source: "https://commons.wikimedia.org/wiki/File:Yamaha_MT-07.jpg", author: "Na-Thur", license: "CC BY-SA 3.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Yamaha_MT-07_2025_EICMA_2024.jpg/960px-Yamaha_MT-07_2025_EICMA_2024.jpg", alt: "Yamaha MT-07 phiên bản 2025 tại EICMA", source: "https://commons.wikimedia.org/wiki/File:Yamaha_MT-07_2025_EICMA_2024.jpg", author: "AVMOTO", license: "CC BY-SA 4.0" },
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
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Ducati_Monster_-_black.jpg/960px-Ducati_Monster_-_black.jpg", alt: "Ducati Monster màu đen", source: "https://commons.wikimedia.org/wiki/File:Ducati_Monster_-_black.jpg", author: "Cjp24", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Ducati_monster_796_-_2012.jpg/960px-Ducati_monster_796_-_2012.jpg", alt: "Ducati Monster 796 đời 2012", source: "https://commons.wikimedia.org/wiki/File:Ducati_monster_796_-_2012.jpg", author: "4dimensionalUSB", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Monster_696.JPG/960px-Monster_696.JPG", alt: "Ducati Monster 696", source: "https://commons.wikimedia.org/wiki/File:Monster_696.JPG", author: "Kaczorjunior", license: "CC BY-SA 3.0" },
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
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/BMW_F850GS_Adventure_Rallye_2020.jpg/960px-BMW_F850GS_Adventure_Rallye_2020.jpg", alt: "BMW F 850 GS Adventure Rallye đời 2020", source: "https://commons.wikimedia.org/wiki/File:BMW_F850GS_Adventure_Rallye_2020.jpg", author: "Franken-Guzzista", license: "CC0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/BMW_F850GS_left_side.jpg/960px-BMW_F850GS_left_side.jpg", alt: "BMW F 850 GS nhìn từ bên trái", source: "https://commons.wikimedia.org/wiki/File:BMW_F850GS_left_side.jpg", author: "Gadfium", license: "CC0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/BMW_F850GS_right_side.jpg/960px-BMW_F850GS_right_side.jpg", alt: "BMW F 850 GS nhìn từ bên phải", source: "https://commons.wikimedia.org/wiki/File:BMW_F850GS_right_side.jpg", author: "Gadfium", license: "CC0" },
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
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/2021_Triumph_Tiger_900_GT_LRH.jpg/960px-2021_Triumph_Tiger_900_GT_LRH.jpg", alt: "Triumph Tiger 900 GT đời 2021", source: "https://commons.wikimedia.org/wiki/File:2021_Triumph_Tiger_900_GT_LRH.jpg", author: "Vauxford", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Triumph_Tiger_900_GT_Pro_%281%29.jpg/960px-Triumph_Tiger_900_GT_Pro_%281%29.jpg", alt: "Triumph Tiger 900 GT Pro", source: "https://commons.wikimedia.org/wiki/File:Triumph_Tiger_900_GT_Pro_(1).jpg", author: "Cjp24", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Triumph_Tiger_900.jpg/960px-Triumph_Tiger_900.jpg", alt: "Triumph Tiger 900 nhìn từ bên hông", source: "https://commons.wikimedia.org/wiki/File:Triumph_Tiger_900.jpg", author: "Corvettec6r", license: "CC BY-SA 4.0" },
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
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Suzuki_DL250_V-Strom.jpg/960px-Suzuki_DL250_V-Strom.jpg", alt: "Suzuki V-Strom 250 màu đỏ đen", source: "https://commons.wikimedia.org/wiki/File:Suzuki_DL250_V-Strom.jpg", author: "Maaj01", license: "CC BY-SA 4.0" },
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
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Harley-Davidson_Sportster%2C_Museum_Angkut%2C_Batu%2C_Indonesia%2C_2017-10-01.jpg/960px-Harley-Davidson_Sportster%2C_Museum_Angkut%2C_Batu%2C_Indonesia%2C_2017-10-01.jpg", alt: "Harley-Davidson Sportster tại Museum Angkut", source: "https://commons.wikimedia.org/wiki/File:Harley-Davidson_Sportster,_Museum_Angkut,_Batu,_Indonesia,_2017-10-01.jpg", author: "Crisco 1492", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/Harley-Davidson_Sportster_XL883_2007.JPG/960px-Harley-Davidson_Sportster_XL883_2007.JPG", alt: "Harley-Davidson Sportster XL883 đời 2007", source: "https://commons.wikimedia.org/wiki/File:Harley-Davidson_Sportster_XL883_2007.JPG", author: "Abhijit.thakur", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Harley-davidson-sportster-iron-883.jpg/960px-Harley-davidson-sportster-iron-883.jpg", alt: "Harley-Davidson Sportster Iron 883", source: "https://commons.wikimedia.org/wiki/File:Harley-davidson-sportster-iron-883.jpg", author: "Alek Kirstein", license: "CC BY-SA 2.0" },
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
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Royal_Enfield_Classic_350.jpg/960px-Royal_Enfield_Classic_350.jpg", alt: "Royal Enfield Classic 350 nhìn từ bên hông", source: "https://commons.wikimedia.org/wiki/File:Royal_Enfield_Classic_350.jpg", author: "Tirthrajnbarot", license: "CC BY-SA 3.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/2022Classic350.jpg/960px-2022Classic350.jpg", alt: "Royal Enfield Classic 350 đời 2022", source: "https://commons.wikimedia.org/wiki/File:2022Classic350.jpg", author: "Billyinthedarbies", license: "CC BY-SA 4.0" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Royal_Enfield_Classic_350_SideView.JPG/960px-Royal_Enfield_Classic_350_SideView.JPG", alt: "Royal Enfield Classic 350 nhìn nghiêng", source: "https://commons.wikimedia.org/wiki/File:Royal_Enfield_Classic_350_SideView.JPG", author: "Tirthrajnbarot", license: "CC BY-SA 3.0" },
    ],
  },
];
