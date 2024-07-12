document.addEventListener('DOMContentLoaded', function() {
    const anywhereBtn = document.getElementById('anywhere-btn');
    const expandedSearch = document.getElementById('expanded-search');
  
    anywhereBtn.addEventListener('click', function() {
      if (expandedSearch.style.display === 'none' || expandedSearch.style.display === '') {
        expandedSearch.style.display = 'flex';
      } else {
        expandedSearch.style.display = 'none';
      }
    });

    

















    const openModalBtn = document.getElementById('open-modal-btn');
    const modal = document.getElementById('image-modal');
    const closeBtn = document.querySelector('.close-btn');
  
    // Open the modal
    openModalBtn.addEventListener('click', function() {
      modal.style.display = 'block';
    });
  
    // Close the modal when the user clicks on <span> (x)
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    // Close the modal when the user clicks anywhere outside of the modal
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });