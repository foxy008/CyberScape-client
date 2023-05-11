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

        console.log(body);
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
            <div className="modal-box relative max-w-none w-3/5 flex flex-col space-y-5 bg-neutral">
                <label htmlFor="login-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="font-bold text-lg text-neutral-content self-center">Login to get full access to our NFT world!</h3>
                <form
                    className="flex flex-col space-y-5"
                    action=""
                    onSubmit={handleSubmit}>
                    <div className="flex flex-row space-x-5">
                        <div className="form-control w-1/2">
                            <label className="input-group flex">
                                <span className="w-1/3 bg-neutral-focus text-neutral-content">Email</span>
                                <input
                                    type="email"
                                    placeholder="Input your email here..."
                                    className="input input-bordered w-2/3 bg-secondary text-secondary-content placeholder-secondary-content"
                                    name="email"
                                    id="email"
                                    value={ body.email }
                                    onChange={handleTextChange} />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="input-group flex">
                                <span className="w-1/3 bg-neutral-focus text-neutral-content">Password</span>
                                <input
                                    type="password"
                                    placeholder="Input your password here..."
                                    className="input input-bordered w-2/3 bg-secondary text-secondary-content placeholder-secondary-content"
                                    name="password"
                                    id="password"
                                    value={ body.password }
                                    onChange={handleTextChange} />
                            </label>
                        </div>
                    </div>
                    <p className="text-neutral-content self-center">Don't have an account?&nbsp;
                        <a
                        className="font-bold"
                        href="#"
                        onClick={handleFormChange}>
                         Register Here!
                        </a>
                    </p>



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
        <div className="modal-box relative max-w-none w-3/5 flex flex-col space-y-5 bg-neutral">
            <label htmlFor="login-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="font-bold text-lg text-neutral-content self-center">Register to get full access to our NFT world!</h3>
            <form
                action=""
                className="flex flex-col space-y-5"
                onSubmit={handleSubmit}>
                <div className="flex flex-row space-x-5">
                        <div className="form-control w-1/2">
                            <label className="input-group flex">
                                <span className="w-1/3 bg-neutral-focus text-neutral-content">First Name</span>
                                <input
                                    type="text"
                                    placeholder="Input your first name here..."
                                    className="input input-bordered w-2/3 bg-secondary text-secondary-content placeholder-secondary-content"
                                    name="firstName"
                                    id="firstName"
                                    value={ body.firstName }
                                    onChange={handleTextChange} />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="input-group flex">
                                <span className="w-1/3 bg-neutral-focus text-neutral-content">Last Name</span>
                                <input
                                    type="text"
                                    placeholder="Input your last name here..."
                                    className="input input-bordered w-2/3 bg-secondary text-secondary-content placeholder-secondary-content"
                                    name="lastName"
                                    id="lastName"
                                    value={ body.lastName }
                                    onChange={handleTextChange} />
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-5">
                        <div className="form-control w-1/2">
                            <label className="input-group flex">
                                <span className="w-1/3 bg-neutral-focus text-neutral-content">Email</span>
                                <input
                                    type="email"
                                    placeholder="Input your email here..."
                                    className="input input-bordered w-2/3 bg-secondary text-secondary-content placeholder-secondary-content"
                                    name="email"
                                    id="email"
                                    value={ body.email }
                                    onChange={handleTextChange} />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="input-group flex">
                                <span className="w-1/3 bg-neutral-focus text-neutral-content">Password</span>
                                <input
                                    type="password"
                                    placeholder="Input your password here..."
                                    className="input input-bordered w-2/3 bg-secondary text-secondary-content placeholder-secondary-content"
                                    name="password"
                                    id="password"
                                    value={ body.password }
                                    onChange={handleTextChange} />
                            </label>
                        </div>
                    </div>
                <p className="text-neutral-content self-center">Already have an account?&nbsp;
                    <a
                        className="font-bold"
                        href="#"
                        onClick={handleFormChange}>
                        Login Here!
                    </a>
                </p>

            <div className="modal-action">
                <button
                    type="submit text-bold" className="btn">
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
