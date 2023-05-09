import axios from 'axios';

export async function fetchProfile() {
    // console.log('run fetchProfile');

    const response =  await axios.get(`${import.meta.env.VITE_SERVER_URL}/users`, {
        headers: {
            access_token: localStorage.access_token
        }
    });

    console.log(response);
    return response.data;
}

export async function handleLogin(body) {
    const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/users/login`, body)
    console.log(response);
    return response.data;
}

export async function handleRegister(body) {
    return await axios.post(`${import.meta.env.VITE_SERVER_URL}/users/register`, body)
}

export async function handleQuotaReduce() {
    return await axios.patch(`${import.meta.env.VITE_SERVER_URL}/users/reduce`,{ }, {
        headers: {
            access_token: localStorage.access_token
        }
    })
}
