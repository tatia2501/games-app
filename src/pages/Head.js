import React from 'react'
import {Link} from "react-router-dom";
const Head = () => {
    return (
        <>
            <h1>Games-app</h1>
            <br />
            <ul id="navbar">
                <li className="navbar-link">
                    <Link to="/hangman" className="navbar-text">Виселица</Link>
                </li>
                <li className="navbar-link">
                    <Link to="/tic_tac_toe" className="navbar-text">Крестики-нолики вдвоем</Link>
                </li>
            </ul>
        </>
    )
}

export default Head
