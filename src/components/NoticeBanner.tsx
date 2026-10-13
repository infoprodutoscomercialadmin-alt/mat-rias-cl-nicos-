import React from 'react';
import { Sparkles, Clock } from 'lucide-react';

export const NoticeBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border-b border-emerald-100 text-emerald-900 py-2.5 px-4 text-center text-xs md:text-sm font-medium sticky top-0 z-40 backdrop-blur-md bg-opacity-95 shadow-xs">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 animate-pulse" />
        <span>
          <strong className="font-semibold text-emerald-800">Atenção:</strong> Oferta especial com acesso vitalício válida por tempo limitado. Garanta agora antes que expire.
        </span>
        <Clock className="w-3.5 h-3.5 text-emerald-600 hidden sm:inline-block shrink-0" />
      </div>
    </div>
  );
};
