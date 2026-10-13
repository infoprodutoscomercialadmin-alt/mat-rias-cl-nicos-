import React, { useState, useEffect } from 'react';
import { NoticeBanner } from './components/NoticeBanner';
import { HeroSection } from './components/HeroSection';
import { MaterialInsideSection } from './components/MaterialInsideSection';
import { WhatYouFindSection } from './components/WhatYouFindSection';
import { WhyItWorksSection } from './components/WhyItWorksSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { IdealForYouSection } from './components/IdealForYouSection';
import { BonusSection } from './components/BonusSection';
import { PricingSection } from './components/PricingSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { Footer } from './components/Footer';
import { UpsellModal } from './components/UpsellModal';
import { CheckoutFeedbackModal } from './components/CheckoutFeedbackModal';

export default function App() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: string;
    description: string;
    isSpecialOffer?: boolean;
  } | null>(null);

  const scrollToPricing = () => {
    const pricingElement = document.getElementById('precos');
    if (pricingElement) {
      pricingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectBasic = () => {
    // Requisito 6: No botão do Pacote Básico de R$ 10,00, abre o pop-up com a oferta de R$ 17,90
    setIsUpsellOpen(true);
  };

  const handleSelectComplete = () => {
    setSelectedPlan({
      name: 'Pacote Completo - Estante de Análises Clínicas',
      price: 'R$ 27,90',
      description: 'Acesso Vitalício completo a +250 materiais + Todos os 5 Bônus exclusivos.',
    });
    setCheckoutModalOpen(true);
  };

  const handleAcceptUpsell = () => {
    setIsUpsellOpen(false);
    setSelectedPlan({
      name: 'Pacote Completo (Oferta Especial)',
      price: 'R$ 17,90',
      description: 'Acesso Vitalício completo com desconto especial de R$ 10,00!',
      isSpecialOffer: true,
    });
    setCheckoutModalOpen(true);
  };

  const handleContinueBasic = () => {
    setIsUpsellOpen(false);
    setSelectedPlan({
      name: 'Pacote Básico',
      price: 'R$ 10,00',
      description: 'Acesso parcial aos materiais introdutórios de análises clínicas.',
    });
    setCheckoutModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. Barra de Aviso Superior */}
      <NoticeBanner />

      <main className="flex-1">
        {/* 2. Hero Section com Headline Atualizada e Placeholder Central */}
        <HeroSection onCtaClick={scrollToPricing} />

        {/* 3. Veja o material por dentro (Dois carrosséis infinitos: esquerda e direita) */}
        <MaterialInsideSection onCtaClick={scrollToPricing} />

        {/* 4. O que você encontra na Estante (Grid de 6 itens) */}
        <WhatYouFindSection />

        {/* 5. Por que a Estante funciona (4 pilares) */}
        <WhyItWorksSection />

        {/* 6. Depoimentos (Carrossel infinito de prints WhatsApp estilo celular) */}
        <TestimonialsSection />

        {/* 7. Ideal para você que... (Checklist de dores e desejos) */}
        <IdealForYouSection onCtaClick={scrollToPricing} />

        {/* 8. Somente hoje você recebe bônus exclusivos (5 bônus) */}
        <BonusSection onCtaClick={scrollToPricing} />

        {/* 9. Escolha Seu Pacote (Preços: Básico R$ 10 e Completo R$ 27,90) */}
        <PricingSection
          onSelectBasic={handleSelectBasic}
          onSelectComplete={handleSelectComplete}
        />

        {/* 10. Quem sou eu (Amanda Ribeiro + Foto vazia) */}
        <AboutSection />

        {/* 11. Perguntas Frequentes (FAQ Accordion) */}
        <FaqSection />

        {/* 12. Garantia Incondicional de 7 dias */}
        <GuaranteeSection />
      </main>

      {/* 13. Rodapé */}
      <Footer />

      {/* Pop-up de Upsell ao Clicar no Básico de R$ 10,00 */}
      <UpsellModal
        isOpen={isUpsellOpen}
        onClose={() => setIsUpsellOpen(false)}
        onAcceptSpecialOffer={handleAcceptUpsell}
        onContinueBasic={handleContinueBasic}
      />

      {/* Feedback/Checkout Redirection Modal */}
      <CheckoutFeedbackModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}
