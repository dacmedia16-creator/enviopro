import {
  Stethoscope, GraduationCap, Store, ShoppingBag, Building2,
  Laptop, Wrench, Dumbbell, UtensilsCrossed, MapPin,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { CTAButton } from "./CTAButton";

const niches = [
  { icon: Stethoscope, label: "Clínicas" },
  { icon: GraduationCap, label: "Escolas e cursos" },
  { icon: Store, label: "Lojas físicas" },
  { icon: ShoppingBag, label: "E-commerces" },
  { icon: Building2, label: "Imobiliárias" },
  { icon: Laptop, label: "Infoprodutores" },
  { icon: Wrench, label: "Prestadores de serviço" },
  { icon: Dumbbell, label: "Academias" },
  { icon: UtensilsCrossed, label: "Restaurantes" },
  { icon: MapPin, label: "Empresas locais" },
];

export function ForWho() {
  return (
    <section className="relative bg-surface/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Para quem é"
          title="Para empresas que querem alcançar mais clientes pelo WhatsApp"
          subtitle="Se você já tem uma base, ajudamos a ativá-la. Se ainda não tem, ajudamos a alcançar novos públicos com mailing segmentado por região, perfil e interesse."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {niches.map((n) => (
            <div
              key={n.label}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-surface p-5 text-center shadow-card transition hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <n.icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold">{n.label}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border-l-4 border-urgency bg-surface p-6 text-center md:p-8">
          <p className="text-lg font-bold leading-snug md:text-xl">
            <span className="text-urgency">★</span> Se você tem uma base de contatos, você tem um{" "}
            <span className="text-urgency">ativo comercial</span> que pode ser ativado hoje.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <CTAButton>Tenho uma base e quero ativar</CTAButton>
        </div>
      </div>
    </section>
  );
}
