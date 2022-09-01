import React from "react";
import "./app.css";
import QuestionDisplay from "./features/questions/components/QuestionDisplay";
import { basicQuestion } from "./features/questions/mocks";

function App() {
  const next = (isCorrect: boolean) => {
    console.log(isCorrect ? "Right!" : "Wrong!");
  };
  return (
    <div>
      <QuestionDisplay question={basicQuestion} next={next} />
    </div>
  );
}

export default App;
