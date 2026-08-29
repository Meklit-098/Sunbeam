const trigger = document.getElementById('library-trigger');
const popup = document.getElementById('library-popup');
const closeBtn = document.getElementById('close-popup');

// --- 1. OPEN / CLOSE LOGIC ---
trigger.addEventListener('click', () => {
    popup.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
});

// --- 2. DRAGGABLE LOGIC ---
const header = document.getElementById('popup-header');
let isDragging = false;
let offsetX, offsetY;

header.addEventListener('mousedown', (e) => {
    isDragging = true;
    // Calculate where inside the header the user clicked
    offsetX = e.clientX - popup.offsetLeft;
    offsetY = e.clientY - popup.offsetTop;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    // Move the popup to follow the mouse
    popup.style.left = `${e.clientX - offsetX}px`;
    popup.style.top = `${e.clientY - offsetY}px`;
});

document.addEventListener('mouseup', () => {
    isDragging = false; // Stop dragging when they let go of the mouse
});

// --- 3. TAB LOGIC ---
const tabBtns = document.querySelectorAll('.tab-btn');
const frame = document.getElementById('window-frame');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove the 'active' class from all tabs
        tabBtns.forEach(b => b.classList.remove('active'));
        
        // Add the 'active' class to the one just clicked
        btn.classList.add('active');
        
        // Change the iframe's source to the data-src of the clicked tab
        frame.src = btn.getAttribute('data-src');
    });
});