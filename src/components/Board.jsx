import Square from "./Square";

export default function Board({xIsNext, squares, onPlay}) {


  // To collect data from multiple children,
  // or to have two child components communicate with each other,
  // declare the shared state in their parent component

  // const [squares, setSquares] = useState(Array(9).fill(null));

  // function to rerender the board when a square is clicked
  function handleClick(i) {
    // It the square thats clicked is already filled,
    // returning early before the board re-renders.
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares)
  }

  // code to display the status and for telling who is the winner.
  const winner = calculateWinner(squares);
  let status;
  if (
    !squares[0] &&
    !squares[1] &&
    !squares[2] &&
    !squares[3] &&
    !squares[4] &&
    !squares[5] &&
    !squares[6] &&
    !squares[7] &&
    !squares[8]
  ) {
    status = " Start Playing!";
  } else if (winner) {
    status = " CONGRATULATIONS. " + winner + " is the winner!!";
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  // sending the value of the square
  // and onSquareClick function as prop to the square function.
  // () => handleClick(i) --> new function declaration
  return (
    <>
      <div className="board">
        <div className="row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>

        <div className="row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>

        <div className="row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <div className="status">{status}</div>
    </>
  );
}

// logic to calculate the winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

