const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startQuiz() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.textContent = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    clearStatusClass(document.body);
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";

    // Show feedback message
    const feedback = document.createElement('div');
    feedback.textContent = correct ? "Correct! 🎉" : "Wrong! ❌";
    feedback.classList.add('feedback');
    answerButtonsElement.appendChild(feedback);

    setStatusClass(selectedButton, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.tagName === "BUTTON") {
            setStatusClass(button, button.dataset.correct === "true");
            button.disabled = true; // Disable buttons after selection
        }
    });

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.textContent = 'Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'Given the polynomial \\(f(z) = z^2 + 4z + 2\\), there exists a real number \\(a\\) such that \\(f(a) = 0\\)?',
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false }
        ]
    },
    {
question: 'The graph of the hyperbola \\(4x^2 - 9y^2 = 1\\) has two \\(x\\)-intercepts \\((\\pm \\frac{1}{2} , 0)\\).',
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false }
        ]
    },
    {
question: '\\(y = \\pm \\pi/2\\) are the only horizontal asymptotes of the graph of \\(h(x) = \\arctan(x)\\).',
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false }
        ]
    },
    {
question: 'Consider \\(p(x) = 3 - 3e^x\\). The right-end behavior of \\(p(x)\\) as \\(x \\to \\infty\\) is \\(p(x) \\to 3\\).',
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false }
        ]
    }
];