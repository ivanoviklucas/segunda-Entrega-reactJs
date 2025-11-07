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

function getItems() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ropaProductos);
    }, 500);
  });
}

export { getproductbyId, getItems };

