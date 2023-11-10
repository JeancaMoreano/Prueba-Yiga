export const obtenerProductos = (productos) => {
  return {
    type: 'OBTENER_PRODUCTOS',
    payload: productos,
  };
};
