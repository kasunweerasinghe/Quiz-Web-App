//question array
const quizData = [
    {
        question: "1. What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },

    {
        question: "2. What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },

    {
        question: "3. What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },

    {
        question: "4. Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },

    {
        question: "5. The web is based on?",
        a: "Images",
        b: "Text",
        c: "Information",
        d: "HTML",
        correct: "d",
    },

    {
        question: "6. Choose the correct HTML tag for the largest heading?",
        a: "<heading>",
        b: "<h6>",
        c: "<head>",
        d: "<h1>",
        correct: "d",
    },

    {
        question: "7. What is the correct HTML tag for inserting a line break??",
        a: "<br>",
        b: "<lb>",
        c: "<break>",
        d: "<h1>",
        correct: "a",
    },

    {
        question: "8. Choose the correct HTML tag for the largest heading???",
        a: "<H6>",
        b: "<H2>",
        c: "<H1>",
        d: "<h5>",
        correct: "c",
    },

    {
        question: "9. What does FTP stand for????",
        a: "Files To Put online",
        b: "File Transfer Protocol",
        c: "File Transfer Please",
        d: "none of above",
        correct: "b",
    },

    {
        question: "10. How can you make a numbered list?????",
        a: "<ol>",
        b: "<ul>",
        c: "<dl>",
        d: "<list>",
        correct: "a",
    },


];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');

const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
loadAllQuiz();

//load all quiz
function loadAllQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

//deselect answers
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

//get select answers
function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

//Submit btn listner
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadAllQuiz()
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2> <button onclick="location.reload()">Reload</button>`
        }
    }
});

