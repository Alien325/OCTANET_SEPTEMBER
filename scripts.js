// Sample flight data
const flights = [
    {
        id: 1,
        from: "New York",
        to: "Los Angeles",
        departureDate: "2023-03-01",
        returnDate: "2023-03-08",
        price: 200,
    },
    {
        id: 2,
        from: "New York",
        to: "Chicago",
        departureDate: "2023-03-01",
        returnDate: "2023-03-08",
        price: 150,
    },
    // Add more flights here...
];

// Function to render flights grid
function renderFlightsGrid(flights) {
    const flightsGrid = document.getElementById("flights-grid");
    flightsGrid.innerHTML = "";

    flights.forEach((flight) => {
        const flightElement = document.createElement("div");
        flightElement.classList.add("flight");

        const flightInfo = `
            <h2>Flight ${flight.id}</h2>
            <p>From: ${flight.from}</p>
            <p>To: ${flight.to}</p>
            <p>Departure Date: ${flight.departureDate
