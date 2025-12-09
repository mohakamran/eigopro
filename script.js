
const flashcards = [
    { en: "Perseverance", pron: "/ˌpəːsɪˈvɪər(ə)ns/", jp: "忍耐力 (Nintairyoku)", mean: "Persistence in doing something despite difficulty." },
    { en: "Inevitable", pron: "/ɪnˈɛvɪtəb(ə)l/", jp: "避けられない (Sakerarenai)", mean: "Certain to happen; unavoidable." },
    { en: "Eloquent", pron: "/ˈɛləkwənt/", jp: "雄弁な (Yūben-na)", mean: "Fluent or persuasive in speaking or writing." },
    { en: "Ambiguous", pron: "/amˈbɪɡjʊəs/", jp: "曖昧な (Aimai-na)", mean: "Open to more than one interpretation." },
    { en: "Procrastinate", pron: "/prə(ʊ)ˈkrastɪneɪt/", jp: "先延ばしにする (Sakinobashi)", mean: "Delay or postpone action." }
];

let currentCardIndex = 0;
let isFlipped = false;

const cardInner = document.getElementById('flashcard-inner');
const cardEn = document.getElementById('card-en');
const cardPron = document.getElementById('card-pron');
const cardJp = document.getElementById('card-jp');
// cardMean could be added if UI space permits, currently simplified

function flipCard() {
    isFlipped = !isFlipped;
    if (isFlipped) {
        cardInner.classList.add('rotate-y-180');
    } else {
        cardInner.classList.remove('rotate-y-180');
    }
}

function updateCardUI() {
    // Reset flip state
    isFlipped = false;
    cardInner.classList.remove('rotate-y-180');

    // Wait brief moment for flip back then change content
    setTimeout(() => {
        const data = flashcards[currentCardIndex];
        cardEn.textContent = data.en;
        cardPron.textContent = data.pron;
        cardJp.textContent = data.jp;
    }, 200);
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    updateCardUI();
}

function prevCard() {
    currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
    updateCardUI();
}

// --- Data: Phrases ---
const phrases = [
    { en: "It's a piece of cake.", jp: "とても簡単です (朝飯前)。", tag: "Idiom" },
    { en: "Let's call it a day.", jp: "今日はここまでにしましょう。", tag: "Business" },
    { en: "Hang in there!", jp: "あきらめないで！", tag: "Casual" },
    { en: "I'm on the fence.", jp: "迷っています (どっちつかず)。", tag: "Idiom" },
    { en: "It's up to you.", jp: "あなた次第です。", tag: "Common" }
];

function generatePhrase() {
    const phraseEn = document.getElementById('phrase-en');
    const phraseJp = document.getElementById('phrase-jp');
    
    // Random index
    const random = Math.floor(Math.random() * phrases.length);
    const p = phrases[random];

    // Simple fade effect
    phraseEn.style.opacity = 0;
    phraseJp.style.opacity = 0;

    setTimeout(() => {
        phraseEn.textContent = `"${p.en}"`;
        phraseJp.textContent = p.jp;
        phraseEn.style.opacity = 1;
        phraseJp.style.opacity = 1;
    }, 300);
}

// --- UI Interactions ---

// 1. Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
        navbar.classList.remove('py-4');
        navbar.classList.add('py-2');
    } else {
        navbar.classList.remove('shadow-md');
        navbar.classList.remove('py-2');
        navbar.classList.add('py-4');
    }
});

// 2. Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// 3. Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    revealElements.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load
revealOnScroll();