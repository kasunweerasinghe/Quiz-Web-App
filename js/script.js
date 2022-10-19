//question array
const quizData = [
    {
        question: "1. What is the best way to apply bold styling to text??",
        a: "<strong>",
        b: "Use CSS.",
        c: "<bold>",
        d: "<b>",
        correct: "a",
    },

    {
        question: "2. When is the <link> tag used?",
        a: "when linking style sheets, JavaScript, and icons for mobile apps",
        b: "when linking style sheets, favicons, and preloading assets",
        c: "when linking one webpage to another",
        d: "when linking style sheets, external URLs, and favicons",
        correct: "b",
    },

    {
        question: "3. How do you confirm that a document is written in HTML5??",
        a: "The server wraps the webpage in an HTML5 wrapper.",
        b: "Use the <!DOCTYPE html> declaration that starts the document.",
        c: "The browser receives encoding from the server to display the document with HTML5.",
        d: "It is enclosed in a <html> tag.",
        correct: "b",
    },

    {
        question: "4. What does the <label> element do??",
        a: "It labels webpages with important information.",
        b: "It creates an ID for a corresponding input element.",
        c: "It overrides the name attribute's value on a child input element.",
        d: "It programmatically associates a text label with an interface element.",
        correct: "d",
    },

    {
        question: "5. To get a link to open in a new window or tab, use the _ attribute?",
        a: "_blank",
        b: "_self",
        c: "_parent",
        d: "_new",
        correct: "a",
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

