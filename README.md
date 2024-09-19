# Movie Watchlist App - README

## Overview
This project is a Movie Watchlist app that allows users to search for movies, add them to a personalized watchlist, and manage the list with the ability to remove movies. The app fetches movie data from The Movie Database (TMDb) API and persists the watchlist within the current browser session.

## Features
- Search for movies using the TMDb API.
- Add movies to your personal watchlist with a single click.
- Display search results with movie posters and release dates.
- Remove movies from the watchlist.
- Responsive design that works on both mobile and desktop screens.

## Technologies Used
- HTML, CSS for the layout and styling.
- JavaScript for dynamic content, movie search functionality, and watchlist management.
- TMDb API for fetching movie data, including titles, posters, and release dates.

## How to Use
1. Search for a Movie: Enter a movie title in the search bar and click the "Search" button or press "Enter". The search results will display a list of movies matching the query.
2. Add a Movie to Watchlist: Once the search results are displayed, click the "Add to Watchlist" button for any movie you'd like to save. The movie will appear in your "Watchlist" section.
3. Remove a Movie from Watchlist: In the "Watchlist" section, click the "Remove" button on any movie to delete it from your list.
4. Persistent Watchlist: The watchlist is session-based, so it will reset when the page is refreshed. 

## Code Breakdown

### HTML Structure (`index.html`)
The HTML file contains:
- A header with the title "Movie Watchlist".
- A search bar where users can input a movie title to search for.
- Two sections: one for displaying search results and one for the watchlist.
- Movie items in both sections display movie posters, titles, and buttons to either add or remove them from the watchlist.

### CSS Styling (`styles.css`)
The CSS file:
- Implements a dark theme with gradient background and styled containers.
- Uses flexbox for a responsive layout that adjusts well on different screen sizes.
- Styles individual movie cards with hover effects and smooth transitions.
- Provides consistent design for buttons with hover states and shadow effects.

### JavaScript Functionality (`app.js`)
The JavaScript file:
- Search Functionality: Listens for user input and fetches movie data from the TMDb API based on the search query.
- Movie Display: Dynamically creates and displays movie cards in the search results section, including the title, poster, and release date.
- Watchlist Management: Handles adding movies to the watchlist and removing them from it. The watchlist is updated in real-time when the user interacts with it.
- API Interaction: Uses the TMDb API to search for movies and retrieve relevant data, such as posters and release dates.

### TMDb API Usage
- The app interacts with the TMDb API using the search/movie endpoint, sending the user's query as a parameter.
- Movie data such as the title, release date, and poster image are fetched and displayed in the search results.

## Setup and Installation
1. Download or clone the repository.
2. Replace the placeholder TMDb API key in the `app.js` file with your own API key.
3. Open the `index.html` file in any modern web browser.
4. Start searching for movies, adding them to your watchlist, and managing your list.

## Project Enhancements
Possible future improvements include:
- Adding a persistent storage solution (e.g., localStorage) so the watchlist persists across browser sessions.
- Integrating user authentication to save watchlists for different users.
- Adding sorting or filtering options for the watchlist based on release date or other criteria.

## Video Demonstration
You can check out the project demo video on my LinkedIn profile: https://www.linkedin.com/in/deepak-patil-23772b252
