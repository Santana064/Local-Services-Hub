// Home Page Data
const homePageData = {
    welcomeMessage: "Welcome to Local Services Hub!",
    websitePurpose: "Connecting you with reliable service providers in South Africa.",
    keyFeatures: [
        "Find Trusted Local Services",
        "Explore Services",
        "Book Services Online",
        "Read Customer Reviews"
    ],
    contactInfo: {
        email: "support@localserviceshub.co.za",
        phone: "+27 123 456 789",
        address: "123 Main Street, Johannesburg, South Africa"
    }
};

// Services Page Data
const servicesPageData = [
    {
        serviceName: "Plumbing",
        description: "Professional plumbing services for your home or business.",
        image: "plumbing.jpg",
        pricing: "$50/hour and up"
    },
    {
        serviceName: "Electrician",
        description: "Certified electricians for electrical installations and repairs.",
        image: "electrician.jpg",
        pricing: "$60/hour and up"
    },
    {
        serviceName: "Cleaning",
        description: "Efficient and thorough cleaning services for residential and commercial properties.",
        image: "cleaning.jpg",
        pricing: "Starting from $30/hour"
    }
];

// Providers Page Data
const providersPageData = [
    {
        name: "John Doe",
        bio: "Experienced plumber with over 10 years of experience.",
        servicesOffered: ["Plumbing"],
        rating: 4.5,
        image: "john_doe.jpg",
        contactInfo: {
            email: "john.doe@example.com",
            phone: "+27 123 456 789"
        }
    },
    {
        name: "Jane Smith",
        bio: "Licensed electrician specializing in residential electrical work.",
        servicesOffered: ["Electrician"],
        rating: 4.2,
        image: "jane_smith.jpg",
        contactInfo: {
            email: "jane.smith@example.com",
            phone: "+27 123 456 789"
        }
    },
    {
        name: "David Johnson",
        bio: "Professional cleaner dedicated to providing top-notch cleaning services.",
        servicesOffered: ["Cleaning"],
        rating: 4.7,
        image: "david_johnson.jpg",
        contactInfo: {
            email: "david.johnson@example.com",
            phone: "+27 123 456 789"
        }
    }
];

// Booking Page Data
const bookingPageData = {
    services: ["Plumbing", "Electrician", "Cleaning"],
    bookingFormFields: ["name", "email", "phone", "service", "date", "time"]
};

// Contact Page Data
const contactPageData = {
    contactFormFields: ["name", "email", "subject", "message"]
};

// Function to update service providers based on selected service
function updateProviders() {
    const selectedService = document.getElementById("serviceSelect").value;
    const providersList = document.getElementById("providersList");
    providersList.innerHTML = ""; // Clear existing provider list

    // Find providers offering the selected service
    const selectedProviders = providersPageData.filter(provider => provider.servicesOffered.includes(selectedService));

    // Display providers offering the selected service
    selectedProviders.forEach(provider => {
        const providerElement = document.createElement("div");
        providerElement.classList.add("provider");
        providerElement.innerHTML = `
            <img src="${provider.image}" alt="${provider.name}">
            <h3>${provider.name}</h3>
            <p>${provider.bio}</p>
            <p>Rating: ${provider.rating}</p>
            <p>Email: ${provider.contactInfo.email}</p>
            <p>Phone: ${provider.contactInfo.phone}</p>
        `;
        providersList.appendChild(providerElement);
    });
}

// Function to display services in the dropdown
function displayServicesDropdown() {
    const serviceSelect = document.getElementById("serviceSelect");

    // Populate dropdown with available services
    servicesPageData.forEach(service => {
        const option = document.createElement("option");
        option.value = service.serviceName;
        option.textContent = service.serviceName;
        serviceSelect.appendChild(option);
    });
}

// Call the function to populate services dropdown on page load
displayServicesDropdown();

document.addEventListener('DOMContentLoaded', function() {
    // Event listeners for navigation links
    document.querySelector('nav ul').addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            const targetPage = event.target.getAttribute('href');
            loadPage(targetPage);
        }
    });

    // Function to load page content
    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(html => {
                document.querySelector('main').innerHTML = html;
            })
            .catch(error => console.error('Error loading page:', error));
    }
});
