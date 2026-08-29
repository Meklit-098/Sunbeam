const trigger = document.getElementById('library-trigger');
const popup = document.getElementById('library-popup');
const closeBtn = document.getElementById('close-popup');

// Open the popup
trigger.addEventListener('click', () => {
    popup.classList.remove('hidden');
});

// Close the popup
closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
});