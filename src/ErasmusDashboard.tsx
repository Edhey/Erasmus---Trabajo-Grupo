import React, { useState } from 'react';
import { Home, GraduationCap, Globe, Book, Mail, Calendar, MapPin } from 'lucide-react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

// Definir tipos para los destinos
interface Destination {
  name: string;
  coordinates: [number, number];
  markerOffset: number;
  status: 'Disponible' | 'Próximamente' | 'En proceso';
}

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json';

const destinations: Destination[] = [
  { markerOffset: -15, name: 'Copenhague', coordinates: [12.5683, 55.6761], status: 'Disponible' },
  { markerOffset: 25, name: 'Manchester', coordinates: [-2.2426, 53.4808], status: 'Próximamente' },
  { markerOffset: 10, name: 'París', coordinates: [2.3522, 48.8566], status: 'Disponible' },
  { markerOffset: -10, name: 'Berlín', coordinates: [13.4050, 52.5200], status: 'En proceso' }
];

const ErasmusDashboard = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  return (
    <div className="bg-gray-50 min-h-screen flex">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-purple-900 text-white p-6">
        <div className="mb-10">
          <h1 className="text-2xl font-bold">Erasmus+</h1>
          <p className="text-sm text-purple-200">International Mobility Portal</p>
        </div>
        
        <nav>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 bg-purple-700 p-3 rounded-lg">
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </li>
            <li className="flex items-center space-x-3 hover:bg-purple-700 p-3 rounded-lg">
              <Globe className="w-5 h-5" />
              <span>Destinos</span>
            </li>
            <li className="flex items-center space-x-3 hover:bg-purple-700 p-3 rounded-lg">
              <GraduationCap className="w-5 h-5" />
              <span>Programas</span>
            </li>
            <li className="flex items-center space-x-3 hover:bg-purple-700 p-3 rounded-lg">
              <Book className="w-5 h-5" />
              <span>Documentación</span>
            </li>
            <li className="flex items-center space-x-3 hover:bg-purple-700 p-3 rounded-lg">
              <Calendar className="w-5 h-5" />
              <span>Convocatorias</span>
            </li>
            <li className="flex items-center space-x-3 hover:bg-purple-700 p-3 rounded-lg">
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
              <Globe className="w-5 h-5 text-purple-600" />
            </div>
            <div className="bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex flex-col items-end">
              <span className="font-semibold">María García</span>
              <span className="text-sm text-gray-500">Estudiante</span>
            </div>
          </div>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Mapamundi Interactivo */}
          <div className="bg-white shadow-md rounded-lg p-6 col-span-2 h-[500px]">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <MapPin className="mr-2 text-purple-600" /> Destinos Erasmus
            </h3>
            <ComposableMap
              projectionConfig={{
                rotate: [-10.0, 0, 0],
                center: [0, 20],
                scale: 147
              }}
              className="w-full h-full"
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#EAEAEC"
                      stroke="#D1D6DB"
                      strokeWidth={0.5}
                    />
                  ))
                }
              </Geographies>
              {destinations.map(({ name, coordinates, markerOffset, status }) => (
                <Marker 
                  key={name} 
                  coordinates={coordinates}
                  onClick={() => setSelectedDestination({ name, coordinates, markerOffset, status })}
                >
                  <circle 
                    r={10} 
                    fill={status === 'Disponible' ? '#10B981' : status === 'Próximamente' ? '#FBBF24' : '#6366F1'} 
                    stroke="#FFF" 
                    strokeWidth={2} 
                  />
                  <text
                    textAnchor="middle"
                    y={markerOffset}
                    style={{ fontFamily: "system-ui", fill: "#5D5D5D", fontSize: "12px" }}
                  >
                    {name}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
          </div>

          {/* Próximos Eventos */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Próximos Eventos</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-purple-600" />
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

            {/* Detalles de Destino */}
            {selectedDestination && (
              <div className="mt-6 bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold text-purple-800 mb-2">{selectedDestination.name}</h4>
                <p className="text-sm">
                  Estado: <span className={`
                    ${selectedDestination.status === 'Disponible' ? 'text-green-600' : 
                      selectedDestination.status === 'Próximamente' ? 'text-yellow-600' : 'text-purple-600'}
                    font-semibold
                  `}>
                    {selectedDestination.status}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErasmusDashboard;
