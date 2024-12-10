const monthNames = [
  "January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"
];

function generateCalendar() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDate = now.getDate();

  // Update month and year
  document.getElementById("month-name").textContent = monthNames[currentMonth];
  document.getElementById("year").textContent = currentYear;

  // Get the first day of the month and the number of days in the month
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Generate dates
  const datesContainer = document.getElementById("dates");
  datesContainer.innerHTML = ""; // Clear previous dates
  const offset = (firstDay === 0 ? 6 : firstDay - 1); // Adjust for Monday start

  // Add empty spaces for days before the 1st
  for (let i = 0; i < offset; i++) {
    const emptyCell = document.createElement("div");
    datesContainer.appendChild(emptyCell);
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const button = document.createElement("button");
    button.innerHTML = `<time>${day}</time>`;
    if (day === currentDate) {
      button.classList.add("today");
    }
    datesContainer.appendChild(button);
  }
}

// Initialize calendar
generateCalendar();

const create = document.querySelector(".create"); // Button to trigger the event
const createContainer = document.querySelector(".create-container"); // The container to show
const contentWrapper = document.querySelector(".content-wrapper"); // All other content

create.addEventListener("click", function () {
    contentWrapper.style.display = "none"; // Hide all other content
    createContainer.style.display = "block"; // Show the create container
});

    // Get the buttons and form
    const homeButton = document.querySelector('.home');
    const submitButton = document.querySelector('.submit');
    const form = document.querySelector('.form');

    // Home button handler - remove required attributes
    homeButton.addEventListener('click', function() {
      // Remove the required attribute from input fields
      form.querySelectorAll('input').forEach(input => input.removeAttribute('required'));
      // Optionally, you can hide the form or reset it after returning home
      document.querySelector('.create-container').style.display = 'none'; // Hide form
    });

    // Submit button handler - enforce required fields
    submitButton.addEventListener('click', function(event) {
      // Check if the form is valid
      if (!form.checkValidity()) {
        event.preventDefault(); // Prevent form submission if any field is invalid
        alert('Please fill in all required fields!');
      }
    });
