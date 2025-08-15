"use client";

import { useEffect, useMemo, useState } from "react";

type Kpi = { k: string; l: string; value?: number };

function useCountUp(target: number, duration = 1200) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setVal(Math.floor(target * (1 - Math.pow(1 - p, 3)))); // easeOutCubic
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return val;
}

function KpiCard({ label, value, suffix = "" }: { label: string; value: number; suffix?: string }) {
  const n = useCountUp(value);
  return (
    <div className="rounded-lg border border-black/10 bg-white p-3 text-center transition hover:shadow-md">
      <div className="text-lg font-semibold text-black">
        {n}
        {suffix}
      </div>
      <div className="text-[11px] text-black/60">{label}</div>
    </div>
  );
}

function LogoBadge({ text }: { text: string }) {
  return (
    <div className="h-10 rounded-md border border-black/10 bg-white/70 px-3 inline-flex items-center text-xs font-medium text-black/70">
      {text}
    </div>
  );
}

export default function About() {
  const [mode, setMode] = useState<"consultivo" | "contencioso">("consultivo");
  const [showModal, setShowModal] = useState(false);

  const values = [
    { t: "Orientação por dados", d: "Métricas e relatórios executivos em cada etapa." },
    { t: "Comunicação direta", d: "Sem juridiquês: objetivos, prazos e próximos passos." },
    { t: "Antecipação de riscos", d: "Mapeamento preventivo e planos de contingência." },
    { t: "Parceria contínua", d: "Suporte consultivo e contencioso sob demanda." },
  ];

  const approachByMode: Record<typeof mode, string[]> = {
    consultivo: [
      "Mapeamento de riscos e oportunidades",
      "Estruturação de contratos e políticas",
      "Implementação de rotinas e indicadores",
      "Treinamentos e governança",
    ],
    contencioso: [
      "Análise de viabilidade e tese",
      "Plano processual e documentação",
      "Acordos estratégicos e audiências",
      "Gestão de prazos e recursos",
    ],
  };

  const kpis: Record<typeof mode, { value: number; label: string; suffix?: string }[]> = {
    consultivo: [
      { value: 250, label: "projetos concluídos", suffix: "+" },
      { value: 96, label: "acordos favoráveis", suffix: "%" },
      { value: 24, label: "tempo de resposta (h)" },
      { value: 74, label: "NPS" },
    ],
    contencioso: [
      { value: 128, label: "casos ativos" },
      { value: 92, label: "êxito em audiências", suffix: "%" },
      { value: 14, label: "processos em curso" },
      { value: 5, label: "bases LGPD" },
    ],
  };

  const cases = useMemo(
    () => [
      { r: "Acordo extrajudicial em 15 dias", s: "SaaS B2B" },
      { r: "Redução de risco trabalhista em 38%", s: "Varejo" },
      { r: "Contratos padronizados em 30 dias", s: "Fintech" },
    ],
    []
  );

  return (
    <section id="sobre" data-surface="light" className="relative border-t border-black/5 bg-white overflow-hidden">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[color:color-mix(in_oklab,var(--brand)_18%,transparent)] blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[color:color-mix(in_oklab,var(--accent)_18%,transparent)] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(600px_200px_at_20%_-40%,#000_10%,transparent_60%)]" />
      </div>
      {/* Right decorative rail to fill whitespace on large screens */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block w-[32%]">
        <div className="absolute inset-y-6 right-0 w-full rounded-l-3xl border-l border-black/5 bg-[radial-gradient(140%_120%_at_100%_0%,rgba(14,165,233,0.07),transparent_60%)]" />
        <div className="absolute inset-y-6 right-0 w-full rounded-l-3xl opacity-50 [background-image:radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left: mission and values */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[11px] text-black/60">Sobre a JurisWay</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] bg-clip-text text-transparent">Clareza, estratégia e previsibilidade jurídica</h2>
            <p className="mt-4 text-black/70 leading-relaxed max-w-2xl">
              Unimos prática jurídica e visão de negócio para orientar decisões com objetividade. Nosso foco é construir caminhos
              com riscos mapeados, prazos definidos e indicadores que mostram o avanço de cada frente.
            </p>

            {/* Logos row */}
            <div className="mt-6 flex flex-wrap items-center gap-3 opacity-80">
              {"ABCDE".split("").map((c) => (
                <LogoBadge key={c} text={`Cliente ${c}`} />
              ))}
            </div>

            {/* Toggle */}
            <div className="mt-8 inline-flex rounded-full border border-black/10 bg-white p-1 text-sm shadow-sm">
              {([
                { id: "consultivo", label: "Consultivo" },
                { id: "contencioso", label: "Contencioso" },
              ] as const).map((t) => (
                <button
                  key={t.id}
                  onClick={() => setMode(t.id)}
                  className={`relative rounded-full px-4 py-1 transition ${
                    mode === t.id ? "bg-[var(--brand)] text-white" : "text-black/70 hover:bg-black/5"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Values */}
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <li key={v.t} className="flex items-start gap-3 rounded-xl border border-black/10 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <span className="mt-1 inline-grid h-5 w-5 place-items-center rounded-full bg-[var(--brand)]/10 text-[var(--brand)]">
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor"><path d="M7.5 13.2 4.3 10l1.4-1.4 1.8 1.8 6-6L15 5.8z"/></svg>
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-black/90">{v.t}</h3>
                    <p className="mt-1 text-sm text-black/70">{v.d}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* KPIs animated */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {kpis[mode].map((it) => (
                <div key={it.label} className="group relative">
                  <KpiCard value={it.value} suffix={it.suffix} label={it.label} />
                  <div className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-black/10 bg-white px-2 py-1 text-[10px] text-black/70 opacity-0 shadow-sm transition group-hover:opacity-100">
                    {mode === "consultivo" ? "Dados últimos 12 meses" : "Dados em tempo real"}
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="mt-10">
              <div className="text-sm font-medium text-black/80">Como conduzimos</div>
              <ol className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {["Descoberta", "Plano", "Execução", "Resultados"].map((step, i) => (
                  <li key={step} className="relative rounded-xl border border-black/10 bg-white p-4 shadow-sm">
                    <div className="text-xs text-black/60">Etapa {i + 1}</div>
                    <div className="mt-1 font-semibold text-black">{step}</div>
                    <div className="absolute inset-x-0 -bottom-0.5 mx-4 h-0.5 bg-gradient-to-r from-[var(--brand)] to-[var(--accent)]" />
                  </li>
                ))}
              </ol>
            </div>

            {/* Mini cases */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {cases.map((c) => (
                <div key={c.r} className="rounded-xl border border-black/10 bg-white p-4 text-sm shadow-sm transition hover:shadow-md">
                  <div className="font-medium text-black/90">{c.r}</div>
                  <div className="mt-1 text-[11px] text-black/60">Setor: {c.s}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: sticky approach card */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden lg:sticky lg:top-24 rounded-2xl border border-black/20 bg-[radial-gradient(80%_120%_at_100%_-20%,#1e293b_0%,#0b0f14_60%)] p-6 shadow-xl">
              {/* Texture + glow */}
              <div aria-hidden className="pointer-events-none absolute -top-20 -right-24 h-64 w-64 rounded-full bg-[color:color-mix(in_oklab,var(--brand)_35%,transparent)] blur-3xl opacity-40" />
              <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(400px_100px_at_30%_0%,#fff,transparent)]" />

              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-semibold text-white">Nossa abordagem</h3>
                  <p className="mt-1 text-[13px] text-white/70">Processos claros, indicadores e comunicação objetiva.</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-white/80 ring-1 ring-white/10">• Transparente</span>
              </div>

              {/* Guarantee banner */}
              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[12px] text-white/85">
                <span className="mr-2 inline-grid h-5 w-5 place-items-center rounded-full bg-[var(--brand)]/20 text-[var(--brand)]">✓</span>
                Diagnóstico inicial e plano de ação em até 7 dias úteis
              </div>

              {/* Checklist */}
              <ul className="mt-5 grid gap-3 text-sm">
                {approachByMode[mode].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                    <span className="text-white/90">{i}</span>
                  </li>
                ))}
              </ul>

              {/* Testimonial compact */}
              <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white font-semibold">CA</div>
                  <div className="text-sm">
                    <p className="text-white/90 leading-snug">“Ganhamos previsibilidade e reduzimos 35% do tempo de resposta jurídico.”</p>
                    <div className="mt-2 text-[11px] text-white/70">CFO, Cliente A — SaaS B2B</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {(mode === "consultivo"
                  ? [
                      { value: 98, label: "SLA cumprido", suffix: "%" },
                      { value: 14, label: "frentes ativas" },
                      { value: 5, label: "bases LGPD" },
                    ]
                  : [
                      { value: 86, label: "êxito em acordos", suffix: "%" },
                      { value: 12, label: "audiências/mês" },
                      { value: 2, label: "recursos pendentes" },
                    ]
                ).map((m) => (
                  <KpiCard key={m.label} value={m.value} suffix={m.suffix} label={m.label} />
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a href="#contato" className="inline-flex flex-1 items-center justify-center rounded-full bg-[var(--brand)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--brand-600)] shadow-sm">Fale com o time</a>
                <button onClick={() => setShowModal(true)} className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/15">
                  Ver metodologia
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-lg rounded-2xl border border-black/10 bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold">Nossa metodologia</h3>
              <button onClick={() => setShowModal(false)} className="rounded-md p-1 text-black/60 hover:bg-black/5" aria-label="Fechar">✕</button>
            </div>
            <ol className="mt-4 list-decimal pl-5 text-sm text-black/80 space-y-2">
              <li>Imersão inicial e mapeamento de stakeholders</li>
              <li>Definição de objetivos e indicadores</li>
              <li>Plano de execução com frentes paralelas</li>
              <li>Revisões quinzenais com materiais executivos</li>
              <li>Encerramento com lições aprendidas e próximos passos</li>
            </ol>
            <div className="mt-6 flex justify-end gap-2">
              <button onClick={() => setShowModal(false)} className="rounded-full border border-black/15 bg-white px-4 py-2 text-sm hover:bg-black/5">Fechar</button>
              <a href="#contato" onClick={() => setShowModal(false)} className="rounded-full bg-[var(--brand)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--brand-600)]">Falar com o time</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
