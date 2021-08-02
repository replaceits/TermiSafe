
import React from 'react';

import TerminalGuess from './TerminalGuess';

import './TerminalGuesses.scss';

class TerminalGuesses extends React.Component {
  getGuesses() {
    return this.props.guesses.map((guess, key) => 
      <TerminalGuess guess={guess.guess} lettersCorrect={guess.lettersCorrect} key={key} />
    );
  }

  render() {
    const guesses = this.getGuesses();

    return (
      <div className="terminal-guesses">
        {guesses}
      </div>
    );
  }
}

export default TerminalGuesses;
