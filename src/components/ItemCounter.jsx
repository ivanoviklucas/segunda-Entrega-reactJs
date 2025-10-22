import "./ItemCounter.css"
function ItemCounter({ cantidad, setCantidad }) {
  const aumentar = () => setCantidad(prev => prev + 1);
  const disminuir = () => setCantidad(prev => Math.max(1, prev - 1));

  return (
    <div className="contenedor-count">
      <button onClick={disminuir}>-</button>
      <p>{cantidad}</p>
      <button onClick={aumentar}>+</button>
    </div>
  );
}

export default ItemCounter;

