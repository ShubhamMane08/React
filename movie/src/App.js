import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const API_KEY = "203a241"; // Replace with your actual TMDb API key

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  // Fetch popular movies on landing
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        console.error("Failed to fetch popular movies", err);
        setError("Failed to load popular movies.");
      }
    };

    fetchPopularMovies();
  }, []);

  // Search movies
  const searchMovies = async () => {
    if (!searchTerm.trim()) return;

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchTerm)}`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setMovies(data.results);
        setError('');
      } else {
        setMovies([]);
        setError('No movies found.');
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to fetch movies.");
    }
  };

  return (
    <div className="container">
      <h1>🎬 Movie Explorer</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter movie name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && searchMovies()}
        />
        <button onClick={searchMovies}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="movies">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
