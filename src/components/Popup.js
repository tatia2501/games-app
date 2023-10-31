import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = 'Поздравляю! Вы победили! 😃';
    playable = false;
  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'К сожалению, вы проиграли 😕';
    finalMessageRevealWord = `слово было: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Играть снова</button>
      </div>
    </div>
  )
}

export default Popup
