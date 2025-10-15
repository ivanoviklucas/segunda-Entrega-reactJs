import "./ItemListContainer.css";
import Item from "./Item";
import ItemCount from './ItemCounter'
import Ropa from "../assets/data/data"
import ropaProductos from "../assets/data/data";
import { useParams } from "react-router-dom";
function ItemListContainer({greeting}) {
const {categoria} = useParams() 
  const RopaFiltrada = categoria
  ? ropaProductos.filter(r => r.categoria.toLowerCase() === categoria.toLowerCase())
  : ropaProductos;
const greetingDinamico = categoria ? `${categoria}`: "Todos los productos"
return (
    <>
      <h2>{greetingDinamico}</h2>
      <div className="contenedor-lista">
        {RopaFiltrada.map(item => <Item key={item.id} {...item} />)}
      </div>
      <ItemCount/>
    </>
  );
}

export default ItemListContainer;
