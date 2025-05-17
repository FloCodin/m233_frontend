import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
            <div className="bg-gray-800 shadow-lg rounded-lg p-10 max-w-xl w-full text-center">
                <h1 className="text-4xl font-bold text-cyan-300 mb-4">
                    Willkommen 👋
                </h1>
                <p className="text-md text-gray-300 mb-6">
                    Du befindest dich auf der Startseite der <br />
                    <span className="font-semibold text-white">
            Multi-User Movie Watchlist App
          </span>
                </p>

                <div className="flex justify-center gap-6">
                    <Link
                        to="/login"
                        className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded transition"
                    >
                        🔐 Login
                    </Link>
                    <Link
                        to="/movies"
                        className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded transition"
                    >
                        🎬 Filme ansehen
                    </Link>
                </div>
            </div>
        </div>
    );
}
