import React, { useState } from 'react';
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

// Links Oficiais de Checkout Zuptos
const CHECKOUT_URLS = {
  complete: 'https://app.zuptos.com.br/checkout/10cbb509bde9bf13',
  popup: 'https://app.zuptos.com.br/checkout/f1b3420a1d383e74',
  basic: 'https://app.zuptos.com.br/checkout/a1a5a3427164bc4c',
};

export default function App() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  const scrollToPricing = () => {
    const pricingElement = document.getElementById('precos');
    if (pricingElement) {
      pricingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Ao clicar no básico de R$ 10,00, abre o pop-up com a oferta exclusiva
  const handleSelectBasic = () => {
    setIsUpsellOpen(true);
  };

  // Redirecionamento direto para o Plano Completo (R$ 27,90)
  const handleSelectComplete = () => {
    window.location.href = CHECKOUT_URLS.complete;
  };

  // Redirecionamento quando aceita a oferta exclusiva do Pop-up (R$ 17,90)
  const handleAcceptUpsell = () => {
    setIsUpsellOpen(false);
    window.location.href = CHECKOUT_URLS.popup;
  };

  // Redirecionamento quando o usuário insiste em ficar com o Plano Básico (R$ 10,00)
  const handleContinueBasic = () => {
    setIsUpsellOpen(false);
    window.location.href = CHECKOUT_URLS.basic;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. Barra de Aviso Superior */}
      <NoticeBanner />

      <main className="flex-1">
        {/* 2. Hero Section com Headline e Mockup */}
        <HeroSection onCtaClick={scrollToPricing} />

        {/* 3. Veja o material por dentro (Dois carrosséis infinitos: esquerda e direita) */}
        <MaterialInsideSection onCtaClick={scrollToPricing} />

        {/* 4. O que você encontra na Estante (Grid de 6 itens) */}
        <WhatYouFindSection />

        {/* 5. Por que a Estante funciona (4 pilares) */}
        <WhyItWorksSection />

        {/* 6. Depoimentos (Carrossel infinito de prints reais) */}
        <TestimonialsSection />

        {/* 7. Ideal para você que... (Checklist) */}
        <IdealForYouSection onCtaClick={scrollToPricing} />

        {/* 8. Somente hoje você recebe bônus exclusivos (5 bônus) */}
        <BonusSection onCtaClick={scrollToPricing} />

        {/* 9. Escolha Seu Pacote (Links de Checkout integrados) */}
        <PricingSection
          onSelectBasic={handleSelectBasic}
          onSelectComplete={handleSelectComplete}
        />

        {/* 10. Quem sou eu (Amanda Ribeiro) */}
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
    </div>
  );
}
