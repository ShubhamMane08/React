import React, { useState } from 'react';

function MovieCard({ movie }) {
  const placeholderImage = 'https://via.placeholder.com/150?text=No+Image';
  const [imgSrc, setImgSrc] = useState(
    movie.Poster !== 'N/A' ? movie.Poster : placeholderImage
  );
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(placeholderImage);
    }
  };

  return (
    <div className="movie-card">
      <img
        src={imgSrc}
        alt={movie.Title}
        onError={handleError}
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
}

export default MovieCard;
