import { basicQuestion } from "../questions/mocks";
import { SinglePlayerGame } from "./types";

export const singlePlayerGame: SinglePlayerGame = {
  questions: Array.from({ length: 5 }).map(() => basicQuestion),
  step: 0,
  score: 0,
};
