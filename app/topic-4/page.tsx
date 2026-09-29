import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JavaScript SEO: CSR, SSR và SSG",
  description:
    "So sánh CSR, SSR, SSG; kiểm tra nội dung render bằng Google Search Console và Rich Results Test; khuyến nghị SEO cho Next.js.",
};

export default function TopicFourPage() {
  return (
    <main className="topic-page">
      <header className="topic-intro">
        <span className="eyebrow">Đồ án · Topic 4 · JavaScript SEO</span>
        <h1>Google nhìn thấy gì khi trang web chạy JavaScript?</h1>
        <p>
          Website demo MOTOHAUS dùng Next.js để minh họa Client-Side Rendering,
          Server-Side Rendering và Static Site Generation. Mục tiêu không phải
          chọn một kỹ thuật cho mọi trang, mà đưa nội dung quan trọng vào HTML
          sớm và chỉ dùng JavaScript phía trình duyệt cho phần cần tương tác.
        </p>
      </header>

      <section className="topic-section">
        <h2>Ba cách render, ba thời điểm tạo HTML</h2>
        <p>
          Googlebot có thể xử lý JavaScript thông qua Web Rendering Service,
          nhưng crawl và render có thể diễn ra ở các bước khác nhau. Nội dung
          phụ thuộc hoàn toàn vào JavaScript có thể được phát hiện muộn hơn;
          một số crawler hoặc công cụ xem trước không chạy JavaScript. SSR/SSG
          giúp nội dung chính có sẵn trong phản hồi HTML đầu tiên, nhưng không
          tự động đảm bảo được index hay thứ hạng.
        </p>
        <table className="render-table">
          <thead><tr><th>Kỹ thuật</th><th>HTML ban đầu</th><th>Trade-off</th><th>Ví dụ phù hợp</th></tr></thead>
          <tbody>
            <tr><td><strong>CSR</strong></td><td>Thường có vỏ trang; JavaScript lấy dữ liệu rồi dựng nội dung.</td><td>Cần tải và chạy JS; nội dung có thể bị trì hoãn với bot.</td><td>Dashboard, bộ lọc, nội dung sau đăng nhập.</td></tr>
            <tr><td><strong>SSR</strong></td><td>Server dựng HTML theo từng request.</td><td>Nội dung mới theo request; tốn tài nguyên server hơn.</td><td>Giá/tồn kho cần cập nhật thường xuyên, trang cá nhân hóa.</td></tr>
            <tr><td><strong>SSG</strong></td><td>HTML tạo sẵn lúc build, phân phối nhanh qua CDN.</td><td>Dữ liệu đổi cần build lại hoặc cơ chế revalidation.</td><td>Trang giới thiệu, bài viết, danh mục ít thay đổi.</td></tr>
          </tbody>
        </table>
        <div className="render-demos">
          <article className="render-demo"><strong>CSR · /csr</strong><p>Xe chỉ được thêm sau khi JavaScript chạy. So sánh HTML nguồn ban đầu với DOM sau render.</p><a href="/csr">Mở demo CSR ↗</a></article>
          <article className="render-demo"><strong>SSR · /ssr</strong><p>Server tạo nội dung theo request; thời điểm render thay đổi sau mỗi lần tải trang.</p><a href="/ssr">Mở demo SSR ↗</a></article>
          <article className="render-demo"><strong>SSG · /ssg</strong><p>Next.js tạo trang tĩnh lúc build; phù hợp nội dung ít đổi và có thể cache trên CDN.</p><a href="/ssg">Mở demo SSG ↗</a></article>
        </div>
      </section>

      <section className="topic-section">
        <h2>Cách kiểm tra bằng công cụ Google</h2>
        <ol className="checklist">
          <li>Đưa website lên URL công khai. Kiểm tra trang không bị chặn bởi <a href="/robots.txt">robots.txt</a>, thẻ noindex hoặc yêu cầu đăng nhập; gửi <a href="/sitemap.xml">sitemap.xml</a> trong Search Console.</li>
          <li>Trong Google Search Console, mở URL Inspection, nhập URL cụ thể rồi chọn Test live URL. Xem trạng thái truy cập, HTML đã render, ảnh chụp màn hình và tài nguyên bị chặn.</li>
          <li>So sánh HTML nguồn (View Page Source) với DOM trong DevTools sau khi JavaScript chạy. Kiểm tra tiêu đề, mô tả, nội dung xe và liên kết nội bộ có xuất hiện đúng hay không.</li>
          <li>Nếu trang có structured data, dùng Rich Results Test để kiểm tra loại kết quả được hỗ trợ, lỗi và cảnh báo. Công cụ này không thay thế kiểm tra indexing bằng Search Console.</li>
          <li>Sau khi sửa, kiểm tra lại URL live; gửi sitemap trong Search Console và yêu cầu lập chỉ mục nếu phù hợp. Test thành công không đồng nghĩa Google chắc chắn sẽ index hoặc hiển thị rich result.</li>
        </ol>
      </section>

      <section className="topic-section">
        <h2>Khuyến nghị cho website này với React / Next.js</h2>
        <p>
          Next.js App Router mặc định render Page và Layout thành Server
          Components. Giữ trang chủ, nội dung sản phẩm, tiêu đề và metadata ở
          phía server; đặt phần lọc/tìm kiếm trong Client Component nhỏ như
          danh mục xe này. Với nội dung cần đổi theo từng request, dùng SSR;
          với nội dung ổn định, ưu tiên SSG hoặc revalidation. Chỉ dùng CSR
          hoàn toàn cho giao diện mà nội dung không cần tìm kiếm tự nhiên.
        </p>
        <div className="topic-callout">
          <strong>Kết luận</strong>
          <p>Trang chủ MOTOHAUS được prerender thành HTML tĩnh; tên xe, thông số và giá có trong HTML ban đầu. Bộ lọc là Client Component nên vẫn tương tác sau hydrate. Đây là cách kết hợp phù hợp hơn việc biến toàn bộ cửa hàng thành CSR hoặc ép tất cả trang thành SSR.</p>
        </div>
      </section>
    </main>
  );
}