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

// Get query parameters from URL
const urlParams = new URLSearchParams(window.location.search);
const make = urlParams.get('make');
const model = urlParams.get('model');

// Print query parameters to console
console.log('make:', make);
console.log('model:', model);

// Find matching car data
let matchedCar = null;
for (const car of cars) {
    if (car.make === make && car.model === model) {
        matchedCar = car;
        break;
    }
}

// Show car details on the webpage
const carTitle = document.getElementById('carTitle');
if (matchedCar) {
    carTitle.innerText = `${matchedCar.make} ${matchedCar.model} Details`;

    // Create a container to hold the car image and other information
    const carDetailsContainer = document.createElement('div');
    carDetailsContainer.classList.add('car-details-container');

    // Create image element
    const imageElement = document.createElement('img');
    imageElement.src = matchedCar.image;
    imageElement.alt = `${matchedCar.make} ${matchedCar.model}`;
    carDetailsContainer.appendChild(imageElement);

    // Create a list to hold car information
    const carInfoList = document.createElement('ul');

    // Create an array of car information
    const carInfo = [
        `Make: ${matchedCar.make}`,
        `Model: ${matchedCar.model}`,
        `Price: $${matchedCar.price}`,
        `Year: ${matchedCar.year}`,
        `Fuel Type: ${matchedCar.fuelType}`,
        `Engine: ${matchedCar.engine}`,
        `Transmission: ${matchedCar.transmission}`
    ];

    // Loop through car information array, create corresponding list items, and add them to the list
    carInfo.forEach(info => {
        const listItem = document.createElement('li');
        listItem.innerHTML = info;
        carInfoList.appendChild(listItem);
    });

    // Add the list of car information to the container
    carDetailsContainer.appendChild(carInfoList);

    // Create a canvas element for drawing price fluctuation
    const priceChartCanvas = document.createElement('canvas');
    priceChartCanvas.id = 'priceChart';
    carDetailsContainer.appendChild(priceChartCanvas);

    // Add the car details container to the page
    document.body.appendChild(carDetailsContainer);

    // Draw price fluctuation line chart
    const priceChartContext = priceChartCanvas.getContext('2d');
    new Chart(priceChartContext, {
        type: 'line',
        data: {
            labels: ['2023.11', '2023.12', '2024.1', '2024.2', '2024.3', '2024.4'],
            datasets: [{
                label: 'Price Fluctuation',
                data: matchedCar.priceData,
                borderColor: 'blue',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                        min: Math.min(...matchedCar.priceData) * 0.9,
                        max: Math.max(...matchedCar.priceData) * 1.1
                    }
                }]
            }
        }
    });

    // Add a section for recommending other cars at a similar price point
    const recommendCars = document.createElement('div');
    recommendCars.classList.add('recommend-cars');

    // Add title
    const recommendTitle = document.createElement('h2');
    recommendTitle.innerText = 'Other Cars at a Similar Price Point';
    recommendCars.appendChild(recommendTitle);

    // Create a container for the recommended cars
    const recommendCardContainer = document.createElement('div');
    recommendCardContainer.classList.add('recommend-card-container');

    // Find other cars with a similar price
    const similarCars = cars.filter(car => Math.abs(car.price - matchedCar.price) < 10000 && car.make !== matchedCar.make && car.model !== matchedCar.model);

    // Loop through similar cars array and create cards for each car
    similarCars.forEach(car => {
        // Create a card for the car
        const card = document.createElement('div');
        card.classList.add('recommend-card');

        // Create image element
        const image = document.createElement('img');
        image.src = car.image;
        image.alt = `${car.make} ${car.model}`;
        card.appendChild(image);

        // Create details for the car
        const details = document.createElement('div');
        details.classList.add('recommend-card-details');

        // Add make and model
        const makeModel = document.createElement('p');
        makeModel.innerText = `${car.make} ${car.model}`;
        details.appendChild(makeModel);

        // Add price
        const price = document.createElement('p');
        price.innerText = `Price: $${car.price}`;
        details.appendChild(price);

        // Add details
        const detailsLink = document.createElement('a');
        detailsLink.href = `car_details.html?make=${car.make}&model=${car.model}`;
        detailsLink.textContent = 'Details';
        detailsLink.id = `${car.make}${car.model}`;
        details.appendChild(detailsLink);

        // Append details to the card
        card.appendChild(details);



        // Append the card to the container
        recommendCardContainer.appendChild(card);
    });

    // Add the container of recommended cars to the section
    recommendCars.appendChild(recommendCardContainer);

    // Add the section to the car details container
    carDetailsContainer.appendChild(recommendCars);

    // Create discussion area
    const discussionArea = document.createElement('div');
    discussionArea.classList.add('discussion-area');

    // Add title
    const discussionTitle = document.createElement('h2');
    discussionTitle.innerText = 'Discussion Area';
    discussionArea.appendChild(discussionTitle);

    // Create comment form
    const commentForm = document.createElement('form');
    commentForm.classList.add('comment-form');

    // Create comment input
    const commentInput = document.createElement('textarea');
    commentInput.setAttribute('rows', '4');
    commentInput.setAttribute('cols', '50');
    commentInput.setAttribute('placeholder', 'Post a comment...');
    commentForm.appendChild(commentInput);

    // Create submit button
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.innerText = 'Submit';
    commentForm.appendChild(submitButton);

    // Add comment form to discussion area
    discussionArea.appendChild(commentForm);

    // Load comments
    const commentList = document.createElement('ul');
    commentList.classList.add('comment-list');
    matchedCar.comments.forEach(comment => {
        const commentItem = document.createElement('li');
        const commentInfo = document.createElement('div');
        commentInfo.classList.add('comment-info');
        commentInfo.innerHTML = `<strong>${comment.author}</strong> posted on ${comment.timestamp}`;
        const commentContent = document.createElement('div');
        commentContent.classList.add('comment-content');
        commentContent.innerText = comment.content;
        commentItem.appendChild(commentInfo);
        commentItem.appendChild(commentContent);
        commentList.appendChild(commentItem);
    });

    // Add comment list to discussion area
    discussionArea.appendChild(commentList);

    // Add discussion area to the car details container
    carDetailsContainer.appendChild(discussionArea);


} else {
    carTitle.innerText = 'No matching car found';
}

