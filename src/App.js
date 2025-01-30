import React from 'react';
import Joke from './Joke';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <h1>Random Joke Generator</h1>
            <Joke />
        </div>
    );
}

export default App;