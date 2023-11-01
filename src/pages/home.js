import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div id="homepage">
            <h1>Добро пожаловать</h1>
            <h2>Во что хотите сыграть?</h2>
            <br />
            <ul id="homepage-games">
                <li className="homepage-game-container">
                    <Link to="/hangman" className="homepage-game-text">Виселица</Link>
                </li>
                <li className="homepage-game-container">
                    <Link to="/tic_tac_toe" className="homepage-game-text">Крестики-нолики вдвоем</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;