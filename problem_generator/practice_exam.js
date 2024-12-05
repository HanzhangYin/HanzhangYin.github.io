document.addEventListener("DOMContentLoaded", function() {
    // Select all problem sections
    const problemSections = document.querySelectorAll('.problem-section');

    problemSections.forEach(function(section) {
        // Initialize the problem data for each section
        section.currentProblem = {};
        section.currentHints = [];
        section.currentSolution = '';

        // Initialize the problem
        generateProblem(section);

        // Add event listeners
        const generateButton = section.querySelector('.generate-problem');
        const showHintButton = section.querySelector('.show-hint');
        const showSolutionButton = section.querySelector('.show-solution');
        const difficultySlider = section.querySelector('.difficulty');
        const difficultyLabel = section.querySelector('.difficulty-label');

        generateButton.addEventListener('click', function() {
            generateProblem(section);
        });

        showHintButton.addEventListener('click', function() {
            toggleHint(section);
        });

        showSolutionButton.addEventListener('click', function() {
            toggleSolution(section);
        });

        difficultySlider.addEventListener('input', function() {
            updateDifficultyLabel(section);
            generateProblem(section);
        });
    });
});

function updateDifficultyLabel(section) {
    const difficulty = section.querySelector('.difficulty').value;
    const label = section.querySelector('.difficulty-label');
    if (difficulty == 1) {
        label.innerText = 'Basic';
    } else if (difficulty == 2) {
        label.innerText = 'Intermediate';
    } else {
        label.innerText = 'Advanced';
    }
}

const problemGenerators = {
    linear: generateLinearProblem,
    quadratic: generateQuadraticProblem,
    trigonometric: generateTrigonometricProblem,
    multiple: generateMultipleChoiceProblem
};

function generateProblem(section) {
    const problemType = section.getAttribute('data-problem-type');
    const generatorFunction = problemGenerators[problemType];

    if (generatorFunction) {
        generatorFunction(section);
    } else {
        console.error(`Unknown problem type: ${problemType}`);
    }
}

function generateLinearProblem(section) {
    const difficulty = section.querySelector('.difficulty').value;
    const problemContainer = section.querySelector('.problem-container');
    const hintContainer = section.querySelector('.hint-container');
    const solutionContainer = section.querySelector('.solution-container');

    // Clear previous hints and solutions
    hintContainer.style.display = 'none';
    solutionContainer.style.display = 'none';

    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const currentProblem = {
        text: `Find the value of \\( x \\) in the equation \\( ${a}x + ${b} = 0 \\).`
    };
    const currentSolution = `\\( x = \\frac{-${b}}{${a}} = ${(-b / a).toFixed(2)} \\)`;
    const currentHints = [
        `Subtract \\( ${b} \\) from both sides: \\( ${a}x = -${b} \\).`,
        `Divide both sides by \\( ${a} \\): \\( x = \\frac{-${b}}{${a}} \\).`
    ];

    // Display the problem
    problemContainer.innerHTML = currentProblem.text;

    // Store the problem data in the section's dataset
    section.currentProblem = currentProblem;
    section.currentHints = currentHints;
    section.currentSolution = currentSolution;

    // Render mathematical expressions
    renderMathInElement(problemContainer);
}

function generateQuadraticProblem(section) {
    const difficulty = section.querySelector('.difficulty').value;
    const problemContainer = section.querySelector('.problem-container');
    const hintContainer = section.querySelector('.hint-container');
    const solutionContainer = section.querySelector('.solution-container');

    // Clear previous hints and solutions
    hintContainer.style.display = 'none';
    solutionContainer.style.display = 'none';

    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 10) - 5;
    const c = Math.floor(Math.random() * 10) + 1;
    const currentProblem = {
        text: `Solve for \\( x \\) in the quadratic equation \\( ${a}\\cdot x^2 + ${b}x + ${c} = 0 \\).`
    };
    const discriminant = b * b - 4 * a * c;
    let currentSolution = '';
    let currentHints = [];

    if (discriminant < 0) {
        currentSolution = `The equation has no real solutions because the discriminant \(begin:math:text$ D = b^2 - 4ac = ${discriminant} \\) is negative.`;
        currentHints = [
            `Calculate the discriminant: \\( D = b^2 - 4 \\times a \\times c = \\text{discriminant} \\).`,
            `Since \\(D < 0 \\), there are no real solutions.`
        ];
    } else {
        const sqrtDiscriminant = Math.sqrt(discriminant).toFixed(2);
        const root1 = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
        const root2 = ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
        currentSolution = `\\( x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\)
\\( x = \\frac{-(${b}) \\pm \\sqrt{${b}^2 - 4 \\times ${a} \\times ${c}}}{2 \\times ${a}} \\)
\\( x = \\frac{${-b} \\pm ${sqrtDiscriminant}}{${2 * a}} \\)
\\( x = ${root1} \\text{ or } x = ${root2} \\)`;
        currentHints = [
            `Use the quadratic formula: \\(x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\).`,
            `Calculate the discriminant: \\(D = ${b}^2 - 4 \\times ${a} \\times ${c} = ${discriminant} \\).`,
            `Compute the square root: \\(\\sqrt{${discriminant}} = ${sqrtDiscriminant} \\).`,
            `Find the solutions: \\(x = ${root1} \\) and \\(x = ${root2} \\).`
        ];
    }

    // Display the problem
    problemContainer.innerHTML = currentProblem.text;

    // Store the problem data in the section's dataset
    section.currentProblem = currentProblem;
    section.currentHints = currentHints;
    section.currentSolution = currentSolution;

    // Render mathematical expressions
    renderMathInElement(problemContainer);
}

function generateTrigonometricProblem(section) {
    const difficulty = section.querySelector('.difficulty').value;
    const problemContainer = section.querySelector('.problem-container');
    const hintContainer = section.querySelector('.hint-container');
    const solutionContainer = section.querySelector('.solution-container');

    // Clear previous hints and solutions
    hintContainer.style.display = 'none';
    solutionContainer.style.display = 'none';

    const k = [1, 2, 3][Math.floor(Math.random() * 3)];
    const c = Math.floor(Math.random() * 2) + 1;
    const currentProblem = {
        text: `Solve for \\(x \\) in the equation \\(\\sin(${k}x) = ${c}/2 \\) where \\(0 \\leq x \\leq 2\\pi \\).`
    };
    const currentSolution = `\\( ${k}x = \\sin^{-1}\\left(\\frac{${c}}{2}\\right) + 2\\pi n \\quad \\text{or} \\quad ${k}x = \\pi - \\sin^{-1}\\left(\\frac{${c}}{2}\\right) + 2\\pi n \\)
\\( x = \\frac{1}{${k}} \\left( \\sin^{-1}\\left(\\frac{${c}}{2}\\right) + 2\\pi n \\right) \\)
\\( x = \\frac{1}{${k}} \\left( \\pi - \\sin^{-1}\\left(\\frac{${c}}{2}\\right) + 2\\pi n \\right) \\)
(\\text{for all integers } n \\text{ such that } x \\in [0, 2\\pi])`;
    const currentHints = [
        `Apply the inverse sine function to both sides.`,
        `Divide both sides by \\(${k} \\) to solve for \\(x \\).`,
        `Consider all solutions within the interval \\(0 \\leq x \\leq 2\\pi \\).`
    ];

    // Display the problem
    problemContainer.innerHTML = currentProblem.text;

    // Store the problem data in the section's dataset
    section.currentProblem = currentProblem;
    section.currentHints = currentHints;
    section.currentSolution = currentSolution;

    // Render mathematical expressions
    renderMathInElement(problemContainer);
}

function toggleHint(section) {
    const hintContainer = section.querySelector('.hint-container');
    if (hintContainer.style.display === 'none') {
        hintContainer.style.display = 'block';
        const currentHints = section.currentHints;
        hintContainer.innerHTML = currentHints.map(hint => `<p>${hint}</p>`).join('');
        renderMathInElement(hintContainer);
    } else {
        hintContainer.style.display = 'none';
    }
}

function toggleSolution(section) {
    const solutionContainer = section.querySelector('.solution-container');
    if (solutionContainer.style.display === 'none') {
        solutionContainer.style.display = 'block';
        const currentSolution = section.currentSolution;
        solutionContainer.innerHTML = currentSolution;
        renderMathInElement(solutionContainer);
    } else {
        solutionContainer.style.display = 'none';
    }
}

function generateMultipleChoiceProblem(section) {
    const problems = [
        {
            text: "What is the domain of \\(f(x) = \\arcsin(x)\\)?",
            options: ["\\([0, \\pi]\\)", "\\((-\\frac{\\pi}{2}, \\frac{\\pi}{2})\\)", "\\([-1,1]\\)", "\\((-1,1)\\)"],
            correct: 2,
            hints: ["The domain of \\(\\arcsin(x)\\) is the set of values for which it is defined.", "\\(\\arcsin(x)\\) is only defined for inputs between \\(-1\\) and \\(1\\)."]
        },
        {
            text: "What is the domain of \\(f(x) = \\arctan(x)\\)?",
            options: ["\\([-\\frac{\\pi}{2}, \\frac{\\pi}{2}]\\)", "\\((-\\frac{\\pi}{2}, \\frac{\\pi}{2})\\)", "\\([-1,1]\\)", "\\((-\\infty, \\infty)\\)"],
            correct: 3,
            hints: ["\\(\\arctan(x)\\) is defined for all real numbers."]
        }
    ];

    const problemContainer = section.querySelector('.problem-container');
    const hintContainer = section.querySelector('.hint-container');
    const solutionContainer = section.querySelector('.solution-container');

    // Clear previous hints and solutions
    hintContainer.style.display = 'none';
    solutionContainer.style.display = 'none';

    const problem = problems[Math.floor(Math.random() * problems.length)];

    // Display the problem
    const optionsHtml = problem.options.map(
        (option, index) => `<label><input type="radio" name="mcq" value="${index}"> ${option}</label><br>`
    ).join('');
    problemContainer.innerHTML = `${problem.text}<br>${optionsHtml}`;

    // Store the problem data
    section.currentProblem = problem;
    section.currentHints = problem.hints;
    section.currentSolution = `Correct answer: ${problem.options[problem.correct]}`;

    renderMathInElement(problemContainer);
}

document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey || event.keyCode === 123) { // Ctrl or F12
        event.preventDefault();
    }
});