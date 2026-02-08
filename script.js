const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const questionSection = document.getElementById('question-section');
const answerSection = document.getElementById('answer-section');

// Function to move the "No" button
function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// PC: Move on hover
noBtn.addEventListener('mouseover', moveButton);

// Mobile: Move on tap
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); 
    moveButton();
});

// Click Yes: Show the website text instead of a notification
yesBtn.addEventListener('click', () => {
    questionSection.classList.add('hidden');
    answerSection.classList.remove('hidden');
    // The "No" button should disappear once they say yes
    noBtn.style.display = 'none';
});