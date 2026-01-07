//your JS code here.
const questions = [
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: 3
    },
    {
        question: "What does CSS stand for?",
        options: ["Central Style Sheets", "Cascading Style Sheets", "Computer Style System", "Colorful Style Sheets"],
        answer: 1
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        answer: 0
    }
];

let index = 0; // current question index

// Display first question when page loads
window.onload = () => {
    sessionStorage.clear();  // start fresh
    loadQuestion();
};

function loadQuestion() {
    document.getElementById("question").textContent = questions[index].question;

    let optionBox = document.getElementById("options");
    optionBox.innerHTML = "";

    questions[index].options.forEach((opt, i) => {
        const optionDiv = document.createElement("div");
        optionDiv.textContent = opt;
        optionDiv.onclick = () => selectOption(i);
        optionBox.appendChild(optionDiv);
    });

    if (index === questions.length - 1) {
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("finishBtn").style.display = "block";
    }
}

function selectOption(optionIndex) {
    // Store selected option in sessionStorage
    sessionStorage.setItem(`q${index}`, optionIndex);
}

function nextQuestion() {
    index++;
    loadQuestion();
}

function finishQuiz() {
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        let selected = sessionStorage.getItem(`q${i}`);

        if (selected != null && parseInt(selected) === questions[i].answer) {
            score++;
        }
    }

    document.getElementById("quiz-box").style.display = "none";
    document.getElementById("result-box").style.display = "block";
    document.getElementById("score").textContent = `${score} / ${questions.length}`;
}

function restartQuiz() {
    sessionStorage.clear();
    location.reload();
}
