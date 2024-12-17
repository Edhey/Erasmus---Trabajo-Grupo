import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ErasmusDashboard from './ErasmusDashboard';
import ErasmusPrograms from './ErasmusPrograms';
import ErasmusContact from './ErasmusContact';
import ErasmusProfile from './ErasmusProfile';
import ErasmusDestinations from './ErasmusDestinations';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        {/* Barra de navegación */}
        <nav className="bg-purple-900 text-white p-4 flex space-x-4">
          <Link to="/" className="hover:bg-purple-700 px-3 py-2 rounded">Dashboard</Link>
          <Link to="/profile" className="hover:bg-purple-700 px-3 py-2 rounded">Perfil</Link>
          <Link to="/contact" className="hover:bg-purple-700 px-3 py-2 rounded">Programas</Link>
          <Link to="/destinations" className="hover:bg-purple-700 px-3 py-2 rounded">Destinos</Link>
          <Link to="/programs-filter" className="hover:bg-purple-700 px-3 py-2 rounded">Filtrar Programas</Link>
        </nav>

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<ErasmusDashboard />} />
          <Route path="/contact" element={<ErasmusContact />} />
          <Route path="/profile" element={<ErasmusProfile />} />
          <Route path="/destinations" element={<ErasmusDestinations />} />
          <Route path="/programs-filter" element={<ErasmusPrograms />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
