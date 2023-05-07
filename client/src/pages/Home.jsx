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
        localStorage.access_token ? dispatch(fetchUser()) : null;
    }, [])

    return <>
        { !topNFTs ? null: console.log({ topNFTs, profile })}
        <GalaxyBackground>
            <ShareButtons title="Ini NFT 1" url="https://google.com/nft1" />
        </GalaxyBackground>
    </>;
}
