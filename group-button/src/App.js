import { useState } from "react";
import "./App.css";

function App() {
  const [textCanvia, setTextCanvia] = useState("cap");
  const [color, setColor] = useState("");

  const toggle = (text) => {
    setTextCanvia(text);

    if (textCanvia === text) setColor("white");
  };

  return (
    <>
      <div className="container-buttons">
        <button onClick={() => toggle("A")} className={color}>
          A
        </button>
        <button onClick={() => toggle("B")} className={color}>
          B
        </button>
        <button onClick={() => toggle("C")} className={color}>
          C
        </button>
      </div>
      <p>{textCanvia}</p>
    </>
  );
}

export default App;
