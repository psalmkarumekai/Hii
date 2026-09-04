// --- 1. ROTATING SECRET MESSAGES CONFIG ---
const secretMessages = [
    `Secret #1: I love you more than ice cream. And you know how much I love ice cream. But seriously, you're my absolute favorite person in the universe. 🩵`,
    `Secret #2: I still look at you when you aren't looking and think 'damn, I really hit the jackpot'. Thanks for being mine. 👀✨`,
    `Secret #3: Your laugh is my favorite sound in the world (and when you moan, no body needs to know that tho), even when you're laughing at me for doing something stupid. 🥰😂`,
    `Secret #4: You are officially stuck with me forever. No refunds, no exchanges, and absolutely no store credit. Love you! 🛑🤍`,
    `Secret #5: I hope you never forget how amazing you are, you dont need to be like anyone else, you are perfect just the way you are🩵`,
    `Secret #6: If we were in a horror movie, I'd totally sacrifice myself to save you. (Unless it's a snake, then we are both going down together). 🕷️🫶`,
    `Secret #7: I love you more today than I did yesterday. Except for that brief moment earlier when you chose Imaan over me, I was really upset.🤭`,
    `Secret #8: You are my safe place, my best friend, and my favorite distraction. Life is a million times better with you in it. 🪐🤍`,
    `Secret #9: Thank you for putting up with my chaotic energy and loving me anyway. You deserve a medal, but for now, you just get my whole heart. 🏅🩵`,
    `Secret #10: Out of all the people in the world, you're the one I want to annoy for the next 80 years. You're stuck with me! 🤪💍`,
    `Secret #11: I am so deeply in love with you that even your cold toes touching my legs under the blankets wont ever ruin my mood. 🥶🩵`,
    `Secret #12: Just a reminder that you are gorgeous, smart, incredibly funny, and your taste in partners is absolutely flawless. 😏✨`,
    `Secret #13: Whenever I am having a rough day, just getting a text from you or seeing your face completely resets my brain. Thank you for being my peace. 🤍🌱`,
    `Secret #14: I promise to always listen to you vent about your day, even if I have no idea who the people you are mad at are. I'm on your side anyway. 🗣️😤`,
    `Secret #15: My favorite place in the entire world is wherever you are. (Though sitting on the couch next to you while eating snacks is a very close second). 🍿🛋️`,
    `Secret #16: I love you so much that I will gladly go to the store at 10 PM just because you casually mentioned you were craving a very specific sweet treat. 🍫🚗`,
    `Secret #17: You make standard, boring daily life feel like an adventure. I love doing absolutely nothing with you. 🛒🩵`,
    `Secret #18: I am completely convinced we were made for each other. Either that, or we share the exact same rare kind of brain damage. 😂🧠🩵`,
    `Secret #19: You have the biggest heart of anyone I know. I am so lucky that I get to keep a huge piece of it, even tho i want all of. 🗺️🤍`,
    `Secret #20: I still get butterflies when I know I'm about to see you. Yes, even after all this time. 🦋✨`,
    `Secret #21: I promise to always carry the heavy bags, kill the scary bugs, and let you choose the first bite of my food. That's real love. 🕷️🥡`,
    `Secret #22: You're my favorite person to send stupid memes to. Thank you for always matching my frequency. 📱🤪`,
    `Secret #23: If being obsessed with you was a full-time job, I'd be a billionaire by now. 💼💰🩵`,
    `Secret #24: Thank you for making me laugh until my stomach hurts. You are the absolute joy of my life. ☀️🤍`,
    `Secret #25: No matter what happens in the future, please remember that you have an permanent home right here next to me. I love you to the moon and back. 🌙🩵`,
    `Secret #26: Your story is yours and no body else's, God has it written down and drawn out for you, dont try to change what God has written out just because you want to be better than someone else, never forget that🩵`,
    `Secret #27: Your arms will always be my go to through all my emotions🌹😊`,
    `Secret #28: Forever and always, Im never letting go🦄🩵`,
    `Secret #29: I love you more hehe🌹🦄🍩🍨`,
    `Secret #30: I farted👌😁😎 and it smells like candy`,
    `Secret #31: You dont need people's approval to prove that you are great🩵🩵🩵`,
    `Secret #32: Thank you for healing me❤️‍🩹❤️‍🩹`,
    `Secret #33: I'm hungeryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy, I want Ice cream!!!! I want sushi!!!!`,
    `Secret #34: Can I be dirty here?😗😏`
];

// --- 2. PERSONALIZED RELATIONSHIP QUIZ DATA ---
const quizQuestions = [
    {
        question: "When I say 'I don't care, you pick where we eat', what do I actually mean?",
        options: [
            "I genuinely don't care at all.",
            "I want you to magically guess the exact restaurant I'm thinking of.",
            "I'm going to reject your first 3 choices anyway."
        ],
        correctAnswer: 1
    },
    {
        question: "What usually happens 15 minutes into a movie that we spent an hour choosing?",
        options: [
            "We are both deeply invested in the plot.",
            "We end up making out and completely forget about the movie. 😘",
            "I am looking at my phone asking you what just happened."
        ],
        correctAnswer: 1
    },
    {
        question: "What happens when my food arrives and you 'weren't hungry'?",
        options: [
            "You stick to your word and don't eat anything.",
            "You instantly transform into a human seagull and eat half my fries. 🍟",
            "We happily and evenly split everything like civilized adults."
        ],
        correctAnswer: 1
    },
    {
        question: "If we need to leave the house at 7:00 PM, what time do you actually start getting ready?",
        options: [
            "6:00 PM like a normal, punctual person.",
            "6:55 PM with complete, unearned confidence.",
            "We are already 20 minutes late by the time this question loads."
        ],
        correctAnswer: 1
    },
    {
        question: "What is my absolute worst / most annoying habit?",
        options: [
            "Leaving empty cups and water bottles everywhere.",
            "My terrible, loud singing in the shower.",
            "Being completely, unproductively obsessed with you."
        ],
        correctAnswer: 2
    }
];

// --- SILLY LOGIN SYSTEM DATA ---
const loginQuestions = [
    {
        question: "Who is trying to log into this system?",
        options: ["A random hacker", "The prettiest girl ever (Leila) 🩵", "An annoying goblin"],
        correctAnswer: 1
    },
    {
        question: "What is our official anniversary date?",
        options: ["A random Tuesday", "The day you finally stopped playing hard to get 🗓️", "I forgot (Select this if you want the site deleted)"],
        correctAnswer: 1
    },
    {
        question: "Where or when did our first kiss happen?",
        options: ["It was highly cinematic and perfect ✨", "We don't talk about how awkward it was", "Wait, we've kissed?!"],
        correctAnswer: 0
    },
    {
        question: "What is Psalm's absolute favorite snack of all time?",
        options: ["A healthy fruit salad", "Whatever sweet treat you are currently eating 🍫", "Air"],
        correctAnswer: 1
    },
    {
        question: "Exactly how many kids do we want to have in the future?",
        options: ["Zero, just 14 cats", "A perfectly reasonable number (like 2 or 3) 👶", "An entire soccer team"],
        correctAnswer: 1
    },
    {
        question: "What is the official chosen name for our very first child?",
        options: ["Something perfectly matched and beautiful 🤫", "Psalm Junior", "X Æ A-12"],
        correctAnswer: 0
    },
    {
        question: "Be completely honest: Do you actually love me?",
        options: ["With my whole entire heart 🩵", "Eh, you're alright I guess", "Only when you buy me food"],
        correctAnswer: 0
    },
    {
        question: "Settling the score once and for all: Who actually fell first?",
        options: ["Leila (obviously)", "Psalm (he was desperate) 🧎‍♂️", "It was a simultaneous cosmic connection"],
        correctAnswer: 1
    },
    {
        question: "What is the passcode phrase for final entry?",
        options: ["Open Sesame", "Password123", "Psalm is the best boyfriend alive 🏆"],
        correctAnswer: 2
    }
];

// --- STATE MANAGEMENT ---
let currentLoginIndex = 0;
let currentQuestionIndex = 0;
let hasLoggedIn = false;
let hasPassedQuiz = false; 

// Run initial configurations safely when browser window finishes loading everything
window.onload = function() {
    loadLoginQuestion();
    loadQuizQuestion();
    setRandomSecretMessage();
};

// --- SILLY LOGIN SYSTEM LOGIC ---
function loadLoginQuestion() {
    const feedbackEl = document.getElementById('login-feedback');
    if (feedbackEl) feedbackEl.innerText = "";

    if (currentLoginIndex >= loginQuestions.length) {
        // FIX: Update validation state to true BEFORE routing or hiding layout components
        hasLoggedIn = true;
        document.getElementById('login-page').style.display = 'none';
        
        const mainNav = document.getElementById('mainNav');
        if (mainNav) mainNav.style.display = 'flex';
        
        showPage('home');
        return;
    }

    const currentLogin = loginQuestions[currentLoginIndex];
    const questionTextEl = document.getElementById('login-question-text');
    if (questionTextEl) questionTextEl.innerText = currentLogin.question;

    const optionsContainer = document.getElementById('login-options-container');
    if (!optionsContainer) return;
    optionsContainer.innerHTML = "";

    currentLogin.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.innerText = option;
        button.onclick = () => checkLoginAnswer(index);
        optionsContainer.appendChild(button);
    });
}
function checkLoginAnswer(selectedIndex) {const feedbackEl = document.getElementById('login-feedback');const currentLogin = loginQuestions[currentLoginIndex];if (!feedbackEl) return;if (selectedIndex === currentLogin.correctAnswer) {feedbackEl.style.color = "#4a7c59";feedbackEl.innerText = "Access Granted! Loading next step... 💻";currentLoginIndex++;setTimeout(loadLoginQuestion, 1000);} else {feedbackEl.style.color = "#f99fb0";feedbackEl.innerText = "🛑 ACCESS DENIED! Identity verification mismatch.";}}// Page Switcher Navigation Trackerfunction showPage(pageId) {// SECURITY BLOCKER 1: Can't see anything if not logged inif (!hasLoggedIn) {return;}// SECURITY BLOCKER 2: Restrict if trying to sneak to proposal without passing quizif (pageId === 'proposal' && !hasPassedQuiz) {const feedbackEl = document.getElementById('quiz-feedback');if (feedbackEl) {feedbackEl.style.color = "#f99fb0";feedbackEl.innerText = "🔒 Access Denied! You must clear the relationship quiz first.";}return;}// Hide all pages manually using standard style overridesdocument.querySelectorAll('.page').forEach(page => {page.style.display = 'none';page.classList.remove('active');});document.querySelectorAll('nav button').forEach(btn => {btn.classList.remove('active');});// Make the targets visible directlyconst targetPage = document.getElementById(pageId);const targetNav = document.getElementById('nav-' + pageId);if (targetPage) {targetPage.style.display = 'block';targetPage.classList.add('active');}if (targetNav) {targetNav.classList.add('active');}if (pageId === 'proposal') {resetNoButton();}}// --- 3. QUIZ SYSTEM LOGIC ---function loadQuizQuestion() {const feedbackEl = document.getElementById('quiz-feedback');if (feedbackEl) feedbackEl.innerText = "";if (currentQuestionIndex >= quizQuestions.length) {hasPassedQuiz = true;document.getElementById('quiz-container').style.display = 'none';document.getElementById('quiz-intro').style.display = 'none';document.getElementById('quiz-success').style.display = 'block';return;}const currentQuiz = quizQuestions[currentQuestionIndex];const questionTextEl = document.getElementById('question-text');if (questionTextEl) questionTextEl.innerText = currentQuiz.question;const optionsContainer = document.getElementById('options-container');if (!optionsContainer) return;optionsContainer.innerHTML = "";currentQuiz.options.forEach((option, index) => {const button = document.createElement('button');button.classList.add('option-btn');button.innerText = option;button.onclick = () => checkAnswer(index);optionsContainer.appendChild(button);});}function checkAnswer(selectedIndex) {const feedbackEl = document.getElementById('quiz-feedback');const currentQuiz = quizQuestions[currentQuestionIndex];if (!feedbackEl) return;if (selectedIndex === currentQuiz.correctAnswer) {feedbackEl.style.color = "#4a7c59";feedbackEl.innerText = "Correct! Moving to the next question... ✨";currentQuestionIndex++;setTimeout(loadQuizQuestion, 1200);} else {feedbackEl.style.color = "#f99fb0";feedbackEl.innerText = "❌ Incorrect! Try another option...";}}// --- 4. RUNAWAY NO BUTTON LOGIC ---function moveNoButton() {const noBtn = document.getElementById('noBtn');const container = document.querySelector('.proposal-container');if (!noBtn || !container) return;const containerRect = container.getBoundingClientRect();const btnRect = noBtn.getBoundingClientRect();const maxX = containerRect.width - btnRect.width - 20;const maxY = containerRect.height - btnRect.height - 20;const randomX = Math.floor(Math.random() * Math.max(maxX, 1));const randomY = Math.floor(Math.random() * Math.max(maxY, 1));noBtn.style.position = 'absolute';noBtn.style.left = randomX + 'px';noBtn.style.top = randomY + 'px';}document.addEventListener("DOMContentLoaded", () => {const noBtn = document.getElementById('noBtn');if (noBtn) {noBtn.addEventListener('mouseenter', moveNoButton);noBtn.addEventListener('click', moveNoButton);}});function resetNoButton() {const noBtn = document.getElementById('noBtn');if (!noBtn) return;noBtn.style.position = 'static';setTimeout(() => {noBtn.style.position = 'absolute';noBtn.style.left = '55%';noBtn.style.top = '65%';}, 10);}// --- 5. SECRET MESSAGES LOGIC ---function setRandomSecretMessage() {const messageEl = document.getElementById('secretMessage');if (messageEl) {const randomIndex = Math.floor(Math.random() * secretMessages.length);messageEl.innerText = secretMessages[randomIndex];}}// --- 6. CELEBRATION OVERLAY ---let heartTimer = null;function celebrate() {const overlay = document.getElementById('successOverlay');if (overlay) overlay.style.display = 'flex';startHearts();}function closeOverlay() {const overlay = document.getElementById('successOverlay');if (overlay) overlay.style.display = 'none';if (heartTimer) clearInterval(heartTimer);}function startHearts() {const emojis = ['😂', '🩵', '✨', '💍', '🍕', '🥰'];heartTimer = setInterval(() => {const heart = document.createElement('div');heart.style.position = 'fixed';heart.style.bottom = '-50px';heart.style.fontSize = '24px';heart.style.zIndex = '99999';heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];heart.style.left = Math.random() * 100 + 'vw';let currentBottom = -50;const speed = Math.random() * 3 + 2;const slideInterval = setInterval(() => {currentBottom += speed;heart.style.bottom = currentBottom + 'px';if (currentBottom > window.innerHeight) {clearInterval(slideInterval);heart.remove();}}, 20);document.body.appendChild(heart);}, 400);}

