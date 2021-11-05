import React, { useState, useEffect } from "react";
import "./App.css";
import { generateText } from "./utils/GPT-J-text";

function App() {
  const [wordOne, setWordOne] = useState("word");
  const [wordTwo, setWordTwo] = useState("word");
  const [textRes, setTextRes] = useState("nothing yet");

  const updateOne = (e) => {
    setWordOne(e.target.value);
    console.log("W1:", wordOne);
  };

  const updateTwo = (e) => {
    setWordTwo(e.target.value);
    console.log("W2:", wordTwo);
  };

  const submitPrompt = async () => {
    const charName = await generateText(wordOne, wordTwo);
    setTextRes(charName);
    console.log("action");
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>Enter Text:</h2>
        <input type="text" placeholder="word one" onChange={updateOne}></input>
        <input type="text" placeholder="word two" onChange={updateTwo}></input>
        <button onClick={submitPrompt}>Submit</button>
        <textarea value={textRes} placeholder={"your words here"}></textarea>
      </header>
    </div>
  );
}

export default App;
