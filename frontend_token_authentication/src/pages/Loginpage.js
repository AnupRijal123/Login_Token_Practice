import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Loginpage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [token, setToken] = useState('');
    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    // console.log(errors);


    const makeLogin = async function () {

        setErrors({});
        setSuccessMessage('');
        setErrorMessage('');
        setToken('');
        //clearing every state when login button is clicked
        //so that previous value of states are not stored

        await axios.post('http://127.0.0.1:8000/api/login', {
            email: email,
            password: password
        }).then((response) => {
            setSuccessMessage(response.data.message);
            setToken(response.data.token);
            console.log(response.data.token);
            //storing token in localstorage
            localStorage.setItem('token', response.data.token);

        }).catch((error) => {

            setErrorMessage(error.response.data.message);
            if (error.response.data.errors) {
                setErrors(error.response.data.errors)
            }

        })
    }
    return (
        <div className="form-container">
            <h3 className="form-heading">Login</h3>
            <div className="form-content">
                <small className="success-text">{successMessage}</small>
                <small className="error-text">{errorMessage}</small>
                <h2>{token}</h2>
                <div className="form-row">
                    <h4>email</h4>
                    <input type="text"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }}
                    />
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
                        onClick={makeLogin}>login</button>
                </div>
                <div className="form-link-div">
                    <span>Don't have account?</span>
                    <Link to="/register">
                        <span>Register</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Loginpage;