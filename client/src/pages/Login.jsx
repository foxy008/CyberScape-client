import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../actions/usersCreators";
import { handleLogin, handleRegister } from "../helpers/userMethods";


export default function Login() {
    const dispatch = useDispatch();
    const [isLoginForm, setIsLoginForm] = useState(true);

    const [body, setBody] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    });

    function handleSubmit(e) {
        e.preventDefault();

        console.log(body);
        if (isLoginForm) {
            handleLogin(body)
            .then(response => localStorage.setItem('access_token', response.access_token))
            .then(() => dispatch(fetchUser()))
            .catch(error => console.log(error))
        } else {
            handleRegister(body)
            .then(() => setIsLoginForm(true))
            .catch(error => console.log(error))
        }
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

    function handleFormChange() {
        if (isLoginForm) {
            setIsLoginForm(false)
        } else {
            setIsLoginForm(true)
        }
    }

    if (isLoginForm) return <>
        <input type="checkbox" id="login-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Login to get full access to our NFT world!</h3>
                <form
                    action=""
                    onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        <span>Email</span>
                        <br></br>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={handleTextChange} />
                    </label>
                    <br></br>
                    <label htmlFor="password">
                        <span>Password</span>
                        <br></br>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={handleTextChange} />
                    </label>
                    <p>Don't have an account?</p>
                    <a href="#" onClick={handleFormChange}>
                        Register Here!
                    </a>


                <div className="modal-action">
                    <button type="submit">
                        <label htmlFor="login-modal" className="btn">
                            login
                        </label>
                    </button>
                </div>
                </form>
            </div>
        </div>
    </>

    return <>
    <input type="checkbox" id="login-modal" className="modal-toggle" />
    <div className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Register to get full access to our NFT world!</h3>
            <form
                action=""
                onSubmit={handleSubmit}>
                <label htmlFor="email">
                    <span>Email</span>
                    <br></br>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleTextChange} />
                </label>
                <br></br>
                <label htmlFor="password">
                    <span>Password</span>
                    <br></br>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleTextChange} />
                </label>
                <br></br>
                <label htmlFor="text">
                    <span>First Name</span>
                    <br></br>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        onChange={handleTextChange} />
                </label>
                <br></br>
                <label htmlFor="text">
                    <span>Last Name</span>
                    <br></br>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        onChange={handleTextChange} />
                </label>
                <br></br>
                <p>Already have an account?</p>
                <a
                    href="#"
                    onClick={handleFormChange}>
                    Login Here!
                </a>
            <div className="modal-action">
                <button
                    type="submit"
                    className="btn">
                        register
                </button>
            </div>
            </form>
        </div>
    </div>
    </>
}
