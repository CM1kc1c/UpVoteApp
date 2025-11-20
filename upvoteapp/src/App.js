import React, { useState, useEffect } from 'react';
import VoteList from './components/VoteList';
import './index.css';

export default function App() {

    //intial votelists
    const Initial = [
        { listid: 1, votes: [], selected: false },
        { listid: 2, votes: [], selected: false },
        { listid: 3, votes: [], selected: false },
    ];

    //Get votelists from localstorage or intiial
    const [lists, setLists] = useState(() => {
        return JSON.parse(localStorage.getItem("voteLists")) ?? Initial
    });

    //on list change, save to localstorage
    useEffect(() => {
        localStorage.setItem("voteLists", JSON.stringify(lists));
    }, [lists]);

    //update vote changes in specified list to localstorage
    const updateLists = (listid, updatedlist) => {
        setLists(votelists => 
            votelists.map(list => {
                if (list.listid === listid) {
                    return { ...list, ...updatedlist };
                }
            return list;
            })
        );
    };

    return (
        <div className ="app">
            <div className="votelist">
                {lists.map(list => (
                    <VoteList
                        key={list.listid}
                        listId={list.listid}
                        localvotes={list.votes}
                        localselected={list.selected}
                        updateLists={updateLists}/>
                ))}
            </div>
        </div>
    );
}
