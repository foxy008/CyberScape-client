import axios from 'axios';

export async function fetchRooms() {
    
    return await axios.get(`http://localhost:3000/rooms`)
}

export async function fetchRoomById(id) {
    return await axios({
        method: 'GET',
        URL :`http://localhost:3000/rooms/${id}`
    })
}
