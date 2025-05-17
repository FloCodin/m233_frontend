import React, { useState } from 'react';
import AuthService from "../services/auth.service.js";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [entries, setEntries] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const store = (e) => {
        setEntries({ ...entries, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await AuthService.login(entries.username, entries.password);
            toast.success("✅ Successfully logged in!", {
                position: "top-right",
                autoClose: 3000,
            });
            navigate("/"); // oder z. B. "/movies"
            console.log(res);
        } catch (error) {
            toast.error("❌ Login fehlgeschlagen");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                <label htmlFor="username" className="block mb-2">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={entries.username}
                    onChange={store}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                />

                <label htmlFor="password" className="block mb-2">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={entries.password}
                    onChange={store}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;