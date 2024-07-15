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