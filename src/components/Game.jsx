import Board from "./Board"
import Navbar from "./Navbar"
import { useState } from "react"

export default function Game(){

    
    // history array to store all the past square arrangements which itself is an array of 9 elements
    const [history, setHistory] =  useState([Array(9).fill(null)])
    
    
    // to keep track of the current step the user is viewing
    const [currentMove, setCurrentMove] = useState(0)
    
    const xIsNext = currentMove % 2 === 0;

    // to render the squares for the current move
    const currentSquares = history[currentMove];

    // function to be called by the board component to update the game
    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove)
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move # ' + move
        } else {
            description = 'Go to game start'
        }
        return (
            <li key={move}>
            <button className="move" onClick={()=> jumpTo(move)}>{description}</button>
            </li>
        )
    }) 

    return(
        <>
        <Navbar/>
        <div className="tictactoe">
        <div className="game">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
        </div>
        <div className="info">
        <ol className="moves">
        {moves}
        </ol>
        </div>
        </div>
        </>
    )
}