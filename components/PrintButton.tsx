import React from 'react';
import { Printer } from './Icons';

export const PrintButton: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white p-4 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-400"
      title="Descargar PDF / Imprimir"
    >
      <Printer className="w-6 h-6" />
    </button>
  );
};