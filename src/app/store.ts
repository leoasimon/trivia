import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import singlePlayerReducer from "../features/singlePlayer/singlePlayerSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    singlePlayer: singlePlayerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
