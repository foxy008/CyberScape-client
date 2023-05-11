import React, { useEffect } from "react";
import GalaxyBackground from "../components/GalaxyBackground";
import ShareButtons from "../components/ShareButtons";
import Banner from '../components/Banner'
import HomeNews from '../components/HomeNews'
import CollectionList from '../components/CollectionList'
import RecentCollection from '../components/RecentCollection'
import { useDispatch, useSelector } from "react-redux";
import getTopNFTs from "../actions/nftsCreators";
import { fetchUser, fetchUserAfterQuotaAdd } from "../actions/usersCreators";
import { getAllRooms } from "../actions/roomsCreators";
import { redirect, useSearchParams } from "react-router-dom";
import { getNews } from "../actions/news";
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Home() {
    const dispatch = useDispatch();
    const topNFTs = useSelector(state => state.nfts);
    const profile = useSelector(state => state.user);
    const rooms = useSelector(state => state.rooms);
    const [searchParams, setSearchParams] = useSearchParams();
    const MySwal = withReactContent(Swal);

    useEffect(() => {
        const verify = searchParams.get('verify');
        const status_code = searchParams.get('status_code');
        const order_id = searchParams.get('order_id')

        dispatch(getNews());

        if (verify) {
            // console.log(verify, localStorage.access_token, '<--- verif & access token');
            // redirect('https://reddit.com')
            // redirect(`${import.meta.env.VITE_SERVER_URL}/users/ver?verify=${verify}`)
            axios.patch(`${import.meta.env.VITE_SERVER_URL}/users?verify=${verify}`, null, {
                headers: {
                    access_token: localStorage.access_token
                }
            })
            .then(response => {
                MySwal.fire({
                    title: response.data.message,
                    icon: 'success',
                    background: '#191c29',
                    color: '#ef9afa',
                    confirmButtonColor: 'rgb(132 204 22)'
                })
                history.pushState(null, "", location.href.split("?")[0])
            })
            .catch(error => {
                MySwal.fire({
                    title: error.response.data.message,
                    icon: 'error',
                    background: '#191c29',
                    color: '#ef9afa',
                    confirmButtonColor: 'rgb(239 68 68)'
                })
                history.pushState(null, "", location.href.split("?")[0])
            })
        }

        if (order_id && status_code) {
            dispatch(fetchUserAfterQuotaAdd(order_id, status_code));
            history.pushState(null, "", location.href.split("?")[0]);
        }

        dispatch(getTopNFTs(true));
        dispatch(getAllRooms(true));
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
            <HomeNews />
        </GalaxyBackground>
    </>;
}
