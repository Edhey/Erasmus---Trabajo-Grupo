import React from 'react';
import { Home, BookOpen, MapPin, Globe, Mail, CheckCircle } from 'lucide-react';

const Formulario= () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Navigation */}
      <header className="text-white p-4 flex justify-between items-center" style={{backgroundColor: '#590688'}}>
        <div className="flex items-center">
          <h1 className="text-2xl font-bold mr-4">University Erasmus Portal</h1>
          <nav className="flex space-x-4">
            <a href="#" className="flex items-center hover:bg-opacity-10 hover:bg-white p-2 rounded">
              <Home className="mr-2" size={20} /> Inicio
            </a>
            <a href="#" className="flex items-center hover:bg-opacity-10 hover:bg-white p-2 rounded">
              <BookOpen className="mr-2" size={20} /> Programas
            </a>
            <a href="#" className="flex items-center hover:bg-opacity-10 hover:bg-white p-2 rounded">
              <Globe className="mr-2" size={20} /> Destinos
            </a>
          </nav>
        </div>
        <div className="flex items-center">
          <button className="bg-white text-[#590688] px-4 py-2 rounded mr-2">
            Iniciar Sesión
          </button>
          <button style={{backgroundColor: '#590688', borderColor: 'white', borderWidth: '1px'}} className="text-white px-4 py-2 rounded">
            Registrarse
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow p-8 grid grid-cols-3 gap-6">
        {/* Left Sidebar - Program Filters */}
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-semibold mb-4">Filtrar Programas</h2>
          <div className="space-y-3">
            <div>
              <label className="block mb-2">País de Destino</label>
              <select className="w-full p-2 border rounded">
                <option>Todos los Países</option>
                <option>España</option>
                <option>Francia</option>
                <option>Alemania</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Área de Estudio</label>
              <select className="w-full p-2 border rounded">
                <option>Todas las Áreas</option>
                <option>Ingeniería</option>
                <option>Ciencias Sociales</option>
                <option>Humanidades</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Duración</label>
              <select className="w-full p-2 border rounded">
                <option>Cualquier Duración</option>
                <option>1 Semestre</option>
                <option>Año Completo</option>
              </select>
            </div>
          </div>
        </div>

        {/* Central Content - Program List */}
        <div className="col-span-2 space-y-4">
          <div className="bg-white shadow-md rounded p-6">
            <h2 className="text-2xl font-bold mb-4">Programas Disponibles</h2>
            
            {/* Individual Program Card */}
            <div className="border-b pb-4 mb-4 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">Erasmus+ en Alemania</h3>
                <p className="text-gray-600">Universidad de Munich</p>
                <div className="flex items-center mt-2 space-x-3">
                  <span className="flex items-center">
                    <MapPin size={16} style={{color: '#590688'}} className="mr-1" /> Alemania
                  </span>
                  <span className="flex items-center">
                    <BookOpen size={16} className="mr-1 text-green-500" /> Ingeniería
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded">
                  Plazas Disponibles
                </span>
                <button 
                  style={{backgroundColor: '#590688'}} 
                  className="mt-2 text-white px-4 py-2 rounded hover:opacity-90"
                >
                  Ver Detalles
                </button>
              </div>
            </div>

            {/* Additional Program Card */}
            <div className="border-b pb-4 mb-4 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">Erasmus+ en Francia</h3>
                <p className="text-gray-600">Sorbonne Université</p>
                <div className="flex items-center mt-2 space-x-3">
                  <span className="flex items-center">
                    <MapPin size={16} style={{color: '#590688'}} className="mr-1" /> Francia
                  </span>
                  <span className="flex items-center">
                    <BookOpen size={16} className="mr-1 text-green-500" /> Ciencias Sociales
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded">
                  Casi Completo
                </span>
                <button 
                  style={{backgroundColor: '#590688'}} 
                  className="mt-2 text-white px-4 py-2 rounded hover:opacity-90"
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{backgroundColor: '#590688'}} className="text-white p-6 grid grid-cols-3 gap-4">
        <div>
          <h4 className="font-bold mb-3">Contacto</h4>
          <p className="flex items-center mb-2">
            <Mail size={16} className="mr-2" /> erasmus@universidad.es
          </p>
          <p>+34 123 456 789</p>
        </div>
        <div>
          <h4 className="font-bold mb-3">Requisitos</h4>
          <ul>
            <li className="flex items-center mb-2">
              <CheckCircle size={16} className="mr-2 text-green-500" /> Nivel B2 de Idioma
            </li>
            <li className="flex items-center">
              <CheckCircle size={16} className="mr-2 text-green-500" /> Promedio Académico
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Síguenos</h4>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-purple-300">Facebook</a>
            <a href="#" className="hover:text-purple-300">Instagram</a>
            <a href="#" className="hover:text-purple-300">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Formulario
