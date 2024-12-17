import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ErasmusDashboard from './ErasmusDashboard';
import ErasmusDashboard2 from './ErasmusDashboard2';
import ErasmusPrograms from './ErasmusPrograms';
import Formulario from './Formulario';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        {/* Barra de navegación */}
        <nav className="bg-purple-900 text-white p-4 flex space-x-4">
          <Link to="/" className="hover:bg-purple-700 px-3 py-2 rounded">Dashboard</Link>
          <Link to="/programs" className="hover:bg-purple-700 px-3 py-2 rounded">Programas</Link>
          <Link to="/destinations" className="hover:bg-purple-700 px-3 py-2 rounded">Destinos</Link>
          <Link to="/programs-filter" className="hover:bg-purple-700 px-3 py-2 rounded">Filtrar Programas</Link>
        </nav>

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<ErasmusDashboard />} />
          <Route path="/programs" element={<Formulario />} />
          <Route path="/destinations" element={<ErasmusDashboard2 />} />
          <Route path="/programs-filter" element={<ErasmusPrograms />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
