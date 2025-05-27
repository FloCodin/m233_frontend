// rating.service.js
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/ratings/";

const getMyRatings = () => {
    return axios.get(API_URL + "me", {
        headers: authHeader(),
    });
};

export const createRating = (data) => {
    return axios.post("/api/ratings", data, {
        headers: authHeader()
    });
};

const submitRating = (movieId, score, comment) => {
    return axios.post(
        API_URL,
        {
            movie: { id: movieId },
            score,
            comment,
        },
        { headers: authHeader() }
    );
};

const updateRating = (movieId, score, comment) => {
    return axios.put(
        API_URL + movieId,
        { score, comment },
        { headers: authHeader() }
    );
};

const deleteRating = (movieId) => {
    return axios.delete(API_URL + movieId, {
        headers: authHeader(),
    });
};

const RatingService = {
    getMyRatings,
    submitRating,
    updateRating,
    deleteRating,
};

export default RatingService;
