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

// Function to display home page content
function displayHomePage() {
    // Display welcome message, key features, and contact info
}

// Function to display services page content
function displayServicesPage() {
    // Display list of services with descriptions, images, and pricing
}

// Function to display providers page content
function displayProvidersPage() {
    // Display list of service providers with names, bios, ratings, and contact info
}

// Function to display booking page content
function displayBookingPage() {
    // Display booking form with fields for name, email, phone, service, date, and time
}

// Function to display contact page content
function displayContactPage() {
    // Display contact form with fields for name, email, subject, and message
}

// Event listeners to handle navigation
document.getElementById("home").addEventListener("click", displayHomePage);
document.getElementById("services").addEventListener("click", displayServicesPage);
document.getElementById("providers").addEventListener("click", displayProvidersPage);
document.getElementById("booking").addEventListener("click", displayBookingPage);
document.getElementById("contact").addEventListener("click", displayContactPage);
