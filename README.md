# MOTOHAUS

Website showroom mô tô demo cho Topic 4: JavaScript SEO với Next.js 16.

## Các trang

- `/`: Showroom có 10 mẫu xe từ nhiều hãng, lọc bốn phân khúc và tìm kiếm phía trình duyệt.
- `/moto/[slug]`: Trang chi tiết cho từng xe với gallery ảnh, giá và thông số cơ bản.
- `/topic-4`: So sánh CSR/SSR/SSG, hướng dẫn kiểm tra bằng Google Search Console và Rich Results Test, kèm khuyến nghị cho Next.js.
- `/csr`: Demo nội dung chỉ xuất hiện sau khi JavaScript chạy.
- `/ssr`: Demo render theo từng request bằng `connection()` của Next.js.
- `/ssg`: Demo dữ liệu tĩnh được tạo sẵn khi build.
- `/robots.txt` và `/sitemap.xml`: Route SEO tự sinh; URL production lấy từ biến môi trường của Vercel hoặc `NEXT_PUBLIC_SITE_URL`.

## Chạy trên máy

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`. Trước khi nộp, có thể kiểm tra production bằng `npm run build` và `npm run lint`.

## Đưa website lên mạng miễn phí

Vercel Hobby có thể cấp một địa chỉ dạng `ten-du-an.vercel.app` miễn phí. Tên miền riêng như `.com` thường phải mua; hãy kiểm tra điều khoản hiện hành của nền tảng trước khi dùng cho mục đích thương mại.

1. Tạo tài khoản GitHub và cài ứng dụng GitHub Desktop.
2. Trong GitHub Desktop, chọn **File → Add Local Repository**, chọn thư mục dự án này rồi chọn tạo repository nếu được hỏi.
3. Đặt tên repository, chọn **Publish repository** để đưa mã nguồn lên GitHub. Không đưa `node_modules` hoặc thông tin bí mật lên repository.
4. Đăng nhập Vercel bằng GitHub, chọn **Add New → Project**, rồi **Import** repository vừa publish.
5. Giữ cấu hình Next.js mặc định, chọn **Deploy**. Chờ build hoàn tất; Vercel sẽ cấp URL `*.vercel.app` để gửi thầy.
6. Mỗi lần cập nhật, commit và push bằng GitHub Desktop; Vercel tự build lại.

Ảnh sản phẩm lấy từ Wikimedia Commons; mỗi thẻ có liên kết nguồn, tác giả và giấy phép. Thông tin xe/giá là dữ liệu minh họa, không phải báo giá bán hàng. Liên kết Facebook tập trung trong `app/site-links.ts`. Có thể đặt `NEXT_PUBLIC_SITE_URL` thành URL production sau khi deploy. Thiết bị xem web cần có Internet để tải ảnh.
