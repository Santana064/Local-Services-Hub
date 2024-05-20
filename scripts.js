// Function to toggle the navigation menu on mobile devices
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}

// Function to handle booking a service
function bookService() {
    const serviceName = document.getElementById('serviceSelect').value;
    const bookingForm = document.getElementById('bookingForm');
    
    // Perform validation on the booking form fields
    if (validateBookingForm()) {
        // Simulate sending booking data to a server
        const bookingData = {
            service: serviceName,
            date: document.getElementById('bookingDate').value,
            time: document.getElementById('bookingTime').value,
            details: document.getElementById('bookingDetails').value
        };
        
        // Display a confirmation message
        displayConfirmation(bookingData);
        
        // Reset the booking form
        bookingForm.reset();
    }
}

// Function to validate the booking form fields
function validateBookingForm() {
    // Perform validation logic here (e.g., check if fields are filled out correctly)
    return true; // Return true if validation passes, false otherwise
}

// Function to display a confirmation message after booking
function displayConfirmation(bookingData) {
    // Generate HTML for the confirmation message
    const confirmationMessage = `
        <div class="confirmation">
            <h2>Booking Confirmation</h2>
            <p>Service: ${bookingData.service}</p>
            <p>Date: ${bookingData.date}</p>
            <p>Time: ${bookingData.time}</p>
            <p>Details: ${bookingData.details}</p>
            <p>Thank you for booking with us!</p>
        </div>
    `;
    
    // Append the confirmation message to a container in the DOM
    const confirmationContainer = document.getElementById('confirmationContainer');
    confirmationContainer.innerHTML = confirmationMessage;
}

// Add event listeners for navigation menu toggle button and booking button
document.getElementById('menuToggle').addEventListener('click', toggleMenu);
document.getElementById('bookButton').addEventListener('click', bookService);
