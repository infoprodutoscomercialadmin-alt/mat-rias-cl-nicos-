import React from 'react';

export const NoticeBanner: React.FC = () => {
  return (
    <div className="bg-red-600 border-b border-red-700 text-white py-2.5 px-4 text-center text-xs sm:text-sm font-bold tracking-wide shadow-xs">
      <p className="max-w-4xl mx-auto text-center leading-snug">
        🔥&nbsp;ATENÇÃO: OFERTA COM ACESSO VITALÍCIO POR TEMPO LIMITADO
      </p>
    </div>
  );
};
