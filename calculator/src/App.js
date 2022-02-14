import { useState } from "react";
import "./App.css";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function Button({ onPressed, children }) {
  return <button onClick={onPressed}>{children}</button>;
}

function App() {
  const [display, setDisplay] = useState(0);
  const [anterior, setAnterior] = useState(0);
  const [operacio, setOperacio] = useState("");
  const [newEntry, setNewEntry] = useState("false");

  // El número és una nova entrada o hem d'afegir dígits?
  const enterNumber = (number) => {
    if (newEntry) setDisplay(number);
    else setDisplay(display * 10 + number);
    setNewEntry(false);
  };

  const entraOperacio = (operacio) => {
    setNewEntry(true);
    //reseteja el display --> si el nou estat de newentry és true , el nou valor de display serà el number del botó que apreto
    setAnterior(display);
    if (!newEntry) calcular();
    setOperacio(operacio);
  };

  const calcular = () => {
    if (operacio === "+") setDisplay(anterior + display);
    if (operacio === "-") setDisplay(anterior - display);
  };

  const clear = () => {
    setOperacio("");
    setDisplay(0);
  };

  return (
    <div className="Calculator">
      <div className="Display">{display}</div>
      <div className="Numbers">
        {numbers.map((number) => (
          <Button onPressed={() => enterNumber(number)}>{number}</Button>
        ))}
      </div>
      <div className="Buttons">
        <button onClick={() => entraOperacio("+")}>+</button>
        <button onClick={() => entraOperacio("-")}>-</button>
        <button onClick={calcular}>=</button>
        <button onClick={clear}>C</button>
      </div>
    </div>
  );
}

export default App;
