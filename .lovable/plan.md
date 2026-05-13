## Visão geral

Vou criar uma landing page de alta conversão em página única (`/`) para o serviço **ZapBoost** (nome criativo sugerido — pode trocar depois), com 12 seções verticais, copy persuasiva pronta, mockup de celular, CTA flutuante de WhatsApp e visual escuro com verde WhatsApp.

Nome sugerido: **ZapBoost — Campanhas de WhatsApp para Empresas**
(alternativas se preferir: DispareJá, BaseAtiva, ZapAtiva, MensagemCerta)

Placeholders usados (você troca depois):
- WhatsApp: `https://wa.me/5500000000000` (variável central `WHATSAPP_URL`)
- E-mail: `contato@zapboost.com.br`

---

## Design system

Tokens em `src/styles.css` (oklch):
- `--background`: preto/grafite (~oklch(0.16 0.01 160))
- `--foreground`: branco
- `--primary`: verde WhatsApp (#25D366 → oklch ~0.74 0.17 152)
- `--primary-glow`: verde mais claro para gradientes/brilho
- `--accent-urgency`: amarelo (~oklch(0.85 0.17 90))
- `--destructive`: vermelho de urgência
- `--card`: grafite levemente mais claro que o fundo
- `--border`: contorno sutil verde-acinzentado
- `--radius`: 1rem (cards bem arredondados)
- Gradientes: `--gradient-primary` (verde→verde-claro), `--gradient-dark` (preto→grafite)
- Sombras: `--shadow-glow` verde para botões/CTAs

Tipografia: Inter (já disponível) — pesos 400/600/800/900 para títulos agressivos.

Animações (em `styles.css` via `@keyframes` + classes utilitárias):
- `fade-in-up` ao entrar na viewport (IntersectionObserver simples)
- `pulse-glow` no CTA flutuante e botões primários
- `float` no mockup de celular
- `slide-in` nas mensagens dentro do mockup

---

## Estrutura técnica

Stack: TanStack Start já configurado. Substituo o placeholder em `src/routes/index.tsx`.

Arquivos novos:
```
src/routes/index.tsx                 (atualizado: head SEO + render <Landing />)
src/components/landing/Landing.tsx   (orquestrador das seções)
src/components/landing/Hero.tsx
src/components/landing/PainSection.tsx
src/components/landing/WhatWeDo.tsx
src/components/landing/WhyWhatsApp.tsx
src/components/landing/ForWho.tsx
src/components/landing/HowItWorks.tsx
src/components/landing/Examples.tsx
src/components/landing/Benefits.tsx
src/components/landing/Differentials.tsx
src/components/landing/Compliance.tsx
src/components/landing/FinalCTA.tsx
src/components/landing/Footer.tsx
src/components/landing/PhoneMockup.tsx       (mockup com bolhas de chat animadas)
src/components/landing/FloatingWhatsApp.tsx  (CTA fixo bottom-right)
src/components/landing/SectionHeader.tsx
src/lib/site.ts                              (constantes: BRAND, WHATSAPP_URL, EMAIL)
```

Atualizado:
- `src/styles.css` — novos tokens, gradientes, sombras e keyframes
- `src/routes/__root.tsx` — head padrão (título/descrição) reescrito para o produto

Constantes centralizadas em `src/lib/site.ts` para que você troque WhatsApp/e-mail/nome em um único arquivo.

---

## Conteúdo por seção (resumo)

1. **Hero** — Headline + subheadline do brief, dois CTAs (verde sólido + outline), 4 badges, mockup de celular animado à direita (em mobile, abaixo).
2. **Dor** — 5 cards de problemas com ícones (Lucide: `Clock`, `UserX`, `Megaphone`, `Hand`, `Database`), CTA.
3. **O que fazemos** — 8 cards de usos (`Tag`, `Rocket`, `RefreshCw`, `Calendar`, `Target`, `Bell`, `Briefcase`, `Users`).
4. **Por que WhatsApp** — texto + frase em destaque grande + 4 "estatísticas" qualitativas em cards minimalistas.
5. **Para quem é** — grid 10 cards (clínicas, escolas, lojas, e-commerces, imobiliárias, infoprodutores, prestadores, academias, restaurantes, locais) + frase de destaque.
6. **Como funciona** — timeline vertical (desktop: alternando lados; mobile: empilhada) com 5 passos numerados em círculos verdes.
7. **Exemplos de campanhas** — 5 cards estilo "bolha de WhatsApp" com a mensagem-exemplo + tag (Reativação, Promoção, Lançamento, Recuperação, Relacionamento).
8. **Benefícios** — 6 cards + frase de impacto em destaque.
9. **Diferenciais** — lista de 7 itens em duas colunas com check verde.
10. **Confiança / Compliance** — 3 selos (`ShieldCheck`, `BadgeCheck`, `Lock`) com fundo levemente diferenciado.
11. **CTA Final** — bloco grande com gradient verde, dois botões.
12. **Rodapé** — nome, WhatsApp, e-mail, aviso de uso responsável.

**CTA flutuante**: ícone WhatsApp + texto "Falar no WhatsApp" fixo bottom-right, com `pulse-glow`, esconde-se quando perto do final em mobile? Não — mantém sempre visível conforme brief.

Todos os botões "principais" e o flutuante apontam para `WHATSAPP_URL` em `_blank`.

---

## Responsividade

- Mobile-first. Breakpoints Tailwind padrão (`sm/md/lg`).
- Hero: 1 coluna em mobile (texto → mockup), 2 colunas em `lg`.
- Grids de cards: 1 col → 2 col `sm` → 3-4 col `lg` conforme densidade.
- Tipografia escalonada com `clamp()` nos títulos hero.
- CTA flutuante: largura reduzida para ícone-only em telas <380px.

---

## SEO

`head()` na rota `/`:
- title: "ZapBoost — Campanhas de WhatsApp para Ativar sua Base"
- description (<160): "Criamos campanhas de WhatsApp para empresas ativarem leads, recuperarem clientes e divulgarem ofertas para bases autorizadas."
- og:title / og:description / twitter:card
- H1 único no Hero, demais seções com H2.
- HTML semântico (`<section>`, `<header>`, `<footer>`, `<nav>` opcional).

---

## Fora de escopo neste passo

- Backend / formulário (todos os CTAs vão direto pro WhatsApp).
- Integrações analíticas.
- i18n (página em PT-BR fixo).

Após aprovação, implemento tudo de uma vez.