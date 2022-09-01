import { Button } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Question } from "../../types";

import "./index.css";

type BtnType = "link" | "text" | "ghost" | "default" | "primary" | "dashed";

interface QuestionDisplayProps {
  question: Question;
  next: (isCorrect: boolean) => void;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  question,
  next,
}) => {
  const [pickedAnswer, setPickedAnswer] = useState<string>();
  const timeOut = useRef<any>();

  useEffect(() => {
    if (pickedAnswer !== undefined) {
      const isCorrect = pickedAnswer === question.correctAnswer;
      timeOut.current = setTimeout(() => {
        next(isCorrect);
      }, 500);
    }
    return () => {
      clearTimeout(timeOut.current);
    };
  }, [pickedAnswer, next, question.correctAnswer]);

  const getBtnType = (
    answer: string,
    picked: string | undefined,
    correct: string
  ): BtnType => {
    if (picked === undefined) {
      return "default";
    }
    if (picked !== answer) {
      return answer === correct ? "primary" : "default";
    }
    return picked === correct ? "primary" : "default";
  };

  return (
    <div className="question-display">
      <div className="question-display__question">
        <h3>{question.text}</h3>
      </div>
      <ul className="question-display__answers">
        {question.answers.map((answer) => {
          const isDanger =
            pickedAnswer === answer && answer !== question.correctAnswer;
          const type = getBtnType(answer, pickedAnswer, question.correctAnswer);
          const disabled =
            pickedAnswer !== undefined && type === "default" && !isDanger;
          return (
            <li className="question-display__answer" key={answer}>
              <Button
                onClick={() => setPickedAnswer(answer)}
                block
                danger={isDanger}
                type={type}
                disabled={disabled}
                size="large"
              >
                {answer}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionDisplay;
