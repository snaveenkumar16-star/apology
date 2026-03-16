const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const askSection = document.getElementById('ask-section');
const successSection = document.getElementById('success-section');

// Make the "No" button move away
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// What happens when they click "Yes"
yesBtn.addEventListener('click', () => {
    askSection.classList.add('hidden');
    successSection.classList.remove('hidden');
});
