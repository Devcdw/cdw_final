// lang-config.js 
// 언어별 설정 정보 (전남경찰 외국인 지원 서비스)

// ✅ 표시 순서 고정
const LANG_ORDER = [
  "ko", "en", "zh", "vi", "ne", "uz", "th", "mn", "ru", "id", "ja", "km", "tl", "ar"
];

// ✅ 공통 경로
const PDF_BASE = "https://mmma3108-rgb.github.io/foreign-safety-pdfs/";

// ✅ 언어별 설정
const LANG_CONFIG = {
  ko: {
    code: "ko",
    flag: "🇰🇷",
    name: "한국어 (Korean)",

    headerTitle: "기능을 선택하세요",
    headerSub: "선택한 언어로 서비스를 이용하세요",

    helpIcon: "👮‍♂️",
    trafficIcon: "🚦",

    helpLabel: "경찰 신고·상담 지원",
    helpDesc: "경찰과의 소통을 지원합니다.",
    helpUrl: "https://koreapolkim.github.io/police_/help.html",

    guideLabel: "범죄예방 가이드",
    guideDesc: "한국에서 지켜야 할 기본 법규와 범죄 예방법을 안내합니다.",
    guideUrl: "https://leaflet.e2web.co.kr/view.php?lang=korea",

    // ✅ PDF 직접 연결
    trafficLabel: "안전한 교통생활",
    trafficDesc: "외국인을 위한 안전한 교통생활 자료를 안내합니다.",
    trafficUrl: PDF_BASE + "traffic-ko.pdf",

    // ✅ 외국인 마약 예방 가이드
    drugLabel: "외국인 마약 예방 가이드",
    drugDesc: "한국 체류 외국인이 알아야 할 마약 예방법을 안내합니다.",
    drugUrl: PDF_BASE + "dedu-ko.pdf",

    safetyLabel: "안전 수칙",
    safetyDesc: "안전수칙 자료를 안내합니다.",
    safetyUrl: PDF_BASE + "safety-ko.pdf",

    rightsLabel: "외국인 권익보호 안내문",
    rightsDesc: "외국인 권익보호 다국어 안내문을 제공합니다.",
    rightsUrl: PDF_BASE + "rights-ko.pdf",

    lawLabel: "생활법령정보",
    lawDesc: "생활법령정보를 검색할 수 있습니다.",
    lawUrl: "https://m.easylaw.go.kr/MOM/Main.laf",

    googleLabel: "구글 번역기",
    googleDesc: "언어 번역을 지원합니다.",
    googleUrl: "https://translate.google.co.kr/?sl=auto&tl=ko&op=translate",

    img: "img/lang-ko.png",
  },

  en: {
    code: "en",
    flag: "🌐",
    name: "English",

    headerTitle: "Choose a function",
    headerSub: "Use the service in your selected language.",

    helpIcon: "👮‍♂️",
    trafficIcon: "🚦",

    helpLabel: "Police Help & Consultation",
    helpDesc: "Supports communication with the police.",
    helpUrl: "https://koreapolkim.github.io/police_/help.html",

    guideLabel: "Crime Prevention Guide",
    guideDesc: "Provides basic laws and crime prevention rules in Korea.",
    guideUrl: "https://leaflet.e2web.co.kr/view.php?lang=english",

    // ✅ PDF
    trafficLabel: "Safe Traffic Guide",
    trafficDesc: "Provides safe traffic information for foreigners.",
    trafficUrl: PDF_BASE + "traffic-en.pdf",

    // ✅ Drug guide
    drugLabel: "Drug Prevention Guide for Foreigners",
    drugDesc: "Drug prevention measures that foreigners staying in Korea need to know.",
    drugUrl: PDF_BASE + "dedu-en.pdf",

    safetyLabel: "Safety Rules",
    safetyDesc: "Provides safety rules material.",
    safetyUrl: PDF_BASE + "safety-en.pdf",

    rightsLabel: "Foreigner Rights Protection Guide",
    rightsDesc: "Multilingual rights protection guide for foreigners.",
    rightsUrl: PDF_BASE + "rights-en.pdf",

    lawLabel: "Practical Law Info",
    lawDesc: "Search practical law information.",
    lawUrl: "https://m.easylaw.go.kr/MOM/Main.laf",

    googleLabel: "Google Translate",
    googleDesc: "Supports language translation.",
    googleUrl: "https://translate.google.co.kr/?sl=auto&tl=ko&op=translate",

    img: "img/lang-en.png",
  },

  zh: {
    code: "zh",
    flag: "🇨🇳",
    name: "中文 (Chinese)",

    headerTitle: "请选择功能",
    headerSub: "您可以使用所选语言的服务。",

    helpIcon: "👮‍♂️",
    trafficIcon: "🚦",

    helpLabel: "报警与咨询帮助",
    helpDesc: "帮助您与警察进行沟通。",
    helpUrl: "https://koreapolkim.github.io/police_/help.html",

    guideLabel: "预防犯罪指南",
    guideDesc: "介绍在韩国需要遵守的基本法律和预防犯罪的方法。",
    guideUrl: "https://leaflet.e2web.co.kr/view.php?lang=china",

    // ✅ PDF
    trafficLabel: "交通安全信息",
    trafficDesc: "为外国人提供交通安全生活信息。",
    trafficUrl: PDF_BASE + "traffic-zh.pdf",

    // ✅ Drug guide
    drugLabel: "外国人毒品预防指南",
    drugDesc: "在韩外国人必须了解的禁毒预防方法。",
    drugUrl: PDF_BASE + "dedu-zh.pdf",

    rightsLabel: "外籍人士权益保护指南",
    rightsDesc: "提供多语言权益保护资料。",
    rightsUrl: PDF_BASE + "rights-zh.pdf",

    safetyLabel: "安全守则",
    safetyDesc: "提供安全守则资料。",
    safetyUrl: PDF_BASE + "safety-zh.pdf",

    lawLabel: "生活法律信息",
    lawDesc: "可检索生活法律信息。",
    lawUrl: "https://m.easylaw.go.kr/MOM/Main.laf",

    googleLabel: "谷歌翻译",
    googleDesc: "支持语言翻译。",
    googleUrl: "https://translate.google.co.kr/?sl=auto&tl=ko&op=translate",

    img: "img/lang-zh.png",
  },

  vi: {
    code: "vi",
    flag: "🇻🇳",
    name: "Tiếng Việt (Vietnamese)",

    headerTitle: "Chọn chức năng",
    headerSub: "Sử dụng dịch vụ bằng ngôn ngữ đã chọn.",

    helpIcon: "👮‍♂️",
    trafficIcon: "🚦",

    helpLabel: "Hỗ trợ báo cảnh sát và tư vấn",
    helpDesc: "Hỗ trợ bạn giao tiếp với cảnh sát.",
    helpUrl: "https://koreapolkim.github.io/police_/help.html",

    guideLabel: "Hướng dẫn phòng chống tội phạm",
    guideDesc: "Giới thiệu các luật cơ bản và cách phòng chống tội phạm tại Hàn Quốc.",
    guideUrl: "https://leaflet.e2web.co.kr/view.php?lang=vietnam",

    // ✅ PDF
    trafficLabel: "An toàn giao thông",
    trafficDesc: "Tài liệu an toàn giao thông dành cho người nước ngoài.",
    trafficUrl: PDF_BASE + "traffic-vi.pdf",

    // ✅ Drug guide
    drugLabel: "Hướng dẫn phòng chống ma túy cho người nước ngoài",
    drugDesc: "Các biện pháp phòng chống ma túy mà người nước ngoài cư trú tại Hàn Quốc cần biết.",
    drugUrl: PDF_BASE + "dedu-vi.pdf",

    rightsLabel: "Hướng dẫn bảo vệ quyền lợi",
    rightsDesc: "Tài liệu quyền lợi đa ngôn ngữ dành cho người nước ngoài.",
    rightsUrl: PDF_BASE + "rights-vi.pdf",

    safetyLabel: "Quy tắc an toàn",
    safetyDesc: "Tài liệu quy tắc an toàn.",
    safetyUrl: PDF_BASE + "safety-vi.pdf",

    lawLabel: "Thông tin pháp luật",
    lawDesc: "Tìm kiếm thông tin pháp luật đời sống.",
    lawUrl: "https://m.easylaw.go.kr/MOM/Main.laf",

    googleLabel: "Google Dịch",
    googleDesc: "Hỗ trợ dịch ngôn ngữ.",
    googleUrl: "https://translate.google.co.kr/?sl=auto&tl=ko&op=translate",

    img: "img/lang-vi.png",
  },

  ne: {
    code: "ne",
    flag: "🇳🇵",
    name: "नेपाली (Nepali)",

    headerTitle: "कार्य चयन गर्नुहोस्",
    headerSub: "तपाईंले छनोट गरेको भाषामा सेवा प्रयोग गर्न सक्नुहुन्छ।",

    helpIcon: "👮‍♂️",

    helpLabel: "प्रहरीलाई जानकारी दिन तथा सल्लाह लिन सहयोग",
    helpDesc: "प्रहरीसँग संचार गर्न सहयोग गर्छ।",
    helpUrl: "https://koreapolkim.github.io/police_/help.html",

    guideLabel: "अपराध रोकथाम मार्गदर्शन",
    guideDesc: "कोरियामा पालना गर्नुपर्ने आधारभूत कानुन र अपराध रोकथामका उपायहरू बताउँछ।",
    guideUrl: "https://leaflet.e2web.co.kr/view.php?lang=nepal",

    // ✅ PDF (traffic 없음)
    rightsLabel: "अधिकार सुरक्षा 안내",
    rightsDesc: "बहुभाषिक अधिकार सुरक्षा सामग्री।",
    rightsUrl: PDF_BASE + "rights-ne.pdf",

    safetyLabel: "सुरक्षा नियम",
    safetyDesc: "सुरक्षा नियम सामग्री प्रदान गर्छ।",
    safetyUrl: PDF_BASE + "safety-ne.pdf",

    lawLabel: "जीवन कानुन जानकारी",
    lawDesc: "जीवनसम्बन्धी कानुनी जानकारी खोज्नुहोस्।",
    lawUrl: "https://m.easylaw.go.kr/MOM/Main.laf",

    googleLabel: "Google अनुवाद",
    googleDesc: "भाषा अनुवादमा सहयोग गर्छ।",
    googleUrl: "https://translate.google.co.kr/?sl=auto&tl=ko&op=translate",

    img: "img/lang-ne.png",
  },

  uz: {
    code: "uz",
    flag: "🇺🇿",
    name: "O'zbek tili (Uzbek)",

    headerTitle: "Funktsiyani tanlang",
    headerSub: "Tanlangan tilda xizmatdan foydalanishingiz mumkin.",

    helpIcon: "👮‍♂️",

    helpLabel: "Politsiyaga murojaat qilishga yordam",
    helpDesc: "Politsiya bilan muloqotni yengillashtiradi.",
    helpUrl: "https://koreapolkim.github.io/police_/help.html",

    guideLabel: "Jinoyatlarning oldini olish qo'llanma",
    guideDesc: "Koreyada amal qilinadigan asosiy qonunlar va jinoyatlarning oldini olish yo‘llarini tushuntiradi.",
    guideUrl: "https://leaflet.e2web.co.kr/view.php?lang=uzbek",

    // ✅ PDF (traffic 없음)
    rightsLabel: "Huquqlarni himoya qilish",
    rightsDesc: "Huquqlarni himoya qilish bo‘yicha ko‘p tilli materiallar.",
    rightsUrl: PDF_BASE + "rights-uz.pdf",

    safetyLabel: "Xavfsizlik qoidalari",
    safetyDesc: "Xavfsizlik qoidalari bo‘yicha materiallar.",
    safetyUrl: PDF_BASE + "safety-uz.pdf",

    lawLabel: "Amaliy qonunlar",
    lawDesc: "Amaliy qonun ma’lumotlarini qidiring.",
    lawUrl: "https://m.easylaw.go.kr/MOM/Main.laf",

    googleLabel: "Google Translate",
    googleDesc: "Til tarjimasini qo‘llab-quvvatlaydi.",
    googleUrl: "https://translate.google.co.kr/?sl=auto&tl=ko&op=translate",

    img: "img/lang-uz.png",
  },

  th: {
    code: "th",
    flag: "🇹🇭",
    name: "ไทย (Thai)",

    headerTitle: "เลือกฟังก์ชัน",
    headerSub: "คุณสามารถใช้บริการเป็นภาษาที่เลือกได้",

    helpIcon: "👮‍♂️",

    helpLabel: "ช่วยเหลือการแจ้งความและปรึกษาตำรวจ",
    helpDesc: "ช่วยให้คุณสื่อสารกับตำรวจได้สะดวกขึ้น",
    helpUrl: "https://koreapolkim.github.io/police_/help.html",

    guideLabel: "คู่มือป้องกันอาชญากรรม",
    guideDesc: "แนะนำกฎหมายพื้นฐานและวิธีป้องกันอาชญากรรมในเกาหลี",
    guideUrl: "https://leaflet.e2web.co.kr/view.php?lang=thailand",

    // ✅ Drug guide (PDF: dedu-th.pdf)
    drugLabel: "คู่มือป้องกันยาเสพติดสำหรับชาวต่างชาติ",
    drugDesc: "แนวทางป้องกันยาเสพติดที่ชาวต่างชาติพำนักในเกาหลีควรรู้.",
    drugUrl: PDF_BASE + "dedu-th.pdf",

    // ✅ PDF (traffic 없음)
    rightsLabel: "คู่มือคุ้มครองสิทธิ",
    rightsDesc: "เอกสารคุ้มครองสิทธิหลายภาษา",
    rightsUrl: PDF_BASE + "rights-th.pdf",

    safetyLabel: "กฎความปลอดภัย",
    safetyDesc: "เอกสารกฎความปลอดภัย",
    safetyUrl: PDF_BASE + "safety-th.pdf",

    lawLabel: "ข้อมูลกฎหมายชีวิตประจำวัน",
    lawDesc: "ค้นหาข้อมูลกฎหมายชีวิตประจำวัน",
    lawUrl: "https://m.easylaw.go.kr/MOM/Main.laf",

    googleLabel: "Google แปลภาษา",
    googleDesc: "รองรับการแปลภาษา",
    googleUrl: "https://translate.google.co.kr/?sl=auto&tl=ko&op=translate",

    img: "img/lang-th.png",
  },

  mn: {
    code: "mn",
    flag: "🇲🇳",
    name: "Монгол хэл (Mongolian)",

    headerTitle: "Функцээ сонгоно уу",
    headerSub: "Сонгосон хэлээр үйлчилгээ авах боломжтой.",

    helpIcon: "👮‍♂️",

    helpLabel: "Цагдаад хандахад туслах",
    helpDesc: "Цагдаатай харилцахад тань дэмжлэг үзүүлнэ.",
    helpUrl: "https://koreapolkim.github.io/police_/help.html",

    guideLabel: "Гэмт хэргээс урьдчилан сэргийлэх гарын авлага",
    guideDesc: "Солонгост баримтлах ёстой үндсэн хууль, гэмт хэргээс урьдчилан сэргийлэх аргыг танилцуулна.",
    guideUrl: "https://leaflet.e2web.co.kr/view.php?lang=mongolia",

    // ✅ Drug guide
    drugLabel: "Гадаад иргэдийн мансууруулах бодисын урьдчилан сэргийлэх гарын авлага",
    drugDesc: "Солонгост оршин суугаа гадаад иргэд мэдэх ёстой мансуурахаас сэргийлэх арга хэмжээ.",
    drugUrl: PDF_BASE + "dedu-mn.pdf",

    // ✅ PDF (traffic 없음)
    rightsLabel: "Эрхийн хамгааллын гарын авлага",
    rightsDesc: "Олон хэлний эрх хамгааллын материал.",
    rightsUrl: PDF_BASE + "rights-mn.pdf",

    safetyLabel: "Аюулгүй ажиллагааны дүрэм",
    safetyDesc: "Аюулгүй ажиллагааны материал.",
    safetyUrl: PDF_BASE + "safety-mn.pdf",

    lawLabel: "Амьдралын хууль эрх зүй",
    lawDesc: "Амьдралын хууль эрх зүйн мэдээлэл хайх",
    lawUrl: "https://m.easylaw.go.kr/MOM/Main.laf",

    googleLabel: "Google Орчуулагч",
    googleDesc: "Хэлний орчуулгыг дэмжинэ.",
    googleUrl: "https://translate.google.co.kr/?sl=auto&tl=ko&op=translate",

    img: "img/lang-mn.png",
  },

  ru: {
    code: "ru",
    flag: "🇷🇺",
    name: "русский (Russian)",

    headerTitle: "Выберите функцию",
    headerSub: "Вы можете пользоваться сервисом на выбранном языке.",

    helpIcon: "👮‍♂️",

    helpLabel: "Помощь при обращении в полицию",
    helpDesc: "Помогает вам общаться с полицией.",
    helpUrl: "https://koreapolkim.github.io/police_/help.html",

    guideLabel: "Памятка по предотвращению преступлений",
    guideDesc: "Рассказывает об основных законах и мерах по предотвращению преступлений в Корее.",
    guideUrl: "https://leaflet.e2web.co.kr/view.php?lang=russia",

    // ✅ Drug guide
    drugLabel: "Памятка по предотвращению наркомании для иностранцев",
    drugDesc: "Меры по предотвращению наркомании, которые должны знать иностранцы, проживающие в Корее.",
    drugUrl: PDF_BASE + "dedu-ru.pdf",

    // ✅ PDF (traffic 없음)
    rightsLabel: "Памятка по защите прав",
    rightsDesc: "Многоязычные материалы по защите прав.",
    rightsUrl: PDF_BASE + "rights-ru.pdf",

    safetyLabel: "Правила безопасности",
    safetyDesc: "Материалы по правилам безопасности.",
    safetyUrl: PDF_BASE + "safety-ru.pdf",

    lawLabel: "Практическая правовая информация",
    lawDesc: "Поиск практической правовой информации.",
    lawUrl: "https://m.easylaw.go.kr/MOM/Main.laf",

    googleLabel: "Google Переводчик",
    googleDesc: "Поддерживает перевод языков.",
    googleUrl: "https://translate.google.co.kr/?sl=auto&tl=ko&op=translate",

    img: "img/lang-ru.png",
  },

  id: {
    code: "id",
    flag: "🇮🇩",
    name: "Bahasa Indonesia",

    headerTitle: "Pilih fungsi",
    headerSub: "Gunakan layanan dalam bahasa yang Anda pilih.",

    helpIcon: "👮‍♂️",

    helpLabel: "Bantuan laporan & konsultasi polisi",
    helpDesc: "Mendukung komunikasi Anda dengan polisi.",
    helpUrl: "https://koreapolkim.github.io/police_/help.html",

    guideLabel: "Panduan pencegahan kejahatan",
    guideDesc: "Memberikan informasi tentang hukum dasar dan cara pencegahan kejahatan di Korea.",
    guideUrl: "https://leaflet.e2web.co.kr/view.php?lang=indonesia",

    // ✅ PDF (traffic 없음)
    rightsLabel: "Panduan perlindungan hak",
    rightsDesc: "Materi perlindungan hak multibahasa.",
    rightsUrl: PDF_BASE + "rights-id.pdf",

    safetyLabel: "Aturan keselamatan",
    safetyDesc: "Materi aturan keselamatan.",
    safetyUrl: PDF_BASE + "safety-id.pdf",

    lawLabel: "Info hukum praktis",
    lawDesc: "Cari informasi hukum praktis.",
    lawUrl: "https://m.easylaw.go.kr/MOM/Main.laf",

    googleLabel: "Google Terjemahan",
    googleDesc: "Mendukung penerjemahan bahasa.",
    googleUrl: "https://translate.google.co.kr/?sl=auto&tl=ko&op=translate",

    img: "img/lang-id.png",
  },

  ja: {
    code: "ja",
    flag: "🇯🇵",
    name: "日本語 (Japanese)",

    headerTitle: "機能を選択してください",
    headerSub: "選択した言語でサービスを利用できます。",

    helpIcon: "👮‍♂️",

    helpLabel: "警察への相談・通報サポート",
    helpDesc: "警察との円滑なコミュニケーションを支援します。",
    helpUrl: "https://koreapolkim.github.io/police_/help.html",

    guideLabel: "犯罪予防ガイド",
    guideDesc: "韓国で守るべき基本的な法律と犯罪予防方法を案内します。",
    guideUrl: "https://leaflet.e2web.co.kr/view.php?lang=japan",

    // (현재 일본어용 traffic/safety/rights/drug PDF는 없음)

    lawLabel: "生活法令情報",
    lawDesc: "生活法令情報を検索できます。",
    lawUrl: "https://m.easylaw.go.kr/MOM/Main.laf",

    googleLabel: "Google翻訳",
    googleDesc: "言語の翻訳をサポートします。",
    googleUrl: "https://translate.google.co.kr/?sl=auto&tl=ko&op=translate",

    img: "img/lang-ja.png",
  },

  km: {
    code: "km",
    flag: "🇰🇭",
    name: "ភាសាខ្មែរ (Khmer)",

    headerTitle: "សូមជ្រើសមុខងារ",
    headerSub: "អ្នកអាចប្រើសេវាកម្មជាភាសាដែលបានជ្រើស។",

    helpIcon: "👮‍♂️",

    helpLabel: "ជំនួយក្នុងការទាក់ទងប៉ូលីស",
    helpDesc: "ជួយឱ្យអ្នកទាក់ទងជាមួយប៉ូលីសបានល្អ។",
    helpUrl: "https://koreapolkim.github.io/police_/help.html",

    guideLabel: "មគ្គុទ្ទេសក៍ការការពារឧក្រិដ្ឋកម្ម",
    guideDesc: "បង្ហាញពីច្បាប់មូលដ្ឋាន និងវិធីការពារព្រហ្មទណ្ឌនៅកូរ៉េ។",
    guideUrl: "https://leaflet.e2web.co.kr/view.php?lang=khmer",

    // ✅ PDF (traffic 없음)
    rightsLabel: "សេចក្តីណែនាំការពារសិទ្ធិ",
    rightsDesc: "ឯកសារការពារសិទ្ធិពហុភាសា។",
    rightsUrl: PDF_BASE + "rights-km.pdf",

    safetyLabel: "វិഥានសុវត្ថិភាព",
    safetyDesc: "ឯកសារវិធានសុវត្ថិភាព។",
    safetyUrl: PDF_BASE + "safety-km.pdf",

    lawLabel: "ព័ត៌មានច្បាប់ជាក់ស្តែង",
    lawDesc: "ស្វែងរកព័ត៌មានច្បាប់ប្រចាំថ្ងៃ។",
    lawUrl: "https://m.easylaw.go.kr/MOM/Main.laf",

    googleLabel: "Google Translate",
    googleDesc: "គាំទ្រការបកប្រែភាសា។",
    googleUrl: "https://translate.google.co.kr/?sl=auto&tl=ko&op=translate",

    img: "img/lang-km.png",
  },

  tl: {
    code: "tl",
    flag: "🇵🇭",
    name: "Tagalog (Filipino)",

    headerTitle: "Pumili ng function",
    headerSub: "Gamitin ang serbisyo sa napiling wika.",

    helpIcon: "👮‍♂️",

    helpLabel: "Tulong sa pag-report at pag-konsulta sa pulis",
    helpDesc: "Tumutulong upang makipag-ugnayan sa pulis.",
    helpUrl: "https://koreapolkim.github.io/police_/help.html",

    guideLabel: "Gabay sa pag-iwas sa krimen",
    guideDesc: "Nagbibigay ng gabay sa mga pangunahing batas at pag-iwas sa krimen sa Korea.",
    guideUrl: "https://leaflet.e2web.co.kr/view.php?lang=tagalog",

    // ✅ PDF (rights만 존재)
    rightsLabel: "Gabay sa proteksyon ng karapatan",
    rightsDesc: "Multilingual rights guide para sa mga dayuhan.",
    rightsUrl: PDF_BASE + "rights-tl.pdf",

    lawLabel: "Practical Law Info",
    lawDesc: "Search practical law information.",
    lawUrl: "https://m.easylaw.go.kr/MOM/Main.laf",

    googleLabel: "Google Translate",
    googleDesc: "Sinusuportahan ang pagsasalin ng wika.",
    googleUrl: "https://translate.google.co.kr/?sl=auto&tl=ko&op=translate",

    img: "img/lang-tl.png",
  },

  ar: {
    code: "ar",
    flag: "🇸🇦",
    name: "العربية (Arabic)",

    headerTitle: "الرجاء الإختيار",
    headerSub: "يمكنك استخدام الخدمة باللغة التي اخترتها.",

    helpIcon: "👮‍♂️",

    helpLabel: "مساعدة في التواصل مع الشرطة",
    helpDesc: "تساعدك على التواصل مع الشرطة.",
    helpUrl: "https://koreapolkim.github.io/police_/help.html",

    guideLabel: "دليل الوقاية من الجريمة",
    guideDesc: "توضح القوانين الأساسية وطرق الوقاية من الجريمة في كوريا.",
    guideUrl: "https://leaflet.e2web.co.kr/view.php?lang=arab",

    // (아랍어용 traffic/safety/rights/drug PDF는 현재 없음)

    lawLabel: "معلومات القوانين العملية",
    lawDesc: "ابحث عن معلومات القوانين العملية.",
    lawUrl: "https://m.easylaw.go.kr/MOM/Main.laf",

    googleLabel: "ترجمة Google",
    googleDesc: "تدعم ترجمة اللغات.",
    googleUrl: "https://translate.google.co.kr/?sl=auto&tl=ko&op=translate",

    img: "img/lang-ar.png",
  },
};

// ✅ 공통 유틸: URL 파라미터에서 lang 코드 가져오기
function getSelectedLangCode() {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang");
  if (lang && LANG_CONFIG[lang]) return lang;
  return "ko";
}

// ✅ index.html에서 순서대로 언어 리스트를 쓰고 싶을 때 사용
function getOrderedLangList() {
  return LANG_ORDER
    .filter(code => LANG_CONFIG[code])
    .map(code => LANG_CONFIG[code]);
}
