
import React from 'react';
import Terminal from './Terminal';
import wordlists from '../helpers/wordlists';
import settings from '../helpers/settings';

import './Game.scss';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {...this.getNewGameState()};
  }

  getNewGameState() {
    const words = wordlists.generateWords();

    return {
      tries: settings.TRIES,
      words,
      password: words[Math.floor(Math.random() * words.length)].word,
      guesses: [],
      unlocked: false,
    };
  }

  guessPassword(guess) {
    let lettersCorrect = 0;

    for (let i = 0; i < settings.WORD_LENGTH; i++) {
      if (this.state.password[i] === guess[i]) lettersCorrect++;
    }

    const guesses = [...this.state.guesses, {guess, lettersCorrect}];

    this.setState({
      guesses
    })

    return lettersCorrect;
  }

  decreaseTries() {
    const tries = this.state.tries - 1;

    this.setState({
      tries,
    });
  }

  handleWordClick(guess) {
    if (this.state.unlocked) return;
    if (this.state.tries === 0) return;

    const lettersCorrect = this.guessPassword(guess);

    if (lettersCorrect === settings.WORD_LENGTH) {
      this.setState({
        unlocked: true,
      });
    }

    this.decreaseTries();
  }

  handleTryAgainClick() {
    this.setState(this.getNewGameState());
  }

  render() {
    const current = {...this.state};

    return (
      <div className="game">
        <Terminal 
          tries={current.tries}
          words={current.words}
          guesses={current.guesses}
          unlocked={current.unlocked}
          handleWordClick={guess => this.handleWordClick(guess)}
          handleTryAgainClick={() => this.handleTryAgainClick()}
        />
      </div>
    );
  }
}

export default Game;
