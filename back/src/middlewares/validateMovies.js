const validateMovies = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster, } = req.body;

    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        res.status(400).json({
            error: "Faltan datos. Por favor completar todo el formulario.",
        });
    } else {
        next();
    };
};

module.exports = validateMovies;