import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Cardwiget from "./components/cardwidget";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./components/ItemContactoContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemInicioContainer from "./components/ItemInicioContainer";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider.js";
import { themeContext } from "./components/ccontext.jsx";
// ✅ Importamos nuestro ThemeProvider correcto
import ThemeProvider from "./components/ccontext.jsx";

function App() {
  return (
    // ✅ Usamos nuestro ThemeProvider que ya tiene value={{ carrito, agregarAlCarrito }}
    <ThemeProvider>
      <BrowserRouter>
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
          <Route path="/productos/:categoria/:idparam" element={<ItemDetailContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer greeting="Productos filtrados" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
