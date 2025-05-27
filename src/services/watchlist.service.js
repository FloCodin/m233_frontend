// src/services/watchlist.service.js
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/watchlist/";

const getMyWatchlist = () => {
    return axios.get(API_URL + "me", { headers: authHeader() });
};

const addToWatchlist = (movieId) => {
    return axios.post(API_URL + `?movieId=${movieId}`, {}, { headers: authHeader() });
};

const removeFromWatchlist = (movieId) => {
    return axios.delete(API_URL + movieId, { headers: authHeader() });
};

const WatchlistService = {
    getMyWatchlist,
    addToWatchlist,
    removeFromWatchlist,
};

export default WatchlistService;
