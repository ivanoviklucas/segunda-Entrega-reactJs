import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({ id, titulo, descripcion, price, categoria, imagen }) {
  return (
    <div className="Tarjeta-producto">
      <img src={imagen} alt={descripcion} className="producto-img" />
      <h2>{titulo}</h2>
      <p className="producto-descripcion">{descripcion}</p>
      <p className="producto-price">${price}</p>
      {/* Link al detalle usando ID real de Firestore */}
      <Link to={`/productos/${categoria}/${id}`}>
        <button>Ver más</button>
      </Link>
    </div>
  );
}
