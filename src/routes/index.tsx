import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/landing/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EnvioPro | Alcance 2 mil clientes por dia a partir de R$0,05" },
      {
        name: "description",
        content:
          "Venda no automático pelo WhatsApp com API Oficial, IA, CRM e Omnichannel. Alcance 2.000+ clientes por dia a partir de R$0,05 por contato. Participe da apresentação ao vivo na terça às 13h30.",
      },
      { property: "og:title", content: "EnvioPro | Alcance 2 mil clientes por dia a partir de R$0,05" },
      {
        property: "og:description",
        content:
          "Venda no automático com API Oficial, IA, CRM e Omnichannel. Apresentação ao vivo terça às 13h30.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <Landing />;
}
