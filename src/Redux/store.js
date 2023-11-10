import { createStore } from 'redux';
import productosReducer from './productosReducer';

const store = createStore(productosReducer);

export default store;
