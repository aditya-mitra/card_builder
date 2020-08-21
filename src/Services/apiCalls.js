import axios from 'axios';

const BASE_URL = "http://localhost:9000/";

export function getAll() {
    return axios.get(BASE_URL);
}

export function postOne(data) {
    return axios({
        method: 'POST',
        url: BASE_URL+'characters',
        data: data
    })
}

export function getOne(id) {
    console.log(id, 'is the value of id');
    return axios.get(BASE_URL + id);
}

async function test() {
    getOne(51)
        .then(resp => resp.data)
        .then(data => console.log(data))
        .catch(e=>console.log(e))
}
test();