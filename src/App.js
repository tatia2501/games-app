import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Hangman from './pages/hangman'
import Home from './pages/home'
import TicTacToe from './pages/tic_tac_toe'
function App() {
  return (
      <>
        <Router>
          <Routes>
              <Route
                  exact
                  path="/"
                  element={<Home />}
              />
            <Route
                exact
                path="/hangman"
                element={<Hangman />}
            />
              <Route
                  exact
                  path="/tic_tac_toe"
                  element={<TicTacToe />}
              />
              <Route
                  path="*"
                  element={<Navigate to="/" />}
              />

          </Routes>
        </Router>
      </>
  );
}

export default App;
