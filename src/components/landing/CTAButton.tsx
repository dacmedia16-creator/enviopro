import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  size?: "md" | "lg";
  className?: string;
};

export function CTAButton({ children, variant = "primary", href = WHATSAPP_URL, size = "lg", className = "" }: Props) {
  const sizeClass = size === "lg" ? "px-7 py-4 text-base md:text-lg" : "px-5 py-3 text-sm";
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-tight transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0";
  const variantClass =
    variant === "primary"
      ? "bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-[0_18px_50px_-10px_color-mix(in_oklab,var(--primary)_70%,transparent)]"
      : "border-2 border-primary/50 bg-primary/5 text-foreground hover:bg-primary/15 hover:border-primary";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizeClass} ${variantClass} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
    </a>
  );
}
