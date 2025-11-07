import { Link } from "react-router-dom";

export default function Item({ id, titulo, descripcion, price, categoria, imagen }) {
  return (
    <div className="item-card">
      <img src={imagen} alt={descripcion} className="item-img" />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <p>${price}</p>
      {/* Link al detalle usando ID real de Firestore */}
      <Link to={`/productos/${categoria}/${id}`}>Ver más</Link>
    </div>
  );
}

