"use client";

import { useMemo, useMemo as _useMemo, useState } from "react";

type Area = {
  id: string;
  title: string;
  desc: string;
  tag: "Empresarial" | "Pessoal" | "Compliance" | "Tributário" | "Tecnologia";
  icon: string; // emoji for now; can be replaced by SVG later
  items: string[]; // quick bullets of typical demandas
};

const ALL_AREAS: Area[] = [
  {
    id: "empresarial",
    title: "Direito Empresarial",
    desc: "Contratos, societário, M&A e governança.",
    tag: "Empresarial",
    icon: "🏢",
    items: ["Contratos B2B", "Acordos de sócios", "Due diligence"],
  },
  {
    id: "trabalhista",
    title: "Trabalhista",
    desc: "Consultivo preventivo e contencioso estratégico.",
    tag: "Empresarial",
    icon: "🧑‍💼",
    items: ["Políticas internas", "Acordos coletivos", "Defesas e audiências"],
  },
  {
    id: "civil",
    title: "Cível e Contratos",
    desc: "Gestão de contratos e litígios complexos.",
    tag: "Empresarial",
    icon: "📑",
    items: ["Negociação", "Gestão de riscos", "Disputas"],
  },
  {
    id: "consumidor",
    title: "Consumidor",
    desc: "Adequação de processos e defesa técnica.",
    tag: "Pessoal",
    icon: "🛍️",
    items: ["Regulatório", "Processos CX", "Defesas Procon/JEC"],
  },
  {
    id: "tributario",
    title: "Tributário",
    desc: "Planejamento e contencioso administrativo/judicial.",
    tag: "Tributário",
    icon: "💰",
    items: ["Recuperação de créditos", "Planejamento", "Defesas fiscais"],
  },
  {
    id: "lgpd",
    title: "LGPD & Compliance",
    desc: "Privacidade, segurança e programas de integridade.",
    tag: "Compliance",
    icon: "🛡️",
    items: ["Mapeamento de dados", "Políticas e DPO", "Treinamentos"],
  },
  {
    id: "startups",
    title: "Startups & Tecnologia",
    desc: "VC, vesting, propriedade intelectual e SaaS.",
    tag: "Tecnologia",
    icon: "🚀",
    items: ["Term sheet", "Vesting/ESOP", "PI e software"],
  },
  {
    id: "familia",
    title: "Família & Sucessões",
    desc: "Planejamento sucessório e resolução de conflitos.",
    tag: "Pessoal",
    icon: "👨‍👩‍👧‍👦",
    items: ["Testamentos", "Inventário", "Acordos familiares"],
  },
];

const FILTERS = ["Todos", "Empresarial", "Pessoal", "Compliance", "Tributário", "Tecnologia"] as const;

type Filter = (typeof FILTERS)[number];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-2 py-0.5 text-[10px] font-medium text-black/70">
      {children}
    </span>
  );
}

function AreaCard({ area }: { area: Area }) {
  return (
    <article
      className="group relative rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md hover:ring-2 hover:ring-[var(--brand)] focus-within:ring-2 focus-within:ring-[var(--brand)]"
      tabIndex={0}
      aria-labelledby={`area-${area.id}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-md bg-[var(--brand)]/10 text-[var(--brand)] grid place-items-center text-base">
            <span aria-hidden>{area.icon}</span>
          </div>
          <Badge>{area.tag}</Badge>
        </div>
        <span className="text-[10px] text-black/60">ID: {area.id}</span>
      </div>
      <h3 id={`area-${area.id}`} className="mt-4 text-lg font-semibold text-black">
        {area.title}
      </h3>
      <p className="mt-1 text-sm text-black/70">{area.desc}</p>

      {area.items?.length > 0 && (
        <ul className="mt-3 grid gap-2 text-sm text-black/75">
          {area.items.slice(0, 3).map((it) => (
            <li key={it} className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex items-center gap-3">
        <a
          href={`#contato`}
          className="inline-flex items-center rounded-full bg-[var(--brand)] text-white px-4 py-2 text-xs font-medium hover:bg-[var(--brand-600)]"
        >
          Fale com o time
        </a>
        <button
          className="text-xs font-medium text-[color:var(--brand-600)] hover:underline underline-offset-4"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("metodologia");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Ver casos
        </button>
      </div>

      {/* Decorative glow */}
      <div aria-hidden className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-[color:color-mix(in_oklab,var(--brand)_30%,transparent)] blur-2xl opacity-40" />
    </article>
  );
}

export default function Areas() {
  const [filter, setFilter] = useState<Filter>("Todos");
  const [q, setQ] = useState("");

  const items = useMemo(() => {
    const base = filter === "Todos" ? ALL_AREAS : ALL_AREAS.filter((a) => a.tag === filter);
    if (!q.trim()) return base;
    const t = q.toLowerCase();
    return base.filter((a) =>
      a.title.toLowerCase().includes(t) ||
      a.desc.toLowerCase().includes(t) ||
      a.items.some((i) => i.toLowerCase().includes(t))
    );
  }, [filter, q]);

  const counters = useMemo(() => {
    const map = new Map<Filter, number>();
    FILTERS.forEach((f) => map.set(f, f === "Todos" ? ALL_AREAS.length : ALL_AREAS.filter((a) => a.tag === f).length));
    return map;
  }, []);

  return (
    <section id="areas" data-surface="light" className="relative border-t border-black/5 bg-white">
      {/* BG */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(600px_200px_at_80%_-40%,#000_10%,transparent_60%)]" />
        <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-[color:color-mix(in_oklab,var(--brand)_18%,transparent)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[11px] text-black/60">Nossas frentes</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] bg-clip-text text-transparent">
              Áreas de atuação
            </h2>
            <p className="mt-2 text-black/70">Cobertura completa para as principais demandas empresariais e pessoais.</p>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <div className="hidden md:flex items-center gap-2 overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] md:max-w-[60vw]">
              {/* hide scrollbar for WebKit */}
              <style jsx>{`
                div::-webkit-scrollbar { display: none; }
              `}</style>
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs transition border ${
                    filter === f
                      ? "bg-[var(--brand)] text-white border-transparent"
                      : "border-black/15 text-black/80 bg-white hover:bg-black/5"
                  }`}
                  aria-pressed={filter === f}
                >
                  {f}
                  <span className="ml-1 rounded-full bg-black/10 px-1.5 py-0.5 text-[10px] text-black/70">{counters.get(f)}</span>
                </button>
              ))}
            </div>
            <div className="relative">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Buscar por palavra-chave..."
                className="w-72 rounded-full border border-black/15 bg-white pl-9 pr-3 py-2 text-sm text-black outline-none focus:ring-2 focus:ring-[var(--brand)]"
              />
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-black/40">🔎</span>
            </div>
          </div>
        </div>

        {/* Mobile filters */}
        <div className="mt-4 grid gap-3 md:hidden">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-3 py-1 text-xs transition border ${
                  filter === f
                    ? "bg-[var(--brand)] text-white border-transparent"
                    : "border-black/15 text-black/80 bg-white"
                }`}
              >
                {f}
                <span className="ml-1 rounded-full bg-black/10 px-1.5 py-0.5 text-[10px] text-black/70">{counters.get(f)}</span>
              </button>
            ))}
          </div>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar..."
            className="w-full rounded-full border border-black/15 bg-white px-3 py-2 text-sm text-black outline-none focus:ring-2 focus:ring-[var(--brand)]"
          />
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((area) => (
            <AreaCard key={area.id} area={area} />
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white p-5 shadow-sm sm:flex-row">
          <p className="text-sm text-black/80">
            Não encontrou o que procura? Descreva sua necessidade e indicaremos a frente ideal.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center rounded-full border border-[var(--brand)] text-[var(--brand)] bg-white px-4 py-2 text-xs font-medium hover:bg-[color:color-mix(in_oklab,var(--brand)_8%,white)]"
          >
            Falar com especialista
          </a>
        </div>
      </div>
    </section>
  );
}
