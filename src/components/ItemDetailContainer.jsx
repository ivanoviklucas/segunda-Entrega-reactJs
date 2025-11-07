<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../assets/data/firebase.js";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
=======
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../assets/data/firebase.js";
import { themeContext } from "./ccontext.jsx";
import ItemCounter from "./ItemCounter.jsx";
import "./ItemDetailContainer.css";

export default function ItemDetailContainer() {
  const { idparam } = useParams(); // coincide con la ruta
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cantidad, setCantidad] = useState(1);
  const { agregarProductos } = useContext(themeContext);

  useEffect(() => {
    if (!idparam) return;
>>>>>>> 93ff53d (iD de itemDetailsolucionado)

    const cargarProducto = async () => {
      try {
        setLoading(true);
<<<<<<< HEAD
        const data = await getProductById(id);
=======
        const data = await getProductById(idparam); // Buscar por ID real de Firestore
>>>>>>> 93ff53d (iD de itemDetailsolucionado)
        setProducto(data);
      } catch (error) {
        console.error(error);
        setProducto(null);
      } finally {
        setLoading(false);
      }
    };

    cargarProducto();
<<<<<<< HEAD
  }, [id]);
=======
  }, [idparam]);
>>>>>>> 93ff53d (iD de itemDetailsolucionado)

  if (loading) return <p>Cargando producto...</p>;
  if (!producto) return <p>No se encontró el producto.</p>;

  return (
    <div className="detalle-producto">
      <h2>{producto.titulo}</h2>
      <img
        src={producto.imagen}
        alt={producto.titulo}
        style={{ width: "300px", borderRadius: "8px" }}
      />
      <p>Precio: ${producto.precio}</p>
      <p>Categoría: {producto.categoria}</p>
      <p>Descripción: {producto.descripcion || "Sin descripción"}</p>
<<<<<<< HEAD
    </div>
  );
}

=======

      <ItemCounter cantidad={cantidad} setCantidad={setCantidad} />

      <button
        onClick={() => agregarProductos(producto, cantidad)}
        className="btn-agregar-carrito"
      >
        Agregar al carrito
      </button>
    </div>
  );
}
>>>>>>> 93ff53d (iD de itemDetailsolucionado)
