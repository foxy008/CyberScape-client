import axios from 'axios';

export async function fetchRooms(query) {
    // console.log(`${import.meta.env.VITE_SERVER_URL}/rooms${ query ? '?recent=true' : null }`, '<-- di roomMethods');
    return await axios.get(`${import.meta.env.VITE_SERVER_URL}/rooms${ query ? '?recent=true' : '' }`)
}

export async function fetchRoomById(id) {
    return await axios({
        method: 'GET',
        URL :`${import.meta.env.VITE_SERVER_URL}/rooms/${id}`
    })
}

// URL diganti sesuain dengan ENV
