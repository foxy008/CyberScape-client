import axios from 'axios';

export async function addFavorite(id) {
    return await axios({
        method: 'POST',
        URL :`${import.meta.env.VITE_SERVER_URL}/favorite/${id}`,
        headers: {
            access_token: localStorage.access_token
        }
    })
}

export async function removeFavorite(id) {
    return await axios({
        method: 'DELETE',
        URL :`${import.meta.env.VITE_SERVER_URL}/favorite/${id}`,
        headers: {
            access_token: localStorage.access_token
        }
    })
}
