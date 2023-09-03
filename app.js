// Constants
const apiKey = 'YOUR_API_KEY'; //
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const currentImageContainer = document.getElementById('current-image-container');
const searchHistory = document.getElementById('search-history');

// Function to fetch and display the current image of the day
function getCurrentImageOfTheDay() {
    const currentDate = new Date().toISOString().split("T")[0];
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${currentDate}`;
    
    // Fetch data from NASA API and update the UI
    // You can use fetch() or any other method you prefer
}

// Function to fetch and display the image for a selected date
function getImageOfTheDay(date) {
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
    
    // Fetch data from NASA API and update the UI
    // Remember to save the date to local storage and add it to search history
}

// Function to save a date to local storage
function saveSearch(date) {
    // Retrieve the existing search history from local storage
    // Add the new date to the search history array
    // Save the updated search history back to local storage
}

// Function to add a date to the search history list in the UI
function addSearchToHistory(date) {
    // Retrieve the search history from local storage
    // Update the search history list in the UI
    // Add click event listeners to each list item to fetch data when clicked
}

// Event listener for form submission
searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const selectedDate = searchInput.value;
    getImageOfTheDay(selectedDate);
});

// Initial call to fetch and display the current image of the day
getCurrentImageOfTheDay();
