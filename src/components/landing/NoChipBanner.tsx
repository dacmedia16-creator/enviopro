import { Calendar, Clock, AlertTriangle, Gift } from "lucide-react";
import { CTAButton } from "./CTAButton";

export function NoChipBanner() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-40" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-3xl border-2 border-primary/40 bg-card/80 backdrop-blur-sm p-8 md:p-12 shadow-[0_0_60px_-10px_hsl(var(--primary)/0.4)]">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-bold text-primary uppercase tracking-wider">
              <Calendar className="h-4 w-4" />
              Terça-feira às 13h30 — AO VIVO
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Muita gente tenta vender pelo WhatsApp...{" "}
              <span className="text-primary">poucos sabem escalar de verdade.</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Vou mostrar como empresários estão vendendo diariamente com a nossa tecnologia,
              alcançando <span className="text-foreground font-semibold">2.000+ clientes por apenas R$0,05 por contato</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full pt-4 text-left">
              {[
                "A solução funcionando AO VIVO",
                "Custo a partir de R$0,05 por contato",
                "Filtragem por CEP, perfil e região",
                "IA + CRM + Omnichannel integrados",
                "Estratégias validadas em diversos segmentos",
                "API Oficial sem complicação técnica",
              ].map((label) => (
                <div
                  key={label}
                  className="flex items-start gap-3 rounded-xl border border-border bg-background/60 px-4 py-3"
                >
                  <span className="text-primary text-lg leading-none mt-0.5">✅</span>
                  <span className="font-semibold text-sm md:text-base">{label}</span>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2 w-full pt-2">
              <div className="flex items-center gap-3 rounded-xl border border-primary/40 bg-primary/10 px-4 py-3">
                <Gift className="h-5 w-5 text-primary shrink-0" />
                <p className="text-sm font-semibold text-left">
                  <span className="text-primary">Bônus:</span> condições exclusivas para quem ficar até o final
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3">
                <AlertTriangle className="h-5 w-5 text-destructive shrink-0" />
                <p className="text-sm font-semibold text-left">
                  Apenas <span className="text-destructive">10 vagas por semana</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
              <Clock className="h-4 w-4" />
              Nos vemos terça às 13h30 — o link será liberado no grupo.
            </div>

            <CTAButton>Garantir minha vaga</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
