const quizData = [
    {
        question: 'How old is Frank?',
        a: '10',
        b: '20',
        c: '30',
        d: '40',
        correct: 'c'
    },
    {
        question: 'What is the shortest animal?',
        a: 'ant',
        b: 'bird',
        c: 'cat',
        d: 'dog',
        correct: 'a'
    },
    {
        question: 'Who is the first Prime Minister of Thailand?',
        a: 'Pradit',
        b: 'Prayuth',
        c: 'Parina',
        d: 'Pravit',
        correct: 'a'
    },
    {
        question: 'What is HTML stancd for?',
        a: 'Hyper Terrible Mood Language',
        b: 'Hyper Text Markup Language',
        c: 'Hot Tattoo Marble Lion',
        d: 'None of above',
        correct: 'b'
    },
    {
        question: 'What year was Javascipt Launched?',
        a: '1000',
        b: '1001',
        c: '1002',
        d: 'None of above',
        correct: 'd'
    }
]

const quiz = document.getElementById('quiz')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const answersEls = document.querySelectorAll('.answer')

let currentQuestion = 0
let score = 0

loadQuiz();

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuestion]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.a
}

function getSelected() {
    let answer = undefined

    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false
    })
}

submitBtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++
        }

        currentQuestion++
        if (currentQuestion < quizData.length) {
            loadQuiz()

        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2>
            <button onclick="location.reload()">Reload</button>`
        }
    }





})