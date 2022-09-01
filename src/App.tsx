import React from "react";
import "./app.css";
import SinglePlayerPlay from "./features/singlePlayer/components/SinglePlayerPlay";
import { singlePlayerGame } from "./features/singlePlayer/mocks";

function App() {
  return (
    <div>
      <SinglePlayerPlay game={singlePlayerGame} />
    </div>
  );
}

export default App;
