import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCounter";
import { useEffect, useState } from "react";
import getproductbyId from "../assets/data/modapiservice";
function ItemDetailContainer(props) {
    const [itemData, setitemData]=useState({});
    const {idparam} = useParams();
    useEffect(() => {
 getproductbyId(idparam).then(res => setitemData(res))
}, []);

    console.log("props",props)
    console.log (idparam)
  return (
    <>
      <div className="Tarjeta-producto">
        <img src={itemData.imagen} className="producto-img" alt={itemData.descripcion} />
        <h2>{itemData.descripcion}</h2>
        <p className="producto-price">${itemData.precio}</p>
        <ItemCount/>
        <button className="producto-button">Agregar al carrito</button>
      </div>
    </>
  );}

  export default ItemDetailContainer;