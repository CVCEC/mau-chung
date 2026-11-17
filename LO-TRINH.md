# Lộ trình "Đường làng của Trâu Con"

Nguồn dữ liệu duy nhất: [`v1/ttv-lo-trinh.js`](v1/ttv-lo-trinh.js) (`window.TTV_LO_TRINH`). Tài liệu này chỉ tóm tắt cho người đọc. Muốn sửa thì sửa trong tệp đó.

Lộ trình đối chiếu với Khung năng lực tiếng Việt dùng cho người nước ngoài 6 bậc (Thông tư 17/2015/TT-BGDĐT). Nền tảng dạy Sơ cấp và Trung cấp. Đây là lộ trình học, **không phải chứng chỉ**.

| Chặng | Bậc | Cấp | Bé / người học làm được |
|---|---|---|---|
| Sân nhà | 0 | Làm quen (riêng của trường) | Nhận ra âm, chữ cái, 6 thanh; chào hỏi rất ngắn |
| Đường làng | 1 | Sơ cấp | Giới thiệu bản thân, gia đình; hỏi đáp câu đơn giản |
| Chợ quê | 2 | Sơ cấp | Mua bán, hỏi đường, thời gian, thời tiết, món ăn, sở thích |
| Trường làng | 3 | Trung cấp | Kể chuyện, nêu ý kiến và lý do; đọc truyện, văn hoá; viết đoạn văn |
| Lên phố | 4 | Trung cấp | Văn bản phức tạp, trừu tượng; so sánh, lập luận |

Mỗi bậc có câu "Mình làm được…" cho 4 kỹ năng Nghe, Nói, Đọc, Viết (VI/EN). Nhóm người học dùng chung mã với tab Hoạt động của cổng: `5-8`, `9-14`, `nguoi-lon`.

## Bài của các góc học theo bậc (gắn nhãn 17-11-2026)

Bài được gắn nhãn theo **độ khó ngôn ngữ** (độ dài văn bản, cấu trúc câu, từ vựng), không theo chủ đề.

| Góc học | Bậc 0 | Bậc 1 | Bậc 2 | Bậc 3 | Bậc 4 |
|---|---|---|---|---|---|
| Tiếng Việt cơ bản | Bài 1–70, Ôn tập 1–2 | Ôn tập 3–12 | Bài 71–80 | | |
| Văn hoá truyền thống | | Bài 142–143 (ôn phát âm) | Bài 81–141, 144 | Bài 138, 145 | |
| Vui học tiếng Việt | | Quyển 1, Quyển 2 bài 1–5 | Quyển 2 bài 6–20 | | |
| Ngữ pháp | | | 7 bài | 17 bài | 13 bài |
| Kho báu ca dao | | | 5 thành ngữ so sánh | 42 câu | 13 câu ca dao |
| Truyện cổ tích | | | | 25 truyện | 5 truyền thuyết |
| Hát cùng Trâu Con | | 12 đồng dao | 4 bài vè | 8 dân ca, hát ru | |
| Bài học cuộc sống | | | | Lên Sáu (18) | Lên Tám (32) |
| Khám phá Việt Nam | | 3 trạm | 22 trạm | 6 trạm lịch sử | |
| Về Nhà Em | | | 8 món | | |
| Luyện nói | Luyện thanh, Bảng âm | 10 chủ đề | 6 chủ đề | 8 chủ đề | |

Tổng số bài có ghi kết quả: Bậc 0: 72 · Bậc 1: 52 · Bậc 2: 131 · Bậc 3: 118 · Bậc 4: 63 (không tính Luyện nói, vì góc này chạy trên máy, không gửi kết quả).

**Chỗ còn mỏng:**
- Bậc 1 có ít bài nghe – nói thật sự cho người lớn. Vui học thiên về trẻ em.
- Bậc 4 chủ yếu là văn học và ngữ pháp lý thuyết, chưa có bài đời sống, xã hội.

## Mã bài khi ghi kết quả (`TTV.ghiKetQua`)

Chữ thường, không dấu, nối bằng gạch: `bai-12`, `on-tap-3` (baihoc, vanhoa) · `q1-b01` (vuihoc) · `bai-12` (nguphap) · `tn08`, `tg03`, `cd10` (khobau) · `t05` (cotich) · mã bài (hatca) · `lensau-3`, `lentam-12` (cuocsong) · mã trạm (vietnam) · mã món (venhaem).

Các góc học **chưa gọi** `TTV.ghiKetQua`. Khi thêm, làm từng góc một, mỗi lần chơi xong một trò thì gọi một lần.

## Điều phát hiện khi rà các góc học (chưa sửa)

- khobautiengviet: gọi speechSynthesis trực tiếp. Theo quy tắc 7 mới, nên đổi sang `TTV.phat`.
- venhaem: trò "Nói theo" hiện cách đọc kiểu tiếng Anh (`respellSyllable`), có thể trái quy tắc 5 ("không ghi cách đọc dưới chữ"). Cần chị quyết.
- hatca: mới soạn 1/24 bài.
- truong-tieng-viet: không có Bài 122 (README của kho đã ghi).
