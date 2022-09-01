import React from "react";
import QuestionDisplay from "../../../questions/components/QuestionDisplay";
import { SinglePlayerGame } from "../../types";

interface SinglePlayerPlayProps {
  game: SinglePlayerGame;
  goToNextQuestion: (isAnswerCorrect: boolean) => void;
}

const SinglePlayerPlay: React.FC<SinglePlayerPlayProps> = ({
  game,
  goToNextQuestion,
}) => {
  const question = game.questions[game.step];

  return (
    <div>
      <QuestionDisplay question={question} next={goToNextQuestion} />
    </div>
  );
};

export default SinglePlayerPlay;
