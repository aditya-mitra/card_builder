import axios from 'axios';

// "https://cardbuilderv1.herokuapp.com/"
const BASE_URL = "http://localhost:9000/";

export function getAll() {
    return axios.get(BASE_URL);
}

export async function postOne(inputs) {
    let err = null;
    const response = await axios({
        method: 'POST',
        url: BASE_URL + 'characters',
        data: inputs
    }).catch(e => err = e);

    const data = response.data;
    if (err || !response)
        return { status: 0, message: "Please check your network connectivity!" };
    else if ('code' in data && data.code === '23505')
        return { status: 0, message: "Buddy, that Character already exists!" };
    else if ('code' in data)
        return { status: 0, message: "Oops! Something went wrong while submitting your Character. Error Code : "+data.code };

    const character_id = data.character_id;
    return { status: 1, character_id, message: "Your character was saved!" };
}

export function getOne(id) {
    return axios.get(BASE_URL + id);
}

export async function updateOne(inputs, cid) {

    let err = null;
    console.log('before', inputs);
    //console.log('after', inputs);
    const response = await axios({
        method: 'PUT',
        url: BASE_URL + cid,
        data: inputs,
    })
        .catch(e => err = e);

    if (err || !response) {
        console.log(err, 'got this error');
        return { status: 0, message: "Please check your network connectivity!" };
    }
    const data = response.data;
    if ('code' in data)
        return { status: 0, message: "Oops! Something went wrong while submitting your Character. Error Code : " + data.code };

    console.log('we have the response as', response, 'and data as', data);
    return { status: 1, character: data[0] , message: "Your character was updated!" };
}

const obj = {
    "name": "vision",
    "shows": "avengers",
    "img": "https://i.insider.com/5ae205a2bd967119008b4592?width=1100&format=jpeg&auto=webp",
    "abilities": "mind stone, hero",
    "id": 11
};

//updateOne(obj, 11);