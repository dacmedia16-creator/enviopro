import { Database, MapPin, Users, Briefcase, Filter, CheckCircle2, Sparkles } from "lucide-react";
import { CTAButton } from "./CTAButton";

const HIGHLIGHTS = [
  { icon: Sparkles, label: "Higienização da base" },
  { icon: Filter, label: "Segmentação por perfil" },
  { icon: MapPin, label: "Organização por região" },
  { icon: Users, label: "Foco em públicos segmentados" },
  { icon: Briefcase, label: "Direcionamento por interesse" },
  { icon: CheckCircle2, label: "Mensagens mais relevantes" },
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
              ORGANIZAÇÃO DA BASE DE CONTATOS
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Não tem base de contatos? <span className="text-primary">Nós fornecemos.</span>
            </h2>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Disponibilizamos mailing segmentado por DDD, estado, cidade, bairro, perfil, profissão e poder aquisitivo —
              ideal para quem ainda não tem uma base própria e quer alcançar novos clientes pelo WhatsApp.
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

            <div className="flex flex-col items-center text-center gap-4 pt-6 border-t border-border">
              <p className="text-lg md:text-xl font-semibold">
                Agende uma conversa com nossos especialistas e descubra como{" "}
                <span className="text-primary">aproveitar melhor a base que sua empresa já tem</span>.
              </p>
              <CTAButton>Quero organizar minha base</CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
