import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Hangman from "./pages/hangman"
import Home from "./pages/home"
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
                  path="*"
                  element={<Navigate to="/" />}
              />

          </Routes>
        </Router>
      </>
  );
}

export default App;
