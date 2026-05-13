import { CheckCheck } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { CTAButton } from "./CTAButton";

const campaigns = [
  { tag: "Reativação", text: "Você ainda tem interesse em conhecer nossos planos?" },
  { tag: "Promoção", text: "Condição especial válida por tempo limitado." },
  { tag: "Lançamento", text: "Nova turma aberta. Quer receber os detalhes?" },
  { tag: "Recuperação", text: "Percebemos que você demonstrou interesse e não finalizou." },
  { tag: "Relacionamento", text: "Passando para te avisar sobre uma novidade importante." },
];

export function Examples() {
  return (
    <section className="relative bg-surface/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Exemplos"
          title="Campanhas que você pode colocar no ar"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((c) => (
            <div
              key={c.tag}
              className="flex flex-col rounded-2xl border border-border bg-surface p-5 shadow-card transition hover:-translate-y-1 hover:border-primary/50"
            >
              <span className="self-start rounded-full bg-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                {c.tag}
              </span>
              <div className="mt-4 flex-1 rounded-2xl rounded-bl-sm bg-[#005c4b] px-4 py-3 text-sm text-white shadow-sm">
                {c.text}
                <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-white/70">
                  <span>09:41</span>
                  <CheckCheck className="h-3 w-3 text-sky-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton>Quero uma campanha parecida</CTAButton>
        </div>
      </div>
    </section>
  );
}
