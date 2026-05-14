import { SectionHeader } from "./SectionHeader";
import { CTAButton } from "./CTAButton";

const steps = [
  {
    n: "1",
    title: "Validação da base de contatos",
    desc: "Organizamos os contatos que já autorizaram receber sua comunicação e avaliamos a melhor estratégia de abordagem.",
  },
  {
    n: "2",
    title: "Planejamento da mensagem",
    desc: "Criamos mensagens claras, segmentadas e com foco em gerar respostas reais, sem parecer comunicação genérica.",
  },
  {
    n: "3",
    title: "Ativação da campanha",
    desc: "A campanha é colocada em operação com acompanhamento das respostas e foco em oportunidades comerciais.",
  },
  {
    n: "4",
    title: "Análise e melhoria",
    desc: "Acompanhamos os resultados para ajustar abordagem, segmentação e próximos passos.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader eyebrow="Como funciona" title="Como sua campanha é colocada em operação" />

        <div className="relative mt-14">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent md:left-1/2 md:-translate-x-1/2" />
          <ol className="space-y-8">
            {steps.map((s, i) => (
              <li key={s.n} className={`relative md:grid md:grid-cols-2 md:gap-8 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div className={`flex items-start gap-4 md:items-center ${i % 2 ? "md:justify-start md:pl-12" : "md:justify-end md:pr-12 md:text-right"}`}>
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-xl font-black text-primary-foreground shadow-glow md:absolute md:left-1/2 md:-translate-x-1/2">
                    {s.n}
                  </div>
                  <div className="md:hidden">
                    <h3 className="text-lg font-bold">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
                <div className={`hidden md:block ${i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">
                    <h3 className="text-lg font-bold">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 flex justify-center">
          <CTAButton>Quero planejar minha campanha</CTAButton>
        </div>
      </div>
    </section>
  );
}
