import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../actions/usersCreators";
import { redirect } from "react-router-dom";

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
    </>
}
