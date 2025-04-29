const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "Which HTML element is used to define the largest heading?",
        options: ["<h6>", "<h1>", "<head>", "<header>"],
        correctAnswer: "<h1>"
    },
    {
        question: "Which CSS property is used to change the background color?",
        options: ["color", "background-color", "bgcolor", "background-image"],
        correctAnswer: "background-color"
    },
    {
        question: "Which of the following is used to add a comment in JavaScript?",
        options: ["<!-- comment -->", "// comment", "/* comment */", "# comment"],
        correctAnswer: "// comment"
    },
    {
        question: "What does the 'console.log()' function do in JavaScript?",
        options: ["Displays an alert", "Logs information to the console", "Shows an error", "Opens a new window"],
        correctAnswer: "Logs information to the console"
    }
];

const quiz = document.getElementById("quiz");
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.options[0];
    b_text.innerText = currentQuizData.options[1];
    c_text.innerText = currentQuizData.options[2];
    d_text.innerText = currentQuizData.options[3];
}

function deselectAnswers() {
    const answers = document.querySelectorAll('.answer');
    answers.forEach(answerElement => answerElement.checked = false);
}

function getselected() {
    const answers = document.querySelectorAll('.answer');
    let answer;
    answers.forEach(answerElement => {
        if (answerElement.checked) {
            answer = answerElement.value;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getselected();
    if (answer === quizData[currentQuiz].correctAnswer) {
        score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `<h2>You answered ${score} / ${quizData.length} questions correctly</h2> 
        <button onclick="location.reload()">Reload</button>`;
    }
});