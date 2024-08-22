const express = require("express");
const router = require("./routes"); // Asegúrate de importar el router correctamente
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(router); // Aquí se usa el router como middleware

module.exports = app;