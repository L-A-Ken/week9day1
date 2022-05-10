// require our movie model to pass in specific data
const Movie = require("./movieModel");

// create a function to add a movie to our database
// using Movie schema to add JSON data for each film entry
exports.addMovie = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(200).send({ movie: newMovie})
    }   catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
};

// Use mongoose method to list all entries in the db
exports.listMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).send({ movies });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
};