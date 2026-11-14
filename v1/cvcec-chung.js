/*!
 * Bộ mẫu chung "Làng Trâu Con" – Trường Tiếng Việt Của Em (CVCEC)
 * Phiên bản v1 – https://mau.cvcec.org/v1/cvcec-chung.js
 * Cách dùng: <script src="https://mau.cvcec.org/v1/cvcec-chung.js" defer></script>
 * v1 chỉ được sửa theo hướng KHÔNG làm vỡ trang đang dùng; thay đổi lớn thì tạo v2.
 * Không dùng thư viện ngoài.
 */
(function () {
  "use strict";

  // ------------------------------------------------------------------
  // NGUỒN DUY NHẤT của danh sách góc học. Chỉ sửa danh sách ở đây.
  // ------------------------------------------------------------------
  var TTV_DANH_SACH = [
    { id: "vietnam", ten_vi: "Khám phá Việt Nam", ten_en: "Explore Vietnam", ngan_vi: "Bản đồ", ngan_en: "Map",
      mo_ta_vi: "Đi khắp Việt Nam theo bản đồ, sưu tầm sao vàng", mo_ta_en: "Travel Vietnam on the map and collect gold stars",
      url: "https://vietnam.cvcec.org/", mau: "#22B0A3", mau_dam: "#0B6F66", mau_nhat: "#DDF4F1", trau: "trau-hiking.png" },
    { id: "vuihoc", ten_vi: "Vui học tiếng Việt", ten_en: "Fun with Vietnamese", ngan_vi: "Vui học", ngan_en: "Fun Vietnamese",
      mo_ta_vi: "Học theo sách Vui học tiếng Việt Quyển 1–2", mo_ta_en: "Interactive lessons from the Vui học tiếng Việt books",
      url: "https://vuihoctiengviet.cvcec.org/", mau: "#6CBF45", mau_dam: "#3B7A1F", mau_nhat: "#E6F5DC", trau: "trau-thumbs-up.png" },
    { id: "venhaem", ten_vi: "Về Nhà Em", ten_en: "Về Nhà Em – Vietnamese food", ngan_vi: "Về Nhà Em", ngan_en: "Food",
      mo_ta_vi: "Khám phá món ăn và vào bếp cùng gia đình Việt", mo_ta_en: "Discover Vietnamese food and cook at home",
      url: "https://venhaem.cvcec.org/", mau: "#F47B3A", mau_dam: "#B5461A", mau_nhat: "#FDE8DC", trau: "trau-cheer.png" },
    { id: "baihoc", ten_vi: "Bài học", ten_en: "Lessons", ngan_vi: "Bài học", ngan_en: "Lessons",
      mo_ta_vi: "Lộ trình bài học từng bước, kèm trò chơi", mo_ta_en: "Step-by-step lessons with games",
      url: "https://baihoc.cvcec.org/", mau: "#3A86D4", mau_dam: "#1F5FA8", mau_nhat: "#DEEBF9", trau: "trau-thinking.png" },
    { id: "khobau", ten_vi: "Kho báu ca dao, tục ngữ", ten_en: "Folk Sayings Treasure", ngan_vi: "Kho báu", ngan_en: "Sayings",
      mo_ta_vi: "Ca dao, tục ngữ, thành ngữ qua trò chơi", mo_ta_en: "Folk verses and proverbs through games",
      url: "https://khobau.cvcec.org/", mau: "#F5B730", mau_dam: "#8A6200", mau_nhat: "#FDF1D3", trau: "trau-peeking.png" },
    { id: "cotich", ten_vi: "Truyện cổ tích", ten_en: "Fairy Tales", ngan_vi: "Cổ tích", ngan_en: "Tales",
      mo_ta_vi: "Đọc truyện cổ tích, chơi trò ôn từ", mo_ta_en: "Read Vietnamese fairy tales and play word games",
      url: "https://truyencotich.cvcec.org/", mau: "#9B7FE0", mau_dam: "#5B3FB8", mau_nhat: "#ECE6FA", trau: "trau-reading.png" },
    { id: "trienlam", ten_vi: "Triển lãm Em học tiếng Việt", ten_en: "Student Exhibition", ngan_vi: "Triển lãm", ngan_en: "Exhibition",
      mo_ta_vi: "Bài đọc và chữ viết của các bạn nhỏ", mo_ta_en: "Reading and handwriting from our young learners",
      url: "https://trienlam.cvcec.org/", mau: "#EE6F9C", mau_dam: "#B0305E", mau_nhat: "#FCE3EC", trau: "trau-listening.png" }
  ];
  var TTV_BAN_QUYEN = "Copyrighted by CVCEC Trường Tiếng Việt Của Em 2026";

  var CONG = "https://vietclass.cvcec.org";
  var KHOA_NGON_NGU = "ttv-ngon-ngu"; // khoá localStorage duy nhất bộ mẫu dùng

  window.TTV_DANH_SACH = TTV_DANH_SACH;
  window.TTV_BAN_QUYEN = TTV_BAN_QUYEN;

  // Nạp hai lần thì chỉ chạy một lần.
  if (window.TTV && window.TTV.__daChay) return;

  // Thư mục gốc của bộ mẫu (để lấy ảnh trong assets/), tính từ chính thẻ <script>.
  var GOC_BO_MAU = (function () {
    try {
      var s = document.currentScript && document.currentScript.src;
      if (s) return new URL("../", s).href;
    } catch (e) {}
    return "https://mau.cvcec.org/";
  })();

  var CHU = {
    vi: { nav: "Các góc học", ngonNgu: "Ngôn ngữ", logo: "Về cổng Trường Tiếng Việt Của Em", vao: "Vào học →", lienHe: "Liên hệ" },
    en: { nav: "Learning corners", ngonNgu: "Language", logo: "Back to Trường Tiếng Việt Của Em", vao: "Start →", lienHe: "Contact" }
  };

  function docNgonNgu() {
    try {
      var v = window.localStorage.getItem(KHOA_NGON_NGU);
      if (v === "vi" || v === "en") return v;
    } catch (e) {}
    return "vi";
  }
  function ghiNgonNgu(v) {
    try { window.localStorage.setItem(KHOA_NGON_NGU, v); } catch (e) {}
  }

  var ngonNgu = docNgonNgu();

  function anh(ten) { return GOC_BO_MAU + "assets/" + ten; }

  function gocHienTai() {
    var host = (location.hostname || "").toLowerCase();
    for (var i = 0; i < TTV_DANH_SACH.length; i++) {
      try {
        if (new URL(TTV_DANH_SACH[i].url).hostname === host) return TTV_DANH_SACH[i];
      } catch (e) {}
    }
    return null;
  }

  function ganMauGoc(el, muc) {
    el.style.setProperty("--ttv-goc", muc.mau);
    el.style.setProperty("--ttv-goc-dam", muc.mau_dam);
    el.style.setProperty("--ttv-goc-nhat", muc.mau_nhat);
  }

  function tao(the, lop, chu) {
    var el = document.createElement(the);
    if (lop) el.className = lop;
    if (chu != null) el.textContent = chu;
    return el;
  }

  // Thẻ góc học dùng lại được (cổng, trang xem thử…). Link mở cùng tab.
  function taoTheGoc(muc, nn) {
    nn = nn || ngonNgu;
    var a = tao("a", "ttv-the ttv-the-goc");
    a.href = muc.url;
    a.setAttribute("data-ttv-goc", muc.id);
    ganMauGoc(a, muc);
    a.appendChild(tao("span", "ttv-the-goc-dai"));
    var khung = tao("span", "ttv-the-goc-anh");
    var img = tao("img");
    img.src = anh(muc.trau);
    img.alt = "";
    img.loading = "lazy";
    khung.appendChild(img);
    a.appendChild(khung);
    var nd = tao("span", "ttv-the-goc-noi-dung");
    nd.appendChild(tao("strong", "ttv-the-goc-ten", nn === "en" ? muc.ten_en : muc.ten_vi));
    nd.appendChild(tao("span", "ttv-the-goc-mo-ta", nn === "en" ? muc.mo_ta_en : muc.mo_ta_vi));
    nd.appendChild(tao("span", "ttv-the-goc-vao", CHU[nn].vao));
    a.appendChild(nd);
    return a;
  }

  // Trang trí trời – mây – mặt trời – ruộng bậc thang cho mọi .ttv-canh
  function trangTriCanh() {
    var ds = document.querySelectorAll(".ttv-canh");
    for (var i = 0; i < ds.length; i++) {
      var c = ds[i];
      if (c.querySelector(":scope > .ttv-canh-trang-tri")) continue;
      var t = tao("div", "ttv-canh-trang-tri");
      t.setAttribute("aria-hidden", "true");
      ["ttv-mat-troi", "ttv-may ttv-may-1", "ttv-may ttv-may-2", "ttv-may ttv-may-3",
       "ttv-ruong ttv-ruong-1", "ttv-ruong ttv-ruong-2", "ttv-ruong ttv-ruong-3"].forEach(function (lop) {
        t.appendChild(tao("span", lop));
      });
      c.insertBefore(t, c.firstChild);
    }
  }

  var trongKhung = (function () {
    try { return window.self !== window.top; } catch (e) { return true; }
  })();

  var thanh = null, chan = null;

  function veThanh() {
    var hienTai = gocHienTai();
    var nav = tao("nav", "ttv-thanh");
    nav.setAttribute("data-ttv-thanh", "");

    var logo = tao("a", "ttv-thanh-logo");
    logo.href = CONG;
    var img = tao("img");
    img.src = anh("logo.png");
    img.width = 103; img.height = 40; // tỉ lệ gốc 621×241; CSS giữ width:auto
    logo.appendChild(img);
    nav.appendChild(logo);

    var ul = tao("ul", "ttv-thanh-tab");
    TTV_DANH_SACH.forEach(function (muc) {
      var li = tao("li");
      var a = tao("a");
      a.href = muc.url;
      a.setAttribute("data-ttv-goc", muc.id);
      a.style.setProperty("--ttv-tab-mau", muc.mau);
      a.style.setProperty("--ttv-tab-dam", muc.mau_dam);
      a.style.setProperty("--ttv-tab-nhat", muc.mau_nhat);
      if (hienTai && hienTai.id === muc.id) a.setAttribute("aria-current", "page");
      a.appendChild(tao("span", "ttv-cham"));
      a.appendChild(tao("span", "ttv-tab-chu"));
      li.appendChild(a);
      ul.appendChild(li);
    });
    nav.appendChild(ul);

    var nhom = tao("div", "ttv-thanh-ngon-ngu");
    nhom.setAttribute("role", "group");
    ["vi", "en"].forEach(function (ma) {
      var b = tao("button", "", ma.toUpperCase());
      b.type = "button";
      b.lang = ma;
      b.setAttribute("data-ttv-ma", ma);
      b.addEventListener("click", function () { datNgonNgu(ma); });
      nhom.appendChild(b);
    });
    nav.appendChild(nhom);
    return nav;
  }

  function veChan() {
    var san = document.querySelector("[data-ttv-chan]");
    var f = san || tao("footer");
    f.classList.add("ttv-chan");
    f.textContent = "";
    var p1 = tao("p", "ttv-ban-quyen", TTV_BAN_QUYEN);
    p1.lang = "en";
    f.appendChild(p1);
    var p2 = tao("p", "ttv-lien-he");
    p2.appendChild(tao("span", "ttv-lien-he-nhan"));
    p2.appendChild(document.createTextNode(": "));
    var mail = tao("a", "", "contact@cvcec.org");
    mail.href = "mailto:contact@cvcec.org";
    p2.appendChild(mail);
    f.appendChild(p2);
    if (!san) document.body.appendChild(f);
    return f;
  }

  function capNhatChu() {
    var c = CHU[ngonNgu];
    document.documentElement.setAttribute("data-ttv-ngon-ngu", ngonNgu);
    if (thanh) {
      thanh.lang = ngonNgu;
      thanh.setAttribute("aria-label", c.nav);
      var logo = thanh.querySelector(".ttv-thanh-logo");
      logo.setAttribute("aria-label", c.logo);
      logo.querySelector("img").alt = "Trường Tiếng Việt Của Em";
      thanh.querySelector(".ttv-thanh-ngon-ngu").setAttribute("aria-label", c.ngonNgu);
      var tabs = thanh.querySelectorAll(".ttv-thanh-tab a");
      for (var i = 0; i < tabs.length; i++) {
        var muc = TTV_DANH_SACH[i];
        tabs[i].querySelector(".ttv-tab-chu").textContent = ngonNgu === "en" ? muc.ngan_en : muc.ngan_vi;
        tabs[i].title = ngonNgu === "en" ? muc.ten_en : muc.ten_vi;
      }
      var nut = thanh.querySelectorAll(".ttv-thanh-ngon-ngu button");
      for (var j = 0; j < nut.length; j++) {
        nut[j].setAttribute("aria-pressed", nut[j].getAttribute("data-ttv-ma") === ngonNgu ? "true" : "false");
      }
    }
    if (chan) {
      var nhan = chan.querySelector(".ttv-lien-he-nhan");
      if (nhan) nhan.textContent = c.lienHe;
      chan.querySelector(".ttv-lien-he").lang = ngonNgu;
    }
  }

  function datNgonNgu(ma) {
    if (ma !== "vi" && ma !== "en") return;
    ngonNgu = ma;
    ghiNgonNgu(ma);
    capNhatChu();
    try {
      document.dispatchEvent(new CustomEvent("ttv-ngon-ngu", { detail: { ngonNgu: ma } }));
    } catch (e) {}
  }

  function khoiDong() {
    var hienTai = gocHienTai();
    if (hienTai) ganMauGoc(document.documentElement, hienTai);

    trangTriCanh();

    if (!trongKhung && !document.querySelector("[data-ttv-khong-thanh]")) {
      thanh = veThanh();
      document.body.insertBefore(thanh, document.body.firstChild);
      var dangChon = thanh.querySelector('[aria-current="page"]');
      if (dangChon && dangChon.scrollIntoView) {
        try { dangChon.scrollIntoView({ block: "nearest", inline: "center" }); } catch (e) {}
        window.scrollTo(0, 0);
      }
    }
    chan = veChan();
    capNhatChu();

    if (trongKhung) {
      var gui = function () {
        try {
          window.parent.postMessage({
            loai: "ttv-trang",
            id: hienTai ? hienTai.id : null,
            tieuDe: document.title
          }, "*");
        } catch (e) {}
      };
      if (document.readyState === "complete") gui();
      else window.addEventListener("load", gui);
    }
  }

  window.TTV = {
    __daChay: true,
    danhSach: TTV_DANH_SACH,
    banQuyen: TTV_BAN_QUYEN,
    goc: function (id) {
      for (var i = 0; i < TTV_DANH_SACH.length; i++) if (TTV_DANH_SACH[i].id === id) return TTV_DANH_SACH[i];
      return null;
    },
    gocHienTai: gocHienTai,
    anh: anh,
    ngonNgu: function () { return ngonNgu; },
    datNgonNgu: datNgonNgu,
    taoTheGoc: taoTheGoc,
    trangTriCanh: trangTriCanh
  };

  if (document.body) khoiDong();
  else document.addEventListener("DOMContentLoaded", khoiDong);
})();
