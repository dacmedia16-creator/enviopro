import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/landing/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZapBoost — Campanhas de WhatsApp para Ativar sua Base" },
      {
        name: "description",
        content:
          "Criamos campanhas de WhatsApp para empresas ativarem leads, recuperarem clientes e divulgarem ofertas para bases autorizadas. Mais conversas, mais vendas.",
      },
      { property: "og:title", content: "ZapBoost — Campanhas de WhatsApp para Empresas" },
      {
        property: "og:description",
        content:
          "Ative sua base autorizada com campanhas estratégicas de WhatsApp. Recupere leads, reative clientes e gere conversas comerciais.",
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
