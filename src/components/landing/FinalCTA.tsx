import { CTAButton } from "./CTAButton";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-radial-glow" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-black leading-tight tracking-tight text-balance md:text-6xl">
          Pronto para colocar sua base{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">para vender?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
          Sua lista pode estar cheia de oportunidades esperando a mensagem certa. Vamos criar uma
          campanha de WhatsApp para divulgar sua oferta, recuperar interessados e gerar novas
          conversas comerciais.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton>Quero disparar minha campanha agora</CTAButton>
          <CTAButton variant="outline">Chamar no WhatsApp</CTAButton>
        </div>
      </div>
    </section>
  );
}
