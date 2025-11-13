import { useContext, useState } from "react";
import "./FormularioDePago.css";
import { themeContext } from "./ccontext.jsx";
import Swal from "sweetalert2";
import { Phone } from "lucide-react";
export default function FormularioDePago() {
  const [FormData, SetFormData] = useState(
    { userName: "",
      email: "",
      Phone: "",

    }
  )
  const { confirmarCompra } = useContext(themeContext);
  function handlerSumit(evento) {
    evento.preventDefault();
    confirmarCompra()

  }
  function handlerChange(evento){
    const inputName = evento.target.name;
    const value = evento.target.value;
    const newFormData = {...FormData}
      newFormData[inputName] = value
      SetFormData(newFormData)
  }

  return (
    <>
      <form onSubmit={handlerSumit}>
        <div>
          <h3>Ingresa tus datos personas</h3>
          <label>
            Nombre y Apellido
            <input onChange={handlerChange} name="userName" placeholder="ingrese su nombre" required type="text" ></input>
          </label>

          <label htmlFor="">
            @gmail
            <input onChange={handlerChange} name="email" placeholder="ingrese su cuenta de gmail" required type="email" ></input>
          </label>
          <label htmlFor="">
            Telefono
            <input onChange={handlerChange} name="Phone" placeholder="ingrese su telefono de contacto" required type="tel" ></input>
          </label>
        </div>
        <button className="btn-comprar-carrito" type="submit">
          confirmarCompra
        </button>
      </form>
    </>
  );
}
