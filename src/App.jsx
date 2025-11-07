import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import ItemInicioContainer from "./components/ItemInicioContainer.jsx"
import Contacto from "./components/ItemContactoContainer.jsx"
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "./components/ccontext.jsx";

// Import correcto de productos


function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Inicio */}
          <Route path="/" element={<ItemInicioContainer/>} />

          {/* Todos los productos */}
          <Route
            path="/productos"
            element={<ItemListContainer greeting="Todos los productos" />}
          />

          {/* Filtrado por categoría */}
          <Route
            path="/productos/:categoria"
            element={<ItemListContainer greeting="Productos filtrados" />}
          />

          {/* Detalle de producto por ID */}
          <Route
            path="/productos/:categoria/:idparam"
            element={<ItemDetailContainer />}
          />

          {/* Contacto */}
          <Route path="/contacto" element={<Contacto/>} />

          {/* 404 */}
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
