import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthService from "../services/auth.service";

export default function UserRatings() {
    const [ratings, setRatings] = useState([]);
    const user = AuthService.getCurrentUser();

    useEffect(() => {
        if (user?.accessToken) {
            axios
                .get("http://localhost:8080/api/ratings/user", {
                    headers: {
                        Authorization: `Bearer ${user.accessToken}`,
                    },
                })
                .then((res) => setRatings(res.data))
                .catch((err) => console.error("Fehler beim Laden der Bewertungen", err));
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-6">🌟 Deine Bewertungen</h1>
            <div className="space-y-4">
                {ratings.length > 0 ? (
                    ratings.map((r) => (
                        <div key={r.movieId} className="bg-gray-800 p-4 rounded shadow">
                            <h2 className="text-xl font-bold">{r.movieTitle}</h2>
                            <p className="text-yellow-400">⭐ {r.score}/5</p>
                            <p className="italic text-gray-300 mt-1">{r.comment}</p>
                        </div>
                    ))
                ) : (
                    <p>💬 Du hast noch keine Filme bewertet.</p>
                )}
            </div>
        </div>
    );
}
