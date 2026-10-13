import React from 'react';
import { Star } from 'lucide-react';

const testimonialImages = [
  'https://i.imgur.com/kCTDynX.jpeg',
  'https://i.imgur.com/0f5l1Di.jpeg',
  'https://i.imgur.com/zFTXm1f.jpeg',
  'https://i.imgur.com/MXEHcx5.jpeg',
  'https://i.imgur.com/UsNywsz.jpeg',
  'https://i.imgur.com/PYyBEEH.jpeg',
];

export const TestimonialsSection: React.FC = () => {
  // Duplicar a lista para garantir o loop contínuo e sem interrupções
  const duplicated = [
    ...testimonialImages,
    ...testimonialImages,
    ...testimonialImages,
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 text-center mb-10 md:mb-14">
        {/* Google Reviews Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs mb-5">
          <span className="font-bold text-[#4285F4] text-base">G</span>
          <span className="font-semibold text-slate-800 text-xs sm:text-sm">Excelente</span>
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-xs font-bold text-slate-700">5.0</span>
          <span className="text-slate-300">|</span>
          <span className="text-xs text-slate-500 font-medium">+1.250 estudantes satisfeitos</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          O que dizem os alunos da <span className="text-emerald-600">Estante</span>
        </h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-base">
          Prints reais de mensagens recebidas de estudantes e profissionais de todo o Brasil.
        </p>
      </div>

      {/* Infinite Horizontal Carousel (Apenas as imagens, sem pausa e sem lupa) */}
      <div className="relative w-full overflow-hidden py-4 cursor-default">
        {/* Edge Gradient Mask for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-testimonials flex gap-6 items-center">
          {duplicated.map((imgUrl, index) => (
            <div
              key={`testimonial-${index}`}
              className="w-[260px] sm:w-[300px] md:w-[320px] shrink-0 rounded-2xl overflow-hidden border border-slate-200/90 shadow-md bg-white select-none pointer-events-none"
            >
              <img
                src={imgUrl}
                alt={`Depoimento de aluno ${(index % testimonialImages.length) + 1}`}
                className="w-full h-auto object-cover block select-none pointer-events-none"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
