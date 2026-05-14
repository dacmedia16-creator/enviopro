import { ShieldCheck, BadgeCheck, Lock } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { CTAButton } from "./CTAButton";

const seals = [
  { icon: ShieldCheck, label: "Uso responsável" },
  { icon: BadgeCheck, label: "Base organizada" },
  { icon: Lock, label: "Comunicação profissional" },
];

export function Compliance() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="Confiança"
          title="Campanhas profissionais para sua base de contatos"
          subtitle="Trabalhamos com campanhas para clientes, leads e contatos que tenham relação prévia com sua empresa. Isso aumenta a qualidade das respostas, protege sua marca e melhora o resultado da campanha."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {seals.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-3 rounded-3xl border border-primary/30 bg-gradient-to-b from-primary/10 to-surface p-8 text-center shadow-card"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground">
                <s.icon className="h-7 w-7" />
              </div>
              <p className="text-base font-bold">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton>Tenho uma base de contatos</CTAButton>
        </div>
      </div>
    </section>
  );
}
