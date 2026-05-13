import { Rocket, MessageCircle } from "lucide-react";

type Item = {
  type: "rocket" | "chat";
  top: string;
  left?: string;
  right?: string;
  size: number;
  rot: number;
  delay: number;
  duration: number;
  opacity: number;
};

const ITEMS: Item[] = [
  { type: "rocket", top: "8%", left: "4%", size: 38, rot: -20, delay: 0, duration: 7, opacity: 0.18 },
  { type: "chat", top: "14%", right: "6%", size: 42, rot: 12, delay: 1.2, duration: 8, opacity: 0.18 },
  { type: "rocket", top: "32%", right: "10%", size: 30, rot: -10, delay: 2, duration: 9, opacity: 0.14 },
  { type: "chat", top: "44%", left: "6%", size: 50, rot: -8, delay: 0.5, duration: 7.5, opacity: 0.18 },
  { type: "rocket", top: "58%", left: "12%", size: 44, rot: -25, delay: 1.8, duration: 8.5, opacity: 0.16 },
  { type: "chat", top: "66%", right: "8%", size: 36, rot: 14, delay: 3, duration: 7, opacity: 0.18 },
  { type: "rocket", top: "78%", right: "14%", size: 32, rot: -18, delay: 0.8, duration: 9, opacity: 0.15 },
  { type: "chat", top: "88%", left: "8%", size: 40, rot: -6, delay: 2.4, duration: 8, opacity: 0.18 },
];

export function FloatingDecor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {ITEMS.map((it, i) => {
        const Icon = it.type === "rocket" ? Rocket : MessageCircle;
        const animName = it.type === "rocket" ? "rocket-rise" : "float-drift";
        return (
          <div
            key={i}
            className="absolute text-primary"
            style={{
              top: it.top,
              left: it.left,
              right: it.right,
              opacity: it.opacity,
              filter: "drop-shadow(0 0 12px color-mix(in oklab, var(--primary) 60%, transparent))",
              animation: `${animName} ${it.duration}s ease-in-out ${it.delay}s infinite`,
              ["--rot" as string]: `${it.rot}deg`,
            }}
          >
            <Icon style={{ width: it.size, height: it.size }} strokeWidth={1.6} />
          </div>
        );
      })}
    </div>
  );
}
