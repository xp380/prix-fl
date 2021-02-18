import React from 'react'
import { removeUserSession } from '../utils/common';

export default function home(props) {

    const handleLogout = () => {
        removeUserSession();
        props.history.push('/login');
    }
    return (
        <>
            <input type="button" onClick={handleLogout} value="Logout" />
        </>
    )
}