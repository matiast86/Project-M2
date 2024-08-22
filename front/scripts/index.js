const renderCards = require("./renderCards");
const createMovie = require("./createMovie");

const axios = require("axios");



const fetchMovies = async () => {
    try {
        const response = await axios("http://localhost:3000/movies");
        renderCards(response.data);


    } catch (error) {
        console.log(error.message);
        alert(error.message);
    }
};



const submitButton = document.getElementById("button");

submitButton?.addEventListener("click", (event) => {
    event.preventDefault();
    createMovie();
    document.getElementById("form").reset();

});
const clearButton = document.getElementById("deleteButton");

clearButton?.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("form").reset();
});




fetchMovies();




