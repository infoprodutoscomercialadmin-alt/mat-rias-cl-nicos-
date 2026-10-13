import React, { useState, useEffect } from 'react';
import { X, Flame, Check, ShieldCheck, ArrowRight, Clock } from 'lucide-react';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptSpecialOffer: () => void;
  onContinueBasic: () => void;
}

export const UpsellModal: React.FC<UpsellModalProps> = ({
  isOpen,
  onClose,
  onAcceptSpecialOffer,
  onContinueBasic,
}) => {
  // Countdown timer for urgency (10 minutes)
  const [secondsLeft, setSecondsLeft] = useState(599);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border-2 border-emerald-500 overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Urgency Header */}
        <div className="bg-gradient-to-r from-amber-500 via-rose-500 to-amber-500 text-white px-4 py-2.5 text-center text-xs sm:text-sm font-bold flex items-center justify-center gap-2">
          <Flame className="w-4 h-4 fill-white animate-bounce" />
          <span>ESPERE! OPORTUNIDADE ÚNICA ANTES DE CONCLUIR</span>
          <button
            onClick={onClose}
            className="absolute top-2.5 right-3 text-white/80 hover:text-white p-1 rounded-full hover:bg-black/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8 text-center">
          {/* Urgency Timer */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold mb-4">
            <Clock className="w-3.5 h-3.5" />
            Oferta expira em: <span className="font-mono font-bold text-rose-600">{formattedTime}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
            Leve o <span className="text-emerald-600">Pacote Completo</span> por apenas{' '}
            <span className="text-emerald-600">R$ 17,90</span>!
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Você selecionou o Pacote Básico (R$ 10,00 com materiais limitados). Mas por apenas{' '}
            <strong>R$ 7,90 a mais</strong>, você desbloqueia a biblioteca completa com todos os +250 materiais e todos os 5 bônus exclusivos!
          </p>

          {/* Pricing Highlight Box */}
          <div className="my-5 p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 text-center">
            <p className="text-xs text-slate-500 line-through">De R$ 27,90 (Preço normal do Completo)</p>
            <div className="flex items-baseline justify-center gap-1 mt-0.5">
              <span className="text-sm font-bold text-emerald-800">Por apenas</span>
              <span className="text-3xl sm:text-4xl font-extrabold text-emerald-600">R$ 17,90</span>
            </div>
            <p className="text-[11px] font-semibold text-emerald-700 mt-1">
              🎉 Você economiza R$ 10,00 e ganha Acesso Vitalício a TUDO!
            </p>
          </div>

          {/* Benefits summary */}
          <div className="text-left bg-slate-50 p-4 rounded-xl border border-slate-200/80 mb-6 space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>+250 Materiais</strong> em todas as áreas laboratoriais</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>Todos os 5 Bônus Exclusivos</strong> inclusos hoje</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>Acesso Vitalício</strong> (sem mensalidades ou renovações)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Garantia incondicional de 7 dias ou seu dinheiro de volta</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <button
              onClick={onAcceptSpecialOffer}
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base sm:text-lg py-4 px-6 rounded-xl shadow-lg shadow-emerald-600/30 cursor-pointer"
            >
              <span>SIM! QUERO O COMPLETO POR R$ 17,90</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onContinueBasic}
              className="w-full text-center text-xs text-slate-400 hover:text-slate-600 py-1.5 transition-colors cursor-pointer underline underline-offset-2"
            >
              Não, prefiro continuar com o Pacote Básico por R$ 10,00
            </button>
          </div>

          <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Ambiente seguro e criptografado
          </div>
        </div>
      </div>
    </div>
  );
};
