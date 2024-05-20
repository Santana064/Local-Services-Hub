// Define sample data for services and providers
const servicesData = [
    { name: 'Plumbing', image: 'plumbing.jpg' },
    { name: 'Electrician', image: 'electrician.jpg' },
    { name: 'Cleaning', image: 'cleaning.jpg' },
    // Add more services as needed
];

const providersData = [
    { name: 'John Doe', service: 'Plumbing', image: 'provider1.jpg' },
    { name: 'Jane Smith', service: 'Electrician', image: 'provider2.jpg' },
    { name: 'David Johnson', service: 'Cleaning', image: 'provider3.jpg' },
    // Add more providers as needed
];

// Function to generate service cards
function generateServiceCards() {
    const servicesContainer = document.querySelector('#services .container');
    servicesContainer.innerHTML = '';

    servicesData.forEach(service => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="images/${service.image}" alt="${service.name}">
            <h3>${service.name}</h3>
        `;
        servicesContainer.appendChild(card);
    });
}

// Function to generate provider cards
function generateProviderCards() {
    const providersContainer = document.querySelector('#providers .container');
    providersContainer.innerHTML = '';

    providersData.forEach(provider => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="images/${provider.image}" alt="${provider.name}">
            <h3>${provider.name}</h3>
            <p>Service: ${provider.service}</p>
        `;
        providersContainer.appendChild(card);
    });
}

// Call functions to generate dynamic content
generateServiceCards();
generateProviderCards();
