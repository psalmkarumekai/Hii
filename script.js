// --- 1. ROTATING SECRET MESSAGES CONFIG ---
// Every time she refreshes or opens the site, it randomly picks one of these 25 romantic + funny mix!
const secretMessages = [
    "Secret #1: I love you more than ice cream. And you know how much I love ice cream. But seriously, you're my absolute favorite person in the universe. 🩵",
    "Secret #2: I still look at you when you aren't looking and think 'damn, I really hit the jackpot'. Thanks for being mine. 👀✨",
    "Secret #3: Your laugh is my favorite sound in the world (and when you moan, no body needs to know that tho), even when you're laughing at me for doing something stupid. 🥰😂",
    "Secret #4: You are officially stuck with me forever. No refunds, no exchanges, and absolutely no store credit. Love you! 🛑🤍",
    "Secret #5: I hope you never forget how amazing you are, you dont need to be like anyone else, you are perfect just the way you are🩵",
    "Secret #6: If we were in a horror movie, I'd totally sacrifice myself to save you. (Unless it's a snake, then we are both going down together). 🕷️🫶",
    "Secret #7: I love you more today than I did yesterday. Except for that brief moment earlier when you chose Imaan over me, I was really upset.🤭",
    "Secret #8: You are my safe place, my best friend, and my favorite distraction. Life is a million times better with you in it. 🪐🤍",
    "Secret #9: Thank you for putting up with my chaotic energy and loving me anyway. You deserve a medal, but for now, you just get my whole heart. 🏅🩵",
    "Secret #10: Out of all the people in the world, you're the one I want to annoy for the next 80 years. You're stuck with me! 🤪💍",
    "Secret #11: I am so deeply in love with you that even your cold toes touching my legs under the blankets wont ever ruin my mood. 🥶🩵",
    "Secret #12: Just a reminder that you are gorgeous, smart, incredibly funny, and your taste in partners is absolutely flawless. 😏✨",
    "Secret #13: Whenever I am having a rough day, just getting a text from you or seeing your face completely resets my brain. Thank you for being my peace. 🤍🌱",
    "Secret #14: I promise to always listen to you vent about your day, even if I have no idea who the people you are mad at are. I'm on your side anyway. 🗣️😤",
    "Secret #15: My favorite place in the entire world is wherever you are. (Though sitting on the couch next to you while eating snacks is a very close second). 🍿🛋️",
    "Secret #16: I love you so much that I will gladly go to the store at 10 PM just because you casually mentioned you were craving a very specific sweet treat. 🍫🚗",
    "Secret #17: You make standard, boring daily life feel like an adventure. I love doing absolutely nothing with you. 🛒🩵",
    "Secret #18: I am completely convinced we were made for each other. Either that, or we share the exact same rare kind of brain damage. 😂🧠🩵",
    "Secret #19: You have the biggest heart of anyone I know. I am so lucky that I get to keep a huge piece of it, even tho i want all of. 🗺️🤍",
    "Secret #20: I still get butterflies when I know I'm about to see you. Yes, even after all this time. 🦋✨",
    "Secret #21: I promise to always carry the heavy bags, kill the scary bugs, and let you choose the first bite of my food. That's real love. 🕷️🥡",
    "Secret #22: You're my favorite person to send stupid memes to. Thank you for always matching my frequency. 📱🤪",
    "Secret #23: If being obsessed with you was a full-time job, I'd be a billionaire by now. 💼💰🩵",
    "Secret #24: Thank you for making me laugh until my stomach hurts. You are the absolute joy of my life. ☀️🤍",
    "Secret #25: No matter what happens in the future, please remember that you have an permanent home right here next to me. I love you to the moon and back. 🌙🩵"
    "Secret #26: Your story is yours and no body else's, God has it written down and drawn out for you, dont try to change what God has written out just because you want to be better than someone else, never forget that🩵",
    "Secret #27: Your arms will always be my go to through all my emotions🌹😊",
    "Secret #27: Forever and always, Im never letting go🦄🩵",
    "Secret #28: I love you more hehe🌹🦄🍩🍨",
    "Secret #29: I farted👌😁😎 and it smells like candy",
    "Secret #30: You dont need people's approval to prove that you are great🩵🩵🩵",
    "Secret #31: Thank you for healing me❤️‍🩹❤️‍🩹",
    "Secret #32: I'm hungeryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy, I want Ice cream!!!! I want sushi!!!!",
    "Secret #33: Can I be dirty here?😗😏",
    
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

let currentQuestionIndex = 0;

// Initialize features on load
window.onload = function() {
    loadQuizQuestion();
    setRandomSecretMessage();
};

// Page Switcher Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');
    document.getElementById('nav-' + pageId).classList.add('active');
    
    if(pageId === 'proposal') {
        resetNoButton();
    }
}

// --- 3. QUIZ SYSTEM LOGIC ---
function loadQuizQuestion() {
    const feedbackEl = document.getElementById('quiz-feedback');
    feedbackEl.innerText = ""; // Clear old message

    if (currentQuestionIndex >= quizQuestions.length) {
        // Quiz completed successfully
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('quiz-intro').style.display = 'none';
        document.getElementById('quiz-success').style.display = 'block';
        return;
    }

    const currentQuiz = quizQuestions[currentQuestionIndex];
    document.getElementById('question-text').innerText = currentQuiz.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ""; // Clear old buttons

    currentQuiz.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const feedbackEl = document.getElementById('quiz-feedback');
    const currentQuiz = quizQuestions[currentQuestionIndex];

    if (selectedIndex === currentQuiz.correctAnswer) { 
        feedbackEl.style.color = "#4a7c59";
        feedbackEl.innerText = "Correct! Moving to the next question... ✨";
        currentQuestionIndex++;
        setTimeout(loadQuizQuestion, 1200);
    } else {
        feedbackEl.style.color = "#f99fb0";
        feedbackEl.innerText = "❌ Incorrect! (Try another option, I won't tell anyone)";
    }
}

// --- 4. RUNAWAY NO BUTTON LOGIC ---
const noBtn = document.getElementById('noBtn');
const container = document.querySelector('.proposal-container');

function moveNoButton() {
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width - 20;
    const maxY = containerRect.height - btnRect.height - 20;

    const randomX = Math.floor(Math.random() * Math.max(maxX, 1));
    const randomY = Math.floor(Math.random() * Math.max(maxY, 1));

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

function resetNoButton() {
    noBtn.style.position = 'static';
    setTimeout(() => {
        noBtn.style.position = 'absolute';
        noBtn.style.right = '20%';
        noBtn.style.top = '65%';
    }, 10);
}

// --- 5. SECRET MESSAGES LOGIC ---
function setRandomSecretMessage() {
    const messageEl = document.getElementById('secretMessage');
    const randomIndex = Math.floor(Math.random() * secretMessages.length);
    messageEl.innerText = secretMessages[randomIndex];
}

// --- 6. CELEBRATION OVERLAY ---
function celebrate() {
    document.getElementById('successOverlay').style.display = 'flex';
    startHearts();
}

function closeOverlay() {
    document.getElementById('successOverlay').style.display = 'none';
}

function startHearts() {
    const emojis = ['😂', '🩵', '✨', '💍', '🍕', '🥰'];
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 2 + 2) + 's'; 
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 4000);
    }, 300);
}
