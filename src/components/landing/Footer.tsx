import { MessageCircle, Mail } from "lucide-react";
import { BRAND, WHATSAPP_URL, EMAIL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground font-black">E</div>
              <span className="text-lg font-extrabold">{BRAND}</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Campanhas de WhatsApp para empresas ativarem sua base de contatos e gerarem novas conversas comerciais.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground hover:text-primary">
              <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp
            </a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 text-foreground hover:text-primary">
              <Mail className="h-4 w-4 text-primary" /> {EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>
            Campanhas realizadas para sua base de contatos e contatos com relacionamento prévio,
            seguindo boas práticas de comunicação responsável.
          </p>
          <p className="mt-2">© {new Date().getFullYear()} {BRAND}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
