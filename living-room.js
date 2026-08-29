const trigger = document.getElementById('library-trigger');
const popup = document.getElementById('library-popup');
const closeBtn = document.getElementById('close-popup');
const header = document.getElementById('popup-header');
const tabBtns = document.querySelectorAll('.tab-btn');
const frame = document.getElementById('window-frame');

// Open / Close
trigger.addEventListener('click', () => popup.classList.remove('hidden'));
closeBtn.addEventListener('click', () => popup.classList.add('hidden'));

// Dragging Logic
let isDragging = false;
let startX, startY, initialLeft, initialTop;

header.addEventListener('mousedown', (e) => {
  if (e.target === closeBtn) return; // Prevent drag trigger when closing
  
  isDragging = true;
  popup.classList.add('dragging');
  
  startX = e.clientX;
  startY = e.clientY;
  initialLeft = popup.offsetLeft;
  initialTop = popup.offsetTop;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(e) {
  if (!isDragging) return;
  const deltaX = e.clientX - startX;
  const deltaY = e.clientY - startY;
  
  popup.style.left = `${initialLeft + deltaX}px`;
  popup.style.top = `${initialTop + deltaY}px`;
}

function onMouseUp() {
  isDragging = false;
  popup.classList.remove('dragging');
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
}

// Tab Switching Logic
tabBtns.forEach(tab => {
  tab.addEventListener('click', () => {
    tabBtns.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    frame.src = tab.getAttribute('data-src');
  });
});