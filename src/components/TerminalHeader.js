
import React from 'react';

import './TerminalHeader.scss';

class TerminalHeader extends React.Component {
  render() {
    return (
      <div className="terminal-header">
        <code className='terminal-attempts'>
            ATTEMPTS REMAINING:&nbsp;
            <span className={this.props.locked && !this.props.unlocked ? 'blink' : ''}>{this.props.tries}</span>
        </code>
        <code className={this.props.locked || this.props.unlocked ? 'terminal-lockout' : 'terminal-lockout invisible'}>
          {this.props.unlocked ? 'UNLOCKED' : 'LOCKED OUT'}
        </code>
      </div>
    );
  }
}

export default TerminalHeader;
