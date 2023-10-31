import React, { useEffect, useState } from 'react';
import Header from '../hangman/Header';
import Figure from '../hangman/Figure';
import WrongLetters from '../hangman/WrongLetters';
import Word from '../hangman/Word';
import Popup from '../hangman/Popup';
import Notification from '../hangman/Notification';
import { showNotification as show } from '../hangman/helpers';
import Head from "./Head";
import '../App.css';

const words = ['слово', 'программирование', 'теща', 'виселица', 'кант', 'хроника', 'зал', 'галера', 'балл', 'вес', 'кафель', 'знак',
    'фильтр', 'башня', 'кондитер', 'омар', 'чан', 'пламя', 'банк', 'тетерев', 'муж', 'камбала', 'груз', 'кино', 'лаваш', 'калач',
    'геолог', 'бальзам', 'бревно', 'жердь', 'борец', 'самовар', 'карабин', 'подлокотник'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const Hangman = () =>  {
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        const handleKeydown = event => {
            const { key, keyCode } = event;
            if (playable && keyCode >= 33 && keyCode <= 255) {
                const letter = key.toLowerCase();
                if (selectedWord.includes(letter)) {
                    if (!correctLetters.includes(letter)) {
                        setCorrectLetters(currentLetters => [...currentLetters, letter]);
                    } else {
                        show(setShowNotification);
                    }
                } else {
                    if (!wrongLetters.includes(letter)) {
                        setWrongLetters(currentLetters => [...currentLetters, letter]);
                    } else {
                        show(setShowNotification);
                    }
                }
            }
        }
        window.addEventListener('keydown', handleKeydown);

        return () => window.removeEventListener('keydown', handleKeydown);
    }, [correctLetters, wrongLetters, playable]);

    function playAgain() {
        setPlayable(true);

        // Empty Arrays
        setCorrectLetters([]);
        setWrongLetters([]);

        const random = Math.floor(Math.random() * words.length);
        selectedWord = words[random];
    }

    return (
        <>
            <Head />
            <Header />
            <div className="game-container">
                <Figure wrongLetters={wrongLetters} />
                <WrongLetters wrongLetters={wrongLetters} />
                <Word selectedWord={selectedWord} correctLetters={correctLetters} />
            </div>
            <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
            <Notification showNotification={showNotification} />
        </>
    );
}

export default Hangman;