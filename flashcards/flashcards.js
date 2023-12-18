let currentCardIndex = 0;

// Shuffle function
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle cards on page load
window.addEventListener('DOMContentLoaded', (event) => {
  const container = document.querySelector('.flashcard-container');
  const cards = Array.from(container.querySelectorAll('.flashcard'));
  shuffle(cards);
  cards.forEach(card => container.appendChild(card));
});

function flipCard(cardElement) {
  if (cardElement.classList.contains('flipped')) {
    // Move to the next card
    cardElement.classList.remove('flipped');
    nextCard();
  } else {
    // Flip the current card
    cardElement.classList.add('flipped');
  }
}

function nextCard() {
  const cards = document.querySelectorAll('.flashcard');
  currentCardIndex++;
  
  if (currentCardIndex >= cards.length) {
    // Reset index if we've reached the end
    currentCardIndex = 0;
  }

  cards[currentCardIndex].scrollIntoView({ behavior: 'smooth' });
}

