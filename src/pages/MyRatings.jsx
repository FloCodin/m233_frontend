import React, { useEffect, useState } from "react";
import RatingService from "../services/rating.service";

export default function MyRatings() {
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        RatingService.getMyRatings()
            .then(res => setRatings(res.data))
            .catch(err => console.error("Fehler beim Laden der Bewertungen", err));
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-3xl font-bold mb-6">⭐ Meine Bewertungen</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ratings.map((rating) => (
                    <div key={rating.movie.id} className="bg-gray-800 p-4 rounded shadow">
                        <h2 className="text-xl font-semibold">{rating.movie.title}</h2>
                        <p className="text-yellow-300 font-bold">Bewertung: {rating.score} / 5</p>
                        <p className="text-sm italic text-gray-300 mt-1">{rating.comment || "Kein Kommentar"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
