import { useState } from "react"
import { useDispatch } from "react-redux";
import { fetchUser } from "../actions/usersCreators";
import { handleLogin, handleRegister } from "../helpers/userMethods";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Login() {
    const dispatch = useDispatch();
    const [isLoginForm, setIsLoginForm] = useState(true);
    const MySwal = withReactContent(Swal);

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
            .catch(error => {
                // console.log();
                MySwal.fire({
                    text: error.response.data.message,
                    icon: 'error',
                    background: '#191c29',
                    color: '#ef9afa'
                })
            })
        } else {
            handleRegister(body)
            .then(() => setIsLoginForm(true))
            .then(() => MySwal.fire(`Verification email has been sent to ${body.email}`))
            .catch(error => {
                // console.log(error);
                MySwal.fire({
                    text: error.response.data.message,
                    icon: 'error',
                    background: '#191c29',
                    color: '#ef9afa'
                })
            })
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
        console.log(body);

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
                <label htmlFor="login-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
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
                    {

                    }
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
                    <button type="submit"  className="btn">
                        <label htmlFor="login-modal">
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
            <label htmlFor="login-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
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
                    type="submit" className="btn">
                        register
                        {/* <label  className="btn" >

                        </label> */}
                </button>
            </div>
            </form>
        </div>
    </div>
    </>
}
