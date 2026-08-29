// Get DOM elements
const bookshelf = document.getElementById('bookshelf');
const libraryOverlay = document.getElementById('libraryOverlay');
const closeLibraryBtn = document.getElementById('closeLibraryBtn');

// Open the custom popup when clicking the bookshelf
bookshelf.addEventListener('click', function() {
  libraryOverlay.classList.remove('overlay-hidden');
});

// Close the custom popup when clicking the close button
closeLibraryBtn.addEventListener('click', function() {
  libraryOverlay.classList.add('overlay-hidden');
});

// Optional: Close the popup if the user clicks the dark background outside the box
libraryOverlay.addEventListener('click', function(event) {
  if (event.target === libraryOverlay) {
    libraryOverlay.classList.add('overlay-hidden');
  }
});

