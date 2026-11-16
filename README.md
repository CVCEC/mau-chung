# Bộ mẫu chung "Làng Trâu Con" – Trường Tiếng Việt Của Em

Bộ mẫu dùng chung cho mọi trang *.cvcec.org của Trường Tiếng Việt Của Em (CVCEC).
Xem thử: https://mau.cvcec.org

## Gắn vào một trang (2 dòng, đặt trong `<head>`)

```html
<link rel="stylesheet" href="https://mau.cvcec.org/v1/cvcec-chung.css">
<script src="https://mau.cvcec.org/v1/cvcec-chung.js" defer></script>
```

Bộ mẫu tự làm:
- Chèn **thanh tab** đầu `<body>`: logo (về https://vietclass.cvcec.org), 8 góc học, nút VI/EN. Tab của trang hiện tại được tô màu theo `location.hostname` (xem mục "Hai góc học chung một tên miền").
- Chèn **chân trang** có dòng "Copyrighted by CVCEC Trường Tiếng Việt Của Em 2026".
- Gán màu của góc học hiện tại vào `--ttv-goc`, `--ttv-goc-dam`, `--ttv-goc-nhat` trên `<html>`.
- Vẽ trời – mây – mặt trời – ruộng bậc thang vào mọi phần tử `.ttv-canh`.
- Khi trang nằm trong khung iframe của cổng: **không** chèn thanh tab (vẫn có dòng bản quyền) và gửi `postMessage({loai:"ttv-trang", id, tieuDe})` lên cổng khi tải xong.

## Tuỳ chọn trên trang

| Viết trong trang | Tác dụng |
|---|---|
| `<body data-ttv-nen="don-gian">` | Màn đọc, màn chơi: nền kem trơn, không mây/ruộng. Dùng được cho một khối riêng. |
| Phần tử bất kỳ có `data-ttv-khong-thanh` | Không chèn thanh tab. |
| Phần tử có `data-ttv-chan` | Đặt chân trang vào đúng chỗ đó thay vì cuối `<body>`. |
| `<body class="ttv-trang">` | Nền trời, phông và màu chữ chung cho cả trang. |

## Biến CSS (`--ttv-*`)

Chữ `--ttv-chu`, `--ttv-chu-phu` · nút chính `--ttv-chinh`, `--ttv-chinh-dam` · `--ttv-la-phong` · `--ttv-sao` ·
nền `--ttv-nen`, `--ttv-troi`, `--ttv-the`, `--ttv-vien`, `--ttv-kem-rom` · ruộng `--ttv-lua-sang`, `--ttv-lua`, `--ttv-lua-dam` ·
phản hồi `--ttv-dung`, `--ttv-dung-nen`, `--ttv-sai`, `--ttv-sai-nen` · `--ttv-bo-goc`, `--ttv-bo-nut` ·
phông `--ttv-phong` (Nunito), `--ttv-phong-tieu-de` (Baloo 2), `--ttv-phong-tap-doc` (Andika).

**Tương phản:** chữ trắng CHỈ trên đỏ son, xanh mực, đỏ lá phong và màu đậm của góc học. Màu gốc và màu nhạt của góc học chỉ làm dải màu, nền thẻ, biểu tượng; chữ trên đó là `--ttv-chu`. Bảng tỉ lệ đầy đủ có ở trang xem thử.

## Lớp dùng chung

`.ttv-nut` (nút chính) · `.ttv-nut-phu` (nút phụ) · `.ttv-the` (thẻ) · `.ttv-thanh` · `.ttv-chan` · `.ttv-canh` ·
`.ttv-tieu-de` · `.ttv-chu-tap-doc` · `.ttv-bong-thoai` · `.ttv-nhan-dung` ("Đúng rồi!") · `.ttv-nhan-sai` ("Thử lại nhé") ·
`.ttv-sao`, `.ttv-sao-tat` · `.ttv-huy-hieu`.

## JavaScript

- `window.TTV_DANH_SACH` – **nguồn duy nhất** của danh sách góc học (chỉ sửa trong `v1/cvcec-chung.js`).
- `window.TTV_BAN_QUYEN` – dòng bản quyền.
- `window.TTV`: `goc(id)`, `gocHienTai()`, `anh("trau-wave.png")`, `ngonNgu()`, `datNgonNgu("vi"|"en")`, `taoTheGoc(muc)`, `trangTriCanh()`.
- Sự kiện `document` → `"ttv-ngon-ngu"` (`event.detail.ngonNgu`) khi bé bấm VI/EN.
- Khoá localStorage duy nhất bộ mẫu dùng: `ttv-ngon-ngu`. Bộ mẫu không đụng tới khoá nào khác.

## Hai góc học chung một tên miền (từ 16-11-2026)

baihoc.cvcec.org chứa hai góc học: **Tiếng Việt cơ bản** (`id: "baihoc"`, Bài 1–80 và các bài ôn tập) và **Văn hoá truyền thống** (`id: "vanhoa"`, Bài 81–145). Hai mục này trong `TTV_DANH_SACH` có thêm:

- `phan`: giá trị `?phan=` của trang mục lục (`tieng-viet` hoặc `van-hoa`);
- `duong`: biểu thức chính quy cho đường dẫn bài thuộc góc đó (ví dụ `/bai-81/` thuộc `vanhoa`).

`TTV.gocHienTai()` chọn theo `?phan=` trước, rồi theo `duong`, cuối cùng lấy mục đầu tiên của tên miền. Ảnh Trâu Con của Văn hoá truyền thống: `assets/trau-flag.png` (ảnh chính thức, chép từ cổng).

## Chỉ học qua cổng (từ 15-11-2026)

Trang nào có tên miền nằm trong `TTV_DANH_SACH` (các góc học) chỉ chạy được **bên trong khung của cổng vietclass.cvcec.org khi người học đã đăng nhập**:

- Khi mở, góc học gửi `{loai: "cvcec-hoi-cong"}` lên khung cha, chỉ tới `https://vietclass.cvcec.org`. Cổng trả lời `{loai: "cvcec-cong-tra-loi", hopLe: true}`, và chỉ trả lời khi khung đang mở góc học cho người đã đăng nhập.
- Mở thẳng (không nằm trong khung), bị nhúng vào trang khác, hoặc cổng không trả lời trong 4 giây: nội dung bị che. Thay vào đó là màn Trâu Con "Mời bạn vào học qua Trường Tiếng Việt Của Em", có nút dẫn về đúng góc trên cổng (`/#id`).
- **Học thử một bài** (khách chưa đăng nhập): cổng trả lời `{hopLe: true, cheDo: "thu", duongThu: [...]}`. Trang không nằm trong `duongThu` (ví dụ `/bai-2/`) thì hiện "Bạn đã học thử xong một bài!" kèm nút Đăng nhập, Đăng ký. Danh sách trang học thử của mỗi góc khai trong cổng (`chung/gioi-thieu-goc.js` của kho cong-truong-tieng-viet).
- Khi biết chế độ học, bộ mẫu phát sự kiện `document` → `"ttv-che-do"` (`event.detail.cheDo` là `"hoc"` hoặc `"thu"`). Trang mục lục dùng sự kiện này và `TTV.cheDoHoc()` để vẽ nhãn "Đăng nhập để học" cho các bài sau bài thử. `TTV.duongDangNhap(ky)` trả đường tới trang đăng nhập của cổng (mở bằng `target="_top"`, vẫn cùng tab).
- Góc học một trang (bài mở bằng mã trong trang, không đổi địa chỉ) gọi `TTV.choPhepBai(maBai)` trước khi mở một bài. Hàm trả `false` và mời đăng nhập khi khách học thử mở bài khác bài thử (`baiThu` do cổng gửi). `TTV.cheDoHoc()` trả `"hoc"`, `"thu"` hoặc `null`.
- Không đổi hay xoá khoá localStorage nào: sao và tiến độ trên máy giữ nguyên.
- Trang không có trong `TTV_DANH_SACH` (ví dụ mau.cvcec.org, máy thử `localhost`) không bị ảnh hưởng.
- Đây là lớp chặn cho người dùng thông thường. Người rành kỹ thuật vẫn có thể vượt qua, vì mã nguồn trang tĩnh luôn tải về trình duyệt.

## Ảnh (`assets/`)

`logo.png` và 8 ảnh Trâu Con chính thức (chép từ CVCEC/khobautiengviet): `trau-wave`, `trau-cheer`, `trau-hiking`,
`trau-reading`, `trau-thinking`, `trau-thumbs-up`, `trau-listening`, `trau-peeking`. Không vẽ lại, không kéo méo
(luôn để `width:auto` hoặc `height:auto`).
`assets/cvcec-logo.png` – chỗ dành cho logo CVCEC, sẽ tải lên sau.

## Quy tắc phiên bản

Thư mục `v1` chỉ được sửa theo hướng **không làm vỡ** trang đang dùng. Thay đổi lớn thì tạo `v2`.
