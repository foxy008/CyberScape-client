import axios from 'axios';

export async function addFavorite(id) {
    return await axios.post(`${import.meta.env.VITE_SERVER_URL}/favorites/${id}`, {}, {
        headers: {
            access_token: localStorage.access_token
        }
    })
}

export async function removeFavorite(id) {
    return await axios.delete(`${import.meta.env.VITE_SERVER_URL}/favorites/${id}`, {}, {
        headers: {
            access_token: localStorage.access_token
        }
    })
}
