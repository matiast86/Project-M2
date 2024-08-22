class Movie {
    constructor(id, title, year, director, duration, genre, rate, poster) {
        if(!title || !director || !poster) throw new Error("You should include a title, a director and a poster");
        this.id = id;
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
    };

};

const guardians2 = new Movie(
    1,
    "Guardians of the Galaxy Vol. 2",
    2017,
    "James Gunn",
    "2h 16min",
    ["Action", "Adventure", "Comedy"],
    7.7,
    "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
);

const starWars = new Movie(
    2,
    "Star Wars: Episode IV - A New Hope",
    1977,
    "George Lucas",
    "2h 1min",
    ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    8.7,
    "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
);

const lotr = new Movie(
    3,
    "The Lord of the Rings: The Fellowship of the Ring",
    2001,
    "Peter Jackson",
    "2h 58min",
    ["Action", "Adventure", "Drama", "Fantasy"],
    8.8,
    "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
);

const titanic = new Movie(
    4,
    "Titanic",
    1997,
    "James Cameron",
    "3h 14min",
    ["Drama", "Romance"],
    7.8,
    "https://m.media-amazon.com/images/I/71V3V0FE1gS.__AC_SX300_SY300_QL70_FMwebp_.jpg"
);

const babysDayOut = new Movie(
    5,
    "Baby's Day Out",
    1994,
    "Patrick Read Johnson",
    "1h 39min",
    ["Adventure", "Comedy", "Crime"],
    6.2,
    "https://m.media-amazon.com/images/I/51iVSHb8CaL._AC_UF894,1000_QL80_.jpg"
);

const thatThingYouDo = new Movie(
    6,
    "That Thing You Do!",
    1996,
    "Tom Hanks",
    "1h 48min",
    ["Comedy", "Drama", "Music"],
    6.9,
    "https://m.media-amazon.com/images/I/61zY9XlvrOL._AC_UF894,1000_QL80_.jpg"
);

const airForceOne = new Movie(
    7,
    "Air Force One",
    1997,
    "Wolfgang Petersen",
    "2h 4min",
    ["Action", "Drama", "Thriller"],
    6.5,
    "https://m.media-amazon.com/images/I/51gArXAWvLL._AC_UF894,1000_QL80_.jpg"
);

const prettyWoman = new Movie(
    8,
    "Pretty Woman",
    1990,
    "Garry Marshall",
    "1h 59min",
    ["Comedy", "Romance"],
    7.1,
    "https://m.media-amazon.com/images/I/81ocbJWNX6S.jpg"
);



// module.exports = {
//     Movie,
//     guardians2,
//     starWars,
//     lotr,
// };
//     titanic,
//     babysDayOut,
//     thatThingYouDo,
//     airForceOne,
//     prettyWoman,
// };