function toggleDarkMode() {
    const body = document.body;
    const darkModeSwitch = document.getElementById('darkModeSwitch');


    if (darkModeSwitch.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }

    // Get all child divs of div with id 'carList'
    const carDivs = document.getElementById('carList').querySelectorAll('div');

    // Iterate over all child divs and change their background color
    carDivs.forEach(div => {
        div.style.backgroundColor = darkModeSwitch.checked ? '#343a40' : '#f8f9fa';
    });
}

// Car data
const cars = [
    {
        make: 'Toyota',
        model: 'Corolla',
        price: 20000,
        year: 2022,
        fuelType: 'Gasoline',
        engine: '1.8L Inline-4',
        transmission: 'Manual',
        image: './src/images/car1.jpg',
        priceData: [21000, 22000, 23000, 19000, 18000, 20000],
        comments: [
            { author: 'John', timestamp: '2024-04-12 09:00', content: 'This car looks cool!' },
            { author: 'Jane', timestamp: '2024-04-12 09:30', content: 'The price seems a bit high...' },
            { author: 'Bob', timestamp: '2024-04-12 10:00', content: 'I like the design of this car!' }
        ]
    },
    {
        make: 'Toyota',
        model: 'Camry',
        price: 32000,
        year: 2023,
        fuelType: 'Hybrid',
        engine: '2.5L Inline-4',
        transmission: 'Automatic',
        image: './src/images/car2.jpg',
        priceData: [31000, 30000, 33000, 28000, 29000, 32000],
        comments: [
            { author: 'Tom', timestamp: '2024-04-12 11:00', content: 'How is the fuel economy of this car?' },
            { author: 'Sarah', timestamp: '2024-04-12 11:30', content: 'Does it have safety features?' }
        ]
    },
    {
        make: 'Honda',
        model: 'Accord',
        price: 26000,
        year: 2021,
        fuelType: 'Hybrid',
        engine: '2.0L Inline-4',
        transmission: 'Automatic',
        image: './src/images/car3.jpg',
        priceData: [24000, 27000, 25000, 28000, 23000, 26000],
        comments: [
            { author: 'Chris', timestamp: '2024-04-12 12:00', content: 'How comfortable is this car?' },
            { author: 'Emma', timestamp: '2024-04-12 12:30', content: 'Is the interior spacious enough?' }
        ]
    },
    {
        make: 'Honda',
        model: 'Civic',
        price: 24000,
        year: 2022,
        fuelType: 'Gasoline',
        engine: '1.5L Inline-4',
        transmission: 'Manual',
        image: './src/images/car4.jpg',
        priceData: [22000, 20000, 25000, 23000, 21000, 24000],
        comments: [
            { author: 'Alice', timestamp: '2024-04-12 13:00', content: 'How is the handling of this car?' },
            { author: 'David', timestamp: '2024-04-12 13:30', content: 'Does it come with a sport package?' }
        ]
    },
    {
        make: 'Audi',
        model: 'A4',
        price: 35000,
        year: 2023,
        fuelType: 'Gasoline',
        engine: '2.0L Turbo Inline-4',
        transmission: 'Automatic',
        image: './src/images/car5.jpg',
        priceData: [36000, 38000, 33000, 34000, 37000, 35000],
        comments: [
            { author: 'James', timestamp: '2024-04-12 14:00', content: 'How is the interior of this car?' },
            { author: 'Emily', timestamp: '2024-04-12 14:30', content: 'Is the rear space spacious enough?' }
        ]
    },
    {
        make: 'Audi',
        model: 'Q5',
        price: 45000,
        year: 2022,
        fuelType: 'Diesel',
        engine: '3.0L Turbo V6',
        transmission: 'Automatic',
        image: './src/images/car6.jpg',
        priceData: [46000, 44000, 47000, 43000, 48000, 45000],
        comments: [
            { author: 'Kevin', timestamp: '2024-04-12 15:00', content: 'How is the performance of this car?' },
            { author: 'Olivia', timestamp: '2024-04-12 15:30', content: 'Can you talk about the tech features in the car?' }
        ]
    },
    {
        make: 'BMW',
        model: '3 Series',
        price: 41000,
        year: 2023,
        fuelType: 'Diesel',
        engine: '2.0L Inline-4',
        transmission: 'Automatic',
        image: './src/images/car7.jpg',
        priceData: [42000, 40000, 39000, 38000, 43000, 41000],
        comments: [
            { author: 'Liam', timestamp: '2024-04-12 16:00', content: 'How is the value for money of this car?' },
            { author: 'Sophia', timestamp: '2024-04-12 16:30', content: 'Does it come with a sport package?' }
        ]
    },
    {
        make: 'BMW',
        model: 'X5',
        price: 58000,
        year: 2022,
        fuelType: 'Hybrid',
        engine: '3.0L V6',
        transmission: 'Automatic',
        image: './src/images/car8.jpg',
        priceData: [55000, 57000, 54000, 53000, 56000, 58000],
        comments: [
            { author: 'Mia', timestamp: '2024-04-12 17:00', content: 'How is the off-road performance of this car?' },
            { author: 'Noah', timestamp: '2024-04-12 17:30', content: 'Can you talk about the fuel efficiency?' }
        ]
    }
    // Add more car data
];



// Show home page
function showHomePage() {
    const contentSection = document.getElementById('content');
    contentSection.innerHTML = `
                <h2>All Car Information</h2>
                <div id="carList">
                    <!-- Here will display all car information -->
                </div>
            `;
    showAllCars(); // Show all car information on home page
}

// Show all car information
function showAllCars() {
    const carListDiv = document.getElementById('carList');
    carListDiv.innerHTML = '';
    carListDiv.style.display = 'grid'; // Enable Grid layout
    carListDiv.style.gridTemplateColumns = 'repeat(2, 1fr)'; // Create two columns with equal width
    carListDiv.style.gap = '10px'; // Set grid gap

    cars.forEach(car => {
        const carDiv = document.createElement('div');
        carDiv.style.border = '1px solid black'; // Add border
        carDiv.style.padding = '10px'; // Add padding
        carDiv.style.backgroundColor = '#f8f9fa'; // Add background color
        carDiv.innerHTML = `
                    <div style="display: flex;">
                        <img src="${car.image}" alt="${car.make} ${car.model}" style="width: 350px; height: auto; margin-right: 10px;">
                        <div>
                            <p>Make: ${car.make}</p>
                            <p>Model: ${car.model}</p>
                            <p>Price: $${car.price}</p>
                            <p>Year: ${car.year}</p>
                            <p>Fuel Type: ${car.fuelType}</p>
                            <p>Engine: ${car.engine}</p>
                            <p>Transmission: ${car.transmission}</p>
                            <a href="car_details.html?make=${car.make}&model=${car.model}" id="${car.make}${car.model}">Details</a>
                        </div>
                    </div>
                `;
        carDiv.style.border = '1px solid #ccc';
        carDiv.style.padding = '10px';
        carDiv.style.marginBottom = '20px';
        carListDiv.appendChild(carDiv);
    });

}

// Show browse page
function showBrowsePage() {
    const contentSection = document.getElementById('content');
    contentSection.innerHTML = `
                <h2>Filter By</h2>
                <div>
                    <label for="make">Make:</label>
                    <select id="make">
                        <option value="all">All</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Honda">Honda</option>
                        <option value="Audi">Audi</option>
                        <option value="BMW">BMW</option>
                        <!-- Add more options -->
                    </select>
                </div>
                <div>
                    <label for="minPrice">Minimum Price:</label>
                    <input type="text" id="minPrice" placeholder="Minimum Price">
                </div>
                <div>
                    <label for="maxPrice">Maximum Price:</label>
                    <input type="text" id="maxPrice" placeholder="Maximum Price">
                </div>
                <div id="filteredCarList"></div>
            `;

    // Add car filtering functionality
    document.getElementById('make').addEventListener('change', filterCars);
    document.getElementById('minPrice').addEventListener('input', filterCars);
    document.getElementById('maxPrice').addEventListener('input', filterCars);

    // Load all cars by default
    showAllCars();
}

// Filter cars
function filterCars() {
    const make = document.getElementById('make').value;
    const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Infinity;

    let filteredCars = cars;

    if (make !== 'all') {
        filteredCars = filteredCars.filter(car => car.make === make);
    }

    filteredCars = filteredCars.filter(car => car.price >= minPrice && car.price <= maxPrice);

    showFilteredCars(filteredCars);
}

// Show filtered cars
function showFilteredCars(filteredCars) {
    const carListDiv = document.getElementById('filteredCarList');
    carListDiv.innerHTML = '';
    carListDiv.style.display = 'grid'; // Enable Grid layout
    carListDiv.style.gridTemplateColumns = 'repeat(2, 1fr)'; // Create two columns with equal width
    carListDiv.style.gap = '10px'; // Set grid gap

    const filteredCarListDiv = document.getElementById('filteredCarList');
    filteredCarListDiv.innerHTML = '';

    if (filteredCars.length === 0) {
        filteredCarListDiv.textContent = 'No matching cars found';
        return;
    }

    filteredCars.forEach(car => {
        const carDiv = document.createElement('div');
        carDiv.style.border = '1px solid black'; // Add border
        carDiv.style.padding = '10px'; // Add padding
        carDiv.style.backgroundColor = '#f8f9fa'; // Add background color
        carDiv.innerHTML = `
                    <p>Make: ${car.make}</p>
                    <p>Model: ${car.model}</p>
                    <p>Price: $${car.price}</p>
                    <p>Year: ${car.year}</p>
                    <p>Fuel Type: ${car.fuelType}</p>
                    <p>Engine: ${car.engine}</p>
                    <p>Transmission: ${car.transmission}</p>
                `;

        carListDiv.appendChild(carDiv);
    });
}

// Show compare page
function showComparePage() {
    const contentSection = document.getElementById('content');
    contentSection.innerHTML = `
                <h2>Select Cars to Compare</h2>
                <div>
                    <label for="car1">Car 1:</label>
                    <select id="car1">
                        <option value="">Select a Car</option>
                        <!-- Add all cars as options -->
                    </select>
                    <br>
                    <label for="car2">Car 2:</label>
                    <select id="car2">
                        <option value="">Select a Car</option>
                        <!-- Add all cars as options -->
                    </select>
                    <br>
                    <button onclick="compareCars()">Compare</button>
                    <div id="comparisonResult"></div>
                </div>
            `;

    // Populate car options
    const carSelect1 = document.getElementById('car1');
    const carSelect2 = document.getElementById('car2');

    cars.forEach((car, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${car.make} ${car.model}`;
        carSelect1.appendChild(option.cloneNode(true));
        carSelect2.appendChild(option);
    });
}

// Compare two cars
function compareCars() {
    const carIndex1 = document.getElementById('car1').value;
    const carIndex2 = document.getElementById('car2').value;

    if (carIndex1 === '' || carIndex2 === '') {
        document.getElementById('comparisonResult').textContent = 'Please select two cars to compare';
        return;
    }

    const car1 = cars[carIndex1];
    const car2 = cars[carIndex2];

    // Build comparison result table
    const comparisonResultDiv = document.getElementById('comparisonResult');
    comparisonResultDiv.innerHTML = `
        <h3>${car1.make} ${car1.model} vs ${car2.make} ${car2.model}</h3>
        <table border="1"> <!-- Add border attribute -->
            <tr>
                <th>Attribute</th>
                <th>${car1.make} ${car1.model}</th>
                <th>${car2.make} ${car2.model}</th>
            </tr>
            <tr>
                <td>Make</td>
                <td>${car1.make}</td>
                <td>${car2.make}</td>
            </tr>
            <tr>
                <td>Model</td>
                <td>${car1.model}</td>
                <td>${car2.model}</td>
            </tr>
            <tr>
                <td>Price</td>
                <td>$${car1.price}</td>
                <td>$${car2.price}</td>
            </tr>
            <tr>
                <td>Year</td>
                <td>${car1.year}</td>
                <td>${car2.year}</td>
            </tr>
            <tr>
                <td>Fuel Type</td>
                <td>${car1.fuelType}</td>
                <td>${car2.fuelType}</td>
            </tr>
            <tr>
                <td>Engine</td>
                <td>${car1.engine}</td>
                <td>${car2.engine}</td>
            </tr>
            <tr>
                <td>Transmission</td>
                <td>${car1.transmission}</td>
                <td>${car2.transmission}</td>
            </tr>
        </table>
    `;
}


// Set link click events
document.getElementById('homeLink').addEventListener('click', function (event) {
    event.preventDefault();
    showHomePage(); // Show home page when "Home" is clicked
});
document.getElementById('browseLink').addEventListener('click', showBrowsePage);
document.getElementById('compareLink').addEventListener('click', showComparePage);

// Show all car information by default
window.onload = showHomePage;
