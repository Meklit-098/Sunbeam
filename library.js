const openLink = document.getElementById('openPopup');
const closeLink = document.getElementById('closePopup');
const overlay = document.getElementById('popupOverlay');

// Open pop-up
openLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevents the link from jumping the page
  overlay.style.display = 'block';
});

// Close pop-up
closeLink.addEventListener('click', function(event) {
  event.preventDefault();
  overlay.style.display = 'none';
});

// Close pop-up if user clicks outside the white box
window.addEventListener('click', function(event) {
  if (event.target === overlay) {
    overlay.style.display = 'none';
  }
});
