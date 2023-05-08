import React, { useEffect } from "react";
import GalaxyBackground from "../components/GalaxyBackground";
import ShareButtons from "../components/ShareButtons";
import { useDispatch, useSelector } from "react-redux";
import getTopNFTs from "../actions/nftsCreators";
import { fetchUser } from "../actions/usersCreators";

export default function Home() {
    const dispatch = useDispatch();
    const topNFTs = useSelector(state => state.nfts);
    const profile = useSelector(state => state.user);

    useEffect(() => {
        dispatch(getTopNFTs())
        console.log(localStorage.access_token);
        localStorage.access_token ? dispatch(fetchUser()) : null;
    }, [])

    return <>
        {
            !topNFTs ? null: console.log(topNFTs, '<-- topNFTs')
            // Buat cek apakah topNFTs dapet di fetch, uncomment kalo ngak mau keliatan di console
        }
        {
            !profile ? null: console.log(profile, '<-- profile')
            // Buat cek apakah profile dapet di fetch, uncomment kalo ngak mau keliatan di console
        }
        <GalaxyBackground>
            <ShareButtons title="Ini NFT 1" url="https://google.com/nft1" />
        </GalaxyBackground>
    </>;
}
