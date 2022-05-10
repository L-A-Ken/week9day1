const { Router } = require("express");

// import our contollers to run when endpoints are hit
const { addMovie, listMovies } = require("./movieControllers");

// Router() function is used when you want to 
// create a new router object in your app to handle requests.
const movieRouter = Router();

// use http verb POST to add data to our movie endpoint
movieRouter.post("/movie", addMovie);

// use http verb GET to read data fromour movie endpoint
movieRouter.get("/movie", listMovies);

module.exports = movieRouter;