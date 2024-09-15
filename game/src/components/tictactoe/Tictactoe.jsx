import React, { useRef, useState } from "react";
import "./Tictactoe.css";
import cross_icon from "../Assets/close.png";
import o_icon from "../Assets/o.png";
let data = ["", "", "", "", "", "", "", "", ""];

const Tictactoe = () => {
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  const boxes_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const [play, setPlay] = useState(false);
  // let [data, setData] = useState(null);
  let [count, setCount] = useState(0);

  const playHandler = () => {
    if (play) {
      setPlay(false);
      // setData(null);
      setCount(0);
      data = ["", "", "", "", "", "", "", "", ""];
      boxes_array.map((e) => {
        return (e.current.innerHTML = "");
      });
      console.log("reset ", data);
    } else {
      setPlay(true);
      console.log("play ", data);
    }
  };

  const gameHandler = (e, num) => {
    if (!play) {
      return;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}' alt="cross"/>`;
      // setData[num] = "X";
      data[num] = "X";
    } else {
      e.target.innerHTML = `<img src='${o_icon}' alt="cross"/>`;
      //setData[num] = "O";
      data[num] = "O";
    }
    setCount(++count);
    winnerLogic();
  };

  const winnerLogic = () => {
    if (data[1] === data[2] && data[2] === data[3] && data[3] !== "") {
      winner(data[1]);
    } else if (data[4] === data[5] && data[5] === data[6] && data[6] !== "") {
      winner(data[4]);
    } else if (data[7] === data[8] && data[8] === data[9] && data[9] !== "") {
      winner(data[7]);
    } else if (data[1] === data[5] && data[5] === data[9] && data[9] !== "") {
      winner(data[1]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      winner(data[1]);
    } else if (data[2] === data[5] && data[5] === data[7] && data[7] !== "") {
      winner(data[2]);
    } else if (data[3] === data[6] && data[6] === data[8] && data[8] !== "") {
      winner(data[3]);
    } else if (data[3] === data[5] && data[5] === data[6] && data[6] !== "") {
      winner(data[3]);
    }
  };

  const winner = (data) => {
    setPlay(false);
    console.log("winner is ", data);
    playHandler();
  };

  return (
    <div className="game" id="game">
      <h1>TicTacToe </h1>
      <div className="game-table">
        <div className="game-table-row1">
          <div
            className="boxes"
            onClick={(e) => gameHandler(e, 1)}
            ref={box1}
          ></div>
          <div
            className="boxes"
            onClick={(e) => gameHandler(e, 2)}
            ref={box2}
          ></div>
          <div
            className="boxes"
            onClick={(e) => gameHandler(e, 3)}
            ref={box3}
          ></div>
        </div>
        <div className="game-table-row2">
          <div
            className="boxes"
            onClick={(e) => gameHandler(e, 4)}
            ref={box4}
          ></div>
          <div
            className="boxes"
            onClick={(e) => gameHandler(e, 5)}
            ref={box5}
          ></div>
          <div
            className="boxes"
            onClick={(e) => gameHandler(e, 6)}
            ref={box6}
          ></div>
        </div>
        <div className="game-table-row3">
          <div
            className="boxes"
            onClick={(e) => gameHandler(e, 7)}
            ref={box7}
          ></div>
          <div
            className="boxes"
            onClick={(e) => gameHandler(e, 8)}
            ref={box8}
          ></div>
          <div
            className="boxes"
            onClick={(e) => gameHandler(e, 9)}
            ref={box9}
          ></div>
        </div>
      </div>

      <button className="game-reset" id="reset" onClick={playHandler}>
        {play ? "Reset" : "Play"}
      </button>
    </div>
  );
};

export default Tictactoe;
