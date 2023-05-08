import { useState } from "react"
import { handleRegister } from "../helpers/userMethods";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [body, setBody] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    function handleSubmit(e) {
        e.preventDefault();

        // console.log(body);

        handleRegister(body)
        .then(() => navigate('/login'))
        .catch(error => console.log(error))

    }

    function handleTextChange(e) {
        switch (e.nativeEvent.target.id) {
            case "firstName":
                setBody({
                    ...body,
                    firstName: e.target.value
                })
                break;

            case "lastName":
                setBody({
                    ...body,
                    lastName: e.target.value
                })
                break;

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

            <label htmlFor="firstName">
                <span>First Name </span>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    onChange={handleTextChange} />
            </label>

            <label htmlFor="lastName">
                <span>Last Name</span>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    onChange={handleTextChange} />
            </label>

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

            <button type="submit">Register</button>
        </form>
    </>
}
