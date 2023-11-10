import React, { useState, useEffect } from 'react';
import { obtenerProductos, agregarProducto, actualizarProducto, eliminarProducto } from './api';
import {
  Container,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const App = () => {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({ nombre: '', stock: 0 });
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      const productosObtenidos = await obtenerProductos();
      setProductos(productosObtenidos);
    };

    obtenerDatos();
  }, []);

  const handleAgregarProducto = async () => {
    await agregarProducto(nuevoProducto);
    const productosObtenidos = await obtenerProductos();
    setProductos(productosObtenidos);
    setNuevoProducto({ nombre: '', stock: 0 });
  };

  const handleEditarProducto = (producto) => {
    setProductoSeleccionado(producto);
    setNuevoProducto({ nombre: producto.nombre, stock: producto.stock });
  };

  const handleActualizarProducto = async () => {
    if (!productoSeleccionado) {
      return;
    }

    await actualizarProducto(productoSeleccionado.id, nuevoProducto);
    const productosObtenidos = await obtenerProductos();
    setProductos(productosObtenidos);
    setProductoSeleccionado(null);
    setNuevoProducto({ nombre: '', stock: 0 });
  };

  const handleEliminarProducto = async (id) => {
    await eliminarProducto(id);
    const productosObtenidos = await obtenerProductos();
    setProductos(productosObtenidos);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Inventario de Productos
      </Typography>
      <TextField
        label="Nombre del Producto"
        variant="outlined"
        fullWidth
        margin="normal"
        value={nuevoProducto.nombre}
        onChange={(e) => setNuevoProducto({ ...nuevoProducto, nombre: e.target.value.toLowerCase() })}
      />
      <TextField
        label="Stock"
        variant="outlined"
        fullWidth
        margin="normal"
        type="number"
        value={nuevoProducto.stock}
        onChange={(e) => setNuevoProducto({ ...nuevoProducto, stock: parseInt(e.target.value, 10) })}
      />
      <Button variant="contained" color="primary" onClick={handleAgregarProducto} style={{ marginTop: 10 }}>
        Agregar Producto
      </Button>
      <Button variant="contained" color="primary" onClick={handleActualizarProducto} style={{ marginLeft:10,  marginTop: 10 }}>
        Actualizar producto
      </Button>
      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productos.map((producto) => (
              <TableRow key={producto.id}>
                <TableCell>{producto.id}</TableCell>
                <TableCell>{producto.nombre}</TableCell>
                <TableCell>{producto.stock}</TableCell>
                <TableCell>
                  <IconButton aria-label="Editar" onClick={() => handleEditarProducto(producto)}>
                    <Edit />
                  </IconButton>
                  <IconButton aria-label="Eliminar" onClick={() => handleEliminarProducto(producto.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </Container>
  );
};

export default App;
