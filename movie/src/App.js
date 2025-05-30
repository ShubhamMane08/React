import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const API_KEY = "203a241";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);  

  const fetchMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setError('');
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      setError('Failed to fetch movies.');
    }
  };

  useEffect(() => {
    fetchMovies(`https://www.omdbapi.com/?s=movie&y=2025&apikey=${API_KEY}`);
  }, []);

  const searchMovies = () => {
    if (!searchTerm.trim()) return;
    fetchMovies(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
  };

 
  const selectMovie = async (imdbID) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}&plot=full`);
      const data = await response.json();
      if (data.Response === "True") {
        setSelectedMovie(data);
      } else {
        setError(data.Error);
      }
    } catch (err) {
      setError('Failed to fetch movie details.');
    }
  };
  
  const goBackToSelectedMovies = () => {
    setSelectedMovie(null);
    setError('');
  };

  return (
    <div className="container">
      <h1>🎬 Movie Search</h1>

      {!selectedMovie && (
        <>
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
              <div key={movie.imdbID} onClick={() => selectMovie(movie.imdbID)} style={{ cursor: 'pointer' }}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </>
      )}

      {selectedMovie && (
        <div className="movie-details">
          <h2>{selectedMovie.Title} ({selectedMovie.Year})</h2>
          <img
            src={selectedMovie.Poster !== 'N/A' ? selectedMovie.Poster : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'}
            alt={selectedMovie.Title}
            style={{ width: '300px', height: 'auto' }}
          />
          <p><strong>Genre:</strong> {selectedMovie.Genre}</p>
          <p><strong>Director:</strong> {selectedMovie.Director}</p>
          <p><strong>Actors:</strong> {selectedMovie.Actors}</p>
          <p><strong>Plot:</strong> {selectedMovie.Plot}</p>
          <p><strong>IMDB Rating:</strong> {selectedMovie.imdbRating}</p>
          <button onClick={goBackToSelectedMovies} style={{ marginBottom: '20px' }}>← Back</button>

        </div>
      )}
    

    </div>
  );
}

export default App;
