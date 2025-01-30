import React, { useState, useEffect } from 'react';
import Button from './Button';
import './Joke.css';

function Joke() {
    const [joke, setJoke] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [jokeHistory, setJokeHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);

    const fetchJoke = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
            const data = await response.json();
            const newJoke = `${data.setup} - ${data.punchline}`;
            setJoke(newJoke);
            setJokeHistory(prevHistory => [newJoke, ...prevHistory]);
        } catch (error) {
            setJoke('Oops! Failed to fetch a joke.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div className="joke-container">
            <p className="joke-text">{isLoading ? 'Loading...' : joke}</p>
            <Button onClick={fetchJoke} text="Get Another Joke" />
            <Button onClick={() => setShowHistory(!showHistory)} text={showHistory ? "Hide History" : "Show History"} />
            {showHistory && (
                <div className="history-container">
                    <h2>Joke History</h2>
                    <ul>
                        {jokeHistory.map((item, index) => (
                            <li key={index} className="history-item">{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Joke;