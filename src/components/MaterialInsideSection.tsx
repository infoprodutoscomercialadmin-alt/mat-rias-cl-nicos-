import React from 'react';
import { ArrowRight } from 'lucide-react';

interface MaterialInsideSectionProps {
  onCtaClick: () => void;
}

// 1. Imagens do carrossel com movimento infinito para a ESQUERDA (12 imagens)
const leftImages = [
  'https://i.imgur.com/HIbyLPj.jpeg',
  'https://i.imgur.com/c8kPl0u.jpeg',
  'https://i.imgur.com/10lrWAc.jpeg',
  'https://i.imgur.com/d3slkQg.jpeg',
  'https://i.imgur.com/tDI7TxX.jpeg',
  'https://i.imgur.com/NO9gjQa.jpeg',
  'https://i.imgur.com/6Cff7LW.jpeg',
  'https://i.imgur.com/WVpdD3e.jpeg',
  'https://i.imgur.com/I5kX1bR.jpeg',
  'https://i.imgur.com/Q428yyR.jpeg',
  'https://i.imgur.com/C6K8ghA.jpeg',
  'https://i.imgur.com/kYrwNaa.jpeg',
];

// 2. Imagens do carrossel com movimento infinito para a DIREITA (8 imagens)
const rightImages = [
  'https://i.imgur.com/ORO4vhm.jpeg',
  'https://i.imgur.com/T3caeAj.jpeg',
  'https://i.imgur.com/7L9jA3N.jpeg',
  'https://i.imgur.com/87pPT7a.jpeg',
  'https://i.imgur.com/las4uON.jpeg',
  'https://i.imgur.com/yvQjTCN.jpeg',
  'https://i.imgur.com/6Ex2Bxi.jpeg',
  'https://i.imgur.com/Z7zVL2k.jpeg',
];

export const MaterialInsideSection: React.FC<MaterialInsideSectionProps> = ({ onCtaClick }) => {
  // Duplicar arrays para garantir loop contínuo e perfeito
  const duplicatedLeft = [...leftImages, ...leftImages];
  const duplicatedRight = [...rightImages, ...rightImages, ...rightImages];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center mb-10 md:mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Veja o material <span className="text-emerald-600">por dentro</span>
        </h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
          Pare de perder horas com PDFs soltos. Aqui você encontra tudo separado por áreas laboratoriais — visual, prático e fácil de estudar.
        </p>
      </div>

      {/* Carrossel Superior - Movimento infinito para a ESQUERDA (Apenas as imagens, sem pausa e sem lupa) */}
      <div className="relative w-full overflow-hidden mb-6 py-2 cursor-default">
        {/* Edge Gradient Mask for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-left flex gap-6 items-center">
          {duplicatedLeft.map((imgUrl, index) => (
            <div
              key={`left-${index}`}
              className="w-[280px] sm:w-[320px] md:w-[350px] shrink-0 rounded-2xl overflow-hidden border border-slate-200/90 shadow-md bg-white select-none pointer-events-none"
            >
              <img
                src={imgUrl}
                alt={`Material demonstrativo ${(index % leftImages.length) + 1}`}
                className="w-full h-auto object-cover block select-none pointer-events-none"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Carrossel Inferior - Movimento infinito para a DIREITA (Apenas as imagens, sem pausa e sem lupa) */}
      <div className="relative w-full overflow-hidden mb-12 py-2 cursor-default">
        {/* Edge Gradient Mask for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-right flex gap-6 items-center">
          {duplicatedRight.map((imgUrl, index) => (
            <div
              key={`right-${index}`}
              className="w-[280px] sm:w-[320px] md:w-[350px] shrink-0 rounded-2xl overflow-hidden border border-slate-200/90 shadow-md bg-white select-none pointer-events-none"
            >
              <img
                src={imgUrl}
                alt={`Material demonstrativo ${(index % rightImages.length) + 1}`}
                className="w-full h-auto object-cover block select-none pointer-events-none"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center px-4">
        <button
          onClick={onCtaClick}
          className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base sm:text-lg px-8 py-3.5 rounded-xl shadow-md shadow-emerald-600/25 cursor-pointer"
        >
          <span>Quero ver todos os materiais</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
