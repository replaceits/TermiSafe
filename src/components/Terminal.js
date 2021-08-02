
import React from 'react';
import TerminalColumn from './TerminalColumn';
import TerminalGuesses from './TerminalGuesses';

import './Terminal.scss';

class Terminal extends React.Component {
  render() {
    const wordsHalfwayPoint = Math.floor(this.props.words.length / 2);
    const firstWords = this.props.words.slice(0, wordsHalfwayPoint);
    const secondWords =  this.props.words.slice(wordsHalfwayPoint);
    const locked = this.props.tries === 0;
    
    return (
      <div className="terminal">
        <code className='terminal-attempts'>
          ATTEMPTS REMAINING:&nbsp;
          <span className={locked && !this.props.unlocked ? 'blink' : ''}>{this.props.tries}</span>
        </code>
        <code className={locked || this.props.unlocked ? 'terminal-lockout' : 'terminal-lockout invisible'}>
          {this.props.unlocked ? 'UNLOCKED' : 'LOCKED OUT'}
        </code>
        <div className='terminal-column-container'>
          <TerminalColumn 
            words={firstWords}
            handleWordClick={this.props.handleWordClick}
            index={1}
          />
          <TerminalColumn 
            words={secondWords}
            handleWordClick={this.props.handleWordClick}
            index={2}
          />
          <TerminalGuesses 
            guesses={this.props.guesses}
          />
        </div>
        <code
          className={locked || this.props.unlocked ? 'try-again' : 'try-again invisible'}
          onClick={this.props.handleTryAgainClick}
        >
          TRY AGAIN
        </code>
      </div>
    )
  }
}

export default Terminal;
