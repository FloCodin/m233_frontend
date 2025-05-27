import { useState } from 'react';
import Rating from 'react-rating';
import { Star } from 'lucide-react';
import { toast } from 'react-toastify';
import { createRating } from '../services/rating.service'; // NEU!

export default function RatingForm({ movieId }) {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Verwende den Service
            await createRating({
                movieId,
                score: rating,
                comment,
            });

            toast.success('Bewertung gespeichert!');
            setComment('');
            setRating(0);
        } catch (err) {
            console.error('Fehler beim Speichern:', err);
            toast.error('Speichern fehlgeschlagen');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-2 mb-2">
                <label htmlFor="rating">Deine Bewertung:</label>
                <Rating
                    id="rating"
                    initialRating={rating}
                    onChange={(value) => setRating(value)}
                    emptySymbol={<Star size={24} className="text-gray-300" />}
                    fullSymbol={<Star size={24} className="text-yellow-500" />}
                />
            </div>

            <textarea
                placeholder="Kommentar (optional)"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full mt-3 p-2 rounded bg-gray-700 text-white"
                rows={3}
            />

            <button
                type="submit"
                className="mt-3 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded"
            >
                Speichern
            </button>
        </form>
    );
}
