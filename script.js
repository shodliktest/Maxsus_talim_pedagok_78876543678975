// ===== PAROL TIZIMI =====
const AUTH_KEY = 'mahsusua_authenticated';
const VALID_CREDENTIALS = {
    username: 'Inavatsiya2025',
    password: 'test1221'
};

// ===== YANGI: SAVOLLAR TARIXINI SAQLASH KALITI =====
const QUESTION_POOL_KEY = 'quiz_remaining_indices';

// ===== TEST SAVOLLARI (BU YERGA 450 TA SAVOLINGIZNI TASHLAISZ) =====
const questionsData = [
  {
    question: "Maxsus pedagogika fani qanday fan ?",
    options: [
      "jismoniy va ruxiy rivojlanishda nuqsoni bo’lgan bolalar ta’lim tarbiyasi bilan shug’ullanadigan fan",
      "Ko’rishida nuqsoni bo’lgan bolalar bilan shug’ullanadigan fan",
      "Nutqida nuqsoni bo’lgan bolalar bilan shug’ullanadigan fan",
      "Eshitishida nuqsoni bo’lgan bolalar bilan shug’ullanadigan fan"
    ],
    correctAnswer: "jismoniy va ruxiy rivojlanishda nuqsoni bo’lgan bolalar ta’lim tarbiyasi bilan shug’ullanadigan fan"
  },
  {
    question: "Fanning asosiy vazifalari nimalardan iborat deb o’ylaysiz ?",
    options: [
      "Bolaning ta’lim tarbiyasi uchun zarur shart-sharoitni yaratish",
      "Rivojlantirish diagnostikasi, tashxis qo’yishdan",
      "Maxsus yordamga muxtoj bolalarning ijtimoiy adabtatsiya, reabilitatsiya, kompensatsiyasini amalga oshirishdan",
      "Maxsus muassasalarga bolalarni saralashdan"
    ],
    correctAnswer: "Maxsus yordamga muxtoj bolalarning ijtimoiy adabtatsiya, reabilitatsiya, kompensatsiyasini amalga oshirishdan"
  },
  {
    question: "Maxsus pedagogika fanining qaysi yo’nalishlari mustaqil tarmoq sifatida ajralib chiqgan ?",
    options: [
      "Oligofrenopedagogika, oftalmologiya, dermotologiya, logopediya",
      "Tiflopedagogika, ottorinoloringologiya, rinoplastika, surdologiya",
      "Surdopedagogika, stomatologiya, fiziologiya, patologiya",
      "Logopediya, Surdopedagogika, Tiflopedagogika, Oligofrenopedagogika"
    ],
    correctAnswer: "Logopediya, Surdopedagogika, Tiflopedagogika, Oligofrenopedagogika"
  },
  {
    question: "Eshitishida nuqson bo’lgan bolalar keltirilgan qatorni ko’rsating ?",
    options: [
      "Karlik, orttirilgan karlik, zaif eshituvchi, orttirilgan zaif eshituvchi",
      "Kech kar bo’lib qolgan bolalar, zaif eshituvchilar",
      "Zaif eshituvchi, kar bolalar",
      "Kar, tangquloqlik"
    ],
    correctAnswer: "Karlik, orttirilgan karlik, zaif eshituvchi, orttirilgan zaif eshituvchi"
  },
  {
    question: "Korreksiya bu……?",
    options: [
      "Rivojlanishda nuqsoni bor bolalarni o’qitish",
      "Nuqsonlarni tuzatish, to’g’rilash",
      "Ta’lim-tarbiya olishning o’ziga xos tomonlari",
      "Bir analizator faoliyatini ikkinchisiga yuklatish"
    ],
    correctAnswer: "Nuqsonlarni tuzatish, to’g’rilash"
  },
  {
    question: "Kompensatsiya bu…?",
    options: [
      "bolalarni ijtimoiy adaptatsiyasini amalga oshirish",
      "bir analizator faoliyatini ikkinchisiga yuklatishdir",
      "bir analizator faoliyatini ikkinchisi bajarishi yoki to’ldirishi",
      "nuqsonlarni tuzatish bartaraf etish tushiniladi"
    ],
    correctAnswer: "bir analizator faoliyatini ikkinchisi bajarishi yoki to’ldirishi"
  },
  {
    question: "Nuqsonlarni tuzatish, to’g’rilash nima deb ataladi?",
    options: ["Kompensatsiya", "Korreksiya", "Adaptatsiya", "Oligofreniya"],
    correctAnswer: "Korreksiya"
  },
  {
    question: "Yordanga muxtoj bolani ijtimoiy hayotga ko’niktirish jarayoni - …",
    options: ["Ablitatsiya", "Reproduksiya", "Adaptatsiya", "Inklyuziya"],
    correctAnswer: "Adaptatsiya"
  },
  {
    question: "Maxsus yordanga muxtoj bolalarni kasbga yo’llashda nimalarga e’tibor qaratishimiz kerak?",
    options: [
      "xalq xo’jaligining eng muhim tarmoqlari bilan tanishtirishga",
      "daromadli kasblardan birini tanlashga",
      "hunarmandchilikni tavsiya etishga",
      "nuqsonlarni hisobga olgan holda kasblardan birini tanlashga"
    ],
    correctAnswer: "nuqsonlarni hisobga olgan holda kasblardan birini tanlashga"
  },
  {
    question: "Aqliy zaiflikning eng og’ir darajasi nima deb ataladi ?",
    options: ["Idiot", "Imbetsil", "Debil", "Demensiya"],
    correctAnswer: "Idiot"
  },
  {
    question: "Qaysi fan ko’rishida nuqsoni bo’lgan bolalar bilan shug’ullanadi ?",
    options: ["Surdopedagogika", "Tiflopedagogika", "Logopediya", "Oligofrenopedagogika"],
    correctAnswer: "Tiflopedagogika"
  },
  {
    question: "Nutqiy buzulishlar bolaning qanday rivojlanishiga ta'sir etadi ?",
    options: ["Aqliy", "Fiziologik", "Ruxiy", "Axloqiy"],
    correctAnswer: "Aqliy"
  },
  {
    question: "Defektologik faoliyat predmeti qanday fanlar bilan bog’liq deb o’ylaysiz?",
    options: [
      "anatomiya, fiziologiya, gigiyena, pedagogika, psixologiya, tibbiyot",
      "astronomiya, kimyo, biologiya, anatomiya, tibbiyot",
      "matematika, geometriya, tibbiyot, zoologiya, biologiya, tabobat",
      "anatomiya, psixologiya, tibbiyot, fiziologiya, gigiyena, matematika"
    ],
    correctAnswer: "anatomiya, fiziologiya, gigiyena, pedagogika, psixologiya, tibbiyot"
  },
  {
    question: "Nutq nuqsonlari bor bolalar bilan qaysi fan shug’ullanadi?",
    options: ["Logopediya", "Surdopedagogika", "Oligofrenopedagogika", "Tiflopedagogika"],
    correctAnswer: "Logopediya"
  },
  {
    question: "Logopediya - …",
    options: [
      "eshitish nuqsonlari bor bolalar shug’ullanadi",
      "Nutq nuqsonlari bor bolalar shug’ullanadi",
      "aqli zaif bolalar bilan shug’ullanadi",
      "mujassam nuqsonli bolalar bilan shug’ullanadi"
    ],
    correctAnswer: "Nutq nuqsonlari bor bolalar shug’ullanadi"
  },
  {
    question: "Ijtimoiy reabilitatsiyaga ta’rif bering?",
    options: [
      "rivojlanishida nuqsoni bo’lgan bolalarni jamiyatga moslashtirish jarayoni",
      "Nuqsonlarni kompensatsiyalash jarayoni",
      "nuqsonlarni tuzatish, korrektsiyalash jarayoni",
      "alohida ko’makka muhtoj kishilarni sog’ligini tiklash"
    ],
    correctAnswer: "rivojlanishida nuqsoni bo’lgan bolalarni jamiyatga moslashtirish jarayoni"
  },
  {
    question: "Mujassam nuqsonli bolalar deb qanday bolalarga aytiladi?",
    options: [
      "kech kar sog'ov",
      "kar zaif eshituvchi",
      "kar-ko’r-soqov, shol bolalar",
      "ruhiy rivojlanishi sust bolalar"
    ],
    correctAnswer: "kar-ko’r-soqov, shol bolalar"
  },
  {
    question: "O’zaro muloqot vositasi bo’lib, insonlarda bir-birlari bilan muloqot, fikr almashish vazifalarini bajarish bu -… deyiladi",
    options: ["Nutq", "Aloqa bog’lash", "Fikr yuritish", "Ta’lim berish"],
    correctAnswer: "Nutq"
  },
  {
    question: "Nutq rivojlanishi jarayonida qanday qobiliyatlar shakllanadi?",
    options: [
      "bilish faoliyatining oliy shakllari",
      "tushunarli tafakkur qobiliyatlari",
      "so’z boyligi",
      "kuchli xotira, sezgirlik"
    ],
    correctAnswer: "bilish faoliyatining oliy shakllari"
  },
  {
    question: "Ruxiy rivojlanishi sustlashgan bolalar asosan qayerda ta’lim olishi mumkin?",
    options: [
      "akademik litseylarda",
      "mehribonlik uylarida",
      "texnikumlarda",
      "maxsus guruh va sinflarda"
    ],
    correctAnswer: "maxsus guruh va sinflarda"
  },
  {
    question: "Qanday bolalar alohida ko’makka muxtoj bolalar deyiladi?",
    options: [
      "ruxiy va jismoniy kamchiligi bor bolalar",
      "kasallikga ko’p chalinuvchi bolalar",
      "talaffuzida kamchiligi bor bolalar",
      "immuniteti past bo’lgan bolalar"
    ],
    correctAnswer: "ruxiy va jismoniy kamchiligi bor bolalar"
  },
  {
    question: "Insonning oliy nerv faoliyatini o’rgangan buyuk olim qaysi?",
    options: ["Abu Rayhon Beruniy", "Abu Ali Ibn Sino", "Amur Temur", "Mirzo Ulug’bek"],
    correctAnswer: "Abu Ali Ibn Sino"
  },
  {
    question: "Surdopedagogika bu -…?",
    options: [
      "ko’zi ojiz bolalarni o’qitish va tarbiyalash",
      "nuqsonli bolalarni o’qitish va tarbiyalash",
      "aqli zaif bolalarni o’qitish va tarbiyalash",
      "eshtishida nuqsoni bo’lgan bolalarni o’qitish va tarbiyalash"
    ],
    correctAnswer: "eshtishida nuqsoni bo’lgan bolalarni o’qitish va tarbiyalash"
  },
  {
    question: "Aqliy zaiflikning kelib chiqish sabablariga ko’ra turlari qaysilar?",
    options: ["Hayoti davomida orttirilgan", "Tug’ma", "Passiv va aktiv", "Tug’ma va orttirilgan"],
    correctAnswer: "Tug’ma va orttirilgan"
  },
  {
    question: "Og’zaki nutq jarayonida artikulyatsion apparati a’zolari muskullarining tortilishi nima deyiladi?",
    options: ["Dizartriya", "Duduqlanish", "Alaliya", "Nutqning yo’qolishi"],
    correctAnswer: "Dizartriya"
  },
  {
    question: "„Autizm“ so’zining ma’nosi …….?",
    options: [
      "Grekcha „autos“— ya’ni o’zim",
      "Fransuzcha „autos“– ya’ni og’ir",
      "Lotincha „autos“– ya’ni sezgi",
      "Grekcha „autos“– ya’ni og’ir"
    ],
    correctAnswer: "Grekcha „autos“— ya’ni o’zim"
  },
  {
    question: "Izoterapiya nima?",
    options: [
      "Tasviriy san’at yordamida terapevtik ta’sir orqali rasm chizish, modellashtirish va test terapiyasi",
      "Test yordamida barmoq va qo’l harakatlarni o’rgatish orqali bolaga ta’sir o’tkazish usuli",
      "Ichki dunyosini ranglarda aks ettirishga va unga tashqi tomondan qarashga imkon beradigan usul",
      "Nutqidagi kamchiliklarini to’g’rilash va nutqini ravon qilish usuli"
    ],
    correctAnswer: "Ichki dunyosini ranglarda aks ettirishga va unga tashqi tomondan qarashga imkon beradigan usul"
  },
  {
    question: "Shaxsning o’zini atrof-olamdan olib qochishi hamda o’zining ichki dunyosida yashashi bu -…",
    options: ["Gumanizm", "Demensiya", "Autizm", "Depressiya"],
    correctAnswer: "Autizm"
  },
  {
    question: "Pedagog tushunchasi qanday ma’noni anglatadi deb o’ylaysiz?",
    options: ["Mohir tarbiyachi", "Bolani voyaga yetkazuvchi", "Mohir usta", "Bola yetaklovchi"],
    correctAnswer: "Bola yetaklovchi"
  },
  {
    question: "Nutq nima ?",
    options: [
      "Murakkab ruhiy faoliyat",
      "Eshituv analizatori",
      "Tovushida kamchilikning borligi",
      "Psixik jarayon"
    ],
    correctAnswer: "Murakkab ruhiy faoliyat"
  },
  {
    question: "Autizm kasalligining kelib chiqish sabablari nima ?",
    options: [
      "Bosh miyaning kuchli jarohatlanishi",
      "Bosh miyaning infeksion kasalliklari",
      "Genetik omil",
      "Oqsillarning yetishmasligi, organizmda qo’rg’oshin va simobning ko’payishi"
    ],
    correctAnswer: "Genetik omil"
  },
  {
    question: "Autizm so’zining ma’nosi ?",
    options: [
      "“Grekcha so’zdan olingan bo’lib o’zim” degan ma’noni anglatadi",
      "“Lotincha so’zdan olingan bo’lib atrof” degan ma’noni bildiradi",
      "“Fransuz tilidan olingan bo’lib yolg’iz” degan ma’noni bildiradi",
      "“Yunon tilidan olingan bo’lib g’aroyib” degan ma’noni bildiradi"
    ],
    correctAnswer: "“Grekcha so’zdan olingan bo’lib o’zim” degan ma’noni anglatadi"
  },
  {
    question: "Defektologiya qanday fan?",
    options: [
      "Nuqsonlarni o’rganuvchi fan",
      "Ko’z kasalliklarini o’rganuvchi fan",
      "Karlikni o’rganuvchi fan",
      "Nutq nuqsonlarini o’rganuvchi fan"
    ],
    correctAnswer: "Nuqsonlarni o’rganuvchi fan"
  },
  {
    question: "Oligofrenopedagogika fanining mavzu bahsini aniqlang.",
    options: [
      "Ko’rishida nuqsoni bor bolalar ta’lim-tarbiyasi va rivojlanishi",
      "Eshitishida nuqsoni bor bolalar ta’lim-tarbiyasi va rivojlanishi",
      "Nutqida nuqsoni bor bolalar ta’lim-tarbiyasi va rivojlanishi",
      "Aqlan nuqsonli bolalar ta’lim-tarbiyasi va rivojlanishi"
    ],
    correctAnswer: "Aqlan nuqsonli bolalar ta’lim-tarbiyasi va rivojlanishi"
  },
  {
    question: "Aqliy zaiflikning kelib chiqishiga ko’ra qanday sabablari mayjud?",
    options: ["Polimorf, monomorf", "Ijtimoiy, ekologik", "Sodda, murakkab", "Endogen, ekzogen"],
    correctAnswer: "Endogen, ekzogen"
  },
  {
    question: "Aqliy zaiflikni keltirib chiqaruvchi sabablarini aniqlang: 1. homila davridagi infeksiya va intoksikatsiyalar; 2. tug’ilish davridagi jarohat; 3. kuchli qo’rquv; 4. asfiksiya; 5. tungi qo’rquv, enurez",
    options: ["1,2,4", "1,2,4,5", "3,5", "1,2,3,4"],
    correctAnswer: "1,2,4"
  },
  {
    question: "Aqli zaif bolalar ta’limi, tarbiyasi hamda ular taraqqiyotidagi ruhiy, jismoniy nuqsonlarni to‘g‘rilash haqidagi fan qaysi?",
    options: ["Tiflopedagogika", "Logopediya", "Oligofrenopedagogika", "Surdopedagogika"],
    correctAnswer: "Oligofrenopedagogika"
  },
  {
    question: "Aqliy qoloqlikning asosiy belgilari berilmagan qatorni ko’rsating",
    options: [
      "aqliy qobiliyat saqlangan bo’lib, chuqur nutq kamchiliklari bo’lgan bolalar",
      "bosh miyada organik buzilishning mavjudligi",
      "bilish faoliyatlarining umumiy, chuqur buzilganligi",
      "bilish faoliyatlari buzilganligining turg‘un xarakterdaligi"
    ],
    correctAnswer: "aqliy qobiliyat saqlangan bo’lib, chuqur nutq kamchiliklari bo’lgan bolalar"
  },
  {
    question: "Aqliy qobiliyat saqlangan bo’lib, chuqur nutq kamchiliklari bo’lgan bolalar qanday nuqsonli bolalar hisoblanadi?",
    options: [
      "nutqida nuqsoni bo’lgan bolalar",
      "aqliy rivojlanishida nuqsoni bo’lgan bolalar",
      "ruhiy rivojlanishida kamchiligi bo’lgan bolalar",
      "bilish faoliyatlari buzilgan bolalar"
    ],
    correctAnswer: "nutqida nuqsoni bo’lgan bolalar"
  },
  {
    question: "Jismoniy yoki ruhiy rivojlanishida kamchiligi bo’lgan bolalarning rivojlanishidagi xususiyatlarini o’rganadigan, ularning ta’lim tarbiyasi bilan shug’ullanadigan fan nomini toping?",
    options: ["Maxsus psixologiya", "Surdopsixologiya", "Psixologiya", "Maxsus pedagogika"],
    correctAnswer: "Maxsus pedagogika"
  },
  {
    question: "Akseleratsiya nima?",
    options: [
      "bolalar va o’smirlarning somatik va fiziologik jihatdan tez yetilishi bo’lib, bu jarayon ularning qomat va tana og’irligini o’zgarishi jinsiy jihatdan erta yetilishlarida ko’rinadi",
      "insonning hayotida ro’y beradigan turli voqealarga moslashishga yordam beradigan xulq-atvori",
      "atrof muhit talablariga mos ravishda inson psixikasining stereotiplar dinamikasini qayta qurish xususiyatlari",
      "intellekt va faoliyat nuqsonlari hamda shaxs motivatsiyasi sohasidagi buzilishlar"
    ],
    correctAnswer: "bolalar va o’smirlarning somatik va fiziologik jihatdan tez yetilishi bo’lib, bu jarayon ularning qomat va tana og’irligini o’zgarishi jinsiy jihatdan erta yetilishlarida ko’rinadi"
  },
  {
    question: "Inklyuziv ta’lim bu nima?",
    options: [
      "Alohida yordamga muhtoj bolalarni alohidalash",
      "Alohida yordamga muhtoj va sog’lom bolalarni birgalikda o’qitish",
      "Sog’lom bolani alohidalash",
      "Bunday ta’lim turi mavjud emas"
    ],
    correctAnswer: "Alohida yordamga muhtoj va sog’lom bolalarni birgalikda o’qitish"
  },
  {
    question: "Homilaning ona qornidaligida, tug‘ilishda yoki ilk rivojlanish davrida markaziy nerv tizimining genetik buzilishlari, jarohatlar, asfiksiya, infeksiyalar, intoksikatsiyalar oqibatida tug’iladigan nuqsonli bola turini toping",
    options: [
      "aqliy zaif bolalar",
      "nutqida nuqsonli bolalar",
      "eshtishida nuqsonli bolalar",
      "ruhiy rivojlanishi sustlashgan bolalar"
    ],
    correctAnswer: "aqliy zaif bolalar"
  },
  {
    question: "Murakkab nuqson (defekt) bu",
    options: [
      "jismoniy kamchiliklar majmui",
      "psixik kamchiliklar majmui",
      "jismoniy yoki psixik kamchiliklar majmui",
      "og’ir nuqson"
    ],
    correctAnswer: "jismoniy yoki psixik kamchiliklar majmui"
  },
  {
    question: "Defektologiya so’zining ma’nosi nima?",
    options: [
      "Defectus – nuqson, kamchilik; logos – fan, ta’limot",
      "Defectus – buzilish; logos – ta’limot",
      "Defectus – birikish; logos – fan",
      "Defectus – birikish; logos – nutq"
    ],
    correctAnswer: "Defectus – nuqson, kamchilik; logos – fan, ta’limot"
  },
  {
    question: "Korreksiya nima?",
    options: ["Correct biriktirish", "Correctio tashhislash", "Correct moslashtirish", "Correctio tuzatish"],
    correctAnswer: "Correctio tuzatish"
  },
  {
    question: "Adaptatsiya so’zining ma’nosi?",
    options: ["Moslashish", "To’ldirish", "Tashxislash", "Tiklash"],
    correctAnswer: "Moslashish"
  },
  {
    question: "Psixik sust rivojlanganlikning eng keng tarqalgan shakli?",
    options: ["Samotogen", "Psixogen", "Konsustional", "Serebral"],
    correctAnswer: "Serebral"
  },
  {
    question: "Disgrafiya so’zining manosi?",
    options: [
      "dis – buzilish; grafo – yozaman",
      "dis – buzilish; graf – o’qiyman",
      "dis – buzilish; grafo – nutq",
      "dis – yozaman; grafo – buzilish"
    ],
    correctAnswer: "dis – buzilish; grafo – yozaman"
  },
  {
    question: "Nutq nuqsonlarida asosan qanday kamchiliklar ikkilamchi nuqson sifatida kuzatiladi?",
    options: [
      "Ruhiy rivojlanishning sustlashuvi va asoratli nuqsonlar",
      "Aqli zaiflik va ruhiy rivojlanishning sustlashuvi",
      "Sensor apparat nuqsonlari",
      "Tayanch-harakat apparatidagi buzilishlar"
    ],
    correctAnswer: "Ruhiy rivojlanishning sustlashuvi va asoratli nuqsonlar"
  },
  {
    question: "Dizartriya nima?",
    options: [
      "so’zlami to’la, ravon talaffuz qila olmaslik",
      "yozishda ko’plab hatolarga yo’l qo’yish",
      "ovoz buzilishi",
      "nutq apparatining buzilishi"
    ],
    correctAnswer: "so’zlami to’la, ravon talaffuz qila olmaslik"
  },
  {
    question: "Dizartrik buzilishlarning sababi ….",
    options: [
      "homiladorlik va rivojlanishning ilk bosqichlarida salbiy ta’sir etish oqibatida markaziy nerv sistemasining organik jarohatlanishi",
      "og‘iz va burun bo‘shlig‘ida jarohatlanishlar bo‘lishi yoki yumshoq tanglayni hayot davomida falajlanishi kabilar sabab bo‘lishi mumkin",
      "ovoz apparatida anatomik o‘zgarishlar yoki surunkali shamollash natijasida",
      "qon tomir tizimidagi bosh miya qon tomirlarining yorilishi natijasida yuz beruvchi anevrizm, tromboemboliya, revmatizm natijasida paydo bo’ladigan yurak paroklari, miya-qobiq jarohatlari natijasida"
    ],
    correctAnswer: "homiladorlik va rivojlanishning ilk bosqichlarida salbiy ta’sir etish oqibatida markaziy nerv sistemasining organik jarohatlanishi"
  },
  {
    question: "Ijtimoiy adaptatsiya bu -…",
    options: [
      "Anomal bolalarni o’qitish",
      "Anomaliyalarni tuzatish, korreksiyalash",
      "Anomal bolalarni jamiyatga moslashtirish",
      "Anomaliyani kompensatsiya qilish"
    ],
    correctAnswer: "Anomal bolalarni jamiyatga moslashtirish"
  },
  {
    question: "Ijtimoiy reabilitatsiya bu - …",
    options: [
      "Anomal kishilarni jamiyatga tiklash",
      "Anomal bolalarni jamiyatga moslashtirish",
      "Anomaliyani kompensatsiyalash",
      "Kasallik bilan kurashish"
    ],
    correctAnswer: "Anomal kishilarni jamiyatga tiklash"
  },
  {
    question: "Tovush talaffuzidagi kamchiliklari bu",
    options: [
      "alaliya, afaziya",
      "afoniya, disfoniya, fonasteniya",
      "dislaliya, rinolaliya, dizartriya",
      "disgrafiya, agrafiya, aleksiya, disgrafiya"
    ],
    correctAnswer: "dislaliya, rinolaliya, dizartriya"
  },
  {
    question: "Anomal bolalar tashxisini qaysi tashkilot amalga oshiradi?",
    options: [
      "Kasb-hunarga yo’naltiruvchi tashxis markazi",
      "Karlar jamiyati",
      "Tibbiy-pedagogik-psixologik komissiya",
      "Ko‘rlar jamiyati"
    ],
    correctAnswer: "Tibbiy-pedagogik-psixologik komissiya"
  },
  {
    question: "O'quvchilarni inklyuziv ta'lim sinflari va boshlang'ich tayanch korreksion sinflarga qabul qilish hamda chiqarish qanday tartibda amalga oshiriladi?",
    options: [
      "hududiy xalq ta'limi boshqarmasi huzurida tashkil etilgan Psixologik-tibbiy-pedagogik komissiya xulosasiga ko'ra, ota-onalar yoki ularning o'mini bosuvchi shaxslar roziligi bilan amalga oshiriladi",
      "ota-onalar yoki ularning o'mini bosuvchi shaxslar roziligi bilan amalga oshiriladi",
      "maktablardagi defektolog xulosasiga ko’ra",
      "sog’ligni saqlash boshqarmasi tomonidan"
    ],
    correctAnswer: "hududiy xalq ta'limi boshqarmasi huzurida tashkil etilgan Psixologik-tibbiy-pedagogik komissiya xulosasiga ko'ra, ota-onalar yoki ularning o'mini bosuvchi shaxslar roziligi bilan amalga oshiriladi"
  },
  {
    question: "Inklyuziv ta’lim sinflariga qanday nutqiy nuqsonga ega bo’lgan bolalar qabul qilinmaydi?",
    options: ["Rinolaliya", "Alaliya", "Aqliy zaiflik bilan birga rivojlangan dislaliya", "Dizartriya"],
    correctAnswer: "Aqliy zaiflik bilan birga rivojlangan dislaliya"
  },
  {
    question: "Inklyuziv ta’limda logopedning kasbiy faoliyatiga qanday vazifalar kirmaydi?",
    options: [
      "Tashxislash",
      "Tashkiliy metodik ishlar",
      "Umumta’lim fanlarini o’zlashtirishda yordam berish",
      "Profilaktik ishlar"
    ],
    correctAnswer: "Umumta’lim fanlarini o’zlashtirishda yordam berish"
  },
  {
    question: "Rivojlanishida mujassam nuqsonga ega bo’lgan bolalarning o‘quv-tarbiyaviy jarayonining asosiy qismi nimadan iborat?",
    options: [
      "aniq fanlarni o‘qitish",
      "ijtimoiy gumanitar fanlarni o‘qitish",
      "mehnat ta’limi",
      "tabiiy fanlarni o’qitish"
    ],
    correctAnswer: "mehnat ta’limi"
  },
  {
    question: "Mujassam nuqsonga ega bo’lgan bolalar bilan ishlash samaradorligi nimaga bog’liq?",
    options: [
      "pedagog-defektologlarning yuqori kasbiy mahoratiga bog’liq",
      "pedagog umumiy psixologiyaning barcha yo’nalishlarini yaxshi bilishi kerak",
      "tibbiy fanlarning muammolaridan yetarlicha habardor bo’lishi kerak",
      "bolalar bilan til topisha olishiga bog’liq"
    ],
    correctAnswer: "pedagog-defektologlarning yuqori kasbiy mahoratiga bog’liq"
  },
  {
    question: "Ko’rish va eshitish nuqsonlariga ega bo’lgan bolalarni o’qitishdagi muhim va murakkab vazifalardan biri ...",
    options: [
      "tayanch-harakat sistemasi bilan ishlash",
      "intellekti bilan ishlash",
      "yozma nutqi ustida ishlash",
      "ularda og’zaki nutqni shakllantirish, rivojlantirish"
    ],
    correctAnswer: "ularda og’zaki nutqni shakllantirish, rivojlantirish"
  },
  {
    question: "Nutq buzilishida nuqsonning keltirib chiqaruvchi sabablarga:",
    options: [
      "Homiladorlik vaqtida onaning turli yuqumli kasalliklar bilan og’rishi, homiladorlikdagi infeksiyalar",
      "Chala tug’ilish, endokrin kasalliklar, irsiylik",
      "Tug’ruq jarohatlari, asfiksiya",
      "homiladorlik vaqtida onaning yuqumli kasalliklar bilan og’rishi, homiladorlikdagi gipoksiya, tug’ruq jarohatlari, endokrin kasalliklar"
    ],
    correctAnswer: "homiladorlik vaqtida onaning yuqumli kasalliklar bilan og’rishi, homiladorlikdagi gipoksiya, tug’ruq jarohatlari, endokrin kasalliklar"
  },
  {
    question: "Bolaning psixik rivojlanishini belgilovchi muhim omillardan biri bu-…",
    options: [
      "Nuqsonning kelib chiqishi",
      "Ikkilamchi nuqsonning bo’lishi",
      "Nuqsonning namoyon bo’lish darajasi",
      "Uchlamchi nuqsonning bo’lishi"
    ],
    correctAnswer: "Ikkilamchi nuqsonning bo’lishi"
  },
  {
    question: "Nuqsonga ega bo’lgan bolalarning psixik rivojlanishi haqidagi qarashlar kim tomonidan tavsiflangan",
    options: ["L.S. Vigotskiy", "M.Y. Xvatsev", "G.P. Bertin", "M.S. Pevzner"],
    correctAnswer: "L.S. Vigotskiy"
  },
  {
    question: "Eshitishida nuqsoni bo‘lgan bolalarni yozma nutqqa o‘rgatish ishlari nimadan boshlanadi?",
    options: [
      "harflarni o‘rgatish",
      "bo‘g‘inlab o‘qishga o‘rgatish",
      "so‘zni butunligicha idrok etish",
      "tovush usuliga o’rgatish"
    ],
    correctAnswer: "so‘zni butunligicha idrok etish"
  },
  {
    question: "Og‘ir nutq nuqsonlariga ega bo‘lgan bolalar kategoriyasini aniqlang",
    options: [
      "alaliya, dizartriya, rinolaliya, afaziya, yorqin ifodalangan duduqlanishga ega bolalar",
      "RRS, FFNRligiga ega bolalar",
      "dislaliya, disgrafiya, alaliyeyya, RRSligiga ega bolalar",
      "disfagiya, alaliya, dizartriya, rinolaliyaga ega bolalar"
    ],
    correctAnswer: "alaliya, dizartriya, rinolaliya, afaziya, yorqin ifodalangan duduqlanishga ega bolalar"
  },
  {
    question: "Logopedik reabilitatsiyaning maqsadi",
    options: [
      "nutqiy jarayonni faollashtirish",
      "to‘g‘ri nutq mexanizmlarini shakllantirish",
      "nutqiy rivojlanishni stimullash",
      "bolani maktabga tayyorlash"
    ],
    correctAnswer: "to‘g‘ri nutq mexanizmlarini shakllantirish"
  },
  {
    question: "Aqli zaif bolalarga qanday turdagi nuqsonlar xos?",
    options: [
      "Tovushlar talaffuzidagi nuqsonlar",
      "Ko’rishda nuqsonning bo’lishi",
      "Eshitishida nuqsonning bo’lishi",
      "Hid bilishdagi kamchiliklar"
    ],
    correctAnswer: "Tovushlar talaffuzidagi nuqsonlar"
  },
  {
    question: "Insonning murakkab psixik faoliyati – bu …?",
    options: ["Ko’rish", "Eshitish", "Bilish", "Nutq"],
    correctAnswer: "Nutq"
  },
  {
    question: "Sensor nuqsonli bolalar toifalari bu...",
    options: [
      "Hid bilish va ta’m bilishda nuqsoni bo‘lgan bolalar toifalari",
      "Zaif eshituvchi va zaif ko‘ruvchi bolalar toifalari",
      "Ko‘rish va eshitishda nuqsoni bo‘lgan bolalar toifalari",
      "Issiq va sovuqni sezmaydigan bolalar toifalari"
    ],
    correctAnswer: "Ko‘rish va eshitishda nuqsoni bo‘lgan bolalar toifalari"
  },
  {
    question: "Nutq buzilishlarining tasnifi?",
    options: [
      "Organik, funksional",
      "Tibbiy-pedagogik, psixolog-pedagogik",
      "Tibbiy, ruhiy",
      "Markaziy, periferik"
    ],
    correctAnswer: "Organik, funksional"
  },
  {
    question: "Eshitishida muammolari bo’lgan bolalar quyidagi toifalarga bo’linadi:",
    options: [
      "Zaif eshituvchilar, nutqi saqlangan kar bolalar",
      "Karlar, zaif eshituvchilar, kech kar bo’lgan bolalar",
      "Erta kar bo’lganlar, zaif eshituvchilar",
      "Aqli zaif kar bolalar, zaif eshituvchilar"
    ],
    correctAnswer: "Karlar, zaif eshituvchilar, kech kar bo’lgan bolalar"
  },
  {
    question: "Aqliy rivojlanishida muammolari bo’lgan bolalar qanday toifalarga bo’linadilar?",
    options: ["Debil, imbetsil, idiot", "Dislaliya, rinolaliya, dizartriya", "Glaukoma, miopiya, katarakta", "Keratit, otit"],
    correctAnswer: "Debil, imbetsil, idiot"
  },
  {
    question: "Xromosoma kasalliklariga kiradigan kasallik turini aniqlang",
    options: ["Daun sindromi", "Revmatizm", "Gepatit", "Oligofreniya"],
    correctAnswer: "Daun sindromi"
  },
  {
    question: "Asimmetriya bu - …",
    options: ["Tekislik", "Bir xillik", "Nomutanosib qism, simmetriyani yo’qligi", "Yoriglik"],
    correctAnswer: "Nomutanosib qism, simmetriyani yo’qligi"
  },
  {
    question: "Maxsus psixologiyaning ob'ekti to'g'ri yozilgan qatorni toping.",
    options: [
      "o'sishida kamchiligi bo'lganlar",
      "rivojlanmayotgan bolalar",
      "rivojlanishida nuqsoni bo'lganlar",
      "sog’lom bolalar"
    ],
    correctAnswer: "rivojlanishida nuqsoni bo'lganlar"
  },
  {
    question: "Surdopsixologiya nimani o'rganadi?",
    options: [
      "eshitishida nuqsoni bo'lgan bolalarning psixologik xususiyatlarini",
      "ko'zi ojiz bolalarning psixologik xususiyatlarini",
      "aqli zaif bolalarning psixologik xususiyatlarini",
      "tayanch – harakat a'zolarida kamchiligi bo'lgan bolalarning psixologik xususiyatlarini"
    ],
    correctAnswer: "eshitishida nuqsoni bo'lgan bolalarning psixologik xususiyatlarini"
  },
  {
    question: "Tiflopsixologiya nimani o'rganadi?",
    options: [
      "aqli zaif bolalarning psixologik xususiyatlarini",
      "ko'zi ojiz bolalarning psixologik xususiyatlarini",
      "eshtishida nuqsoni bo'lgan bolalarning psixologik xususiyatlarini",
      "tayanch – harakat a'zolarida kamchiligi bo'lgan bolalarning psixologik xususiyatlarini"
    ],
    correctAnswer: "ko'zi ojiz bolalarning psixologik xususiyatlarini"
  },
  {
    question: "Oligofrenpsixologiya nimani o'rganadi?",
    options: [
      "aqli zaif bolalarning psixologik xususiyatlarini",
      "ko'zi ojiz bolalarning psixologik xususiyatlarini",
      "eshtishida nuqsoni bo'lgan bolalarning psixologik xususiyatlarini",
      "tayanch – harakat a'zolarida kamchiligi bo'lgan bolalarning psixologik xususiyatlarini"
    ],
    correctAnswer: "aqli zaif bolalarning psixologik xususiyatlarini"
  },
  {
    question: "Maxsus pedagogikaning tarmoqlari to'g'ri berilgan qatorni toping.",
    options: [
      "surdopedagogika, tiflopedagogika, maxsus pedagogika",
      "surdopedagogika, tiflopedagogika, oligofrenpedagogika, logopediya",
      "surdopedagogika, tiflopedagogika, oligofrenpedagogika",
      "oligofrenpedagogika, tiflopedagogika, maxsus pedagogika"
    ],
    correctAnswer: "surdopedagogika, tiflopedagogika, oligofrenpedagogika, logopediya"
  },
  {
    question: "Kompensatsiya nima?",
    options: ["O'rnini bosish", "Rivojlantirish", "Aniqlash", "Bartaraf qilish"],
    correctAnswer: "O'rnini bosish"
  },
  {
    question: "Ko'rishida muammolari bo'lgan bolalar toifalari qaysi qatorda keltirilgan?",
    options: [
      "Ko'zi ojiz va aqli zaif ko'rlar",
      "Ko'zida muammolari bo'lgan bolalar",
      "Zaif ko'ruvchi va ko'zi ojiz",
      "Ko'r-kar-soqovlar, zaif ko'ruvchi va ko'zi ojiz bolalar"
    ],
    correctAnswer: "Zaif ko'ruvchi va ko'zi ojiz"
  },
  {
    question: "Disgrafiya – qanday buzilishi turiga kiradi?",
    options: [
      "O'qish jarayonining buzilishi",
      "Tili chuchuklik",
      "Eshitish organlarining buzilishi",
      "Yozish jarayonining buzilishi"
    ],
    correctAnswer: "Yozish jarayonining buzilishi"
  },
  {
    question: "Surdopedagogika – qanday fan?",
    options: [
      "Eshitishda kamchiligi bo'lgan bolalarni o'qitish va tarbiyalash",
      "Aqli zaif bolalarni o'qitish",
      "Bosh miya tizimidagi ma'lum bir psixik jarayonlar bilan alogadorligini o'rganish",
      "Ko'rishida kamchiligi bo'lgan bolalarni o'qitish va tarbiyalash"
    ],
    correctAnswer: "Eshitishda kamchiligi bo'lgan bolalarni o'qitish va tarbiyalash"
  },
  {
    question: "Eshitishida nuqsoni bo'lgan bolalarning psixologik xususiyatlarini o'rganadigan “Maxsus psixologiya”ning bo'limi ...",
    options: ["Oligofrenpsixologiya", "Tiflopsixologiya", "Ontogenez psixologiyasi", "Surdopsixologiya"],
    correctAnswer: "Surdopsixologiya"
  },
  {
    question: "Ko'rishida kamchiligi bo'lgan bolalarning psixologik xususiyatlarini o'rganadigan “Maxsus psixologiya”ning bo'limi ...",
    options: ["Tiflopsixologiya", "Oligofrenpsixologiya", "Surdopsixologiya", "Ontogenez psixologiyasi"],
    correctAnswer: "Tiflopsixologiya"
  },
  {
    question: "Aqli zaif bo'lgan bolalarning psixologik xususiyatlarini o'rganadigan “Maxsus psixologiya”ning bo'limi ...",
    options: ["Tiflopsixologiya", "Surdopsixologiya", "Ontogenez psixologiyasi", "Oligofrenopsixologiya"],
    correctAnswer: "Oligofrenopsixologiya"
  },
  {
    question: "Rivojlanishida nuqsoni bo'lgan bolalarning psixologik xususiyatlarini o'rganuvchi psixologiyaning bo'limi...",
    options: ["maxsus psixologiya", "ontogenez psixologiyasi", "etnopsixologiya", "ijtimoiy psixologiya"],
    correctAnswer: "maxsus psixologiya"
  },
  {
    question: "Tarbiya metodlari qaysi javobda to'g'ri ko'rsatilgan?",
    options: [
      "Ijtimoiy ongni shakllantiruvchi, odatlantiruvchi va mashqlantiruvchi, rag'batlantiruvchi va jazolovchi",
      "Hikoya, ma'ruza, suhbat",
      "Pedagogik talab, mashqlantirish, rag'batlantiruvchi",
      "rag'batlantiruvchi"
    ],
    correctAnswer: "Ijtimoiy ongni shakllantiruvchi, odatlantiruvchi va mashqlantiruvchi, rag'batlantiruvchi va jazolovchi"
  },
  {
    question: "Adaptatsiya nima?",
    options: [
      "qo'zg'ovchi ta'siri ostida sezgilarning o'zgarishi",
      "kuchli qo'zg'ovchilar ta'siri ostida sezgilarning zaiflashishi",
      "atrof-muhit o’zgarishlariga organizm yoki shaxsning moslashishi",
      "yangi sharoitlarga ko'nikishni ta'minlovchi bilim, ko'nikma va malakalar"
    ],
    correctAnswer: "atrof-muhit o’zgarishlariga organizm yoki shaxsning moslashishi"
  },
  {
    question: "O'quv mashg'uloti jarayonida o'qituvchining suhbati ta'limning qaysi metodiga kiritiladi",
    options: ["Og'zaki", "Amaliy", "Ko'rgazmali", "Mashq qilish"],
    correctAnswer: "Og'zaki"
  },
  {
    question: "Inklyuziv ta’lim bu -……….",
    options: [
      "Rivojlanishida nuqsoni mayjud bo’lgan bolalarning sog’lom tengdoshlari bilan bir qatorda ta’lim olishi",
      "Rivojlanishida nuqsoni mayjud bo’lgan bolalarning ta’lim olishi uchun maxsus muassasalarda ta’lim jarayonini tashkil etish",
      "Rivojlanishida nuqsoni mayjud bo’lgan bolalarning uy ta’limiga jalb etish",
      "Rivojlanishida nuqsoni mayjud bo’lgan bolalarning tibbiyot punktlariga jalb etish"
    ],
    correctAnswer: "Rivojlanishida nuqsoni mayjud bo’lgan bolalarning sog’lom tengdoshlari bilan bir qatorda ta’lim olishi"
  },
  {
    question: "Inklyuziv so’zi ingliz tilidan olingan bo’lib inclusive, inclusion–.……… ma’nosini anglatadi.",
    options: ["O’rin almashmoq", "Uyg’unlashmoq", "Do’stlashmoq", "Imkoniyat bermoq"],
    correctAnswer: "Uyg’unlashmoq"
  },
  {
    question: "Inklyuziv ta’limning maqsadi nima?",
    options: [
      "o‘quvchilarning ta’limdagi tenglik huquqini kafolatlash",
      "nuqsonlarga etibor bermagan holda o’qitish",
      "Alohida yordamga muhtoj bolalarni ajratib olish",
      "o‘quvchilarning ta’limiga alohida e’tibor qaratish"
    ],
    correctAnswer: "o‘quvchilarning ta’limdagi tenglik huquqini kafolatlash"
  },
  {
    question: "Inklyuziv ta’limning obyekti ……….",
    options: ["Aqli nuqsonli bolalar", "Kar va zaif eshituvchi bolalar", "Sog’lom va nuqsonli bolalar", "Ko’r va zaif ko’ruvchi bolalar"],
    correctAnswer: "Sog’lom va nuqsonli bolalar"
  },
  {
    question: "Inklyuziv ta’limga aqliy rivojlanishda ortda qolgan bolalami qaysi darajasi jalb etiladi?",
    options: ["Yengil", "O’rta", "Og’ir", "Og’ir darajaning yengil formalari"],
    correctAnswer: "Og’ir darajaning yengil formalari"
  },
  {
    question: "Aqliy zaiflikning necha turi mavjud?",
    options: ["2 ta katta va kichik", "2 ta oddiy va murakkab", "4 ta yengil, o’rta, og’ir, chuqur", "3 ta yengil, o’rta, og’ir"],
    correctAnswer: "3 ta yengil, o’rta, og’ir"
  },
  {
    question: "Ko’rishda nuqsoni bo’lgan bolalar necha turga bo’linadi?",
    options: ["Ko’r va total ko’r", "G’ilaylik va ko’rlik", "Ko’r va zaif ko’ruvchi", "Zaif ko’ruvchi va g’ilaylik"],
    correctAnswer: "Ko’r va zaif ko’ruvchi"
  },
  {
    question: "Ko’rish qobiliyati to’lig rivojlanmagan bolalarning qaysi turi inklyuziv ta’limga jalb etiladi?",
    options: [
      "Barcha bolalar jalb etiladi",
      "Bunday nuqsonli bolalar ta’limga jalb etilmaydi",
      "Brayl alifbosida yoza oladigan va o’qish ko’nikmalari mayjud bolalar",
      "Eshitish qobilyati kuchli bolalar"
    ],
    correctAnswer: "Brayl alifbosida yoza oladigan va o’qish ko’nikmalari mayjud bolalar"
  },
  {
    question: "Eshitishda nuqsoni bo’lgan bolalar tengdoshlari bilan qanday mulotaga kirishadi?",
    options: ["Imo-ishora va labdan o’qish", "Imo-ishora", "Labdan o’qish", "Daktil alifbosi orqali"],
    correctAnswer: "Imo-ishora va labdan o’qish"
  },
  {
    question: "Zaif eshituvchi bolalar o’qtuvchiga qancha masofada o’tirishi zarur?",
    options: ["4 metr", "5 metr", "Masofaning ahamiyati yo’q", "3 metr"],
    correctAnswer: "3 metr"
  },
  {
    question: "Ta’lim muassasasidagi inklyuziv sinf xonasi qayerda joylashishi kerak?",
    options: [
      "maktabning tayanch va sokin tarafida",
      "maktabning asosiy binosida",
      "maktabning istalgan qismida",
      "maktabdan chiqish qismining oldida"
    ],
    correctAnswer: "maktabning tayanch va sokin tarafida"
  },
  {
    question: "Agar bolaning nutqida nuqsoni bo’lsa mulot uchun nimalardan foydalanadi?",
    options: [
      "Ishora orqali tushuntiradi",
      "Mulotning yozma shaklidan foydalanadi",
      "Bunday bolalar mulotga kirishi shart emas",
      "Shakllar, rasmlar va ramziy kartochkalar"
    ],
    correctAnswer: "Shakllar, rasmlar va ramziy kartochkalar"
  },
  {
    question: "Inklyuziv ta’lim jarayonida sinfda aqliy rivojlanishida ortda qolgan bola mayjud bo’lsa o’qtuvchi har bir dars davomida nimani o’tkizishi zarur?",
    options: ["Dam olish daqiqasi", "Jismoniy daqiqa", "Musiqiy daqiqa", "hech qanday faoliyat shart emas"],
    correctAnswer: "Jismoniy daqiqa"
  },
  {
    question: "Aqliy rivojlanishda ortda qolgan o’quvchilarga topshiriqlar qanday beriladi?",
    options: [
      "Qismlarga ajratilib",
      "Topshiriq berilmaydi",
      "Yaxlit holatda",
      "Barcha o’quvchilarga bir xil topshiriq beriladi"
    ],
    correctAnswer: "Qismlarga ajratilib"
  },
  {
    question: "Nutqida nuqsoni bo’lgan bolalarga inklyuziv ta’lim o’qtuvchisi bilan birgalikda yana qanday mutaxassis mashg’ulot o’tishi zarur?",
    options: ["Surdopedagog", "Tiflopedagog", "Oligofrenopedagog", "Logoped"],
    correctAnswer: "Logoped"
  },
  {
    question: "Kar –soqov bolalarning nechchi foizida bu nuqson tug’ma bo’ladi?",
    options: ["25-30%", "25-35%", "30-40%", "20-30%"],
    correctAnswer: "25-30%"
  },
  {
    question: "Ko’zi ojiz bolalar bilan ishlaydigan mutaxassis nomi ko’rsating?",
    options: ["Surdopedagog", "Logoped", "Tiflopedagog", "Oligofrenopedagog"],
    correctAnswer: "Tiflopedagog"
  },
  {
    question: "Kar va soqov bolalar bilan ishlaydigan mutaxassis nomini ko’rsating?",
    options: ["Surdopedagog", "Tiflopedagog", "Logoped", "Oligofrenopedagog"],
    correctAnswer: "Surdopedagog"
  },
  {
    question: "Nutqida nuqsoni bo’lgan bolalar bilan faoliyat olib boruvchi mutaxasis nomini ko’rsating?",
    options: ["Logoped", "Surdopedagog", "Tiflopedagog", "Oligofrenopedagog"],
    correctAnswer: "Logoped"
  },
  {
    question: "Aqliy rivojlanishida nuqsoni bo’lgan bolalar bilan faoliyat olib boruvchi mutaxassisni ko’rsating?",
    options: ["Logoped", "Surdopedagog", "Tiflopedagog", "Oligofrenopedagog"],
    correctAnswer: "Oligofrenopedagog"
  },
  {
    question: "Adaptatsiya –",
    options: ["Moslashish", "O’rnini to’ldirmoq", "Yumshatish", "O’xshatish"],
    correctAnswer: "Moslashish"
  },
  {
    question: "Kompensatsiya –",
    options: ["Yumshatish", "Moslashish", "O’rnini to’ldirmoq", "O’xshatish"],
    correctAnswer: "O’rnini to’ldirmoq"
  },
  {
    question: "Korreksiya –",
    options: ["Yumshatish", "Moslashish", "O’xshatish", "O’rnini to’ldirmoq"],
    correctAnswer: "O’xshatish"
  },
  {
    question: "Inklyuziv ta’lim amalga oshirayotgan umumta’lim maktabidagi sinflarda integratsiya qilingan o’quvchilar soni necha nafardan oshirilmaydi?",
    options: ["1-3 nafar", "2-3 nafar", "3-4 nafar", "4-5 nafar"],
    correctAnswer: "2-3 nafar"
  },
  {
    question: "Inklyuziv ta’lim amalga oshirayotgan umumta’lim maktabidagi sinflarda o’quvchilar soni necha nafardan oshirilmaydi?",
    options: ["25 nafar", "26 nafar", "30 nafar", "27 nafar"],
    correctAnswer: "25 nafar"
  },
  {
    question: "Nutqiy aloqa asosan nima orqali amalga oshiriladi?",
    options: ["Lab", "Idrok", "Xotira", "Til"],
    correctAnswer: "Til"
  },
  {
    question: "Odam nutqi tushunarli va ma’noli bo’lishi uchun nutq a’zolarining harakatlari qanday bo’lishi kerak?",
    options: ["aniq va to’g’ri", "sof adabiy", "badiiy", "grammatik"],
    correctAnswer: "aniq va to’g’ri"
  },
  {
    question: "Debil bolalar uchun bir qator ………………yetishmasligi xarakterlidir.",
    options: ["jismoniy faoliyat", "ijtimoiy faoliyat", "jinsiy faoliyat", "fahm – farosat"],
    correctAnswer: "fahm – farosat"
  },
  {
    question: "Sharqning mashxur allomalari …………………………. tarbiyaning maqsadlari har bir bola shaxsining rivojlanishiga ta’limning ta’siri to‘g‘risidagi qarashlari inklyuziv ta’lim rivojlanishining metodologik bazasi hisoblanadi.",
    options: [
      "Ibn Sino, Imom Buxoriy, Abu Nasr Farobiy, Alisher Navoiy, Abdulla Avloniylarning",
      "Ibn Sino, Imom Buxoriy, Abu Nasr Farobiy, Alisher Navoiy, Ushiniskiylarning",
      "Ibn Sino, Imom Buxoriy, Abu Nasr Farobiy, Alisher Navoiy, Xudoyberdi To’xtaboyevlarning",
      "Ibn Sino, Imom Buxoriy, Abu Nasr Farobiy, Alisher Navoiy, Mashrablarning"
    ],
    correctAnswer: "Ibn Sino, Imom Buxoriy, Abu Nasr Farobiy, Alisher Navoiy, Abdulla Avloniylarning"
  },
  {
    question: "…………………. - umumta’lim jarayonini rivojlantiriadi va barcha bolalarga mos bo‘lgan ta’limni joriy qiladi.",
    options: ["Maxsus ta’lim", "Inklyuziv ta’lim", "O’rta ta’lim", "Maktabgacha ta’lim"],
    correctAnswer: "Inklyuziv ta’lim"
  },
  {
    question: "Brayl alifbosidan qanday bolalar foydalanadi?",
    options: [
      "Ko’zi ojiz bolalar",
      "Nutqida nuqsoni bolgan bolalar",
      "Aqliy rivojlanishdan ortda qolgan bolalar",
      "Kar va zaif eshituvchi bolalar"
    ],
    correctAnswer: "Ko’zi ojiz bolalar"
  },
  {
    question: "Daktil alifbosidan qanday bolalar foydalanadi?",
    options: [
      "Ko’zi ojiz bolalar",
      "Nutqida nuqsoni bolgan bolalar",
      "Kar va zaif eshituvchi bolalar",
      "Aqliy rivojlanishdan ortda qolgan bolalar"
    ],
    correctAnswer: "Kar va zaif eshituvchi bolalar"
  },
  {
    question: "Inklyuziv ta’limning asosiy maqsadi nimada?",
    options: [
      "o‘quvchilarning ta’limdagi yangiliklarni o’rgatish",
      "o‘quvchilarning ta’limdagi tenglik huquqini kafolatlash",
      "o‘quvchilarning ta’limdagi metodlarni qo’llash",
      "o‘quvchilarning jismoniy tengligini ta’minlash"
    ],
    correctAnswer: "o‘quvchilarning ta’limdagi tenglik huquqini kafolatlash"
  },
  {
    question: "O‘quvchilarning ta’limdagi tenglik huquqini kafolatlashga qaratilgan ta’lim turi…",
    options: ["Maxsus ta’lim", "Inklyuziv ta’lim", "O’rta ta’lim", "Maktabgacha ta’lim"],
    correctAnswer: "Inklyuziv ta’lim"
  },
  {
    question: "Inklyuziv ta’limda zaif eshituvchi o’quvchi bo’lgan sinf o’qtuvchisi qanday dars o’tishi lozim?",
    options: [
      "Alohida talablar mavjud emas",
      "Baqirib dars o’tishi kerak",
      "Umumiy va mayda motorikasiga ko’proq e’tibor beradi",
      "Sinf doskasiga yozilgan ma’lumotlarni baland ovozda o’qishi kerak"
    ],
    correctAnswer: "Umumiy va mayda motorikasiga ko’proq e’tibor beradi"
  },
  {
    question: "Ko‘rishida nuqsoni bo‘lgan bola ma’lumotlarni ……… sezgilari asosida egalaydilar.",
    options: ["eshitish va daktil", "eshitish orqali", "taktil sezish orqali", "suyak eshituv"],
    correctAnswer: "taktil sezish orqali"
  },
  {
    question: "Zaif eshituvchisi bor bo’lgan inklyuziv sinfda o’qtuvchi aniq talaffuz va baland ovozda lekin ………. gapirishi talab etiladi.",
    options: ["Baqirib", "Baqirmasdan", "Past ovozda", "Pichirlab"],
    correctAnswer: "Baqirmasdan"
  },
  {
    question: "Inklyuziv ta’limda o’qtuvchi qanday metodlardan maksimal foydalanishi zarur?",
    options: ["O’yin", "Kuzatish", "Suhbat", "Qiyosiy"],
    correctAnswer: "O’yin"
  },
  {
    question: "Nutq –………………",
    options: ["oddiy faoliyat", "korreksion faoliyat", "kompensatsion faoliyat", "murakkab faoliyatdir"],
    correctAnswer: "murakkab faoliyatdir"
  },
  {
    question: "Og’zaki nutqning shakllanishida nimalar ishtirok etadi?",
    options: [
      "eshituv analizatori, nutqni harakatga keltiruvchi analizator ishtirok etadi",
      "nutqni harakatga keltiruvchi analizator ishtirok etadi",
      "eshituv analizatori ishtirok etadi",
      "eshituv analizatori, harakat-tayanch analizatorlari, nutqni harakatga keltiruvchi analizator ishtirok etadi"
    ],
    correctAnswer: "eshituv analizatori, harakat-tayanch analizatorlari, nutqni harakatga keltiruvchi analizator ishtirok etadi"
  },
  {
    question: "Tug’ma yoki hali tili chiqmagan go’daklik davridan ikkala quloqning mutlaqo eshitmasligi …………… olib keladi.",
    options: ["ko’rlikka", "aqli zaiflikka", "kar-soqovlikka", "serebral falajlikka"],
    correctAnswer: "kar-soqovlikka"
  },
  {
    question: "Nutqi rivojlanib, shakllanib olgandan so’ng yaxshi eshitmaydigan bo’lib qolgan bolalar qanday guruhga kiradi?",
    options: ["Tug’ma kar bolalar", "Irsiy kasal bolalar", "Rinolalik bolalar", "kech kar bo’lgan bolalar"],
    correctAnswer: "kech kar bo’lgan bolalar"
  },
  {
    question: "Ruhiy rivojlanishi sustlashgan bolalarga xos bo’lmagan xususiyatlarni aniqlang",
    options: [
      "bunday bolalar eshitishida va ko’rishida nuqsoni bo’lgan bolalardir",
      "bunday bolalarning so’z-mantiq tafakkuri yetarli rivojlanmagan bo’ladi",
      "bunday bolalar nutqi normal bolalarga nisbatan rivojlanish, shakllanish nuqtai nazaridan birmuncha orqada qoladi",
      "bunday bolalarda tashqi olam haqidagi tasavvur va bilimlarning yetarli bo’lmasligi bilan xarakterlidir"
    ],
    correctAnswer: "bunday bolalar eshitishida va ko’rishida nuqsoni bo’lgan bolalardir"
  },
  {
    question: "Sensor axborotlarni qabul qilish va qayta ishlash tezligi sekinlashganligi, idrok etishda fazoviy munosabatlarning yetarli bo’lmasligi, idrok etishning yomonlashuvi qanday nuqsonli bolalarga xosligini aniqlang",
    options: [
      "Zaif eshituvchi bolalar",
      "Ko’rishida nuqsoni bo’lgan bolalar",
      "Ruhiy rivojlanishi sustlashgan bolalar",
      "Eshitishida nuqsoni bo’lgan bolalar"
    ],
    correctAnswer: "Ruhiy rivojlanishi sustlashgan bolalar"
  },
  {
    question: "Ruhiy rivojlanishi sustlashgan bolalar aqliy darajasi jihatidan qanday turlarga bo’linadi?",
    options: [
      "yengil nuqsoni bor bolalar va ruhiy rivojlanishda sezilarli orqada qolgan bolalar",
      "tug’ma va orttirilgan",
      "debil, imbesil, idiot",
      "yengil, o’rta, og’ir"
    ],
    correctAnswer: "yengil, o’rta, og’ir"
  },
  {
    question: "Bolani har tomonlama erkalatish, yetarli mustaqil faoliyatga o’rgatmaslik, tashabbuskorlik, mas’uliyat hissini shakllantirmaslik, haddan tashqari uning ko’ngliga qarab ish qilish natijasida bolada qanday nuqson shakllanishi mumkin?",
    options: [
      "autizm sindromi",
      "ruhiy rivojlanishdan ortda qolish",
      "aqliy rivojlanishdan ortda qolish",
      "daun sindromi"
    ],
    correctAnswer: "ruhiy rivojlanishdan ortda qolish"
  },
  {
    question: "Ko’rishga aloqador nuqsonlarning kelib chiqish sabablariga ko’ra turlarini aniqlang",
    options: ["tug’ma va orttirilgan", "zaif ko’ruvchi va total ko’rlar", "katarakta, afaksiya", "koruvchilar va ko’rmaydiganlar"],
    correctAnswer: "tug’ma va orttirilgan"
  },
  {
    question: "Nuqtalar o’rniga zarur so’zni qo’ying: … - umumiy maqsadi muloqot va bilish subyekti sifatida eshitishida nuqsoni bo’lgan shaxslarning jismoniy, ruhiy va ijtimoiy sifatlarini rivojlantirishdir.",
    options: [
      "Surdopedagogikaning",
      "Tiflopedagogikaning",
      "Oligofrenopedagogikaning",
      "Umumiy pedagogikaning"
    ],
    correctAnswer: "Surdopedagogikaning"
  },
  {
    question: "Rezus faktorning to’g’ri kelmasligi, xromosom kasalliklari, fenilketonuriya va shu kabilar ogibatida qanday nuqsonli bolalar tug’ilishi mumkin?",
    options: [
      "tug’ma ko’r bolalar",
      "eshitishida nuqsoni bo’lgan bolalar",
      "tug’ma oligofren bolalar",
      "kar-soqov bolalar"
    ],
    correctAnswer: "tug’ma oligofren bolalar"
  },
  {
    question: "Kam harakat, ko’zlari qisiq, burni puchuq, tili kalta, lablari qalin, shalpangguloq, barmoqlari kalta va bir-biriga o’xshash bolalar - …",
    options: [
      "daun sindromli bolalar",
      "autizm bolalar",
      "ruhiy rivojlanishi sustlashgan bolalar",
      "harakat-tayanch a’zolari nuqsoni bo’lgan bolalar"
    ],
    correctAnswer: "daun sindromli bolalar"
  },
  {
    question: "Autizm atamasi ilk bor kim tomonidan kiritilgan?",
    options: ["Leo Kenner", "Jon Daun", "Eygen Bleyler", "Kris Bruk"],
    correctAnswer: "Eygen Bleyler"
  },
  {
    question: "Tashqi dunyodan ajralish, tashqi olam bilan kommunikativ funksiyaning buzilishi kabilarni o’z ichiga oluvchi sindrom bu …",
    options: ["autizm sindromi", "daun sindromi", "serebral falaj", "ruhiy rivojlanishning sustlashishi"],
    correctAnswer: "autizm sindromi"
  },
  {
    question: "Bu holat shizofreniya kabi ruhiy kasallikda ko’proq namoyon bo’ladi. Bu yerda qaysi nuqson haqida gap ketayapti?",
    options: ["daun", "karlik", "autizm", "nutq nuqsonlari"],
    correctAnswer: "autizm"
  },
  {
    question: "Bolaning ota-onasi bilan bo’lishni yoqtirmasligi, uch yoshgacha nutqining rivojlanmaganligi yoki bolani ko’zingizga qaramasligi kabi belgilar orqali bolalarda qanday nuqsonni aniqlash mumkin?",
    options: ["autizm", "aqli zaiflik", "ruhiy rivojlanish sustlashishi", "nutq nuqsonlari"],
    correctAnswer: "autizm"
  },
  {
    question: "Ilk yoshdagi bolalar autizmi bolaning necha yoshgacha bo’lgan davrini o’z ichiga oladi?",
    options: ["chaqaloglik davri", "2 yoshgacha bo’lgan davri", "3 yoshgacha bo’lgan davri", "5 yoshgacha bo’lgan davri"],
    correctAnswer: "3 yoshgacha bo’lgan davri"
  },
  {
    question: "Nuqtalar o’rniga zarur so’zni qo’ying: Serebral falajlangan bolalarning rivojlanishidagi psixo-jismoniy nuqsonlar avvalo … bilan bog’liqdir.",
    options: [
      "harakat, sensor va nutqiy kamchiliklar",
      "tayanch harakat",
      "nutqiy kamchiliklar",
      "eshitish bilan bog’liq kamchiliklar"
    ],
    correctAnswer: "harakat, sensor va nutqiy kamchiliklar"
  },
  {
    question: "Ko’pchiligida miya falaji kuzatilishi bilan bog’liq nuqson qaysi qatorda to’g’ri ko’rsatilgan?",
    options: [
      "ruhiy rivojlanishdan ortda qolish nuqsoni",
      "aqliy rivojlanishdan ortda qolish nuqsoni",
      "nutq buzilishlari nuqsoni",
      "harakat-tayanch a’zolari nuqsoni"
    ],
    correctAnswer: "harakat-tayanch a’zolari nuqsoni"
  },
  {
    question: "Bolaning kutilmaganda tanasining qotib qolishi, tananing bo’shashishi, sekin va sust ovqatlanish, boladagi noodatiy hatti-harakatlar qanday nuqsonning belgisi bo’lishi mumkin?",
    options: [
      "bolalar serebral falajining",
      "autizmning",
      "aqli zaiflikning",
      "eshitish bilan bog’liq nuqsonlarning"
    ],
    correctAnswer: "bolalar serebral falajining"
  },
  {
    question: "Bola 6 oylik bo’lganida boshini ko’tara olmasligi, beli bukilgan holatda bo’lishi, qo’llarining bukilmasligi, kaftining musht bo’lishi, oyoqlarining bukilmasligi va qaychi kabi ustma-ust bo’lishi qaysi nuqsonning belgilari hisoblanadi?",
    options: [
      "autizmning",
      "aqli zaiflikning",
      "bolalar serebral falajining",
      "eshitish bilan bog’liq nuqsonlarning"
    ],
    correctAnswer: "bolalar serebral falajining"
  },
  {
    question: "Kar-ko’r-soqov bolalar qanday nuqsonli bolalar hisoblanadi?",
    options: [
      "mujassam nuqsonli bolalar",
      "aqli zaif bolalar",
      "ruhiy rivojlanishi sustlashgan bolalar",
      "autizm bolalar"
    ],
    correctAnswer: "mujassam nuqsonli bolalar"
  },
  {
    question: "… orqali bolalar shaxsining o’ziga xos psixologik xususiyatlari rivojlantiriladi.",
    options: ["Korreksiya", "Adaptatsiya", "Ijtimoiy reabilitatsiya", "Art terapiya"],
    correctAnswer: "Art terapiya"
  },
  {
    question: "“Muruvvat” uylariga bolalar necha yoshdan qabul qilinadi?",
    options: ["18 yoshdan", "5 yoshdan", "5-7 yoshdan", "maktabgacha ta’limni tamomlagandan so’ng"],
    correctAnswer: "5-7 yoshdan"
  },
  {
    question: "Logopediyaning obyekti nima?",
    options: [
      "aqli nuqsonlari bo’lgan shaxslar",
      "ko’rish nuqsonlari bo’lgan shaxslar",
      "nutq nuqsoniga ega bo’lgan shaxslar",
      "autizm bolalar"
    ],
    correctAnswer: "nutq nuqsoniga ega bo’lgan shaxslar"
  },
  {
    question: "Bolaga har tomonlama ta’sir ko’rsatishni ko’zlab ta’lim-tarbiya jarayonida ham pedagogik, psixologik, meditsina metodlarini qo’llash jarayoni qanday yondashuv deyiladi?",
    options: ["kompleks yondashuv", "ijtimoiy adaptatsiya", "pedagogik o’zaro ta’sir ko’rsatish", "kompensatsiya"],
    correctAnswer: "kompleks yondashuv"
  },
  {
    question: "Psixodiagnostika nima?",
    options: [
      "stressni yo’qotish jarayoni",
      "insonning o’zini ruhiy holatini boshqarishga qaratilgan ongli harakatlar",
      "shaxs va psixika rivojlanishing potensial xususiyatlarini aniqlashga qaratilgan muolaja",
      "o’zi anglagan va anglamagan holda psixikaning ko’ngilsizlikni kutish holati"
    ],
    correctAnswer: "shaxs va psixika rivojlanishing potensial xususiyatlarini aniqlashga qaratilgan muolaja"
  },
  {
    question: "Nuqtalar o’rniga mos bo’lgan so’zni toping: … tiflopedagogika fanining va ko’rishida nuqsoni bo’lgan shaxslarni o’qitishning asoschisi hisoblanadi.",
    options: ["V. Gayui", "D. Didro", "V. Fromm", "A.I. Litvak"],
    correctAnswer: "V. Gayui"
  },
  {
    question: "Yozuvning olti nuqtali tizimdan iborat bo’lishi qanday alifbo turida mavjud?",
    options: ["Daktil alifbosida", "o’zbek alifbosida", "Gayui alifbosida", "Brayl alifbosida"],
    correctAnswer: "Brayl alifbosida"
  },
  {
    question: "Brayl alifbosi qanday tizimdan iborat?",
    options: ["bosh harflardan iborat", "Olti nuqtali tizimdan", "imo-ishora tizimidan", "tinish belgilari tizimidan"],
    correctAnswer: "Olti nuqtali tizimdan"
  },
  {
    question: "L. Brayl tomonidan yaratilgan alifbo qanday nuqsonli shaxslar uchun yaratilgan?",
    options: ["ko’zi ojizlar uchun", "gapirishida nuqsoni bo’lganlar uchun", "aqli zaiflar uchun", "ruhiy rivojlanishi sustlashganlar uchun"],
    correctAnswer: "ko’zi ojizlar uchun"
  },
  {
    question: "Maktablarda past o’zlashtiruvchi, ulgurmovchi o’quvchilar o’rtasida qanday nuqsonli bolalar uchrab turadi?",
    options: [
      "ko’rishida nuqsoni bo’lgan bolalar",
      "ruhiy rivojlanishi sustlashgan bolalar",
      "tayanch-harakat a’zolarida nuqsoni bo’lgan bolalar",
      "nutqida nuqsoni bo’lgan bolalar"
    ],
    correctAnswer: "ruhiy rivojlanishi sustlashgan bolalar"
  },
  {
    question: "Orttirilgan aqli zaiflik nima deb yuritiladi?",
    options: ["demensiya", "autizm", "oligofreniya", "abuliya"],
    correctAnswer: "demensiya"
  },
  {
    question: "Intellektida nuqsoni bo’lgan bolalarning rivojlanishi, ta’limi va tarbiyasi bilan shug’ullanuvchi pedagogikaning sohasi nima deb ataladi?",
    options: ["surdopedagogika", "tiflopedagogika", "oligofrenopedagogika", "yosh pedagogikasi"],
    correctAnswer: "oligofrenopedagogika"
  },
  {
    question: "Daun sindromi nima?",
    options: [
      "Xromosoma mutatsiyasi tufayli yuzaga keladigan rivojlanish buzilishi",
      "Faqat ko‘rish bilan bog‘liq kasallik",
      "Ruhiy holatni buzilishi",
      "Faqat aqliy qobiliyatlarni pasaytiradigan kasallik"
    ],
    correctAnswer: "Xromosoma mutatsiyasi tufayli yuzaga keladigan rivojlanish buzilishi"
  },
  {
    question: "Daun sindromi bilan tug‘ilgan bolalar qanday umumiy xususiyatlarga ega bo‘ladi?",
    options: [
      "Jismoniy o‘sishning sekinlashishi",
      "Tez o‘sish va yuqori bo‘y",
      "Yuqori aqliy qobiliyat",
      "Yuzdagi bir xilliklar va past bo‘y"
    ],
    correctAnswer: "Yuzdagi bir xilliklar va past bo‘y"
  },
  {
    question: "Daun sindromli bolalarda qanday muammolar ko‘proq uchraydi?",
    options: [
      "Ko‘rish va eshitish muammolari",
      "Yuz, bo‘y va tana tuzilishi",
      "Emotsional va aqliy rivojlanishdagi kechikishlar",
      "Yuqori bo‘y va normal rivojlanish"
    ],
    correctAnswer: "Emotsional va aqliy rivojlanishdagi kechikishlar"
  },
  {
    question: "Daun sindromli bolalar uchun qanday maxsus yordam ko‘rsatiladi?",
    options: [
      "Faqat tibbiy yordam",
      "Psixologik yordam, ta’lim va jismoniy terapiya",
      "Faqat jismoniy terapiya",
      "Faqat o‘qish uchun maxsus materiallar"
    ],
    correctAnswer: "Psixologik yordam, ta’lim va jismoniy terapiya"
  },
  {
    question: "Daun sindromi bilan bog‘liq aqliy qobiliyat qanday bo‘ladi?",
    options: [
      "Aqliy rivojlanish normal darajada bo‘ladi",
      "Aqliy qobiliyatlar past bo‘ladi, lekin o‘rganishga qiziqish bo‘ladi",
      "Aqliy qobiliyatlar yuqori bo‘ladi",
      "Aqliy qobiliyatlar faqat ba'zi bolalarda o‘zgaradi"
    ],
    correctAnswer: "Aqliy qobiliyatlar past bo‘ladi, lekin o‘rganishga qiziqish bo‘ladi"
  },
  {
    question: "Daun sindromi qanday holatlarda tashxis qilinadi?",
    options: [
      "Tashxis faqat tug‘ilishdan so‘ng aniqlanadi",
      "Tashxis homiladorlik davrida genetik testlar yordamida aniqlanishi mumkin",
      "Tashxis faqat o‘rta yoshga yetganda qo‘yiladi",
      "Tashxis faqat jismoniy tekshiruvlar orqali aniqlanadi"
    ],
    correctAnswer: "Tashxis homiladorlik davrida genetik testlar yordamida aniqlanishi mumkin"
  },
  {
    question: "Daun sindromli bolalar uchun reabilitatsiya jarayonida qanday o‘zgartirishlar kiritilishi mumkin?",
    options: [
      "O‘quv jarayonini faqat tezlashtirish",
      "Maxsus treninglar, psixoterapiya va jismoniy faoliyatni o‘z ichiga olgan kompleks yondashuv",
      "Faqat aqliy mashqlar",
      "Hech qanday maxsus yondashuvlar kerak emas"
    ],
    correctAnswer: "Maxsus treninglar, psixoterapiya va jismoniy faoliyatni o‘z ichiga olgan kompleks yondashuv"
  },
  {
    question: "Daun sindromi bilan tug‘ilgan bolalar o‘qish va ijtimoiy hayotda qanday imkoniyatlarga ega bo‘lishi mumkin?",
    options: [
      "Faqat oddiy ishlarni bajarish",
      "Maxsus o‘qish va rivojlanish dasturlari yordamida o‘qish va ijtimoiy faoliyatda ishtirok etish",
      "Ijtimoiy hayotga kira olishmaydi",
      "Faqat o‘qish va bilim olishga qodir emaslar"
    ],
    correctAnswer: "Maxsus o‘qish va rivojlanish dasturlari yordamida o‘qish va ijtimoiy faoliyatda ishtirok etish"
  },
  {
    question: "Daun sindromining yana bir nomi?",
    options: ["Trisomiya", "Ensefalit", "Aqli zaif", "Imbetsil"],
    correctAnswer: "Trisomiya"
  },
  {
    question: "Metod so’zining ma'nosi?",
    options: [
      "“Grekcha” – usul, yo'l",
      "“Yunoncha” – kam",
      "“Lotincha” – farq qiluvchi",
      "“Ruscha” – xarakter"
    ],
    correctAnswer: "“Grekcha” – usul, yo'l"
  },
  {
    question: "Qaysi bir metodda bola sharoitdan ajraladi va u yoki bu ta’sir, boshqa sharoit unga tushunarli bo'lib qoladi?",
    options: ["Eksperiment", "Kuzatish", "So'rovnoma", "Tahlil"],
    correctAnswer: "Eksperiment"
  },
  {
    question: "Qaysi bir metodda o'rnatilgan qoidalarning buzilish sabablari haqidagi hukm va baholar aniqlanadi?",
    options: ["Suhbat", "Kuzatuv", "Eksperiment", "Tajriba"],
    correctAnswer: "Kuzatuv"
  },
  {
    question: "Yordamchi maktablarda asosan aqli zaiflikning qaysi darajasi ta'lim oladi?",
    options: ["Debil", "Idiot", "Imbetsil", "Ta'lim olmaydi"],
    correctAnswer: "Debil"
  },
  {
    question: "Salbiy ta’sirlarning bola organizmiga 2 yoshdan keyingi ta'siridan kelib chiqadigan oligofreniya nima deb ataladi?",
    options: ["Demensiya", "Idiot", "Imbetsil", "Debil"],
    correctAnswer: "Demensiya"
  },
  {
    question: "Epilepsiya nima?",
    options: ["Tutqanoq", "Aqli zaiflik", "Qoloqlik", "Ruhiy buzilish"],
    correctAnswer: "Tutqanoq"
  },
  {
    question: "U maxsus tashkil etilgan bilish faoliyati bo'lib, kishilik jamiyatining turli sohada tajriba egallashiga xizmat qiladi?",
    options: ["Ta'lim", "Tarbiya", "Bilim", "Xotira"],
    correctAnswer: "Ta'lim"
  },
  {
    question: "“Nafas qo'shiq aytishni emas, balki qo'shiq aytish nafasning to'g'ri rivojlanishiga olib keladi” – bu fikr qaysi olimga tegishli?",
    options: ["Neyman", "L. Mo'minova", "U. Fayziyeva", "F. Rau"],
    correctAnswer: "F. Rau"
  },
  {
    question: "O'zbekistonda maxsus ta’limni rivojlantirishda o‘z xissalarini qo‘shgan olimlardan kimlarni bilasiz?",
    options: [
      "L. Mo'minova, A.S. Aytmetova",
      "I.M. Salovev, A.S. Vigotskiy",
      "Q. Abdullaeva, S. Eshonto'raeva",
      "M. Qahramonova; S. Mikoyan"
    ],
    correctAnswer: "L. Mo'minova, A.S. Aytmetova"
  },
  {
    question: "Oligofren bolalar aqliy rivojlanmaganligi natijasida qaysi darajalarga ajratib o‘rganiladi?",
    options: [
      "Debil, imbetsil, idiot",
      "Debil, psixik rivojlanishi sust",
      "Imbetsil, idiot, kar",
      "nutqi rivojlanmagan, nevroz"
    ],
    correctAnswer: "Debil, imbetsil, idiot"
  },
  {
    question: "Bolalardagi me'yoriy ko'rish imkoniyatining rivojlanishi necha yoshga kelib chiqadi?",
    options: [
      "8 yoshdan 5 yoshgacha",
      "10 yoshdan 7 yoshgacha",
      "3 yoshdan 6 yoshgacha",
      "4 yoshdan 7 yoshgacha"
    ],
    correctAnswer: "4 yoshdan 7 yoshgacha"
  },
  {
    question: "Nutq apparati o'zaro chambarchas bog'langan ikki qismdan tashkil topgan. Bular:?",
    options: [
      "Boshgaruvchi va bajaruvchi",
      "Organik va periferik",
      "Afferent va efferent",
      "Markaziy va organik"
    ],
    correctAnswer: "Markaziy va organik"
  },
  {
    question: "Artikulyatsiya bo'limining a'zosi?",
    options: ["Til", "Hiqildoq", "Og'iz bo'shlig'i", "Ovoz boylamlari"],
    correctAnswer: "Til"
  },
  {
    question: "Oligo so’zi qanday manoni bildiradi?",
    options: ["kam", "kar", "ko’r", "ko’p"],
    correctAnswer: "kam"
  },
  {
    question: "Ko‘rishida nuqsoni bo‘lgan bolalar bilan shug’ullanuvchi mutaxasis?",
    options: ["Surdopedagog", "Logoped", "Oligofrenopedagog", "Tiflopedagog"],
    correctAnswer: "Tiflopedagog"
  },
  {
    question: "Imkoniyati cheklangan bolalarni maxsus ta’lim muassasalariga necha yoshdan tarbiya berish uchun olinadi?",
    options: ["2-3 yoshdan", "6-7 yoshdan", "4-5 yoshdan", "7-8 yoshdan"],
    correctAnswer: "4-5 yoshdan"
  },
  {
    question: "Maxsus ta’lim muassasalarining har bir guruhiga necha nafardan bola qabul qilinishi mo‘ljallangan?",
    options: ["4-8 nafar", "2-3 nafar", "10-12 nafar", "10-11 nafar"],
    correctAnswer: "4-8 nafar"
  },
  {
    question: "Ta'lim turlari to’g’ri ko’rsatilgan qatorni belgilang?",
    options: [
      "An'anaviy, masofaviy, maxsus",
      "An'anaviy ta'lim",
      "maxsus ta'lim",
      "Rivojlanish ta'limi"
    ],
    correctAnswer: "An'anaviy, masofaviy, maxsus"
  },
  {
    question: "Qaysi ta'lim turi nogironligi bo’lgan shaxslar uchun katta imkoniyatlar beradi?",
    options: ["An'anaviy", "Rivojlanish", "Masofaviy", "Maxsus"],
    correctAnswer: "Masofaviy"
  },
  {
    question: "Qaysi chex pedagogi tarixda birinchi bo’lib maktab ta'limida sinf – dars tizimini yaratadi?",
    options: ["Ya.A. Komenskiy", "Dalton", "Volter", "Lunin"],
    correctAnswer: "Ya.A. Komenskiy"
  },
  {
    question: "Qaysi tashkilot Xalq ta'limi vazirligining defektolog va psixologlarining inklyuziv ta'limdagi ro’li to’g’risidagi nizomlarni ishlab chiqishga ko’maklashadi?",
    options: ["BMT", "Unicef", "Yunecko", "Oliy majlis"],
    correctAnswer: "Unicef"
  },
  {
    question: "Kech kar bo’lganlar deb qanday bolalarga aytiladi?",
    options: [
      "Nutqni egallagandan keyin ya'ni 2-3 yoshda qandaydir kasallik yoki jarohat oqibatida eshtish qobilyatini yo'qotgan bolalar",
      "Eshitishning mutlaqo yo'qligi mutlaqo eshitmaslik",
      "Har ikkala quloq bilan eshitishning pasayishi unda nutqni idrok etishda qiyinchiliklar yuzaga keladi",
      "16 yoshdan keyin kar bo'lganlar"
    ],
    correctAnswer: "Nutqni egallagandan keyin ya'ni 2-3 yoshda qandaydir kasallik yoki jarohat oqibatida eshtish qobilyatini yo'qotgan bolalar"
  },
  {
    question: "Angliyada og'ir darajadagi bolalar nechanchi yildan beri maxsus ta'lim tizimiga kiritilganlar?",
    options: ["1975", "1976", "1980", "1970"],
    correctAnswer: "1970"
  },
  {
    question: "Nutqni egallagandan keyin ya'ni 2-3 yoshda qandaydir kasallik yoki jarohat oqibatida eshtish qobilyatini yo'qotgan bolalar qanday bolalar hisoblanadi?",
    options: [
      "nutqida nuqsoni bo’lgan bolalar",
      "Kech kar bo’lgan bolalar",
      "Kar bolalar",
      "zaif eshituvchi bolalar"
    ],
    correctAnswer: "Kech kar bo’lgan bolalar"
  },
  {
    question: "Eshitish qobilyati turg'un pasayishi qanday holda amalga oshishi mumkin?",
    options: ["Kech kar bo’lish", "tug'ma va orttirilgan", "orttirilgan", "zaif eshituvchilar"],
    correctAnswer: "tug'ma va orttirilgan"
  },
  {
    question: "Agar nutqni rivojlantirish ustida ish olib borilmasa necha yoshida eshitish qobilyatini yo'qotgan bolalar maktab yoshiga yetganda gapirmaydilar?",
    options: ["4-5 yoshda", "3-4 yoshda", "5-6 yoshda", "8-9 yoshda"],
    correctAnswer: "3-4 yoshda"
  },
  {
    question: "Aqliy zaiflik o'zi nima?",
    options: [
      "bosh miyani organik zararlanishi (tug'ma, orttirilgan)",
      "ruhiy rivojlanishning orqada qolishi",
      "nutqida nuqsoni bo’lishi tufayli gapira olmaslik",
      "bosh miyaning organik zararlanishi natijasida bilish faoliyatining turg'un buzilishi"
    ],
    correctAnswer: "bosh miyaning organik zararlanishi natijasida bilish faoliyatining turg'un buzilishi"
  },
  {
    question: "Maxsus yordamga muxtoj bolalarni kasbga yo’llash bu?",
    options: [
      "xalq xo'jaligining eng muhim tarmoqlari bilan tanishtirish",
      "daromadli kasblardan birini tanlash",
      "nuqsonlarni hisobga olgan holda kasblardan birini tanlash",
      "hunarmandchilikni tavsiya etish"
    ],
    correctAnswer: "nuqsonlarni hisobga olgan holda kasblardan birini tanlash"
  },
  {
    question: "Kelib chiqish sabablariga ko'ra eshitish nuqsonlari?",
    options: [
      "organik va funksional",
      "tug'ma va orttirilgan",
      "tug'ma va orttirilgan, organik hamda funksional",
      "hayot davomida orttirilgan"
    ],
    correctAnswer: "tug'ma va orttirilgan, organik hamda funksional"
  },
  {
    question: "Nutq qanday vazifani bajaradi?",
    options: [
      "aloqa bog'lash",
      "fikr yuritish",
      "o'zaro muloqot vositasi bo'lib, insonlarda bir-biri bilan muloqot, fikr almashish vazifalarini bajaradi",
      "kommunikativ"
    ],
    correctAnswer: "o'zaro muloqot vositasi bo'lib, insonlarda bir-biri bilan muloqot, fikr almashish vazifalarini bajaradi"
  },
  {
    question: "Nutq qanday paydo bo’ladi?",
    options: [
      "Tovush birikmalarini talaffuz qilishdan",
      "tovushlar qo'shilishidan",
      "tarbiya ostida ongli nutq va fikrlash o'rqali",
      "passiv va aktiv nutq birikishidan"
    ],
    correctAnswer: "tarbiya ostida ongli nutq va fikrlash o'rqali"
  },
  {
    question: "Ruxiy rivojlanishi sustlashgan bolalar qayerda ta’lim olishi mumkin?",
    options: [
      "internatlarda",
      "maxsus guruh va sinflarda",
      "mehribonlik uylarida",
      "akademik litseylarda"
    ],
    correctAnswer: "maxsus guruh va sinflarda"
  },
  {
    question: "„Autizm” so’zining ma’nosi nima?",
    options: [
      "Inglizcha „autos” – og'ir",
      "Lotincha „autos” – sezgi",
      "Grekcha „autos” – o'zim",
      "Grekcha „autos” – og'ir"
    ],
    correctAnswer: "Grekcha „autos” – o'zim"
  },
  {
    question: "„Autizm” belgilari qaysi qatorda to’g’ri ko’rsatilgan?",
    options: [
      "Reallikdan uzoqlashish, dunyodan ajralish va tashqi olam bilan kommunikativ funksiyalarni buzilish sindromi",
      "Reallikka qaytish, dunyo qarashi kengayish va tashqi olam bilan uyg'unlashish sindromi",
      "Muskullarning torayishi",
      "Markaziy asab tizimidagi funksional o'zgarishlar"
    ],
    correctAnswer: "Reallikdan uzoqlashish, dunyodan ajralish va tashqi olam bilan kommunikativ funksiyalarni buzilish sindromi"
  },
  {
    question: "Kar-soqov bolalarning eshitish nuqsonlari necha foizi tug'ma bo'ladi?",
    options: ["30-35%", "25-35%", "25-30%", "35-40%"],
    correctAnswer: "25-30%"
  },
  {
    question: "Zaif ko'ruvchi bolalarda ko'rish o'tkirligi nechigacha bo'lishi mumkin?",
    options: ["0,05-0,4", "0,04-0,03", "0,03-0,02", "0,05-0,04"],
    correctAnswer: "0,05-0,4"
  },
  {
    question: "Dizartiriya qaysi so’zdan olingan va manosi?",
    options: [
      "Lotincha birikish",
      "Yunoncha birikish",
      "Arabcha parchalash",
      "Fransuzcha parchalash"
    ],
    correctAnswer: "Yunoncha birikish"
  },
  {
    question: "Daun sindromining asoschisi kim?",
    options: ["Kru Bruk nomiga", "Poblo Pineda", "S. Vigotskiy", "Djon Daun"],
    correctAnswer: "Djon Daun"
  },
  {
    question: "Daun sindromi nomini ingliz vrachi Djon Daun sharafiga nechanchi yil qo'yilgan?",
    options: ["1866", "1880", "1980", "1860"],
    correctAnswer: "1866"
  },
  {
    question: "Ruhiy rivojlanishning susayish muammosi O’zbekistonda nechanchi yilda o'rgangan?",
    options: [
      "1940 oxiri 1980-yillarda",
      "1960 oxiri 1970-yillarda",
      "1890 oxiri 1960-yillarda",
      "1990 oxiri 1993-yillarda"
    ],
    correctAnswer: "1940 oxiri 1980-yillarda"
  },
  {
    question: "Autizm qaysi so'zdan olingan?",
    options: ["Yunoncha", "Inglizcha", "Grekcha", "Lotincha"],
    correctAnswer: "Grekcha"
  },
  {
    question: "Autizm so’zining ma'nosi?",
    options: [
      "Grekcha o'zim degan ma'noni anglatadi",
      "Inglizcha o'zim degan ma'noni anglatadi",
      "Fransuzcha o'zim degan ma'noni anglatadi",
      "yunoncha o'zim degan ma'noni anglatadi"
    ],
    correctAnswer: "Grekcha o'zim degan ma'noni anglatadi"
  },
  {
    question: "Suhbat metodi haqidagi to’g’ri fikrni aniqlang",
    options: [
      "Savol-javob, so’zlashish, so’zlab berish",
      "Tushuntirish, bayon qilish, hikoya qilish",
      "Savollarga javob berish, uqib berish",
      "Mavzuga doir savol-javobdan iborat bo'lgan dialogik nutq"
    ],
    correctAnswer: "Mavzuga doir savol-javobdan iborat bo'lgan dialogik nutq"
  },
  {
    question: "Suhbat metodini tavsiya etgan buyuk mutafakkirlarni aniqlang",
    options: [
      "Abu Rayhon Beruniy, Ibn Sino",
      "Ibn Sino, A. Navoiy, Z. Bobur",
      "Burhoniddin Zarnujiy, Ibn Sino, Farobiy",
      "Farobiy, Al Xorazmiy"
    ],
    correctAnswer: "Burhoniddin Zarnujiy, Ibn Sino, Farobiy"
  },
  {
    question: "Ilk yosh guruhda bolalarni nutqqa o'rgatish bosqichining asosiy metodlarini aniqlang?",
    options: [
      "Tushuntirish, suhbat",
      "O'yinchoq o'yin",
      "Suhbat, didaktik o'yin",
      "Ko'rsatish, o'yin"
    ],
    correctAnswer: "Suhbat, didaktik o'yin"
  },
  {
    question: "Adaptatsiya so'zining ma'nosi nima?",
    options: ["Moslashish", "Ko'nikuvchanlik", "Idrokning shakllanishi", "Biror bir tashkilotga ko'nikish"],
    correctAnswer: "Moslashish"
  },
  {
    question: "Oligofren bolalar qayerda ta'lim olishi kerak?",
    options: [
      "ulg'urmovchi o'quvchilarga ixtisoslashtirilgan ta'lim muassasalarida",
      "umumiy o'rta ta'lim maktablarining maxsus sinflarida",
      "maxsus sinf xonalarida",
      "maxsus bolalar internatlarida, yordamchi maktablarda"
    ],
    correctAnswer: "maxsus bolalar internatlarida, yordamchi maktablarda"
  },
  {
    question: "Yordamchi mehnat ta’limi maktabida kimlar ta’lim oladi?",
    options: ["debil bolalar", "BSF bolalar", "rivojlanishida nuqsoni bo'lgan bolalar", "oligofren bolalar"],
    correctAnswer: "oligofren bolalar"
  },
  {
    question: "O’quv reja dastur va darsliklar maxsus ehtiyojli bolalarning imkoniyatlariga moslashuvchan bo’lishi kerak. Bu qaysi tamoyil?",
    options: [
      "Inklyuziv ta'limda moslashuvchanlik tamoyili",
      "Markazlashtirilmagan bo'lishi tamoyili",
      "asosiy tamoyilar",
      "taxminiy"
    ],
    correctAnswer: "Inklyuziv ta'limda moslashuvchanlik tamoyili"
  },
  {
    question: "Eshitishda nuqson bo'lgan bolalar tasniflangan qatorni ko'rsating?",
    options: [
      "Kech kar bo'lib qolgan bolalar",
      "Zaif eshituvchi, Kar bolalar",
      "Karlik, orttirilgan karlik, Zaif eshituvchi, orttirilgan zaif eshituvchi",
      "Kar, tangquloqlik"
    ],
    correctAnswer: "Karlik, orttirilgan karlik, Zaif eshituvchi, orttirilgan zaif eshituvchi"
  },
  {
    question: "Tibbiy atamalarda simptom nima?",
    options: ["Belgi", "Kasallik", "Ruhiy holat", "Og'riq"],
    correctAnswer: "Belgi"
  },
  {
    question: "Nutq buzilishlar bolaning qanday rivojlanishiga ta'sir etadi?",
    options: ["ruxiy", "aqliy", "fiziologik", "axloqiy"],
    correctAnswer: "aqliy"
  },
  {
    question: "Defektologik faoliyat predmeti qanday fanlar bilan bog'liq?",
    options: [
      "astronomiya, kimyo, biologiya",
      "matematika, geometriya, tibbiyot",
      "tarix, geografiya",
      "anatomiya, fiziologiya, gigiyena, pedagogika, psixologiya, tibbiyot"
    ],
    correctAnswer: "anatomiya, fiziologiya, gigiyena, pedagogika, psixologiya, tibbiyot"
  },
  {
    question: "Og’ir nutq nuqsonlari bor bolalarning ta’limi bilan qaysi fan shug’ullanadi?",
    options: ["Logopediya", "Surdopedagogika", "Oligofrenopedagogika", "Tiflopedagogika"],
    correctAnswer: "Logopediya"
  },
  {
    question: "Ijtimoiy reabilitatsiya nima?",
    options: [
      "Nuqsonlarni kompensatsiyalash",
      "nuqsonlarni tuzatish, korreksiyalash",
      "alohida ko’makka muhtoj kishilarni jamiyatga tiklash",
      "rivojlanishida nuqsoni bo’lgan bolalarni jamiyatga moslashtirish"
    ],
    correctAnswer: "alohida ko’makka muhtoj kishilarni jamiyatga tiklash"
  },
  {
    question: "Kim ichki nutqni chuqur tahlil qildi? Uning o’ziga xos xususiyatlarini ochib berdi?",
    options: ["A.A. Leontyev", "T.B. Rebina", "L.S. Vigotskiy", "A.R. Luriya"],
    correctAnswer: "L.S. Vigotskiy"
  },
  {
    question: "“Logopediya” terminining manosi nima?",
    options: ["ta’lim beruvchi", "o'qitaman", "tarbiyalovchi", "nutqni tarbiyalash"],
    correctAnswer: "nutqni tarbiyalash"
  },
  {
    question: "Qanday bolalar alohida ko'makka muhtoj bolalar deyiladi?",
    options: [
      "ruxiy va jismoniy kamchiligi bor bolalar",
      "kasallikga ko’p chalinuvchi bolalar",
      "talaffuzida kamchiligi bor bolalar",
      "RRS bolalar"
    ],
    correctAnswer: "ruxiy va jismoniy kamchiligi bor bolalar"
  },
  {
    question: "Didaktik o’yinlarning qimmati nimada deb o’ylaysiz?",
    options: [
      "an’anaviy darslarda qo’llaniladi",
      "bolaning tarbiyasiga ta’sir qiladi",
      "o'quvchi o'zi bilmagan holda ko'pdan ko'p harakatlar qiladi",
      "bolani beparvolikka o'rgatadi"
    ],
    correctAnswer: "o'quvchi o'zi bilmagan holda ko'pdan ko'p harakatlar qiladi"
  },
  {
    question: "Yordamchi maktablarda dars qanday tuzilgan?",
    options: ["o'yin tarzda", "ilmiy tarzda", "jismoniy tarzda", "hammasi to'g'ri"],
    correctAnswer: "o'yin tarzda"
  },
  {
    question: "Yordamchi maktab o’quvchilarini o’rganishda qaysi metoddan foydalanamiz?",
    options: ["taqqoslash", "tajriba", "kuzatish", "suhbat"],
    correctAnswer: "kuzatish"
  },
  {
    question: "Odamming oliy nerv faoliyatini o’rgangan buyuk olim qaysi?",
    options: ["Al Xorazmiy", "Amur Temur", "Abu Ali Ibn Sino", "Mirzo Ulug'bek"],
    correctAnswer: "Abu Ali Ibn Sino"
  },
  {
    question: "Izoterapiya bu….?",
    options: [
      "Tasviriy san’at yordamida terapevtik ta’sir orqali rasm chizish, modellashtirish va test terapiyasi",
      "Test yordamida barmoq va qo’l harakatlarni o’rgatish orqali bola organizmiga ta’sir o’tkazish usuli",
      "Ichki dunyosini ranglarda aks ettirishga va unga tashqi tomondan qarashga imkon beradigan usul",
      "Nutqidagi kamchiliklarini to’g’rilash va nutqini ravon qilish usuli"
    ],
    correctAnswer: "Ichki dunyosini ranglarda aks ettirishga va unga tashqi tomondan qarashga imkon beradigan usul"
  },
  {
    question: "Agar nutq tinglovchi ongining ko’p tomonlarini egallab olib, uni so’zlovchiga tobe qilib qo’ysa bunday nutq qanday nutq hisoblanadi?",
    options: ["Obrazli nutq", "Qisqa nutq", "Ta'sirli nutq", "Nutq emas"],
    correctAnswer: "Ta'sirli nutq"
  },
  {
    question: "Bolalarda nutq buzilishini boshqa guruhlarga qarab tasniflashni taklif qilgan olim?",
    options: ["L.O. Badalyon", "E.P. Neyman", "K.D. Ushinskiy", "V.N. Luiy"],
    correctAnswer: "E.P. Neyman"
  },
  {
    question: "Pedagog tushunchasi qanday ma’noni anglatadi?",
    options: ["Bola yetaklovchi", "Tarbiyachi", "Bolani voyaga yetkazuvchi", "Murabbiy"],
    correctAnswer: "Bola yetaklovchi"
  },
  {
    question: "Sinf dars sistemasi birinchi bo'lib kim tomonidan ishlab chiqilgan?",
    options: ["Makarenko", "Jon Dyui", "Y. Komenskiy", "K. Ushinskiy"],
    correctAnswer: "Y. Komenskiy"
  },
  {
    question: "Arteterapiya nima?",
    options: [
      "hissiyotlarni chiqarish",
      "nutq buzilishi",
      "ko'zning ko'rmay qolishi",
      "ruhiy holatning buzilishi"
    ],
    correctAnswer: "hissiyotlarni chiqarish"
  },
  {
    question: "Nutq nuqsonlari bu .....?",
    options: [
      "Murakkab ruhiy faoliyat. U ruhiy jarayonlarning tarkib topishiga va bolaning umuman barkamol bo'lib o'sishiga katta ta'sir ko'rsatadi",
      "Nutq tovushlarini hasil qilishda ishtirok etadigan nutq organlari tizimining normada emasligi",
      "Bu adabiy tilda qabul qilingan nutq normasidan biroz bo'lsa ham chetga chiqish demakdir",
      "Nutqiy faoliyat turlarining bir-biriga mos emasligi"
    ],
    correctAnswer: "Murakkab ruhiy faoliyat. U ruhiy jarayonlarning tarkib topishiga va bolaning umuman barkamol bo'lib o'sishiga katta ta'sir ko'rsatadi"
  },
  {
    question: "Fonetik-fonematik komponent – bu ......?",
    options: [
      "Tovushlar talaffuzi, ovoz, nutq tezligi, idrok",
      "Grammatik jihatdan mukammal bo'lgan nutq",
      "Aktiv va passiv lug'at",
      "Nutqning funksional tezligi"
    ],
    correctAnswer: "Tovushlar talaffuzi, ovoz, nutq tezligi, idrok"
  },
  {
    question: "Aqli zaiflik o'zi nima?",
    options: [
      "Bosh miyaning organik zararlanishi natijasida bilish faoliyatining turg'un buzilishi",
      "Bosh miyaning organik zararlanishi (tug'ma, orttirilgan)",
      "Ruhiy rivojlanishning orqada qolishi",
      "Nutqida nuqsoni bo'lishi tufayli gapira olmaslik"
    ],
    correctAnswer: "Bosh miyaning organik zararlanishi natijasida bilish faoliyatining turg'un buzilishi"
  },
  {
    question: "Maxsus yordamga muxtoj bolalarni kasbga yo'llash bu?",
    options: [
      "Xalq xo'jaligining eng muhim tarmoqlari bilan tanishtirish",
      "Anomaliyalarini hisobga olgan holda kasblardan birini tanlash",
      "Daromadli kasblardan birini tanlash",
      "Hunarmandchilikni tavsiya etish"
    ],
    correctAnswer: "Anomaliyalarini hisobga olgan holda kasblardan birini tanlash"
  },
  {
    question: "Maxsus pedagogika fani qanday fan?",
    options: [
      "jismoniy va ruxiy rivojlanishda nuqsoni bo'lgan bolalar ta'lim tarbiyasi bilan shug'ullanadigan fan",
      "Ko'rishida nuqsoni bo'lgan bolalar bilan shug'ullanadigan fan",
      "Nutqida nuqsoni bo'lgan bolalar bilan shug'ullanadigan fan",
      "Eshitishida nuqsoni bo'lgan bolalar bilan shug'ullanadigan fan"
    ],
    correctAnswer: "jismoniy va ruxiy rivojlanishda nuqsoni bo'lgan bolalar ta'lim tarbiyasi bilan shug'ullanadigan fan"
  },
  {
    question: "Fanning asosiy vazifalari nimalardan iborat?",
    options: [
      "Bolaning ta'lim tarbiyasi uchun zarur shart-sharoitni yaratish",
      "Rivojlantirish diagnostikasi, tashxis qo'yishdan",
      "Maxsus yordamga muxtoj bolalarning ijtimoiy adaptatsiya, reabilitatsiya, kompensatsiyasini amalga oshirish",
      "Maxsus muassasalarga bolalarni saralash"
    ],
    correctAnswer: "Maxsus yordamga muxtoj bolalarning ijtimoiy adaptatsiya, reabilitatsiya, kompensatsiyasini amalga oshirish"
  },
  {
    question: "Maxsus pedagogika fanining qaysi yo'nalishlari mustaqil ajralib chiqgan?",
    options: [
      "Logopediya, Surdopedagogika, Tiflopedagogika, Oligofrenopedagogika",
      "Oligofrenopedagogika, oftalmologiya, dermotologiya, logopediya",
      "Tiflopedagogika, otorinolaringologiya, rinoplastika, surdologiya",
      "Surdopedagogika, stomatologiya, fiziologiya, patologiya"
    ],
    correctAnswer: "Logopediya, Surdopedagogika, Tiflopedagogika, Oligofrenopedagogika"
  },
  {
    question: "Eshitishda nuqson bo'lgan bolalar tasniflangan qatorni ko'rsating?",
    options: [
      "Kech kar bo'lib qolgan bolalar",
      "zaif eshituvchi, kar bolalar",
      "Karlik, orttirilgan karlik, zaif eshituvchi, orttirilgan zaif eshituvchi",
      "Kar, tangquloqlik"
    ],
    correctAnswer: "Karlik, orttirilgan karlik, zaif eshituvchi, orttirilgan zaif eshituvchi"
  },
  {
    question: "Korreksiya bu:?",
    options: [
      "Nuqsonlarni tuzatish, to'g'rilash",
      "Rivojlanishda nuqsoni bor bolalarni o'qitish",
      "Ta'lim-tarbiya olish",
      "Bir analizator faoliyatini ikkinchisiga yuklatish"
    ],
    correctAnswer: "Nuqsonlarni tuzatish, to'g'rilash"
  },
  {
    question: "Kompensatsiya bu:?",
    options: [
      "bolalarni ijtimoiy adaptatsiyasini amalga oshirish",
      "bir analizator faoliyatini ikkinchisiga yuklatish",
      "bir analizator faoliyatini ikkinchisi bajarishi yoki to'ldirishi",
      "nuqsonlarni tuzatish bartaraf etish"
    ],
    correctAnswer: "bir analizator faoliyatini ikkinchisi bajarishi yoki to'ldirishi"
  },
  {
    question: "Aqli zaiflikning eng og’ir darajasi bu?",
    options: ["idiot", "imbetsil", "debil", "organik demensiya"],
    correctAnswer: "idiot"
  },
  {
    question: "Aqli zaiflikning yengil darajasi bu?",
    options: ["idiot", "imbetsil", "debil", "organik demensiya"],
    correctAnswer: "debil"
  },
  {
    question: "Aqli zaiflikning o’rta darajasi bu?",
    options: ["idiot", "imbetsil", "debil", "organik demensiya"],
    correctAnswer: "imbetsil"
  },
  {
    question: "Qaysi fan ko'rishida nuqsoni bo'lgan bolalar bilan shug'ullanadi?",
    options: ["surdopedagogika", "logopediya", "tiflopedagogika", "oligofrenopedagogika"],
    correctAnswer: "tiflopedagogika"
  },
  {
    question: "Aqli zaif bolalar ta'limi, tarbiyasi hamda ular taraqqiyotidagi ruhiy, jismoniy nuqsonlarni to'g'rilovchi fan qaysi?",
    options: ["Oligofrenopedagogika", "Tiflopedagogika", "Logopediya", "Surdopedagogika"],
    correctAnswer: "Oligofrenopedagogika"
  },
  {
    question: "Oligofrenopedagogika fani mavzu bahsini aniqlang.",
    options: [
      "Ko'rishda nuqsoni bor bolalar ta'lim-tarbiyasi va rivojlanishidir",
      "Eshitishda nuqsoni bor bolalar ta'lim-tarbiyasi va rivojlanishidir",
      "Aqlan nuqsonli bolalar ta'lim-tarbiyasi va rivojlanishidir",
      "Nutqida nuqsoni bor bolalar ta'lim-tarbiyasi va rivojlanishidir"
    ],
    correctAnswer: "Aqlan nuqsonli bolalar ta'lim-tarbiyasi va rivojlanishidir"
  },
  {
    question: "Aqli zaiflikning kelib chiqishiga ko'ra qanday sabablari mayjud?",
    options: ["Endogen, ekzogen", "Polimorf, monomorf", "Ijtimoiy, ekologik", "sodda, murakkab"],
    correctAnswer: "Endogen, ekzogen"
  },
  {
    question: "Aqliy qoloqlikning asosiy belgilari berilmagan qatorni toping",
    options: [
      "bosh miyada organik buzilishning mavjudligi",
      "bilish faoliyatlarining umumiy, chuqur buzilganligi",
      "bilish faoliyatlari buzilganligining turg'un xarakterdaligi",
      "aqliy jihatdan saqlangan bo'lib, chuqur nutq kamchiliklari bo'lgan bolalar"
    ],
    correctAnswer: "aqliy jihatdan saqlangan bo'lib, chuqur nutq kamchiliklari bo'lgan bolalar"
  },
  {
    question: "Salbiy ta'sirlarning bola organizmiga ikki yoshidan keyingi ta'siridan kelib chiqadigan oligofreniya _____ deb yuritiladi.",
    options: ["Demensiya", "Aqliy qoloqlik", "Karlik", "Ruhiy rivojlanishi sustashgan"],
    correctAnswer: "Demensiya"
  },
  {
    question: "Korreksiya bu:?",
    options: [
      "Nuqsonlarni tuzatish, yumshatish, qisqartirish",
      "Rivojlanishda nuqsoni bo'lgan bolalarni o'qitish usuli",
      "Ta'lim-tarbiya olish ishlari",
      "Bir analizator faoliyatini ikkinchisiga yuklatish"
    ],
    correctAnswer: "Nuqsonlarni tuzatish, yumshatish, qisqartirish"
  },
  {
    question: "Hozirgi kunda anomal bolalar qanday atamalar bilan nomlanadi?",
    options: [
      "Imkoniyati cheklangan bolalar",
      "Imkoniyati cheklanmagan bolalar",
      "Alohida ehtiyojmand bolalar",
      "Maxsus yordamga muhtoj bolalar"
    ],
    correctAnswer: "Imkoniyati cheklangan bolalar"
  },
  {
    question: "Ijtimoiy reabilitatsiya bu nima?",
    options: [
      "Rivojlanishida nuqsoni bo'lgan bolalarni jamiyatga moslashtirish",
      "Nuqsonlarni kompensatsiyalash",
      "Nuqsonlarni tuzatish, korreksiyalash",
      "Alohida ko'makka muhtoj kishilarni jamiyatga tiklash"
    ],
    correctAnswer: "Alohida ko'makka muhtoj kishilarni jamiyatga tiklash"
  },
  {
    question: "Ta’limda integratsiya bu...",
    options: [
      "Ta'lim jarayonlarni tabaqalashtirish",
      "Ta'lim jarayonlarni uyg'unlashtirish",
      "Ta'lim jarayonlarni takomillashtirish",
      "Ta'lim jarayonlarni bog'lash"
    ],
    correctAnswer: "Ta'lim jarayonlarni uyg'unlashtirish"
  },
  {
    question: "Nutqning to'g'ri shakllanishi nimalarga bog'liq?",
    options: [
      "Atrofdagilar nutqiga, tajribaga, to'g'ri nutq muhitiga, ta'lim – tarbiyaga",
      "Jismoniy rivojlanishga, harakatlanishga",
      "Tug'ma qobiliyatga",
      "Axloqiy, aqliy rivojlanishga"
    ],
    correctAnswer: "Atrofdagilar nutqiga, tajribaga, to'g'ri nutq muhitiga, ta'lim – tarbiyaga"
  },
  {
    question: "Qanday bolalarni alohida ko'makka muhtoj bolalar deyiladi?",
    options: [
      "Ruhiy va jismoniy kamchiligi bor bolalar",
      "Kasallikka ko'p chalinuvchi bolalar",
      "Talaffuzida kamchiligi bor bolalar",
      "RRS bolalar"
    ],
    correctAnswer: "Ruhiy va jismoniy kamchiligi bor bolalar"
  },
  {
    question: "Murakkab nuqson bu...",
    options: [
      "Ikki va undan ortiq nuqsonlarning birgalikda kuzatilishi",
      "Kar, ko'r, oligofren",
      "BSF, raxit, anartriya",
      "Markaziy va organik xarakterdagi nutq buzilishidir"
    ],
    correctAnswer: "Ikki va undan ortiq nuqsonlarning birgalikda kuzatilishi"
  },
  {
    question: "Reabilitatsiya bu...",
    options: ["Qayta davolash", "Qayta tuzatish", "Qayta tiklash", "Qayta tarbiyalash"],
    correctAnswer: "Qayta tiklash"
  },
  {
    question: "Bolaning nutqni o'zlashtirishi unga qanday imkoniyatlar beradi?",
    options: [
      "Ongli harakat qilishni",
      "Xatti-harakatlarni tartibga solish",
      "To'g'ri yozishni",
      "To'g'ri tushunishni"
    ],
    correctAnswer: "Xatti-harakatlarni tartibga solish"
  },
  {
    question: "Kompleks reabilitatsiya bu...",
    options: [
      "Tibbiy-pedagogik-psixologik",
      "Ijtimoiy-psixologik",
      "Logopedik-ijtimoiy-psixologik",
      "Tibbiy-ijtimoiy"
    ],
    correctAnswer: "Tibbiy-pedagogik-psixologik"
  },
  {
    question: "Oligofreniyaning nechta darajasi mavjud?",
    options: [
      "2 ta darajasi (orttirilgan va irsiy)",
      "1 ta darajasi (organik demensiya)",
      "3 ta darajasi (debil, imbetsil, idiot)",
      "Darajalari mavjud emas"
    ],
    correctAnswer: "3 ta darajasi (debil, imbetsil, idiot)"
  },
  {
    question: "Oligofreniyaning yengil darajasi bu...",
    options: ["Debillik", "Imbetsillik", "Idiotizm", "Shizofreniya"],
    correctAnswer: "Debillik"
  },
  {
    question: "Oligofreniyaning o‘rta darajasi bu...",
    options: ["Debillik", "Idiotizm", "Shizofreniya", "Imbetsillik"],
    correctAnswer: "Imbetsillik"
  },
  {
    question: "Oligofreniyaning og‘ir darajasi bu...",
    options: ["Idiotizm", "Imbetsillik", "Shizofreniya", "Debillik"],
    correctAnswer: "Idiotizm"
  },
  {
    question: "Karlik bu ...",
    options: [
      "Bosh miyaning organik jaroxatlanishi natijasida eshitish faoliyatining turg'un buzilishi",
      "Ichki quloq patalogiyasi",
      "Tashqi quloq patalogiyasi",
      "Broka va Vernike zonalarining zararlanishi"
    ],
    correctAnswer: "Bosh miyaning organik jaroxatlanishi natijasida eshitish faoliyatining turg'un buzilishi"
  },
  {
    question: "Aqli zaiflikning eng og'ir darajasi bu:",
    options: ["Idiot", "Imbetsillik", "Debil", "Ruxiy rivojlanishi sust"],
    correctAnswer: "Idiot"
  },
  {
    question: "Ruxiy rivojlanishi sust bolaning eng og'ir shakli qaysi?",
    options: ["Somatogen", "Serebral", "Konstitutsiyaviy", "Psixogen"],
    correctAnswer: "Serebral"
  },
  {
    question: "Mujassam nuqsonlar ichida eng ko'p tarqalgan nuqson bu ...",
    options: ["Nutqiy nuqson", "Sensor nuqson", "Aqliy nuqson", "BSF"],
    correctAnswer: "Aqliy nuqson"
  },
  {
    question: "Inklyuziv ta’lim joriy qilingan maktablarda kimlar faoliyat yuritadi?",
    options: [
      "logoped defektolog, ortoped, tyutor o'qituvchilar",
      "logoped defektolog, pediatr, tyutor o'qituvchilar",
      "logoped defektolog, psixolog, tyutor o'qituvchilar",
      "logoped defektolog, lingvist, tyutor o'qituvchilar"
    ],
    correctAnswer: "logoped defektolog, psixolog, tyutor o'qituvchilar"
  },
  {
    question: "Logopedning kasbiy faoliyatiga...",
    options: [
      "Tashxis qilish, korreksion-rivojlantiruvchi ish, tashkiliy-metodik, maslahat va profilaktik ishlar kiradi",
      "Tashxis qilish, korreksion-rivojlantiruvchi ishlar kiradi",
      "Tashxis qilish, korreksion-rivojlantiruvchi ish, maslahat ishlari kiradi",
      "Tashxis qilish, tashkiliy-metodik, maslahat va profilaktik ishlar kiradi"
    ],
    correctAnswer: "Tashxis qilish, korreksion-rivojlantiruvchi ish, tashkiliy-metodik, maslahat va profilaktik ishlar kiradi"
  },
  {
    question: "Inklyuziv ta’lim bu -?",
    options: [
      "Rivojlanishida nuqsoni mavjud bo'lgan bolalarning ta'lim olishi uchun maxsus muassasalarda ta'lim jarayonini tashkil etish",
      "Rivojlanishida nuqsoni mavjud bo'lgan bolalarning sog'lom tengdoshlari bilan bir qatorda ta'lim olishi",
      "Rivojlanishida nuqsoni mavjud bo'lgan bolalarning uy ta'limiga jalb etish",
      "Rivojlanishida nuqsoni mavjud bo'lgan bolalarning tibbiyot punktlariga jalb etish"
    ],
    correctAnswer: "Rivojlanishida nuqsoni mavjud bo'lgan bolalarning sog'lom tengdoshlari bilan bir qatorda ta'lim olishi"
  },
  {
    question: "Inklyuziv so'zi ingliz tilidan olingan bo'lib inclusive, inclusion – ya'ni ……. ma'nosini anglatadi.",
    options: ["Do'stlashmoq", "O'rin almashmoq", "Uyg'unlashmoq", "Imkoniyat bermoq"],
    correctAnswer: "Uyg'unlashmoq"
  },
  {
    question: "Eshitishida nuqsoni bo'lgan bolalarda nutq rivojlanishi qanday bo'ladi?",
    options: ["Tezlashadi", "Oddiy rivojlanadi", "Umuman rivojlanmaydi", "Sezilarli orqada qoladi"],
    correctAnswer: "Sezilarli orqada qoladi"
  },
  {
    question: "Eshitishida nuqsoni bo'lgan bolalar uchun asosiy muammo nimada?",
    options: ["Ko'rishda", "Nutqni egallashda", "Jismoniy harakatlarda", "Xotirada"],
    correctAnswer: "Nutqni egallashda"
  },
  {
    question: "Kar bolalarda qaysi analizator asosiy kompensator rolini o'ynaydi?",
    options: ["Hid bilish", "Ko'rish", "Ta'm bilish", "Sezgi"],
    correctAnswer: "Ko'rish"
  },
  {
    question: "Kar va zaif eshituvchi bolalarda qaysi usul yordamida nutq o'rgatiladi?",
    options: [
      "Sport mashg'ulotlari",
      "Matematik o'yinlar",
      "Daktil (barmoqlar alifbosi)",
      "Rasm chizish"
    ],
    correctAnswer: "Daktil (barmoqlar alifbosi)"
  },
  {
    question: "Zaif eshituvchi bolalarda qaysi vosita yordamchi hisoblanadi?",
    options: ["Mikroskop", "Eshitish apparati", "Teleskop", "Magnitofon"],
    correctAnswer: "Eshitish apparati"
  },
  {
    question: "Eshitishida nuqsoni bo'lgan bolalarda ko'pincha qanday psixik xususiyat kuzatiladi?",
    options: [
      "Diqqatning kuchayishi",
      "Tez asabiylashish",
      "Muloqotda qiyinchilik",
      "Nutqning tezligi oshishi"
    ],
    correctAnswer: "Tez asabiylashish"
  },
  {
    question: "Eshitishida nuqsoni bo'lgan bolalar ta'lim olishi uchun qanday maktablar mavjud?",
    options: [
      "Umumiy o'rta maktablar",
      "Musiqa maktablari",
      "Maxsus (korreksion) maktablar",
      "Sport maktablari"
    ],
    correctAnswer: "Maxsus (korreksion) maktablar"
  },
  {
    question: "Kar bolalar ijtimoiylashuvida asosiy to'siq nimada kuzatiladi?",
    options: [
      "O'yinchoqlarning yetishmasligi",
      "Nutqiy muloqotning qiyinlashuvi",
      "Jismoniy kuchsizlik",
      "Ko'rish muammolari"
    ],
    correctAnswer: "Nutqiy muloqotning qiyinlashuvi"
  },
  {
    question: "Qachon bola nutqini yaxshi rivojlantirish uchun eshitish apparatidan foydalanish muhim hisoblanadi?",
    options: [
      "10 yoshdan keyin",
      "Erta yoshdan (2–3 yoshdan)",
      "15 yoshdan keyin",
      "20 yoshdan keyin"
    ],
    correctAnswer: "Erta yoshdan (2–3 yoshdan)"
  },
  {
    question: "Daktil nutq nima?",
    options: [
      "Ko'rish orqali nutqni anglash",
      "Yozma nutq",
      "Qo'l barmoqlari orqali alifboni ifodalash",
      "Harakat bilan ko'rsatish"
    ],
    correctAnswer: "Qo'l barmoqlari orqali alifboni ifodalash"
  },
  {
    question: "Kar bolalar nutqini o'rgatishda qo'shimcha vosita sifatida qaysi usuldan foydalaniladi?",
    options: [
      "Telefon orqali muloqot",
      "Ovoz kuchaytirgich",
      "Labdan o'qish",
      "Yozuv mashinkasi"
    ],
    correctAnswer: "Labdan o'qish"
  },
  {
    question: "Eshitishida nuqsoni bo'lgan bolalar nutqidagi asosiy xususiyat nima?",
    options: [
      "Juda tez gapirish",
      "Ohangsizlik",
      "Juda aniq talaffuz",
      "Buzilgan talaffuz"
    ],
    correctAnswer: "Buzilgan talaffuz"
  },
  {
    question: "Kar bolalarda muloqot qaysi yo'l bilan amalga oshiriladi?",
    options: [
      "Yozuv va daktil nutq orqali",
      "Ovoz orqali",
      "Radio orqali",
      "Ismlar orqali"
    ],
    correctAnswer: "Yozuv va daktil nutq orqali"
  },
  {
    question: "Kar bolalar uchun maxsus maktab-internatlarda asosiy maqsad nima?",
    options: [
      "Sportni rivojlantirish",
      "Faqat yozishni o'rgatish",
      "Nutq va muloqotni rivojlantirish",
      "San'atga o'rgatish"
    ],
    correctAnswer: "Nutq va muloqotni rivojlantirish"
  },
  {
    question: "Kar va zaif eshituvchi bolalar ta'limida eng muhim shart?",
    options: [
      "A) Ko'plab o'yinchoqlar",
      "B) Qiziqarli ertaklar",
      "C) Moslashtirilgan metod va vositalar",
      "D) Matematik bilimlar"
    ],
    correctAnswer: "C) Moslashtirilgan metod va vositalar"
  },
  {
    question: "Eshitishida nuqsoni bo'lgan bolalarda ko'pincha qaysi xulqiy xususiyat kuzatiladi?",
    options: [
      "Juda ochiqko'ngillik",
      "Tortinchoqlik va yopiq bo'lish",
      "Juda ko'p gapirish",
      "Jizzakilikning yo'qligi"
    ],
    correctAnswer: "Tortinchoqlik va yopiq bo'lish"
  },
  {
    question: "Eshitishida nuqsoni bo'lgan bolalarda intellekt qanday rivojlanadi?",
    options: [
      "Umuman rivojlanmaydi",
      "Normaga yaqin bo'ladi",
      "Juda yuqori bo'ladi",
      "Har doim past bo'ladi"
    ],
    correctAnswer: "Normaga yaqin bo'ladi"
  },
  {
    question: "Kar bolalarning emotsional rivojlanishi qanday bo'ladi?",
    options: [
      "Oddiy bolalarnikiga teng",
      "Cheklangan",
      "Juda yuqori",
      "Umuman rivojlanmaydi"
    ],
    correctAnswer: "Cheklangan"
  },
  {
    question: "Kar bolalar o'z fikrlarini qanday ifodalaydi?",
    options: [
      "Ovoz chiqarib gapirish orqali",
      "Musiqa orqali",
      "Daktil va yozma nutq orqali",
      "Rasm orqali"
    ],
    correctAnswer: "Daktil va yozma nutq orqali"
  },
  {
    question: "Kar bolalar bilan ishlovchi maxsus pedagog kim deb ataladi?",
    options: ["Logoped", "Psixolog", "Surdopedagog", "Defektolog"],
    correctAnswer: "Surdopedagog"
  },
  {
    question: "Autizmning asosiy belgilari qaysilar?",
    options: [
      "Juda ko'p gapirish va faollik",
      "Muloqot va ijtimoiy munosabatlarda qiyinchilik",
      "Juda kuchli xotira",
      "Tez o'rganish qobiliyati"
    ],
    correctAnswer: "Muloqot va ijtimoiy munosabatlarda qiyinchilik"
  },
  {
    question: "Autizm sindromli bolalarda ko'proq qaysi xulq kuzatiladi?",
    options: [
      "Oson do'stlashish",
      "Yakkalanib qolish",
      "Tez nutq rivojlanishi",
      "Juda ko'p kulish"
    ],
    correctAnswer: "Yakkalanib qolish"
  },
  {
    question: "Autizmli bolalarning nutqi odatda qanday bo'ladi?",
    options: [
      "Juda tez rivojlanadi",
      "Har doim normal bo'ladi",
      "Kechikkan yoki buzilgan",
      "Juda baland bo'ladi"
    ],
    correctAnswer: "Kechikkan yoki buzilgan"
  },
  {
    question: "Autizmli bolalar ko'pincha nimaga qiziqishadi?",
    options: [
      "Ko'p do'st orttirishga",
      "Guruhli o'yinlarga",
      "Tor doiradagi narsalarga (masalan, bir xil o'yinchoq, sonlar, tartib)",
      "Musiqiy asbob chalishga"
    ],
    correctAnswer: "Tor doiradagi narsalarga (masalan, bir xil o'yinchoq, sonlar, tartib)"
  },
  {
    question: "Autizm sindromida ijtimoiy muomala qanday bo'ladi?",
    options: [
      "Juda faol",
      "Cheklangan va qiyin",
      "Oddiy bolalardek",
      "O'ta tezkor"
    ],
    correctAnswer: "Cheklangan va qiyin"
  },
  {
    question: "Autizmli bolalarda qaysi sezgi ko'pincha kuchaygan bo'ladi?",
    options: [
      "Nutq sezgisi",
      "Sezgi va his-hayajonlarga sezgirlik",
      "Ko'rishning sustligi",
      "Eshitishning yo'qligi"
    ],
    correctAnswer: "Sezgi va his-hayajonlarga sezgirlik"
  },
  {
    question: "Autizmli bolalar bilan ishlashda eng muhim usul qaysi?",
    options: [
      "Jismoniy mashqlarni ko'paytirish",
      "Faqat yozma topshiriqlar berish",
      "Maxsus pedagogik va psixologik qo'llab-quvvatlash",
      "Ovoz kuchaytirgichdan foydalanish"
    ],
    correctAnswer: "Maxsus pedagogik va psixologik qo'llab-quvvatlash"
  },
  {
    question: "Autizmli bolalarning qaysi sohada qiyinchiliklari ko'proq bo'ladi?",
    options: ["Sportda", "Ijtimoiy muloqotda", "Xotira mashqlarida", "Ko'rishda"],
    correctAnswer: "Ijtimoiy muloqotda"
  },
  {
    question: "Autizm sindromi ko'pincha qaysi yoshda sezila boshlaydi?",
    options: ["10 yoshdan keyin", "2–3 yosh atrofida", "7–8 yoshda", "Faqat balog'at yoshida"],
    correctAnswer: "2–3 yosh atrofida"
  },
  {
    question: "Autizmli bolalar uchun maxsus pedagog kim deb ataladi?",
    options: ["Logoped", "Surdopedagog", "Oligofrenopedagog", "Defektolog"],
    correctAnswer: "Oligofrenopedagog"
  },
  {
    question: "Shaxsning o'zini atrof-olamdan olib qochishi hamda o'zining ichki dunyosida yashashi bu – …",
    options: ["Afaziya", "Tarbiya", "Adaptatsiya", "Autizm"],
    correctAnswer: "Autizm"
  },
  {
    question: "Daun sindromi qanday xromosoma buzilishiga bog'liq?",
    options: ["45 xromosoma", "46 xromosoma", "47 xromosoma", "44 xromosoma"],
    correctAnswer: "47 xromosoma"
  },
  {
    question: "Daun sindromli bolalarda eng ko'p uchraydigan tashqi belgi?",
    options: ["Quloq kattaligi", "Oq tishlar", "Mongoloid ko'z shakli", "Qalin soqol"],
    correctAnswer: "Mongoloid ko'z shakli"
  },
  {
    question: "Daun sindromining sababi?",
    options: [
      "Virus",
      "21-xromosomaning trisomiyasi",
      "Bakteriya",
      "Vitamin yetishmasligi"
    ],
    correctAnswer: "21-xromosomaning trisomiyasi"
  },
  {
    question: "Daun sindromida bolaning yuz tuzilishi qanday bo'ladi?",
    options: ["Uzunchoq", "Yumaloq", "Kvadrat", "Uzoq"],
    correctAnswer: "Yumaloq"
  },
  {
    question: "Daun sindromi qanday turdagi nuqson hisoblanadi?",
    options: ["Somatik", "Genetik", "Irsiy bo'lmagan", "Ruhiy"],
    correctAnswer: "Genetik"
  },
  {
    question: "Daun sindromli bolalarda ko'pincha qaysi kasalliklar ham uchraydi?",
    options: [
      "Yurak nuqsonlari",
      "Jigar kasalliklari",
      "Terida toshma",
      "Siydik yo'li infeksiyasi"
    ],
    correctAnswer: "Yurak nuqsonlari"
  },
  {
    question: "Daun sindromida ko'pincha qanday aqliy rivojlanish bo'ladi?",
    options: ["O'ta yuqori", "O'rtacha", "Past darajada", "Normal"],
    correctAnswer: "Past darajada"
  },
  {
    question: "Daun sindromida mushaklar qanday bo'ladi?",
    options: ["Kuchli", "Gipertonus", "Gipotonus", "Oddiy"],
    correctAnswer: "Gipotonus"
  },
  {
    question: "Daun sindromli bolalarda nutq rivojlanishi qanday?",
    options: ["Juda tez", "Kechikkan", "Oddiy", "Normadan yuqori"],
    correctAnswer: "Kechikkan"
  },
  {
    question: "Daun sindromli bolalarda qaysi ko'nikmalar qiyin rivojlanadi?",
    options: ["Motorika", "Sport", "Musiqa", "San'at"],
    correctAnswer: "Motorika"
  },
  {
    question: "Daun sindromli bolaning o'qitilishida muhim yo'nalish?",
    options: [
      "Oddiy sinflarda qat'iy nazorat",
      "Maxsus pedagogik yondashuv",
      "Mustaqil ta'lim",
      "Oddiy dars"
    ],
    correctAnswer: "Maxsus pedagogik yondashuv"
  },
  {
    question: "Daun sindromida bolaning tashqi belgilari nechanchi yoshda yaqqol seziladi?",
    options: ["1 oy", "10 yosh", "15 yosh", "20 yosh"],
    correctAnswer: "1 oy"
  },
  {
    question: "Daun sindromli bolalarda ko'proq qaysi qobiliyat rivojlangan bo'ladi?",
    options: ["Musiqa va mehribonlik", "Matematika", "Fizika", "Sport"],
    correctAnswer: "Musiqa va mehribonlik"
  },
  {
    question: "Daun sindromli bolalar ko'pincha qanday xulq-atvorga ega?",
    options: [
      "Tajovuzkor",
      "Qiziqgon",
      "Ochiqko'ngil va samimiy",
      "Qo'rqoq"
    ],
    correctAnswer: "Ochiqko'ngil va samimiy"
  },
  {
    question: "Daun sindromli bolalarni ijtimoiylashtirish uchun asosiy vosita?",
    options: [
      "Musiqa, o'yin, muloqot",
      "Kimyo fanidan dars",
      "Yolg'iz qolish",
      "Tanaffussiz o'qish"
    ],
    correctAnswer: "Musiqa, o'yin, muloqot"
  },
  {
    question: "Aqliy rivojlanishida nuqson nima?",
    options: [
      "Jismoniy nuqson",
      "Nutqning buzilishi",
      "Intellektual rivojlanishning orqada qolishi",
      "Quloq eshitmasligi"
    ],
    correctAnswer: "Intellektual rivojlanishning orqada qolishi"
  },
  {
    question: "Bunday bolalarda qaysi faoliyat ko'proq qiyin kechadi?",
    options: ["O'yin", "O'qish va yozish", "Sport", "Rasm"],
    correctAnswer: "O'qish va yozish"
  },
  {
    question: "Aqliy rivojlanishida nuqson ko'pincha nimaga olib keladi?",
    options: [
      "Yuqori IQ",
      "Ijtimoiy moslashishdagi qiyinchilik",
      "Sportga qiziqish",
      "Nutqning tez rivojlanishi"
    ],
    correctAnswer: "Ijtimoiy moslashishdagi qiyinchilik"
  },
  {
    question: "Aqliy rivojlanishida nuqsoni bo'lgan bolalarga qanday ta'lim usuli kerak?",
    options: [
      "Maxsus pedagogik yondashuv",
      "Oddiy darslar",
      "Musiqa darsi",
      "Mustaqil ta'lim"
    ],
    correctAnswer: "Maxsus pedagogik yondashuv"
  },
  {
    question: "Aqliy nuqsonli bolalarda qaysi xotira turi zaifroq?",
    options: ["Emotsional", "Ixtiyorsiz", "Ixtiyoriy", "Vizual"],
    correctAnswer: "Ixtiyoriy"
  },
  {
    question: "Bunday bolalarda nutqning rivojlanishi qanday?",
    options: ["Juda tez", "Kechikkan", "Normada", "Juda boy"],
    correctAnswer: "Kechikkan"
  },
  {
    question: "Oligofreniya nima?",
    options: ["Jismoniy zaiflik", "Ko'rish nuqsoni", "Aqliy zaiflik", "Nutq nuqsoni"],
    correctAnswer: "Aqliy zaiflik"
  },
  {
    question: "Aqliy rivojlanishda nuqsonning eng yengil darajasi nima?",
    options: ["Idiotiya", "Debillik", "Imbesillik", "Normada"],
    correctAnswer: "Debillik"
  },
  {
    question: "Aqliy rivojlanishda nuqsonli bolalarda ko'proq qanday fanlar qiyin bo'ladi?",
    options: [
      "Jismoniy tarbiya",
      "Matematika va ona tili",
      "Musiqa",
      "Tasviriy san'at"
    ],
    correctAnswer: "Matematika va ona tili"
  },
  {
    question: "Aqliy nuqsonli bolalarni qo'llab-quvvatlash uchun eng muhim narsa?",
    options: [
      "Sabr-toqat va maxsus yondashuv",
      "Qattiq tanbeh",
      "Murakkab topshiriqlar",
      "Mustaqil o'qish"
    ],
    correctAnswer: "Sabr-toqat va maxsus yondashuv"
  },
  {
    question: "Aqliy rivojlanishda nuqsonli bolalarda ko'pincha qaysi ko'nikma yaxshi rivojlanadi?",
    options: [
      "Mexanik eslab qolish",
      "Murakkab mantiq",
      "Abstrakt tafakkur",
      "Fizika"
    ],
    correctAnswer: "Mexanik eslab qolish"
  },
  {
    question: "Aqliy rivojlanishda nuqson sabablari?",
    options: [
      "Irsiy va tashqi omillar",
      "Faqat shamollash",
      "Faqat virus",
      "Faqat ona yoshi"
    ],
    correctAnswer: "Irsiy va tashqi omillar"
  },
  {
    question: "Nuqsonli bolalarda qaysi yordam muhim?",
    options: [
      "Defektolog va logoped bilan ishlash",
      "Mustaqil o'qish",
      "Sport musobaqalari",
      "Faqat dori"
    ],
    correctAnswer: "Defektolog va logoped bilan ishlash"
  },
  {
    question: "Aqliy rivojlanishida nuqsonli bolalarni ijtimoiylashtirish uchun nima kerak?",
    options: [
      "O'yin, muloqot va amaliy mashg'ulot",
      "Kitob o'qimaslik",
      "Yolg'iz qoldirish",
      "Qattiq nazorat"
    ],
    correctAnswer: "O'yin, muloqot va amaliy mashg'ulot"
  },
  {
    question: "Ruhiy rivojlanishi sustlashgan bola qanday ta'riflanadi?",
    options: [
      "Intellekti yuqori",
      "Normadan sekinroq rivojlangan",
      "Juda tez rivojlangan",
      "Jismoniy sust"
    ],
    correctAnswer: "Normadan sekinroq rivojlangan"
  },
  {
    question: "Ruhiy rivojlanishi sustlashgan bolalarda diqqat qanday bo'ladi?",
    options: [
      "Juda kuchli",
      "Zaif va tez chalg'iydi",
      "Oddiy",
      "Juda kuchaygan"
    ],
    correctAnswer: "Zaif va tez chalg'iydi"
  },
  {
    question: "Ruhiy rivojlanishi sustlashgan bolalarda ko'pincha qanday qiyinchilik bo'ladi?",
    options: ["Yozish va o'qishda", "Sportda", "Qo'shiq aytishda", "Rasmda"],
    correctAnswer: "Yozish va o'qishda"
  },
  {
    question: "Rivojlanishi sustlashgan bolalarda emotsiya qanday?",
    options: ["Juda tezkor", "Tez o'zgaruvchan", "Mutlaqo yo'q", "Oddiy"],
    correctAnswer: "Tez o'zgaruvchan"
  },
  {
    question: "Ruhiy rivojlanishi sustlashgan bolalar uchun eng mos ta'lim shakli?",
    options: [
      "Maxsus tuzatilgan dastur",
      "Oddiy maktab",
      "Mustaqil o'qish",
      "Universitet"
    ],
    correctAnswer: "Maxsus tuzatilgan dastur"
  },
  {
    question: "Ruhiy rivojlanishi sustlashgan bolalarning asosiy xususiyati?",
    options: ["Aqliy kechikish", "Jismoniy kuch", "Musiqiy qobiliyat", "Ko'rish"],
    correctAnswer: "Aqliy kechikish"
  },
  {
    question: "Rivojlanishi sustlashgan bolalarda qaysi xotira ko'proq qiyin rivojlanadi?",
    options: ["Ixtiyoriy", "Mexanik", "Vizual", "Emotsional"],
    correctAnswer: "Ixtiyoriy"
  },
  {
    question: "Sustlashgan rivojlanish ko'proq qaysi yoshda aniqlanadi?",
    options: ["1 yosh", "Maktabgacha davr", "20 yosh", "15 yosh"],
    correctAnswer: "Maktabgacha davr"
  },
  {
    question: "Rivojlanishi sustlashgan bolalarda nutq qanday bo'ladi?",
    options: ["Normal", "Kechikkan", "Juda yuqori", "Mukammal"],
    correctAnswer: "Kechikkan"
  },
  {
    question: "Rivojlanishi sustlashgan bolalar darsda qanday bo'lishadi?",
    options: [
      "Juda faol",
      "Tez chalg'iydigan",
      "Juda intizomli",
      "Mustaqil"
    ],
    correctAnswer: "Tez chalg'iydigan"
  },
  {
    question: "Ruhiy rivojlanishi sustlashgan bolalar bilan kim ishlaydi?",
    options: ["Jarroh", "Defektolog", "Onkolog", "Travmatolog"],
    correctAnswer: "Defektolog"
  },
  {
    question: "Ruhiy rivojlanishi sustlashgan bolalarga qanday mashg'ulot foydali?",
    options: [
      "Didaktik o'yinlar",
      "Murakkab matematika",
      "Kimyo",
      "Sport musobaqasi"
    ],
    correctAnswer: "Didaktik o'yinlar"
  },
  {
    question: "Ruhiy rivojlanishi sustlashgan bolalarning asosiy sababi?",
    options: [
      "Irsiy va tashqi omillar",
      "Faqat shamollash",
      "Faqat ona yoshi",
      "Faqat noto'g'ri ovqatlanish"
    ],
    correctAnswer: "Irsiy va tashqi omillar"
  },
  {
    question: "Ruhiy rivojlanishi sustlashgan bolalarda qaysi yordam muhim?",
    options: [
      "O'qituvchi, ota-ona va defektolog hamkorligi",
      "Mustaqil o'qish",
      "Yolg'iz qolish",
      "Qattiq tanbeh"
    ],
    correctAnswer: "O'qituvchi, ota-ona va defektolog hamkorligi"
  },
  {
    question: "Sust rivojlanishli bolalarni ijtimoiylashtirishning samarali yo'li?",
    options: [
      "O'yin va muloqot",
      "Ularni ajratish",
      "Og'ir topshiriqlar",
      "Kitobni ko'p berish"
    ],
    correctAnswer: "O'yin va muloqot"
  },
  {
    question: "Art-terapiya nima?",
    options: [
      "Musiqa mashg'uloti",
      "San'at orqali davolash",
      "Sport mashg'uloti",
      "Faoliyat rejalashtirish"
    ],
    correctAnswer: "San'at orqali davolash"
  },
  {
    question: "Art-terapiya qaysi sohada ko'proq qo'llaniladi?",
    options: ["Mexanika", "Psixologiya", "Fizika", "Matematika"],
    correctAnswer: "Psixologiya"
  },
  {
    question: "Art-terapiyada qanday vositalar ishlatiladi?",
    options: [
      "Rasmlar, ranglar, loy",
      "Kompyuter texnikasi",
      "Mashina detali",
      "Fizik asbob"
    ],
    correctAnswer: "Rasmlar, ranglar, loy"
  },
  {
    question: "Art-terapiyaning asosiy maqsadi nima?",
    options: [
      "Kasallikni butkul davolash",
      "Shaxsning ichki holatini ifodalash",
      "Jismoniy mashq qilish",
      "Ovqatlanishni yaxshilash"
    ],
    correctAnswer: "Shaxsning ichki holatini ifodalash"
  },
  {
    question: "Art-terapiya bolalar uchun qanday foyda beradi?",
    options: [
      "Jismoniy kuchni oshiradi",
      "Ijodiy fikrlash va emotsiyalarni boshqarishni rivojlantiradi",
      "Matematika qobiliyatini oshiradi",
      "Texnikani tushunishni kuchaytiradi"
    ],
    correctAnswer: "Ijodiy fikrlash va emotsiyalarni boshqarishni rivojlantiradi"
  },
  {
    question: "Art-terapiya kimlar uchun tavsiya qilinadi?",
    options: [
      "Faqat sog'lom odamlarga",
      "Stress, qo'rquv yoki rivojlanish qiyinchiliklari bo'lganlarga",
      "Faqat o'qituvchilarga",
      "Faqat sportchilarga"
    ],
    correctAnswer: "Stress, qo'rquv yoki rivojlanish qiyinchiliklari bo'lganlarga"
  },
  {
    question: "Art-terapiya usullaridan biri:",
    options: [
      "Matematika hisoblash",
      "Ranglar bilan rasm chizish",
      "Sport mashg'uloti",
      "Kimyo tajribasi"
    ],
    correctAnswer: "Ranglar bilan rasm chizish"
  },
  {
    question: "Qaysi mashhur psixoterapevt art-terapiya rivojlanishiga hissa qo'shgan?",
    options: ["Zigmund Freyd", "Nikola Tesla", "Arximed", "I. Nyuton"],
    correctAnswer: "Zigmund Freyd"
  },
  {
    question: "Bolalarda art-terapiya ko'proq nimani rivojlantiradi?",
    options: [
      "Motorika va nutqni",
      "Sport qobiliyatini",
      "Texnika tushunchasini",
      "Kimyo bilimlarini"
    ],
    correctAnswer: "Motorika va nutqni"
  },
  {
    question: "Art-terapiyada ranglarning ahamiyati nimada?",
    options: [
      "Hech qanday ahamiyati yo'q",
      "Kayfiyat va emotsiyani ifodalaydi",
      "Faqat chiroyli ko'rsatadi",
      "Texnika sifatini oshiradi"
    ],
    correctAnswer: "Kayfiyat va emotsiyani ifodalaydi"
  },
  {
    question: "Loy bilan ishlash qanday art-terapiya turi hisoblanadi?",
    options: [
      "Grafoterapiya",
      "Skulptura terapiyasi",
      "Musiqa terapiyasi",
      "Kitob terapiyasi"
    ],
    correctAnswer: "Skulptura terapiyasi"
  },
  {
    question: "Art-terapiya mashg'ulotlari nechta asosiy yo'nalishga ega?",
    options: [
      "2 ta (tasviriy, dramatik)",
      "3 ta (tasviriy, dramatik, musiqa)",
      "4 ta (tasviriy, dramatik, grafik va musiqa)",
      "1 ta (dramatik)"
    ],
    correctAnswer: "3 ta (tasviriy, dramatik, musiqa)"
  },
  {
    question: "Art-terapiya qaysi kasblar uchun ham qo'llaniladi?",
    options: [
      "Psixolog, defektolog va logopedlar",
      "Faqat muhandislar",
      "Faqat iqtisodchilar",
      "Faqat shifokor-terapevtlar"
    ],
    correctAnswer: "Psixolog, defektolog va logopedlar"
  },
  {
    question: "Art-terapiya qaysi yoshdagilarga mos?",
    options: [
      "Faqat bolalarga",
      "Faqat kattalarga",
      "Har qanday yoshdagilarga",
      "Faqat o'smirlarga"
    ],
    correctAnswer: "Har qanday yoshdagilarga"
  },
  {
    question: "Diagnostika qachon samaraliroq bo'ladi?",
    options: ["18 yoshda", "1-sinfda", "Erta yoshda", "20 yoshdan keyin"],
    correctAnswer: "Erta yoshda"
  },
  {
    question: "Qaysi mutaxassis diagnostikada qatnashadi?",
    options: ["Defektolog", "Faqat matematika o'qituvchisi", "Geograf", "Tarixchi"],
    correctAnswer: "Defektolog"
  },
  {
    question: "Kompleks diagnostika nimani anglatadi?",
    options: [
      "Faqat shifokor ko'rigi",
      "Faqat psixolog tekshiruvi",
      "Bir nechta mutaxassis ishtirokidagi baholash",
      "Faqat ota-ona kuzatuvi"
    ],
    correctAnswer: "Bir nechta mutaxassis ishtirokidagi baholash"
  },
  {
    question: "Veksler testi nimani o'lchaydi?",
    options: [
      "Nutq tovushlari",
      "Intellektual darajani",
      "Jismoniy rivojlanish",
      "Ko'rish qobiliyatini"
    ],
    correctAnswer: "Intellektual darajani"
  },
  {
    question: "Raven matritsasi qaysi sohani baholash uchun ishlatiladi?",
    options: ["Ko'rish", "Mantiqiy tafakkur", "Nutq tovushi", "Motorika"],
    correctAnswer: "Mantiqiy tafakkur"
  },
  {
    question: "Diagnostikaning asosiy prinsiplari qaysilar?",
    options: [
      "Erta aniqlash, kompleks yondashuv",
      "Yolg'iz tekshiruv",
      "Faqat dori bilan davolash",
      "Sport orqali tuzatish"
    ],
    correctAnswer: "Erta aniqlash, kompleks yondashuv"
  },
  {
    question: "Motorika rivojlanishini qanday aniqlash mumkin?",
    options: [
      "Raqs orqali",
      "Mayda va yirik harakat mashqlari orqali",
      "Kitob o'qitish",
      "Musiqa tinglatish"
    ],
    correctAnswer: "Mayda va yirik harakat mashqlari orqali"
  },
  {
    question: "Diagnostika natijalarining ahamiyati nimada?",
    options: [
      "Maxsus ta'lim dasturi tuzishda",
      "O'qituvchini baholash",
      "Faqat ota-onaga yordam",
      "Faqat sportga yo'naltirish"
    ],
    correctAnswer: "Maxsus ta'lim dasturi tuzishda"
  },
  {
    question: "Diagnostika kim tomonidan o'tkaziladi?",
    options: [
      "Shifokor, defektolog, logoped va psixolog",
      "Faqat tarixchi",
      "Faqat kimyogar",
      "Faqat trener"
    ],
    correctAnswer: "Shifokor, defektolog, logoped va psixolog"
  },
  {
    question: "Diagnostika qaysi yoshda albatta amalga oshirilishi kerak?",
    options: [
      "Maktabgacha yosh",
      "Universitet davrida",
      "20 yoshdan keyin",
      "Pensiya yoshida"
    ],
    correctAnswer: "Maktabgacha yosh"
  },
  {
    question: "Diagnostika natijasi asosida nima amalga oshiriladi?",
    options: [
      "O'yin tashkil etish",
      "Maxsus reabilitatsiya dasturi ishlab chiqish",
      "Sport musobaqasi o'tkazish",
      "Faqat ota-onani ogohlantirish"
    ],
    correctAnswer: "Maxsus reabilitatsiya dasturi ishlab chiqish"
  },
  {
    question: "“Biz nuqsonni emas, balki u yoki bu nuqsonli bolani o’rganishimiz kerak” usbu so’zlar kimga tegishli?",
    options: [
      "Lev Semyonovich Vigotskiy",
      "Alisher Navoiy",
      "Abu Rayhon Muhammad ibn Ahmad al-Beruniy",
      "Najmiddin Kubro"
    ],
    correctAnswer: "Lev Semyonovich Vigotskiy"
  },
  {
    question: "Inklyuziv ta’lim tushunchasi nimani anglatadi?",
    options: [
      "Faqat maxsus maktablarda ta'lim berish",
      "Nogironligi bo'lgan bolalarni jamiyatdan ajratish",
      "Nogironligi bor bolalarni umumiy ta'lim muassasalarida o'qitish",
      "Faqat alohida sinflarda ta'lim berish"
    ],
    correctAnswer: "Nogironligi bor bolalarni umumiy ta'lim muassasalarida o'qitish"
  },
  {
    question: "O‘zbekistonda inklyuziv ta’limni rivojlantirishning asosiy maqsadi nima?",
    options: [
      "Maxsus maktablarni ko'paytirish",
      "Hammani bir xil sharoitda o'qitish",
      "Har bir bolaning individual imkoniyatlarini hisobga olish",
      "Ta'lim tizimini qisqartirish"
    ],
    correctAnswer: "Har bir bolaning individual imkoniyatlarini hisobga olish"
  },
  {
    question: "Inklyuziv ta’lim sinflarida qanday bolalar ta’lim oladi?",
    options: [
      "Faqat sog'lom bolalar",
      "Nogironligi bo'lgan va bo'lmagan bolalar birgalikda",
      "Faqat eshitishida nuqsoni bo'lganlar",
      "Faqat ko'zi ojiz bolalar"
    ],
    correctAnswer: "Nogironligi bo'lgan va bo'lmagan bolalar birgalikda"
  },
  {
    question: "Inklyuziv ta’limni tashkil etishda qaysi tamoyil asosiy hisoblanadi?",
    options: [
      "Differensial yondashuv",
      "Ajratish",
      "O'qitishni cheklash",
      "Faqat maxsus o'qituvchilarni jalb qilish"
    ],
    correctAnswer: "Differensial yondashuv"
  },
  {
    question: "O‘zbekistonda inklyuziv ta’limni rivojlantirish dasturi qaysi yillarda boshlangan?",
    options: ["2000-yil", "2015-yil", "2019-yil", "1995-yil"],
    correctAnswer: "2019-yil"
  },
  {
    question: "Inklyuziv ta’limda “maxsus pedagog” kim?",
    options: [
      "Oddiy o'qituvchi",
      "Defektolog yoki logoped",
      "Matematika o'qituvchisi",
      "Ota-ona"
    ],
    correctAnswer: "Defektolog yoki logoped"
  },
  {
    question: "Inklyuziv ta’lim sinflarini tashkil etishda asosiy shartlardan biri nima?",
    options: [
      "Faqat maktab direktori qarori",
      "O'quvchilarni testdan o'tkazish",
      "Maxsus jihozlangan sinf va individual yondashuv",
      "Bolalarni ajratib o'qitish"
    ],
    correctAnswer: "Maxsus jihozlangan sinf va individual yondashuv"
  },
  {
    question: "“Hammani qamrab oluvchi ta’lim” tushunchasi qaysi atamaga mos keladi?",
    options: [
      "Inklyuziv ta'lim",
      "Maxsus ta'lim",
      "Masofaviy ta'lim",
      "An'anaviy ta'lim"
    ],
    correctAnswer: "Inklyuziv ta'lim"
  },
  {
    question: "Inklyuziv ta’limni tashkil etishda asosiy xalqaro hujjati qaysi?",
    options: [
      "BMT Konvensiyasi (Nogironlar huquqlari)",
      "UNESCO tavsiyalari",
      "Konstitutsiya",
      "O'zbekiston Respublikasi Qonuni"
    ],
    correctAnswer: "BMT Konvensiyasi (Nogironlar huquqlari)"
  },
  {
    question: "O‘zbekistonda inklyuziv ta’lim qaysi vazirlik tomonidan boshqariladi?",
    options: [
      "Vazirlar Mahkamasi",
      "Maktab direktorlar kengashi",
      "Maktab o'qituvchilari",
      "Mahalliy hokimliklar"
    ],
    correctAnswer: "Vazirlar Mahkamasi"
  },
  {
    question: "Inklyuziv ta’limdagi “tenglik” prinsipi nimani anglatadi?",
    options: [
      "Faqat maxsus bolalarga qulaylik yaratish",
      "Hammani bir xil baholash",
      "Barcha bolalarga bir xil ta'lim imkoniyati berish",
      "Sog'lom bolalarga imtiyoz berish"
    ],
    correctAnswer: "Barcha bolalarga bir xil ta'lim imkoniyati berish"
  },
  {
    question: "Inklyuziv ta’limning afzalliklaridan biri nima?",
    options: [
      "Nogiron bolalar ajratiladi",
      "Jamiyatda integratsiya kuchayadi",
      "Bolalarning imkoniyati cheklanadi",
      "O'qituvchilar soni kamayadi"
    ],
    correctAnswer: "Jamiyatda integratsiya kuchayadi"
  },
  {
    question: "O'qituvchi inklyuziv ta'limda ehtiyojmand bolalarning qaysi xususiyatlarini inobatga olishi zarur?",
    options: [
      "Faqat bilim berish",
      "Bolalarni ajratish",
      "O'quvchilarning individual imkoniyatlarini hisobga olish",
      "Faqat ota-onalar bilan ishlash"
    ],
    correctAnswer: "O'quvchilarning individual imkoniyatlarini hisobga olish"
  },
  {
    question: "Inklyuziv ta’lim sinflarida qo'shimcha yordamchi kim bo'lishi mumkin?",
    options: [
      "O'quvchi",
      "Ota-ona",
      "Tiflopedagog, logoped, surdopedagog",
      "Qo'shni"
    ],
    correctAnswer: "Tiflopedagog, logoped, surdopedagog"
  },
  {
    question: "Inklyuziv ta'limda baholash tizimi qanday bo'lishi kerak?",
    options: [
      "Bir xil standart",
      "Faqat yozma imtihon",
      "Individual yondashuv asosida",
      "O'qituvchining xohishiga ko'ra"
    ],
    correctAnswer: "Individual yondashuv asosida"
  },
  {
    question: "O‘zbekistonda inklyuziv ta’limni rivojlantirish bo‘yicha mas’ul vazirlik?",
    options: [
      "Ichki ishlar vazirligi",
      "Sog'ligni saqlash vazirligi",
      "Maktabgacha va maktab ta'limi vazirligi",
      "Adliya vazirligi"
    ],
    correctAnswer: "Maktabgacha va maktab ta'limi vazirligi"
  },
  {
    question: "Inklyuziv ta’lim tizimida ota-onaning vazifasi?",
    options: [
      "Faqat nazorat qilish",
      "Bolaning rivojlanishiga faol yordam berish",
      "O'qituvchiga qarshi chiqish",
      "Maktabda har kuni bola bilan birga o'qish"
    ],
    correctAnswer: "Bolaning rivojlanishiga faol yordam berish"
  },
  {
    question: "Inklyuziv ta’lim sinflarida qanday muhit bo'lishi kerak?",
    options: [
      "Ajratilgan",
      "Bir-biridan ustunlik",
      "Do'stona va qo'llab-quvvatlovchi",
      "Sovuq va befarq"
    ],
    correctAnswer: "Do'stona va qo'llab-quvvatlovchi"
  },
  {
    question: "Harakat-tayanch apparati nimani o'z ichiga oladi?",
    options: [
      "Yurak va o'pka",
      "Suyak, mushak va bo'g'imlar",
      "Miya va asablar",
      "Qon aylanish tizimi"
    ],
    correctAnswer: "Suyak, mushak va bo'g'imlar"
  },
  {
    question: "Harakat-tayanch apparati nuqsonlari qaysi kasalliklarda uchraydi?",
    options: [
      "Skolioz, serebral falaj, poliomiyelit",
      "Gripp, shamollash",
      "Diabet, gastrit",
      "Aqliy zaiflik"
    ],
    correctAnswer: "Skolioz, serebral falaj, poliomiyelit"
  },
  {
    question: "Harakat nuqsoni bo'lgan bolalarning asosiy muammosi nima?",
    options: [
      "Ovqatlanishda qiyinchilik",
      "Harakatlanishda qiyinchilik",
      "Faqat o'qishda qiyinchilik",
      "Faqat gapirishda qiyinchilik"
    ],
    correctAnswer: "Harakatlanishda qiyinchilik"
  },
  {
    question: "Harakat-tayanch apparatidagi nuqsonlarning sabablari?",
    options: [
      "Genetik, tug'ma yoki orttirilgan kasalliklar",
      "Faqat shamollash",
      "Ko'p ovqat yeyish",
      "Ko'p kitob o'qish"
    ],
    correctAnswer: "Genetik, tug'ma yoki orttirilgan kasalliklar"
  },
  {
    question: "Harakatida nuqsoni bo'lgan bolalar ta'limda qanday sharoitga muhtoj?",
    options: [
      "Maxsus moslashtirilgan sinf va texnika",
      "Faqat qo'shimcha dars",
      "Ajratilgan sinf",
      "Umuman ta'lim emas"
    ],
    correctAnswer: "Maxsus moslashtirilgan sinf va texnika"
  },
  {
    question: "Serebral falaj qanday kasallik?",
    options: [
      "Yurak kasalligi",
      "Asab tizimining tug'ma shikastlanishi",
      "Qon kasalligi",
      "Nafas yo'li kasalligi"
    ],
    correctAnswer: "Asab tizimining tug'ma shikastlanishi"
  },
  {
    question: "Harakatida nuqsoni bo'lgan bolalar uchun qanday moslamalar kerak bo'ladi?",
    options: [
      "Nogironlar aravachasi, qo'ltiqtayoq, ortopedik poyabzal",
      "Oddiy daftar",
      "Faqat telefon",
      "Faqat ko'zoynak"
    ],
    correctAnswer: "Nogironlar aravachasi, qo'ltiqtayoq, ortopedik poyabzal"
  },
  {
    question: "“Ortoped” kim?",
    options: [
      "Yurak shifokori",
      "Suyak va bo'g'im shifokori",
      "Ko'z shifokori",
      "Qon shifokori"
    ],
    correctAnswer: "Suyak va bo'g'im shifokori"
  },
  {
    question: "Reabilitatsiya nima?",
    options: [
      "Kasallikdan keyin tiklash jarayoni",
      "Darsni qayta o'qish",
      "Ovqatlanish tartibi",
      "Uy qurish"
    ],
    correctAnswer: "Kasallikdan keyin tiklash jarayoni"
  },
  {
    question: "Harakatida nuqsoni bo'lgan bolalarni o'qitishda o'qituvchi nimalarga e'tibor beradi?",
    options: [
      "Maxsus metodlar va moslashtirilgan topshiriqlar",
      "Faqat imtihon natijasi",
      "Faqat ota-onaning so'zi",
      "Barchani bir xil baholash"
    ],
    correctAnswer: "Maxsus metodlar va moslashtirilgan topshiriqlar"
  },
  {
    question: "Harakat nuqsoni bo'lgan bola uchun jismoniy tarbiya qanday bo'lishi kerak?",
    options: [
      "Moslashtirilgan mashqlar bilan",
      "Og'ir yuklamalar bilan",
      "Sportdan chetlashtirish",
      "Umuman shug'ullantirmaslik"
    ],
    correctAnswer: "Moslashtirilgan mashqlar bilan"
  },
  {
    question: "Harakat-tayanch apparati nuqsonlarining asosiy profilaktikasi nima?",
    options: [
      "To'g'ri ovqatlanish va jismoniy mashqlar",
      "Ko'p televizor ko'rish",
      "Kompyuterda uzoq o'tirish",
      "Yotib qolish"
    ],
    correctAnswer: "To'g'ri ovqatlanish va jismoniy mashqlar"
  },
  {
    question: "Harakatida nuqsoni bo'lgan bolalar qaysi fanlarda ko'proq yordamga muhtoj bo'ladi?",
    options: [
      "Jismoniy tarbiya va mehnat",
      "Matematika va fizika",
      "Tarix",
      "San'at"
    ],
    correctAnswer: "Jismoniy tarbiya va mehnat"
  },
  {
    question: "Harakat nuqsoni bo'lgan bolalarda ko'p uchraydigan psixologik muammo?",
    options: [
      "O'zini past baholash va yolg'izlik hissi",
      "Ko'p ovqat yeyish",
      "Haddan tashqari faollik",
      "Faqat quvnoqlik"
    ],
    correctAnswer: "O'zini past baholash va yolg'izlik hissi"
  },
  {
    question: "Bunday bolalar bilan ishlashda psixolog vazifasi nima?",
    options: [
      "Bola ijtimoiy moslashuviga yordam berish",
      "Faqat baho qo'yish",
      "Faqat ota-onani kuzatish",
      "Faqat dars o'tish"
    ],
    correctAnswer: "Bola ijtimoiy moslashuviga yordam berish"
  },
  {
    question: "Harakatida nuqsoni bo'lgan bolalarga yordam berishda qaysi texnologiya muhim?",
    options: [
      "Moslashtirilgan kompyuter va texnik vositalar",
      "Oddiy o'yinchoq",
      "Telefon",
      "Faqat daftar"
    ],
    correctAnswer: "Moslashtirilgan kompyuter va texnik vositalar"
  },
  {
    question: "Harakatida nuqsoni bo'lgan bolalarni maktabga olib kelishda qanday sharoit zarur?",
    options: [
      "Pandus va maxsus liftlar",
      "Oddiy yo'lak",
      "Qorovul yordamida",
      "Faqat ota-onaning mashinasi"
    ],
    correctAnswer: "Pandus va maxsus liftlar"
  },
  {
    question: "Ortopedik nuqsonlar qaysi yoshda aniqlanishi mumkin?",
    options: [
      "Faqat 15 yoshdan keyin",
      "Faqat 18 yoshdan keyin",
      "Tug'ruqdan keyin va bolalik davrida",
      "Faqat qariganda"
    ],
    correctAnswer: "Tug'ruqdan keyin va bolalik davrida"
  },
  {
    question: "Harakatida nuqsoni bo'lgan bolalar uchun ijtimoiy muhit qanday bo'lishi kerak?",
    options: [
      "Qo'llab-quvvatlovchi va do'stona",
      "Ajratilgan",
      "Sovuq va befarq",
      "Faqat uyda o'tirishga majbur qiluvchi"
    ],
    correctAnswer: "Qo'llab-quvvatlovchi va do'stona"
  },
  {
    question: "Harakat nuqsoni bo'lgan bolalarning asosiy huquqi?",
    options: [
      "Ta'lim olish va jamiyatda teng huquqli bo'lish",
      "Faqat uyda o'tirish",
      "Faqat yordam olish",
      "Faqat tibbiy xizmatdan foydalanish"
    ],
    correctAnswer: "Ta'lim olish va jamiyatda teng huquqli bo'lish"
  },
  {
    question: "Inklyuziv ta’limning asosiy maqsadi nima?",
    options: [
      "Faqat sog'lom bolalarga ta'lim berish",
      "Imkoniyati cheklangan bolalarni ajratish",
      "Har bir bolaning imkoniyatidan kelib chiqib ta'lim olishini ta'minlash",
      "Ta'limni faqat maxsus maktablarda o'tkazish"
    ],
    correctAnswer: "Har bir bolaning imkoniyatidan kelib chiqib ta'lim olishini ta'minlash"
  },
  {
    question: "Integratsiyalashgan ta'lim qanday tushuniladi?",
    options: [
      "Imkoniyati cheklangan bolalar sog'lom tengdoshlari bilan birga ta'lim olishi",
      "Faqat maxsus internatlarda o'qitish",
      "Bolalarni alohida guruhlarga bo'lib o'qitish",
      "Onlayn ta'lim"
    ],
    correctAnswer: "Imkoniyati cheklangan bolalar sog'lom tengdoshlari bilan birga ta'lim olishi"
  },
  {
    question: "Integratsiyalangan ta’limning asosiy afzalligi nimada?",
    options: [
      "Jamiyatda ijtimoiy moslashuv kuchayadi",
      "Bolalar ajratiladi",
      "O'quvchilar faqat imtihonlarga tayyorlanadi",
      "Maxsus maktablar soni ortadi"
    ],
    correctAnswer: "Jamiyatda ijtimoiy moslashuv kuchayadi"
  },
  {
    question: "Inklyuziv ta’limni qo'llab-quvvatlovchi xalqaro hujjat qaysi?",
    options: [
      "BMT Nogironlar huquqlari konvensiyasi",
      "O'zbekiston Respublikasi Soliq kodeksi",
      "BMT Bolalar huquqlari deklaratsiyasi",
      "ILO mehnat kodeksi"
    ],
    correctAnswer: "BMT Nogironlar huquqlari konvensiyasi"
  },
  {
    question: "Integratsiyalashgan ta’limda o'qituvchi vazifasi nima?",
    options: [
      "Faqat dars berish",
      "Har bir bolaga individual yondashuvni qo'llash",
      "Bolalarni ajratish",
      "Faqat ota-onalar bilan ishlash"
    ],
    correctAnswer: "Har bir bolaga individual yondashuvni qo'llash"
  },
  {
    question: "Inklyuziv ta’limda “qo'shimcha pedagog” kim bo'lishi mumkin?",
    options: [
      "Defektolog, logoped, surdopedagog",
      "Faqat maktab direktori",
      "Oddiy o'quvchi",
      "Qo'shni"
    ],
    correctAnswer: "Defektolog, logoped, surdopedagog"
  },
  {
    question: "Imkoniyati cheklangan bolalarni jalb qilishda asosiy prinsip qaysi?",
    options: [
      "Ajratish",
      "Integratsiya va teng huquqlilik",
      "Faqat nazorat qilish",
      "Ta'limni qisqartirish"
    ],
    correctAnswer: "Integratsiya va teng huquqlilik"
  },
  {
    question: "Inklyuziv ta’limda “moslashtirilgan dastur” nimani bildiradi?",
    options: [
      "Oddiy o'quv rejasini qisqartirish",
      "Har bir bolaga moslashtirilgan ta'lim rejasi",
      "Faqat oson topshiriqlar berish",
      "Faqat onlayn ta'lim"
    ],
    correctAnswer: "Har bir bolaga moslashtirilgan ta'lim rejasi"
  },
  {
    question: "Integratsiyalangan sinfda qanday bolalar o'qiydi?",
    options: [
      "Faqat sog'lom bolalar",
      "Faqat nogiron bolalar",
      "Imkoniyati cheklangan va sog'lom bolalar birgalikda",
      "Faqat maktab direktorining bolalari"
    ],
    correctAnswer: "Imkoniyati cheklangan va sog'lom bolalar birgalikda"
  },
  {
    question: "Inklyuziv ta’limda “hamkorlik” deganda nima tushuniladi?",
    options: [
      "O'qituvchi va bola munosabati",
      "O'qituvchi, ota-ona va mutaxassislarning birgalikdagi faoliyati",
      "O'quvchilarni alohida baholash",
      "Maktab va davlat munosabatlari"
    ],
    correctAnswer: "O'qituvchi, ota-ona va mutaxassislarning birgalikdagi faoliyati"
  },
  {
    question: "Integratsiyalangan ta’limning ijobiy jihatlaridan biri?",
    options: [
      "Bolalarda ijtimoiy ko'nikmalar shakllanadi",
      "Bolalar ajratiladi",
      "Ta'lim sifat pasayadi",
      "Bolalar mustaqil bo'lmaydi"
    ],
    correctAnswer: "Bolalarda ijtimoiy ko'nikmalar shakllanadi"
  },
  {
    question: "Inklyuziv ta’limda asosiy shior qanday?",
    options: [
      "“Hammani qamrab oluvchi ta’lim”",
      "“Faqat maxsus bolalar uchun”",
      "“Ajratilgan ta'lim”",
      "“Faqat sog'lom bolalar uchun”"
    ],
    correctAnswer: "“Hammani qamrab oluvchi ta’lim”"
  },
  {
    question: "Integratsiya jarayonida ota-onaning vazifasi nima?",
    options: [
      "Bolaga yordam berish va ta'lim jarayonida ishtirok etish",
      "Faqat nazorat qilish",
      "O'qituvchini tanqid qilish",
      "Ta'limdan chetlatish"
    ],
    correctAnswer: "Bolaga yordam berish va ta'lim jarayonida ishtirok etish"
  },
  {
    question: "“Teng imkoniyatlar” prinsipi nimani anglatadi?",
    options: [
      "Barcha bolalarga bir xil ta'lim imkoniyati berilishi",
      "Faqat sog'lom bolalarga qulaylik",
      "Imkoniyati cheklangan bolalarni ajratish",
      "Imtihonsiz o'qitish"
    ],
    correctAnswer: "Barcha bolalarga bir xil ta'lim imkoniyati berilishi"
  },
  {
    question: "Inklyuziv sinflarda qanday muhit bo'lishi kerak?",
    options: [
      "Do'stona va qo'llab-quvvatlovchi",
      "Sovuq va befarq",
      "Ajratilgan",
      "Raqobatbardosh"
    ],
    correctAnswer: "Do'stona va qo'llab-quvvatlovchi"
  },
  {
    question: "Integratsiyalashgan ta’limning asosiy qiyinchiligi nima?",
    options: [
      "O'qituvchilarning yetarli tayyor emasligi",
      "O'quvchilar soni ko'pligi",
      "Sinflarning kengligi",
      "O'quvchilarni baholash"
    ],
    correctAnswer: "O'qituvchilarning yetarli tayyor emasligi"
  },
  {
    question: "Inklyuziv ta’limni rivojlantirishda qaysi tashkilotlar yordam beradi?",
    options: ["UNESCO va UNICEF", "FIFA", "WHO", "NATO"],
    correctAnswer: "UNESCO va UNICEF"
  },
  {
    question: "Integratsiyalangan sinflarda qanday metodlardan foydalaniladi?",
    options: [
      "Differensial yondashuv va individual topshiriqlar",
      "Faqat umumiy dars",
      "Faqat yozma topshiriq",
      "Ajratilgan topshiriqlar"
    ],
    correctAnswer: "Differensial yondashuv va individual topshiriqlar"
  },
  {
    question: "Imkoniyati cheklangan bolalarni jalb qilishda muhit qanday bo'lishi kerak?",
    options: [
      "Moslashtirilgan va qulay",
      "Faqat oddiy",
      "Ajratilgan",
      "Qattiq tartibli"
    ],
    correctAnswer: "Moslashtirilgan va qulay"
  },
  {
    question: "Inklyuziv ta’limda “sotsial integratsiya” nimani bildiradi?",
    options: [
      "Bolaning jamiyatga qo'shilishi va faol ishtiroki",
      "Bolani ajratish",
      "Uyda o'qitish",
      "Faqat maxsus internat"
    ],
    correctAnswer: "Bolaning jamiyatga qo'shilishi va faol ishtiroki"
  },
  {
    question: "Integratsiyalashgan ta’limning pedagogik vazifasi?",
    options: [
      "Har bir bolaning imkoniyatidan kelib chiqib ta'lim berish",
      "Bolalarni ajratish",
      "Faqat baho qo'yish",
      "Ota-onalardan voz kechish"
    ],
    correctAnswer: "Har bir bolaning imkoniyatidan kelib chiqib ta'lim berish"
  },
  {
    question: "Inklyuziv ta’limda “psixolog”ning vazifasi?",
    options: [
      "Bola ijtimoiy moslashuviga yordam berish",
      "Faqat test o'tkazish",
      "Faqat ota-onalar bilan suhbatlashish",
      "Baho qo'yish"
    ],
    correctAnswer: "Bola ijtimoiy moslashuviga yordam berish"
  },
  {
    question: "Integratsiya jarayonida maktabning roli qanday?",
    options: [
      "Qulay muhit yaratish va moslashtirilgan sharoitlar ta'minlash",
      "Faqat oddiy darslarni tashkil qilish",
      "Bolalarni ajratish",
      "Ota-onalarni cheklash"
    ],
    correctAnswer: "Qulay muhit yaratish va moslashtirilgan sharoitlar ta'minlash"
  },
  {
    question: "Inklyuziv ta’limda “individual yondashuv” nimani anglatadi?",
    options: [
      "Har bir bolaga uning imkoniyatiga mos topshiriq berish",
      "Barchani bir xil baholash",
      "Ajratilgan o'quv dasturi",
      "Faqat oddiy darslikdan foydalanish"
    ],
    correctAnswer: "Har bir bolaga uning imkoniyatiga mos topshiriq berish"
  },
  {
    question: "Inklyuziv ta’limning asosiy tamoyillaridan biri?",
    options: [
      "Hamkorlik va tenglik",
      "Ajratish",
      "Faqat nazorat",
      "Faqat maktab direktori qarori"
    ],
    correctAnswer: "Hamkorlik va tenglik"
  },
  {
    question: "Imkoniyati cheklangan bolalarni jalb qilishda qanday texnologiyalar muhim?",
    options: [
      "Moslashtirilgan kompyuter va texnik vositalar",
      "Oddiy daftar",
      "Telefon",
      "Qo'shni yordamida"
    ],
    correctAnswer: "Moslashtirilgan kompyuter va texnik vositalar"
  },
  {
    question: "Inklyuziv ta’limda “moslashtirilgan baholash” nimani bildiradi?",
    options: [
      "Bolaning individual imkoniyatiga qarab baholash",
      "Faqat imtihon natijasi",
      "Oddiy standart baholash",
      "Faqat yozma topshiriqlar"
    ],
    correctAnswer: "Bolaning individual imkoniyatiga qarab baholash"
  },
  {
    question: "Integratsiyalashgan ta’limda sog'lom bolalar uchun qanday afzallik bor?",
    options: [
      "Mehr-shafqat va tolerantlikni o'rganadi",
      "O'qishga qiziqmaydi",
      "Ajratiladi",
      "Faqat nazorat qilinadi"
    ],
    correctAnswer: "Mehr-shafqat va tolerantlikni o'rganadi"
  },
  {
    question: "Integratsiyalashgan ta'limni amalga oshirish uchun maktabda nimalar zarur?",
    options: [
      "Panduslar, lifflar, maxsus jihozlar",
      "Faqat oddiy sinf xonasi",
      "Faqat daftar va ruchka",
      "Telefon va televizor"
    ],
    correctAnswer: "Panduslar, lifflar, maxsus jihozlar"
  },
  {
    question: "Inklyuziv ta’limning eng asosiy vazifasi?",
    options: [
      "Barcha bolalar uchun teng ta'lim imkoniyatini yaratish",
      "Faqat maxsus maktablarni rivojlantirish",
      "Bolalarni ajratib o'qitish",
      "O'qituvchilar sonini kamaytirish"
    ],
    correctAnswer: "Barcha bolalar uchun teng ta'lim imkoniyatini yaratish"
  }
];

// ===== GLOBAL O'ZGARUVCHILAR =====
const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('nextBtn');
const summaryResultsSpan = document.getElementById('summaryResults');
const resultModal = document.getElementById('resultModal');
const continueBtn = document.getElementById('continueBtn');

// YANGI: Savollar indeksi ro'yxati
let availableQuestionIndices = []; 
let currentQuestionObject = null;

let totalAttempts = 0;
let correctCount = 0;
let questionAnsweredThisTurn = false;

// 20 ta savollik blok uchun
let blockCorrectCount = 0;
let blockTotalCount = 0;

// ===== YORDAMCHI FUNKSIYALAR =====
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// ===== YANGI: SAVOLLAR HAVZASI (POOL) FUNKSIYALARI =====
function initQuestionPool() {
    const savedPool = localStorage.getItem(QUESTION_POOL_KEY);
    
    if (savedPool) {
        availableQuestionIndices = JSON.parse(savedPool);
    }

    // Agar xotira bo'sh bo'lsa yoki savollar tugagan bo'lsa -> Yangidan to'ldiramiz
    if (!availableQuestionIndices || availableQuestionIndices.length === 0) {
        // Indekslar ro'yxatini tuzamiz [0, 1, 2, ... 449]
        availableQuestionIndices = Array.from(questionsData.keys());
        
        // Ularni yaxshilab aralashtiramiz
        shuffleArray(availableQuestionIndices);
        
        // Xotiraga saqlaymiz
        savePoolProgress();
    }
}

function savePoolProgress() {
    localStorage.setItem(QUESTION_POOL_KEY, JSON.stringify(availableQuestionIndices));
}

function updateResults() {
    let percentage = 0;
    if (totalAttempts > 0) {
        percentage = (correctCount / totalAttempts) * 100;
    }
    summaryResultsSpan.textContent = `Urinish: ${totalAttempts}, To'g'ri: ${correctCount}, Foiz: ${percentage.toFixed(0)}%`;
}

function loadQuestion() {
    quizContainer.innerHTML = '';
    questionAnsweredThisTurn = false;
    nextButton.disabled = true;

    // Savollar ro'yxatini tekshirish
    if (availableQuestionIndices.length === 0) {
        initQuestionPool(); // Tugagan bo'lsa qayta yuklaydi
    }

    // Navbatdagi savol indeksini olamiz (hali o'chirmaymiz)
    const questionIndex = availableQuestionIndices[0]; 
    
    // Agar savollar bazasi bo'sh bo'lsa yoki xato bo'lsa
    if (questionIndex === undefined || !questionsData[questionIndex]) {
        quizContainer.innerHTML = '<p>Savollar yuklanmadi. Iltimos sahifani yangilang.</p>';
        return;
    }

    currentQuestionObject = questionsData[questionIndex];
    const q = currentQuestionObject;
    
    // Savol blokini yaratish
    const questionBlock = document.createElement('div');
    questionBlock.classList.add('question-block');

    // Statistika (Nechanchi savol ekanligi)
    const questionNumber = questionsData.length - availableQuestionIndices.length + 1;
    const infoText = document.createElement('small');
    infoText.style.color = '#666';
    infoText.style.display = 'block';
    infoText.style.marginBottom = '5px';
    infoText.textContent = `(Umumiy baza: ${questionNumber} / ${questionsData.length})`;
    questionBlock.appendChild(infoText);

    const questionText = document.createElement('p');
    questionText.classList.add('question-text');
    questionText.textContent = `${questionNumber}-savol. ${q.question}`;
    questionBlock.appendChild(questionText);

    const optionsList = document.createElement('ul');
    optionsList.classList.add('options-list');

    const shuffledOptions = [...q.options];
    shuffleArray(shuffledOptions);

    shuffledOptions.forEach((option, optionIndex) => {
        const listItem = document.createElement('li');
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'question';
        radioInput.value = option;
        radioInput.id = `q-option${optionIndex}`;

        const label = document.createElement('label');
        label.htmlFor = `q-option${optionIndex}`;
        label.textContent = option;

        radioInput.addEventListener('change', (event) => {
            if (questionAnsweredThisTurn) return;

            const selectedValue = event.target.value;
            const allLabels = questionBlock.querySelectorAll('label');
            
            totalAttempts++;
            blockTotalCount++;

            if (selectedValue === q.correctAnswer) {
                // To'g'ri javob
                label.classList.add('selected-correct');
                correctCount++;
                blockCorrectCount++;

                let feedbackDiv = questionBlock.querySelector('.feedback');
                if (feedbackDiv) feedbackDiv.remove();
                
                feedbackDiv = document.createElement('div');
                feedbackDiv.classList.add('feedback', 'correct');
                feedbackDiv.textContent = 'To\'g\'ri!';
                questionBlock.appendChild(feedbackDiv);
            } else {
                // Noto'g'ri javob
                label.classList.add('selected-wrong');
                
                // To'g'ri javobni ko'rsatish
                allLabels.forEach(lbl => {
                    const radio = document.getElementById(lbl.htmlFor);
                    if (radio && radio.value === q.correctAnswer) {
                        lbl.classList.add('show-correct');
                    }
                });

                let feedbackDiv = questionBlock.querySelector('.feedback');
                if (feedbackDiv) feedbackDiv.remove();
                
                feedbackDiv = document.createElement('div');
                feedbackDiv.classList.add('feedback', 'incorrect');
                feedbackDiv.textContent = `Noto\'g\'ri. To'g'ri javob: "${q.correctAnswer}"`;
                questionBlock.appendChild(feedbackDiv);
            }

            updateResults();

            const radioButtons = questionBlock.querySelectorAll('input[type="radio"]');
            radioButtons.forEach(radio => {
                radio.disabled = true;
            });

            questionAnsweredThisTurn = true;
            nextButton.disabled = false;
        });

        listItem.appendChild(radioInput);
        listItem.appendChild(label);
        optionsList.appendChild(listItem);
    });

    questionBlock.appendChild(optionsList);
    quizContainer.appendChild(questionBlock);
}

function showResultModal() {
    const modalCorrect = document.getElementById('modalCorrect');
    const modalWrong = document.getElementById('modalWrong');
    const modalPercent = document.getElementById('modalPercent');
    const modalVerdict = document.getElementById('modalVerdict');
    const modalIcon = document.querySelector('.modal-icon');

    const wrongCount = blockTotalCount - blockCorrectCount;
    const percentage = blockTotalCount > 0 ? (blockCorrectCount / blockTotalCount) * 100 : 0;

    modalCorrect.textContent = blockCorrectCount;
    modalWrong.textContent = wrongCount;
    modalPercent.textContent = percentage.toFixed(0) + '%';

    // Baholash (70% o'tish bali)
    if (percentage >= 70) {
        modalVerdict.textContent = '🎉 Tabriklaymiz! Siz imtihondan muvaffaqiyatli o\'tdingiz!';
        modalVerdict.className = 'modal-verdict pass';
        modalIcon.textContent = '🎉';
    } else {
        modalVerdict.textContent = '😔 Afsuski, siz imtihondan o\'ta olmadingiz. Yana harakat qiling!';
        modalVerdict.className = 'modal-verdict fail';
        modalIcon.textContent = '😔';
    }

    resultModal.style.display = 'block';
}

function handleNextQuestion() {
    // YANGI: Ishlatilgan savolni ro'yxatdan o'chiramiz
    if (availableQuestionIndices.length > 0) {
        availableQuestionIndices.shift(); // Birinchi elementni olib tashlash
        savePoolProgress(); // O'zgarishni saqlash
    }

    // Har 20 ta savoldan keyin modal ko'rsatish
    if (blockTotalCount > 0 && blockTotalCount % 20 === 0) {
        showResultModal();
        return;
    }

    loadQuestion();
}

// ===== HODISA TINGLOVCHILAR =====
nextButton.addEventListener('click', handleNextQuestion);

continueBtn.addEventListener('click', () => {
    resultModal.style.display = 'none';
    
    // Blok statistikasini tiklash (lekin umumiy test davom etadi)
    blockCorrectCount = 0;
    blockTotalCount = 0;
    
    // Modal yopilgach keyingi savolga o'tamiz
    loadQuestion();
});

// ===== LOGIN TIZIMI =====
window.addEventListener('DOMContentLoaded', function() {
    // Login o'chirilgan - to'g'ridan-to'g'ri test boshlanadi
    const loginScreen = document.getElementById('loginScreen');
    if (loginScreen) {
        loginScreen.style.display = 'none';
    }
    
    document.body.classList.remove('login-active');
    startTimer();
    updateResults();
    loadQuestion();
});

document.getElementById('loginBtn').addEventListener('click', function() {
    checkCredentials();
});

document.getElementById('password').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkCredentials();
    }
});

document.getElementById('username').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('password').focus();
    }
});

function checkCredentials() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const loginBtn = document.getElementById('loginBtn');
    const btnText = document.getElementById('btnText');

    if (!username || !password) {
        errorMessage.textContent = '⚠️ Iltimos, barcha maydonlarni to\'ldiring!';
        errorMessage.classList.add('show');
        return;
    }

    loginBtn.disabled = true;
    btnText.innerHTML = 'Tekshirilmoqda<span class="loading"></span>';
    errorMessage.classList.remove('show');

    setTimeout(() => {
        if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
            localStorage.setItem(AUTH_KEY, 'true');
            errorMessage.classList.remove('show');
            
            btnText.textContent = '✓ Muvaffaqiyatli!';
            loginBtn.style.background = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';
            
            setTimeout(() => {
                showMainContent();
            }, 500);
        } else {
            errorMessage.textContent = '❌ Login yoki parol noto\'g\'ri!';
            errorMessage.classList.add('show');
            loginBtn.disabled = false;
            btnText.textContent = 'Kirish';
            
            document.getElementById('password').value = '';
            document.getElementById('password').focus();
        }
    }, 500);
}

function showMainContent() {
    const loginScreen = document.getElementById('loginScreen');
    
    loginScreen.style.animation = 'fadeOut 0.5s ease-out';
    
    setTimeout(() => {
        loginScreen.classList.add('hidden');
        document.body.classList.remove('login-active');
        startTimer();
        updateResults();
        loadQuestion();
    }, 500);
}

function logout() {
    if (confirm('Rostdan ham tizimdan chiqmoqchimisiz?')) {
        localStorage.removeItem(AUTH_KEY);
        // Izoh: Savollar ketma-ketligini saqlab qolish uchun pool o'chirilmaydi
        location.reload();
    }
}

console.log('%c💡 Tizimdan chiqish uchun:', 'color: blue; font-size: 14px; font-weight: bold;');
console.log('%clogout()', 'color: green; font-size: 12px; background: #f0f0f0; padding: 5px;');

// ===== TAYMER =====
let startTime;
let timerInterval;

function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const elapsedTime = Date.now() - startTime;
    const totalSeconds = Math.floor(elapsedTime / 1000);
    
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = 
        String(minutes).padStart(2, '0') + ':' + 
        String(seconds).padStart(2, '0');

    document.getElementById('timer').textContent = formattedTime;
}
