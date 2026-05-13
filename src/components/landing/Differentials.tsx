import { Check } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { CTAButton } from "./CTAButton";

const items = [
  "Mais clareza na comunicação com clientes",
  "Mais oportunidades a partir da base existente",
  "Mais respostas com mensagens segmentadas",
  "Menos retrabalho no processo comercial",
  "Campanhas mais organizadas e acompanhadas",
  "Foco em contatos autorizados",
  "Estratégia alinhada às boas práticas",
];

export function Differentials() {
  return (
    <section className="relative bg-surface/40 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="Diferenciais"
          title="Não é só enviar mensagem. É criar uma campanha que gera ação."
          subtitle="Ajudamos você a transformar uma base autorizada em uma campanha com objetivo, mensagem, segmentação e chamada para ação."
        />

        <ul className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
          {items.map((it) => (
            <li
              key={it}
              className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-4 shadow-card transition hover:border-primary/50"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground">
                <Check className="h-4 w-4" strokeWidth={3} />
              </span>
              <span className="font-semibold">{it}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <CTAButton>Quero uma campanha estratégica</CTAButton>
        </div>
      </div>
    </section>
  );
}
