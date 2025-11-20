import React, { useEffect, useState } from 'react';
import UpVote from './UpVote';
import { ReactComponent as Add } from './icons/plus.svg';
import { ReactComponent as Sub } from './icons/minus.svg';

export default function VoteList({ listId, localvotes, localselected, updateLists }) {

    const [votes, setVotes] = useState(localvotes);
    const [selected, setSelected] = useState(localselected);

    //toggle selected handler
    const toggle = () => setSelected(!selected);

    //add vote to list
    const add = () => {
        setVotes(votes => [...votes, { voteid: votes.length + 1 }]);
    };

    //subtract vote from list
    const sub = () => {
        setVotes(votes => votes.slice(0, -1));
    };

    //on vote change in list, called update handler
    useEffect(() => {
        updateLists(listId, { votes, selected });
    }, [votes, selected]);

    return (
        <div className="votelistdiv">
            <div className="votes">
                {votes.map(vote => (
                    <div key={vote.voteid}>
                        <UpVote 
                            key={vote.voteid} 
                            selected={selected} 
                            toggle={toggle}/>
                    </div>
                ))}
            </div>

            <div className="buttondiv">
                <button className="controlbutton" onClick={add}>
                    <Add fill="#F4F6F8'" />
                </button>

                <button className="controlbutton" onClick={sub}>
                    <Sub fill="#F4F6F8'" />
                </button>
            </div>
        </div>
    );
}
