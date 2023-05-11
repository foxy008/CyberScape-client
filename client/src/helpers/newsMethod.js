import axios from "axios"

export async function fetchNews() {
    return await axios.get(`${import.meta.env.VITE_SERVER_URL}/nft-news`)
}