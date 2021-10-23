
import TerminalRow from './TerminalRow';

function TerminalColumn({words, handleWordClick, index}) {
  return (
    <div className="terminal-column">
      {words.map((word, key) => (
        <TerminalRow
          word={word}
          handleWordClick={handleWordClick}
          index={key + (index * words.length)} 
          key={key}
        />
      ))}
    </div>
  );
}

export default TerminalColumn;
