import axios from 'axios';

const BASE_URL = "https://cardbuilderv1.herokuapp.com/";

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
    console.log(id, 'is the value of id');
    return axios.get(BASE_URL + id);
}

export async function updateOne(inputs, cid) {
    let err = null;
    const response = await axios({
        method: 'PUT',
        url: BASE_URL + 'characters/' + cid,
        data: inputs
    }).catch(e => err = e);

    const data = response.data;
    if (err || !response)
        return { status: 0, message: "Please check your network connectivity!" };
    else if ('code' in data)
        return { status: 0, message: "Oops! Something went wrong while submitting your Character. Error Code : " + data.code };

    return { status: 1, character: data[0] ,message: "Your character was updated!" };
}
