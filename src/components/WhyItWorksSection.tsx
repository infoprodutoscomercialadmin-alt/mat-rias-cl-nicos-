import React from 'react';
import { BookOpen, FolderKanban, Brain, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    icon: BookOpen,
    title: 'Aprendizado Visual',
    desc: 'Materiais ilustrados feitos para facilitar a compreensão até dos conteúdos laboratoriais mais complexos.',
  },
  {
    icon: FolderKanban,
    title: 'Organização Laboratorial',
    desc: 'Tudo separado metodicamente por categorias para você encontrar exatamente o que precisa em segundos.',
  },
  {
    icon: Brain,
    title: 'Fixação Mais Rápida',
    desc: 'Esquematizações e mapas mentais que ativam a retenção de longo prazo e evitam o tradicional "branco".',
  },
  {
    icon: CheckCircle2,
    title: 'Aplicação Prática',
    desc: 'Conteúdos 100% aplicáveis para brilhar nas provas da faculdade, no internato, estágios e na rotina do laboratório.',
  },
];

export const WhyItWorksSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Por que a Estante de Análises Clínicas <span className="text-emerald-600">funciona</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Um método de organização pensado na neurociência do aprendizado médico e biomédico.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-b from-slate-50/80 to-white border border-slate-200/70 hover:border-emerald-200 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100/80 shadow-xs">
                  <Icon className="w-7 h-7 stroke-[1.75]" />
                </div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
