
import './TerminalHeader.scss';

function TerminalHeader({locked, unlocked, tries}) {
  return (
    <div className="terminal-header">
      <code className='terminal-attempts'>
          ATTEMPTS REMAINING:&nbsp;
          <span className={locked && !unlocked ? 'blink' : ''}>{tries}</span>
      </code>
      <code className={locked || unlocked ? 'terminal-lockout' : 'terminal-lockout invisible'}>
        {unlocked ? 'UNLOCKED' : 'LOCKED OUT'}
      </code>
    </div>
  );
}

export default TerminalHeader;
