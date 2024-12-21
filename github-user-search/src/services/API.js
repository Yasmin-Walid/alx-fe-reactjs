const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY;
const GITHUB_API_URL = "https://api.github.com";
import axios from 'axios';

const API_URL = import.meta.env.VITE_GITHUB_API_URL;

export const fetchUser = (username) => {
    return axios.get(`${API_URL}/users/${username}`);
};