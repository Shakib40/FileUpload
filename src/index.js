const express = require("express");

const usersController = require("./controllers/user.controller");
const productsController = require("./controllers/product.controller");
const galleryController = require("./controllers/gallery.controller");

const app = express();
app.use(express.json());


app.use("/users", usersController);
app.use("/products", productsController);
app.use("/gallery", galleryController);


module.exports = app;

