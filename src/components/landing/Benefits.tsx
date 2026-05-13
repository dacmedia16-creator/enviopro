import { RefreshCw, UserCheck, MessageSquare, Filter, Workflow, TrendingUp } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { CTAButton } from "./CTAButton";

const benefits = [
  {
    icon: UserCheck,
    title: "Reative contatos que já conhecem sua empresa",
    desc: "Volte a conversar com quem já demonstrou interesse e mantenha sua marca presente no dia a dia do cliente.",
  },
  {
    icon: RefreshCw,
    title: "Recupere clientes inativos",
    desc: "Crie oportunidades de retorno para quem já comprou, com mensagens relevantes e bem direcionadas.",
  },
  {
    icon: MessageSquare,
    title: "Aumente respostas comerciais",
    desc: "Mensagens planejadas geram mais conversas reais do que comunicações genéricas.",
  },
  {
    icon: Filter,
    title: "Organize campanhas com segmentação",
    desc: "Fale com o público certo, no momento certo, com a abordagem mais adequada para cada perfil.",
  },
  {
    icon: Workflow,
    title: "Reduza retrabalho da equipe",
    desc: "Pare de depender de processos manuais repetitivos e ganhe tempo para o que realmente importa: vender.",
  },
  {
    icon: TrendingUp,
    title: "Transforme sua base em oportunidades reais",
    desc: "Em vez de depender só de atendimento passivo, sua empresa trabalha a base de forma organizada para gerar vendas.",
  },
];

export function Benefits() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Benefícios"
          title="Por que usar campanhas de WhatsApp na sua estratégia comercial?"
          subtitle="Sua base de contatos é um ativo comercial. Trabalhada com estratégia, ela gera mais respostas, mais relacionamento e mais vendas."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:border-primary/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold leading-snug">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
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
          <CTAButton>Quero ativar minha base</CTAButton>
        </div>
      </div>
    </section>
  );
}
