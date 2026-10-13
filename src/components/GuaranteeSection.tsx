import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-50/70 border-t border-slate-100 text-center">
      <div className="max-w-2xl mx-auto px-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-3xl bg-emerald-50 text-emerald-600 border-2 border-emerald-200 flex items-center justify-center mb-6 shadow-xs">
          <ShieldCheck className="w-9 h-9 sm:w-11 sm:h-11 stroke-[1.75]" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Garantia Incondicional de 7 Dias
        </h2>

        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          Você terá <strong>7 dias de garantia incondicional</strong> para acessar o material, testar os resumos e avaliar tudo com calma no seu ritmo. Se por algum motivo não gostar, basta solicitar o reembolso integral dentro do prazo. Sem perguntas, sem burocracia.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-100/80 px-3.5 py-1.5 rounded-full">
          <span>🛡️ Seu risco é ZERO</span>
        </div>
      </div>
    </section>
  );
};
