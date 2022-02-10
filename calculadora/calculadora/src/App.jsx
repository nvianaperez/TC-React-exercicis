import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { HandleClick, Opera } from "./Buttons";
import Clear from "./Clear";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let result = 0;

function App() {
  const [nums, setNums] = useState([0]);
  const [operador, setOperador] = useState('suma');

  return (
    <div classname="wrapper">
      <div className="result"> {result} </div>
      <div className="grid-container">
        <div className="item">
          {numbers.map((num) => (
            <button onclick={HandleClick(num)} key={num}>{num}</button>
          ))}
        </div>
      </div>
      <div className="operadors">
        <button className="suma" onclick={Opera(result, nums)}>
          +
        </button>
        <button classname="resta" onclick={Opera(result, nums)}>
          -
        </button>
      </div>
      <div className="clear">
        <button onclick={Clear(nums, result)}>Clear</button>
      </div>
    </div>
  );
}

export default App;
