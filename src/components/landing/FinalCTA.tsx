import { CTAButton } from "./CTAButton";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-radial-glow" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary">
          Terça-feira · 13h30 · Ao vivo
        </span>
        <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-balance md:text-6xl">
          Alcance 2 mil clientes por dia{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">a partir de R$0,05 por contato.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
          Venda no automático com API Oficial, IA, CRM e Omnichannel integrados.
          Participe da apresentação ao vivo e veja a solução funcionando na prática.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton>Quero acessar a apresentação</CTAButton>
          <CTAButton variant="outline">Comentar WHATS</CTAButton>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          ⚠️ Apenas 10 vagas por semana. O link será liberado no grupo.
        </p>
      </div>
    </section>
  );
}
