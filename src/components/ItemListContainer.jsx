import "./ItemListContainer.css";
function ItemListContainer() {
  const Zapatillas = {
    Adidas: {
      title: "Zapatillas Adidas Crazyflight 6 Mid",
      price: "7000",
      img: "https://www.freepik.es/foto-gratis/nuevo-par-zapatillas-blancas-aisladas-blanco_21124156.htm#fromView=search&page=1&position=4&uuid=3d3da048-92a3-426f-8f23-176b7589d441&query=zapatillas+adidas"
    },
    Nike: {
      title: "Zapatillas Nike Zoom Fly 6",
      price: "15000",
      img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/12345/nike-zoom-fly-6.jpg"
    }
  };

  return (
    <div className="contenedor-productos">
      <div className="tarjeta-producto">
        <img src={Zapatillas.Adidas.img} className="producto-img" alt={Zapatillas.Adidas.title} />
        <h2 className="producto-title">{Zapatillas.Adidas.title}</h2>
        <p className="producto-price">${Zapatillas.Adidas.price}</p>
        <button className="producto-button">Agregar al carrito</button>
      </div>

      <div className="tarjeta-producto">
        <img src={Zapatillas.Nike.img} className="producto-img" alt={Zapatillas.Nike.title} />
        <h2 className="producto-title">{Zapatillas.Nike.title}</h2>
        <p className="producto-price">${Zapatillas.Nike.price}</p>
        <button className="producto-button">Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemListContainer;

