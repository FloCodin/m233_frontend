import React, { useEffect, useState } from "react";
import MovieService from "../services/movie.service";

function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        MovieService.getAllMovies()
            .then(response => setMovies(response.data))
            .catch(error => {
                console.error("Fehler beim Laden der Filme:", error);
                setMovies([]);
            });
    }, []);

    return (
        <div className="movie-list">
            <h2>📽️ Meine Movie Watchlist</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {movies.map(movie => (
                    <li key={movie.id} style={{ marginBottom: "1rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}>
                        <h3>{movie.title} ({movie.year})</h3>
                        <p><strong>Beschreibung:</strong> {movie.description}</p>
                        <p><strong>Regisseur:</strong> {movie.director}</p>
                        <p><strong>Dauer:</strong> {movie.duration} Minuten</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MovieList;
