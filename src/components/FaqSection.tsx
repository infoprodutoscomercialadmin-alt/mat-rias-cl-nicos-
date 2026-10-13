import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'O acesso é imediato?',
    answer:
      'Sim! Imediatamente após a confirmação do pagamento, você recebe os dados de acesso e o link direto no seu e-mail cadastrado. Pagamentos via Cartão ou PIX são aprovados em segundos.',
  },
  {
    question: 'Funciona no celular?',
    answer:
      'Sim, perfeitamente! Os materiais estão em formato PDF de alta resolução, otimizados para leitura em qualquer smartphone (Android e iPhone), tablet (iPad e Android) e computador (Windows e Mac). Você também pode imprimir se preferir.',
  },
  {
    question: 'Os materiais são digitais?',
    answer:
      'Sim! Todos os materiais da Estante são 100% digitais. Você pode baixar todos os arquivos para consultar offline onde e quando quiser, sem precisar carregar livros pesados.',
  },
  {
    question: 'Serve para qual curso?',
    answer:
      'É indicado principalmente para estudantes e profissionais de Biomedicina, Farmácia, Enfermagem, Ciências Biológicas e técnicos de Análises Clínicas que buscam dominar exames laboratoriais, rotina de bancada e interpretação diagnóstica.',
  },
  {
    question: 'Vou receber atualizações?',
    answer:
      'Sim! Ao adquirir o Pacote Completo, o seu acesso é VITALÍCIO. Isso significa que você terá direito a todas as melhorias e novos materiais adicionados à plataforma sem nunca precisar pagar nenhuma mensalidade ou renovação.',
  },
  {
    question: 'E se eu não gostar?',
    answer:
      'Você conta com a nossa Garantia Incondicional de 7 dias. Se por qualquer motivo achar que os materiais não superaram suas expectativas, basta nos enviar um e-mail ou mensagem e devolveremos 100% do seu dinheiro, sem burocracia.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Perguntas <span className="text-emerald-600">Frequentes</span>
          </h2>
          <p className="mt-2.5 text-slate-600 text-sm sm:text-base">
            Tire suas dúvidas rápidas sobre o funcionamento e acesso aos materiais.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white transition-colors duration-200"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-bold text-slate-800 text-sm sm:text-base hover:text-emerald-600 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-emerald-100 text-emerald-700' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/80 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
