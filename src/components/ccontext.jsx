import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

// Creamos el context
const themeContext = createContext();

function ThemeProvider({ children }) {
  // Recupera el carrito del localStorage (si existe)
  let carritoguardado = localStorage.getItem("carrito");
  let valorInicial;

  if (carritoguardado) {
    valorInicial = JSON.parse(carritoguardado).map((p) => ({
      precio: Number(p.precio),
      cantidad: Number(p.cantidad),
      descripcion: p.descripcion,
    }));
  } else {
    valorInicial = [];
  }

  const [carrito, setCarrito] = useState(valorInicial);

  // Guarda el carrito actualizado en localStorage
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  // ➕ Agregar productos
  const agregarProductos = (itemData, cantidad) => {
    setCarrito((prevCarrito) => {
      const index = prevCarrito.findIndex((p) => p.id === itemData.id);
      if (index !== -1) {
        const nuevoCarrito = [...prevCarrito];
        nuevoCarrito[index] = {
          ...nuevoCarrito[index],
          cantidad: nuevoCarrito[index].cantidad + cantidad,
        };
        return nuevoCarrito;
      } else {
        return [...prevCarrito, { ...itemData, cantidad }];
      }
    });
  };

  // ➖ Quitar un producto
  const quitarProducto = (itemId) => {
    setCarrito((prevCarrito) =>
      prevCarrito
        .map((p) =>
          p.id === itemId ? { ...p, cantidad: Math.max(p.cantidad - 1, 0) } : p
        )
        .filter((p) => p.cantidad > 0)
    );
  };

  // 🗑️ Eliminar producto completamente
  const eliminarProducto = (itemId) => {
    setCarrito((prevCarrito) => prevCarrito.filter((p) => p.id !== itemId));
  };

  // 💰 Calcular total
  const totalCarrito = () => {
    return carrito.reduce((total, producto) => total + producto.cantidad * producto.precio, 0);
  };

  // 🧹 Vaciar carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // 🛒 Confirmar compra
  const confirmarCompra = () => {
    // 1️⃣ Mostrar resumen primero
    Swal.fire({
      title: "Resumen de tu compra",
      html: `<ul class="sweet-list">
        ${carrito
          .map((p) => `<li>${p.descripcion} - $${p.precio} x ${p.cantidad}</li>`)
          .join("")}
      </ul>
      <p>Total: $${totalCarrito()}</p>`,
      icon: "info",
      confirmButtonText: "Aceptar",
      background: "rgba(20, 20, 20, 0.85)",
      color: "#FFD700",
      scrollbarPadding: false,
      backdrop: false,
      customClass: {
        confirmButton: "swal-btn-confirm",
      },
    }).then(() => {
      // 2️⃣ Preguntar si desea confirmar la compra después de ver el resumen
      Swal.fire({
        title: `El total de la compra es de $${totalCarrito()} ¿Desea confirmar la compra?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, comprar",
        cancelButtonText: "No, cancelar",
        reverseButtons: true,
        background: "rgba(20, 20, 20, 0.85)",
        color: "#FFD700",
        scrollbarPadding: false,
        backdrop: false,
        customClass: {
          confirmButton: "swal-btn-confirm",
          cancelButton: "swal-btn-cancel",
          title: "swal-title",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          // 3️⃣ Confirmación final de la compra
          Swal.fire({
            title: "Compra confirmada",
            text: "¡Gracias por tu compra!",
            icon: "success",
            confirmButtonText: "Aceptar",
            background: "rgba(20, 20, 20, 0.85)",
            color: "#FFD700",
            backdrop: false,
            customClass: {
              confirmButton: "swal-btn-confirm",
            },
          }).then(() => vaciarCarrito()); // ✅ Vaciar carrito después de confirmar
        }
      });
    });
  };

  // Retornamos el Provider con todas las funciones y el carrito
  return (
    <themeContext.Provider
      value={{
        carrito,
        agregarProductos,
        quitarProducto,
        eliminarProducto,
        totalCarrito,
        vaciarCarrito,
        confirmarCompra,
      }}
    >
      {children}
    </themeContext.Provider>
  );
}

export { themeContext };
export default ThemeProvider;
