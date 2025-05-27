import React, { useEffect, useState } from "react";
import WatchlistService from "../services/watchlist.service";
import { toast } from "react-toastify";
import RatingService from "../services/rating.service";

export default function WatchlistPage() {
    const [watchlist, setWatchlist] = useState([]);

    const fetchWatchlist = async () => {
        try {
            const res = await WatchlistService.getMyWatchlist();
            setWatchlist(res.data);
        } catch (err) {
            toast.error("Fehler beim Laden der Watchlist ❌");
            console.error(err);
        }
    };

    const removeMovie = async (movieId) => {
        try {
            await WatchlistService.removeFromWatchlist(movieId);
            toast.success("Film entfernt ✅");
            fetchWatchlist();
        } catch (err) {
            toast.error("Fehler beim Entfernen ❌");
            console.error(err);
        }
    };

    useEffect(() => {
        fetchWatchlist();
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-6">🎞️ Meine Watchlist</h1>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {watchlist.map(({ movie, rating }) => (
                    <div key={movie.id} className="bg-gray-800 p-4 rounded shadow">
                        {movie.poster_path && (
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="rounded mb-2 h-72 w-full object-cover"
                            />
                        )}
                        <h2 className="text-xl font-bold text-white">{movie.title}</h2>
                        <p className="text-sm text-gray-400">{movie.release_date}</p>
                        <p className="text-sm mt-2 text-gray-300">{movie.overview}</p>

                        {rating && (
                            <div className="mt-4 bg-gray-700 p-3 rounded">
                                <p className="text-yellow-400 font-semibold">⭐ {rating.score}/5</p>
                                {rating.comment && <p className="mt-1 text-gray-200">{rating.comment}</p>}
                            </div>
                        )}

                        <button
                            onClick={() => removeMovie(movie.id)}
                            className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
                        >
                            Entfernen ❌
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
