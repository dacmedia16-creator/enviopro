import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/landing/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EnvioPro | Campanhas de WhatsApp para Bases Autorizadas" },
      {
        name: "description",
        content:
          "Ative clientes e leads autorizados pelo WhatsApp com campanhas planejadas, segmentação e acompanhamento das respostas. Gere novas oportunidades comerciais com comunicação responsável.",
      },
      { property: "og:title", content: "EnvioPro | Campanhas de WhatsApp para Bases Autorizadas" },
      {
        property: "og:description",
        content:
          "Ative clientes e leads autorizados pelo WhatsApp com campanhas planejadas, segmentação e acompanhamento das respostas.",
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
