import React from "react";
import QuestionDisplay from "../../../questions/components/QuestionDisplay";
import { SinglePlayerGame } from "../../types";

interface SinglePlayerPlayProps {
  game: SinglePlayerGame;
}

const SinglePlayerPlay: React.FC<SinglePlayerPlayProps> = ({ game }) => {
  const question = game.questions[game.step];

  const next = (isCorrect: boolean) => {
    console.log(isCorrect ? "Right!" : "Wrong!");
  };

  return (
    <div>
      <QuestionDisplay question={question} next={next} />
    </div>
  );
};

export default SinglePlayerPlay;
