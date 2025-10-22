import { createContext, useState } from "react";

const themeContext = createContext();

function ThemeProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  // ➕ Agregar productos al carrito
  const agregarProductos = (itemData, cantidad) => {
    setCarrito(prevCarrito => {
      const index = prevCarrito.findIndex(p => p.id === itemData.id);

      if (index !== -1) {
        const nuevoCarrito = [...prevCarrito];
        nuevoCarrito[index] = {
          ...nuevoCarrito[index],
          cantidad: nuevoCarrito[index].cantidad + cantidad
        };
        return nuevoCarrito;
      } else {
        return [...prevCarrito, { ...itemData, cantidad }];
      }
    });
  };

  // ➖ Quitar una unidad del producto
  const quitarProducto = (itemId) => {
    setCarrito(prevCarrito =>
      prevCarrito
        .map(p =>
          p.id === itemId
            ? { ...p, cantidad: Math.max(p.cantidad - 1, 0) }
            : p
        )
        .filter(p => p.cantidad > 0)
    );
  };

  // 🗑️ Eliminar producto completo
  const eliminarProducto = (itemId) => {
    setCarrito(prevCarrito =>
      prevCarrito.filter(p => p.id !== itemId)
    );
  };

  // Calcular total del carrito usando forEach
  const totalCarrito = () => {
    let total = 0;
    carrito.forEach(producto => {
      total += producto.cantidad * producto.precio;
    });
    return total;
  };

  return (
    <themeContext.Provider value={{ carrito, agregarProductos, quitarProducto, eliminarProducto, totalCarrito }}>
      {children}
    </themeContext.Provider>
  );
}

export { themeContext };
export default ThemeProvider;
