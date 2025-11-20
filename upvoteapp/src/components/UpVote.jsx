import React from 'react';
import { ReactComponent as ArrowUp } from './icons/arrow-up.svg';

export default function UpVote({ selected, toggle }) {

  const bg = selected ? '#E5E8FD' : '#F4F6F8';
  const arrowColor = selected ? '#253CF2' : '#343A40';

    return (
        <button
            aria-label='Upvote Button'
            onClick={toggle}
            style={{
                width: 50,
                height: 50,
                background: bg,
                border: 'none',
                borderRadius: 10,}}>
            <ArrowUp fill={arrowColor} />
        </button>
    );
}