import React from 'react';
import { Gift, ArrowRight, Check, Sparkles } from 'lucide-react';

interface BonusSectionProps {
  onCtaClick: () => void;
}

const bonuses = [
  {
    tag: 'BÔNUS INCLUSO',
    originalPrice: 'R$ 14,90',
    title: 'Atlas Hematológico Visual',
    description: 'Guia ilustrado com lâminas de células sanguíneas, séries hematológicas e principais alterações patológicas.',
    imageUrl: 'https://i.imgur.com/WG8Pu9N.jpeg',
  },
  {
    tag: 'BÔNUS INCLUSO',
    originalPrice: 'R$ 14,90',
    title: 'Mapa Completo das Bactérias',
    description: 'Resumo visual e esquemático para facilitar a diferenciação gram-positiva/negativa e memorização microbiológica.',
    imageUrl: 'https://i.imgur.com/V03TPDn.jpeg',
  },
  {
    tag: 'BÔNUS INCLUSO',
    originalPrice: 'R$ 14,90',
    title: 'Checklist de Urinálise',
    description: 'Material rápido de bancada para revisão da fita reagente, elementos anormais e interpretação do sedimento urinário.',
    imageUrl: 'https://i.imgur.com/zuXfxWB.jpeg',
  },
  {
    tag: 'BÔNUS INCLUSO',
    originalPrice: 'R$ 19,90',
    title: 'Guia Rápido de Interpretação de Hemograma',
    description: 'Entenda os principais parâmetros laboratoriais (VCM, HCM, RDW, leucograma e plaquetas) cobrados na faculdade e estágio.',
    imageUrl: 'https://i.imgur.com/YjspU12.jpeg',
  },
  {
    tag: 'BÔNUS INCLUSO',
    originalPrice: 'R$ 18,90',
    title: 'Protocolo de Estudo para Provas de Análises Clínicas',
    description: 'Roteiro prático com cronograma e mapas mentais para fixar os conteúdos mais cobrados e gabaritar as avaliações.',
    imageUrl: 'https://i.imgur.com/g1FpDjW.jpeg',
  },
];

export const BonusSection: React.FC<BonusSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-3">
            <Gift className="w-3.5 h-3.5" />
            Vantagem Exclusiva
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Somente hoje você recebe <span className="text-emerald-600">bônus exclusivos</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Materiais organizados por área para aprofundar seus estudos em Análises Clínicas e acelerar seu aprendizado.
          </p>
        </div>

        {/* 5 Bonuses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {bonuses.slice(0, 3).map((bonus, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="relative mb-4 bg-slate-50/80 rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center border border-slate-200/80">
                  <img
                    src={bonus.imageUrl}
                    alt={bonus.title}
                    className="w-full h-full object-contain p-2"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-emerald-600/95 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-xs uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {bonus.tag}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs text-slate-400 line-through">{bonus.originalPrice}</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                    GRÁTIS
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base mb-2">{bonus.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{bonus.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                <Check className="w-3.5 h-3.5" /> Incluso no Pacote Completo
              </div>
            </div>
          ))}

          {/* Bottom 2 bonuses centered */}
          <div className="sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto w-full">
            {bonuses.slice(3, 5).map((bonus, index) => (
              <div
                key={index + 3}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="relative mb-4 bg-slate-50/80 rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center border border-slate-200/80">
                    <img
                      src={bonus.imageUrl}
                      alt={bonus.title}
                      className="w-full h-full object-contain p-2"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-emerald-600/95 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-xs uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {bonus.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs text-slate-400 line-through">{bonus.originalPrice}</span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                      GRÁTIS
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base mb-2">{bonus.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{bonus.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                  <Check className="w-3.5 h-3.5" /> Incluso no Pacote Completo
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bonus Value Banner */}
        <div className="max-w-xl mx-auto text-center bg-white border border-emerald-200 rounded-2xl p-6 sm:p-7 shadow-sm">
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Valor total somado de todos os 5 bônus: <span className="line-through text-slate-400">R$ 83,50</span>
          </p>
          <p className="text-xl sm:text-2xl font-extrabold text-emerald-700 mt-1">
            HOJE: R$ 0,00 (100% GRÁTIS)
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Liberados imediatamente ao adquirir o Pacote Completo nesta página com acesso vitalício.
          </p>

          <button
            onClick={onCtaClick}
            className="mt-5 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-md shadow-emerald-600/25 cursor-pointer"
          >
            <span>Quero garantir todos os bônus</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
