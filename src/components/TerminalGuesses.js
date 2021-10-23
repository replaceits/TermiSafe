
import TerminalGuess from './TerminalGuess';

import './TerminalGuesses.scss';

function TerminalGuesses({guesses}) {
  return (
    <div className="terminal-guesses">
      {guesses.map((guess, key) => 
        <TerminalGuess guess={guess.guess} lettersCorrect={guess.lettersCorrect} key={key} />
      )}
    </div>
  );
}

export default TerminalGuesses;
