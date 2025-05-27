import React, { useEffect, useState } from "react";
import MovieService from "../services/movie.service";

export default function MoviePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        MovieService.getAllMovies()
            .then((res) => setMovies(res.data))
            .catch((err) => console.error("Fehler beim Laden der Filme:", err));
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6">
            <h1 className="text-3xl font-bold text-center mb-8 text-cyan-700 dark:text-cyan-300">
                🎬 Movie Watchlist
            </h1>

            {movies.length === 0 ? (
                <p className="text-center text-gray-500 dark:text-gray-400">
                    Keine Filme gefunden.
                </p>
            ) : (
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4 transition hover:scale-[1.02]"
                        >
                            <div className="mb-4 h-48 bg-gray-300 dark:bg-gray-700 rounded flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm italic">
                                {/* Optional: Poster später */}
                                Kein Bild
                            </div>
                            <h2 className="text-xl font-semibold mb-2 text-blue-900 dark:text-blue-300">
                                {movie.title} <span className="text-sm text-gray-500">({movie.year})</span>
                            </h2>
                            <p className="text-sm mb-1">
                                <strong>Regisseur:</strong> {movie.director}
                            </p>
                            <p className="text-sm mb-1">
                                <strong>Dauer:</strong> {movie.duration} Minuten
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                                {movie.description}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
