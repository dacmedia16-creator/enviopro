import { Clock, Layers, ListChecks, Brain, MessageSquare, Power } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { CTAButton } from "./CTAButton";

const benefits = [
  { icon: Clock, title: "Economia de tempo" },
  { icon: Layers, title: "Comunicação em escala" },
  { icon: ListChecks, title: "Mais organização" },
  { icon: Brain, title: "Mensagens estratégicas" },
  { icon: MessageSquare, title: "Mais conversas com interessados" },
  { icon: Power, title: "Ativação de contatos parados" },
];

export function Benefits() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Benefícios"
          title="Você não precisa mandar mensagem manualmente"
          subtitle="Pare de perder horas copiando, colando e enviando mensagens uma por uma. Com uma campanha estruturada, sua empresa ganha velocidade, padronização e mais controle sobre a comunicação."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 shadow-card transition hover:border-primary/50"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                <b.icon className="h-5 w-5" />
              </div>
              <p className="text-base font-bold leading-snug">{b.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/15 via-surface to-surface p-8 text-center md:p-10">
          <p className="text-2xl font-extrabold leading-tight md:text-3xl">
            Sua base não precisa ficar parada.{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Ela precisa ser ativada.</span>
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <CTAButton>Ativar minha base agora</CTAButton>
        </div>
      </div>
    </section>
  );
}
