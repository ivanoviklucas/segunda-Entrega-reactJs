import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import ropaProductos from "./data.js"; // tu archivo con productos

// 🔹 Configuración Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCmWi0KQsZXvnPTKQY_iDBFXa9LQksuQYA",
  authDomain: "tienda-ropa-reactjs.firebaseapp.com",
  projectId: "tienda-ropa-reactjs",
  storageBucket: "tienda-ropa-reactjs.firebasestorage.app",
  messagingSenderId: "971595314305",
  appId: "1:971595314305:web:f74d91c013fda105064980",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ SUBIR PRODUCTOS (solo si no existen)
export async function exportarProductosAFirebase() {
  try {
    const ref = collection(db, "productos");
    const snapshot = await getDocs(ref);

    // Evitar duplicados
    if (!snapshot.empty) {
      console.log("⚠️ Ya existen productos en la base de datos.");
      return;
    }

    // Subir productos desde data.js
    for (const producto of ropaProductos) {
      await addDoc(ref, producto);
    }

    console.log("✅ Productos subidos correctamente.");
  } catch (error) {
    console.error("❌ Error subiendo productos:", error);
  }
}

// ✅ OBTENER TODOS LOS PRODUCTOS (o por categoría)
export async function getItems(categoria = null) {
  try {
    const productosRef = collection(db, "productos");
    let snapshot;

    if (categoria) {
      const q = query(productosRef, where("categoria", "==", categoria));
      snapshot = await getDocs(q);
    } else {
      snapshot = await getDocs(productosRef);
    }

    const productos = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return productos;
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    return [];
  }
}

// ✅ OBTENER UN PRODUCTO POR ID
export async function getProductById(id) {
  try {
    const refProducto = doc(db, "productos", id);
    const snap = await getDoc(refProducto);

    if (snap.exists()) {
      return { id: snap.id, ...snap.data() };
    } else {
      console.warn("⚠️ No se encontró el producto con ID:", id);
      return null;
    }
  } catch (error) {
    console.error("Error obteniendo producto:", error);
    return null;
  }
}
