document.getElementById('bookshelf').addEventListener('click', function() {
  // Configures the size of the popup window
  const windowFeatures = "width=1000,height=700,resizable=yes,scrollbars=yes";
  
  // Opens library.html inside the popup
  window.open('library.html', 'LibraryWindow', windowFeatures);
});
