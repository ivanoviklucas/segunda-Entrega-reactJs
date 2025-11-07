import { Link } from "react-router-dom";
<<<<<<< HEAD

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

=======
import "./Item.css"
export default function Item({ id, titulo, descripcion, price, categoria, imagen }) {
  return (
    <div className="Tarjeta-producto">
      <img src={imagen} alt={descripcion} className="producto-img" />
      <h2>{titulo}</h2>
      <p className="producto-descripcion">{descripcion}</p>
      <p className="producto-price">${price}</p>
      <Link to={`/productos/${categoria}/${id}`}>
        <button>Ver más</button>
      </Link>
    </div>
  );
}
>>>>>>> 93ff53d (iD de itemDetailsolucionado)
