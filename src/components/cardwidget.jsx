import "./cardwidget.css";
import { useState, useContext } from "react";
import carritoCompra from "../assets/imagenes/carro-de-la-compra.png";
import { themeContext } from "./ccontext.jsx"; // ajusta la ruta
import { Trash2 } from "lucide-react";

function Cardwiget() {
  const [menu, setMenuCerrado] = useState(false);
  const {
    carrito,
    agregarProductos,
    quitarProducto,
    eliminarProducto,
    totalCarrito,
  } = useContext(themeContext);

  return (
    <>
      {/* Icono del carrito */}
      <img className="img-carrito"
        src={carritoCompra}
        onClick={() => setMenuCerrado(!menu)}
        alt="carrito"
      />

      {/* Menu desplegable */}
      {menu && (
        <div className="carrito-menu">
          {carrito.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            carrito.map((producto, index, cantidad) => {
              // Debug: ver qué producto llega
              console.log("Producto en carrito:", producto, cantidad);

              return (
                <div key={index} className="carrito-item">
                  <p>{producto.descripcion}</p>
                  <p>Precio unitario: ${producto.precio}</p>
                  <p>
                    Cantidad: {producto.cantidad} x {producto.descripcion}
                  </p>
                  <p>Total: ${producto.precio * producto.cantidad}</p>
                  <button onClick={() => agregarProductos(producto, 1)}>
                    +
                  </button>
                  <button onClick={() => quitarProducto(producto.id)}>-</button>
                  <button onClick={() => eliminarProducto(producto.id)}>
                    <Trash2 size={20} />
                  </button>
                </div>
              );
            })
          )}
          <p>total: {totalCarrito()} </p>
        </div>
      )}
    </>
  );
}

export default Cardwiget;
