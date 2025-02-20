const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Shakespeare", "Hemingway", "Tolkien", "Rowling"],
        answer: "Shakespeare"
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "8", "10", "12"],
        answer: "8"
    },
    {
        question: "Which gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "What is the largest mammal on Earth?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
        answer: "Blue Whale"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Oxygen", "Osmium", "Oxide"],
        answer: "Oxygen"
    },
    {
        question: "Which year did World War II end?",
        options: ["1942", "1945", "1948", "1950"],
        answer: "1945"
    },
    {
        question: "How many continents are there on Earth?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "Which programming language is known as the backbone of the web?",
        options: ["Python", "C++", "JavaScript", "Java"],
        answer: "JavaScript"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next");
const resultElement = document.getElementById("result");

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    let currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(option => {
        let button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });

    nextButton.style.display = "none";
}

function checkAnswer(selectedOption) {
    let correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    nextButton.style.display = "block";
}

function showResult() {
    questionElement.textContent = `Game Over! Your score is ${score}/${questions.length}`;
    optionsElement.innerHTML = "";
    nextButton.textContent = "Restart";
    nextButton.style.display = "block";
    nextButton.addEventListener("click", restartQuiz);
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.textContent = "Next";
    loadQuestion();
}
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("some-button");
    if (button) {
        button.addEventListener("click", function() {
            console.log("Button clicked!");
        });
    } else {
        console.error("Element with id 'some-button' not found!");
    }
});
console.log(document.getElementById("some-button"));


nextButton.addEventListener("click", loadQuestion);
document.getElementById("some-button").addEventListener("click", function() {
    // Do something
});


// Load first question
loadQuestion();
