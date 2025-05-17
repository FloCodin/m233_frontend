import axios from "axios";

const API_URL = "http://localhost:8080/api/movies";

const getTokenHeader = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return {
        headers: { Authorization: `Bearer ${user?.token}` },
    };
};

const getAllMovies = () => {
    return axios.get(API_URL, getTokenHeader());
};

const MovieService = {
    getAllMovies,
};

export default MovieService;
