import { Typography } from "antd";
import React from "react";

import "./index.css";

interface TriviaLayoutProps {
  children: React.ReactNode;
}

const TriviaLayout: React.FC<TriviaLayoutProps> = ({ children }) => {
  return (
    <div className="trivia-layout">
      <header>
        <Typography.Title level={3}>Trivia</Typography.Title>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default TriviaLayout;
