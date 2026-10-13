import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-200/80 text-center text-slate-500 text-xs sm:text-sm">
      <div className="max-w-4xl mx-auto px-4 space-y-4">
        <h4 className="font-extrabold text-slate-900 text-base sm:text-lg">
          Estante de Análises Clínicas
        </h4>

        <p className="italic text-slate-500 font-serif max-w-md mx-auto">
          “Análises Clínicas é ampla. Mas com o material certo, tudo fica claro.”
        </p>

        <div className="flex items-center justify-center gap-4 text-xs text-slate-400 pt-2">
          <a href="#privacidade" onClick={(e) => e.preventDefault()} className="hover:text-emerald-600 transition-colors">
            Política de Privacidade
          </a>
          <span>•</span>
          <a href="#termos" onClick={(e) => e.preventDefault()} className="hover:text-emerald-600 transition-colors">
            Termos de Uso
          </a>
        </div>

        <p className="text-[11px] text-slate-400 pt-2">
          © 2026 Estante de Análises Clínicas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
