import { useState } from "react";
import "./ItemCounter.css";

function ItemCount() {
  const [Contador, setContador] = useState(1);

  const restar = () => { if (Contador > 0) setContador(Contador - 1); };
  const sumar  = () => { if (Contador < 10) setContador(Contador + 1); };

  return (
    <div className="contenedor-count"> {/* clase añadida */}
      <button onClick={restar}>-</button>
      <p>{Contador}</p>
      <button onClick={sumar}>+</button>
    </div>
  );
}

export default ItemCount;
