import { useState } from "react";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

String.prototype.replaceAt = function(index, replacement) {
  return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function sarcastify(str) {
  if (str === " ") {
    return str;
  }
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    const newChar = getRandomInt(10) > 5 ? str.charAt(i).toUpperCase() : str.charAt(i);
    newStr += newChar;
  }
  return newStr;
}

function SarcasticInput(props) {
  const [input, setInput] = useState(props?.value ?? '');
  const [sarcasticValue, setSarcasticValue] = useState("");
  const handleChange = e => {
    setSarcasticValue(sarcastify(e.target.value.replace(" ", "\u00A0")));
    setInput(e.target.value.replace(" ", "\u00A0"));
  }
  return (
    <div>
      <input value={input} onChange={handleChange}/>
      <h2>{sarcasticValue}</h2>
    </div>
  )
}

function App() {
  return (
    <SarcasticInput />
  )
}

export default App;
