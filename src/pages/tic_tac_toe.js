import Board from '../tic_tac_toe/Board';
import Info from "../tic_tac_toe/Info";
import '../styles/tic_tac_toe.css';
import React, { useState } from 'react';
import Head from "./Head";
const TicTacToe = () =>  {
    const [reset, setReset] = useState(false);

    const [winner, setWinner] = useState('');

    const resetBoard = () => {
        setReset(true);
    }

    return (
        <div className="App">
            <Head />
            <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
                <div className='winner-text'>{winner}</div>
                <button onClick={() => resetBoard()}>
                    Начать сначала
                </button>
            </div>
            <Board reset={reset} setReset={setReset} winner={winner}
                   setWinner={setWinner} />
            <Info />
        </div>
    );
}
export default TicTacToe;