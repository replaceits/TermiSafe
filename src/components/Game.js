
import React from 'react';
import Terminal from './Terminal';
import wordlists from '../helpers/wordlists';
import settings from '../helpers/settings';

import './Game.scss';

function getNewGameState() {
  const words = wordlists.generateWords();

  return {
    tries: settings.TRIES,
    words,
    password: words[Math.floor(Math.random() * words.length)].word,
    guesses: [],
    unlocked: false,
  };
}

function GameReducer(state, action) {
  if (action.type === 'guess') {
    let lettersCorrect = 0;

    for (let i = 0; i < settings.WORD_LENGTH; i++) {
      if (state.password[i] === action.guess[i]) lettersCorrect++;
    }

    let unlocked = state.unlocked;

    if (lettersCorrect === settings.WORD_LENGTH) {
      unlocked = true
    }

    return {
      ...state,
      unlocked,
      guesses: [
        ...state.guesses, 
        {guess: action.guess, lettersCorrect}
      ],
      tries: state.tries - 1
    }
  } else if (action.type === 'reset') {
    return getNewGameState()
  }

  throw new Error('Invalid action dispatched');
}

function Game() {
  const [state, dispatch] = React.useReducer(GameReducer, getNewGameState());

  const handleWordClick = guess => {
    if (state.unlocked) return;
    if (state.tries === 0) return;

    dispatch({ type: 'guess', guess });
  }

  const handleTryAgainClick = () => {
    dispatch({type: 'reset'});
  }


  return (
    <div className="game">
      <Terminal 
        tries={state.tries}
        words={state.words}
        guesses={state.guesses}
        unlocked={state.unlocked}
        handleWordClick={guess => handleWordClick(guess)}
        handleTryAgainClick={() => handleTryAgainClick()}
      />
    </div>
  );
}

export default Game;
