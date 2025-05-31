import React, { useState } from "react";
import AuthService from "../services/auth.service";
import { toast } from "react-toastify";
import RatingForm from "./RatingForm";
import WatchlistService from "../services/watchlist.service.js";

export default function MovieCard({ movie }) {
    const user = AuthService.getCurrentUser();
    const [showRatingForm, setShowRatingForm] = useState(false);

    const handleWatchlistClick = async () => {
        try {
            await WatchlistService.addToWatchlist(movie.id);
            toast.success("Zur Watchlist hinzugefügt! ⚡");
        } catch (err) {
            console.error("Fehler beim Hinzufügen zur Watchlist:", err);
            toast.error("Fehler beim Hinzufügen zur Watchlist ❌");
        }
    };


    const handleReviewClick = () => {
        toast.info("Rezensionsformular öffnet sich...");
        setShowRatingForm(true);
    };

    return (
        <div className="bg-gray-800 p-4 rounded shadow relative">
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

            {user && (
                <>
                    <div className="flex gap-4 mt-4">
                        <button
                            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded"
                            onClick={handleWatchlistClick}
                        >
                            ⚡ Watchlist
                        </button>
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
                            onClick={handleReviewClick}
                        >
                            ✏️ Rezension
                        </button>
                    </div>

                    {showRatingForm && (
                        <RatingForm
                            movieId={movie.id}
                            onSuccess={() => {
                                toast.success("Danke für deine Bewertung! ⭐");
                                setShowRatingForm(false);
                            }}
                        />
                    )}
                </>
            )}
        </div>
    );
}
