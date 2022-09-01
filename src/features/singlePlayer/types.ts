import { Question } from "../questions/types";

export interface SinglePlayerGame {
  questions: Question[];
  step: number;
  score: number;
}
