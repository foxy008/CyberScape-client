import axios from 'axios';

export async function addRating(id, rating) {
    return await axios.post(`${import.meta.env.VITE_SERVER_URL}/ratings/${id}?value=${rating}`,
    {
        headers: {
            access_token: localStorage.access_token
        }
    })
}

export async function editRating(id, rating) {
    return await axios.patch(`${import.meta.env.VITE_SERVER_URL}/ratings/${id}?value=${rating}`, {}, {
        headers: {
            access_token: localStorage.access_token
        }
    })
}
