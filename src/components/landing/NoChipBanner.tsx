import { ShieldCheck, Target, MessageCircle } from "lucide-react";

export function NoChipBanner() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-40" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-3xl border-2 border-primary/40 bg-card/80 backdrop-blur-sm p-8 md:p-12 shadow-[0_0_60px_-10px_hsl(var(--primary)/0.4)]">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <ShieldCheck className="h-4 w-4" />
              SEM COMPLICAR SUA OPERAÇÃO
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Campanhas <span className="text-primary">organizadas</span>, sem complicar sua operação.
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Você não precisa lidar com processos manuais ou configurações complexas.
              Nossa equipe ajuda a estruturar a campanha com foco em{" "}
              <span className="text-foreground font-semibold">clareza, resposta e geração de oportunidades</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full pt-4">
              {[
                { icon: ShieldCheck, label: "1. Valide sua base autorizada" },
                { icon: Target, label: "2. Defina a estratégia da campanha" },
                { icon: MessageCircle, label: "3. Ative com acompanhamento" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-semibold text-sm md:text-base text-left">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
