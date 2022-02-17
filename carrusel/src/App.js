import "./App.css";

const image =
  "https://ep01.epimg.net/elviajero/imagenes/2017/06/01/actualidad/1496332304_582513_1496333053_noticia_normal.jpg";

function App() {
  return (
    <div className="container">
      <picture>
        <img className="carrusel" src={image} alt="img" />
      </picture>
    </div>
  );
}

export default App;
