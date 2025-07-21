// controllers/movieController.js
const axios = require('axios');

const OMDB_BASE_URL = 'http://www.omdbapi.com/';
const API_KEY = process.env.OMDB_API_KEY;

// GET /api/search?title=Inception
const searchMovies = async (req, res) => {
  const { title } = req.query;

  if (!title) {
    return res.status(400).json({ error: 'Title query parameter is required' });
  }

  try {
    const response = await axios.get(OMDB_BASE_URL, {
      params: {
        s: title,
        apikey: API_KEY,
      },
    });

    if (response.data.Response === 'False') {
      return res.status(404).json({ error: response.data.Error });
    }

    res.json({ results: response.data.Search });
  } catch (error) {
    console.error('Error fetching movie search:', error.message);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
};

// GET /api/movies/:id
const getMovieDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(OMDB_BASE_URL, {
      params: {
        i: id,
        apikey: API_KEY,
      },
    });

    if (response.data.Response === 'False') {
      return res.status(404).json({ error: response.data.Error });
    }

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching movie details:', error.message);
    res.status(500).json({ error: 'Failed to fetch movie details' });
  }
};

module.exports = {
  searchMovies,
  getMovieDetails,
};
