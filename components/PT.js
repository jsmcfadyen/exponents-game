import { useState, useEffect } from "react";
import AnswerInput from "./AnswerInput";

const PowTwoGame = ({ onGameOver }) => {
  //It's not technically the radicand, but for ease of use, it is a variable name for
  //the exponent power
  const [radicand, setRadicand] = useState(0);

  const randint = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const guess = (response) => {
    if (Math.pow(2, response) == radicand) {
      new_question();
    } else {
      onGameOver();
    }
  };

  const new_question = () => {
    const temp = randint(0, 16);
    setRadicand(Math.pow(2, temp));
  };

  useEffect(new_question, []);
  //empty list second parameter/ run first time

  return (
    <>
      <div className="bg-blue-200">
        <h1 className="flex justify-center text-3xl font-medium">
          Powers of Two Game
        </h1>
        <p className="flex justify-center">
          Type in the evaluated statement in the box below!
        </p>
      </div>
      <div className="flex justify-center p-20 m-20">
        <div className="text-5xl">
          log<sub>2</sub>
          {radicand} =
        </div>
        <AnswerInput onGuess={guess} />
      </div>
    </>
  );
};
export default PowTwoGame;
