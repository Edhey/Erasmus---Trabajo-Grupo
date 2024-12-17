import React from 'react';
import { Home, GraduationCap, Globe, Book, Mail, Calendar } from 'lucide-react';

const ErasmusDashboard2= () => {
  return (
    <div className="bg-gray-50 min-h-screen flex">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-blue-900 text-white p-6">
        <div className="mb-10">
          <h1 className="text-2xl font-bold">Erasmus+</h1>
          <p className="text-sm text-blue-200">International Mobility Portal</p>
        </div>
        
        <nav>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 bg-blue-700 p-3 rounded-lg">
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </li>
            <li className="flex items-center space-x-3 hover:bg-blue-700 p-3 rounded-lg">
              <Globe className="w-5 h-5" />
              <span>Destinos</span>
            </li>
            <li className="flex items-center space-x-3 hover:bg-blue-700 p-3 rounded-lg">
              <GraduationCap className="w-5 h-5" />
              <span>Programas</span>
            </li>
            <li className="flex items-center space-x-3 hover:bg-blue-700 p-3 rounded-lg">
              <Book className="w-5 h-5" />
              <span>Documentación</span>
            </li>
            <li className="flex items-center space-x-3 hover:bg-blue-700 p-3 rounded-lg">
              <Calendar className="w-5 h-5" />
              <span>Convocatorias</span>
            </li>
            <li className="flex items-center space-x-3 hover:bg-blue-700 p-3 rounded-lg">
              <Mail className="w-5 h-5" />
              <span>Contacto</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">Dashboard Erasmus</h2>
          <div className="flex items-center space-x-4">
            <div className="bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center">
              <Globe className="w-5 h-5 text-blue-600" />
            </div>
            <div className="bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex flex-col items-end">
              <span className="font-semibold">María García</span>
              <span className="text-sm text-gray-500">Estudiante</span>
            </div>
          </div>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Programas Disponibles */}
          <div className="bg-white shadow-md rounded-lg p-6 col-span-2">
            <h3 className="text-xl font-semibold mb-4">Programas Disponibles</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h4 className="font-bold">Erasmus+ Europa</h4>
                  <p className="text-sm text-gray-600">Universidad de Copenhague, Dinamarca</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">Abierto</span>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h4 className="font-bold">Intercambio Reino Unido</h4>
                  <p className="text-sm text-gray-600">University of Manchester</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs">Próximamente</span>
              </div>
            </div>
          </div>

          {/* Próximos Eventos */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Próximos Eventos</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm font-semibold">Reunión Informativa</p>
                  <p className="text-xs text-gray-500">15 de Marzo, 10:00 AM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm font-semibold">Taller de Solicitudes</p>
                  <p className="text-xs text-gray-500">22 de Marzo, 14:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErasmusDashboard2
