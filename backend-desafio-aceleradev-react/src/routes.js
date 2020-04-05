const express = require("express");

const FileController = require("./controllers/FileController");
const CriptoController = require("./controllers/CriptoController");

const routes = express.Router();

routes.get("/file", FileController.index);
routes.post("/cripto", CriptoController.cripto);

module.exports = routes;
