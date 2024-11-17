// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  // Initialize the problem
  generateProblem();

  // Add event listeners
  document.getElementById('generate-problem').addEventListener('click', generateProblem);
  document.getElementById('show-hint').addEventListener('click', showHint);
  document.getElementById('show-solution').addEventListener('click', showSolution);
  document.getElementById('difficulty').addEventListener('input', updateDifficultyLabel);
});

// Global variables to store the current problem and hints
let currentProblem = {};
let currentHints = [];
let currentSolution = '';

// Function to update difficulty label
function updateDifficultyLabel() {
  const difficulty = document.getElementById('difficulty').value;
  const label = document.getElementById('difficulty-label');
  if (difficulty == 1) {
      label.innerText = 'Basic';
  } else if (difficulty == 2) {
      label.innerText = 'Intermediate';
  } else {
      label.innerText = 'Advanced';
  }
  // Generate a new problem when the difficulty changes
  generateProblem();
}

// Function to generate a new problem
function generateProblem() {
  const difficulty = document.getElementById('difficulty').value;
  const problemContainer = document.getElementById('problem-container');
  const hintContainer = document.getElementById('hint-container');
  const solutionContainer = document.getElementById('solution-container');
  const conceptReminder = document.getElementById('concept-reminder');

  // Clear previous hints and solutions
  hintContainer.style.display = 'none';
  solutionContainer.style.display = 'none';
  conceptReminder.style.display = 'none';

  if (difficulty == 1) {
      // Basic problem: Solve a linear equation
      const a = Math.floor(Math.random() * 10) + 1;
      const b = Math.floor(Math.random() * 10) + 1;
      currentProblem.text = `Find the value of \\x in the equation \\${a}x + ${b} = 0.`;
      currentSolution = `\$begin:math:display$ x = \\\\frac{-${b}}{${a}} = ${-b / a} \\$end:math:display$`;
      currentHints = [
          'Isolate the variable \\( x \\) by subtracting \\( ' + b + ' \\) from both sides.',
          'Now divide both sides by \\( ' + a + ' \\) to solve for \\( x \\).'
      ];
  } else if (difficulty == 2) {
      // Intermediate problem: Solve a quadratic equation
      const a = Math.floor(Math.random() * 5) + 1;
      const b = Math.floor(Math.random() * 10) - 5;
      const c = Math.floor(Math.random() * 10) + 1;
      currentProblem.text = `Solve for \( x \) the quadratic equation \$begin:math:text$ ${a}x^2 + ${b}x + ${c} = 0 \\$end:math:text$.`;
      const discriminant = b * b - 4 * a * c;
      if (discriminant < 0) {
          currentSolution = `The equation has no real solutions because the discriminant \$begin:math:text$ b^2 - 4ac = ${discriminant} \\$end:math:text$ is negative.`;
          currentHints = [
              'Calculate the discriminant \\( D = b^2 - 4ac \\).',
              `Since \$begin:math:text$ D = ${discriminant} \\$end:math:text$, the equation has no real solutions.`
          ];
      } else {
          const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
          const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
          currentSolution = `\$begin:math:display$ x = \\\\frac{-b \\\\pm \\\\sqrt{b^2 - 4ac}}{2a} \\$end:math:display$
\$begin:math:display$ x = \\\\frac{-(${b}) \\\\pm \\\\sqrt{${b}^2 - 4 \\\\times ${a} \\\\times ${c}}}{2 \\\\times ${a}} \\$end:math:display$
\$begin:math:display$ x = \\\\frac{${-b} \\\\pm \\\\sqrt{${discriminant}}}{${2 * a}} \\$end:math:display$
\$begin:math:display$ x = ${root1} \\\\text{ or } x = ${root2} \\$end:math:display$`;
          currentHints = [
              'Use the quadratic formula \\( x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\).',
              `Calculate the discriminant \$begin:math:text$ D = ${b}^2 - 4 \\\\times ${a} \\\\times ${c} = ${discriminant} \\$end:math:text$.`,
              `Compute the square root of the discriminant: \$begin:math:text$ \\\\sqrt{${discriminant}} \\$end:math:text$.`,
              'Find the two solutions by plugging the values back into the formula.'
          ];
      }
  } else {
      // Advanced problem: Solve a trigonometric equation
      const angleMultipliers = [1, 2, 3];
      const k = angleMultipliers[Math.floor(Math.random() * angleMultipliers.length)];
      const c = Math.floor(Math.random() * 2) + 1;
      currentProblem.text = `Solve for \$begin:math:text$ x \\$end:math:text$ in the equation \$begin:math:text$ \\\\sin(${k}x) = ${c}/2 \\$end:math:text$ where \$begin:math:text$ 0 \\\\leq x \\\\leq 2\\\\pi \\$end:math:text$.`;
      currentSolution = `\$begin:math:display$ ${k}x = \\\\sin^{-1}\\\\left(\\\\frac{${c}}{2}\\\\right) \\$end:math:display$
\$begin:math:display$ x = \\\\frac{1}{${k}} \\\\sin^{-1}\\\\left(\\\\frac{${c}}{2}\\\\right) \\$end:math:display$ (Include all solutions in the given interval.)`;
      currentHints = [
          'Apply the inverse sine function to both sides.',
          'Divide both sides by \\( ' + k + ' \\) to solve for \\( x \\).',
          'Consider all angles that satisfy the equation within the given interval.'
      ];
  }

  // Display the problem
  problemContainer.innerHTML = currentProblem.text;

  // Render mathematical expressions
    renderMathInElement(document.body);
}

// Function to show hints
function showHint() {
  const hintContainer = document.getElementById('hint-container');
  if (hintContainer.style.display === 'none') {
      hintContainer.style.display = 'block';
      hintContainer.innerHTML = currentHints.map(hint => `<p>${hint}</p>`).join('');
      renderMathInElement(hintContainer);
  } else {
      hintContainer.style.display = 'none';
  }
}

// Function to show the solution
function showSolution() {
  const solutionContainer = document.getElementById('solution-container');
  if (solutionContainer.style.display === 'none') {
      solutionContainer.style.display = 'block';
      solutionContainer.innerHTML = currentSolution;
      renderMathInElement(solutionContainer);
  } else {
      solutionContainer.style.display = 'none';
  }
}

// Function to display key concept reminders
function showConceptReminder(concept) {
  const conceptReminder = document.getElementById('concept-reminder');
  conceptReminder.style.display = 'block';
  conceptReminder.innerHTML = `<p>${concept}</p>`;
  renderMathInElement(conceptReminder);
}