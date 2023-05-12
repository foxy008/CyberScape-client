import axios from 'axios';

export default async function fetchTopNFTs(query) {
    // console.log(`${import.meta.env.VITE_SERVER_URL}/nfts`);
    // console.log(query, '<-- query di nftsMethods');
    try {
        const test =  await axios.get(`${import.meta.env.VITE_SERVER_URL}/nfts${ query ? '?top=true' : '' }`)

        // console.log(test, '<-- di nftsMethods');

        return test;
    } catch (error) {
        console.log(error);
    }
}
