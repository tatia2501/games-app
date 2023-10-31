import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Добро пожаловать</h1>
            <h2>Во что хотите сыграть?</h2>
            <br />
            <ul>
                <li>
                    <Link to="/hangman">Виселица</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;