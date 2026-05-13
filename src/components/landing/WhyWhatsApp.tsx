import { Eye, Send, Zap, Heart } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { CTAButton } from "./CTAButton";

const stats = [
  { icon: Eye, label: "Alta atenção" },
  { icon: Send, label: "Comunicação direta" },
  { icon: Zap, label: "Resposta rápida" },
  { icon: Heart, label: "Contato pessoal" },
];

export function WhyWhatsApp() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Por que WhatsApp"
          title="Por que usar WhatsApp para vender?"
          subtitle="Porque o WhatsApp é direto, rápido e pessoal. Enquanto e-mails são ignorados e anúncios ficam mais caros, uma boa mensagem no WhatsApp pode gerar resposta imediata."
        />

        <div className="mt-12 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-surface to-surface p-8 text-center md:p-12">
          <p className="text-2xl font-extrabold leading-tight text-balance md:text-4xl">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Mais proximidade. Mais velocidade. Mais conversas. Mais vendas.
            </span>
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-surface p-6 text-center shadow-card transition hover:border-primary/50"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <p className="mt-3 text-sm font-semibold md:text-base">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton>Quero vender mais pelo WhatsApp</CTAButton>
        </div>
      </div>
    </section>
  );
}
