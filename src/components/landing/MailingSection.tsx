import { Database, MapPin, Users, Briefcase, Car, Filter, CheckCircle2 } from "lucide-react";
import { CTAButton } from "./CTAButton";

const FILTERS = [
  "DDD",
  "Estado",
  "Cidade",
  "Bairro",
  "Operadora",
  "Sexo",
  "Aposentados e Pensionistas",
  "Poder Aquisitivo",
  "Profissão",
  "Proprietários de Veículos",
  "Pessoa Física ou Jurídica",
];

const HIGHLIGHTS = [
  { icon: MapPin, label: "Segmentação geográfica" },
  { icon: Users, label: "Perfil demográfico" },
  { icon: Briefcase, label: "Profissão e renda" },
  { icon: Car, label: "Patrimônio e bens" },
];

export function MailingSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/40 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[120px] opacity-50" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-bold text-primary mb-4">
              <Database className="h-4 w-4" />
              MAILING QUALIFICADO E VALIDADO
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Precisa de <span className="text-primary">mailing</span> para captar novos clientes?
            </h2>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Trabalhamos com listas qualificadas e validadas, segmentadas exatamente para o seu público-alvo.
            </p>
          </div>

          <div className="rounded-3xl border-2 border-primary/30 bg-card/80 backdrop-blur-sm p-8 md:p-12 shadow-[0_0_60px_-10px_hsl(var(--primary)/0.4)]">
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {HIGHLIGHTS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-semibold">{label}</span>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                <Filter className="h-4 w-4 text-primary" />
                Filtros disponíveis
              </div>
              <div className="flex flex-wrap gap-2">
                {FILTERS.map((f) => (
                  <span
                    key={f}
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-sm font-medium text-foreground hover:bg-primary/20 transition-colors"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-4 pt-6 border-t border-border">
              <p className="text-lg md:text-xl font-semibold">
                Agende uma reunião virtual com nossos especialistas e descubra como{" "}
                <span className="text-primary">ampliar o alcance da sua empresa</span>.
              </p>
              <CTAButton>Agendar reunião pelo WhatsApp</CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
