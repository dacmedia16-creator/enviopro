import { SectionHeader } from "./SectionHeader";
import { CTAButton } from "./CTAButton";

const steps = [
  { n: "1", title: "Você envia sua base autorizada", desc: "Organizamos os contatos e entendemos o objetivo da campanha." },
  { n: "2", title: "Criamos a estratégia da mensagem", desc: "Ajustamos texto, oferta, gatilho e chamada para ação." },
  { n: "3", title: "Preparamos o envio", desc: "Configuramos a campanha de forma organizada e segmentada." },
  { n: "4", title: "Sua campanha vai ao ar", desc: "As mensagens são enviadas para sua base conforme a estratégia definida." },
  { n: "5", title: "Você recebe respostas e oportunidades", desc: "Sua equipe conversa com os interessados e transforma conversas em vendas." },
];

export function HowItWorks() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader eyebrow="Como funciona" title="Como funciona na prática" />

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
          <CTAButton>Começar minha campanha</CTAButton>
        </div>
      </div>
    </section>
  );
}
