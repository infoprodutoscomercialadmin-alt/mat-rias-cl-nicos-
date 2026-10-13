import React from 'react';
import { Sparkles, Microscope, GraduationCap, HeartHandshake } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Photo Placeholder Column */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-white p-3 rounded-3xl border border-slate-200/90 shadow-md">
              <ImagePlaceholder
                title="Foto de Amanda Ribeiro"
                subtitle="Inserir foto profissional (Proporção ~4:5)"
                aspectRatio="aspect-[4/5]"
                minHeight="min-h-[340px]"
                tag="QUEM SOU EU"
              />
            </div>
          </div>

          {/* Bio & Details Column */}
          <div className="md:col-span-7 text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200/60 inline-block mb-3">
              QUEM SOU EU
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Olá, eu sou <span className="text-emerald-600">Amanda Ribeiro</span>
            </h2>

            <div className="mt-5 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Idealizei a <strong>Estante</strong> porque sei na prática o quanto é desafiador e exaustivo organizar tantos conteúdos complexos durante a graduação, pós-graduação e o estágio laboratorial.
              </p>
              <p>
                Reuni, em um só lugar, todos os materiais práticos que eu gostaria de ter tido quando estudava: ilustrados, claros, completos e 100% focados na prática do dia a dia.
              </p>
              <p>
                Meu objetivo é descomplicar a sua rotina de estudos e te dar total segurança para interpretar exames, dominar o laboratório e brilhar nas provas.
              </p>
            </div>

            {/* 3 Highlights */}
            <div className="mt-6 pt-6 border-t border-slate-200/80 space-y-3.5">
              <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span>Conteúdo pensado e estruturado por quem vive a área</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Microscope className="w-4 h-4" />
                </div>
                <span>Foco prático e visual aplicado em análises clínicas</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span>+1.250 estudantes e profissionais já aceleraram com a Estante</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
