import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsArticles, type NewsArticle } from "../../news-articles";

type NewsArticlePageProps = {
  params: Promise<{ slug: string }>;
};

function findArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}

export function generateStaticParams() {
  return newsArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: NewsArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticle(slug);

  if (!article) {
    return { title: "Không tìm thấy bài viết" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    keywords: [article.keyword],
    alternates: { canonical: `/tin-tuc/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.cover ? [article.cover.src] : [],
    },
  };
}

function ArticleBody({ article }: { article: NewsArticle }) {
  if (article.kind === "beginners") {
    return (
      <>
        <p>
          Nếu bạn đang tìm các dòng xe moto cho người mới, hãy bắt đầu từ nhu cầu đi lại, thể trạng và thời gian luyện tập thay vì chỉ nhìn vào dung tích động cơ. Một chiếc xe vừa tầm giúp bạn kiểm soát tốt hơn và có thêm thời gian xây dựng kỹ năng.
        </p>
        <h2>Ba kiểu xe thường được cân nhắc</h2>
        <ul>
          <li><strong>Sport cỡ nhỏ:</strong> dáng thể thao, động cơ vừa phải; tư thế chồm có thể cần thời gian làm quen.</li>
          <li><strong>Naked bike:</strong> tay lái rộng và tư thế thẳng hơn, thường dễ xoay trở trong phố; hãy kiểm tra chiều cao yên và trọng lượng thực tế.</li>
          <li><strong>Adventure hoặc Cruiser:</strong> phù hợp với nhu cầu đường dài hay phong cách riêng, nhưng chiều cao yên, khối lượng và chi phí chăm xe cần được cân nhắc.</li>
        </ul>
        <h2>Gợi ý xe cỡ nhỏ: Yamaha YZF-R15</h2>
        <p>
          Yamaha YZF-R15 có động cơ 155 cc, kiểu dáng sport và là một lựa chọn để người mới tìm hiểu xe côn tay. Trước khi mua, hãy ngồi thử, chạy thử khi đủ điều kiện, tính ngân sách cho đồ bảo hộ và học cách phanh, chuyển số an toàn. Xem <Link href="/moto/yamaha-yzf-r15">trang sản phẩm Yamaha YZF-R15</Link> để tham khảo ảnh, thông số và giá trong danh mục.
        </p>
        <p>
          Dù chọn dòng nào, hãy ưu tiên xe có giấy tờ rõ ràng, tư thế lái bạn kiểm soát được và chương trình hướng dẫn phù hợp. Giá trên website chỉ mang tính tham khảo; liên hệ trước để xác nhận phiên bản và tình trạng xe.
        </p>
      </>
    );
  }

  if (article.kind === "license") {
    return (
      <>
        <p>
          Cụm từ xe moto không cần bằng a2 thường xuất hiện khi người mua so sánh xe 150 cc với mô tô phân khối lớn. Cần hiểu đúng: không có nghĩa là được chạy mô tô mà không cần giấy phép lái xe phù hợp; điều cần kiểm tra là hạng bằng áp dụng cho dung tích hoặc công suất của xe.
        </p>
        <h2>Phân hạng giấy phép lái xe mô tô</h2>
        <p>
          Theo hệ thống phân hạng có hiệu lực từ ngày 1/7/2025, hạng A1 áp dụng cho mô tô hai bánh có dung tích xi-lanh đến 125 cm³ (hoặc công suất động cơ điện đến 11 kW); hạng A áp dụng cho mô tô trên 125 cm³ (hoặc công suất điện trên 11 kW). Quy định chuyển tiếp và hiệu lực của giấy phép đã cấp trước đó cần được đối chiếu theo thông tin chính thức trên giấy phép và quy định hiện hành.
        </p>
        <p>
          Vì vậy, xe 150 cc không phải là xe “không cần bằng”: theo ngưỡng dung tích nói trên, người lái cần hạng giấy phép phù hợp. Yamaha YZF-R15 trong danh mục có dung tích 155 cc; hãy kiểm tra hạng bằng của mình trước khi lái thử hoặc nhận xe.
        </p>
        <h2>Xem các mẫu xe cỡ nhỏ</h2>
        <p>
          Bạn có thể tham khảo <Link href="/danh-muc/sport">danh mục Sport với các mẫu mô tô cỡ nhỏ</Link>, trong đó có Yamaha YZF-R15 155 cc. Dung tích và hạng bằng của từng phiên bản cần được xác nhận từ giấy tờ xe.
        </p>
        <p className="article-disclaimer">
          Nội dung nhằm cung cấp thông tin tổng quan, không thay thế tư vấn pháp lý. Hãy tra cứu văn bản và hướng dẫn chính thức mới nhất trước khi điều khiển phương tiện.
        </p>
      </>
    );
  }

  return (
    <>
      <p>
        Chi phí bảo dưỡng xe moto phân khối lớn không có một mức cố định cho mọi người. Dung tích và kết cấu động cơ, đời xe, phụ tùng, điều kiện đường sá và cách sử dụng đều ảnh hưởng đến lịch chăm sóc cũng như khoản chi thực tế.
      </p>
      <h2>Những hạng mục nên dự trù</h2>
      <ul>
        <li><strong>Dầu động cơ và lọc:</strong> thay theo lịch trong sổ tay của đúng mẫu xe, đồng thời lưu ý điều kiện vận hành khắc nghiệt.</li>
        <li><strong>Lốp, má phanh và dầu phanh:</strong> kiểm tra độ mòn, áp suất và tình trạng vật liệu; thay khi chạm ngưỡng an toàn hoặc đến hạn.</li>
        <li><strong>Sên, nhông và đĩa:</strong> vệ sinh, bôi trơn và căn chỉnh định kỳ; thay theo bộ khi đã mòn hoặc hư hỏng.</li>
        <li><strong>Nước làm mát, lọc gió, bugi và ắc quy:</strong> kiểm tra theo hướng dẫn của nhà sản xuất, không thay chỉ dựa trên một mốc chung cho mọi xe.</li>
      </ul>
      <h2>Lập ngân sách và giữ lịch sử bảo dưỡng</h2>
      <p>
        Hãy yêu cầu báo giá tách riêng công và phụ tùng, hỏi rõ loại vật tư, thời hạn bảo hành và hạng mục cần làm ngay so với hạng mục có thể theo dõi. Ghi lại số km, ngày bảo dưỡng và hóa đơn giúp dự báo lần chăm xe tiếp theo, đồng thời hữu ích khi chuyển nhượng.
      </p>
      <p>
        Khi mua xe, đừng chỉ tính giá ban đầu: hãy dành ngân sách cho bảo hộ, vật tư hao mòn và kiểm tra định kỳ. Tham khảo <Link href="/moto/ktm-390-duke">thông tin KTM 390 Duke</Link> hoặc liên hệ để hỏi lịch bảo dưỡng phù hợp với phiên bản xe của bạn.
      </p>
    </>
  );
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  const article = findArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="article-page">
      <nav aria-label="Breadcrumb" className="product-breadcrumb">
        <Link href="/">Trang chủ</Link>
        <span aria-hidden="true">/</span>
        <Link href="/tin-tuc">Tin tức</Link>
        <span aria-hidden="true">/</span>
        <span>{article.category}</span>
      </nav>
      <article>
        <header className="article-heading">
          <span className="eyebrow">{article.category}</span>
          <h1>{article.title}</h1>
          <p>{article.excerpt}</p>
        </header>
        {article.cover && (
          <figure className="article-cover">
            <Image
              alt={article.cover.alt}
              fill
              priority
              sizes="(max-width: 700px) 100vw, 1000px"
              src={article.cover.src}
            />
          </figure>
        )}
        <div className="article-content">
          <ArticleBody article={article} />
          <aside className="article-callout">
            <strong>Đang chọn xe?</strong>
            <p>Tham khảo bộ sưu tập mô tô hoặc liên hệ MOTOHAUS để xác nhận thông tin xe.</p>
            <div>
              <Link href="/#collection">Xem xe đang bán ↗</Link>
              <Link href="/lien-he">Liên hệ ↗</Link>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
