import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeInfo, Globe, University } from 'lucide-react';

const ErasmusDestinations = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [activeMenu, setActiveMenu] = useState('destinos');

  const destinations = [
    {
      id: 1,
      country: 'Francia',
      city: 'París',
      university: 'Sorbonne Université',
      coordinates: { x: 250, y: 180 },
      programs: ['Ingeniería', 'Ciencias Sociales'],
      spots: 25,
      language: 'Francés',
      semester: 'Semestre Otoño/Primavera'
    },
    {
      id: 2,
      country: 'Alemania',
      city: 'Berlín',
      university: 'Humboldt Universität',
      coordinates: { x: 320, y: 140 },
      programs: ['Ciencias Políticas', 'Economía'],
      spots: 20,
      language: 'Alemán',
      semester: 'Semestre Primavera'
    },
    {
      id: 3,
      country: 'Italia',
      city: 'Milán',
      university: 'Politecnico di Milano',
      coordinates: { x: 280, y: 200 },
      programs: ['Arquitectura', 'Diseño'],
      spots: 15,
      language: 'Italiano',
      semester: 'Semestre Otoño'
    }
  ];

  const menuItems = [
    { id: 'destinos', label: 'Destinos', icon: Globe },
    { id: 'universidades', label: 'Universidades', icon: University },
    { id: 'informacion', label: 'Información', icon: BadgeInfo }
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* Top Menu */}
      <div className="bg-[#590688] text-white">
        <div className="container mx-auto flex items-center">
          <div className="text-xl font-bold py-4 mr-8">Erasmus Explorer</div>
          <div className="flex space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`flex items-center py-4 px-3 transition-colors ${
                  activeMenu === item.id 
                    ? 'border-b-4 border-white' 
                    : 'hover:bg-purple-700'
                }`}
                onClick={() => setActiveMenu(item.id)}
              >
                <item.icon className="mr-2 w-5 h-5" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden bg-gray-100">
        <div className="w-1/3 p-4 overflow-y-auto bg-white shadow-lg">
          <Card>
            <CardHeader className="bg-blue-600 text-white">
              <CardTitle className="flex items-center">
                <Globe className="mr-2" /> Destinos Erasmus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {destinations.map(dest => (
                  <div 
                    key={dest.id} 
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      selectedDestination?.id === dest.id 
                      ? 'bg-purple-100 border-purple-500' 
                      : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedDestination(dest)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-lg">{dest.city}, {dest.country}</h3>
                        <p className="text-sm text-gray-600">{dest.university}</p>
                      </div>
                      <University className="text-blue-600" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-2/3 p-4">
          <Card className="h-full">
            <CardHeader className="bg-blue-600 text-white">
              <CardTitle className="flex items-center">
                <BadgeInfo className="mr-2" /> 
                {selectedDestination 
                  ? `Detalles de ${selectedDestination.city}` 
                  : 'Selecciona un Destino'}
              </CardTitle>
            </CardHeader>
            <CardContent className="h-full relative">
              {/* Custom SVG Map */}
              <svg 
                viewBox="0 0 400 300" 
                className="w-full h-full border rounded-lg bg-gray-200"
              >
                <text 
                  x="200" 
                  y="20" 
                  textAnchor="middle" 
                  className="text-xl font-bold fill-gray-600"
                >
                  Mapa de Destinos Erasmus
                </text>
                
                {/* Country Outlines (Simplified) */}
                <path 
                  d="M250,180 Q270,160 290,170 Q310,180 320,140 Q330,100 280,90 Q230,80 250,180Z" 
                  fill="#e0e0e0" 
                  stroke="#a0a0a0" 
                  strokeWidth="2"
                />

                {/* Destination Markers */}
                {destinations.map(dest => (
                  <g 
                    key={dest.id} 
                    transform={`translate(${dest.coordinates.x}, ${dest.coordinates.y})`}
                    onClick={() => setSelectedDestination(dest)}
                    className="cursor-pointer hover:scale-110 transition-transform"
                  >
                    <circle 
                      r="10" 
                      fill={selectedDestination?.id === dest.id ? '#590688' : '#9333ea'}
                    />
                    <text 
                      x="15" 
                      y="5" 
                      className="text-sm fill-gray-700"
                    >
                      {dest.city}
                    </text>
                  </g>
                ))}
              </svg>

              {selectedDestination && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold flex items-center">
                        <University className="mr-2 text-blue-600" /> Universidad
                      </h4>
                      <p>{selectedDestination.university}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Programas</h4>
                      <p>{selectedDestination.programs.join(', ')}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Plazas Disponibles</h4>
                      <p>{selectedDestination.spots}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Idioma</h4>
                      <p>{selectedDestination.language}</p>
                    </div>
                    <div className="col-span-2">
                      <h4 className="font-semibold">Semestre</h4>
                      <p>{selectedDestination.semester}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ErasmusDestinations;