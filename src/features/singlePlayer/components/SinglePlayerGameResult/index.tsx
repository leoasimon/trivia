import { Button, Typography } from "antd";
import React from "react";
import { SinglePlayerGame } from "../../types";

import "./index.css";

interface SinglePlayerGameResultProps {
  game: SinglePlayerGame;
  newGame: () => void;
}

const SinglePlayerGameResult: React.FC<SinglePlayerGameResultProps> = ({
  game,
  newGame,
}) => {
  return (
    <div className="game-result">
      <Typography.Title level={3} className="game-result__score">
        Score: {`${game.score} / ${game.step}`}
      </Typography.Title>
      <Button type="primary" onClick={newGame}>
        New Game
      </Button>
    </div>
  );
};

export default SinglePlayerGameResult;
