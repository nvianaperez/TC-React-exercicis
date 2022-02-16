import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState(0);

  const controlOperacio = (operacio) => {
    if (display + parseInt(operacio) < 0) {
      console.log(display); // display és el valor anterior, falta sumar-li la operacio, que com que és un string ho haig de passar a número
      return false;
    } else if (display + parseInt(operacio) > 10) {
      console.log(display);
      return false;
    } else return true;
  };

  const entraOperacio = (operacio) => {
    if (!controlOperacio(operacio)) {
      setDisplay("error");
    } else {
      if (operacio === "+1") {
        setDisplay(display + 1);
      }
      if (operacio === "-1") {
        setDisplay(display - 1);
      }
      if (operacio === "+5") {
        setDisplay(display + 5);
      }
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
