import useTicTacToe from "../Hooks/useTicTacToe";

export default function TicTacToe() {
  const { board, resetGame, handleClick, getStatusMessage } = useTicTacToe();

  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button className="reset-button" onClick={resetGame}>
          Reset Board
        </button>
      </div>
      <div className="board">
        {board.map((data, index) => {
          return (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
              disabled={data !== null}
            >
              {data}
            </button>
          );
        })}
      </div>
    </div>
  );
}
