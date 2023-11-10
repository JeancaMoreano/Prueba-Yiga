const initialState = {
  productos: [],
};

const productosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OBTENER_PRODUCTOS':
      return {
        ...state,
        productos: action.payload,
      };
  }
};

export default productosReducer;
