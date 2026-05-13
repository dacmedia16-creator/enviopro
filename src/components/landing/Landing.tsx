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
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";

export function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
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
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
