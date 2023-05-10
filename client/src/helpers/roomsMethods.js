import axios from 'axios';

export async function fetchRooms(query) {
    return await axios.get(`${import.meta.env.VITE_SERVER_URL}/rooms${ query ? '?recent=true' : null }`)
}

export async function fetchRoomById(id) {
    return await axios({
        method: 'GET',
        URL :`${import.meta.env.VITE_SERVER_URL}/rooms/${id}`
    })
}

// URL diganti sesuain dengan ENV
