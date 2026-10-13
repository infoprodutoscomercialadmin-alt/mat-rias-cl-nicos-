import React from 'react';
import { X, CheckCircle, ShieldCheck, Lock, ExternalLink, ArrowRight } from 'lucide-react';

interface CheckoutFeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: {
    name: string;
    price: string;
    description: string;
    isSpecialOffer?: boolean;
  } | null;
}

export const CheckoutFeedbackModal: React.FC<CheckoutFeedbackModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
}) => {
  if (!isOpen || !selectedPlan) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-emerald-600 text-white p-5 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-black/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-2 text-white border border-white/20">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold">Redirecionamento de Checkout</h3>
          <p className="text-xs text-emerald-100 mt-1">Ambiente 100% protegido e criptografado</p>
        </div>

        <div className="p-6 text-center">
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 mb-5 text-left">
            <div className="flex justify-between items-baseline">
              <span className="font-extrabold text-slate-800 text-base">{selectedPlan.name}</span>
              <span className="text-xl font-black text-emerald-600">{selectedPlan.price}</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">{selectedPlan.description}</p>
            {selectedPlan.isSpecialOffer && (
              <span className="inline-block mt-2 text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-md">
                ⚡ DESCONTO ESPECIAL DE R$ 10 APLICADO!
              </span>
            )}
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mb-6">
            Aqui você pode plugar o seu link de checkout da plataforma desejada (Kiwify, Hotmart, Eduzz, etc.). 
            O botão abaixo simula o direcionamento direto para a tela de pagamento.
          </p>

          <button
            onClick={() => {
              alert(`Simulação: Redirecionando para o checkout do ${selectedPlan.name} (${selectedPlan.price}) com Acesso Vitalício.`);
              onClose();
            }}
            className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-md shadow-emerald-600/30 cursor-pointer"
          >
            <span>Prosseguir para Pagamento Seguro</span>
            <ExternalLink className="w-4 h-4" />
          </button>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Garantia incondicional de 7 dias com acesso vitalício</span>
          </div>
        </div>
      </div>
    </div>
  );
};
