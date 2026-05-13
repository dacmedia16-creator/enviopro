import { Clock, UserX, Megaphone, Hand, Database } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { CTAButton } from "./CTAButton";

const pains = [
  { icon: UserX, title: "Leads parados sem follow-up", desc: "Interessados que nunca mais foram chamados." },
  { icon: Clock, title: "Clientes antigos sem reativação", desc: "Quem já comprou está esquecendo da sua marca." },
  { icon: Megaphone, title: "Promoções que não chegam ao público certo", desc: "Ofertas boas que nenhum cliente vê." },
  { icon: Hand, title: "Equipe perdendo tempo com processos manuais", desc: "Mensagens enviadas uma a uma, sem padrão e sem acompanhamento." },
  { icon: Database, title: "Base de contatos sendo desperdiçada", desc: "Um ativo comercial valioso parado, sem nenhuma estratégia de ativação." },
];

export function PainSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="⚠ Atenção"
          title="Você pode estar perdendo vendas todos os dias"
          subtitle="Enquanto sua empresa não se comunica com a base que já tem, leads esfriam, clientes esquecem suas ofertas e oportunidades deixam de virar vendas."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pains.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-2xl border border-border bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-destructive/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-destructive/15 text-destructive">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton>Quero recuperar oportunidades perdidas</CTAButton>
        </div>
      </div>
    </section>
  );
}
