import { useState } from "react"
import { handleLogin } from "../helpers/userMethods";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const navigate = useNavigate();
    const [body, setBody] = useState({
        email: '',
        password: ''
    });

    function handleSubmit(e) {
        e.preventDefault();

        // console.log(body);

        handleLogin(body)
        .then(response => localStorage.setItem('access_token', response.access_token))
        .then(() => navigate('/'))
        .catch(error => console.log(error))
    }

    function handleTextChange(e) {
        switch (e.nativeEvent.target.id) {
            case "email":
                setBody({
                    ...body,
                    email: e.target.value
                })
                break;

            case "password":
                setBody({
                    ...body,
                    password: e.target.value
                })
                break;

            default:
                break;
        }
    }

    return <>
        <form
            action=""
            onSubmit={handleSubmit}>

            <label htmlFor="email">
                <span>Email</span>
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleTextChange} />
            </label>

            <label htmlFor="password">
                <span>Password</span>
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleTextChange} />
            </label>

            <button type="submit">Login</button>
        </form>
    </>
}
