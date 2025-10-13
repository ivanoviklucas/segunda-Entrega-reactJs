import "./ItemListContainer.css";
import Item from "./Item";
import ItemCount from './ItemCounter'
import Ropa from "../assets/data/data"

function ItemListContainer({greeting}) {
  return (
    <>
      <h2>{greeting}</h2>
      <div className="contenedor-lista">
        {Ropa.map(item => <Item key={item.id} {...item} />)}
      </div>
      <ItemCount/>
    </>
  );
}

export default ItemListContainer;
