// src/services/watchlist.service.js

import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/watchlist";

/**
 * Holt die Watchlist des aktuellen Benutzers
 */
const getMyWatchlist = () => {
    return axios.get(`${API_URL}/me`, {
        headers: authHeader(),
    });
};

/**
 * Fügt einen Film zur Watchlist hinzu
 * @param {number} movieId
 */
const addToWatchlist = (movieId) => {
    return axios.post(`${API_URL}/${movieId}`, null, {
        headers: authHeader(),
    });
};

/**
 * Entfernt einen Film aus der Watchlist
 * @param {number} movieId
 */
const removeFromWatchlist = (movieId) => {
    return axios.delete(`${API_URL}/${movieId}`, {
        headers: authHeader(),
    });
};

const WatchlistService = {
    getMyWatchlist,
    addToWatchlist,
    removeFromWatchlist,
};

export default WatchlistService;
