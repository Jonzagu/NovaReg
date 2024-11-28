import React, { useState } from 'react';

interface ClientFormProps {
  onSubmit: (data: {
    name: string;
    phone: string;
    birthDate: string;
  }) => void;
}

export function ClientForm({ onSubmit }: ClientFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    birthDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', phone: '', birthDate: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nombre</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Teléfono</label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Fecha de Nacimiento
        </label>
        <input
          type="date"
          required
          value={formData.birthDate}
          onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700]"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-black text-[#FFD700] py-2 px-4 rounded-md hover:bg-gray-900 transition-colors"
      >
        Registrar Cliente
      </button>
    </form>
  );
}