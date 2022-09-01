import React from "react";
import "./app.css";
import TriviaLayout from "./components/Layout";
import SinglePlayerPage from "./features/singlePlayer/page/SinglePlayerPage";

function App() {
  return (
    <TriviaLayout>
      <SinglePlayerPage />
    </TriviaLayout>
  );
}

export default App;
