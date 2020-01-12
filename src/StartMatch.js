import React, { useState } from "react";
import { utils } from "./utilis";
import PlayNumber from "./PlayNumber";
import StarsDisplay from "./StarsDisplay";

const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);

  const candidateAreWrong = utils.sum(candidateNums) > stars;

  const numberStatus = number => {
    if (!availableNums.includes(number)) {
      return "used";
    }
    if (candidateNums.includes(number)) {
      return candidateAreWrong ? "wrong" : "candidate";
    }

    return "available";
  };

  const onNumberClick = (number, status) => {
    console.log(number, status);
    if (status === "used") {
      return "";
    }

    const newCandidateNums =
      status === "available"
        ? candidateNums.concat(number)
        : candidateNums.filter(cn => cn !== number);

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

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          <StarsDisplay count={stars} />
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
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

export default StarMatch;
