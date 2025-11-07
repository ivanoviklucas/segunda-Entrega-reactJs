import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getItems, exportarProductosAFirebase } from "../assets/data/firebase.js";
import "./ItemListContainer.css";

export default function ItemListContainer({ greeting }) {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarProductos = async () => {
      setLoading(true);
      try {
        const cat = categoria ? categoria.toLowerCase() : null;
        const data = await getItems(cat); // Traemos productos desde Firestore
        setProductos(data);
      } catch (err) {
        console.error("Error cargando productos:", err);
      } finally {
        setLoading(false);
      }
    };
    cargarProductos();
  }, [categoria]);

  const handleExportar = async () => {
    setLoading(true);
    try {
      await exportarProductosAFirebase();
      const data = await getItems();
      setProductos(data);
    } catch (err) {
      console.error("Error exportando productos:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="contenedor-lista">
      <h2>{greeting}</h2>

      {!categoria && (
        <button onClick={handleExportar} className="btn-cargar">
          📦 Subir productos a Firebase
        </button>
      )}

      {productos.length === 0 ? (
        <p>No hay productos disponibles.</p>
      ) : (
        productos.map((p) => {
          const categoriaUrl = p.categoria ? p.categoria.toLowerCase() : "sin-categoria";
          return (
            <div key={p.id} className="Tarjeta-producto">
              <img src={p.imagen} alt={p.titulo} className="producto-img" />
              <h2>{p.titulo}</h2>
              <p className="producto-descripcion">{p.descripcion}</p>
              <p className="producto-price">${p.precio}</p>
              {/* Link al detalle usando el ID real de Firestore */}
              <Link to={`/productos/${categoriaUrl}/${p.id}`}>
                <button>Ver más</button>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
}
