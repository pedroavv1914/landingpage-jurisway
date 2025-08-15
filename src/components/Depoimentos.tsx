"use client";

import { useMemo } from "react";

type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string; // optional URL (could be initials if empty)
  rating?: number; // 1-5
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "A JurisWay nos apoiou em negociações complexas com agilidade e precisão.",
    author: "Diretora Financeira",
    company: "Grupo Orion",
  },
  {
    quote: "Comunicação impecável e estratégia muito bem definida.",
    author: "CEO de Startup",
    company: "SaaS Alpha",
    rating: 5,
  },
  {
    quote: "Entregaram exatamente o que prometeram, com transparência em todo o processo.",
    author: "Empresário do setor varejista",
    company: "Rede Varejo+",
    rating: 5,
  },
  {
    quote: "Excelente abordagem preventiva, reduziram nossos riscos e custos.",
    author: "Head Jurídico",
    company: "FinTech Nova",
    rating: 4,
  },
  {
    quote: "Equipe extremamente disponível e técnica.",
    author: "COO",
    company: "LogiX",
    rating: 5,
  },
  {
    quote: "Suporte ágil e preciso — resolveram uma demanda crítica em poucas horas.",
    author: "Gerente de Operações",
    company: "SupplyFlow",
    rating: 5,
  },
  {
    quote: "Orientação clara para due diligence e mitigação de riscos no investimento.",
    author: "Investidor Anjo",
    company: "Venture Club",
    rating: 4,
  },
  {
    quote: "Parceria estratégica no contencioso com visão de negócio e previsibilidade.",
    author: "Diretor Jurídico",
    company: "Grupo Atlas",
    rating: 5,
  },
];

function Initials({ name }: { name: string }) {
  const ini = useMemo(() => name.split(" ").map((s) => s[0]).slice(0, 2).join("").toUpperCase(), [name]);
  return (
    <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--brand)]/15 text-[var(--brand)] text-xs font-semibold">
      {ini}
    </span>
  );
}

export default function Depoimentos() {
  return (
    <section id="depoimentos" data-surface="light" className="relative border-t border-black/5 bg-white">
      {/* BG */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(680px_240px_at_85%_-20%,#000_10%,transparent_65%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[11px] text-black/60">
              Prova social
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] bg-clip-text text-transparent">
              O que dizem nossos clientes
            </h2>
            <p className="mt-2 max-w-2xl text-black/70">Resultados e experiência de quem já trabalhou com a gente.</p>
          </div>
        </div>
        {/* Grid showing all testimonials (equal-height cards) */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <blockquote
              key={i}
              className="group relative overflow-hidden flex h-full flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md hover:ring-2 hover:ring-[var(--brand)]"
            >
              {/* Top: quote + rating */}
              <div>
                <div className="mb-3 inline-flex items-center gap-2">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-[var(--brand)]/10 text-[var(--brand)] text-base font-semibold">
                    “
                  </span>
                  {typeof t.rating === "number" && (
                    <div className="flex items-center gap-0.5 text-amber-500/90" aria-label={`Avaliação ${t.rating} de 5`}>
                      {Array.from({ length: t.rating }).map((_, i2) => (
                        <span key={i2}>★</span>
                      ))}
                    </div>
                  )}
                </div>

                <p className="text-[13.5px] leading-relaxed text-black/80">
                  {t.quote}
                </p>
              </div>

              {/* Footer: author */}
              <footer className="mt-4 flex items-center gap-3 text-[12px] text-black/70">
                <Initials name={t.author} />
                <div className="flex flex-col">
                  <span className="font-medium text-black/85">{t.author}</span>
                  <span className="inline-flex items-center gap-2 text-[11.5px]">
                    {t.role ? <span>{t.role}</span> : null}
                    {t.company ? (
                      <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-2.5 py-0.5 text-[10.5px] text-black/60">
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-[var(--brand)]/15 text-[var(--brand)] text-[9px] font-semibold">
                          {t.company.split(" ").map((s) => s[0]).slice(0, 2).join("").toUpperCase()}
                        </span>
                        {t.company}
                      </span>
                    ) : null}
                  </span>
                </div>
              </footer>

              <div aria-hidden className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-[color:color-mix(in_oklab,var(--brand)_28%,transparent)] blur-2xl opacity-40" />
            </blockquote>
          ))}
        </div>

        {/* Trusted by strip */}
        <div className="mt-10 rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-black/60">
            {Array.from(new Set(TESTIMONIALS.map((t) => t.company).filter(Boolean)))
              .slice(0, 8)
              .map((name) => (
                <span key={name} className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-2.5 py-1">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--brand)]/15 text-[var(--brand)] text-[10px] font-semibold">
                    {name!.split(" ").map((s) => s[0]).slice(0, 2).join("").toUpperCase()}
                  </span>
                  {name}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
