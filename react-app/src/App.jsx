import { useState } from "react";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function sarcastify(str) {
  if (str === " ") {
    return str;
  }
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    const newChar =
      getRandomInt(10) > 5 ? str.charAt(i).toUpperCase() : str.charAt(i);
    newStr += newChar;
  }
  return newStr;
}

function SarcasticInput() {
  const [state, setState] = useState({
    rawInput: "",
    sarcasticInput: "",
    copied: false,
  });

  const handleChange = (e) => {
    setState({
      sarcasticInput: sarcastify(e.target.value.replace(" ", "\u00A0")),
      rawInput: e.target.value.replace(" ", "\u00A0"),
      copied: false,
    });
  };

  const handleCopy = (e) => {
    navigator.clipboard.writeText(state.sarcasticInput);
    setState({
      ...state,
      copied: true,
    });
  };

  return (
    <div className="InputComponent">
      <input
        placeholder="Enter a sarcastic comment..."
        value={state.rawInput}
        onChange={handleChange}
      />
      <div className="SarcasticOutput"><p>{state.sarcasticInput}</p><button>copy</button></div>
      <div className="SarcasticOutput"><p>{state.sarcasticInput}</p><button>copy</button></div>
      <div className="SarcasticOutput"><p>{state.sarcasticInput}</p><button>copy</button></div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <SarcasticInput />
    </div>
  );
}

export default App;
