import { useState } from "react";
import "./App.css";

const imageArr = [
  "https://ep01.epimg.net/elviajero/imagenes/2017/06/01/actualidad/1496332304_582513_1496333053_noticia_normal.jpg",
  "https://previews.123rf.com/images/ksena32/ksena321710/ksena32171000413/87933208-fondo-de-confeti-de-peque%C3%B1as-estrellas-de-colores.jpg",
  "https://previews.123rf.com/images/pwg89/pwg891509/pwg89150900025/45306031-hojas-peque%C3%B1as.jpg",
  "https://thumbs.dreamstime.com/z/bu%C3%B1uelo-lindo-del-kawai-rosa-con-el-desmoche-y-peque%C3%B1as-estrellas-objeto-separado-fondo-elemento-vector-para-su-embalaje-tarjeta-143012373.jpg",
];

function App() {
  const [imgClassName, setImgClassName] = useState("");
  const [imgClicked, setImgClicked] = useState(null);

  const newDisplay = (e) => {
    setImgClicked(e.target.src);
    if (imgClassName === "") {
      setImgClassName("full-screen");
    }
    if (imgClassName === "full-screen") {
      setImgClassName("");
    }
  };

  return (
    <div className="container">
      {imageArr.map((image) => (
        <picture key={image}>
          <img
            className={image === imgClicked ? imgClassName : ""}
            src={image}
            alt="img"
            width="150px"
            height="100px"
            onClick={newDisplay}
          ></img>
        </picture>
      ))}
    </div>
  );
}

export default App;
