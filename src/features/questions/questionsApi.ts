import axios from "axios";
import { isRight } from "fp-ts/lib/Either";
import * as D from "io-ts/Decoder";

const apiUrl = "https://the-trivia-api.com/api/questions";

const ApiQuestion = D.struct({
  question: D.string,
  correctAnswer: D.string,
  incorrectAnswers: D.array(D.string),
});

const ApiQuestions = D.array(ApiQuestion);

export type TApiQuestion = D.TypeOf<typeof ApiQuestion>;

interface IError {
  message: string;
}

export const isError = (maybeError: any): maybeError is IError => {
  return "message" in maybeError;
};

export const fetchQuestions = async (): Promise<TApiQuestion[] | IError> => {
  const response = await axios.get(apiUrl, {
    params: {
      limit: 1,
    },
  });

  if (isRight(ApiQuestions.decode(response.data))) {
    return response.data;
  }
  return {
    message: "Unexpected response format",
  };
};
