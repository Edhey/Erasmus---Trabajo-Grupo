import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ErasmusContact = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-50 min-h-screen flex items-center justify-center">
      <Card className="w-full shadow-xl border-2 border-purple-100">
        <CardHeader className="bg-purple-700 text-white py-6">
          <CardTitle className="text-2xl font-bold text-center">
            ErasmusContact.tsx de Contacto Erasmus
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6 p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
              <Input 
                placeholder="Introduce tu nombre completo" 
                className="w-full border-gray-300 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
              <Input 
                type="email" 
                placeholder="ejemplo@universidad.es" 
                className="w-full border-gray-300 focus:ring-purple-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">País de Destino</label>
            <Select>
              <SelectTrigger className="focus:ring-purple-500">
                <SelectValue placeholder="Selecciona un país" />
              </SelectTrigger>
              <SelectContent>
                {['Alemania', 'Francia', 'Italia', 'Reino Unido', 'Países Bajos'].map(country => (
                  <SelectItem key={country} value={country}>{country}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Universidad de Interés</label>
            <Input 
              placeholder="Nombre de la universidad" 
              className="w-full border-gray-300 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Consulta o Mensaje</label>
            <textarea 
              rows={4} 
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Escribe aquí tus dudas o consultas sobre el programa Erasmus"
            />
          </div>
        </CardContent>

        <CardFooter className="bg-gray-100 p-6 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Los campos marcados con * son obligatorios
          </div>
          <Button className="bg-purple-700 hover:bg-purple-800 text-white">
            Enviar Consulta
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ErasmusContact;
