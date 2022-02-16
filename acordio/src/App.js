import { useState } from "react";

import "./App.css";

const acordioArr = [
  { id: 1, titol: "Títol 1", text: "Contingut 1" },
  { id: 1, titol: "Títol 2", text: "Contingut 2" },
  { id: 1, titol: "Títol 3", text: "Contingut 3" },
  { id: 1, titol: "Títol 4", text: "Contingut 4" },
];

function App() {
  const [textDisplay, setTextDisplay] = useState("Text");
  const [textClicked, setTextClicked] = useState("null");

  const newDisplay = (e) => {
    setTextClicked(e.target.text); //<h1 class="Titol">Títol 1</h1>
    if (textDisplay === "Text") {
      setTextDisplay("Text-none");
    } else {
      setTextDisplay("Text");
    }
  };

  return (
    <div className="Container">
      {acordioArr.map((element) => (
        <div key={element.id}>
          <h1
            // className={element === textClicked ? textDisplay : "Text"}
            className="Text"
            onClick={newDisplay}
          >
            {element.titol}
          </h1>
          <h5 className={element.text === textClicked ? textDisplay : "Text"}>
            {element.text}
          </h5>
        </div>
      ))}
    </div>
  );
}

export default App;
