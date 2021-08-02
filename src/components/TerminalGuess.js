
import React from 'react';

import settings from '../helpers/settings';

import './TerminalGuess.scss';

class TerminalGuess extends React.Component {
  render() {
    return (
      <div className="terminal-guess">
        <code>&#62;{this.props.guess}</code>
        <code>&#62;{this.props.lettersCorrect}/{settings.WORD_LENGTH}&nbsp;CORRECT</code>
        {this.props.lettersCorrect === settings.WORD_LENGTH && <code>&#62;TERMINAL UNLOCKED</code>}
      </div>
    );
  }
}

export default TerminalGuess;
