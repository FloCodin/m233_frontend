import React, { useEffect, useState } from "react";
import MovieService from "../services/movie.service";

function MoviePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        MovieService.getAllMovies()
            .then(res => setMovies(res.data))
            .catch(err => console.error("Fehler beim Laden der Filme:", err));
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center px-4">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full text-center">
                <h1 className="text-4xl font-bold text-blue-800 mb-4">
                    Willkommen zur Movie Watchlist 🎬
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                    Du bist erfolgreich im Projekt gelandet – Tailwind läuft ✅ und dein Login funktioniert auch.
                </p>

                <div className="flex justify-center gap-4">
                    <a
                        href="/movies"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition duration-200"
                    >
                        🎥 Filme ansehen
                    </a>
                    <a
                        href="/login"
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-5 py-2 rounded transition duration-200"
                    >
                        🔐 Login
                    </a>
                </div>
            </div>
        </div>
    );
}

export default MoviePage;
