import React, { useEffect, useState } from 'react';

const API_KEY = "203a241";
const fallbackImage = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

function MovieCard({ movie }) {
  const [plot, setPlot] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&plot=short&apikey=${API_KEY}`);
        const data = await response.json();
        if (data.Response === "True") {
          setPlot(data.Plot);
        } else {
          setPlot("No description available.");
        }
      } catch (err) {
        console.error("Failed to fetch movie details:", err);
        setPlot("Error fetching description.");
      }
    };

    fetchMovieDetails();
  }, [movie.imdbID]);

  const handleImageError = (e) => {
    if (e.target.src !== fallbackImage) {
      e.target.onerror = null;
      e.target.src = fallbackImage;
    }
  };

  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : fallbackImage}
        alt={movie.Title}
        onError={handleImageError}
      />
      <h3>{movie.Title}</h3>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Desc:</strong> {plot}</p>
    </div>
  );
}

export default MovieCard;
