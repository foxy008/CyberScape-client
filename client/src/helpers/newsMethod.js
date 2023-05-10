import axios from "axios"

export async function fetchNews() {
    return await axios.get(`http://localhost:3000/nft-news`)
}