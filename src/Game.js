import React, { useState, useEffect } from "react";
import { utils } from "./utilis";
import PlayNumber from "./PlayNumber";
import StarsDisplay from "./StarsDisplay";

//Custom Hook
const useGameState = timeLimit => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondLeft, setSecondLeft] = useState(10);

  useEffect(() => {
    if (secondLeft > 0 && availableNums.length > 0) {
      const timerId = setTimeout(() => {
        setSecondLeft(secondLeft - 1);
      }, timeLimit);
      return () => clearTimeout(timerId);
    }
  });

  const setGameState = newCandidateNums => {
    if (utils.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        n => !newCandidateNums.includes(n)
      );
      setStars(utils.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };

  return { stars, availableNums, secondLeft, candidateNums, setGameState };
};

const PlayAgain = props => (
  <div className="gone-done">
    <div
      className="message"
      style={{ color: props.gameStatus === "lost" ? "red" : "green" }}
    >
      {props.gameStatus === "lost" ? "Game Over" : "Nice"}
    </div>
    <button onClick={props.onClick}>Play Again</button>
  </div>
);

const Game = props => {
  const {
    stars,
    availableNums,
    secondLeft,
    candidateNums,
    setGameState
  } = useGameState(1000);

  const gameStatus =
    availableNums.length === 0 ? "won" : secondLeft === 0 ? "lost" : "active";

  // const resetGame = () => {
  //   setStars(utils.random(1, 9));
  //   setAvailableNums(utils.range(1, 9));
  //   setCandidateNums([]);
  //   setSecondLeft(10);
  // };

  const numberStatus = number => {
    if (!availableNums.includes(number)) {
      return "used";
    }
    if (candidateNums.includes(number)) {
      return gameStatus === "won" ? "wrong" : "candidate";
    }

    return "available";
  };

  // Computation about state
  const onNumberClick = (number, status) => {
    console.log(number, status);
    if (gameStatus !== "active" || status === "used") {
      return "";
    }

    const newCandidateNums =
      status === "available"
        ? candidateNums.concat(number)
        : candidateNums.filter(cn => cn !== number);

    setGameState(newCandidateNums);
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus !== "active" ? (
            <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
          ) : (
            <StarsDisplay count={stars} />
          )}
        </div>
        <div className="right">
          {utils.range(1, 9).map(number => (
            <PlayNumber
              onClick={onNumberClick}
              status={numberStatus(number)}
              key={number}
              number={number}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondLeft}</div>
    </div>
  );
};

export default Game;
