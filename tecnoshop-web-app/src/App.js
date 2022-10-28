import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet} from 'react-router-dom';
import CrearProductos from './components/CrearProductos/CrearProductos';
import Header from './components/Header/Header';
import ModificarProductos from './components/ModificarProductos/ModificarProductos';
import ListarProductos from './components/ListarProductos/ListarProductos';
import ListaVentas from './components/ListaVentas/ListaVentas';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
        <Route path="/admin/crear-productos" element={<CrearProductos />} />
        <Route path="/admin/lista-productos" element={<ListarProductos />} />
        <Route path="/admin/modificar-productos" element={<ModificarProductos />} />
        <Route path="/admin/lista-ventas" element={<ListaVentas />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
