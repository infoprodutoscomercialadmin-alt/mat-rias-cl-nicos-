import React from 'react';
import { Zap, Laptop, Smartphone, Infinity as InfinityIcon, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-100/60 via-teal-50/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-extrabold text-slate-900 tracking-tight leading-[1.18] max-w-4xl mx-auto uppercase">
          +250 Materiais Práticos de Biomedicina para Dominar{' '}
          <span className="text-emerald-600 underline decoration-emerald-300 decoration-wavy decoration-2">
            Análises Clínicas
          </span>{' '}
          em Um Só Lugar.
        </h1>

        {/* Subheadline focused on target audience */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
          Para estudantes de <strong>Biomedicina</strong>, <strong>Enfermagem</strong>, <strong>Farmácia</strong> e <strong>Análises Clínicas</strong>. 
          Hematologia, Microbiologia, Urinálise, Parasitologia, Imunologia e Bioquímica Clínica organizados de forma visual, prática e fácil de estudar.
        </p>

        {/* Hero Mockup Image */}
        <div className="mt-8 md:mt-11 max-w-4xl mx-auto">
          <div className="relative p-2 sm:p-4 bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200/90 shadow-xl shadow-emerald-950/5 flex items-center justify-center overflow-hidden">
            <img
              src="https://i.imgur.com/vKHa4r9.png"
              alt="Mockup dos +250 Materiais Práticos de Biomedicina e Análises Clínicas"
              className="w-full h-auto max-h-[540px] object-contain rounded-2xl"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10 flex flex-col items-center">
          <button
            onClick={onCtaClick}
            className="relative inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg md:text-xl px-9 py-4 rounded-xl shadow-lg shadow-emerald-600/30 cursor-pointer"
          >
            <span>Quero Acessar Agora</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <span className="mt-2.5 text-xs text-slate-500 flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 inline" />
            Compra 100% segura com garantia incondicional de 7 dias
          </span>
        </div>

        {/* 4 Micro-badges */}
        <div className="mt-9 pt-6 border-t border-slate-200/80 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 text-slate-700 text-xs sm:text-sm font-medium">
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-white/60 border border-slate-200/60 shadow-xs">
            <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Acesso imediato</span>
          </div>

          <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-white/60 border border-slate-200/60 shadow-xs">
            <Laptop className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>100% digital</span>
          </div>

          <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-white/60 border border-slate-200/60 shadow-xs">
            <Smartphone className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Celular, tablet ou PC</span>
          </div>

          <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80 shadow-xs text-emerald-900 font-semibold">
            <InfinityIcon className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Acesso vitalício</span>
          </div>
        </div>
      </div>
    </section>
  );
};
