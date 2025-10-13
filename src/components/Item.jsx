import { Link } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import "./Item.css"
export default function Item(props) {
  console.log(props)
  return (
    <>
      <div className="Tarjeta-producto">
        <img src={props.imagen} className="producto-img" alt={props.title} />
        <h2>{props.titulo}</h2>
         <p className="producto-descripcion">{props.descripcion}</p>
        <p className="producto-price">${props.price}</p>
        <button className="producto-button">Agregar al carrito</button>
        <Link to ={`/Detail/${props.id}`}>
        <button>ver mas</button>
        </Link>
      </div>
    </>
  );
}
