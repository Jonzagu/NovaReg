import React, { useState } from 'react';

interface ServiceFormProps {
  clientId: number;
  onSubmit: (data: {
    serviceName: string;
    date: string;
    price: number;
  }) => void;
}

export function ServiceForm({ clientId, onSubmit }: ServiceFormProps) {
  const [formData, setFormData] = useState({
    serviceName: '',
    date: '',
    price: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      serviceName: formData.serviceName,
      date: formData.date,
      price: Number(formData.price),
    });
    setFormData({ serviceName: '', date: '', price: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Servicio</label>
        <input
          type="text"
          required
          value={formData.serviceName}
          onChange={(e) => setFormData({ ...formData, serviceName: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Fecha</label>
        <input
          type="date"
          required
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Precio</label>
        <input
          type="number"
          required
          min="0"
          step="0.01"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring-[#FFD700]"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-black text-[#FFD700] py-2 px-4 rounded-md hover:bg-gray-900 transition-colors"
      >
        Registrar Servicio
      </button>
    </form>
  );
}