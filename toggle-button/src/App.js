import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("yellow");

  const buttonPressed = color !== "yellow";

  const changeColor = () => {
    if (color) setcolor("green");
    if (color === "green") setcolor("yellow");
  };
  return (
    <div className="container">
      <button style={{ background: color }} onClick={changeColor}>
        Clica el botó
      </button>
      {buttonPressed ? <p>Botó premut</p> : <p>Botó no premut</p>}
    </div>
  );
}

export default App;
