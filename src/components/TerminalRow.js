
import './TerminalRow.scss';

function TerminalRow({index, word, handleWordClick}) {
  return (
    <div className="terminal-row">
      <code className='terminal-row-hex'>
        0x{((index * 12) + 0xF100).toString(16).toUpperCase()}
      </code>
      <code>{word.beforeWord}</code>
      <code className='terminal-row-word' onClick={() => handleWordClick(word.word)}>
        {word.word}
      </code>
      <code>{word.afterWord}</code>
    </div>
  );
}

export default TerminalRow;
