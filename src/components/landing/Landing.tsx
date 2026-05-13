import { Hero } from "./Hero";
import { PainSection } from "./PainSection";
import { WhatWeDo } from "./WhatWeDo";
import { NoChipBanner } from "./NoChipBanner";
import { WhyWhatsApp } from "./WhyWhatsApp";
import { ForWho } from "./ForWho";
import { HowItWorks } from "./HowItWorks";
import { Examples } from "./Examples";
import { Benefits } from "./Benefits";
import { Differentials } from "./Differentials";
import { Compliance } from "./Compliance";
import { MailingSection } from "./MailingSection";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { FloatingDecor } from "./FloatingDecor";

export function Landing() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <FloatingDecor />
      <div className="relative z-10">
        <Hero />
      <NoChipBanner />
      <PainSection />
      <WhatWeDo />
      <WhyWhatsApp />
      <ForWho />
      <HowItWorks />
      <Examples />
      <Benefits />
      <Differentials />
      <Compliance />
      <MailingSection />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
