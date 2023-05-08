import axios from 'axios';

export default async function fetchTopNFTs() {
    console.log(`${import.meta.env.VITE_SERVER_URL}/nfts`);

    try {
        const test =  await axios.get(`${import.meta.env.VITE_SERVER_URL}/nfts`)

        // console.log(test);

        return test;
    } catch (error) {
        console.log(error);
    }
}
