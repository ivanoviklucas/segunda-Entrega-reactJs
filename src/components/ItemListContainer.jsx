import "./ItemListContainer.css";
import adidasImg from "../assets/imagenes/adidas-5418998_640.jpg";
import zapatillasNike from "../assets/imagenes/zapatillasNike.png";


function ItemListContainer() {
  const Zapatillas = {
    Adidas: {
      title: "Zapatillas Adidas Crazyflight 6 Md",
      price: "7000",
      img: adidasImg   // 👉 acá uso la variable importada
    },
    Nike: {
      title: "Zapatillas Nike Zoom Fly 6",
      price: "15000",
      img: zapatillasNike
    }
  };

  return (
    <div className="contenedor-productos">
      <div className="tarjeta-producto">
        <img
          src={Zapatillas.Adidas.img}
          className="producto-img"
          alt={Zapatillas.Adidas.title}
        />
        <h2 className="producto-title">{Zapatillas.Adidas.title}</h2>
        <p className="producto-price">${Zapatillas.Adidas.price}</p>
        <button className="producto-button">Agregar al carrito</button>
      </div>

      <div className="tarjeta-producto">
        <img
          src={Zapatillas.Nike.img}
          className="producto-img"
          alt={Zapatillas.Nike.title}
        />
        <h2 className="producto-title">{Zapatillas.Nike.title}</h2>
        <p className="producto-price">${Zapatillas.Nike.price}</p>
        <button className="producto-button">Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemListContainer;
