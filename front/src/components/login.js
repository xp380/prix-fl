import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from '../utils/common';

function Login(props) {
    const [loading, setLoading] = useState(false);
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);

    // handle button click of login form
    const handleLogin = (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        axios
            .post(`http://localhost:4000/users/signin`, {
                username: username.value,
                password: password.value,
            })
            .then((response) => {
                setLoading(false);
                setUserSession(response.data.token, response.data.user);
                props.history.push('/');
            })
            .catch((error) => {
                setLoading(false);
                if (error.response.status === 401)
                    setError(error.response.data.message);
                else setError('Something went wrong. Please try again later.');
            });
    };

    return (
        <div>
            <form
                onSubmit={handleLogin}
                style={{
                    padding: '1em',
                    border: '2px solid blue',
                    marginTop: '2rem',
                    width: '250px',
                    height: '250px',
                }}
            >
                Login
                <br />
                <br />
                <div>
                    Username
                    <br />
                    <input
                        type="text"
                        {...username}
                        autoComplete="new-password"
                    />
                </div>
                <div style={{ marginTop: 10 }}>
                    Password
                    <br />
                    <input
                        type="password"
                        {...password}
                        autoComplete="new-password"
                    />
                </div>
                {error && (
                    <>
                        <small style={{ color: 'red' }}>{error}</small>
                        <br />
                    </>
                )}
                <br />
                <input
                    type="submit"
                    value={loading ? 'Loading...' : 'Login'}
                    disabled={loading}
                />
                <br />
            </form>
        </div>
    );
}

const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return {
        value,
        onChange: handleChange,
    };
};

export default Login;
