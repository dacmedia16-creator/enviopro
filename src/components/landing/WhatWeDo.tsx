import { Tag, Rocket, RefreshCw, Calendar, Target, Bell, Briefcase, Users } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { CTAButton } from "./CTAButton";

const items = [
  { icon: Tag, title: "Promoções e ofertas" },
  { icon: Rocket, title: "Lançamentos" },
  { icon: RefreshCw, title: "Reativação de clientes" },
  { icon: Calendar, title: "Convites para eventos" },
  { icon: Target, title: "Recuperação de leads" },
  { icon: Bell, title: "Avisos importantes" },
  { icon: Briefcase, title: "Divulgação de serviços" },
  { icon: Users, title: "Comunicação com alunos, pacientes ou compradores" },
];

export function WhatWeDo() {
  return (
    <section className="relative bg-surface/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="O que fazemos"
          title="Campanhas de WhatsApp para ativar sua base e gerar resposta"
          subtitle="Ajudamos empresas a planejar, criar e enviar campanhas pelo WhatsApp para bases autorizadas, com mensagens pensadas para chamar atenção e gerar conversas comerciais."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:bg-primary/30" />
              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold leading-snug">{it.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton>Montar minha campanha agora</CTAButton>
        </div>
      </div>
    </section>
  );
}
