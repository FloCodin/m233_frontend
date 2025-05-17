import { Link } from 'react-router-dom';
import AuthService from "../services/auth.service.js";

export default function Navigation() {
    const user = AuthService.getCurrentUser();

    return (
        <nav className="bg-blue-800 text-white shadow-md">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">

                {/* Navigation links */}
                <div className="flex gap-6 items-center text-lg font-medium">
                    <Link className="hover:text-yellow-300 transition" to="/">Home</Link>
                    <Link className="hover:text-yellow-300 transition" to="/about">About</Link>
                    <Link className="hover:text-yellow-300 transition" to="/public">Public</Link>
                    {user && <Link className="hover:text-yellow-300 transition" to="/private">Private</Link>}
                    {user && <Link className="hover:text-yellow-300 transition" to="/movies">Movies</Link>}
                    {!user && <Link className="hover:text-yellow-300 transition" to="/login">Login</Link>}
                </div>

                {/* User info */}
                {user && (
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2 shadow">
                        <span className="text-white">✅</span>
                        <span>{user.username}</span>
                    </div>
                )}
            </div>
        </nav>
    );
}
