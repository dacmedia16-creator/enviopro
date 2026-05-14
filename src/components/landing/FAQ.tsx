import { SectionHeader } from "./SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Posso usar qualquer lista de contatos?",
    a: "Não. As campanhas devem ser feitas com contatos que autorizaram receber comunicação da sua empresa. Isso ajuda a manter uma abordagem mais responsável, relevante e alinhada às boas práticas.",
  },
  {
    q: "Vocês fazem disparo em massa?",
    a: "Não posicionamos o serviço dessa forma. Nosso foco é estruturar campanhas de WhatsApp para sua base de contatos, com segmentação, mensagem planejada e acompanhamento das respostas.",
  },
  {
    q: "A solução garante que minha conta nunca será bloqueada?",
    a: "Não existe garantia absoluta em nenhuma operação de WhatsApp. Trabalhamos com uma abordagem orientada a boas práticas, comunicação responsável e uso de sua base de contatos para reduzir riscos e melhorar a experiência dos contatos.",
  },
  {
    q: "Para quem essa solução é indicada?",
    a: "Para qualquer empresa que quer vender mais pelo WhatsApp — tanto quem já tem uma base de clientes/leads e quer reativar, quanto quem ainda não tem contatos e precisa alcançar novos públicos por região, perfil ou interesse.",
  },
];

export function FAQ() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader eyebrow="Dúvidas frequentes" title="Perguntas que recebemos com frequência" />

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-surface px-5 shadow-card"
            >
              <AccordionTrigger className="text-left text-base font-bold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
