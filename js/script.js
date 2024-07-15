document.addEventListener('DOMContentLoaded', function() {
    const anywhereBtn = document.getElementById('anywhere-btn');
    const expandedSearch = document.querySelector('.search-container');
  
    anywhereBtn.addEventListener('click', function() {
      if (expandedSearch.style.display === 'none' || expandedSearch.style.display === '') {
        expandedSearch.style.display = 'flex';
      } else {
        expandedSearch.style.display = 'none';
      }
    });
    const anyweekBtn = document.getElementById('anyweek-btn');
    const guestsinputBtn = document.getElementById('guests-input-btn');
    
    
    // const expandedSearch = document.getElementById('expanded-search');
    // const expandedSearch = document.querySelector('.search-container');
  
    anyweekBtn.addEventListener('click', function() {
      if (expandedSearch.style.display === 'none' || expandedSearch.style.display === '') {
        expandedSearch.style.display = 'flex';
      } else {
        expandedSearch.style.display = 'none';
      }
    });

    guestsinputBtn.addEventListener('click', function() {
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
    //   if (event.target == calendarModal) {
    //     calendarModal.style.display = "none";
    // }
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



  const checkInBtn = document.getElementById('check-in-btn');
  const checkOutBtn = document.getElementById('check-out-btn');
  const calendarModal = document.getElementById('calendar-modal');
  const calendarContainer = document.getElementById('calendar-container');
  
  let selectedCheckInDate = null;
  let selectedCheckOutDate = null;
  let activeButton = null;  
 
  checkInBtn.addEventListener('click', function() {
    if (calendarModal.style.display === 'none' || calendarModal.style.display === '') {
      openCalendarModal('check-in');
    } else {
      calendarModal.style.display = 'none';
    }
  });

  checkOutBtn.addEventListener('click', function() {
    if (calendarModal.style.display === 'none' || calendarModal.style.display === '') {
      openCalendarModal('check-out');
    } else {
      calendarModal.style.display = 'none';
    }
  });
  
  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target == calendarModal) {
      calendarModal.style.display = 'none';
    }
  });

  function openCalendarModal(type) {
    activeButton = type;
    calendarModal.style.display = 'block';
    highlightSelectedDates();
  }
  
  // calendar generation
  function generateCalendar(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    let calendarHTML = `
      <div class="month">
        <h3>${monthNames[month]} ${year}</h3>
        <div class="calendar">
          <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
    `;
    
    for (let i = 0; i < startingDay; i++) {
      calendarHTML += '<div></div>';
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      calendarHTML += `<div class="calendar-day" data-date="${year}-${month+1}-${day}">${day}</div>`;
    }
    
    calendarHTML += `
        </div>
      </div>
    `;
    
    return calendarHTML;
  }
  
  // Generate calendars for current and next month
  const now = new Date();
  calendarContainer.innerHTML = generateCalendar(now.getFullYear(), now.getMonth()) +
                                generateCalendar(now.getFullYear(), now.getMonth() + 1);
  
  // Event delegation for date selection
  // calendarContainer.addEventListener('click', function(event) {
  //   if (event.target.classList.contains('calendar-day')) {
  //     const clickedDate = new Date(event.target.dataset.date);
      
  //     if (!selectedCheckInDate || (selectedCheckInDate && selectedCheckOutDate)) {
  //       selectedCheckInDate = clickedDate;
  //       selectedCheckOutDate = null;
  //       updateDateDisplay();
  //     } else {
  //       if (clickedDate > selectedCheckInDate) {
  //         selectedCheckOutDate = clickedDate;
  //       } else {
  //         selectedCheckOutDate = selectedCheckInDate;
  //         selectedCheckInDate = clickedDate;
  //       }
  //       updateDateDisplay();
  //       calendarModal.style.display = 'none';
  //     }    
  //     highlightSelectedDates();
  //   }
  // });
  calendarContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('calendar-day')) {
      const selectedDate = new Date(event.target.dataset.date);
      if (activeButton === 'check-in') {
        selectedCheckInDate = selectedDate;
      } else {
        selectedCheckOutDate = selectedDate;
      }
      updateDateDisplay();
      highlightSelectedDates();
    }
  });
  
  // Implement date option buttons
// document.querySelectorAll('.date-option').forEach(button => {
//     button.addEventListener('click', function() {
//       const days = parseInt(this.dataset.days);
//       if (selectedCheckInDate) {
//         if (days === 0) {
//           selectedCheckOutDate = new Date(selectedCheckInDate);
//         } else {
//           const minDate = new Date(selectedCheckInDate);
//           minDate.setDate(minDate.getDate() - days);
//           const maxDate = new Date(selectedCheckInDate);
//           maxDate.setDate(maxDate.getDate() + days);
//           selectedCheckOutDate = maxDate;
//         }
//         updateDateDisplay();
//         highlightSelectedDates();
//       }
//     });
//   });

// document.querySelectorAll('.date-option').forEach(button => {
//   button.addEventListener('click', function() {
//     const days = parseInt(this.dataset.days);
//     if (selectedCheckInDate) {
//       if (days === 0) {
//         selectedCheckOutDate = new Date(selectedCheckInDate);
//       } else {
//         selectedCheckOutDate = new Date(selectedCheckInDate);
//         selectedCheckOutDate.setDate(selectedCheckOutDate.getDate() + days);
//       }
//       updateDateDisplay();
//       highlightSelectedDates();
//       document.querySelectorAll('.date-option').forEach(btn => btn.classList.remove('active'));
//       this.classList.add('active');
//     }
//   });
// });

  // Implement date option buttons
  document.querySelectorAll('.date-option').forEach(button => {
    button.addEventListener('click', function() {
      const days = parseInt(this.dataset.days);
      let activeDate = (activeButton === 'check-in') ? selectedCheckInDate : selectedCheckOutDate;
      
      if (activeDate) {
        if (days === 0) {
        } else {
          activeDate.setDate(activeDate.getDate() + days);
        }
        if (activeButton === 'check-in') {
          selectedCheckInDate = activeDate;
        } else {
          selectedCheckOutDate = activeDate;
        }
        updateDateDisplay();
        highlightSelectedDates();
        document.querySelectorAll('.date-option').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });
  
  function updateDateDisplay() {
    if (selectedCheckInDate) {
      checkInBtn.textContent = `Check in: ${formatDate(selectedCheckInDate)}`;
    }
    if (selectedCheckOutDate) {
      checkOutBtn.textContent = `Check out: ${formatDate(selectedCheckOutDate)}`;
    }
  }
  function formatDate(date) {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }

  function highlightSelectedDates() {
    document.querySelectorAll('.calendar-day').forEach(day => {
      const dayDate = new Date(day.dataset.date);
      day.classList.remove('selected', 'in-range');
      if (selectedCheckInDate && dayDate.getTime() === selectedCheckInDate.getTime()) {
        day.classList.add('selected');
      }
      if (selectedCheckOutDate && dayDate.getTime() === selectedCheckOutDate.getTime()) {
        day.classList.add('selected');
      }
      if (selectedCheckInDate && selectedCheckOutDate &&
          dayDate > selectedCheckInDate && dayDate < selectedCheckOutDate) {
        day.classList.add('in-range');
      }
    });
  }


  // document.addEventListener('DOMContentLoaded', function() {
    // const addGuestBtn = document.getElementById('addguest-btn');
    const addGuestBtn = document.querySelector('.search-item#addguest-btn');
    const guestModal = document.getElementById('guestModal');
    const guestCounts = {
      adults: 0,
      children: 0,
      infants: 0,
      pets: 0
    };
  
    addGuestBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      if (guestModal.style.display === 'none' || guestModal.style.display === '') {
        guestModal.style.display = 'block';
        positionModal();
      } else {
        guestModal.style.display = 'none';
      }
    });

    function positionModal() {
      const rect = addGuestBtn.getBoundingClientRect();
      guestModal.style.top = `${rect.bottom + window.scrollY}px`;
      guestModal.style.left = `${rect.left + window.scrollX}px`;
    }
  
    // Close modal when clicking outside
    document.addEventListener('click', function(event) {
      if (!guestModal.contains(event.target) && event.target !== addGuestBtn) {
        guestModal.style.display = 'none';
      }
    });
  
    // Prevent closing when clicking inside the modal
    guestModal.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  
    // Handle increment and decrement
    guestModal.addEventListener('click', function(event) {
      if (event.target.classList.contains('increment') || event.target.classList.contains('decrement')) {
        const type = event.target.dataset.type;
        const isIncrement = event.target.classList.contains('increment');
        
        if (isIncrement) {
          guestCounts[type]++;
        } else if (guestCounts[type] > 0) {
          guestCounts[type]--;
        }
  
        updateGuestCount(type);
        updateTotalGuestCount();
      }
    });
  
    function updateGuestCount(type) {
      const countElement = document.getElementById(`${type}Count`);
      countElement.textContent = guestCounts[type];
  
      const decrementButton = guestModal.querySelector(`.decrement[data-type="${type}"]`);
      decrementButton.disabled = guestCounts[type] === 0;
    }
  
    function updateTotalGuestCount() {
      const total = guestCounts.adults + guestCounts.children + guestCounts.infants + guestCounts.pets;
      const guestText = total === 1 ? 'guest' : 'guests';
      addGuestBtn.querySelector('strong').textContent = `${total} ${guestText}`;
    }
  
    // Initialize guest counts
    for (const type in guestCounts) {
      updateGuestCount(type);
    }



    // const shareBtn = document.getElementById('action-button-share');
    // const shareModal = document.getElementById('shareModal');

    // shareBtn.addEventListener('click', function(event) {
    //   event.stopPropagation();
    //   if(shareModal.style.display === 'none' || shareModal.style.display === '') {
    //     shareModal.style.display = 'block';
    //     // positionModal();
    //   } else {
    //     shareModal.style.display = 'none';
    //   }
    // });
    // document.addEventListener('click', function(event) {
    //   if (!shareModal.contains(event.target) && event.target !== shareBtn) {
    //     shareModal.style.display = 'none';
    //   }
    // });
    // shareModal.addEventListener('click', function(event) {
    //   event.stopPropagation();
    // });
    
    const shareModal = document.getElementById('shareModal');
    const closeBtn = shareModal.querySelector('.close');
    const copyLinkBtn = document.getElementById('copyLink');
    const shareButton = document.getElementById('action-button-share');

    console.log('shareModal:', shareModal);
    console.log('closeBtn:', closeBtn);
    console.log('copyLinkBtn:', copyLinkBtn);
    console.log('shareButton:', shareButton);

    // Open modal function
    function openShareModal() {
        console.log('openShareModal function called');
        shareModal.style.display = "block";
    }

    // Add event listener to the share button
    if (shareButton) {
        shareButton.addEventListener('click', function(event) {
            console.log('Share button clicked');
            openShareModal();
            event.preventDefault(); // Prevent any default action
        });
    } else {
        console.error('Share button not found');
    }

    // Close modal when clicking on X
    if (closeBtn) {
        closeBtn.onclick = function() {
            console.log('Close button clicked');
            shareModal.style.display = "none";
        }
    } else {
        console.error('Close button not found');
    }

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == shareModal) {
            console.log('Clicked outside modal');
            shareModal.style.display = "none";
        }
    }

    // Copy link functionality
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', function() {
            console.log('Copy link button clicked');
            navigator.clipboard.writeText(window.location.href).then(function() {
                alert('Link copied to clipboard!');
            }, function() {
                alert('Failed to copy link. Please try again.');
            });
        });
    } else {
        console.error('Copy link button not found');
    }




    // savebutton
    let isSaved = localStorage.getItem('isSaved') === 'true';

    function toggleSave() {
      isSaved = !isSaved;
      localStorage.setItem('isSaved', isSaved);
      updateSaveButton();
    }
    
    function updateSaveButton() {
      const saveButton = document.getElementById('action-button-save');
      if (isSaved) {
        saveButton.classList.add('saved');
      } else {
        saveButton.classList.remove('saved');
      }
    }
    
    const saveButton = document.getElementById('action-button-save');
    saveButton.addEventListener('click', toggleSave);
    // Call this on page load
    updateSaveButton();


  


// lightbox
const showAllPhotosBtn = document.querySelector('.show-all-photos');
const lightbox = document.getElementById('lightbox');
const closeLightboxBtn = document.querySelector('.close-btn');
const lightboxImage = document.querySelector('.lightbox-image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const imageCounter = document.querySelector('.image-counter');
const lightboxContent = document.querySelector('.lightbox-content');

const images = ['images/p1.jpg', 'images/p2.jpg', 'images/p3.jpg', 'images/p4.jpg', 'images/p5.jpg', 'images/p6.jpg'];
let currentImageIndex = 0;

function updateLightboxImage() {
  lightboxImage.src = images[currentImageIndex];
  imageCounter.textContent = `${currentImageIndex + 1}/${images.length}`;
  
  prevBtn.style.display = currentImageIndex === 0 ? 'none' : 'block';
  nextBtn.style.display = currentImageIndex === images.length - 1 ? 'none' : 'block';
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

showAllPhotosBtn.addEventListener('click', () => {
  lightbox.style.display = 'block';
  updateLightboxImage();
});

closeLightboxBtn.addEventListener('click', closeLightbox);

prevBtn.addEventListener('click', () => {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    updateLightboxImage();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentImageIndex < images.length - 1) {
    currentImageIndex++;
    updateLightboxImage();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    if (currentImageIndex > 0) {
      currentImageIndex--;
      updateLightboxImage();
    }
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    if (currentImageIndex < images.length - 1) {
      currentImageIndex++;
      updateLightboxImage();
    }
  }
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Close lightbox when pressing ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

    
    
    
    
    
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
  // });