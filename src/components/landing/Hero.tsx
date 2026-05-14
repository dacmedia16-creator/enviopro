import { ShieldCheck, MessageCircle, Zap, TrendingUp, Users, DollarSign } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { PhoneMockup } from "./PhoneMockup";
import { BRAND } from "@/lib/site";

const badges = [
  { icon: DollarSign, label: "R$0,05 por contato" },
  { icon: Zap, label: "Comunicação em escala" },
  { icon: ShieldCheck, label: "API Oficial" },
  { icon: TrendingUp, label: "Venda no automático" },
  { icon: Users, label: "2.000+ clientes/dia" },
  { icon: MessageCircle, label: "Operação estável" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 pt-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground font-black">
            E
          </div>
          <span className="text-lg font-extrabold tracking-tight">{BRAND}</span>
        </div>
        <CTAButton size="md" variant="outline">Quero acessar</CTAButton>
      </header>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-14 lg:grid-cols-2 lg:items-center lg:pb-28 lg:pt-20">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Apresentação ao vivo · Terça às 13h30
          </span>

          <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-balance md:text-5xl lg:text-6xl">
            ALCANCE{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              2 MIL CLIENTES POR DIA
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            <span className="font-bold text-foreground">R$0,05 por contato</span> — venda no automático,
            todos os dias, com tecnologia oficial do WhatsApp.
          </p>

          <ul className="mt-6 space-y-2 text-base font-semibold">
            <li className="flex items-center gap-2"><span className="text-primary">✅</span> Comunicação em escala</li>
            <li className="flex items-center gap-2"><span className="text-primary">✅</span> Operação estável e profissional</li>
            <li className="flex items-center gap-2"><span className="text-primary">✅</span> API Oficial — venda, cresça e retenha clientes</li>
          </ul>

          <div className="mt-6 inline-flex items-start gap-3 rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-xl">👉</span>
            <p className="text-sm font-semibold leading-snug text-foreground md:text-base">
              Comente <span className="text-primary">WHATS</span> e veja como funciona. Toque em
              <span className="text-primary"> ACESSAR</span> e participe da apresentação ao vivo.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton>Quero acessar a apresentação</CTAButton>
            <CTAButton variant="outline">Comentar WHATS</CTAButton>
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
