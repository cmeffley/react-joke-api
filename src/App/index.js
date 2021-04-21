import React, { useState, useEffect } from 'react';
import './App.scss';
import getRandomJoke from '../helpers/data/jokeData';

function App() {
  const [allJokes, setAllJokes] = useState([]);
  const [singleJoke, setSingleJoke] = useState({});
  const [showSetup, setShowSetup] = useState(true);
  const [showPunchline, setShowPunchline] = useState(false);

  const handleClickPunchline = () => {
    if (showPunchline) {
      setShowPunchline(false);
      setSingleJoke(allJokes[Math.floor(Math.random() * allJokes.length)]);
    } else {
      setShowPunchline(true);
    }
  };
  const handleClickJokeAppear = () => {
    if (showSetup) {
      setShowSetup(false);
      setSingleJoke(allJokes[Math.floor(Math.random() * allJokes.length)]);
    }
  };

  useEffect(() => {
    getRandomJoke()
      .then((jokeResponse) => {
        setAllJokes(jokeResponse);
        setSingleJoke(jokeResponse[Math.floor(Math.random() * jokeResponse.length)]);
      });
  }, []);

  return (
    <div className='App'>
      {showSetup
        ? <button onClick={handleClickJokeAppear}>
        Get A Joke
        </button>
        : <h3>{singleJoke.setup}</h3>}
      <p>{showPunchline && singleJoke.punchline}</p>
      {showSetup ? ''
        : <button onClick={handleClickPunchline}>
        {showPunchline ? 'Get A New Joke' : 'Get Punchline'}
        </button>}
    </div>
  );
}

export default App;
