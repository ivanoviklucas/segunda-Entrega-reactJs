import "./cardwidget.css";
import { useState, useContext } from "react";
import carritoCompra from "../assets/imagenes/carro-de-la-compra.png";
import { themeContext } from "./ccontext.jsx";
import { Trash2 } from "lucide-react";

function Cardwiget() {
  const [menu, setMenuCerrado] = useState(false);
  const {
    carrito,
    agregarProductos,
    quitarProducto,
    eliminarProducto,
    totalCarrito,
    vaciarCarrito,
    confirmarCompra,
  } = useContext(themeContext);

  return (
    <>
      {/* Icono del carrito */}
      <img
        className="img-carrito"
        src={carritoCompra}
        alt="carrito"
        onClick={() => setMenuCerrado(!menu)}
      />

      {/* Menú desplegable */}
      {menu && (
        <div className="carrito-menu">
          {carrito.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <>
              {/* Listado de productos */}
              {carrito.map((producto, index) => (
                <div key={index} className="carrito-item">
                  <p>{producto.descripcion}</p>
                  <p>Precio unitario: ${producto.precio}</p>
                  <p>Cantidad: {producto.cantidad}</p>
                  <p>Total: ${producto.precio * producto.cantidad}</p>

                  {/* Botones por producto */}
                  <div className="carrito-item-buttons">
                    <button onClick={() => agregarProductos(producto, 1)}>+</button>
                    <button onClick={() => quitarProducto(producto.id)}>-</button>
                    <button
                      className="eliminar"
                      onClick={() => eliminarProducto(producto.id)}
                    >
                      <Trash2 size={20} color="#FFD700" style={{ flexShrink: 0 }} />
                    </button>
                  </div>
                </div>
              ))}

              {/* Botones de vaciar y comprar (solo una vez abajo de todo) */}
              <p className="total-carrito">Total: ${totalCarrito()}</p>
              <button className="vaciar-carrito" onClick={() => vaciarCarrito()}>
                Vaciar carrito
              </button>
              <button className="btn-comprar-carrito" onClick={() => confirmarCompra()}>
                Comprar
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Cardwiget;
