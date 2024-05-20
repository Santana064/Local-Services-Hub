<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Local Services Hub</title>
    <style>
        /* CSS styles */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }

        header {
            background-color: darkorange;
            color: white;
            padding: 1em 0;
            text-align: center;
        }

        header h1 {
            margin: 0;
        }

        nav ul {
            list-style-type: none;
            padding: 0;
        }

        nav ul li {
            display: inline;
            margin: 0 10px;
        }

        nav ul li a {
            color: white;
            text-decoration: none;
        }

        main {
            padding: 20px;
        }

        .provider {
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            width: 30%;
            margin: 10px;
            text-align: center;
            display: inline-block;
        }

        footer {
            background-color: darkorange;
            color: white;
            text-align: center;
            padding: 10px 0;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to Local Services Hub</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Providers</a></li>
                <li><a href="#">Booking</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Find Trusted Local Services</h2>
        <p>Connecting you with reliable service providers in South Africa.</p>
        <h3>Explore Services</h3>
        <select id="service-select">
            <option value="plumbing">Plumbing</option>
            <option value="electrician">Electrician</option>
            <option value="cleaning">Cleaning</option>
        </select>
        <div id="service-results"></div>
    </main>
    <footer>
        <p>© 2024 Local Services Hub. All rights reserved.</p>
        <p>Email: <a href="mailto:support@localserviceshub.co.za">support@localserviceshub.co.za</a></p>
        <p>Tel: +27 123 456 789</p>
        <p>Address: 123 Main Street, Johannesburg, South Africa</p>
    </footer>
    <script>
        // Define service data (you can replace this with your actual service data)
        const serviceData = {
            plumbing: [
                { name: "John Doe", service: "Plumbing" },
                { name: "Jane Smith", service: "Plumbing" }
            ],
            electrician: [
                { name: "David Johnson", service: "Electrician" }
            ],
            cleaning: [
                { name: "Alice Brown", service: "Cleaning" },
                { name: "Bob Green", service: "Cleaning" }
            ]
        };

        // Function to populate service results based on selected service
        function populateServiceResults() {
            const selectElement = document.getElementById("service-select");
            const selectedService = selectElement.value;
            const serviceResultsDiv = document.getElementById("service-results");
            serviceResultsDiv.innerHTML = ""; // Clear previous results

            if (serviceData[selectedService]) {
                serviceData[selectedService].forEach(provider => {
                    const providerDiv = document.createElement("div");
                    providerDiv.classList.add("provider");
                    providerDiv.innerHTML = `
                        <h3>${provider.name}</h3>
                        <p>Service: ${provider.service}</p>
                    `;
                    serviceResultsDiv.appendChild(providerDiv);
                });
            } else {
                serviceResultsDiv.innerHTML = "<p>No providers found for this service.</p>";
            }
        }

        // Event listener for dropdown change
        document.getElementById("service-select").addEventListener("change", populateServiceResults);

        // Populate service results on page load
        populateServiceResults();
    </script>
</body>
</html>
