import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../actions/usersCreators";
import { redirect } from "react-router-dom";
import GalaxyBackground from "../components/GalaxyBackground";
import FavoriteList from '../components/FavoriteList'

export default function Profile() {
    const profile = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!localStorage.access_token) {
            redirect('/login');
        } else {
            dispatch(fetchUser())
        }
    }, []);

    return <>
        { console.log(profile) }
        <GalaxyBackground>
            <div className="flex ml-[150px] mt-20">
                <img className="h-[80px] w-[80px] rounded-full" src="https://itp.live/cloud/2021/12/14/SH2a0coo-nftmonkey_2.png" alt="" />
                <div className="flex flex-col text-cyan-100 self-center ml-4">
                    <p className="text-2xl">
                        John Doe
                    </p>
                    <p>rehan@kurangbaiq.com</p>
                    <p>Quota : 99</p>
                </div>
            </div>
            <FavoriteList />
        </GalaxyBackground>
    </>
}
