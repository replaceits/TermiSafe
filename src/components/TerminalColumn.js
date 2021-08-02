import React from 'react';



import TerminalRow from './TerminalRow';

class TerminalColumn extends React.Component {
  getRows() {
    return this.props.words.map((word, key) => (
      <TerminalRow
        word={word}
        handleWordClick={this.props.handleWordClick}
        index={key + (this.props.index * this.props.words.length)} 
        key={key}
      />
    ));
  }

  render() {
    const rows = this.getRows();

    return (
      <div className="terminal-column">
        {rows}
      </div>
    );
  }
}

export default TerminalColumn;
