import React from 'react';
import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-black text-white p-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-[#FFD700]" />
          <h1 className="text-2xl font-bold">Nova Studio</h1>
        </div>
        <nav className="flex gap-6">
          <button className="text-[#FFD700] hover:text-[#FFF] transition-colors">
            Clientes
          </button>
          <button className="text-[#FFD700] hover:text-[#FFF] transition-colors">
            Servicios
          </button>
          <button className="text-[#FFD700] hover:text-[#FFF] transition-colors">
            Reportes
          </button>
        </nav>
      </div>
    </header>
  );
}