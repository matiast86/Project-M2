//Datos elementos de html
//Selecciona el contenedor





//función callback para armar la tarjeta
const renderCards = (data) => {

    const row = document.getElementById("row");

    if (!row) {
        return;
    };

    row.innerHTML = "";
    data.forEach((peli) => {
        const nuevoArticle = document.createElement("article");
        nuevoArticle.classList.add("filmCard");
        nuevoArticle.classList.add("m-1");

        //crear el "anchor" para enlace del titulo
        const nuevoAnchor = document.createElement("a");
        //Crear el enlace al anchor
        nuevoAnchor.href = "#";
        //Crear el h3 para el titulo
        const nuevoTitulo = document.createElement("h3");
        nuevoTitulo.textContent = peli.title;
        nuevoAnchor.appendChild(nuevoTitulo);
        //crea la etiqueta de la imagen del poster
        const nuevoPoster = document.createElement("img");
        nuevoPoster.src = peli.poster;
        //Crear el div para info
        const info = document.createElement("div");
        info.classList.add("info");
        //Crea los elemntos del año
        const year = document.createElement("p");
        const yearHeading = document.createElement("strong");
        yearHeading.textContent = "Año: ";
        year.appendChild(yearHeading);
        year.appendChild(document.createTextNode(peli.year));
        //Crea el elemento para el director
        const director = document.createElement("p");
        const directorHeading = document.createElement("strong");
        directorHeading.textContent = "Director: ";
        director.appendChild(directorHeading);
        director.appendChild(document.createTextNode(peli.director));
        //Crea el elemento para el duration
        const duration = document.createElement("p");
        const durationHeading = document.createElement("strong");
        durationHeading.textContent = "Duración: ";
        duration.appendChild(durationHeading);
        duration.appendChild(document.createTextNode(peli.duration));
        //Convertir el array de "genre" en string y agregarlo a su elemnto html
        const stringGenre = peli.genre.join(", ");
        const genre = document.createElement("p");
        const genreHeading = document.createElement("strong");
        genreHeading.textContent = "Género: ";
        genre.appendChild(genreHeading);
        genre.appendChild(document.createTextNode(stringGenre));

        //Agregar los info a su div
        info.appendChild(year);
        info.appendChild(director);
        info.appendChild(duration);
        info.appendChild(genre);

        //Crear elemnto para el rating
        const rating = document.createElement("p");
        rating.classList.add("rating");
        const ratingHeading = document.createElement("strong");
        ratingHeading.textContent = "Rating: ";
        rating.appendChild(ratingHeading);
        //rating.appendChild(document.createTextNode(peli.rate));

        // Crear un span para el valor del rating y establecer su color
        const ratingValue = document.createElement("span");
        ratingValue.textContent = peli.rate;

        // Apply color based on rating
        const rate = parseFloat(peli.rate);
        if (rate >= 9) {
            ratingValue.style.color = '#006400'; // Dark Green
        } else if (rate >= 8) {
            ratingValue.style.color = '#008000'; // Green
        } else if (rate >= 7) {
            ratingValue.style.color = '#32CD32'; // Lime Green
        } else if (rate >= 6) {
            ratingValue.style.color = '#ADFF2F'; // Light Green
        } else if (rate >= 5) {
            ratingValue.style.color = '#FFD700'; // Yellow
        } else if (rate >= 4) {
            ratingValue.style.color = '#FFA500'; // Orange
        } else if (rate >= 3) {
            ratingValue.style.color = '#FF8C00'; // Dark Orange
        } else if (rate >= 2) {
            ratingValue.style.color = '#FF6347'; // Light Red
        } else {
            ratingValue.style.color = '#FF0000'; // Red
        }
        rating.appendChild(ratingValue);

        //Agregar los elemtnos al contenedor de las pelis

        nuevoArticle.appendChild(nuevoAnchor);
        nuevoArticle.appendChild(nuevoPoster);
        nuevoArticle.appendChild(info);
        nuevoArticle.appendChild(rating);
        row?.appendChild(nuevoArticle)
    });




}
module.exports = renderCards;