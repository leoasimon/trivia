import { Button, Space, Typography } from "antd";
import React from "react";
import { SinglePlayerGame } from "../../types";

interface SinglePlayerGameResultProps {
  game: SinglePlayerGame;
  newGame: () => void;
}

const SinglePlayerGameResult: React.FC<SinglePlayerGameResultProps> = ({
  game,
  newGame,
}) => {
  return (
    <Space direction="vertical">
      <Typography.Title level={3}>
        Score: {`${game.score} / ${game.step}`}
      </Typography.Title>
      <Button type="primary" onClick={newGame}>
        New Game
      </Button>
    </Space>
  );
};

export default SinglePlayerGameResult;
