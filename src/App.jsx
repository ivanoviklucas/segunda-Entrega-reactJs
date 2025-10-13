import "./App.css";
import Item from "./components/Item";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Cardwiget from "./components/cardwidget";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./components/ItemContactoContainer";
import { Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemInicioContainer from "./components/ItemInicioContainer";

function App() {
  return (
    <>
      <h1>Bienvenido a fulbi clothes</h1>
      <NavBar />
      <Routes>
        <Route
          path="*"
          element={<h2>error 404: no encontramos resultados</h2>}
        />
        <Route
          path="/"
          element={<ItemListContainer greeting="Bienvenido a fulbi clothes" />}
        />
        <Route
          path="/productos"
          element={<ItemListContainer greeting="Bienvenido a fulbi clothes" />}
        />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/Inicio" element={<ItemInicioContainer greeting="bienvenido"/>} />
        <Route path="/Detail/:idparam" element={<ItemDetailContainer />} />
      </Routes>
    </>
  );
}

export default App;
