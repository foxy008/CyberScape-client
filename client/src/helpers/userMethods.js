import axios from 'axios';

export default async function fetchProfile() {
    return await axios({
        method: 'GET',
        URL :`${import.meta.env.VITE_SERVER_URL}/users`,
        headers: {
            access_token: localStorage.access_token
        }
    })
}
