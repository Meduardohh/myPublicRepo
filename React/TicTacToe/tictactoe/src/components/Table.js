import { useState } from "react";

const Table = () => {
  const [player, setPlayer] = useState("X");

  const [board, setBoard] = useState(Array(9).fill(""));

  const checkWinner = (squares) => {
    const winConditions = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in winConditions) {
      winConditions[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1] === ""] ||
          squares[pattern[2] === ""]
        ) {
          return;
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
        }
      });
    }
  };

  const renderPlayer = (e) => {
    if (e.target.innerText) return;
    e.target.innerText = player;
  };

  const clickHandler = (num) => {
    if (board[num] !== "") return;
    let newArr = [...board];
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
    newArr[num] = player;
    setBoard(newArr);
    console.log(board);
  };

  const Cell = ({ num }) => {
    return (
      <td
        onClick={() => {
          clickHandler(num);
          
          
        }}
      ></td>
    );
  };

  return (
    <>
      Turn:{player}
      <br />
      <table>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
