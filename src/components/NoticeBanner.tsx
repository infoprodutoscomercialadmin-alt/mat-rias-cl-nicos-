import React from 'react';

export const NoticeBanner: React.FC = () => {
  return (
    <div className="bg-black border-b border-zinc-800 text-emerald-400 py-2.5 px-4 text-center text-xs sm:text-sm font-bold tracking-wide">
      <p className="max-w-4xl mx-auto text-center leading-snug">
        🔥&nbsp;ATENÇÃO: OFERTA COM ACESSO VITALÍCIO POR TEMPO LIMITADO
      </p>
    </div>
  );
};
