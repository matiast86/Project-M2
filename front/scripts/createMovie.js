const axios = require('axios');

const createMovie = async () => {
    const title = document.getElementById("title").value;
    const year = document.getElementById("year").value;
    const director = document.getElementById("director").value;
    const duration = document.getElementById("duration").value;
    const genreSelect = document.getElementById("genre");
    const rate = parseFloat(document.getElementById("rate").value);
    const poster = document.getElementById("poster").value;

    const genres = Array.from(genreSelect.selectedOptions).map(option => option.value);

    const movieData = {
        title: title,
        year: year,
        director: director,
        duration: duration,
        genre: genres,
        rate: rate,
        poster: poster
    };

    try {
        await axios.post("http://localhost:3000/movies/createMovie", movieData);
        alert("Movie created successfully!");
    } catch (error) {
        console.error("There was an error creating the movie:", error);
        alert("Failed to create the movie. Please try again.");
    }
};

module.exports = createMovie;