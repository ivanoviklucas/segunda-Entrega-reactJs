import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import ItemCounter from "./ItemCounter.jsx";
import getproductbyId from "../assets/data/modapiservice";
import { themeContext } from "./ccontext.jsx";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const [itemData, setItemData] = useState(null);
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);
  const { idparam } = useParams();
  const { agregarProductos,  } = useContext(themeContext);

  useEffect(() => {
    getproductbyId(idparam).then(res => {
      setItemData(res);
      setCantidadSeleccionada(1); // 🔹 reinicio cada vez que cambia el producto
    });
  }, [idparam]);

  if (!itemData) return <p>Cargando producto...</p>;

  const handleAgregar = () => {
    agregarProductos(itemData, Number(cantidadSeleccionada));
    setCantidadSeleccionada(1); // 🔹 reiniciamos el contador después de agregar
  };
  

  return (
    <div className="detalle-contenedor">
      <div className="Tarjeta-producto">
        <img
          src={itemData.imagen}
          className="producto-img"
          alt={itemData.descripcion}
        />
        <h2>{itemData.descripcion}</h2>
        <p className="producto-price">${itemData.precio}</p>

        <ItemCounter
          cantidad={cantidadSeleccionada}
          setCantidad={setCantidadSeleccionada}
        />

        <button className="producto-button" onClick={handleAgregar}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
