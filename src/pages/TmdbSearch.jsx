import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthService from "../services/auth.service.js";
import MovieCard from "../components/MovieCard";
import {toast} from "react-toastify";

export default function TmdbSearch() {
    const [title, setTitle] = useState("");
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const user = AuthService.getCurrentUser();

    useEffect(() => {
        fetchPopularMovies(); // 🔥 Immer laden, egal ob eingeloggt
    }, []);


    const fetchPopularMovies = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/tmdb/popular");
            setResults(res.data.results);
            toast.success("🔥 Beliebte Filme geladen!");
        } catch (err) {
            console.error("Fehler beim Laden der populären Filme:", err);
            toast.error("🚨 Fehler beim Laden beliebter Filme!");
        }
    };

    const search = async () => {
        try {
            const res = await axios.get(
                `http://localhost:8080/api/tmdb/search?title=${encodeURIComponent(title)}`
            );
            setResults(res.data.results);
            toast.success("🎉 Ergebnisse erfolgreich geladen!");
        } catch (err) {
            console.error("Fehler bei der Suche:", err);
            toast.error("❌ Fehler bei der Filmsuche. Bitte versuch es später erneut.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-4">🎬 TMDB Filmsuche</h1>

            <div className="flex gap-4 mb-6">
                <input
                    className="px-4 py-2 rounded bg-gray-800 text-white w-full"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Filmtitel eingeben..."
                />
                <button
                    className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded"
                    onClick={search}
                >
                    Suchen
                </button>
            </div>
            <button
                className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded"
                onClick={fetchPopularMovies}
            >
                fetch
            </button>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}
