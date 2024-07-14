document.addEventListener('DOMContentLoaded', function() {
    const anywhereBtn = document.getElementById('anywhere-btn');
    // const expandedSearch = document.getElementById('expanded-search');
    const expandedSearch = document.querySelector('.search-container');
  
    anywhereBtn.addEventListener('click', function() {
      if (expandedSearch.style.display === 'none' || expandedSearch.style.display === '') {
        expandedSearch.style.display = 'flex';
      } else {
        expandedSearch.style.display = 'none';
      }
    });

  // document.querySelectorAll('.search-item').forEach(item => {
  //   item.addEventListener('click', function() {
  //       alert(`You clicked on ${this.querySelector('span').textContent}`);
  //   });
  // });

  // document.querySelector('.search-button-hidden').addEventListener('click', function() {
  //     alert('Search button clicked!');
  // });






  const whereButton = document.querySelector(".where-btn");
  const whereModal = document.getElementById("whereModal");
  const closeButton = whereModal.querySelector(".close");

  whereButton.onclick = function() {
      whereModal.style.display = "block";
  }

  closeButton.onclick = function() {
      whereModal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == whereModal) {
          whereModal.style.display = "none";
      }
  }

  const regionItems = document.querySelectorAll('.region-item');
  regionItems.forEach(item => {
      item.addEventListener('click', function() {
          const regionName = this.querySelector('p').textContent;
          whereModal.style.display = "none";
          document.querySelector('strong').textContent = regionName;
      });
  });

  document.querySelector('.search-button-hidden').addEventListener('click', function() {
      alert('Search button clicked!');
  });






    // const openModalBtn = document.getElementById('open-modal-btn');
    // const modal = document.getElementById('image-modal');
    // const closeBtn = document.querySelector('.close-btn');
  
    // // Open the modal
    // openModalBtn.addEventListener('click', function() {
    //   modal.style.display = 'block';
    // });
  
    // // Close the modal when the user clicks on <span> (x)
    // closeBtn.addEventListener('click', function() {
    //   modal.style.display = 'none';
    // });
  
    // // Close the modal when the user clicks anywhere outside of the modal
    // window.addEventListener('click', function(event) {
    //   if (event.target === modal) {
    //     modal.style.display = 'none';
    //   }
    // });
  });