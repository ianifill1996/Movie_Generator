// server.js
require('dotenv').config();
const express = require('express');
const movieRoutes = require('./routes/movieRoutes');

const app = express();
const PORT = 3001;

app.use(express.json());

// Mount all movie-related routes at /api
app.use('/api', movieRoutes);

app.listen(PORT, () => {
  console.log(`🎬 Movie Finder API is running on port ${PORT}`);
});
