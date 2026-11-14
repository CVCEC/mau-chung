# Bộ mẫu chung "Làng Trâu Con" – Trường Tiếng Việt Của Em

Bộ mẫu dùng chung cho mọi trang *.cvcec.org của Trường Tiếng Việt Của Em (CVCEC).
Xem thử: https://mau.cvcec.org

## Gắn vào một trang (2 dòng, đặt trong `<head>`)

```html
<link rel="stylesheet" href="https://mau.cvcec.org/v1/cvcec-chung.css">
<script src="https://mau.cvcec.org/v1/cvcec-chung.js" defer></script>
```

Bộ mẫu tự làm:
- Chèn **thanh tab** đầu `<body>`: logo (về https://vietclass.cvcec.org), 7 góc học, nút VI/EN. Tab của trang hiện tại được tô màu theo `location.hostname`.
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

## Ảnh (`assets/`)

`logo.png` và 8 ảnh Trâu Con chính thức (chép từ CVCEC/khobautiengviet): `trau-wave`, `trau-cheer`, `trau-hiking`,
`trau-reading`, `trau-thinking`, `trau-thumbs-up`, `trau-listening`, `trau-peeking`. Không vẽ lại, không kéo méo
(luôn để `width:auto` hoặc `height:auto`).
`assets/cvcec-logo.png` – chỗ dành cho logo CVCEC, sẽ tải lên sau.

## Quy tắc phiên bản

Thư mục `v1` chỉ được sửa theo hướng **không làm vỡ** trang đang dùng. Thay đổi lớn thì tạo `v2`.
