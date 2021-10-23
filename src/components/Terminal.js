
import React from 'react';
import TerminalColumn from './TerminalColumn';
import TerminalGuesses from './TerminalGuesses';

import './Terminal.scss';
import TerminalHeader from './TerminalHeader';

function Terminal({words, tries, unlocked, handleWordClick, guesses, handleTryAgainClick}) {
  const wordsHalfwayPoint = Math.floor(words.length / 2);
  const firstWords = words.slice(0, wordsHalfwayPoint);
  const secondWords =  words.slice(wordsHalfwayPoint);
  const locked = tries === 0;
  
  return (
    <div className="terminal">
      <TerminalHeader locked={locked} unlocked={unlocked} tries={tries} />
      <div className='terminal-column-container'>
        <TerminalColumn 
          words={firstWords}
          handleWordClick={handleWordClick}
          index={1}
        />
        <TerminalColumn 
          words={secondWords}
          handleWordClick={handleWordClick}
          index={2}
        />
        <TerminalGuesses 
          guesses={guesses}
        />
      </div>
      <code
        className={locked || unlocked ? 'try-again' : 'try-again invisible'}
        onClick={handleTryAgainClick}
      >
        TRY AGAIN
      </code>
    </div>
  );
}

export default Terminal;
