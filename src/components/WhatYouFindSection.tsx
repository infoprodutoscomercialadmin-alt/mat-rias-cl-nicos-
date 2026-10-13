import React from 'react';
import { LayoutGrid, Eye, Zap, Stethoscope, RefreshCw, Layers } from 'lucide-react';

const features = [
  {
    icon: LayoutGrid,
    title: 'Organização Inteligente',
    description: 'Todos os materiais separados por áreas laboratoriais para facilitar seus estudos e economizar horas.',
  },
  {
    icon: Eye,
    title: 'Estudo Visual',
    description: 'Mapas mentais, resumos ilustrados e materiais esquematizados feitos para melhorar a memorização rápida.',
  },
  {
    icon: Zap,
    title: 'Revisão Rápida',
    description: 'Ideal para provas, estágios, rotina acadêmica diária e revisões de última hora sem desespero.',
  },
  {
    icon: Stethoscope,
    title: 'Aplicação Clínica',
    description: 'Entenda exames laboratoriais, valores de referência e interprete resultados com muito mais segurança e facilidade.',
  },
  {
    icon: RefreshCw,
    title: 'Conteúdo Atualizado',
    description: 'Materiais modernos, organizados e selecionados por quem realmente vive a rotina das análises clínicas.',
  },
  {
    icon: Layers,
    title: 'Facilidade de Acesso',
    description: 'Pare de acumular PDFs soltos e desorganizados. Tenha tudo centralizado em uma estante digital com acesso vitalício.',
  },
];

export const WhatYouFindSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            O que você encontra na <span className="text-emerald-600">Estante</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Tudo o que você precisa para dominar Análises Clínicas de verdade, do zero ao estágio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-100">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
