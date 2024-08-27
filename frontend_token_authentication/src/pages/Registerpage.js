import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Registerpage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const makeRegistration = async function () {
        await axios.post('http://127.0.0.1:8000/api/create_user', {
            email: email,
            password: password
        }).then((response) => {
            console.log(response)
            setMessage(response.data.message);
        }).catch((error) => {
            console.log(error)
            setErrors(error.response.data.errors);
        })
    }

    return (
        <div className="form-container">
            <h3 className="form-heading">Register</h3>

            <div className="form-content">
                <small className="success-text">{message}</small>
                <div className="form-row">
                    <h4>email</h4>
                    <input type="text"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }} />
                    {
                        (Object.keys(errors).length !== 0 && errors.email) &&
                        <small className="error-text">{errors.email[0]}</small>
                    }
                </div>

                <div className="form-row">
                    <h4>password</h4>
                    <input type="text"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }} />
                    {
                        (Object.keys(errors).length !== 0 && errors.password) &&
                        <small className="error-text">{errors.password[0]}</small>
                    }
                </div>
                <div className="form-button-div">
                    <button className="primary-button"
                        onClick={makeRegistration}
                    >Register
                    </button>
                </div>

                <div className="form-link-div">
                    <span>Already have account?</span>
                    <Link to="/">
                        <span>login</span>
                    </Link>
                </div>



            </div>
        </div>
    )
}
export default Registerpage;