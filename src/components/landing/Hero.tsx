import { Zap, MessageCircle, ShieldCheck, TrendingUp } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { PhoneMockup } from "./PhoneMockup";
import { BRAND } from "@/lib/site";

const badges = [
  { icon: Zap, label: "Campanhas rápidas" },
  { icon: MessageCircle, label: "Foco em resposta" },
  { icon: ShieldCheck, label: "Base autorizada" },
  { icon: TrendingUp, label: "Mais conversas comerciais" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 pt-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground font-black">
            Z
          </div>
          <span className="text-lg font-extrabold tracking-tight">{BRAND}</span>
        </div>
        <CTAButton size="md" variant="outline">Falar agora</CTAButton>
      </header>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-14 lg:grid-cols-2 lg:items-center lg:pb-28 lg:pt-20">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Campanhas de WhatsApp em massa
          </span>

          <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-balance md:text-5xl lg:text-6xl">
            10 mil disparos por dia,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              sem bloqueio e sem perder chip.
            </span>
          </h1>

          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-urgency/40 bg-urgency/10 px-4 py-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-urgency/20 text-xl">🚀</span>
            <p className="text-sm font-bold leading-snug text-foreground md:text-base">
              Imagina disparar <span className="text-urgency">10 mil mensagens por dia</span> para a sua base.
            </p>
          </div>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Criamos campanhas estratégicas de WhatsApp para empresas que querem ativar leads,
            recuperar clientes e divulgar ofertas para contatos autorizados.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton>Quero ativar minha base</CTAButton>
            <CTAButton variant="outline">Falar com especialista</CTAButton>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs font-medium text-foreground/90 backdrop-blur"
              >
                <b.icon className="h-3.5 w-3.5 text-primary" />
                {b.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
