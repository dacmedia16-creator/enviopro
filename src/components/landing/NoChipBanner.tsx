import { ShieldCheck, Zap, Upload } from "lucide-react";

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
              ZERO CONFIGURAÇÃO TÉCNICA
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Você <span className="text-primary">não precisa conectar</span> nenhum número.
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Nossa plataforma realiza o envio <span className="text-foreground font-semibold">por você</span>.
              Basta importar sua lista, configurar a mensagem e disparar.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full pt-4">
              {[
                { icon: Upload, label: "1. Importe sua lista" },
                { icon: Zap, label: "2. Configure a mensagem" },
                { icon: ShieldCheck, label: "3. Dispare com segurança" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-semibold text-sm md:text-base">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
