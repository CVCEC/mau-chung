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
    // Hai góc cùng trang baihoc.cvcec.org, phân biệt bằng "phan" (?phan=…) và "duong" (đường dẫn của bài)
    { id: "baihoc", ten_vi: "Tiếng Việt cơ bản", ten_en: "Basic Vietnamese", ngan_vi: "Tiếng Việt", ngan_en: "Vietnamese",
      mo_ta_vi: "Bảng chữ cái, âm, vần và tập đọc, kèm trò chơi", mo_ta_en: "The alphabet, sounds, rhymes and reading, with games",
      url: "https://baihoc.cvcec.org/?phan=tieng-viet", phan: "tieng-viet", duong: "^/(bai-0?([1-9]|[1-7][0-9]|80)|on-tap-[0-9]+)(/|$)",
      mau: "#3A86D4", mau_dam: "#1F5FA8", mau_nhat: "#DEEBF9", trau: "trau-thinking.png" },
    { id: "vanhoa", ten_vi: "Văn hoá truyền thống", ten_en: "Traditional Culture", ngan_vi: "Văn hoá", ngan_en: "Culture",
      mo_ta_vi: "Lễ Tết, phong tục và đời sống Việt qua bài đọc và trò chơi", mo_ta_en: "Festivals, customs and Vietnamese life through readings and games",
      url: "https://baihoc.cvcec.org/?phan=van-hoa", phan: "van-hoa", duong: "^/bai-(8[1-9]|9[0-9]|1[0-9][0-9])(/|$)",
      mau: "#A9774A", mau_dam: "#6F4A26", mau_nhat: "#F4E9DD", trau: "trau-flag.png" },
    { id: "khobau", ten_vi: "Kho báu ca dao, tục ngữ", ten_en: "Folk Sayings Treasure", ngan_vi: "Kho báu", ngan_en: "Sayings",
      mo_ta_vi: "Ca dao, tục ngữ, thành ngữ qua trò chơi", mo_ta_en: "Folk verses and proverbs through games",
      url: "https://khobau.cvcec.org/", mau: "#F5B730", mau_dam: "#8A6200", mau_nhat: "#FDF1D3", trau: "trau-peeking.png" },
    { id: "cotich", ten_vi: "Truyện cổ tích", ten_en: "Fairy Tales", ngan_vi: "Cổ tích", ngan_en: "Tales",
      mo_ta_vi: "Đọc truyện cổ tích, chơi trò ôn từ", mo_ta_en: "Read Vietnamese fairy tales and play word games",
      url: "https://truyencotich.cvcec.org/", mau: "#9B7FE0", mau_dam: "#5B3FB8", mau_nhat: "#ECE6FA", trau: "trau-reading.png" },
    { id: "cuocsong", ten_vi: "Bài học cuộc sống", ten_en: "Life Lessons", ngan_vi: "Cuộc sống", ngan_en: "Life Lessons",
      mo_ta_vi: "Thơ Lên Sáu, Lên Tám của Tản Đà: nghe cô Hà giảng, học làm người", mo_ta_en: "Tản Đà's poems Lên Sáu and Lên Tám: listen to cô Hà and learn life lessons",
      url: "https://cuocsong.cvcec.org/", mau: "#8FA032", mau_dam: "#4E5A14", mau_nhat: "#EFF3DA", trau: "trau-wave.png" },
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

  // Góc học của trang đang mở. Nhiều góc cùng một tên miền (baihoc, vanhoa) thì chọn theo
  // ?phan=… rồi theo đường dẫn ("duong"); không khớp thì lấy góc đầu tiên của tên miền đó.
  function gocHienTai() {
    var host = (location.hostname || "").toLowerCase();
    var cung = [];
    for (var i = 0; i < TTV_DANH_SACH.length; i++) {
      try {
        if (new URL(TTV_DANH_SACH[i].url).hostname === host) cung.push(TTV_DANH_SACH[i]);
      } catch (e) {}
    }
    if (cung.length < 2) return cung[0] || null;
    var phan = "";
    try { phan = new URLSearchParams(location.search).get("phan") || ""; } catch (e) {}
    for (var j = 0; j < cung.length; j++) if (phan && cung[j].phan === phan) return cung[j];
    for (var k = 0; k < cung.length; k++) {
      try { if (cung[k].duong && new RegExp(cung[k].duong).test(location.pathname)) return cung[k]; } catch (e) {}
    }
    return cung[0];
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

  // ------------------------------------------------------------------
  // CHỈ HỌC QUA CỔNG: góc học (trang có trong TTV_DANH_SACH) chỉ chạy bên trong
  // khung của cổng vietclass.cvcec.org khi người học đã đăng nhập.
  // Mở thẳng, hoặc bị nhúng vào trang khác: che nội dung, mời vào học qua cổng.
  // Cổng trả lời câu hỏi "cvcec-hoi-cong" bằng "cvcec-cong-tra-loi" (chỉ từ đúng nguồn cổng).
  // Sao và tiến độ lưu trên máy (localStorage) giữ nguyên.
  // ------------------------------------------------------------------
  var CHU_KHOA = {
    vi: { tieuDe: "Mời bạn vào học qua Trường Tiếng Việt Của Em", nd: "Góc học này chỉ mở trong Trường Tiếng Việt Của Em. Bạn đăng nhập ở cổng trường rồi vào học nhé, Trâu Con sẽ lưu sao và tiến độ cho bạn.", nut: "Vào học qua cổng" },
    en: { tieuDe: "Please learn through Trường Tiếng Việt Của Em", nd: "This learning corner opens only inside Trường Tiếng Việt Của Em. Please sign in on the school portal to start learning, and Trâu Con will save your stars and progress.", nut: "Go to the school portal" }
  };
  // Học thử (khách chưa đăng nhập): chỉ được học một bài (bài thử của góc)
  var CHU_THU = {
    vi: { tieuDe: "Bạn đã học thử xong một bài!", nd: "Bạn đăng nhập để học tiếp các bài sau nhé. Trâu Con sẽ lưu sao và tiến độ cho bạn.", nut: "Đăng nhập để học tiếp", nut2: "Đăng ký" },
    en: { tieuDe: "You have finished the trial lesson!", nd: "Please sign in to keep learning the next lessons. Trâu Con will save your stars and progress.", nut: "Sign in to keep learning", nut2: "Sign up" }
  };
  var cheDoHoc = null;   // "hoc" | "thu" | null (chưa biết)
  var baiThu = null;     // mã bài học thử (góc học một trang dùng với TTV.choPhepBai)
  function duongHienTai() {
    var p = location.pathname.replace(/index\.html$/, "");
    if (!/\/$/.test(p) && !/\.[a-z0-9]+$/i.test(p)) p += "/";
    return p;
  }
  var daKhoa = false;
  function khoaGocHoc(muc, loai) {
    if (daKhoa || !document.body) return;
    daKhoa = true;
    var laThu = loai === "thu";
    try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (e) {}
    var media = document.querySelectorAll("audio, video");
    for (var m = 0; m < media.length; m++) { try { media[m].pause(); } catch (e) {} }
    var con = document.body.children;
    for (var i = 0; i < con.length; i++) { con[i].setAttribute("inert", ""); con[i].setAttribute("aria-hidden", "true"); }
    var c = (laThu ? CHU_THU : CHU_KHOA)[ngonNgu] || (laThu ? CHU_THU : CHU_KHOA).vi;
    var man = tao("div", "ttv-man-khoa");
    man.setAttribute("role", "dialog");
    man.setAttribute("aria-modal", "true");
    man.setAttribute("aria-labelledby", "ttv-man-khoa-tieu-de");
    man.style.cssText = "position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:24px;box-sizing:border-box;overflow:auto;background:var(--ttv-nen,#FFF8EC);font-family:var(--ttv-phong,sans-serif);color:var(--ttv-chu,#003060);text-align:center";
    var the = tao("div");
    the.style.cssText = "max-width:480px;background:var(--ttv-the,#FFFFFF);border:2px solid var(--ttv-vien,#F3E9D6);border-radius:24px;padding:28px 24px";
    var img = tao("img");
    img.src = anh("trau-wave.png"); img.alt = ""; img.width = 140; img.style.cssText = "width:140px;height:auto;display:block;margin:0 auto 12px";
    var h = tao("h1", "", c.tieuDe);
    h.id = "ttv-man-khoa-tieu-de";
    h.style.cssText = "margin:0 0 10px;font-family:var(--ttv-phong-tieu-de,sans-serif);font-weight:800;font-size:1.5rem;line-height:1.25";
    var p = tao("p", "", c.nd);
    p.style.cssText = "margin:0 0 18px;font-size:1.05rem;line-height:1.5";
    var a = tao("a", "ttv-nut", c.nut);
    var ve = encodeURIComponent("/#" + muc.id);
    a.href = laThu ? CONG + "/dang-nhap/?ve=" + ve : CONG + "/#" + muc.id;
    a.target = "_top"; // thoát khỏi khung lạ nếu bị nhúng; vẫn là cùng tab
    the.appendChild(img); the.appendChild(h); the.appendChild(p); the.appendChild(a);
    if (laThu) {
      var a2 = tao("a", "ttv-nut-phu", c.nut2);
      a2.href = CONG + "/dang-nhap/?che-do=ky&ve=" + ve; a2.target = "_top";
      a2.style.marginLeft = "10px";
      the.appendChild(a2);
    }
    man.appendChild(the);
    document.body.appendChild(man);
    document.documentElement.style.overflow = "hidden";
    try { a.focus(); } catch (e) {}
  }
  function baoVeGocHoc(muc) {
    if (!trongKhung) { khoaGocHoc(muc); return; }
    var daTraLoi = false;
    window.addEventListener("message", function (e) {
      if (e.origin !== CONG || e.source !== window.parent) return;
      var d = e.data;
      if (!d || typeof d !== "object" || d.loai !== "cvcec-cong-tra-loi") return;
      daTraLoi = true;
      if (d.hopLe !== true) { khoaGocHoc(muc); return; }
      cheDoHoc = d.cheDo === "thu" ? "thu" : "hoc";
      baiThu = typeof d.baiThu === "string" ? d.baiThu : null;
      // Học thử: trang không thuộc bài 1 thì mời đăng nhập
      if (cheDoHoc === "thu" && Object.prototype.toString.call(d.duongThu) === "[object Array]" && d.duongThu.indexOf(duongHienTai()) < 0) khoaGocHoc(muc, "thu");
    });
    var hoi = function () {
      if (daTraLoi) return;
      // targetOrigin = cổng: nếu khung cha không phải cổng thì tin nhắn không được gửi đi
      try { window.parent.postMessage({ loai: "cvcec-hoi-cong", id: muc.id }, CONG); } catch (e) {}
    };
    hoi(); setTimeout(hoi, 700); setTimeout(hoi, 1800);
    setTimeout(function () { if (!daTraLoi) khoaGocHoc(muc); }, 4000);
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

    if (hienTai) baoVeGocHoc(hienTai);

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
    // Học thử: góc học một trang gọi trước khi mở một bài. Trả false (và mời đăng nhập) nếu khách mở bài khác bài thử.
    cheDoHoc: function () { return cheDoHoc; },
    choPhepBai: function (maBai) {
      if (cheDoHoc !== "thu") return true;
      if (baiThu && maBai === baiThu) return true;
      var muc = gocHienTai(); if (muc) khoaGocHoc(muc, "thu");
      return false;
    },
    trangTriCanh: trangTriCanh
  };

  if (document.body) khoiDong();
  else document.addEventListener("DOMContentLoaded", khoiDong);
})();
