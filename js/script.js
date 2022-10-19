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
        question: "6. What is the line-height property primarily used for?",
        a: "to control the height of the space between two lines of content",
        b: "to control the height of the space between heading elements",
        c: "to control the height of the character size",
        d: "to control the width of the space between characters",
        correct: "a",
    },

    {
        question: "7. What is not true about class selectors?",
        a: "Only one class value can be assigned to an element.",
        b: "An element can have multiple class value.",
        c: "Class selectors are marked with a leading period.",
        d: "More than one element can have the same class value.",
        correct: "a",
    },

    {
        question: "8. When using position: fixed, what will the element always be positioned relative to?",
        a: "the closest element with position: relative",
        b: "the viewport",
        c: "the parent element",
        d: "the wrapper element",
        correct: "b",
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
        question: "10. How would you make the first letter of every paragraph on the page red?",
        a: "p::first-letter { color: red; }",
        b: "p:first-letter { color: red; }",
        c: "first-letter::p { color: red; }",
        d: "first-letter:p { color: red; }",
        correct: "a",
    },

    {
        question: "11. Which statement is the correct way to create a variable called rate and assign it the value 100?",
        a: "let rate = 100;",
        b: "let 100 = rate;",
        c: "100 = let rate;",
        d: "rate = 100;",
        correct: "a",
    },

    {
        question: "12. Which statement creates a new object using the Person constructor? Which statement creates a new Person object called student?",
        a: "var student = new Person();",
        b: "var student = construct Person;",
        c: "var student = Person();",
        d: "var student = construct Person();",
        correct: "a",
    },

    {
        question: "13. Which Object method returns an iterable that can be used to iterate over the properties of an object?",
        a: "Object.get()",
        b: "Object.loop()",
        c: "Object.each()",
        d: "Object.keys()",
        correct: "d",
    },

    {
        question: "14. Which of the following is not a keyword in JavaScript?",
        a: "this",
        b: "catch",
        c: "array",
        d: "function",
        correct: "c",
    },

    {
        question: "15. Which choice is an incorrect way to define an arrow function that returns an empty object?",
        a: "=> ({})",
        b: "=> {}",
        c: "=> { return {};}",
        d: "=> (({}))",
        correct: "b",
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

