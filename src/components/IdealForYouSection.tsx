import React from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

interface IdealForYouSectionProps {
  onCtaClick: () => void;
}

const points = [
  'Estuda Biomedicina e quer dominar análises clínicas na teoria e no laboratório.',
  'Faz Farmácia e precisa entender com clareza os laudos e exames laboratoriais.',
  'Está na Enfermagem e quer aprimorar a interpretação de exames na prática clínica.',
  'Tem dificuldade para organizar a enxurrada de matérias da graduação e pós.',
  'Quer revisar conteúdos sem depender de PDFs aleatórios, desatualizados ou incompletos.',
  'Busca estudar de forma mais visual, prática e esquematizada com mapas mentais.',
  'Deseja ter uma biblioteca de consulta rápida sempre disponível na palma da mão (acesso vitalício).',
];

export const IdealForYouSection: React.FC<IdealForYouSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-8 md:mb-12">
          Ideal para você que...
        </h2>

        <div className="bg-slate-50/70 border border-slate-200/90 rounded-3xl p-6 sm:p-10 text-left shadow-xs mb-10 max-w-2xl mx-auto">
          <ul className="space-y-4 sm:space-y-5">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg px-9 py-4 rounded-xl shadow-lg shadow-emerald-600/25 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-emerald-200" />
            <span>Isso é para mim</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="mt-8 text-slate-500 italic text-sm sm:text-base font-serif max-w-lg">
            “Análises Clínicas é ampla. Mas com o material certo, tudo fica claro.”
          </p>
        </div>
      </div>
    </section>
  );
};
