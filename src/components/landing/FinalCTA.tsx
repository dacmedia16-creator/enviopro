import { CTAButton } from "./CTAButton";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-radial-glow" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-black leading-tight tracking-tight text-balance md:text-6xl">
          Ative sua base de contatos pelo WhatsApp{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">com estratégia.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
          Transforme clientes e leads autorizados em novas conversas comerciais com campanhas
          planejadas, segmentadas e acompanhadas.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton>Quero planejar minha campanha</CTAButton>
          <CTAButton variant="outline">Falar com especialista</CTAButton>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Fale com um especialista e entenda como estruturar uma campanha alinhada ao seu objetivo comercial.
        </p>
      </div>
    </section>
  );
}
