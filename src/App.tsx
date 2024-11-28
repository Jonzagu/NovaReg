import React from 'react';
import { Header } from './components/Header';
import { ClientForm } from './components/ClientForm';
import { ServiceForm } from './components/ServiceForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Registro de Cliente</h2>
            <ClientForm onSubmit={console.log} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Registro de Servicio</h2>
            <ServiceForm clientId={1} onSubmit={console.log} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;