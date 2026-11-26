/*!
 * Lộ trình học "Đường làng của Trâu Con" – Trường Tiếng Việt Của Em (CVCEC)
 * Phiên bản v1 – https://mau.cvcec.org/v1/ttv-lo-trinh.js
 * Cách dùng: <script src="https://mau.cvcec.org/v1/ttv-lo-trinh.js" defer></script>
 *
 * NGUỒN DUY NHẤT của: các bậc, danh sách "Mình làm được…", chủ điểm, và nhãn bậc của từng bài
 * trong các góc học. Đối chiếu Khung năng lực tiếng Việt dùng cho người nước ngoài 6 bậc
 * (Thông tư 17/2015/TT-BGDĐT). Câu "làm được" là DIỄN GIẢI cho người học, không trích nguyên văn.
 * Nền tảng theo Sơ cấp (Bậc 1–2), Trung cấp (Bậc 3–4) và Cao cấp (Bậc 5, thêm 26-11-2026); Bậc 0 "Làm quen" là chặng riêng của
 * trường (không thuộc Khung). Đây là lộ trình học, KHÔNG phải chứng chỉ.
 *
 * v1 chỉ sửa không phá vỡ: thêm bậc, chủ điểm, nhãn thì được; không đổi hay xoá mã đã có.
 */
(function () {
  "use strict";

  // Nhóm người học, cùng mã với hoat-dong/du-lieu.js của cổng
  var DOI_TUONG = [
    { id: "5-8", vi: "Trẻ 5–8 tuổi", en: "Children 5–8" },
    { id: "9-14", vi: "Thiếu nhi 9–14 tuổi", en: "Children 9–14" },
    { id: "nguoi-lon", vi: "Từ 15 tuổi và người lớn", en: "Teens 15+ and adults" }
  ];

  var KY_NANG = [
    { id: "nghe", vi: "Nghe", en: "Listening" },
    { id: "noi", vi: "Nói", en: "Speaking" },
    { id: "doc", vi: "Đọc", en: "Reading" },
    { id: "viet", vi: "Viết", en: "Writing" }
  ];

  // Mỗi bậc: chặng trên "đường làng", cấp theo Khung, và "Mình làm được…" cho 4 kỹ năng.
  var BAC = [
    {
      bac: 0, ma: "B0", cap: "lam-quen", khung: null,
      chang_vi: "Sân nhà", chang_en: "Home yard",
      ten_vi: "Làm quen", ten_en: "Getting started",
      mo_ta_vi: "Nghe và nhận ra âm, chữ cái, 6 thanh; chào hỏi bằng vài câu rất ngắn.",
      mo_ta_en: "Hear and recognise sounds, letters and the 6 tones; greet with a few very short phrases.",
      lam_duoc: {
        nghe: [
          ["Mình nghe và nhận ra được 6 thanh: ngang, huyền, sắc, hỏi, ngã, nặng.", "I can hear and tell apart the 6 tones."],
          ["Mình nghe và chỉ đúng chữ cái, âm đầu, vần đã học.", "I can hear a letter, first sound or rhyme I learned and point to it."],
          ["Mình hiểu lời chào và lời khen rất ngắn: Xin chào, Giỏi lắm!", "I understand very short greetings and praise."]
        ],
        noi: [
          ["Mình đọc theo được âm, vần và tiếng có đủ thanh.", "I can repeat sounds, rhymes and syllables with the right tone."],
          ["Mình chào, cảm ơn, xin lỗi, tạm biệt.", "I can say hello, thank you, sorry and goodbye."],
          ["Mình nói được tên của mình: Mình tên là…", "I can say my name."]
        ],
        doc: [
          ["Mình nhận ra 29 chữ cái và các dấu thanh.", "I can recognise the 29 letters and the tone marks."],
          ["Mình đánh vần và đọc được tiếng có vần đã học.", "I can sound out syllables with rhymes I learned."]
        ],
        viet: [
          ["Mình viết được chữ cái và dấu thanh.", "I can write the letters and tone marks."],
          ["Mình viết được tên của mình và vài tiếng đã học.", "I can write my name and a few syllables I learned."]
        ]
      }
    },
    {
      bac: 1, ma: "B1", cap: "so-cap", khung: 1,
      chang_vi: "Đường làng", chang_en: "Village path",
      ten_vi: "Sơ cấp – Bậc 1", ten_en: "Elementary – Level 1",
      mo_ta_vi: "Giới thiệu bản thân, gia đình; hỏi và trả lời câu đơn giản khi người nghe nói chậm, rõ.",
      mo_ta_en: "Introduce yourself and your family; ask and answer simple questions when people speak slowly and clearly.",
      lam_duoc: {
        nghe: [
          ["Mình hiểu câu hỏi ngắn về bản thân: tên, tuổi, nhà ở đâu.", "I understand short questions about me: name, age, where I live."],
          ["Mình hiểu số đếm, màu sắc, đồ vật quen thuộc khi nghe nói chậm.", "I understand numbers, colours and everyday objects when spoken slowly."],
          ["Mình làm theo được lời dặn ngắn trong lớp: Mở sách ra, Ngồi xuống.", "I can follow short classroom instructions."]
        ],
        noi: [
          ["Mình giới thiệu được tên, tuổi, nơi ở, gia đình.", "I can introduce my name, age, home and family."],
          ["Mình hỏi và trả lời được câu có/không: Bạn có… không?", "I can ask and answer yes/no questions: Bạn có… không?"],
          ["Mình xưng hô đúng với người lớn và bạn bè: con, cháu, em, mình.", "I can use the right words for 'I' and 'you' with adults and friends."]
        ],
        doc: [
          ["Mình đọc được câu ngắn về chủ đề quen thuộc.", "I can read short sentences on familiar topics."],
          ["Mình đọc hiểu được bảng tên, nhãn, thiệp ngắn.", "I can read signs, labels and short cards."]
        ],
        viet: [
          ["Mình viết được câu ngắn giới thiệu bản thân.", "I can write short sentences about myself."],
          ["Mình điền được thông tin cá nhân đơn giản vào phiếu.", "I can fill in simple personal details on a form."]
        ]
      }
    },
    {
      bac: 2, ma: "B2", cap: "so-cap", khung: 2,
      chang_vi: "Chợ quê", chang_en: "Country market",
      ten_vi: "Sơ cấp – Bậc 2", ten_en: "Elementary – Level 2",
      mo_ta_vi: "Trao đổi về việc hằng ngày: mua bán, hỏi đường, thời gian, thời tiết, món ăn, sở thích.",
      mo_ta_en: "Talk about daily life: shopping, directions, time, weather, food and hobbies.",
      lam_duoc: {
        nghe: [
          ["Mình hiểu ý chính của đoạn hội thoại ngắn khi đi chợ, hỏi đường.", "I understand the main idea of short talks at the market or when asking the way."],
          ["Mình nghe được giờ, ngày, giá tiền, số điện thoại.", "I can catch times, dates, prices and phone numbers."],
          ["Mình hiểu thông báo ngắn, rõ ràng.", "I understand short, clear announcements."]
        ],
        noi: [
          ["Mình hỏi giá, mua đồ, gọi món được.", "I can ask prices, buy things and order food."],
          ["Mình kể được một ngày của mình, việc đã làm hôm qua.", "I can describe my day and what I did yesterday."],
          ["Mình nói được điều mình thích và không thích, kèm lý do ngắn.", "I can say what I like and dislike, with a short reason."]
        ],
        doc: [
          ["Mình đọc hiểu đoạn văn ngắn về đời sống hằng ngày.", "I can read short texts about daily life."],
          ["Mình tìm được thông tin trong thực đơn, lịch, tin nhắn ngắn.", "I can find information in menus, timetables and short messages."]
        ],
        viet: [
          ["Mình viết được đoạn 3–5 câu về bản thân, gia đình, một ngày của mình.", "I can write 3–5 sentences about myself, my family or my day."],
          ["Mình viết được tin nhắn, thiệp chúc mừng ngắn.", "I can write short messages and greeting cards."]
        ]
      }
    },
    {
      bac: 3, ma: "B3", cap: "trung-cap", khung: 3,
      chang_vi: "Trường làng", chang_en: "Village school",
      ten_vi: "Trung cấp – Bậc 3", ten_en: "Intermediate – Level 3",
      mo_ta_vi: "Hiểu ý chính về chủ đề quen thuộc; kể chuyện, nêu ý kiến và lý do; viết đoạn văn rõ ràng.",
      mo_ta_en: "Understand main ideas on familiar topics; tell stories, give opinions with reasons; write clear paragraphs.",
      lam_duoc: {
        nghe: [
          ["Mình hiểu ý chính của câu chuyện, bài nói chuẩn mực về chủ đề quen thuộc.", "I understand the main points of clear stories and talks on familiar topics."],
          ["Mình theo dõi được hội thoại ở tốc độ bình thường.", "I can follow conversations at normal speed."]
        ],
        noi: [
          ["Mình kể lại được một câu chuyện, một chuyến đi, một lễ hội.", "I can retell a story, a trip or a festival."],
          ["Mình nêu được ý kiến và giải thích lý do.", "I can give my opinion and explain why."],
          ["Mình xử lý được hầu hết tình huống khi đến Việt Nam.", "I can handle most situations when visiting Vietnam."]
        ],
        doc: [
          ["Mình đọc hiểu truyện, bài đọc dài hơn về phong tục, văn hoá.", "I can read longer stories and texts about customs and culture."],
          ["Mình hiểu nghĩa thường gặp của ca dao, tục ngữ, thành ngữ quen.", "I understand the usual meaning of well-known folk sayings and idioms."]
        ],
        viet: [
          ["Mình viết được đoạn văn có mở đầu, thân, kết về chủ đề quen thuộc.", "I can write a paragraph with a beginning, middle and end on familiar topics."],
          ["Mình viết được thư, kể lại sự việc đã xảy ra.", "I can write a letter and describe past events."]
        ]
      }
    },
    {
      bac: 4, ma: "B4", cap: "trung-cap", khung: 4,
      chang_vi: "Lên phố", chang_en: "Into town",
      ten_vi: "Trung cấp – Bậc 4", ten_en: "Intermediate – Level 4",
      mo_ta_vi: "Hiểu văn bản phức tạp, cả chủ đề trừu tượng; giao tiếp trôi chảy; viết bài nêu ưu nhược điểm.",
      mo_ta_en: "Understand complex texts, including abstract topics; speak fluently; write texts weighing pros and cons.",
      lam_duoc: {
        nghe: [
          ["Mình hiểu bài nói dài, bản tin, chương trình truyền hình về chủ đề quen thuộc.", "I understand longer talks, news and TV programmes on familiar topics."],
          ["Mình nhận ra thái độ, ý kiến của người nói.", "I can recognise the speaker's attitude and opinion."]
        ],
        noi: [
          ["Mình trao đổi trôi chảy, tự nhiên với người bản ngữ.", "I can talk fluently and naturally with native speakers."],
          ["Mình thuyết trình ngắn và trả lời câu hỏi.", "I can give a short presentation and answer questions."],
          ["Mình so sánh, nêu ưu điểm và nhược điểm của các lựa chọn.", "I can compare options and weigh pros and cons."]
        ],
        doc: [
          ["Mình đọc hiểu bài báo, văn bản có chủ đề trừu tượng.", "I can read articles and texts on abstract topics."],
          ["Mình hiểu từ Hán-Việt thường gặp và hàm ý đơn giản.", "I understand common Sino-Vietnamese words and simple implied meanings."]
        ],
        viet: [
          ["Mình viết được bài rõ ràng, chi tiết, giải thích quan điểm.", "I can write clear, detailed texts explaining a point of view."],
          ["Mình viết được bài so sánh, nêu ưu nhược điểm.", "I can write texts comparing options with pros and cons."]
        ]
      }
    },
    {
      // Thêm 26-11-2026 (CVCEC đồng ý mở rộng lộ trình lên Cao cấp). Bài Bậc 5 do CVCEC biên soạn (đang soạn).
      bac: 5, ma: "B5", cap: "cao-cap", khung: 5,
      chang_vi: "Văn Miếu", chang_en: "Temple of Literature",
      ten_vi: "Cao cấp – Bậc 5", ten_en: "Advanced – Level 5",
      mo_ta_vi: "Hiểu văn bản dài, khó, nhận ra hàm ý; diễn đạt trôi chảy, linh hoạt trong học tập và công việc; viết bài chặt chẽ, đúng văn phong.",
      mo_ta_en: "Understand long, demanding texts and implied meaning; express yourself fluently and flexibly for study and work; write well-structured texts in the right style.",
      lam_duoc: {
        nghe: [
          ["Mình hiểu bài nói dài, kể cả khi ý không nói thẳng ra.", "I understand extended speech, even when ideas are not stated directly."],
          ["Mình theo dõi được bản tin, phim, chương trình truyền hình mà không mấy khó khăn.", "I can follow the news, films and TV programmes without much effort."]
        ],
        noi: [
          ["Mình nói trôi chảy, tự nhiên, ít khi phải dừng lại tìm từ.", "I speak fluently and naturally, rarely stopping to search for words."],
          ["Mình dùng tiếng Việt linh hoạt trong học tập, công việc và giao tiếp xã hội.", "I use Vietnamese flexibly for study, work and social life."],
          ["Mình trình bày rõ ràng một vấn đề phức tạp, có dẫn chứng.", "I can present a complex topic clearly, with supporting examples."]
        ],
        doc: [
          ["Mình đọc hiểu văn bản dài, phức tạp, kể cả tác phẩm văn học.", "I can read long, complex texts, including literary works."],
          ["Mình nhận ra phong cách, thái độ và hàm ý của người viết.", "I can recognise the writer's style, attitude and implied meaning."]
        ],
        viet: [
          ["Mình viết được bài rõ ràng, chặt chẽ về chủ đề phức tạp.", "I can write clear, well-structured texts on complex topics."],
          ["Mình chọn được văn phong hợp với người đọc: thư trang trọng, báo cáo, bài luận.", "I can choose a style that suits the reader: formal letters, reports, essays."]
        ]
      }
    }
  ];

  // Chủ điểm theo bậc (dùng chung cho mọi góc học; mã không dấu)
  var CHU_DIEM = [
    { id: "am-chu-thanh", bac: 0, vi: "Âm, chữ cái, thanh điệu", en: "Sounds, letters and tones" },
    { id: "van", bac: 0, vi: "Vần và đánh vần", en: "Rhymes and spelling" },
    { id: "chao-hoi", bac: 0, vi: "Chào hỏi, lời lễ phép", en: "Greetings and polite words" },
    { id: "ban-than", bac: 1, vi: "Bản thân", en: "About me" },
    { id: "gia-dinh", bac: 1, vi: "Gia đình, xưng hô", en: "Family and forms of address" },
    { id: "so-dem-mau-sac", bac: 1, vi: "Số đếm, màu sắc, hình dạng", en: "Numbers, colours and shapes" },
    { id: "truong-lop", bac: 1, vi: "Trường lớp, đồ dùng học tập", en: "School and classroom" },
    { id: "co-the", bac: 1, vi: "Cơ thể, quần áo", en: "Body and clothes" },
    { id: "con-vat-cay-coi", bac: 1, vi: "Con vật, cây cối", en: "Animals and plants" },
    { id: "nha-cua", bac: 1, vi: "Nhà cửa, đồ vật", en: "Home and things" },
    { id: "thoi-gian", bac: 2, vi: "Thời gian, ngày tháng", en: "Time and dates" },
    { id: "thoi-tiet", bac: 2, vi: "Thời tiết, mùa", en: "Weather and seasons" },
    { id: "mon-an", bac: 2, vi: "Món ăn, đi chợ, gọi món", en: "Food, markets and ordering" },
    { id: "hoi-duong", bac: 2, vi: "Hỏi đường, đi lại", en: "Directions and getting around" },
    { id: "so-thich", bac: 2, vi: "Sở thích, thể thao, vui chơi", en: "Hobbies, sport and play" },
    { id: "sinh-hoat", bac: 2, vi: "Một ngày của em, việc nhà", en: "Daily routine and chores" },
    { id: "suc-khoe", bac: 2, vi: "Sức khoẻ, đi khám", en: "Health and seeing a doctor" },
    { id: "le-tet", bac: 3, vi: "Lễ Tết, phong tục", en: "Festivals and customs" },
    { id: "truyen-ke", bac: 3, vi: "Truyện cổ tích, truyện kể", en: "Folk tales and stories" },
    { id: "ca-dao-tuc-ngu", bac: 3, vi: "Ca dao, tục ngữ, thành ngữ", en: "Folk verses, proverbs and idioms" },
    { id: "que-huong", bac: 3, vi: "Quê hương, địa danh Việt Nam", en: "Homeland and places in Vietnam" },
    { id: "dao-duc", bac: 3, vi: "Cách cư xử, bài học cuộc sống", en: "Manners and life lessons" },
    { id: "tho-ca", bac: 3, vi: "Thơ, đồng dao, dân ca", en: "Poems, chants and folk songs" },
    { id: "xa-hoi", bac: 4, vi: "Xã hội, môi trường, công nghệ", en: "Society, environment and technology" },
    { id: "lap-luan", bac: 4, vi: "So sánh, nêu ý kiến, lập luận", en: "Comparing, opinions and arguing" },
    { id: "van-hoc", bac: 5, vi: "Văn học, nghệ thuật", en: "Literature and the arts" },
    { id: "lich-su", bac: 5, vi: "Lịch sử, truyền thống", en: "History and heritage" },
    { id: "cong-viec", bac: 5, vi: "Học tập, công việc, giao tiếp trang trọng", en: "Study, work and formal communication" }
  ];

  // ------------------------------------------------------------------
  // NHÃN BÀI: bài nào thuộc bậc nào. Mỗi góc học (id trong TTV_DANH_SACH) một danh sách luật,
  // đọc từ trên xuống, luật đầu tiên khớp được dùng.
  //   ma   : biểu thức chính quy khớp mã bài (cùng mã bài trang gửi qua TTV.ghiKetQua)
  //   bac  : bậc (0–4)
  //   ky_nang : kỹ năng chính
  //   chu_diem: mã chủ điểm (không bắt buộc)
  //   doi_tuong: nhóm hợp nhất (không bắt buộc; bỏ trống là mọi nhóm)
  // Cả góc chỉ có một bậc thì dùng ma: ".*".
  // ------------------------------------------------------------------
  // so_bai: số bài của luật (để tính phần trăm tiến độ của mỗi bậc).
  // Mã bài là mã góc học gửi qua TTV.ghiKetQua (chữ thường, không dấu, gạch nối), ví dụ "bai-12", "q1-b01".
  // Gắn nhãn ngày 17-11-2026 theo độ khó ngôn ngữ của bài (độ dài văn bản, cấu trúc câu, từ vựng),
  // không theo chủ đề. Cập nhật khi góc học thêm bài.
  var NHAN_BAI = {
    // Tiếng Việt cơ bản – baihoc.cvcec.org (Bài 1–80, Ôn tập 1–12)
    baihoc: [
      { ma: "bai-([1-9]|[1-6][0-9]|70)", bac: 0, so_bai: 70, ky_nang: ["nghe", "doc", "viet"], chu_diem: "van" },
      { ma: "on-tap-[12]", bac: 0, so_bai: 2, ky_nang: ["doc", "nghe"], chu_diem: "van" },
      { ma: "on-tap-([3-9]|1[0-2])", bac: 1, so_bai: 10, ky_nang: ["doc", "nghe", "viet"] },
      { ma: "bai-(7[1-9]|80)", bac: 2, so_bai: 10, ky_nang: ["doc"] }
    ],
    // Văn hoá truyền thống – baihoc.cvcec.org (Bài 81–145, không có Bài 122)
    vanhoa: [
      { ma: "bai-14[23]", bac: 1, so_bai: 2, ky_nang: ["nghe", "doc", "viet"], chu_diem: "am-chu-thanh" },
      { ma: "bai-(138|145)", bac: 3, so_bai: 2, ky_nang: ["doc", "viet"] },
      { ma: "bai-(8[1-9]|9[0-9]|1[0-3][0-9]|14[0-4])", bac: 2, so_bai: 60, ky_nang: ["doc"], chu_diem: "le-tet" }
    ],
    // Vui học tiếng Việt – Quyển 1 (20 bài), Quyển 2 (20 bài)
    vuihoc: [
      { ma: "q1-b(0[1-9]|1[0-9]|20)", bac: 1, so_bai: 20, ky_nang: ["nghe", "noi"], doi_tuong: ["5-8", "9-14"] },
      { ma: "q2-b0[1-5]", bac: 1, so_bai: 5, ky_nang: ["noi", "doc", "viet"], doi_tuong: ["5-8", "9-14"] },
      { ma: "q2-b(0[6-9]|1[0-9]|20)", bac: 2, so_bai: 15, ky_nang: ["noi", "doc", "viet"], doi_tuong: ["5-8", "9-14"] },
      // Vui học nâng cao (CVCEC biên soạn, trung-cap/bai-NN/, mã tc-bNN) – thêm 26-11-2026; nâng so_bai khi có bài mới
      { ma: "tc-b01", bac: 3, so_bai: 1, ky_nang: ["nghe", "noi", "doc", "viet"], chu_diem: "le-tet", doi_tuong: ["nguoi-lon"] }
    ],
    // Ngữ pháp tiếng Việt – 37 bài (bai.html#bai-N); người mới học vào sau khoảng Bậc 2
    nguphap: [
      { ma: "bai-(8|10|11|12|31|32|33)", bac: 2, so_bai: 7, ky_nang: ["noi", "viet"] },
      { ma: "bai-([1-4]|9|13|14|15|18|19|20|22|23|28|29|34|37)", bac: 3, so_bai: 17, ky_nang: ["viet", "noi"] },
      { ma: "bai-(5|6|7|16|17|21|24|25|26|27|30|35|36)", bac: 4, so_bai: 13, ky_nang: ["doc", "viet"], chu_diem: "lap-luan" }
    ],
    // Kho báu ca dao, tục ngữ – 60 câu (tn = thành ngữ, tg = tục ngữ, cd = ca dao)
    khobau: [
      { ma: "tn(08|09|10|11|14)", bac: 2, so_bai: 5, ky_nang: ["doc"], chu_diem: "ca-dao-tuc-ngu" },
      { ma: "cd(01|03|06|09|1[0-6]|19|20)", bac: 4, so_bai: 13, ky_nang: ["doc"], chu_diem: "ca-dao-tuc-ngu" },
      { ma: "(tn|tg|cd)[0-9]{2}", bac: 3, so_bai: 42, ky_nang: ["doc"], chu_diem: "ca-dao-tuc-ngu" }
    ],
    // Truyện cổ tích – 30 truyện (mã t01–t30); truyền thuyết lịch sử nhiều Hán-Việt xếp Bậc 4
    cotich: [
      { ma: "t(04|05|08|11|17)", bac: 4, so_bai: 5, ky_nang: ["doc", "nghe"], chu_diem: "truyen-ke" },
      { ma: "t(0[1-9]|[12][0-9]|30)", bac: 3, so_bai: 25, ky_nang: ["doc", "nghe", "viet"], chu_diem: "truyen-ke" }
    ],
    // Hát cùng Trâu Con – đồng dao (Bậc 1), vè (Bậc 2), dân ca và hát ru (Bậc 3)
    hatca: [
      { ma: "dung-dang-dung-de|chi-chi-chanh-chanh|keo-cua-lua-xe|nu-na-nu-nong|tap-tam-vong|rong-ran-len-may|tha-dia-ba-ba|lon-cau-vong|xia-ca-me|con-voi-con-voi|ba-cong-di-cho|ong-giang-ong-giang", bac: 1, so_bai: 12, ky_nang: ["nghe", "noi"], chu_diem: "tho-ca" },
      { ma: "ve-[a-z-]+", bac: 2, so_bai: 4, ky_nang: ["nghe", "noi"], chu_diem: "tho-ca" },
      { ma: "[a-z-]+", bac: 3, so_bai: 8, ky_nang: ["nghe"], chu_diem: "tho-ca" }
    ],
    // Bài học cuộc sống – Lên Sáu (18 bài, Bậc 3), Lên Tám (32 bài, Bậc 4)
    cuocsong: [
      { ma: "lensau-([1-9]|1[0-8])", bac: 3, so_bai: 18, ky_nang: ["nghe", "doc"], chu_diem: "dao-duc" },
      { ma: "lentam-([1-9]|[12][0-9]|3[0-2])", bac: 4, so_bai: 32, ky_nang: ["doc", "viet"], chu_diem: "dao-duc" }
    ],
    // Khám phá Việt Nam – 31 trạm (mã trạm)
    vietnam: [
      { ma: "ban-gioc|mui-doi|hoi-an", bac: 1, so_bai: 3, ky_nang: ["nghe"], chu_diem: "so-dem-mau-sac" },
      { ma: "hoang-sa|truong-sa|van-mieu|den-hung|thanh-nha-ho|my-son", bac: 3, so_bai: 6, ky_nang: ["nghe", "doc"], chu_diem: "que-huong" },
      { ma: "[a-z-]+", bac: 2, so_bai: 22, ky_nang: ["nghe", "doc"], chu_diem: "que-huong" }
    ],
    // Về Nhà Em – 8 món (mã món)
    venhaem: [
      { ma: "[a-z-]+", bac: 2, so_bai: 8, ky_nang: ["nghe", "noi", "doc"], chu_diem: "mon-an" }
    ],
    // Luyện nói – Luyện thanh (cổng): chạy trên máy, không gửi kết quả; nhãn dùng để xếp chủ đề vào lộ trình
    luyennoi: [
      { ma: "luyen-thanh|bang-am", bac: 0, so_bai: 2, ky_nang: ["nghe", "noi"], chu_diem: "am-chu-thanh" },
      { ma: "co-the-em|mau-sac|dem-so|do-choi|qua-ngon|cam-xuc|chao-hoi|gia-dinh|o-truong|con-vat", bac: 1, so_bai: 10, ky_nang: ["noi"] },
      { ma: "do-an|thoi-tiet|so-thich|mot-ngay-cua-em|di-cho|ky-nghi-he", bac: 2, so_bai: 6, ky_nang: ["noi"] },
      { ma: "[a-z-]+", bac: 3, so_bai: 8, ky_nang: ["noi"] }
    ]
  };

  function boDauMa(s) {
    return String(s == null ? "" : s).normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D")
      .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }

  // Trả { bac, ky_nang, chu_diem, doi_tuong } của một bài, hoặc null nếu chưa gắn nhãn.
  function nhanCuaBai(goc, maBai) {
    var luat = NHAN_BAI[goc];
    if (!luat) return null;
    var ma = boDauMa(maBai);
    for (var i = 0; i < luat.length; i++) {
      try {
        if (new RegExp("^(?:" + luat[i].ma + ")$").test(ma)) {
          return { bac: luat[i].bac, ky_nang: luat[i].ky_nang || [], chu_diem: luat[i].chu_diem || null, doi_tuong: luat[i].doi_tuong || null };
        }
      } catch (e) {}
    }
    return null;
  }
  function bac(so) {
    for (var i = 0; i < BAC.length; i++) if (BAC[i].bac === so) return BAC[i];
    return null;
  }
  // Các bậc mà một góc học có bài (để vẽ "góc này học ở chặng nào")
  function bacCuaGoc(goc) {
    var luat = NHAN_BAI[goc] || [], co = {};
    for (var i = 0; i < luat.length; i++) co[luat[i].bac] = true;
    return Object.keys(co).map(Number).sort();
  }

  // Góc chạy hoàn toàn trên máy, không gửi kết quả: không tính vào tổng số bài của tiến độ
  var KHONG_GHI_KET_QUA = ["luyennoi"];

  // Tổng số bài đã gắn nhãn của mỗi bậc: { 0: n, 1: n, … } (cả nền tảng, hoặc một góc)
  function soBaiTheoBac(goc) {
    var kq = {};
    Object.keys(NHAN_BAI).forEach(function (g) {
      if (goc && g !== goc) return;
      if (!goc && KHONG_GHI_KET_QUA.indexOf(g) >= 0) return;
      NHAN_BAI[g].forEach(function (l) { kq[l.bac] = (kq[l.bac] || 0) + (l.so_bai || 0); });
    });
    return kq;
  }

  // ------------------------------------------------------------------
  // MẢNG NGÔN NGỮ (từ 26-11-2026): dùng cho phần phân tích của "Góc học tập của em".
  // Cùng mã với "mang" trong kết quả từng câu (TTV.ghiKetQua({ …, cau: [...] })).
  // ------------------------------------------------------------------
  var MANG = [
    { id: "am-chu", vi: "Âm, vần, thanh và chữ", en: "Sounds, tones and letters" },
    { id: "tu-vung", vi: "Từ vựng", en: "Vocabulary" },
    { id: "ngu-phap", vi: "Ngữ pháp", en: "Grammar" },
    { id: "doc-hieu", vi: "Đọc hiểu", en: "Reading comprehension" },
    { id: "nghe-hieu", vi: "Nghe hiểu", en: "Listening comprehension" },
    { id: "viet", vi: "Viết và chính tả", en: "Writing and spelling" },
    { id: "van-hoa", vi: "Văn hoá, thành ngữ, ca dao", en: "Culture, idioms and folk verse" },
    { id: "noi", vi: "Nói", en: "Speaking" }
  ];
  // Loại lỗi của một câu sai (mã "loi" trong kết quả từng câu)
  var LOAI_LOI = [
    { id: "dau-thanh", vi: "Dấu thanh (sắc, huyền, hỏi, ngã, nặng)", en: "Tone marks" },
    { id: "dau-chu", vi: "Dấu chữ (ă, â, ê, ô, ơ, ư, đ)", en: "Letter diacritics (ă, â, ê, ô, ơ, ư, đ)" },
    { id: "chinh-ta", vi: "Chính tả", en: "Spelling" },
    { id: "am-van", vi: "Âm đầu, vần", en: "Initial sounds and rhymes" },
    { id: "nghia", vi: "Nghĩa của từ", en: "Word meaning" },
    { id: "trat-tu", vi: "Trật tự từ trong câu", en: "Word order" },
    { id: "ngu-phap", vi: "Ngữ pháp (loại từ, hư từ…)", en: "Grammar (classifiers, function words…)" },
    { id: "khac", vi: "Lỗi khác", en: "Other" }
  ];
  // Mảng chính của từng trò (hoatDong) trong mỗi góc học. Đọc từ trên xuống, luật đầu tiên khớp được dùng.
  //   hd: biểu thức chính quy khớp mã trò (đã qua maBai/boDauMa), mang: mã trong MANG.
  // Kết quả từng câu có "mang" riêng thì dùng "mang" của câu.
  var MANG_HOAT_DONG = {
    // __MANG_HOAT_DONG__
  };
  function mangCuaHoatDong(goc, hoatDong) {
    var luat = MANG_HOAT_DONG[goc];
    if (!luat) return null;
    var ma = boDauMa(hoatDong);
    for (var i = 0; i < luat.length; i++) {
      try { if (new RegExp("^(?:" + luat[i].hd + ")$").test(ma)) return luat[i].mang; } catch (e) {}
    }
    return null;
  }
  function timMang(id) {
    for (var i = 0; i < MANG.length; i++) if (MANG[i].id === id) return MANG[i];
    return null;
  }

  var LO_TRINH = {
    phienBan: "2026-11-26",
    doiTuong: DOI_TUONG,
    kyNang: KY_NANG,
    bac: BAC,
    chuDiem: CHU_DIEM,
    nhanBai: NHAN_BAI,
    timBac: bac,
    nhanCuaBai: nhanCuaBai,
    bacCuaGoc: bacCuaGoc,
    soBaiTheoBac: soBaiTheoBac,
    maBai: boDauMa,
    mang: MANG,
    loaiLoi: LOAI_LOI,
    mangHoatDong: MANG_HOAT_DONG,
    mangCuaHoatDong: mangCuaHoatDong,
    timMang: timMang
  };
  window.TTV_LO_TRINH = LO_TRINH;
})();
