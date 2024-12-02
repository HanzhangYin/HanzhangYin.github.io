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
    trigonometric: generateTrigonometricProblem
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
        text: `Find the value of \$begin:math:text$ x \\$end:math:text$ in the equation \$begin:math:text$ ${a}x + ${b} = 0 \\$end:math:text$.`
    };
    const currentSolution = `\$begin:math:display$ x = \\\\frac{-${b}}{${a}} = ${(-b / a).toFixed(2)} \\$end:math:display$`;
    const currentHints = [
        `Subtract \$begin:math:text$ ${b} \\$end:math:text$ from both sides: \$begin:math:text$ ${a}x = -${b} \\$end:math:text$.`,
        `Divide both sides by \$begin:math:text$ ${a} \\$end:math:text$: \$begin:math:text$ x = \\\\frac{-${b}}{${a}} \\$end:math:text$.`
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
        text: `Solve for \$begin:math:text$ x \\$end:math:text$ in the quadratic equation \$begin:math:text$ ${a}x^2 + ${b}x + ${c} = 0 \\$end:math:text$.`
    };
    const discriminant = b * b - 4 * a * c;
    let currentSolution = '';
    let currentHints = [];

    if (discriminant < 0) {
        currentSolution = `The equation has no real solutions because the discriminant \$begin:math:text$ D = b^2 - 4ac = ${discriminant} \\$end:math:text$ is negative.`;
        currentHints = [
            `Calculate the discriminant: \$begin:math:text$ D = ${b}^2 - 4 \\\\times ${a} \\\\times ${c} = ${discriminant} \\$end:math:text$.`,
            `Since \$begin:math:text$ D < 0 \\$end:math:text$, there are no real solutions.`
        ];
    } else {
        const sqrtDiscriminant = Math.sqrt(discriminant).toFixed(2);
        const root1 = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
        const root2 = ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
        currentSolution = `\$begin:math:display$ x = \\\\frac{-b \\\\pm \\\\sqrt{b^2 - 4ac}}{2a} \\$end:math:display$
\$begin:math:display$ x = \\\\frac{-(${b}) \\\\pm \\\\sqrt{${b}^2 - 4 \\\\times ${a} \\\\times ${c}}}{2 \\\\times ${a}} \\$end:math:display$
\$begin:math:display$ x = \\\\frac{${-b} \\\\pm ${sqrtDiscriminant}}{${2 * a}} \\$end:math:display$
\$begin:math:display$ x = ${root1} \\\\text{ or } x = ${root2} \\$end:math:display$`;
        currentHints = [
            `Use the quadratic formula: \$begin:math:text$ x = \\\\frac{-b \\\\pm \\\\sqrt{b^2 - 4ac}}{2a} \\$end:math:text$.`,
            `Calculate the discriminant: \$begin:math:text$ D = ${b}^2 - 4 \\\\times ${a} \\\\times ${c} = ${discriminant} \\$end:math:text$.`,
            `Compute the square root: \$begin:math:text$ \\\\sqrt{${discriminant}} = ${sqrtDiscriminant} \\$end:math:text$.`,
            `Find the solutions: \$begin:math:text$ x = ${root1} \\$end:math:text$ and \$begin:math:text$ x = ${root2} \\$end:math:text$.`
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
        text: `Solve for \$begin:math:text$ x \\$end:math:text$ in the equation \$begin:math:text$ \\\\sin(${k}x) = ${c}/2 \\$end:math:text$ where \$begin:math:text$ 0 \\\\leq x \\\\leq 2\\\\pi \\$end:math:text$.`
    };
    const currentSolution = `\$begin:math:display$ ${k}x = \\\\sin^{-1}\\\\left(\\\\frac{${c}}{2}\\\\right) + 2\\\\pi n \\\\quad \\\\text{or} \\\\quad ${k}x = \\\\pi - \\\\sin^{-1}\\\\left(\\\\frac{${c}}{2}\\\\right) + 2\\\\pi n \\$end:math:display$
\$begin:math:display$ x = \\\\frac{1}{${k}} \\\\left( \\\\sin^{-1}\\\\left(\\\\frac{${c}}{2}\\\\right) + 2\\\\pi n \\\\right) \\$end:math:display$
\$begin:math:display$ x = \\\\frac{1}{${k}} \\\\left( \\\\pi - \\\\sin^{-1}\\\\left(\\\\frac{${c}}{2}\\\\right) + 2\\\\pi n \\\\right) \\$end:math:display$
(\\text{for all integers } n \\text{ such that } x \\in [0, 2\\pi])`;
    const currentHints = [
        `Apply the inverse sine function to both sides.`,
        `Divide both sides by \$begin:math:text$ ${k} \\$end:math:text$ to solve for \$begin:math:text$ x \\$end:math:text$.`,
        `Consider all solutions within the interval \$begin:math:text$ 0 \\\\leq x \\\\leq 2\\\\pi \\$end:math:text$.`
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