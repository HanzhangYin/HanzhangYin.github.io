document.getElementById('generate-problem').addEventListener('click', generateProblem);

function generateProblem() {
  // Example: Generate a linear function problem
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  const problemText = `Find the value of x in the equation ${a}x + ${b} = 0.`;
  document.getElementById('problem-container').innerText = problemText;
}