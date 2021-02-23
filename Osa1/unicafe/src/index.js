import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    if (props.allClicks === 0) {
        return (
            <h3>No feedback given</h3>
        )
    }
        else {
        return (
            <>
            <tr>
                <td> {props.teksti} </td>
                <td> {props.arvo} </td>
            </tr>
            <tr>
                <td> {props.teksti1} </td>
                <td> {props.arvo1} </td>
            </tr>
            </>
        )
    }
    };


const Statistic  = (props) => {
    if(props.allClicks===0) {
        return(
            ""
        )
    }
    return (
        <tr><td>{props.text}</td> <td>{props.value}</td></tr>
    )
};

const Header = () => <h1>give feedback</h1>;
const Middle = () => <h1> Statistics </h1>;

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
);
const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [allClicks, setAll] = useState(0);
    const [allFeedback, setFeedback] = useState(0);

    const handleGoodClick = () => {
        setAll(allClicks+1);
        setFeedback(allFeedback+1);
        setGood(good + 1)
    };
    const handleNeutralClick = () => {
        setAll(allClicks+1);
        setNeutral(neutral + 1)
    };

    const handleBadClick = () => {
        setFeedback(allFeedback-1);
        setAll(allClicks+1);
        setBad(bad + 1)
    };

    return (
        <>
            <Header/>
            <Button onClick={handleGoodClick} text="good"/>
            <Button onClick={handleNeutralClick} text="neutral"/>
            <Button onClick={handleBadClick} text="bad"/>
            <Middle/>
            <table> <tbody>
            <Statistic allClicks={allClicks} text ="good" value={good}/>
            <Statistic  allClicks={allClicks} text ="neutral" value={neutral}/>
            <Statistic allClicks={allClicks} text ="bad" value={bad}/>
            <Statistic allClicks={allClicks} text ="all" value={allClicks}/>
            <Statistics allClicks ={allClicks } teksti={"average"}  arvo={good/allClicks*100 || 0} align="below"  teksti1={"positive" || 0} arvo1={allFeedback/allClicks || 0}/>
            </tbody></table>
        </>
    )
};

ReactDOM.render(<App />,
    document.getElementById('root')
);