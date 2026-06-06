const card = document.getElementById('card');
const flipBtn = document.getElementById('flipBtn');
const cardFront = document.querySelector('.card-front');
const cardBack = document.querySelector('.card-back');

const HALF = 375; // half of 750ms transition

function toggleFlip() {
  const isFlipped = card.classList.toggle('flipped');

  if (isFlipped) {
    setTimeout(() => {
      cardFront.style.visibility = 'hidden';
      cardBack.style.visibility = 'visible';
    }, HALF);
  } else {
    cardFront.style.visibility = 'hidden';
    setTimeout(() => {
      cardFront.style.visibility = 'visible';
      cardBack.style.visibility = 'hidden';
    }, HALF);
  }
}

function spawnHearts() {
  const colors = ['#e84a6f', '#ff6b8a', '#ff9eb5', '#c94060', '#ff4d6d', '#ffb3c6', '#ff8fab'];
  const easings = ['ease-in', 'linear', 'cubic-bezier(0.4,0,1,1)'];
  const count = 40;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart-particle';
    heart.textContent = '♥';

    const size = 12 + Math.random() * 22;
    const delay = Math.random() * 1.8;
    const duration = 2.5 + Math.random() * 2;

    heart.style.left = (Math.random() * 100) + 'vw';
    heart.style.fontSize = size + 'px';
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.setProperty('--duration', duration + 's');
    heart.style.setProperty('--delay', delay + 's');
    heart.style.setProperty('--ease', easings[Math.floor(Math.random() * easings.length)]);
    heart.style.setProperty('--rot-start', ((Math.random() - 0.5) * 30) + 'deg');
    heart.style.setProperty('--rot-end', ((Math.random() - 0.5) * 60) + 'deg');

    document.body.appendChild(heart);
    heart.addEventListener('animationend', () => heart.remove());
  }
}

card.addEventListener('click', (e) => {
  spawnHearts();
  toggleFlip();
});

flipBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  spawnHearts();
  toggleFlip();
});
