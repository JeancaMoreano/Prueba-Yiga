import {collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import db from './firebaseConfig'; 

const obtenerProductos = async () => {
  const productosCollection = collection(db, 'productos');
  const productosSnapshot = await getDocs(productosCollection);
  const productos = productosSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return productos;
};

const agregarProducto = async (nuevoProducto) => {
  const productosCollection = collection(db, 'productos');
  await addDoc(productosCollection, nuevoProducto);
};

const actualizarProducto = async (id, productoActualizado) => {
  const productoDoc = doc(db, 'productos', id);
  await updateDoc(productoDoc, productoActualizado);
};

const eliminarProducto = async (id) => {
  const productoDoc = doc(db, 'productos', id);
  await deleteDoc(productoDoc);
};

export { obtenerProductos, agregarProducto, actualizarProducto, eliminarProducto };
