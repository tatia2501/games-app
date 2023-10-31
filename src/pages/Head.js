import React from 'react'
import {Link} from "react-router-dom";
const Head = () => {
    return (
        <>
            <h1>Games-app</h1>
            <br />
            <ul>
                <li>
                    <Link to="/hangman">Виселица</Link>
                </li>
            </ul>
        </>
    )
}

export default Head
