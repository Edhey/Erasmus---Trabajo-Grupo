import React from 'react';
import { User, MapPin, Calendar, Book, Mail, Globe } from 'lucide-react';

const ErasmusProfile = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-4xl grid grid-cols-3 overflow-hidden">
        {/* Sidebar Profile Section */}
        <div className="col-span-1 bg-purple-600 text-white p-6 flex flex-col items-center">
          <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
            <User size={64} className="text-gray-500" />
          </div>
          <h2 className="text-xl font-bold mb-2">Alumno Erasmus</h2>
          <p className="text-sm text-purple-100 mb-4">alu2024123456</p>
          
          <div className="w-full space-y-3">
            <div className="flex items-center">
              <Globe className="mr-2" size={20} />
              <span>España</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" size={20} />
              <span>Universidad de Sevilla</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2" size={20} />
              <span>2024/2025</span>
            </div>
          </div>
        </div>
        
        {/* Main Content Section */}
        <div className="col-span-2 p-8">
          <div className="grid grid-cols-2 gap-6">
            {/* Información Personal */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Mail className="mr-2" size={20} />
                Información Personal
              </h3>
              <div className="space-y-2">
                <p><strong>Nombre:</strong> María González Pérez</p>
                <p><strong>Email:</strong> maria.gonzalez@estudante.us.es</p>
                <p><strong>Teléfono:</strong> +34 654 321 987</p>
              </div>
            </div>
            
            {/* Detalles Académicos */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Book className="mr-2" size={20} />
                Detalles Académicos
              </h3>
              <div className="space-y-2">
                <p><strong>Titulación:</strong> Ingeniería Informática</p>
                <p><strong>Universidad Origen:</strong> Universidad de Sevilla</p>
                <p><strong>Universidad Destino:</strong> TU Delft, Países Bajos</p>
              </div>
            </div>
          </div>
          
          {/* Estado de la Solicitud */}
          <div className="mt-6 bg-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Estado de la Solicitud Erasmus</h3>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                <span>Solicitud Aprobada</span>
              </div>
              <div className="text-sm text-gray-600">
                Fecha de Aprobación: 15/03/2024
              </div>
            </div>
          </div>
          
          {/* Acciones */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
              Editar Perfil
            </button>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Documentos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErasmusProfile;
