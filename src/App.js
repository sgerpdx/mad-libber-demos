import "./App.css";

function App() {
  const submitPrompt = () => {
    console.log("worrrrrd");
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>Enter Text:</h2>
        <input type="text" placeholder="text goes here"></input>
        <button onClick={submitPrompt}>Submit</button>
        <textarea value={"response area"}></textarea>
      </header>
    </div>
  );
}

export default App;
