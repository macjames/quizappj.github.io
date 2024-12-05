const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
        answer: 2
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const feedbackElement = document.getElementById("feedback");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const retryBtn = document.getElementById("retryBtn");

// Start the quiz
const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    feedbackElement.innerText = "";
    resultElement.style.display = "none";
    document.getElementById("quiz").style.display = "block";
    nextBtn.style.display = "none";
    showQuestion();
};

// Show the current question
const showQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option");
        button.addEventListener("click", () => selectOption(index));
        optionsElement.appendChild(button);
    });
};

// Handle option selection
const selectOption = (index) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (index === currentQuestion.answer) {
        score++;
        feedbackElement.innerText = "Correct!";
    } else {
        feedbackElement.innerText = "Wrong! The correct answer was: " + currentQuestion.options[currentQuestion.answer];
    }
    nextBtn.style.display = "block";
};

// Move to the next question or show results
const nextQuestion = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        feedbackElement.innerText = "";
        nextBtn.style.display = "none";
    } else {
        showResult();
    }
};

// Show the final result
const showResult = () => {
    document.getElementById("quiz").style.display = "none";
    resultElement.style.display = "block";
    scoreElement.innerText = `${score} out of ${questions.length}`;
    if (score === questions.length) {
        resultElement.innerHTML += "<h3>Congratulations! You got a perfect score!</h3>";
    } else {
        resultElement.innerHTML += "<h3>Good try! Better luck next time!</h3>";
    }
};

// Retry the quiz
retryBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);

// Start the quiz on page load
startQuiz();