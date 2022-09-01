import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchQuestions,
  isError,
  TApiQuestion,
} from "../questions/questionsApi";
import { Question } from "../questions/types";
import { SinglePlayerGame } from "./types";

interface SinglePlayerState {
  value: SinglePlayerGame;
  status: "idle" | "loading" | "failed";
}

const initialState: SinglePlayerState = {
  value: {
    questions: [],
    score: 0,
    step: 0,
  },
  status: "idle",
};

const arrayShuffle = <T>(arr: T[]): T[] => {
  const initialState = {
    pool: arr,
    shuffled: [] as T[],
  };

  const { shuffled } = arr.reduce((acc) => {
    const index = Math.floor(Math.random() * acc.pool.length);
    const picked = acc.pool[index];
    const newPool = [...acc.pool.slice(0, index), ...acc.pool.slice(index + 1)];

    return {
      pool: newPool,
      shuffled: [...acc.shuffled, picked],
    };
  }, initialState);

  return shuffled;
};

const parseApiQuestion = (apiQuestion: TApiQuestion): Question => {
  return {
    text: apiQuestion.question,
    answers: arrayShuffle([
      ...apiQuestion.incorrectAnswers,
      apiQuestion.correctAnswer,
    ]),
    correctAnswer: apiQuestion.correctAnswer,
  };
};

const parseQuestions = (apiQuestions: TApiQuestion[]): Question[] => {
  return apiQuestions.map(parseApiQuestion);
};

export const loadGame = createAsyncThunk("singlePlayer/loadGame", async () => {
  const apiQuestions = await fetchQuestions();

  if (isError(apiQuestions)) {
    return apiQuestions;
  }
  return parseQuestions(apiQuestions);
});

const initValue = (questions: Question[]): SinglePlayerGame => {
  return {
    questions,
    score: 0,
    step: 0,
  };
};

const singlePlayerSlice = createSlice({
  name: "singlePlayer",
  initialState,
  reducers: {
    nextQuestion: (state, action) => {
      state.value.step += 1;
      state.value.score += action.payload ? 1 : 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadGame.fulfilled, (state, action) => {
        if (isError(action.payload)) {
          state.status = "failed";
        } else {
          state.status = "idle";
          state.value = initValue(action.payload);
        }
      })
      .addCase(loadGame.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadGame.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { nextQuestion } = singlePlayerSlice.actions;

export default singlePlayerSlice.reducer;
