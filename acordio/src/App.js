import React, { useState } from "react";

import "./App.css";

const acordioArr = [
  { id: 1, titol: "Títol 1", text: "Contingut 1" },
  { id: 1, titol: "Títol 2", text: "Contingut 2" },
  { id: 1, titol: "Títol 3", text: "Contingut 3" },
  { id: 1, titol: "Títol 4", text: "Contingut 4" },
];

function App() {
  const [textClicked, setTextClicked] = useState("null");

  const newDisplay = (element) => {
    console.log(element);
    console.log(textClicked);
    if (textClicked !== element) setTextClicked(element);
    else setTextClicked(null);
  };

  return (
    <div className="Container">
      {acordioArr.map((element) => (
        <div key={element.id}>
          <h1 className="Text" onClick={() => newDisplay(element)}>
            {element.titol}
          </h1>
          <h5 className={element === textClicked ? "Text" : "Text-none"}>
            {element.text}
          </h5>
        </div>
      ))}
    </div>
  );
}

export default App;

// MODIFICANT CLASSES, MÉS COMPLICAT
// function App() {
//   const [textClicked, setTextClicked] = useState("null");
//   const [textDisplay, setTextDisplay] = useState("Text-none");

//   const newDisplay = (element) => {
//     setTextClicked(element);
//     if (textDisplay === "Text") {
//       setTextDisplay("Text-none");
//     } else {
//       setTextDisplay("Text");
//     }
//   };

//   return (
//     <div className="Container">
//       {acordioArr.map((element) => (
//         <div key={element.id}>
//           <h1 className="Text" onClick={() => newDisplay(element)}>
//             {element.titol}
//           </h1>
//           <h5 className={element === textClicked ? textDisplay : "Text-none"}>
//             {element.text}
//           </h5>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
