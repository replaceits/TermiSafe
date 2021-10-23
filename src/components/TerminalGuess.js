
import settings from '../helpers/settings';

import './TerminalGuess.scss';

function TerminalGuess({guess, lettersCorrect}) {
  return (
    <div className="terminal-guess">
      <code>&#62;{guess}</code>
      <code>&#62;{lettersCorrect}/{settings.WORD_LENGTH}&nbsp;CORRECT</code>
      {lettersCorrect === settings.WORD_LENGTH && <code>&#62;TERMINAL UNLOCKED</code>}
    </div>
  );
}

export default TerminalGuess;
