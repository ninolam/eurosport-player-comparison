import React from 'react';
import './App.css';
import PlayersView from './pages/PlayersView/PlayersView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Player from './pages/Player/Player';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";


if (window.__DEV__) {  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PlayersView />} />
          <Route path="/player/:id" element={<Player />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
