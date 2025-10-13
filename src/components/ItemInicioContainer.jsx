import ItemListContainer from "./ItemListContainer";
import App from "../App";
import Item from "../components/Item.jsx";
import "./ItemInicioContainer.css";

function ItemInicioContainer({ greeting }) {
  return (
    <main className="contenedor-inicio">
      <h1 className="inicio-titulo">{greeting}</h1>
      <p className="inicio-parrafo">
        En Fulbi Clothes encontrarás una cuidada selección de ropa deportiva y
        urbana, diseñada para que te sientas cómodo y con estilo en cualquier
        ocasión.
      </p>
      <p className="inicio-parrafo">
        Nuestra misión es ofrecer prendas de calidad, con diseños modernos y
        materiales resistentes para acompañarte en tu día a día y en tus
        entrenamientos.
      </p>
      <p className="inicio-parrafo">
        Navegá por nuestro catálogo y descubrí las últimas tendencias en
        camisetas, pantalones, buzos y más. ¡Encontrá tu look ideal con Fulbi
        Clothes!
      </p>
      <p className="inicio-parrafo">¡Gracias por elegirnos como tu tienda de confianza!</p>
    </main>
  );
}

export default ItemInicioContainer;
