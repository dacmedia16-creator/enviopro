import { Check, CheckCheck } from "lucide-react";

const messages = [
  { from: "them", text: "Oi! Vi a oferta no WhatsApp 👀", time: "09:41" },
  { from: "me", text: "Show! Posso te enviar a condição especial?", time: "09:41" },
  { from: "them", text: "Pode sim, quero garantir!", time: "09:42" },
  { from: "me", text: "Perfeito 🚀 já te mando o link.", time: "09:42" },
];

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[320px] animate-float">
      {/* glow */}
      <div className="absolute -inset-8 rounded-[3rem] bg-primary/20 blur-3xl" aria-hidden />
      {/* frame */}
      <div className="relative rounded-[2.5rem] border-[10px] border-neutral-800 bg-neutral-900 p-2 shadow-card">
        <div className="overflow-hidden rounded-[1.75rem] bg-[#0b141a]">
          {/* WhatsApp header */}
          <div className="flex items-center gap-3 bg-[#202c33] px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
              Z
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">ZapBoost</p>
              <p className="text-[11px] text-emerald-300">online</p>
            </div>
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
          </div>
          {/* chat */}
          <div className="space-y-2 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><rect width=%2240%22 height=%2240%22 fill=%22%230b141a%22/></svg>')] px-3 py-4 min-h-[340px]">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex animate-slide-in ${m.from === "me" ? "justify-end" : "justify-start"}`}
                  style={{ animationDelay: `${i * 0.5}s` }}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-2 text-[13px] leading-snug shadow-sm ${
                      m.from === "me"
                        ? "bg-[#005c4b] text-white rounded-br-sm"
                        : "bg-[#202c33] text-white rounded-bl-sm"
                    }`}
                  >
                    <p>{m.text}</p>
                    <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-white/60">
                      <span>{m.time}</span>
                      {m.from === "me" && <CheckCheck className="h-3 w-3 text-sky-300" />}
                      {m.from === "them" && <Check className="h-3 w-3" />}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* notch */}
        <div className="absolute left-1/2 top-0 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-neutral-800" />
      </div>
    </div>
  );
}
