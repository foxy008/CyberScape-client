import React, { useEffect } from "react";
import GalaxyBackground from "../components/GalaxyBackground";
import ShareButtons from "../components/ShareButtons";
import Banner from '../components/Banner'
import News from '../components/News'
import CollectionList from '../components/CollectionList'
import RecentCollection from '../components/RecentCollection'
import { useDispatch, useSelector } from "react-redux";
import getTopNFTs from "../actions/nftsCreators";
import { fetchUser, fetchUserAfterQuotaAdd } from "../actions/usersCreators";
import { getAllRooms } from "../actions/roomsCreators";
import { redirect, useSearchParams } from "react-router-dom";
import axios from 'axios';

export default function Home() {
    const dispatch = useDispatch();
    const topNFTs = useSelector(state => state.nfts);
    const profile = useSelector(state => state.user);
    const rooms = useSelector(state => state.rooms);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const verify = searchParams.get('verify');
        const status_code = searchParams.get('status_code');
        const order_id = searchParams.get('order_id')

        if (verify) {
            // console.log(verify, localStorage.access_token, '<--- verif & access token');
            // redirect('https://reddit.com')
            // redirect(`${import.meta.env.VITE_SERVER_URL}/users/ver?verify=${verify}`)
            axios.patch(`${import.meta.env.VITE_SERVER_URL}/users?verify=${verify}`, null, {
                headers: {
                    access_token: localStorage.access_token
                }
            })
            .then(response =>  history.pushState(null, "", location.href.split("?")[0]))
            .catch(error => history.pushState(null, "", location.href.split("?")[0]))
        }

        if (order_id && status_code) {
            dispatch(fetchUserAfterQuotaAdd(order_id, status_code));
            history.pushState(null, "", location.href.split("?")[0]);
        }

        dispatch(getTopNFTs());
        dispatch(getAllRooms());
        // console.log(localStorage.access_token);
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
        {
            !rooms ? null: console.log(rooms, '<-- rooms')
            // Buat cek apakah profile dapet di fetch, uncomment kalo ngak mau keliatan di console
        }
        <GalaxyBackground>
            <Banner />
            <CollectionList />
            <RecentCollection />
            <News />
            <ShareButtons title="Ini NFT 1" url="https://google.com/nft1" />
        </GalaxyBackground>
    </>;
}
