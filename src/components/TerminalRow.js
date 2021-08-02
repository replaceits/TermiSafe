
import React from 'react';

import './TerminalRow.scss';

class TerminalRow extends React.Component {
  render() {
    return (
      <div className="terminal-row">
        <code className='terminal-row-hex'>
          0x{((this.props.index * 12) + 0xF100).toString(16).toUpperCase()}
        </code>
        <code>{this.props.word.beforeWord}</code>
        <code className='terminal-row-word' onClick={() => this.props.handleWordClick(this.props.word.word)}>
          {this.props.word.word}
        </code>
        <code>{this.props.word.afterWord}</code>
      </div>
    );
  }
}

export default TerminalRow;
