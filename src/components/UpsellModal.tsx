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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/80 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Compacto */}
      <div className="relative w-full max-w-[390px] sm:max-w-[420px] max-h-[92vh] flex flex-col bg-white rounded-2xl shadow-2xl border-2 border-emerald-500 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Urgency Header */}
        <div className="bg-gradient-to-r from-amber-500 via-rose-500 to-amber-500 text-white px-3 py-1.5 text-center text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1.5 shrink-0">
          <Flame className="w-3.5 h-3.5 fill-white" />
          <span>OPORTUNIDADE ÚNICA ANTES DE CONCLUIR</span>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-1.5 right-2.5 text-white/80 hover:text-white p-0.5 rounded-full hover:bg-black/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 sm:p-5 text-center overflow-y-auto">
          {/* Urgency Timer */}
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-[10px] sm:text-[11px] font-semibold mb-2">
            <Clock className="w-3 h-3 text-rose-600" />
            Oferta expira em: <span className="font-mono font-bold text-rose-600">{formattedTime}</span>
          </div>

          <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
            Leve o <span className="text-emerald-600">Pacote Completo</span> por apenas{' '}
            <span className="text-emerald-600">R$ 17,90</span>!
          </h3>

          <p className="mt-1 text-[11px] sm:text-xs text-slate-600 leading-snug">
            Por apenas <strong>+R$ 7,90</strong>, desbloqueie a biblioteca com +250 materiais e todos os 5 bônus com <strong>Acesso Vitalício</strong>!
          </p>

          {/* Pricing Highlight Box */}
          <div className="my-2.5 p-2 sm:p-2.5 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 text-center">
            <p className="text-[10px] text-slate-400 line-through">De R$ 27,90 (Preço normal do Completo)</p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-xs font-bold text-emerald-800">Por apenas</span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-600">R$ 17,90</span>
            </div>
            <p className="text-[10px] font-bold text-emerald-700">
              Economize R$ 10,00 e garanta Acesso Vitalício!
            </p>
          </div>

          {/* Benefits summary compacto */}
          <div className="text-left bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 mb-3 space-y-1.5 text-[11px] sm:text-xs text-slate-700 font-medium">
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span><strong>+250 Materiais</strong> em todas as áreas laboratoriais</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span><strong>Todos os 5 Bônus Exclusivos</strong> inclusos hoje</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span><strong>Acesso Vitalício</strong> (sem mensalidades)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Garantia incondicional de 7 dias</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-1.5">
            <button
              onClick={onAcceptSpecialOffer}
              className="w-full inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md shadow-emerald-600/30 cursor-pointer"
            >
              <span>SIM! QUERO O COMPLETO POR R$ 17,90</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onContinueBasic}
              className="w-full text-center text-[10px] sm:text-[11px] text-slate-400 hover:text-slate-600 py-1 transition-colors cursor-pointer underline underline-offset-2"
            >
              Não, prefiro continuar com o Pacote Básico por R$ 10,00
            </button>
          </div>

          <div className="mt-2 flex items-center justify-center gap-1 text-[10px] text-slate-400">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            Ambiente seguro e criptografado
          </div>
        </div>
      </div>
    </div>
  );
};
