import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import SinglePlayerGameResult from "../../components/SinglePlayerGameResult";
import SinglePlayerPlay from "../../components/SinglePlayerPlay";
import { loadGame, nextQuestion } from "../../singlePlayerSlice";

const SinglePlayerPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const singlePlayerState = useAppSelector((state) => state.singlePlayer);

  useEffect(() => {
    dispatch(loadGame());
  }, [dispatch]);

  const goToNextQuestion = (isAnswerCorrect: boolean) => {
    dispatch(nextQuestion(isAnswerCorrect));
  };

  const newGame = () => {
    dispatch(loadGame());
  };

  if (singlePlayerState.status === "loading") {
    return <div>Loading...</div>;
  }

  if (singlePlayerState.status === "failed") {
    return <div>An error occured</div>;
  }

  const game = singlePlayerState.value;

  if (game.questions.length == 0) {
    return null;
  }

  if (game.questions.length === game.step) {
    return (
      <SinglePlayerGameResult
        game={singlePlayerState.value}
        newGame={newGame}
      />
    );
  }

  return (
    <div>
      {game.questions.length === 0 ? null : (
        <SinglePlayerPlay game={game} goToNextQuestion={goToNextQuestion} />
      )}
    </div>
  );
};

export default SinglePlayerPage;
