import axios from 'axios';

export async function fetchRooms() {
    return await axios.get(`${import.meta.env.VITE_SERVER_URL}/rooms`)
}

export async function fetchRoomById(id) {
    return await axios({
        method: 'GET',
        URL :`${import.meta.env.VITE_SERVER_URL}/rooms/${id}`
    })
}
