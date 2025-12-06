// ===== PAROL TIZIMI =====
const AUTH_KEY = 'test_authenticated';
const VALID_CREDENTIALS = {
    username: 'Pedagog2025',
    password: 'Odina1221'
};

// ===== TEST SAVOLLARI (400 TA) =====
const questionsData = [
    {
        question: "Akvarel bo'yoqlarining afzalligi nimada?",
        options: [
            "Ranglarning yorqinligi va zichligi",
            "Yengil va shaffof bo'yoq qatlamlari yaratish imkoniyati",
            "Uning tez qurishi",
            "Qalin qatlamda ishlatilishi"
        ],
        correctAnswer: "Yengil va shaffof bo'yoq qatlamlari yaratish imkoniyati"
    },
    {
        question: "Rasmning orqa fon qismi nima deb ataladi?",
        options: [
            "Perspektiva",
            "Orqa plan (Fon)",
            "Portret",
            "Blik"
        ],
        correctAnswer: "Orqa plan (Fon)"
    },
    {
        question: "Manzara janri nimani tasvirlaydi?",
        options: [
            "Inson qiyofasi",
            "Jonsiz narsalar",
            "Tabiat va atrof-muhit",
            "Tarixiy voqealar"
        ],
        correctAnswer: "Tabiat va atrof-muhit"
    },
    {
        question: "Rassomlik san'ati qanday tasviriy vositalarni birlashtiradi?",
        options: [
            "Faqat qalam va soya",
            "Chiziq, rang, shakl va kompozitsiya",
            "Marmar va tosh",
            "Faqat naqsh"
        ],
        correctAnswer: "Chiziq, rang, shakl va kompozitsiya"
    },
    {
        question: "Monumental rangtasvirning asosiy turlarini aniqlang?",
        options: [
            "Faqat moyli rasm",
            "Freska, mozaika, panno",
            "Eskiz va illyustratsiya",
            "Faqat akvarel"
        ],
        correctAnswer: "Freska, mozaika, panno"
    },
    {
        question: "Mozaika qanday materiallardan tayyorlanadi?",
        options: [
            "Faqat loy",
            "Rangli tosh, shisha (smalta) bo'laklari",
            "Faqat qog'oz",
            "Yog'och parchalari"
        ],
        correctAnswer: "Rangli tosh, shisha (smalta) bo'laklari"
    },
    {
        question: "Kollaj so'zining ma'nosi nima?",
        options: [
            "Tasvirni o'yib tushirish",
            "Har xil materiallarni (qog'oz, mato) yopishtirib kompozitsiya tuzish",
            "Devorga rasm chizish",
            "Haykaltaroshlik usuli"
        ],
        correctAnswer: "Har xil materiallarni (qog'oz, mato) yopishtirib kompozitsiya tuzish"
    },
    {
        question: "Kulolchilik mahsulotlarini yasash uchun asosiy material nima?",
        options: [
            "Yog'och",
            "Loy (gil)",
            "Marmar",
            "Shisha"
        ],
        correctAnswer: "Loy (gil)"
    },
    {
        question: "Grafikada 'Shtrix'ning ahamiyati nima?",
        options: [
            "Faqat rang berish",
            "Tasvirga hajm, soya va turlicha tus berish vositasi",
            "Qalamni o'tkirlash",
            "Faqat chiziq chizish"
        ],
        correctAnswer: "Tasvirga hajm, soya va turlicha tus berish vositasi"
    },
    {
        question: "Chiziqli perspektivada uzoqlashgan parallel chiziqlar qayerda tutashadi?",
        options: [
            "Ko'z balandligidan pastda",
            "Ufq chizig'ida (g'oyib bo'lish nuqtasida)",
            "Rasmning o'rtasida",
            "Har xil joylarda"
        ],
        correctAnswer: "Ufq chizig'ida (g'oyib bo'lish nuqtasida)"
    },
    {
        question: "Haykaltaroshlikning eng qadimiy turlaridan biri?",
        options: [
            "Loy ishi",
            "Marmar o'ymakorligi",
            "Bronza quyish",
            "Yog'och o'ymakorligi"
        ],
        correctAnswer: "Loy ishi"
    },
    {
        question: "O'zbek xalq amaliy san'atining asosiy turlari?",
        options: [
            "Kandakorlik, kulolchilik, zardo'zlik, o'ymakorlik",
            "Faqat miniatyura",
            "Faqat portret va manzara",
            "Grafika va rangtasvir"
        ],
        correctAnswer: "Kandakorlik, kulolchilik, zardo'zlik, o'ymakorlik"
    },
    {
        question: "Ranglarning tabiiy xususiyatlarini o'rganadigan fan nima?",
        options: [
            "Grafika",
            "Kompozitsiya",
            "Rangshunoslik",
            "Perspektiva"
        ],
        correctAnswer: "Rangshunoslik"
    },
    {
        question: "Deyarli barcha tasviriy faoliyat turlari uchun umumiy bo'lgan asosiy bosqich?",
        options: [
            "Rang berish",
            "Ishni rejalashtirish (eskiz chizish)",
            "Faqat yelimlash",
            "Qaychidan foydalanish"
        ],
        correctAnswer: "Ishni rejalashtirish (eskiz chizish)"
    },
    {
        question: "Tasviriy san'atda 'shrift' deganda nimani tushunasiz?",
        options: [
            "Rasm",
            "Ranglar kombinatsiyasi",
            "Matnning yozilishi uchun foydalaniladigan harflar to'plami",
            "Grafik elementlar"
        ],
        correctAnswer: "Matnning yozilishi uchun foydalaniladigan harflar to'plami"
    },
    {
        question: "Axromatik ranglar qanday turlarni o'z ichiga oladi?",
        options: [
            "Faqat Qizil, sariq, ko'k",
            "Oq, qora, kulrang",
            "Faqat yorqin ranglar",
            "Faqat Issiq ranglar"
        ],
        correctAnswer: "Oq, qora, kulrang"
    },
    {
        question: "Rangni ajratishning asosiy tavsiflari (uchlik) qaysilar?",
        options: [
            "Yorug'lik, hajm, chiziq",
            "Tus, to'yinganlik (zichlik), yorug'lik",
            "Soya, kontrast, blik",
            "Issiqlik, sovuqlik, neytral"
        ],
        correctAnswer: "Tus, to'yinganlik (zichlik), yorug'lik"
    },
    {
        question: "Odamlar va ularning kundalik turmushini aks ettiruvchi janr?",
        options: [
            "Batal janr",
            "Maishiy janr (bytovoy)",
            "Animalistik janr",
            "Mifologik janr"
        ],
        correctAnswer: "Maishiy janr (bytovoy)"
    },
    {
        question: "Kulolchilikda 'sirlash' nima uchun amalga oshiriladi?",
        options: [
            "Loyni yumshatish uchun",
            "Buyumning yuzasini bezash va suv o'tkazmaydigan qilish uchun",
            "Faqat rang berish uchun",
            "Loyni qurib qolmasligi uchun"
        ],
        correctAnswer: "Buyumning yuzasini bezash va suv o'tkazmaydigan qilish uchun"
    },
    {
        question: "Qaysi bo'yoq turi shaffoflik va yengillik xususiyatiga ega?",
        options: [
            "Moybo'yoq",
            "Akvarel",
            "Gouash",
            "Tempera"
        ],
        correctAnswer: "Akvarel"
    },
    {
        question: "Asosiy ranglar aralashmasidan hosil bo'lgan ranglar nima deyiladi?",
        options: [
            "To'q ranglar",
            "Axromatik ranglar",
            "Qo'shimcha (ikkinchi darajali) ranglar",
            "Sovuq ranglar"
        ],
        correctAnswer: "Qo'shimcha (ikkinchi darajali) ranglar"
    },
    ];

// ===== GLOBAL O'ZGARUVCHILAR =====
const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('nextBtn');
const summaryResultsSpan = document.getElementById('summaryResults');
const resultModal = document.getElementById('resultModal');
const continueBtn = document.getElementById('continueBtn');

let shuffledAllQuestions = [];
let currentQuestionIndex = 0;
let totalAttempts = 0;
let correctCount = 0;
let questionAnsweredThisTurn = false;

// 20 ta savollik blok uchun
let blockCorrectCount = 0;
let blockTotalCount = 0;
let blockStartIndex = 0;

// ===== YORDAMCHI FUNKSIYALAR =====
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
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

    if (shuffledAllQuestions.length === 0) {
        shuffledAllQuestions = [...questionsData];
        shuffleArray(shuffledAllQuestions);
        currentQuestionIndex = 0;
    }

    if (currentQuestionIndex >= shuffledAllQuestions.length) {
        currentQuestionIndex = 0;
        shuffleArray(shuffledAllQuestions);
    }

    const q = shuffledAllQuestions[currentQuestionIndex];
    const questionBlock = document.createElement('div');
    questionBlock.classList.add('question-block');

    const questionText = document.createElement('p');
    questionText.classList.add('question-text');
    questionText.textContent = `${totalAttempts + 1}. ${q.question}`;
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
    currentQuestionIndex++;
    
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
    
    // Blok statistikasini tiklash
    blockCorrectCount = 0;
    blockTotalCount = 0;
    blockStartIndex = currentQuestionIndex;
    
    // Yangi savol yuklash
    loadQuestion();
});

// ===== LOGIN TIZIMI =====
window.addEventListener('DOMContentLoaded', function() {
    const isAuthenticated = localStorage.getItem(AUTH_KEY);
    
    if (isAuthenticated === 'true') {
        document.getElementById('loginScreen').classList.add('hidden');
        document.body.classList.remove('login-active');
        startTimer();
        updateResults();
        loadQuestion();
    } else {
        document.body.classList.add('login-active');
        document.getElementById('loginScreen').style.display = 'flex';
    }
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