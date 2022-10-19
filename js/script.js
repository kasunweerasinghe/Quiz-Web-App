const quizData = [
    {
        question:'Which language runs ina web Browser?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },

    {
        question:'What does CSS stand for?',
        a: 'Central Style Sheets',
        b: 'Cascading Style Sheet',
        c: 'Cascading Simple Sheets',
        d: 'Cars SUVs Sailboats',
        correct: 'b'
    },

    {
        question:'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Hypertext Markdown Language',
        c: 'Hyperloop Machine Language',
        d: 'Helicopter Terminals Motorboats Lamborghinis',
        correct: 'a'
    },

    {
        question:'What year Java Script launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'None of above',
        correct: 'b'
    }


];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');

const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score =0;

loadQuiz();

//load all quiz
function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText=currentQuizData.question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers(){

}

