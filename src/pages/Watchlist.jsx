import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthService from "../services/auth.service";

export default function Watchlist() {
    const [movies, setMovies] = useState([]);
    const user = AuthService.getCurrentUser();

    useEffect(() => {
        if (user?.accessToken) {
            axios
                .get("http://localhost:8080/api/watchlist", {
                    headers: {
                        Authorization: `Bearer ${user.accessToken}`,
                    },
                })
                .then((res) => setMovies(res.data))
                .catch((err) => console.error("Fehler beim Laden der Watchlist", err));
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-6">🎞️ Deine Watchlist</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div key={movie.id} className="bg-gray-800 p-4 rounded shadow">
                            <h2 className="text-xl font-semibold">{movie.title}</h2>
                            <p className="text-sm text-gray-300">{movie.releaseDate}</p>
                        </div>
                    ))
                ) : (
                    <p>🕵️ Noch keine Filme in deiner Watchlist!</p>
                )}
            </div>
        </div>
    );
}
