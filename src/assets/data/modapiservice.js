import Item from "../../components/Item";
import ropaProductos from "./data";

function getproductbyId(idparams) {
  return new Promise((resolve) => {
    const productoBuscado = ropaProductos.find(
      (item) => String(item.id) === idparams
    );
    setTimeout(() => {
      resolve(productoBuscado), 500;
    });
  });
}
export default getproductbyId;
