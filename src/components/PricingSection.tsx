import React from 'react';
import { Check, X, Shield, Sparkles, Infinity as InfinityIcon, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectBasic: () => void;
  onSelectComplete: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectBasic,
  onSelectComplete,
}) => {
  return (
    <section id="precos" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Acesso Imediato & Vitalício
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Escolha Seu <span className="text-emerald-600">Pacote</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Investimento único com acesso para sempre, sem cobranças mensais ou surpresas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
          {/* Card 1: Pacote Básico */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all duration-300">
            <div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-800">Pacote Básico</h3>
                <p className="text-xs text-slate-500 mt-1">Para quem deseja apenas uma introdução</p>
              </div>

              <div className="my-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">R$ 10,00</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">pagamento único • acesso vitalício básico</p>
              </div>

              <ul className="space-y-3 pt-6 border-t border-slate-100 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Acesso parcial aos materiais</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Conteúdos introdutórios selecionados</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Acesso imediato no e-mail</span>
                </li>
                <li className="flex items-start gap-2.5 text-slate-400">
                  <X className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                  <span>Sem os 5 bônus exclusivos</span>
                </li>
                <li className="flex items-start gap-2.5 text-slate-400">
                  <X className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                  <span>Sem atualizações futuras</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <button
                onClick={onSelectBasic}
                className="w-full py-3.5 px-6 rounded-xl border border-slate-300 hover:border-emerald-600 text-slate-700 hover:text-emerald-700 font-bold text-sm sm:text-base hover:bg-emerald-50/50 transition-all duration-200 cursor-pointer"
              >
                Quero o básico
              </button>
              <p className="text-[11px] text-slate-400 mt-2 font-medium">
                Temos uma oferta mais vantajosa ao lado 👉
              </p>
            </div>
          </div>

          {/* Card 2: Pacote Completo (Destaque) */}
          <div className="relative bg-gradient-to-b from-white via-white to-emerald-50/20 rounded-3xl p-6 sm:p-8 border-2 border-emerald-500 shadow-xl shadow-emerald-950/10 flex flex-col justify-between -translate-y-0 md:-translate-y-2">
            {/* Top Popular Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-black tracking-wide uppercase px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              O MAIS POPULAR
            </div>

            <div>
              <div className="mt-2 mb-4">
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                  +1.250 estudantes escolheram essa oferta
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">Pacote Completo</h3>
                <p className="text-xs text-slate-500 mt-0.5">A biblioteca definitiva para dominar análises clínicas</p>
              </div>

              <div className="my-5">
                <span className="text-xs text-slate-400 line-through">De R$ 147,00</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-4xl sm:text-5xl font-black text-emerald-600">R$ 27,90</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-semibold mt-1">
                  <InfinityIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>pagamento único • ACESSO VITALÍCIO</span>
                </div>
              </div>

              {/* Items list */}
              <ul className="space-y-2.5 pt-5 border-t border-slate-100 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-start gap-2.5 font-bold text-slate-900">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>+250 materiais organizados na Estante</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Hematologia Completa (Série vermelha e branca)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Microbiologia Completa & Antibiogramas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Urinálise Completa & Sedimento</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Parasitologia & Imunologia Clínica</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Bioquímica Clínica & Interpretação de Exames</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Mapas Mentais, Resumos e Materiais para Estágio</span>
                </li>

                {/* 5 Bonuses highlighted */}
                <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-200/80 space-y-1.5 my-2">
                  <li className="flex items-start gap-2 text-emerald-900 text-xs font-semibold">
                    <span className="text-emerald-600">🎁</span>
                    <span>BÔNUS 1: Atlas Hematológico Visual</span>
                  </li>
                  <li className="flex items-start gap-2 text-emerald-900 text-xs font-semibold">
                    <span className="text-emerald-600">🎁</span>
                    <span>BÔNUS 2: Mapa Completo das Bactérias</span>
                  </li>
                  <li className="flex items-start gap-2 text-emerald-900 text-xs font-semibold">
                    <span className="text-emerald-600">🎁</span>
                    <span>BÔNUS 3: Checklist de Urinálise</span>
                  </li>
                  <li className="flex items-start gap-2 text-emerald-900 text-xs font-semibold">
                    <span className="text-emerald-600">🎁</span>
                    <span>BÔNUS 4: Guia Rápido de Interpretação de Hemograma</span>
                  </li>
                  <li className="flex items-start gap-2 text-emerald-900 text-xs font-semibold">
                    <span className="text-emerald-600">🎁</span>
                    <span>BÔNUS 5: Protocolo de Estudo para Provas</span>
                  </li>
                </div>

                <li className="flex items-start gap-2.5 text-emerald-800 font-semibold">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Todas as atualizações futuras gratuitas</span>
                </li>
                <li className="flex items-start gap-2.5 text-emerald-800 font-semibold">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Garantia incondicional de 7 dias</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <button
                onClick={onSelectComplete}
                className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base sm:text-lg shadow-lg shadow-emerald-600/35 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>QUERO O COMPLETO!</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 mt-2.5 font-medium">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>Pagamento seguro • Acesso vitalício imediato</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
