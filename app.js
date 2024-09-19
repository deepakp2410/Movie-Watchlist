// API Key and Base URL
const apiKey = 'd296393e146dc3f51a446b8ecef9b10a'; // Replace with your new TMDb API key
const baseUrl = 'https://api.themoviedb.org/3';

// Elements
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const movieResults = document.querySelector('.movie-results');
const watchlistContainer = document.querySelector('.watchlist');

// Event Listener for Search Button
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        fetchMovies(query);
    }
});

// Event Listener for Enter Key Press on Search Input
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
            fetchMovies(query);
        }
    }
});

// Function to Fetch Movies from TMDb API
function fetchMovies(query) {
    const url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                displayMovies(data.results);
            } else {
                movieResults.innerHTML = `<p>No results found for "${query}".</p>`;
            }
        })
        .catch(error => console.error('Error fetching movie data:', error));
}

// Function to Display Movies
function displayMovies(movies) {
    movieResults.innerHTML = ''; // Clear previous results
    movies.forEach(movie => {
        const moviePoster = movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : 'https://via.placeholder.com/200x300?text=No+Image';
        
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        movieDiv.innerHTML = `
            <img src="${moviePoster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Release: ${movie.release_date || 'N/A'}</p>
            <button onclick="addToWatchlist(${movie.id}, '${movie.title}', '${moviePoster}')">Add to Watchlist</button>
        `;
        movieResults.appendChild(movieDiv);
    });
}

// Function to Add Movie to Watchlist
function addToWatchlist(movieId, title, posterPath) {
    const movieExists = Array.from(watchlistContainer.children).some(
        item => item.querySelector('h3').textContent === title
    );
    
    if (movieExists) {
        alert('Movie is already in your watchlist!');
        return;
    }

    const watchlistItem = document.createElement('div');
    watchlistItem.classList.add('movie');
    watchlistItem.innerHTML = `
        <img src="${posterPath}" alt="${title}">
        <h3>${title}</h3>
        <button onclick="removeFromWatchlist(this)">Remove</button>
    `;
    watchlistContainer.appendChild(watchlistItem);
}

// Function to Remove Movie from Watchlist
function removeFromWatchlist(button) {
    const watchlistItem = button.parentElement;
    watchlistContainer.removeChild(watchlistItem);
}
