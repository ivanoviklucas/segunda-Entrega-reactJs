import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../assets/data/firebase.js";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const cargarProducto = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id);
        setProducto(data);
      } catch (error) {
        console.error(error);
        setProducto(null);
      } finally {
        setLoading(false);
      }
    };

    cargarProducto();
  }, [id]);

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
    </div>
  );
}

