import React, { useState } from 'react'
import ReactDOM from 'react-dom'
//committia varten kommentti


const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
);


const App = (props) => {
    const Rnd = () => Math.floor(Math.random()* anecdotes.length);

    const [selected, setSelected] = useState(0);
    const [vote, setVote] = useState([0,0,0,0,0,0]);
    const IndexOfHighestArray = vote.reduce((mMax, x, i, array) => x > array[mMax] ? i : mMax, 0);
    console.log("toimiiko",IndexOfHighestArray);
    const handleVoteClick = () => {
        const voteList = [...vote];
        voteList[selected] += 1;
        setVote(voteList);
        console.log(voteList)

    };
    return (
        <div>

            <h1> Anecdote of the day </h1>
            <div>
                {props.anecdotes[selected]}
            </div>
            <div>
                has {vote[selected]} votes
            </div>
            <Button onClick={handleVoteClick}  text = 'vote'

            />
            <Button
                onClick={() => setSelected(Rnd)}
                text='next anecdote'
            />
            <h1>Anectode with most votes</h1>
            <p> {props.anecdotes[IndexOfHighestArray]}</p>

            has {vote[IndexOfHighestArray]} votes
        </div>
    )
};

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
);