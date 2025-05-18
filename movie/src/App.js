import React, { useState } from 'react';
import MovieCard from './MovieCard';

const API_KEY = "203a241"; // <-- Replace with your OMDb API Key

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const searchMovies = async () => {
    if (!searchTerm.trim()) return;

    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setError('');
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to fetch movies.");
    }
  };

  return (
    <div className="container">
      <h1>🎬 Movie Search</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter movie name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={searchMovies}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="movies">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
