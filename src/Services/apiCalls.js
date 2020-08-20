import axios from 'axios';

const BASE_URL = "http://localhost:9000/";

export function getAll() {
    return axios.get(BASE_URL);
}