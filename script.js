// ===== PAROL TIZIMI =====
const AUTH_KEY = 'mahsusua_authenticated';
const VALID_CREDENTIALS = {
    username: 'Inavatsiya2025',
    password: 'test1221'
};

// ===== YANGI: SAVOLLAR TARIXINI SAQLASH KALITI =====
const QUESTION_POOL_KEY = 'quiz_remaining_indices';

// ===== TEST SAVOLLARI (BU YERGA 450 TA SAVOLINGIZNI TASHLAISZ) =====
const questionsDataPart2 = [
  {
    question: "Yam-yashil so'zida nechta unli va nechta undosh tovush bor.",
    options: [
      "3 ta unli, 3 ta undosh",
      "5 ta unli, 5 ta undosh",
      "3 ta unli, 5 ta undosh",
      "4 ta unli, 4 ta undosh"
    ],
    correctAnswer: "3 ta unli, 5 ta undosh"
  },
  {
    question: "Qaysi qatorda lab undoshlari berilgan.",
    options: ["x, g", "j, k", "b, m", "h, ng"],
    correctAnswer: "b, m"
  },
  {
    question: "Lab undoshlari ishtirok etgan yasama so'zni toping.",
    options: ["savlat", "gulzor", "oshiq", "ommabop"],
    correctAnswer: "ommabop"
  },
  {
    question: "Qaysi so'z tarkibida portlovchi undosh mavjud.",
    options: ["suvsiz", "sababsiz", "yuzsiz", "foizsiz"],
    correctAnswer: "sababsiz"
  },
  {
    question: "Qaysi jarangli undosh o'z jarangsiz jufti bilan birga sirg'aluvchi tovushlarga mansub bo'ladi.",
    options: ["b", "d", "z", "k"],
    correctAnswer: "z"
  },
  {
    question: "t va h tovushlari qaysi xususiyatlariga ko'ra bir guruhga mansub bo'ladi.",
    options: [
      "jarangli va jarangsizligiga ko'ra",
      "lab yoki tish undoshlariga oidligiga ko'ra",
      "portlovchi yoki sirg'aluvchiligiga ko'ra",
      "tilning qayerida paydo bo'lishiga ko'ra"
    ],
    correctAnswer: "jarangli va jarangsizligiga ko'ra"
  },
  {
    question: "f undoshi til undoshlarining qaysi turiga mansub.",
    options: [
      "til oldi undosh",
      "lab-tish undoshi",
      "sayoz til oldi undoshi",
      "chuqur til orqa undoshi"
    ],
    correctAnswer: "lab-tish undoshi"
  },
  {
    question: "Qaysi jarangli undoshlar sirg'aluvchilarga mansub emas.",
    options: ["k, t", "v, z", "b, n", "j, g'"],
    correctAnswer: "b, n"
  },
  {
    question: "Berilgan jarangli undoshlardan qaysilari sirg'aluvchilarga mansub.",
    options: ["k, q", "f, s", "j, b", "r, z"],
    correctAnswer: "r, z"
  },
  {
    question: "Qaysi so'z talaffuzida jarangsiz tovush o'zidan keyingi jarangli tovushni o'ziga moslashtiradi.",
    options: ["zarur", "ketdi", "o'qibdi", "maqsad"],
    correctAnswer: "ketdi"
  },
  {
    question: "Jarangsiz undoshlar ishtirok etmagan yasama so'zni toping.",
    options: ["bejirim", "gulsiz", "lolazor", "yolg'ondakam"],
    correctAnswer: "lolazor"
  },
  {
    question: "Portlovchi undoshlar yonma-yon kelgan so'zni toping.",
    options: ["iqtisod", "nashriyot", "qing'ir", "hamfikr"],
    correctAnswer: "iqtisod"
  },
  {
    question: "Qaysi yasama so'z tarkibida sirg'aluvchi tovush mavjud.",
    options: ["kechikmoq", "shoshilmoq", "ulg'aymoq", "changimoq"],
    correctAnswer: "ulg'aymoq"
  },
  {
    question: "b va k tovushlari qaysi xususiyatlariga ko'ra bir guruhga mansub bo'ladi.",
    options: [
      "jarangli yoki jarangsizligiga ko'ra",
      "lab yoki tish undoshlariga oidligiga ko'ra",
      "tilning qayerida paydo bo'lishiga ko'ra",
      "portlovchi yoki sirg'aluvchiligiga ko'ra"
    ],
    correctAnswer: "portlovchi yoki sirg'aluvchiligiga ko'ra"
  },
  {
    question: "Metateza hodisasi qaysi qatordagi so'zda kuzatiladi.",
    options: ["zarar-zaral", "tuproq-turpoq", "yurakka-yurakga", "tuzsiz-tussiz"],
    correctAnswer: "tuproq-turpoq"
  },
  {
    question: "Faqat jarangsiz undoshlar qatnashgan so'zlar qatorini toping.",
    options: [
      "daromad, jamoat, hushyor",
      "taxta, soat, sukut, toqat",
      "muhabbat, vafo, sadoqat",
      "tosh, shikoyat, kitob, mulk"
    ],
    correctAnswer: "taxta, soat, sukut, toqat"
  },
  {
    question: "Urg'usi oxirgi bo'g'inga tushmagan so'zlar qatorini toping.",
    options: [
      "bog'lar, olma, novcha",
      "yangicha, qishgacha, o'zgacha",
      "qishloqcha, yigitcha, uycha",
      "qazilma, qotishma, burama"
    ],
    correctAnswer: "qazilma, qotishma, burama"
  },
  {
    question: "Qaysi javobda tovush o'zgarishlari yuz bergan?",
    options: ["1, 2, 4", "2, 3, 5", "2, 3", "4, 3, 6"],
    correctAnswer: "2, 3"
  },
  {
    question: "Qaysi javobda so'z ko'chirish qoidasi to'g'ri ko'rsatilmagan.",
    options: ["mat-ba-a", "mu-do-faa", "si-ngil", "tran-sport"],
    correctAnswer: "mat-ba-a"
  },
  {
    question: "Yigirmata so'zida urg'u qaysi bo'g'inga qo'yilgan.",
    options: ["1 ga", "3 ga", "2 ga", "4 ga"],
    correctAnswer: "3 ga"
  },
  {
    question: "Qaysi qatordagi so'zlarning ma'nosi urg'u yordamida farqlanadi.",
    options: [
      "xiyla, ariya, belcha, beshala",
      "bolada, qo'lla, axil",
      "bog'lar, ishlar, qishloqcha",
      "burun, gajim, uylar"
    ],
    correctAnswer: "bog'lar, ishlar, qishloqcha"
  },
  {
    question: "ayir so'ziga quyidagi qaysi qo'shimchalar qo'shilsa tovush tushishi vujudga keladi.",
    options: ["1,2,4,5", "2,3,4,5", "2,4,5", "1,2,4"],
    correctAnswer: "1,2,4,5"
  },
  {
    question: "Rotalarni zudlik bilan o'rnidan ko'chirish haqida og'zaki buyruq berildi. Berilgan gap tarkibidagi necha so'zda tovush tushishi hodisasi mavjud.",
    options: ["2 so'zda", "1 so'zda", "3 so'zda", "4 so'zda"],
    correctAnswer: "3 so'zda"
  },
  {
    question: "Og'zaki nutqda qaysi so'z tarkibidagi portlovchi tovush ba'zan sirg'aluvchi tovush tarzida talaffuz qilinadi.",
    options: ["maktab", "taqsim", "boribdi", "xohish"],
    correctAnswer: "taqsim"
  },
  {
    question: "Qaysi jumlada gap urg'usi muzeyga so'ziga tushgan.",
    options: [
      "O'qituvchimiz bizni muzeyga dam olish kuni olib boradi.",
      "Bizni dam olish kuni muzeyga o'qituvchimiz olib boradi.",
      "Dam olish kuni o'qituvchimiz bizni muzeyga olib boradi.",
      "Muzeyga bizni dam olish kuni o'qituvchimiz olib boradi."
    ],
    correctAnswer: "Dam olish kuni o'qituvchimiz bizni muzeyga olib boradi."
  },
  {
    question: "Urg'u ma'no farqlash vazifasini bajargan so'zlarni belgilang.",
    options: ["1, 3, 4, 5", "1, 3, 4", "1, 2, 3, 4, 5", "2, 4"],
    correctAnswer: "1, 2, 3, 4, 5"
  },
  {
    question: "Qaysi so'zlarning o'zak-negizida tovush almashishi yuz bergan.",
    options: ["1, 2, 3, 4, 5, 6", "2, 4, 6", "1, 4, 5, 6", "1, 2, 4, 6"],
    correctAnswer: "1, 4, 5, 6"
  },
  {
    question: "Qaysi so'zlarda urg'u yordamida ma'noni farqlash mumkin.",
    options: ["1, 2, 3, 4, 5", "3, 4, 5", "1, 3, 5", "1, 3, 4, 5"],
    correctAnswer: "1, 3, 4, 5"
  },
  {
    question: "Malika opaning ikkala o'g'li shaharda o'qib, ulg'ayib yana bag'riga qaytdi. Berilgan gap tarkibidagi necha so'zda tovush tushishi hodisasi mavjud.",
    options: ["1 so'zda", "2 so'zda", "3 so'zda", "4 so'zda"],
    correctAnswer: "4 so'zda"
  },
  {
    question: "Qaysi so'zdagi til oldi undoshi og'zaki nutqda lab-lab undoshi sifatida talaffuz qilinadi.",
    options: ["shanba", "ichdim", "borib", "taqsim"],
    correctAnswer: "shanba"
  },
  {
    question: "Qaysi so'zdagi til oldi undoshi og'zaki nutqda boshqa til oldi undoshi sifatida talaffuz qilinadi.",
    options: ["to'qson", "tubsiz", "tanob", "uchta"],
    correctAnswer: "uchta"
  },
  {
    question: "Yonma-yon kelgan tovushlarning o'rin almashishi tilshunoslikda qanday ataladi.",
    options: ["assimilatsiya", "dissimilatsiya", "metateza", "tovush almashishi"],
    correctAnswer: "metateza"
  },
  {
    question: "So'z tarkibidagi tovushlarning ajratib yoki cho'ziqroq talaffuz qilinishini ko'rsatuvchi ishora qanday ataladi.",
    options: ["vergul", "tutuq belgisi", "so'z urg'usi", "urg'u"],
    correctAnswer: "tutuq belgisi"
  },
  {
    question: "Og'zaki nutqning tovush tizimini yozma nutqda qanday berilishini o'rganuvchi tilshunoslik bo'limi qanday nomlanadi.",
    options: ["orfografiya", "orfoepiya", "grafika", "fonetika"],
    correctAnswer: "orfografiya"
  },
  {
    question: "Olimlar haddan ziyod saodatga intilish saodatni qo'lga kiritishga to'sqinlik qilishini aytganlar. Ushbu gapda nechta so'z yasovchi qo'shimcha mavjud.",
    options: ["3 ta", "2 ta", "4 ta", "1 ta"],
    correctAnswer: "3 ta"
  },
  {
    question: "Morfem tarkibi asos = so'z yasovchi = lug'aviy shakl yasovchi = sintaktik shakl yasovchi qolipidagi so'zni toping.",
    options: ["tokzorlarda", "ipakchilikdan", "sizlamoq", "turmushimizni"],
    correctAnswer: "tokzorlarda"
  },
  {
    question: "Qaysi javobda zid ma'noli qo'shimchalar berilmagan.",
    options: ["-li/-siz", "ser-/-mand", "bo-/be-", "no-/-li"],
    correctAnswer: "ser-/-mand"
  },
  {
    question: "Qaysi javobda morfemalari ushbu tartib asosida joylashgan so'z berilgan.",
    options: ["isitkichlarni", "anglamadi", "hamkasblarimga", "isitmalamoq"],
    correctAnswer: "anglamadi"
  },
  {
    question: "Qaysi javobda tub so'z berilgan.",
    options: ["ko'chki", "turtki", "tulki", "tepki"],
    correctAnswer: "tulki"
  },
  {
    question: "Qaysi javobda morfemalarga bo'linmaydigan so'z berilgan.",
    options: ["yutuq", "huquq", "buyruq", "uzuq"],
    correctAnswer: "huquq"
  },
  {
    question: "Xatosi o'ziga ayon bo'lgach, gapira olmay g'uldirab javob berdi. Berilgan gapdagi yasama so'zlar miqdorini aniqlang.",
    options: ["2 ta", "3 ta", "4 ta", "5 ta"],
    correctAnswer: "4 ta"
  },
  {
    question: "Osmon go'zal oyi, quyoshi bilan, Inson go'zal mardlik, bardoshi bilan. Fazilati, odobi, xulqi bilan, Chin xislati -- noyob qalb mulki bilan. Ushbu gapda nechta ot so'z turkumiga mansub so'zlar mavjud.",
    options: ["13 ta", "12 ta", "11 ta", "14 ta"],
    correctAnswer: "12 ta"
  },
  {
    question: "Sen yig'layver, go'zal bo'lasan, Dard chekaver husning ortadi. Senga yarashmaydi tabassum, Qiyofangga og'ir botadi. Ushbu gapda ot so'z turkumiga mansub nechta so'z qatnashgan.",
    options: ["6 ta", "5 ta", "3 ta", "4 ta"],
    correctAnswer: "4 ta"
  },
  {
    question: "Yasama mavhum ot qatnashgan gapni toping.",
    options: [
      "Aziz shaharda qib qaytdi.",
      "Kezib-kezib topganlarim sog'inch bo'ldi.",
      "Toshkentlik mehmonga Registon juda yoqdi.",
      "Hasad -- yurakning zanglashi."
    ],
    correctAnswer: "Kezib-kezib topganlarim sog'inch bo'ldi."
  },
  {
    question: "Bo'gin ko'chirish qoidasi buzilmagan qatorni toping.",
    options: ["de-ngiz", "den-giz", "ing-liz", "kong-ress"],
    correctAnswer: "de-ngiz"
  },
  {
    question: "Tutuq belgisi qaysi qatorda unlining undoshdan ajratib talaffuz etilishini talab qiladi.",
    options: ["ma'no", "ra'no", "a'zo", "san'at"],
    correctAnswer: "san'at"
  },
  {
    question: "Kishilik olmoshi va o'zlik olmoshi birga qo'llansa, qanday uslubiy ma'no ifodalanadi.",
    options: ["hurmat", "ta'kid", "kinoya", "inkor"],
    correctAnswer: "hurmat"
  },
  {
    question: "O'lchov so'z(numerativ)lar haqida bildirilgan qaysi fikr to'g'ri emas.",
    options: [
      "O'lchov so'zlar sanoq son bilan o'lchanayotgan narsaning orasida qo'llanadi.",
      "O'zidan oldingi sanoq son bilan bitta so'roqqa javob bo'lsa-da, bitta sintaktik vazifa bajarmaydi.",
      "Otning va fe'lning o'lchovini ifodalaydi.",
      "Ayrim o'lchov so'zlar alohida olinganda narsa(predmet) ma'nosini ifodalaydi."
    ],
    correctAnswer: "Otning va fe'lning o'lchovini ifodalaydi."
  },
  {
    question: "So'zlarga va gaplarga qo'shimcha ma'no yuklash uchun xizmat qiluvchi yordamchilar qanday nomlanadi.",
    options: ["bog'lovchi", "ko'makchi", "yuklama", "modal so'z"],
    correctAnswer: "yuklama"
  },
  {
    question: "Quyida berilganlardan ham bog'lovchi, ham yuklama vazifasida qo'llanuvchi so'zni aniqlang.",
    options: ["bilan", "balki", "ham", "deb"],
    correctAnswer: "ham"
  },
  {
    question: "Qaysi javobda sof modal so'zlar berilgan.",
    options: [
      "aftidan, chamasi, taxminan",
      "umuman, balki, ehtimol",
      "avvalo, afsuski, albatta",
      "shubhasiz, to'g'ri, o'z-o'zidan"
    ],
    correctAnswer: "avvalo, afsuski, albatta"
  },
  {
    question: "Ravish yasovchi shakldosh(omonim) qo'shimchalar berilgan javobni aniqlang.",
    options: ["-lab, -larcha", "-ona, -siga", "-lay, -ligicha", "-chasiga, -layin"],
    correctAnswer: "-lab, -larcha"
  },
  {
    question: "Baqqol amaki pakana, yuzi katta, peshonasi keng, soqoli siyrak, burni puchuq, iyagi kalta odam edi. Mazkur gapning necha o'rnida sifat qo'llangan.",
    options: ["6 ta", "5 ta", "4 ta", "3 ta"],
    correctAnswer: "6 ta"
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

