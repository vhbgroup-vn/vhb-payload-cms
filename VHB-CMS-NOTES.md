# VHB Beauty CMS

Bản thử nghiệm quản trị nội dung cho VHB Beauty, chạy trên Payload CMS + Next.js + SQLite.

## Chạy local

```bash
pnpm install
pnpm dev
```

Mở `http://localhost:3001/admin`. Lần đầu mở trang sẽ yêu cầu tạo tài khoản quản trị đầu tiên.

## Các vùng quản trị đã chuẩn bị

- `Products`: tên, slug, danh mục, ảnh, giá VND, giá gốc, trạng thái draft/published, mô tả, lợi ích và SEO.
- `Media`: kho ảnh dùng lại cho sản phẩm, banner và nội dung.
- `Pages`: About Us, Contact và các trang nội dung khác.
- `Home`: announcement bar, banner carousel, sản phẩm nổi bật và brand story.
- `Site Settings`: tên thương hiệu, logo, email, số điện thoại và liên kết mạng xã hội.

## Điều kiện trước khi đưa lên PA Vietnam

Payload không chạy như bộ file tĩnh FTP hiện tại. Cần xác nhận gói hosting có:

1. Node.js 20.9+ và `Setup Node.js App`/Passenger.
2. Quyền chạy lệnh cài dependency, build và restart ứng dụng.
3. Database có lưu trữ ổn định. SQLite phù hợp cho bản nhỏ nhưng cần thư mục ghi được; nếu PA giới hạn SQLite nên dùng PostgreSQL/MongoDB.
4. Dung lượng RAM/process đủ cho Next.js + Payload.

Nên đặt CMS ở `admin.vhbbeauty.com` hoặc `cms.vhbbeauty.com`, giữ `vhbbeauty.com` làm storefront và chỉ kết nối API sau khi kiểm thử xong.
