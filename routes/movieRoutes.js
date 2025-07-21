// routes/movieRoutes.js
const express = require('express');
const { searchMovies, getMovieDetails } = require('../controllers/movieController');

const router = express.Router();

router.get('/search', searchMovies);        // GET /api/search?title=Inception
router.get('/movies/:id', getMovieDetails); // GET /api/movies/tt1375666

module.exports = router;
