import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState(0);

  const entraOperacio = (operacio) => {
    if (operacio === "+1") {
      setDisplay(display + 1);
    }
    if (operacio === "-1") {
      setDisplay(display - 1);
    }
    if (operacio === "+5") {
      setDisplay(display + 5);
    }
  };

  return (
    <div className="Comptador">
      <div className="Display">{display}</div>
      <div className="Buttons">
        <button onClick={() => entraOperacio("+1")}>+ 1</button>
        <button onClick={() => entraOperacio("-1")}>- 1</button>
        <button onClick={() => entraOperacio("+5")}>+ 5</button>
      </div>
    </div>
  );
}

export default App;
