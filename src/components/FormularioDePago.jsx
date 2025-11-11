import { useContext } from "react";
import "./FormularioDePago.css";
import { themeContext } from "./ccontext.jsx";
import Swal from "sweetalert2";
export default function FormularioDePago() {
  const { confirmarCompra } = useContext(themeContext);
  function handlerSumit(evento) {
    evento.preventDefault();
    confirmarCompra();
  }

  return (
    <>
      <form onSubmit={handlerSumit}>
        <div>
          <h3>Ingresa tus datos personas</h3>
          <label>
            Nombre y Apellido
            <input placeholder="ingrese su nombre"></input>
          </label>

          <label htmlFor="">
            @gmail
            <input placeholder="ingrese su cuenta de gmail"></input>
          </label>
          <label htmlFor="">
            Telefono
            <input placeholder="ingrese su telefono de contacto"></input>
          </label>
        </div>
        <button className="btn-comprar-carrito" type="submit">
          confirmarCompra
        </button>
      </form>
    </>
  );
}
